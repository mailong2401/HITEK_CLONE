import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const ContactSection = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    type: "contact" // ← THÊM TRƯỜNG TYPE
  });

  const SUPABASE_URL = 'https://uogixxrismdjilphxrka.supabase.co';
  const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZ2l4eHJpc21kamlscGh4cmthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1MjY1MzAsImV4cCI6MjA3OTEwMjUzMH0.3trKggPKB4l1hHAj3iA2OeM1HdTE2i0gIFTeq9JDUNQ'; // Thay bằng anon key thật

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const submitData = {
      ...formData,
      status: "pending"
    };

    console.log('📤 Sending data:', submitData); // THÊM DÒNG NÀY

    const response = await fetch(`${SUPABASE_URL}/functions/v1/send-contact-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ANON_KEY}`
      },
      body: JSON.stringify(submitData)
    });

    console.log('📨 Response status:', response.status); // THÊM DÒNG NÀY

    const result = await response.json();
    console.log('📝 Result:', result); // THÊM DÒNG NÀY
    
    if (result.success) {
      alert(t('contact.successMessage') || 'Tin nhắn đã được gửi thành công!');
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        type: "contact"
      });
    } else {
      alert(t('contact.errorMessage') || 'Có lỗi xảy ra: ' + (result.error || 'Unknown error'));
    }
  } catch (error) {
    console.error('❌ Error:', error); // THÊM DÒNG NÀY
    alert(t('contact.errorMessage') || 'Lỗi kết nối: ' + error.message);
  } finally {
    setIsLoading(false);
  }
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-4">
            {t('contact.title')}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t('contact.heading')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('contact.phone')}</h3>
                <p className="text-muted-foreground">+84 123 456 789</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('contact.email')}</h3>
                <p className="text-muted-foreground">contact@hitek.com.vn</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('contact.address')}</h3>
                <p className="text-muted-foreground">
                  Tòa nhà Technology Center, Quận 7, TP. Hồ Chí Minh
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Họ và tên"
                  className="bg-background border-border/50 focus:border-primary"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="bg-background border-border/50 focus:border-primary"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Input
                  name="phone"
                  placeholder="Số điện thoại"
                  className="bg-background border-border/50 focus:border-primary"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Input
                  name="company"
                  placeholder="Công ty"
                  className="bg-background border-border/50 focus:border-primary"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Nội dung tin nhắn"
                  rows={5}
                  className="bg-background border-border/50 focus:border-primary resize-none"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isLoading}
              >
                {isLoading ? "Đang gửi..." : "Gửi tin nhắn"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
