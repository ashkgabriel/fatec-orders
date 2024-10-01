import * as Yup from "yup"
import validatorMessages  from "@/constants/validatorMessages"

export const OrderEditValidator = () => {
    const { requiredField, minChar, maxChar } = validatorMessages
    
    return Yup.object().shape({
        
        date: Yup.string()
            .required(requiredField)
            .min(10, minChar)
            .max(10, maxChar),
        client_id: Yup.number()
            .required(requiredField)
            .integer("Deve ser um número inteiro.")
            .min(1, minChar),
        payment_method: Yup.string()
            .required(requiredField),
        quantity: Yup.number()
            .required(requiredField)
            .min(1, minChar)
            .moreThan(0, "Deve ser maior do que 0."),
        total: Yup.number()
            .required(requiredField)
            .min(1, minChar)
    })
}