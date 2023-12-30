import { useForm } from "react-hook-form";

export const BasicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("BasicForm:: ", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* defaultValue表示表单的默认值 */}
      <input defaultValue="test" {...register("example")} />
      {/* register的第二个参数required表示该项在提交时不能为空 */}
      <input {...register("exampleRequired", { required: true })} />
      {/* 这一行会将表单验证时定义的错误信息展示出来 */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};
