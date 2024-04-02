import React from "react";
import Search from "@/components/Search/Search";
import EmployeeList from "@/components/List/EmployeeList";
import EmployeeForm from "@/components/Form/EmployeeForm";
import Info from "@/components/Info/Info";
import { EmployeeContextProvider } from "@/context/EmployeeContext";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full">
      <EmployeeContextProvider>
        <Info />
        <Search />
        <EmployeeList />
        <EmployeeForm />
      </EmployeeContextProvider>
    </div>
  );
};

export default Dashboard;
