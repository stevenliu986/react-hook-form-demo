import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/**
 * React hook form可以使用第三方库声明schema来做验证，当然，也可以不使用第三方库而是自定义schema来做验证
 */

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export const SchemaValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
};
