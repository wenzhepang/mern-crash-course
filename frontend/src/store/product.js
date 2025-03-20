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
  },
  updateProduct: async (productId, updatedProduct) => {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }, // 添加 header
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) {
        throw new Error('Failed to update product'); // 处理 HTTP 错误
      }

      const data = await response.json();

      set((state) => ({
        products: state.products.map((product) =>
          product._id === productId ? data.product : product
        ),
      }));

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message }; // 返回错误信息
    }
  }
}))