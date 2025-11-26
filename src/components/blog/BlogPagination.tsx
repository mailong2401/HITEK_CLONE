// components/blog/BlogPagination.tsx
import { ArrowLeft, ArrowRight } from "lucide-react";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BlogPagination = ({ currentPage, totalPages, onPageChange }: BlogPaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Trước</span>
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-lg font-semibold transition-all ${
              currentPage === page
                ? "bg-primary text-primary-foreground"
                : "border border-border hover:bg-muted"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors"
      >
        <span>Tiếp</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default BlogPagination;
