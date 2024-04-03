import React, { useContext } from "react";
import { EmployeeContext } from "@/context/EmployeeContext";
import { getEmployeesForPromotion } from "@/lib/utils";

interface InfoProps {}

const Info: React.FC<InfoProps> = () => {
  const { employees } = useContext(EmployeeContext);
  const employeesForPromotion = getEmployeesForPromotion(employees);

  return (
    <div className="w-full border rounded-md p-6 flex flex-col gap-2 text-base md:text-2xl">
      <h2 className="text-lg md:text-3xl">Employee accounting</h2>
      <h3 className="">Total number of employees: {employees.length}</h3>
      <h3 className="">
        The prize will be awarded to : {employeesForPromotion.length}
      </h3>
    </div>
  );
};

export default Info;
