import React from "react";
import EmployeeSkeleton from "@/components/Skeleton/EmployeeSkeleton";

const EmployeeSkeletonGroup = () => {
  return (
    <div className="w-full rounded-md grid grid-cols-1 gap-8 md:grid-cols-2">
      <EmployeeSkeleton />
      <EmployeeSkeleton />
    </div>
  );
};

export default EmployeeSkeletonGroup;
