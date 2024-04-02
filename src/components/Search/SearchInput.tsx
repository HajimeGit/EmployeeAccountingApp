import React, { useContext, useEffect, useState } from "react";
import { Input, InputProps } from "@/components/ui/input";
import { EmployeeContext } from "@/context/EmployeeContext";
import { filterEmployeesByName } from "@/lib/utils";

interface SearchInputProps extends InputProps {}

const SearchInput: React.FC<SearchInputProps> = ({ ...props }) => {
  const [inputValue, setInputValue] = useState("");
  const { employees, setFilteredEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    if (!inputValue) {
      setFilteredEmployees(employees);
      return;
    }

    const filtered = filterEmployeesByName(employees, inputValue);
    console.log(filtered);

    setFilteredEmployees(filtered);
  }, [inputValue]);

  return (
    <Input
      {...props}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default SearchInput;
