import {useEffect, useState} from "react";

import * as ProductService from "../../service/ProductService";

export function ListProducts() {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        fetchApi();
    })
    const fetchApi = async() => {
        const result= await ProductService.findAll();
        setProducts(result);
    }

    return(
        <>
            <h1>Product</h1>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Date</th>
                    <th scope="col">Function</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{item.date}</td>
                            <td>
                                {/*<NavLink to={`/update/${item.id}`} type="button" className="btn btn-success" >Update</NavLink> &nbsp;*/}
                                {/*<button type="button" className="btn btn-danger" onClick={()=> handleDelete(item.id)}>Delete</button>*/}
                                <button type="button" className="btn btn-success">Update</button>&nbsp;
                                <button type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}
