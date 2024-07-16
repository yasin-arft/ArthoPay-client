import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import AuthContent from "../shared/AuthContent"
import useAxiosPublic from "@/hooks/useAxiosPublic"

// update phone regex /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/
const createAccountSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" }),
  email: z
    .string()
    .refine((value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    }, {
      message: "Must be a valid email",
    }),
  phone: z
    .string()
    .refine((value) => {
      const phoneRegex = /(^(\+88|0088)?(01){1}[0123456789]{1}(\d){8})$/;
      return phoneRegex.test(value);
    }, {
      message: "Must be a valid phone number",
    }),
  pin: z
    .string()
    .regex(/^\d{5}$/, {
      message: "PIN must be exactly 5 digits",
    }),
  role: z
    .string()
    .min(1, { message: "Select a role" }),
})

const CreateAccount = () => {
  const axiosPublic = useAxiosPublic();

  const form = useForm({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      pin: "",
      role: ""
    },
  })

  const onSubmit = (values) => {
    axiosPublic.post('/users', values)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err)
      })
    console.log(values)
  }

  return (
    <AuthContent formType={'createAccount'} form={form} onSubmit={onSubmit} />
  );
};

export default CreateAccount;