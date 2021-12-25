import * as Yup from "yup"

const validationSchema1 = Yup.object({
  name: Yup.string().required("required"),
  email: Yup.string().required("required").email("invalid email format"),
  password1: Yup.string().required("required"),
  password2: Yup.string()
    .required("retype password")
    .oneOf([Yup.ref("password1"), null], "Passwords must match"),
})

export { validationSchema1 }
