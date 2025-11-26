// components/blog/BlogLoading.tsx
import { motion } from "framer-motion";

const BlogLoading = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
        />
        <p className="text-lg text-muted-foreground">Đang tải bài viết...</p>
      </div>
    </div>
  );
};

export default BlogLoading;
