import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import AuthContent from "../shared/AuthContent"

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
      // update phone regex /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/
      const phoneRegex = /(^(\+88|0088)?(01){1}[0123456789]{1}(\d){8})$/;
      return phoneRegex.test(value);
    }, {
      message: "Must be a valid phone number",
    }),
  pin: z
    .string()
    .regex(/^\d{5}$/, {
      message: "PIN must be exactly 5 digits",
    })
})

const CreateAccount = () => {
  const form = useForm({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      pin: ""
    },
  })

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <AuthContent formType={'createAccount'} form={form} onSubmit={onSubmit} />
  );
};

export default CreateAccount;