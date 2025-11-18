import { Search } from "lucide-react";
import { categories } from "@/data/projectsData";

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
  return (
    <section className="py-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm dự án, công nghệ, khách hàng..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25"
                      : "bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 backdrop-blur-sm"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsFilter;