import React, { useContext, useState } from "react";
import { EmployeeType } from "@/types/types";
import { Button } from "@/components/ui/button";
import { Heart, Trash2 } from "lucide-react";
import { EmployeeActionTypes } from "@/reducers/employee-reducer";
import { EmployeeContext } from "@/context/EmployeeContext";
import { Input } from "@/components/ui/input";

const InitialEditingState = {
  name: false,
  salary: false,
};

type EditingStateType = typeof InitialEditingState;

const Employee: React.FC<EmployeeType> = (props) => {
  const { dispatch } = useContext(EmployeeContext);
  const { name, salary, uuid, promoted } = props;
  const [editingState, setEditingState] =
    useState<EditingStateType>(InitialEditingState);
  const [inputValue, setInputValue] = useState<string | number>("");

  const removeEmployee = () => {
    dispatch({ type: EmployeeActionTypes.REMOVE_EMPLOYEE, payload: { uuid } });
  };

  const updateEmployee = (updatedEmployee: Partial<EmployeeType>) => {
    dispatch({
      type: EmployeeActionTypes.UPDATE_EMPLOYEE,
      payload: { ...props, ...updatedEmployee },
    });
    resetEditingState();
  };

  const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    updateEmployee({ [e.target.name]: e.target.value });
  };

  const resetEditingState = () => {
    setEditingState(InitialEditingState);
    setInputValue("");
  };

  const onEnterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateEmployee({
        [e.currentTarget.name]: e.currentTarget.value,
      });
    }
  };

  const changeEmployeePromotedStatus = () => {
    updateEmployee({ promoted: !props.promoted });
  };

  return (
    <div className="flex justify-between gap-5 border rounded p-5">
      <div className="max-w-40 flex flex-col gap-3">
        {editingState.name ? (
          <Input
            className=""
            type="text"
            name="name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={onEnterDown}
            autoFocus={true}
            onBlur={onInputBlur}
          />
        ) : (
          <p
            className="w-full truncate px-3 py-2.5 text-sm"
            onClick={() => {
              setEditingState({
                ...InitialEditingState,
                name: true,
              });
              setInputValue(name);
            }}
          >
            {name}
          </p>
        )}
        {editingState.salary ? (
          <Input
            className="w-fit mr-auto"
            type="number"
            name="salary"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={onEnterDown}
            autoFocus={true}
            onBlur={onInputBlur}
          />
        ) : (
          <p
            className="w-full px-3 py-2.5 text-sm"
            onClick={() => {
              setEditingState({
                ...InitialEditingState,
                salary: true,
              });
              setInputValue(salary);
            }}
          >
            ${salary}
          </p>
        )}
      </div>
      <div className="flex justify-between flex-col gap-3">
        <Button
          variant="outline"
          onClick={() => changeEmployeePromotedStatus()}
        >
          <Heart fill={promoted ? "#fff" : undefined} />
        </Button>
        <Button variant="outline" onClick={() => removeEmployee()}>
          <Trash2 />
        </Button>
      </div>
    </div>
  );
};

export default Employee;
