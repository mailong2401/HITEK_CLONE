// hooks/useBlogPosts.ts
import { useEffect, useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'

export interface BlogAuthor {
  id: string
  name: string
  avatar_url: string | null
  position: string | null
  bio: string | null
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  subtitle: string | null
  excerpt: string | null
  content: string
  thumbnail_url: string | null
  cover_image_url: string | null
  event_date: string | null
  location: string | null
  status: 'draft' | 'published' | 'archived'
  views: number
  meta_title: string | null
  meta_description: string | null
  author: BlogAuthor | null
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string | null
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<BlogCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadBlogPosts = useCallback(async (categorySlug?: string) => {
    setLoading(true)
    setError(null)
    
    try {
      if (!supabase) {
        throw new Error('Supabase client chưa được cấu hình. Kiểm tra biến môi trường.')
      }

      console.log('Đang tải dữ liệu blog từ Supabase...')

      // Build query với join bảng authors
      let query = supabase
        .from('blog_posts')
        .select(`
          *,
          blog_authors (*)
        `)
        .eq('status', 'published')
        .order('published_at', { ascending: false })

      // Lọc theo category nếu có
      if (categorySlug && categorySlug !== 'all') {
        // Giả sử bạn có bảng blog_post_categories để liên kết posts với categories
        query = query.eq('blog_post_categories.categories.slug', categorySlug)
      }

      const { data: postsData, error: postsError } = await query

      if (postsError) {
        console.error('Lỗi khi tải blog posts:', postsError)
        throw new Error(`Lỗi blog posts: ${postsError.message}`)
      }

      // Chuyển đổi dữ liệu từ Supabase sang định dạng BlogPost
      const formattedPosts: BlogPost[] = (postsData || []).map(post => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        subtitle: post.subtitle,
        excerpt: post.excerpt,
        content: post.content,
        thumbnail_url: post.thumbnail_url,
        cover_image_url: post.cover_image_url,
        event_date: post.event_date,
        location: post.location,
        status: post.status,
        views: post.views,
        meta_title: post.meta_title,
        meta_description: post.meta_description,
        author: post.blog_authors ? {
          id: post.blog_authors.id,
          name: post.blog_authors.name,
          avatar_url: post.blog_authors.avatar_url,
          position: post.blog_authors.position,
          bio: post.blog_authors.bio
        } : null,
        published_at: post.published_at,
        created_at: post.created_at,
        updated_at: post.updated_at
      }))

      setPosts(formattedPosts)

      // Load categories
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name')

      if (categoriesError) {
        console.error('Lỗi khi tải categories:', categoriesError)
        setCategories(getFallbackBlogCategories())
      } else {
        setCategories(categoriesData || [])
      }

      // Fallback nếu không có dữ liệu
      if ((!postsData || postsData.length === 0) && posts.length === 0) {
        console.warn('Không có dữ liệu blog posts từ Supabase, sử dụng dữ liệu mẫu')
        const fallbackPosts = getFallbackBlogPosts()
        setPosts(fallbackPosts)
      }
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Lỗi không xác định khi tải dữ liệu blog'
      setError(errorMessage)
      console.error('Error loading blog posts:', err)
      
      // Fallback data khi có lỗi
      const fallbackPosts = getFallbackBlogPosts()
      const fallbackCategories = getFallbackBlogCategories()
      
      setPosts(fallbackPosts)
      setCategories(fallbackCategories)
    } finally {
      setLoading(false)
    }
  }, [])

  const getPostBySlug = useCallback(async (slug: string): Promise<BlogPost | null> => {
    try {
      if (!supabase) {
        throw new Error('Supabase client chưa được cấu hình.')
      }

      const { data: postData, error: postError } = await supabase
        .from('blog_posts')
        .select(`
          *,
          blog_authors (*)
        `)
        .eq('slug', slug)
        .eq('status', 'published')
        .single()

      if (postError) {
        console.error('Lỗi khi tải bài viết:', postError)
        return null
      }

      if (!postData) {
        return null
      }

      // Tăng lượt xem
      await supabase
        .from('blog_posts')
        .update({ views: (postData.views || 0) + 1 })
        .eq('id', postData.id)

      return {
        id: postData.id,
        title: postData.title,
        slug: postData.slug,
        subtitle: postData.subtitle,
        excerpt: postData.excerpt,
        content: postData.content,
        thumbnail_url: postData.thumbnail_url,
        cover_image_url: postData.cover_image_url,
        event_date: postData.event_date,
        location: postData.location,
        status: postData.status,
        views: postData.views + 1, // Cập nhật view count
        meta_title: postData.meta_title,
        meta_description: postData.meta_description,
        author: postData.blog_authors ? {
          id: postData.blog_authors.id,
          name: postData.blog_authors.name,
          avatar_url: postData.blog_authors.avatar_url,
          position: postData.blog_authors.position,
          bio: postData.blog_authors.bio
        } : null,
        published_at: postData.published_at,
        created_at: postData.created_at,
        updated_at: postData.updated_at
      }
    } catch (err) {
      console.error('Error loading post by slug:', err)
      return null
    }
  }, [])

  const getRelatedPosts = useCallback(async (currentPostId: string, limit: number = 3): Promise<BlogPost[]> => {
    try {
      if (!supabase) {
        return getFallbackBlogPosts().slice(0, limit)
      }

      const { data: relatedPosts, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          blog_authors (*)
        `)
        .neq('id', currentPostId)
        .eq('status', 'published')
        .order('published_at', { ascending: false })
        .limit(limit)

      if (error) {
        console.error('Lỗi khi tải bài viết liên quan:', error)
        return getFallbackBlogPosts().slice(0, limit)
      }

      return (relatedPosts || []).map(post => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        subtitle: post.subtitle,
        excerpt: post.excerpt,
        content: post.content,
        thumbnail_url: post.thumbnail_url,
        cover_image_url: post.cover_image_url,
        event_date: post.event_date,
        location: post.location,
        status: post.status,
        views: post.views,
        meta_title: post.meta_title,
        meta_description: post.meta_description,
        author: post.blog_authors ? {
          id: post.blog_authors.id,
          name: post.blog_authors.name,
          avatar_url: post.blog_authors.avatar_url,
          position: post.blog_authors.position,
          bio: post.blog_authors.bio
        } : null,
        published_at: post.published_at,
        created_at: post.created_at,
        updated_at: post.updated_at
      }))
    } catch (err) {
      console.error('Error loading related posts:', err)
      return getFallbackBlogPosts().slice(0, limit)
    }
  }, [])

  useEffect(() => {
    loadBlogPosts()
  }, [loadBlogPosts])

  return { 
    posts, 
    categories, 
    loading, 
    error, 
    reload: loadBlogPosts,
    getPostBySlug,
    getRelatedPosts
  }
}

// Hàm tạo fallback blog posts
function getFallbackBlogPosts(): BlogPost[] {
  return [
    {
      id: '1',
      title: 'Giới thiệu về Hitek Software',
      slug: 'gioi-thieu-hitek-software',
      subtitle: 'Hành trình từ startup đến công ty công nghệ toàn cầu',
      excerpt: 'Khám phá câu chuyện thành công của Hitek Software từ những ngày đầu thành lập đến khi trở thành đối tác công nghệ đáng tin cậy cho các doanh nghiệp trên toàn thế giới.',
      content: 'Nội dung đầy đủ của bài viết...',
      thumbnail_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      cover_image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      event_date: null,
      location: null,
      status: 'published',
      views: 1000,
      meta_title: 'Giới thiệu về Hitek Software',
      meta_description: 'Khám phá câu chuyện thành công của Hitek Software từ những ngày đầu thành lập đến khi trở thành đối tác công nghệ đáng tin cậy',
      author: {
        id: '1',
        name: 'Nguyễn Văn A',
        avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        position: 'CEO & Founder',
        bio: 'Nguyễn Văn A là CEO và người sáng lập Hitek Software với hơn 10 năm kinh nghiệm trong ngành công nghệ.'
      },
      published_at: new Date('2024-01-15').toISOString(),
      created_at: new Date('2024-01-10').toISOString(),
      updated_at: new Date('2024-01-15').toISOString()
    },
    {
      id: '2',
      title: 'Xu hướng công nghệ 2024',
      slug: 'xu-huong-cong-nghe-2024',
      subtitle: 'Những công nghệ sẽ định hình tương lai',
      excerpt: 'Cùng Hitek điểm qua những xu hướng công nghệ nổi bật trong năm 2024 và tác động của chúng đến các ngành công nghiệp.',
      content: 'Nội dung đầy đủ về xu hướng công nghệ 2024...',
      thumbnail_url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      cover_image_url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      event_date: null,
      location: null,
      status: 'published',
      views: 800,
      meta_title: 'Xu hướng công nghệ 2024',
      meta_description: 'Cùng Hitek điểm qua những xu hướng công nghệ nổi bật trong năm 2024 và tác động của chúng đến các ngành công nghiệp.',
      author: {
        id: '2',
        name: 'Trần Thị B',
        avatar_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        position: 'CTO',
        bio: 'Trần Thị B là CTO của Hitek Software, chuyên gia về AI và Machine Learning.'
      },
      published_at: new Date('2024-02-01').toISOString(),
      created_at: new Date('2024-01-25').toISOString(),
      updated_at: new Date('2024-02-01').toISOString()
    },
    {
      id: '3',
      title: 'Best Practices trong phát triển phần mềm',
      slug: 'best-practices-phat-trien-phan-mem',
      subtitle: 'Các nguyên tắc vàng để xây dựng phần mềm chất lượng',
      excerpt: 'Khám phá các best practices mà Hitek áp dụng để đảm bảo chất lượng code và hiệu quả trong quá trình phát triển phần mềm.',
      content: 'Nội dung đầy đủ về best practices...',
      thumbnail_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      cover_image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      event_date: null,
      location: null,
      status: 'published',
      views: 1200,
      meta_title: 'Best Practices trong phát triển phần mềm',
      meta_description: 'Các nguyên tắc vàng để xây dựng phần mềm chất lượng từ đội ngũ Hitek Software',
      author: {
        id: '3',
        name: 'Lê Văn C',
        avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        position: 'Senior Developer',
        bio: 'Lê Văn C là Senior Developer với 8 năm kinh nghiệm trong phát triển phần mềm enterprise.'
      },
      published_at: new Date('2024-02-15').toISOString(),
      created_at: new Date('2024-02-10').toISOString(),
      updated_at: new Date('2024-02-15').toISOString()
    }
  ]
}

// Hàm tạo fallback blog categories
function getFallbackBlogCategories(): BlogCategory[] {
  return [
    { id: '1', name: 'Công nghệ', slug: 'cong-nghe', description: 'Các bài viết về công nghệ mới nhất' },
    { id: '2', name: 'Phát triển phần mềm', slug: 'phat-trien-phan-mem', description: 'Kiến thức và kinh nghiệm phát triển phần mềm' },
    { id: '3', name: 'AI & Machine Learning', slug: 'ai-machine-learning', description: 'Xu hướng và ứng dụng AI trong thực tế' },
    { id: '4', name: 'Quy trình làm việc', slug: 'quy-trinh-lam-viec', description: 'Các quy trình và phương pháp làm việc hiệu quả' },
    { id: '5', name: 'Case Study', slug: 'case-study', description: 'Phân tích các dự án thực tế' }
  ]
}

export default useBlogPosts
