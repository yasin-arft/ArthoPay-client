import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import AuthContent from "../shared/AuthContent"
import useAxiosPublic from "@/hooks/useAxiosPublic"

// update phone regex /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/
const loginSchema = z.object({
  emailOrPhone: z
    .string()
    .refine((value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const phoneRegex = /(^(\+88|0088)?(01){1}[0123456789]{1}(\d){8})$/;
      return emailRegex.test(value) || phoneRegex.test(value);
    }, {
      message: "Must be a valid email or phone number",
    }),
  pin: z
    .string()
    .regex(/^\d{5}$/, {
      message: "PIN must be exactly 5 digits",
    })
})

const Login = () => {
  const axiosPublic = useAxiosPublic();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      emailOrPhone: "",
      pin: ""
    },
  })

  const onSubmit = (values) => {
    axiosPublic.post('/login', values)
      .then(res => {
        form.reset();
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }

  return (
    <AuthContent formType={'login'} form={form} onSubmit={onSubmit} />
  );
};

export default Login;