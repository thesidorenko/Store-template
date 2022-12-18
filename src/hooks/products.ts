import { IProduct } from '../models';
import { useState, useEffect } from 'react'
import axios from 'axios';

export function useProducts() {

  const [products, setProducts] = useState<IProduct[]>([]);

  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product])
  }

  async function getProduct() {
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
    setProducts(response.data)
  }

  useEffect(() => {
    getProduct()
  }, [])

  return { products, addProduct };
}