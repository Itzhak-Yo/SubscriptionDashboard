import { IPackage } from './package';

export interface IContract {
  subscriptionId: number;
  subscriptionName: string;
  subscriptionType: SubscriptionType;
  packages?: IPackage[];
}

export enum SubscriptionType {
  Personal,
  Business,
  Enterprise,
}
