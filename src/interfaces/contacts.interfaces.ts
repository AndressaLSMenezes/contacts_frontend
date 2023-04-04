interface IContact {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  customerId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IContactRequest {
  fullName: string;
  phoneNumber: string;
  email: string;
}

interface IContactUpdate {
  fullName?: string;
  phoneNumber?: number;
  email?: string;
}

export type { IContact, IContactRequest, IContactUpdate };
