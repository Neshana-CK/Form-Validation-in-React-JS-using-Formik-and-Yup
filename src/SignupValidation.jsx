import * as Yup from 'yup'

export const signupValidation = Yup.object({
    name:Yup.string().min(3).required("please enter name"),
    email:Yup.string().email("please enter vald email").required("please enter email"),
    password:Yup.string().min(5).required("please enter password"),
    cpassword:Yup.string().oneOf([Yup.ref("password")],"password not matched").required("please enter c password")
})