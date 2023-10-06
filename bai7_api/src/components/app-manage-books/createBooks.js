import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast, ToastContainer} from "react-toastify";
import {TailSpin} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import * as booksService from "../../service/BooksService"

export function CreateBooks(){
    const navigate = useNavigate();
    return(
        <>
            <Formik initialValues={
                {
                    title:"",
                    quantity:""
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
                        // setTimeout(()=>{
                        //     console.log(value);
                        //     //call API
                        //     setSubmitting(false)
                        //     toast("đã submit thành công")
                        // },1000)
                        const create = async () => {
                            setSubmitting(false)
                            await booksService.save(values)
                            toast("đã submit thành công")
                            navigate("/")
                        }
                        create();
                    }
            }

            >
                { ({isSubmitting}) => (
                    <div className='container'>
                        <h1>Create Book</h1>
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


    );
}
