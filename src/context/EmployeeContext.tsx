import React, { createContext } from "react";
import { EmployeeType } from "@/types/types";
import {
  EmployeeInitialState,
  useEmployeeReducer,
} from "@/reducers/employee-reducer";

type EmployeeContextTypeValue = {
  employees: EmployeeType[];
  loading: boolean;
  dispatch: React.Dispatch<any>;
  filteredEmployees: EmployeeType[];
  setFilteredEmployees: React.Dispatch<React.SetStateAction<EmployeeType[]>>;
};

export const EmployeeContext = createContext<EmployeeContextTypeValue>(
  {} as EmployeeContextTypeValue,
);

interface EmployeeContextProviderProps {
  children: React.ReactNode;
}

export const EmployeeContextProvider: React.FC<
  EmployeeContextProviderProps
> = ({ children }) => {
  const [
    { loading, employees },
    dispatch,
    filteredEmployees,
    setFilteredEmployees,
  ] = useEmployeeReducer(EmployeeInitialState);

  const value = {
    employees: employees,
    loading: loading,
    filteredEmployees,
    setFilteredEmployees,
    dispatch,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};
