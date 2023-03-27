import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IContext, IProvidersProps } from "../interfaces/contexts.interfaces";
import {
  ICustomers,
  ICustomersRequest,
} from "../interfaces/customers.interfaces";

import api from "../services/api";

const AuthContext = createContext<IContext>({} as IContext);

const AuthProvider = ({ children }: IProvidersProps) => {
  const [customer, setCustomer] = useState<ICustomers>({} as ICustomers);
  const [customerId, setCustomerId] = useState<string>(
    JSON.parse(localStorage.getItem("@CustomerId") as string) || ""
  );

  const navigate = useNavigate();
  const postRegisterCustomers = async (data: ICustomersRequest) => {
    try {
      const response = await api.post(`/customers/`, data);
      navigate("/");
      toast.success("Cadastrado com Sucesso!");
      setCustomer(response.data);
      setCustomerId(response.data.id);
      localStorage.setItem("@CustomerId", JSON.stringify(response.data.id));
    } catch (error: any) {
      if (error.response.data.message == "Customer alredy exists") {
        toast.error("Email já cadastrado!");
      } else {
        toast.error(error.response.data.message);
      }
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ postRegisterCustomers, customerId, customer }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useApiContext = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthContext, AuthProvider, useApiContext };
