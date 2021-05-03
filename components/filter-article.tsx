import { useState } from "react";

type FilterOptions = "newest" | "popular" | "web dev";

const FilterArticle: React.FC = () => {
  const filterOptions: Array<FilterOptions> = ["newest", "popular", "web dev"];
  const [activeFilter, setActiveFilter] = useState<FilterOptions>(
    filterOptions[0]
  );
  return (
    <div className='article-filters'>
      <span>Filter articles by: </span>
      {filterOptions.map((filter) => {
        return (
          <span
            onClick={() => setActiveFilter(filter)}
            className={`article-filters__filter${
              activeFilter === filter && "--active"
            } capitalize`}
          >
            {filter}
          </span>
        );
      })}
    </div>
  );
};

export default FilterArticle;
