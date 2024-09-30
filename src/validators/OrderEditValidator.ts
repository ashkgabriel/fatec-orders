import * as Yup from "yup"

export const OrderEditValidator = () => {
    return Yup.object().shape({
        
        date: Yup.string()
            .required("Campo obrigatório.")
            .min(10, "Campo deve ter ${min} caracteres.")
            .max(10, "Campo deve ter ${max} caracteres."),
        client_id: Yup.number()
            .required("Campo obrigatório.")
            .integer("Deve ser um número inteiro.")
            .min(1, "Campo deve ter ao menos ${min} caracteres."),
        payment_method: Yup.string()
            .required("O campo é obrigatório."),
        quantity: Yup.number()
            .required("Campo é obrigatório.")
            .min(1, "Campo deve ter ao menos ${min} caracteres.")
            .moreThan(0, "Deve ser maior do que 0."),
        total: Yup.number()
            .required("O campo é obrigatório.")
            .min(1, "Campo deve ter ao menos ${min} caracteres.")
    })
}