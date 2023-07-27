import React, { useEffect, useState } from 'react'
import { getSingleProductApi } from '../api/Api';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getSingleProductApi(id).then((res) => {
            setProduct(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [getSingleProductApi])

  return (
    <div className='container mt-5'>
        <div className="d-flex">
            <img className='object-cover rounded-3' height={'500px'} width={'600px'} src={product.productImage} alt="product Image" />
            <div className='ms-3 mt-4'>
                <span className='fs-3 fw-bold'>
                    {product.productName}
                </span>
                
               <p className='fs-4'>
                     Price: NRP.{product.productPrice}
               </p>
               <p className='fs-4'>
                     Category : {product.productCategory}
               </p>
                <p className='fs-4'>
                    Description : {product.productDescription}
                </p>

                <button className='btn btn-primary'>Add to cart</button>

            </div>
        </div>
    </div>
  )
}

export default ProductDetails
