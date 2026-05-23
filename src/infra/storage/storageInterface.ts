export interface StorageInterface {
  getItem: <DataT>(key: string) => Promise<DataT | null>;
  setItem: (key: string, value: any) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}
