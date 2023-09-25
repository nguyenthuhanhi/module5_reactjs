import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast, ToastContainer} from "react-toastify";
import {RotatingLines} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css';

export function ContactForm(){
    return(
        <>
            <Formik initialValues={
                {
                    name:"",
                    email:"",
                    phone:"",
                    message:""
                }
            }
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required('Bắt buộc nhập'),
                        email: Yup.string()
                            .required('bắt buộc nhập')
                            .matches( /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                'sai định dạng'),
                        phone: Yup.string()
                            .required('bắt buộc nhập')
                            .matches(/^[0-9]{10}$/,'sai định dạng'),
                        message: Yup.string()
                            .required('Bắt buộc nhập')
                    })}
                    onSubmit={(value,{setSubmitting})=> {
                        setTimeout(()=>{
                            console.log(value);
                            //call API
                            setSubmitting(false)
                            toast("đã submit thành công")
                        },1000)
            } }

            >
                { ({isSubmitting}) => (
                    <div className='container'>
                        <h1>Contact Form</h1>
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Name</label>
                                <Field type="text" className="form-control" id="exampleInputName"
                                       name='name'/>
                                <ErrorMessage name='name' component='span' className='text-danger'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <Field type="text" className="form-control" id="exampleInputEmail1"
                                       name='email'/>
                                <ErrorMessage name='email' component='span' className='text-danger'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                                <Field type="text" className="form-control" id="exampleInputPhone"
                                       name='phone'/>
                                <ErrorMessage name='phone' component='span' className='text-danger'/>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputMessage" className="form-label">Message</label>
                                <Field type="text" className="form-control" id="exampleInputMessage"
                                       name='message'/>
                                <ErrorMessage name='message' component='span' className='text-danger'/>
                            </div>
                            {   isSubmitting ?
                                <RotatingLines
                                    strokeColor="grey"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="96"
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
            <ToastContainer />
        </>


    );
}
