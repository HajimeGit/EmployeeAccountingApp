import React from "react";
import SearchInput from "@/components/Search/SearchInput";
import SearchFilters from "@/components/Search/SearchFilters";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  return (
    <div className="w-full border rounded-md p-6 flex flex-col gap-4 text-2xl">
      <SearchInput placeholder="Search for employees" />
      <SearchFilters />
    </div>
  );
};

export default Search;
