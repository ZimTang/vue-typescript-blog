class LocalCache {
  getItem(key: string): string | null {
    return window.localStorage.getItem(key)
  }

  setItem(key: string, val: unknown) {
    window.localStorage.setItem(key, JSON.stringify(val))
  }

  removeItem(key: string) {
    const val = window.localStorage.getItem(key)
    if (val) {
      window.localStorage.removeItem(key)
    }
  }

  clearAll() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
