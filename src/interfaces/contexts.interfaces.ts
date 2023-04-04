import { ReactNode } from 'react';
import {
  IContact,
  IContactRequest,
  IContactUpdate,
} from './contacts.interfaces';
import {
  ICustomers,
  ICustomersRequest,
  ICustomersUpdate,
} from './customers.interfaces';

interface IContext {
  postRegisterCustomer(data: ICustomersRequest): void;
  customer: ICustomers;
  customerId: string;
  postRegisterContact(data: IContactRequest): void;
  getAllContacts(): void;
  listContacts: IContact[];
  getAllCustomers(): void;
  listCustomers: ICustomers[];
  registerModel: boolean;
  setRegisterModel(boolean: boolean): void;
  updateCustomer(data: ICustomersUpdate): void;
  updateContact(data: IContactUpdate): void;
  deleteCustomer(id:string): void;
  deleteContact(id:string): void;
  setCustomerId(id: string): void;
  contactId: string;
  setContactId(id: string): void;
  getAllContactsByCustomerId(): void;
  navigate(route: string): void;
  setCustomer(data: ICustomers): void;
}

interface IProvidersProps {
  children: ReactNode;
}

export type { IContext, IProvidersProps };
