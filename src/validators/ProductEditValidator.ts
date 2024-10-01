import * as Yup from "yup";

export const ProductEditValidator = () => {
  return Yup.object().shape({
    description: Yup.string()
      .required("Campo obrigatório")
      .min(3, "Campo deve ter ao menos ${min} caracteres.")
      .max(100, "Campo deve ter no máximo ${max} caracteres."),
    brand: Yup.string()
      .required("Campo obrigatório")
      .max(80, "Campo deve ter no máximo ${max} caracteres."),
    value: Yup.number()
      .required("Campo obrigatório")
      .min(0.01, "Campo deve ter ao menos ${min}."),
    weight: Yup.number().min(
      0.01,
      "Campo deve ter ao menos ${min}."
    ),
    flavor: Yup.string(),
  });
};
