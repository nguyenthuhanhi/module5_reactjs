import {useEffect, useState} from "react";
import * as BooksService from "../../service/BooksService";
import './listBooks.css'
import {NavLink} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";


export function ListBooks() {
    const [books, setBooks] = useState([])

    useEffect(()=> {
        fetchApi();
    },[books])
    const fetchApi = async () => {
      const result = await BooksService.findAll()
        setBooks(result);
    }

    const handleDelete = async (id) => {
        await BooksService.deleteBook(id);
        toast("đã xóa thành công")
    }
    return(
        <>
            <h1>Library  <span><NavLink to='/create' type="button" className="btn btn-success" >Create</NavLink> </span></h1>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Category</th>
                    <th scope="col">State</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map((book) => (
                        <tr>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>{book.category}</td>
                            <td>{book.state}</td>
                            <td>
                                <NavLink to={`/update/${book.id}`} type="button" className="btn btn-success" >Update</NavLink> &nbsp;
                                <button type="button" className="btn btn-danger" onClick={()=> handleDelete(book.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <ToastContainer />
        </>
    )
}
