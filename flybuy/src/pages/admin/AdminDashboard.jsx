import React, {useState} from 'react'

const AdminDashboard = () => {

    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')  
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productImage, setProductImage] = useState('')

    // image upload
    const handleImageUpload = (event) =>{
        const file = event.target.files[0]
        const reader = new FileReader()

        reader.onload = () =>{
            setProductImage(reader.result)
        }

        if(file){
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = () => {
        console.log(productName, productPrice)
    }


    return (
        <div className='container mt-3'>
            <div className='d-flex justify-content-between'>
                <h3>Admin Dashboard</h3>
                <button type="button" class="btn btn-danger" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
                    Add Product
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Adding new product</h5>
                                <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form action="">
                                    <label htmlFor="productName">Enter product name</label>
                                    <input onChange={(e) => setProductName(e.target.value)} type="text" className='form-control' id='productName' />

                                    <label htmlFor="productPrice">Enter product price</label>
                                    <input onChange={(e) => setProductPrice(e.target.value)} type="text" className='form-control' id='productPrice' />

                                    {/* select dropdown */}
                                    <label htmlFor="productCategory">Select product category</label>
                                    <select class="form-select" onChange={(e) => setProductCategory(e.target.value)}>
                                        <option selected>Open this select menu</option>
                                        <option value="1">Fashion</option>
                                        <option value="2">Electronics</option>
                                        <option value="3">Sports</option>
                                    </select>

                                    <label htmlFor="productDescription">Enter product description</label>
                                    <textarea onChange={(e) => setProductDescription(e.target.value)} className='form-control' id='productDescription' rows='3'/>
                                    
                                    {/* upload pic */}
                                    <label htmlFor="productImage">Upload product image</label>
                                    <input type="file" onChange={handleImageUpload} className='form-control' id='productImage' />

                                    {
                                        productImage && <img src={productImage} height={'60px'}  className='mt-2 img-fluid w-100' alt="Product Image" />
                                    }



                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={handleSubmit}>Add product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table mt-3">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">Product Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Price</th>
                        <th scope="col">Product Category</th>
                        <th scope="col">Product Description</th>
                        <th scope="col">Action</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img width={70} src="https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_776%2Cy_755/MTk0Njk2MDgyNjkxNzI4NTQ2/ja-morant-shoe.jpg" alt="Product image" />
                        </td>
                        <td>Nike Shoes</td>
                        <td>NPR. 250</td>
                        <td>Fashion</td>
                        <td>High quality shoes</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-success">Edit</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AdminDashboard