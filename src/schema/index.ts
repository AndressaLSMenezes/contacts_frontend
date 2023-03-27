import * as yup from "yup";

const schema = yup.object({
  fullName: yup.string().required("Nome completo é obrigatório"),
  email: yup
    .string()
    .email("Formato de email invalido.")
    .required("Email é obrigatório"),
  phoneNumber: yup
    .string()
    .required("Telefone obrigatório")
    .min(8, "Telefone precisa ter no mínimo 9 caracteres"),
});

export {schema}