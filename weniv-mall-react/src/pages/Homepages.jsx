import React ,{useEffect, useState}from 'react'
import { ProductCard } from '../components/ProductCard/ProductCard'
import './HomePage.css'
// import { data } from '../asset/data/data'
// import GetData from '../components/GetData'
import axios from 'axios';
function Homepages() {
    const [datas, setDatas] = useState([]);
    useEffect(()=>{
        getData();
        console.log('test');
    },[])
    // [] 이면 최초 1번만 실행 
    async function getData() {
        try {
            const response = await axios.get('http://35.76.53.28:8080/mall');
            return setDatas(response.data)
        } catch (err) {
            console.log(err);
        }
    }



  return (
    <main class="product">
    <ul class="product-list">
    {datas.map(item => 
        <ProductCard
            key={item.id} 
            productName={item.productName}
            price={item.price}
            thumbnailImg={item.thumbnailImg}
        />
    )}
    </ul>
    </main>
  )
}

export default Homepages
