// hooks/useProjects.ts
import { useEffect, useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'

// Cập nhật interface Project để phù hợp với Supabase
export interface ProjectImage {
  id: number
  project_id: number
  image_url: string
  caption: string
  sort_order: number
}

export interface ProjectResult {
  key: string
  value: string
}

export interface Project {
  id: number
  title: string
  category: string
  client: string
  description: string
  duration: string
  team: string
  created_at: string
  image?: string // Add image field
  technologies: string[]
  features: string[]
  results: ProjectResult[]
  images: ProjectImage[]
}

export interface Category {
  id: string
  name: string
  icon: string
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadProjects = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Kiểm tra xem Supabase đã được cấu hình chưa
      if (!supabase) {
        throw new Error('Supabase client chưa được cấu hình. Kiểm tra biến môi trường.')
      }

      console.log('Đang tải dữ liệu từ Supabase...')

      // Lấy projects với tất cả các bảng liên quan
      const { data: projectsData, error: projectsError } = await supabase
        .from('projects')
        .select(`
          *,
          project_technologies(technology),
          project_features(feature),
          project_results(key, value),
          project_images(*)
        `)
        .order('created_at', { ascending: false })

      if (projectsError) {
        console.error('Lỗi khi tải projects:', projectsError)
        throw new Error(`Lỗi projects: ${projectsError.message}`)
      }

      // Chuyển đổi dữ liệu từ Supabase sang định dạng Project
      const formattedProjects: Project[] = (projectsData || []).map(project => ({
        id: project.id,
        title: project.title,
        category: project.category,
        client: project.client,
        description: project.description,
        duration: project.duration,
        team: project.team,
        created_at: project.created_at,
        image: project.project_images?.[0]?.image_url, // Use first image as main image
        technologies: project.project_technologies?.map((t: any) => t.technology) || [],
        features: project.project_features?.map((f: any) => f.feature) || [],
        results: project.project_results?.map((r: any) => ({ 
          key: r.key, 
          value: r.value 
        })) || [],
        images: project.project_images?.map((img: any) => ({
          id: img.id,
          project_id: img.project_id,
          image_url: img.image_url,
          caption: img.caption,
          sort_order: img.sort_order
        })) || []
      }))

      setProjects(formattedProjects)

      // Lấy categories từ Supabase
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('categories')
        .select('*')
        .order('name')

      if (categoriesError) {
        console.error('Lỗi khi tải categories:', categoriesError)
        // Fallback categories
        setCategories(getFallbackCategories())
      } else {
        setCategories(categoriesData || [])
      }

      // Nếu không có projects từ Supabase, sử dụng fallback data
      if ((!projectsData || projectsData.length === 0) && projects.length === 0) {
        console.warn('Không có dữ liệu projects từ Supabase, sử dụng dữ liệu mẫu')
        const fallbackProjects = getFallbackProjects()
        setProjects(fallbackProjects)
      }
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Lỗi không xác định khi tải dữ liệu'
      setError(errorMessage)
      console.error('Error loading projects:', err)
      
      // Fallback data khi có lỗi
      const fallbackProjects = getFallbackProjects()
      const fallbackCategories = getFallbackCategories()
      
      setProjects(fallbackProjects)
      setCategories(fallbackCategories)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadProjects()
  }, [loadProjects])

  return { projects, categories, loading, error, reload: loadProjects }
}

// Hàm tạo fallback projects với cấu trúc mới
function getFallbackProjects(): Project[] {
  return [
    {
      id: 1,
      title: "Hệ thống quản lý sản xuất thông minh",
      category: "enterprise",
      client: "Tập đoàn Sản xuất Công nghiệp",
      description: "Phát triển hệ thống ERP tùy chỉnh cho ngành sản xuất, tích hợp IoT và AI để tối ưu hóa quy trình sản xuất và quản lý chuỗi cung ứng.",
      duration: "6 tháng",
      team: "12 developers",
      created_at: new Date().toISOString(),
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: [".NET Core", "React", "SQL Server", "Azure IoT", "Power BI"],
      features: ["Quản lý sản xuất real-time", "Theo dõi thiết bị IoT", "Báo cáo thông minh", "Tự động hóa quy trình"],
      results: [
        { key: "Hiệu suất", value: "Tăng 40% hiệu suất" },
        { key: "Chi phí", value: "Giảm 25% chi phí" },
        { key: "Chất lượng", value: "Giảm 60% lỗi sản phẩm" }
      ],
      images: [
        {
          id: 1,
          project_id: 1,
          image_url: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          caption: "Giao diện quản lý sản xuất",
          sort_order: 0
        }
      ]
    },
    {
      id: 2,
      title: "Ứng dụng ngân hàng số",
      category: "fintech",
      client: "Ngân hàng TMCP Việt Nam",
      description: "Xây dựng ứng dụng ngân hàng di động với đầy đủ tính năng giao dịch, đầu tư và bảo mật đa lớp.",
      duration: "9 tháng",
      team: "15 developers",
      created_at: new Date().toISOString(),
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Flutter", "Node.js", "PostgreSQL", "Redis", "Kubernetes"],
      features: ["Chuyển khoản đa kênh", "Đầu tư tài chính", "Bảo mật sinh trắc học", "Hỗ trợ 24/7"],
      results: [
        { key: "Người dùng", value: "500,000+ người dùng" },
        { key: "Giao dịch", value: "1M+ giao dịch/ngày" },
        { key: "Đánh giá", value: "4.8/5 trên App Store" }
      ],
      images: [
        {
          id: 2,
          project_id: 2,
          image_url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          caption: "Giao diện ứng dụng ngân hàng",
          sort_order: 0
        }
      ]
    }
  ]
}

// Hàm tạo fallback categories
function getFallbackCategories(): Category[] {
  return [
    { id: 'all', name: 'Tất cả dự án', icon: '🌐' },
    { id: 'enterprise', name: 'Doanh nghiệp', icon: '🏢' },
    { id: 'fintech', name: 'Fintech', icon: '💰' },
    { id: 'web-app', name: 'Web Application', icon: '💻' },
    { id: 'healthcare', name: 'Y tế', icon: '🏥' },
    { id: 'mobile-app', name: 'Mobile App', icon: '📱' },
    { id: 'education', name: 'Giáo dục', icon: '🎓' },
    { id: 'gaming', name: 'Gaming & Blockchain', icon: '🎮' }
  ]
}

export default useProjects
