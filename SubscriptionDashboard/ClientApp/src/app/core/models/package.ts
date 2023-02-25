export interface IPackage {
  id: number;
  type: PackageType;
  name: string;
  totalAmount: number;
  usedAmount: number;
}

export enum PackageType {
  Basic,
  Premium,
  Ultimate,
}
