import { Search, Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "@/data/projectsData";
import { useState } from "react";

interface ProjectsFilterProps {
  selectedCategory: string;
  searchTerm: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (search: string) => void;
}

const ProjectsFilter = ({
  selectedCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange
}: ProjectsFilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    }
  };

  const clearFilters = () => {
    onCategoryChange("all");
    onSearchChange("");
  };

  const hasActiveFilters = selectedCategory !== "all" || searchTerm !== "";

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl sticky top-0 z-20 shadow-lg border-b border-gray-300/50 dark:border-gray-600/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          
          {/* Search Bar với hiệu ứng nâng cao */}
          <motion.div
            variants={itemVariants}
            className="relative w-full lg:w-96"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm kiếm dự án, công nghệ, khách hàng..."
                className="w-full pl-12 pr-12 py-4 border-2 border-gray-300/80 dark:border-gray-600/80 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 hover:border-blue-400/50 dark:hover:border-blue-400/50"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <AnimatePresence>
                {searchTerm && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => onSearchChange("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Mobile Filter Toggle */}
          <motion.button
            variants={itemVariants}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
          >
            <Filter className="w-4 h-4" />
            <span>Bộ lọc</span>
            {hasActiveFilters && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-2 h-2 bg-white rounded-full"
              />
            )}
          </motion.button>

          {/* Category Filters - Desktop */}
          <motion.div
            variants={containerVariants}
            className="hidden lg:flex flex-wrap gap-3"
          >
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              const isSelected = selectedCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onCategoryChange(category.id)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-2xl border-2 transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25"
                      : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 border-gray-300/50 dark:border-gray-600/50 hover:border-blue-400/50 hover:text-blue-600 dark:hover:text-blue-400 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-800/90"
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-current'}`} />
                  <span className="font-semibold whitespace-nowrap">{category.name}</span>
                </motion.button>
              );
            })}

            {/* Clear Filters Button */}
            <AnimatePresence>
              {hasActiveFilters && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span className="text-sm font-medium">Xóa bộ lọc</span>
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Category Filters - Mobile */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden w-full overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    const isSelected = selectedCategory === category.id;
                    
                    return (
                      <motion.button
                        key={category.id}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          onCategoryChange(category.id);
                          setIsFilterOpen(false);
                        }}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                          isSelected
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500"
                            : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 border-gray-300/50 dark:border-gray-600/50"
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="font-medium text-sm">{category.name}</span>
                      </motion.button>
                    );
                  })}
                </div>
                
                {hasActiveFilters && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={clearFilters}
                    className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors border border-gray-300/50 dark:border-gray-600/50 rounded-xl"
                  >
                    <X className="w-4 h-4" />
                    <span className="font-medium">Xóa bộ lọc</span>
                  </motion.button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Active Filters Indicator */}
        <AnimatePresence>
          {hasActiveFilters && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3 mt-4 text-sm text-gray-600 dark:text-gray-400"
            >
              <span className="font-medium">Bộ lọc đang hoạt động:</span>
              {selectedCategory !== "all" && (
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">
                  {categories.find(cat => cat.id === selectedCategory)?.name}
                </span>
              )}
              {searchTerm && (
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">
                  Tìm: "{searchTerm}"
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default ProjectsFilter;