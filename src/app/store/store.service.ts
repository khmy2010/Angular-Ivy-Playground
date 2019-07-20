export class Store {
  private store = window.localStorage;

  set(key: string, data: any) {
    if (typeof data !== 'string') {
      data = JSON.stringify(data);
    }

    this.store.setItem(key, data);
  }

  get(key: string) {
    try {
      return JSON.parse(this.store.getItem(key));
    }
    catch(_) {
      return this.store.getItem(key);
    }
  }

  remove(key: string) {
    this.store.removeItem(key);
  }

  removeMany(...keys: Array<string>) {
    keys.forEach((key: string) => {
      this.remove(key);
    })
  }

  clear() {
    this.store.clear();
  }
}