import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IContext, IProvidersProps } from "../interfaces/contexts.interfaces";
import {
  ICustomers,
  ICustomersRequest,
  ICustomersUpdate,
} from '../interfaces/customers.interfaces';

import api from '../services/api';
import { IContact, IContactRequest, IContactUpdate } from "../interfaces/contacts.interfaces";

const AuthContext = createContext<IContext>({} as IContext);

const AuthProvider = ({ children }: IProvidersProps) => {
  const [customer, setCustomer] = useState<ICustomers>(
    (JSON.parse(localStorage.getItem('@Customer') as string) as ICustomers) ||
      ({} as ICustomers)
  );
  const [customerId, setCustomerId] = useState<string>(
    JSON.parse(localStorage.getItem('@CustomerId') as string) || ''
  );
  const [contactId, setContactId] = useState<string>('');

  const [listContacts, setlistContacts] = useState<IContact[]>(
    [] as IContact[]
  );
  const [listCustomers, setlistCustomers] = useState<ICustomers[]>(
    [] as ICustomers[]
  );
  const [registerModel, setRegisterModel] = useState<boolean>(false);

  const navigate = useNavigate();
  const postRegisterCustomer = async (data: ICustomersRequest) => {
    try {
      const response = await api.post(`/customers/`, data);
      toast.success('Cadastrado com Sucesso!');
      getAllCustomers();
    } catch (error: any) {
      if (error.response.data.message == 'Customer alredy exists') {
        toast.error('Email já cadastrado!');
      } else {
        toast.error(error.response.data.message);
      }
      console.error(error);
    }
  };

  const getAllCustomers = async () => {
    try {
      const response = await api.get(`/customers/`);
      setlistCustomers(response.data);
      setlistContacts(response.data);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };

  const updateCustomer = async (data: ICustomersUpdate) => {
    try {
      await api.patch(`/customers/${customerId}`, data);
      getAllCustomers();
      toast.success('Atualizado com Sucesso!');
      setRegisterModel(false);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };

  const deleteCustomer = async (id:string) => {
    try {
      await api.delete(`/customers/${id}`);
      getAllCustomers();
      toast.success('Deletado com Sucesso!');
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };

  const getAllContacts = async () => {
    try {
      const response = await api.get(`/contacts/`);
      setlistContacts(response.data);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };

  const getAllContactsByCustomerId = async () => {
    try {
      const response = await api.get(`/contacts/custumer/${customerId}`);
      setlistContacts(response.data);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };

  const postRegisterContact = async (data: IContactRequest) => {
    try {
      const dataRequest = { ...data, customerId: customerId };
      await api.post(`/contacts/`, dataRequest);
      getAllContactsByCustomerId();
      toast.success('Cadastrado com Sucesso!');
    } catch (error: any) {
      if (error.response.data.message == 'Contact alredy exists') {
        toast.error('Email já cadastrado!');
      } else {
        toast.error(error.response.data.message);
      }
      console.error(error);
    }
  };

  const updateContact = async (data: IContactUpdate) => {
    try {
      await api.patch(`/contacts/${contactId}`, data);
      getAllContactsByCustomerId();
      toast.success('Atualizado com Sucesso!');
      setRegisterModel(false);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };

  const deleteContact = async (id:string) => {
    try {
      await api.delete(`/contacts/${id}`);
      getAllContactsByCustomerId();
      toast.success('Deletado com Sucesso!');
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        postRegisterCustomer,
        customerId,
        customer,
        postRegisterContact,
        getAllContacts,
        listContacts,
        getAllCustomers,
        listCustomers,
        registerModel,
        setRegisterModel,
        updateCustomer,
        updateContact,
        deleteCustomer,
        deleteContact,
        setCustomerId,
        contactId,
        setContactId,
        getAllContactsByCustomerId,
        navigate,
        setCustomer,
      }}
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
