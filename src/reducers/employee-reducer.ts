import { EmployeeType } from "@/types/types";
import { storageKey } from "@/constants/constants";
import { useEffect, useReducer, useState } from "react";

export enum EmployeeActionTypes {
  SET_EMPLOYEES = "SET_EMPLOYEES",
  SET_LOADING = "SET_LOADING",
  ADD_EMPLOYEE = "ADD_EMPLOYEE",
  UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE",
  REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE",
}

export type EmployeeAction = {
  type: string;
  payload: any;
};

export const EmployeeInitialState = {
  employees: [] as EmployeeType[],
  loading: true,
};

export type EmployeeState = typeof EmployeeInitialState;
export const employeeReducer = (
  state: EmployeeState,
  action: EmployeeAction,
): EmployeeState => {
  const { payload, type } = action;

  switch (type) {
    case EmployeeActionTypes.SET_LOADING:
      return {
        ...state,
        loading: payload.loading,
      };
    case EmployeeActionTypes.SET_EMPLOYEES:
      return {
        ...state,
        employees: payload.employees,
        loading: false,
      };
    case EmployeeActionTypes.ADD_EMPLOYEE:
      return {
        employees: [...state.employees, payload],
        loading: false,
      };
    case EmployeeActionTypes.UPDATE_EMPLOYEE:
      return {
        employees: state.employees.map((employee) =>
          employee.uuid === payload.uuid ? payload : employee,
        ),
        loading: false,
      };
    case EmployeeActionTypes.REMOVE_EMPLOYEE:
      return {
        employees: state.employees.filter(
          (employee) => employee.uuid !== payload.uuid,
        ),
        loading: false,
      };
    default:
      return state;
  }
};

export const useEmployeeReducer = (
  initialState: EmployeeState = EmployeeInitialState,
) => {
  const [state, dispatch] = useReducer(employeeReducer, initialState);
  const [filteredEmployees, setFilteredEmployees] = useState<EmployeeType[]>(
    state.employees,
  );

  useEffect(() => {
    const storedState = localStorage.getItem(storageKey);
    if (storedState) {
      try {
        const parsedState: EmployeeState = JSON.parse(storedState);
        setTimeout(() => {
          dispatch({
            type: EmployeeActionTypes.SET_EMPLOYEES,
            payload: { employees: parsedState.employees },
          });
        }, 500);
      } catch (error) {
        console.error("Error parsing stored state:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state));
    setFilteredEmployees(state.employees);
  }, [state.employees]);

  return [state, dispatch, filteredEmployees, setFilteredEmployees] as const;
};
