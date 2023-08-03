import React, { useEffect } from 'react'

const AdminOrders = () => {

    
    return (
        <div className="container mt-3">
            <h3>Showing all orders | For Admin!</h3>
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <h6>ORDER - 90MJBN</h6>
                    <h6>Pending</h6>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><img src="https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0ZWdvcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" width="50" /></th>
                                <td>test</td>
                                <td>Mobile</td>
                                <td>123</td>
                                <td>2</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <div>
                        <h6>Order Date : 12/12/2021</h6>
                    </div>
                    <div>
                        <h6>Shipping info : 124 Street ktm</h6>
                    </div>
                    <div>
                        <h6>Total Price : 123</h6>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default AdminOrders
