import React, { useContext } from "react";
import Employee from "@/components/List/Employee";
import EmployeeSkeleton from "@/components/Skeleton/EmployeeSkeleton";
import { EmployeeContext } from "@/context/EmployeeContext";

interface EmployeeListProps {}

const EmployeeList: React.FC<EmployeeListProps> = () => {
  const { filteredEmployees, loading } = useContext(EmployeeContext);

  return (
    <div className="w-full border rounded-md p-6 flex flex-col gap-2">
      {loading ? (
        <EmployeeSkeleton />
      ) : filteredEmployees.length !== 0 ? (
        filteredEmployees.map((employee) => (
          <Employee
            uuid={employee.uuid}
            key={employee.uuid}
            name={employee.name}
            salary={employee.salary}
          />
        ))
      ) : (
        <h3>No employees found</h3>
      )}
    </div>
  );
};

export default EmployeeList;
