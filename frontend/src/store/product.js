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
    console.log(response)
    const data = await response.json()
    set((state) => ({ products: [...state.products, data.product] }))
    return { success: 'Product created successfully' }
  },
  fetchProducts: async () => {
    const response = await fetch('/api/products')
    const data = await response.json()
    set({ products: data.products })

  },
  deleteProduct: async (productId) => {
    const response = await fetch(`/api/products/${productId}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    if (data.success) {
      set((state) => ({ products: state.products.filter((product) => product._id !== productId) }))
      return { success: 'Product deleted successfully' }
    } else {
      return { error: 'Failed to delete product' }
    }
  }
}))