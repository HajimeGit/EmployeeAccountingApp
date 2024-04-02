import React, { useContext } from "react";
import { EmployeeContext } from "@/context/EmployeeContext";

interface InfoProps {}

const Info: React.FC<InfoProps> = () => {
  const { employees } = useContext(EmployeeContext);

  return (
    <div className="w-full border rounded-md p-6 flex flex-col gap-2 text-2xl">
      <h2 className="text-3xl">Employee accounting</h2>
      <h3 className="">Total number of employees: {employees.length}</h3>
      <h3 className="">The prize will be awarded to : 1</h3>
    </div>
  );
};

export default Info;
