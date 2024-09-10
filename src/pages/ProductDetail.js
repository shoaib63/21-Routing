import {useParams} from 'react-router-dom'

export default function ProductDetailPage() { 

    const params = useParams(); 
    
    const id  = params.productId; 

    return <h1>Product Details! {id} </h1>

}