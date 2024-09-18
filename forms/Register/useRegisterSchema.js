import * as Yup from "yup";

const useRegisterSchema = () => {
  const RegisterInitialValues = {
    email: "",
    username: "",
    gender: "",
    phone: "",
    password: "",
  };

  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    username: Yup.string().required("Username is required"),
    gender: Yup.string().required("Gender is required"),
    phone: Yup.string().required("Phone Number is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  return { RegisterInitialValues, RegisterSchema };
};

export default useRegisterSchema;
