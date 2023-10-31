import Card from "@/components/products/Card";
import Layout from "../components/template/Layout";
import List from "@/components/products/Lista";
import { useEffect, useState } from "react";

export default function Home() {

  const [list, setList] = useState<any[]>([])

  const getList = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=4');
    const products = await response.json()
    setList(products)
  }

  function buildList(){
    if(list.length > 0){
      return list.map((product)=>{
        return <Card
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
          />
      })
    }
  }

  useEffect(()=>{
    getList()
  }, [])

  return (
    <Layout titulo="Teste" subtitulo="Página inicial">
        <List titulo="Lista 1">
          {
            list.length > 0 ?
            (
              buildList()
            ) : "Carregando"
          }
        </List>
        <List titulo="Lista 1">
          {
            list.length > 0 ?
            (
              buildList()
            ) : "Carregando"
          }
        </List>
        <List titulo="Lista 1">
          {
            list.length > 0 ?
            (
              buildList()
            ) : "Carregando"
          }
        </List>
    </Layout>
  )
}
