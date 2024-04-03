import React, { useContext } from "react";
import Employee from "@/components/List/Employee";
import EmployeeSkeleton from "@/components/Skeleton/EmployeeSkeleton";
import { EmployeeContext } from "@/context/EmployeeContext";

interface EmployeeListProps {}

const EmployeeList: React.FC<EmployeeListProps> = () => {
  const { filteredEmployees, loading } = useContext(EmployeeContext);

  if (loading) {
    return <EmployeeSkeleton />;
  }

  if (filteredEmployees.length === 0) {
    return (
      <div className="border rounded p-6 w-full">
        <h3>No employees found</h3>
      </div>
    );
  }

  return (
    <div className="w-full rounded-md grid grid-cols-1 gap-8 md:grid-cols-2">
      {filteredEmployees.map(({ uuid, promoted, name, salary }) => (
        <Employee
          uuid={uuid}
          key={uuid}
          promoted={promoted}
          name={name}
          salary={salary}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
