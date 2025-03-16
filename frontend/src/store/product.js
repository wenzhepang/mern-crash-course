import { create } from 'zustand'

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { error: 'Missing required fields' };
    }
    const response = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    set((state) => ({ products: [...state.products, data.data] }))
    return { success: 'Product created successfully' }
  },
  getProducts: async () => {
    const response = await fetch('/api/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await response.json()
    set({ products: data.data })

    //
  }
}))