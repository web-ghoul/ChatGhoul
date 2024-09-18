import { useContext } from "react";
import * as Yup from "yup";
import { AuthContext } from "../../contexts/AuthContext";

const useEditUserSchema = () => {
  const { user } = useContext(AuthContext);

  const EditUserInitialValues = {
    email: user?.email || "",
    username: user?.username || "",
    gender: user?.gender,
    phone: user?.phone || "",
  };

  const EditUserSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    username: Yup.string().required("Username is required"),
    gender: Yup.string().required("Gender is required"),
    phone: Yup.string().required("Phone Number is required"),
  });

  return { EditUserInitialValues, EditUserSchema };
};

export default useEditUserSchema;
