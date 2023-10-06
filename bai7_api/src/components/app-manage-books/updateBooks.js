import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import {TailSpin} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate, useParams} from "react-router-dom";
import * as booksService from "../../service/BooksService"
import {useEffect, useState} from "react";

export function UpdateBooks(){
    const navigate= useNavigate();
    const {id} = useParams();
    const [book, setBook] = useState({
        id:'',
        title:'',
        quantity:''
    });
    useEffect(()=>{
        findById();
    })

    const findById = async () => {
        const result = await booksService.findByIdBook(id);
        setBook(result);
    }
    return book.title!==''? (
        <>
            <Formik initialValues={
                {
                    title:book.title,
                    quantity:book.quantity
                }
            }
                    validationSchema={Yup.object({
                        title: Yup.string()
                            .required('Bắt buộc nhập'),
                        quantity: Yup.string()
                            .required('bắt buộc nhập')
                            .min(1)
                            .matches( /^[1-9]\d*$/,
                                'sai định dạng')
                    })}
                    onSubmit={(values,{setSubmitting})=> {
                        const update = async () => {
                            setSubmitting(false)
                            // eslint-disable-next-line no-undef
                            await booksService.updateBook(id, values)
                            toast("đã update thành công")
                            navigate("/")
                        }
                        update();
                    }
                    }

            >
                { ({isSubmitting}) => (
                    <div className='container'>
                        <h1>Update Book</h1>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputTitle" className="form-label">Title</label>
                                <Field type="text" className="form-control" id="exampleInputTitle"
                                       name='title'/>
                                <ErrorMessage name='title' component='span' className='text-danger'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputQuantity" className="form-label">Quantity</label>
                                <Field type="text" className="form-control" id="exampleInputQuantity"
                                       name='quantity'/>
                                <ErrorMessage name='quantity' component='span' className='text-danger'/>
                            </div>
                            {   isSubmitting ?
                                <TailSpin
                                    height="40"
                                    width="40"
                                    color="#4fa94d"
                                    ariaLabel="tail-spin-loading"
                                    radius="1"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                />
                                :
                                <button type="submit" className="btn btn-primary" disabled={false}>Submit</button>
                            }
                        </Form>
                    </div>
                )
                }
            </Formik>
        </>
    ):""
}
