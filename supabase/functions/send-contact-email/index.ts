// File: supabase/functions/send-contact-email/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, company, message, type = 'contact' } = await req.json()

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // 1. GỬI EMAIL CHO ADMIN (bạn)
    const adminEmailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('SENDGRID_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email: 'phamnguyenminhtri249@gmail.com',
                name: 'Admin'
              }
            ],
            subject: `📧 New ${type} message from ${name}`
          }
        ],
        from: {
          email: 'phamnguyenminhtri249@gmail.com',
          name: 'Website Contact Form'
        },
        reply_to: {
          email: email,
          name: name
        },
        content: [
          {
            type: 'text/html',
            value: `
              <div style="font-family: Arial, sans-serif; max-width: 600px;">
                <h2 style="color: #333;">📧 New Contact Message</h2>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
                  <p><strong>👤 Name:</strong> ${name}</p>
                  <p><strong>📧 Email:</strong> ${email}</p>
                  <p><strong>📞 Phone:</strong> ${phone || 'N/A'}</p>
                  <p><strong>🏢 Company:</strong> ${company || 'N/A'}</p>
                  <p><strong>📝 Message:</strong></p>
                  <p style="background: white; padding: 15px; border-left: 4px solid #007bff;">${message || 'No message provided'}</p>
                </div>
                <p><strong>🕒 Received:</strong> ${new Date().toLocaleString()}</p>
              </div>
            `
          }
        ]
      })
    })

    if (!adminEmailResponse.ok) {
      throw new Error(`SendGrid admin email error: ${await adminEmailResponse.text()}`)
    }

    // 2. GỬI EMAIL XÁC NHẬN CHO NGƯỜI DÙNG
    const userEmailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('SENDGRID_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email: email, // Email của người dùng
                name: name
              }
            ],
            subject: `✅ Cảm ơn bạn đã liên hệ - HiTek`
          }
        ],
        from: {
          email: 'phamnguyenminhtri249@gmail.com',
          name: 'HiTek Company'
        },
        content: [
          {
            type: 'text/html',
            value: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; color: white; text-align: center;">
                  <h1 style="margin: 0; font-size: 28px;">Cảm ơn bạn đã liên hệ!</h1>
                </div>
                
                <div style="padding: 30px; background: #f9f9f9;">
                  <p>Xin chào <strong>${name}</strong>,</p>
                  
                  <p>Cảm ơn bạn đã quan tâm đến HiTek. Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi trong thời gian sớm nhất.</p>
                  
                  <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
                    <h3 style="color: #333; margin-top: 0;">Thông tin liên hệ của bạn:</h3>
                    <p><strong>Họ tên:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    ${phone ? `<p><strong>Điện thoại:</strong> ${phone}</p>` : ''}
                    ${company ? `<p><strong>Công ty:</strong> ${company}</p>` : ''}
                    <p><strong>Nội dung:</strong> ${message || 'Không có nội dung'}</p>
                    <p><strong>Thời gian:</strong> ${new Date().toLocaleString('vi-VN')}</p>
                  </div>
                  
                  <p><strong>Thông tin liên hệ của chúng tôi:</strong></p>
                  <ul>
                    <li>📞 Hotline: +84 123 456 789</li>
                    <li>📧 Email: contact@hitek.com.vn</li>
                    <li>🏢 Địa chỉ: Tòa nhà Technology Center, Quận 7, TP. Hồ Chí Minh</li>
                  </ul>
                  
                  <p>Trân trọng,<br><strong>Đội ngũ HiTek</strong></p>
                </div>
                
                <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 12px;">
                  <p>© 2024 HiTek Company. All rights reserved.</p>
                </div>
              </div>
            `
          }
        ]
      })
    })

    if (!userEmailResponse.ok) {
      throw new Error(`SendGrid user email error: ${await userEmailResponse.text()}`)
    }

    // Lưu vào database
    const supabaseClient = createClient(
      'https://uogixxrismdjilphxrka.supabase.co',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { data, error } = await supabaseClient
      .from('contact_messages')
      .insert([
        {
          name,
          email,
          phone,
          company,
          message,
          type,
          status: 'sent'
        }
      ])
      .select()

    if (error) throw error

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Emails sent successfully',
        data 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})