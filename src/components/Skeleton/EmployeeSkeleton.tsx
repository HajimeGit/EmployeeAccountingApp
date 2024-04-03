import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const EmployeeSkeleton = () => {
  const inputClasses = "w-[123px] px-3 py-2.5 text-sm";
  const buttonClasses = "w-[58px] h-[40px]";

  return (
    <div className="w-2/4 h-[134px] flex justify-between gap-5 border rounded p-5">
      <div className="max-w-40 flex flex-col gap-8">
        <Skeleton className={inputClasses} />
        <Skeleton className={inputClasses} />
      </div>
      <div className="flex justify-between flex-col gap-3">
        <Skeleton className={buttonClasses} />
        <Skeleton className={buttonClasses} />
      </div>
    </div>
  );
};

export default EmployeeSkeleton;
