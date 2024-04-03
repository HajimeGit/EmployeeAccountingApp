import React, { useContext, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EmployeeActionTypes } from "@/reducers/employee-reducer";
import { v4 as uuidv4 } from "uuid";
import { EmployeeContext } from "@/context/EmployeeContext";

interface FormProps {}

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name should be at least 2 characters long",
    })
    .max(50),
  salary: z.coerce.number().positive({
    message: "Salary should be greater than 0",
  }),
});

const EmployeeForm: React.FC<FormProps> = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      salary: 0,
    },
  });

  const { dispatch } = useContext(EmployeeContext);

  function onSubmit(data: z.infer<typeof formSchema>) {
    dispatch({
      type: EmployeeActionTypes.ADD_EMPLOYEE,
      payload: { uuid: uuidv4(), ...data, promoted: false },
    });
    form.reset();
  }

  return (
    <div className="w-full border rounded-md p-6 flex flex-col gap-4 text-base md:text-2xl ">
      <h2 className="text-lg md:text-3xl">Add a new employee</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="What's it's name?"
                      className="w-full md:w-60"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="salary"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      min="0"
                      placeholder="Salary in $"
                      className="w-full md:w-60"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant="outline" type="submit">
              Add
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EmployeeForm;
