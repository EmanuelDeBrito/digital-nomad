import { StorageInterface } from "../../storageInterface";

class InMemoryStorage implements StorageInterface {
  private store = new Map<string, any>();

  async getItem<DataT>(key: string): Promise<DataT | null> {
    if (!this.store.get(key)) {
      return null;
    }

    return this.store.get(key);
  }

  async setItem(key: string, value: any): Promise<void> {
    this.store.set(key, value);
  }

  async removeItem(key: string): Promise<void> {
    this.store.delete(key);
  }

  clear(): void {
    this.store.clear();
  }
}

export const inMemoryStorage = new InMemoryStorage();
