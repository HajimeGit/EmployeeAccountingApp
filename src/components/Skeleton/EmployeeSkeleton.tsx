import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const EmployeeSkeleton = () => {
  const classes = "w-full h-[20px] rounded-full mb-3";
  const skeletonCount = 3;

  return (
    <>
      {Array.from({ length: skeletonCount }, (_, index) => (
        <Skeleton key={index} className={classes} />
      ))}
    </>
  );
};

export default EmployeeSkeleton;
