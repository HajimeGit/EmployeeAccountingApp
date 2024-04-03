import React from "react";
import EmployeeSkeleton from "@/components/Skeleton/EmployeeSkeleton";

const EmployeeSkeletonGroup = () => {
  return (
    <div className="flex w-full gap-8">
      <EmployeeSkeleton />
      <EmployeeSkeleton />
    </div>
  );
};

export default EmployeeSkeletonGroup;
