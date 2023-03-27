interface ICustomers {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  createdAt: Date;
}
interface ICustomersRequest {
  fullName: string;
  email: string;
  phoneNumber: string;
}

interface ICustomersUpdate {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
}

export type { ICustomers, ICustomersRequest, ICustomersUpdate };
