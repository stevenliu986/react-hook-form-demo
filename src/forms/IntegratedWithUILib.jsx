import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@mui/material";

/**
 * 还可与其他的UI库集成一起使用
 * @returns
 */

export const IntegratedWithUILib = () => {
  // 从useForm解构出control对象来操作Controller
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 如果组件没有使用ref，则需要使用Controller来处理注册过程 */}
      <Controller
        name="firstName"
        control={control}
        // React hook form使用render prop来渲染组件，注意，可传入field, fieldState等props
        render={({ field, fieldState }) => {
          console.log("Input field:: ", field);
          console.log("Input fieldState:: ", fieldState);
          return <Input {...field} />;
        }}
      />
      <Controller
        name="select"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          />
        )}
      />
      <input type="submit" />
    </form>
  );
};
