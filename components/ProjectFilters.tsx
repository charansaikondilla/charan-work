import React from 'react';

interface ProjectFiltersProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ categories, activeCategory, onSelectCategory }) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full border-2 transition-all duration-300 focus:outline-none ${
                        activeCategory === category
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/20'
                            : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-700/70 hover:border-slate-500'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default ProjectFilters;