import { ReactNode } from "react";
import { ICustomers, ICustomersRequest } from "./customers.interfaces";

interface IContext {
  postRegisterCustomers(data: ICustomersRequest): void;
  customer: ICustomers;
  customerId: string
}

interface IProvidersProps {
  children: ReactNode;
}

export type { IContext, IProvidersProps };
