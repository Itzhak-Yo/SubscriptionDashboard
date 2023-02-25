import { IContract } from './contract';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  address?: IAddress;
  contracts?: IContract[];
}

export interface IAddress {
  city: string;
  street: string;
  homeNumber: string;
  postalCode: string;
}
