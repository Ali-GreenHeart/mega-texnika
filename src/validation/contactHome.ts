import * as yup from "yup"

export const contactHomeValidation = yup.object({
    name: yup
        .string()
        .min(3, 'Biz terefde adlar minimum 3 herfli olur')
        .max(30, 'Biz terefde adlar maximum 30 herfli olur')
        .required('Adini yazmalisan!'),
    surname: yup
        .string()
        .min(3, 'Biz terefde soyadlar minimum 3 herfli olur')
        .max(30, 'Biz terefde soyadlar maximum 30 herfli olur')
        .required('Soyadini yazmalisan!'),
    email: yup
        .string()
        .email("Emaili dogru yazin")
        .required('Emailinizi yazin!'),
    phone: yup
        .string()
        .matches(/^\+(?:[0-9]●?){6,14}[0-9]$/, {
            message: "Beynelxalq formada yazin +99450..."
        })
        .required('Telefon nomresini yazin!'),
})

