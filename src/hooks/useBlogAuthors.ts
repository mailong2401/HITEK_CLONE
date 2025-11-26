// hooks/useBlogAuthors.ts
import { useEffect, useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { BlogAuthor } from './useBlogPosts'

export function useBlogAuthors() {
  const [authors, setAuthors] = useState<BlogAuthor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadAuthors = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      if (!supabase) {
        throw new Error('Supabase client chưa được cấu hình.')
      }

      const { data: authorsData, error: authorsError } = await supabase
        .from('blog_authors')
        .select('*')
        .order('name')

      if (authorsError) {
        throw new Error(`Lỗi authors: ${authorsError.message}`)
      }

      setAuthors(authorsData || [])

      if (!authorsData || authorsData.length === 0) {
        const fallbackAuthors = getFallbackAuthors()
        setAuthors(fallbackAuthors)
      }
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Lỗi không xác định khi tải authors'
      setError(errorMessage)
      console.error('Error loading authors:', err)
      
      const fallbackAuthors = getFallbackAuthors()
      setAuthors(fallbackAuthors)
    } finally {
      setLoading(false)
    }
  }, [])

  const getAuthorById = useCallback(async (id: string): Promise<BlogAuthor | null> => {
    try {
      if (!supabase) {
        return getFallbackAuthors().find(author => author.id === id) || null
      }

      const { data: authorData, error } = await supabase
        .from('blog_authors')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error('Lỗi khi tải author:', error)
        return getFallbackAuthors().find(author => author.id === id) || null
      }

      return authorData
    } catch (err) {
      console.error('Error loading author by id:', err)
      return getFallbackAuthors().find(author => author.id === id) || null
    }
  }, [])

  useEffect(() => {
    loadAuthors()
  }, [loadAuthors])

  return { 
    authors, 
    loading, 
    error, 
    reload: loadAuthors,
    getAuthorById
  }
}

function getFallbackAuthors(): BlogAuthor[] {
  return [
    {
      id: '1',
      name: 'Nguyễn Văn A',
      avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      position: 'CEO & Founder',
      bio: 'Nguyễn Văn A là CEO và người sáng lập Hitek Software với hơn 10 năm kinh nghiệm trong ngành công nghệ.'
    },
    {
      id: '2',
      name: 'Trần Thị B',
      avatar_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      position: 'CTO',
      bio: 'Trần Thị B là CTO của Hitek Software, chuyên gia về AI và Machine Learning.'
    },
    {
      id: '3',
      name: 'Lê Văn C',
      avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      position: 'Senior Developer',
      bio: 'Lê Văn C là Senior Developer với 8 năm kinh nghiệm trong phát triển phần mềm enterprise.'
    }
  ]
}

export default useBlogAuthors
