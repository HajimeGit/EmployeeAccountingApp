import React, { useContext } from "react";
import { EmployeeType } from "@/types/types";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { EmployeeActionTypes } from "@/reducers/employee-reducer";
import { EmployeeContext } from "@/context/EmployeeContext";

const Employee: React.FC<EmployeeType> = ({ uuid, name, salary }) => {
  const { dispatch } = useContext(EmployeeContext);

  const removeEmployee = () => {
    dispatch({ type: EmployeeActionTypes.REMOVE_EMPLOYEE, payload: { uuid } });
  };

  return (
    <div className="flex justify-between gap-5 items-center">
      <p className="w-full">{name}</p>
      <p>{salary}$</p>
      <Button variant="outline" onClick={() => removeEmployee()}>
        <Trash2 />
      </Button>
    </div>
  );
};

export default Employee;
