// components/blog/BlogError.tsx
import { BookOpen } from "lucide-react";

interface BlogErrorProps {
  error: string;
  onRetry: () => void;
}

const BlogError = ({ error, onRetry }: BlogErrorProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <BookOpen className="w-16 h-16 text-destructive mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Lỗi khi tải dữ liệu</h2>
        <p className="text-muted-foreground mb-4">{error}</p>
        <button 
          onClick={onRetry}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold"
        >
          Thử lại
        </button>
      </div>
    </div>
  );
};

export default BlogError;
