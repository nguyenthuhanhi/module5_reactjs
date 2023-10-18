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
                    quantity:"",
                    category:"",
                    state:""
                }
            }
                    validationSchema={Yup.object({
                        title: Yup.string()
                            .required('Bắt buộc nhập'),
                        quantity: Yup.string()
                            .required('bắt buộc nhập')
                            .min(1)
                            .matches( /^[1-9]\d*$/,
                                'sai định dạng'),
                        category: Yup.string()
                            .required('bắt buộc chọn'),
                        state: Yup.string()
                            .required('bắt buộc chọn')
                    })}
                    onSubmit={(values,{setSubmitting})=> {
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
                            <div className="mb-3">
                                <label htmlFor="exampleInputCategory" className="form-label">Category</label>
                                <Field as="select" className="form-select form-select-sm" aria-label="Small select example" name='category'>
                                    <option selected>Chọn thể loại</option>
                                    <option value="Tâm lý">Tâm lý</option>
                                    <option value="Kỹ năng sống">Kỹ năng sống</option>
                                    <option value="Tội phạm">Tội phạm</option>
                                </Field >
                                <ErrorMessage name='category' component='span' className='text-danger'/>
                            </div>
                            <div>
                                <label htmlFor="exampleInputCategory" className="form-label">State</label>
                                <div className="form-check">
                                    <Field type="radio" className="form-check-input" name="state" value="đã bán"
                                           id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Đã bán
                                        </label>
                                </div>
                                <div className="form-check">
                                    <Field type="radio" className="form-check-input" name="state" value="chưa bán"
                                           id="flexRadioDefault2"/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault2" >
                                            Chưa bán
                                        </label>
                                </div>
                                <ErrorMessage name='state' component='span' className='text-danger'/>
                            </div>

                            <button type="submit" className="btn btn-primary" disabled={false}>Submit</button>
                        </Form>
                    </div>
                )

                }
            </Formik>

        </>


    );
}
