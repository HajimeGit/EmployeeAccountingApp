import React, { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { EmployeeContext } from "@/context/EmployeeContext";
import { filterEmployeesByType } from "@/lib/utils";
import { salaryFilter } from "@/constants/constants";

interface SearchFiltersProps {}

export type FilterType = "all" | "promotion" | "salary";

const FilterButtons: Array<{ id: FilterType; text: string }> = [
  { id: "all", text: "All employees" },
  { id: "promotion", text: "For promotion" },
  { id: "salary", text: `Salary is more than $${salaryFilter}` },
];

const SearchFilters: React.FC<SearchFiltersProps> = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const { employees, setFilteredEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    setFilteredEmployees(filterEmployeesByType(activeFilter, employees));
  }, [activeFilter]);

  return (
    <div>
      {FilterButtons.map((button) => (
        <Button
          key={button.id}
          variant={activeFilter === button.id ? "default" : "outline"}
          onClick={() => setActiveFilter(button.id)}
        >
          {button.text}
        </Button>
      ))}
    </div>
  );
};

export default SearchFilters;
