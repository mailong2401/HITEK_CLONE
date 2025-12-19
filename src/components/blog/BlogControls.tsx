import React from "react";
import { BlogControlsProps } from "./BlogTypes";

const BlogControls: React.FC<BlogControlsProps> = ({
  isAnimating,
  onPrev,
  onNext,
  onViewDetails,
  onViewAllPosts,
  currentPostId,
  prevBtnRef,
  nextBtnRef
}) => {
  return (
    <>
      {/* Container cho tất cả button - CANH TRÁI */}
      <div className="space-y-10 opacity-0 animate-showContent animation-delay-600">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Button - XEM CHI TIẾT */}
          <button
            onClick={(e) => onViewDetails(currentPostId, e)}
            className="bg-primary text-primary-foreground font-medium tracking-wider py-3 px-8 hover:bg-primary/90 transition-colors text-lg min-w-[220px] text-center rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label={`Xem chi tiết bài viết`}
          >
            XEM CHI TIẾT →
          </button>
          
          {/* Nút XEM TẤT CẢ BÀI VIẾT */}
          <button
            onClick={onViewAllPosts}
            className="bg-secondary text-secondary-foreground font-medium tracking-wider py-3 px-8 hover:bg-secondary/80 transition-colors text-lg min-w-[220px] text-center rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            aria-label={`Xem tất cả bài viết`}
          >
            XEM TẤT CẢ BÀI VIẾT
          </button>
        </div>

        {/* Navigation Arrows - NẰM NGANG DƯỚI NÚT XEM CHI TIẾT */}
        <div className="flex items-center gap-4">
          <button
            ref={prevBtnRef}
            onClick={onPrev}
            className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 text-primary-foreground flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg border border-primary/30 hover:border-primary/50"
            disabled={isAnimating}
            aria-label="Xem bài viết trước"
          >
            &lt;
          </button>
          
          <span className="text-primary-foreground/70 text-sm font-medium">
            Chuyển bài
          </span>
          
          <button
            ref={nextBtnRef}
            onClick={onNext}
            className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 text-primary-foreground flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg border border-primary/30 hover:border-primary/50"
            disabled={isAnimating}
            aria-label="Xem bài viết tiếp theo"
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogControls;
