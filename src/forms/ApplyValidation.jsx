import { useForm } from "react-hook-form";

/**
 * 表单验证 - 如果不满足验证条件，表单不会提交。这里没有展示错误信息
 *  1. required - 表示这个field是必须要有值，不能留空。true/false
 *  2. minLength/maxLength - 字符串的最小/大长度范围
 *  3. min/max - 数字的最小/大值范围
 *  4. pattern - 自定义的验证规则，这里的例子使用的是正则
 * @returns 无
 */
export const ApplyValidation = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log("ApplyValidation:: ", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
};
