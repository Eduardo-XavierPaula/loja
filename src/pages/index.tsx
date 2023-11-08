import Card from "@/components/products/Card";
import Layout from "../components/template/Layout";
import List from "@/components/products/Lista";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
}

export default function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[][]>([]); // Adicionei um tipo para products

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const categoriesData = await response.json();
      setCategories(categoriesData);
      console.log(categories, categoriesData[0])
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const fetchProductsByCategory = async (category: string) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const productsData = await response.json();
      return productsData;
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      return [];
    }
  }

  const loadProducts = async () => {
    const productsByCategory = await Promise.all(
      categories.map((category) => fetchProductsByCategory(category))
    );
    console.log(categories, productsByCategory)
    setProducts(productsByCategory);
  };



  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      loadProducts();
    }
  }, [categories, isLoading]);

  return (
    <Layout titulo="Teste" subtitulo="Página inicial">
      {isLoading ? (
        "Carregando..."
      ) : (
        <>
          <List key={0} titulo={categories[0]} products={products[0]} isLoading={isLoading} />
          <List key={1} titulo={categories[1]} products={products[1]} isLoading={isLoading} />
          <List key={2} titulo={categories[2]} products={products[2]} isLoading={isLoading} />
          <List key={3} titulo={categories[3]} products={products[3]} isLoading={isLoading} />
        </>
      )
      }
    </Layout>
  );
}
