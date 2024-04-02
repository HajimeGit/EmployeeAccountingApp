import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { EmployeeType } from "@/types/types";
import { salaryFilter } from "@/constants/constants";
import { FilterType } from "@/components/Search/SearchFilters";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterEmployeesByName(employees: EmployeeType[], name: string) {
  return employees.filter((employee) =>
    employee.name.toLowerCase().startsWith(name.toLowerCase()),
  );
}

export function filterEmployeesByType(
  filter: FilterType,
  employees: EmployeeType[],
) {
  switch (filter) {
    case "all":
      return employees;
    case "salary":
      return employees.filter((employee) => employee.salary > salaryFilter);
    case "promotion":
      return employees;
    default:
      return employees;
  }
}
