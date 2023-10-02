import {useEffect, useState} from "react";
import {Formik} from "formik";
import axios from "axios";
import * as BooksService from "../../service/BooksService";
import './listBooks.css'


export function ListBooks() {
    const [books, setBooks] = useState([])

    useEffect(()=> {
        fetchApi();
    },[])
    const fetchApi = async () => {
      const result = await BooksService.findAll()
        setBooks(result);
    }
    return(
        <>
            <h1>Library  <span><button type="button" className="btn btn-success" >Create</button> </span></h1>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map((book) => (
                        <tr>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <button type="button" className="btn btn-primary">Update</button> &nbsp;
                                <button type="button" className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>

            {/*<Formik initialValues={{*/}
            {/*    id: "",*/}
            {/*    title: "",*/}
            {/*    quantity:""*/}
            {/*}} onSubmit={values => {*/}
            {/*    console.log(values);*/}
            {/*    }*/}
            {/*}*/}
            {/*></Formik>*/}
        </>
    )
}
