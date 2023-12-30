import { useForm } from "react-hook-form";

/**
 * React Hook Form的一个主要概念是使用register将组件注册到hook中，这样可以对表单进行验证及提交
 * @returns 无
 */
export const RegisterFields = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
};
