import {Field, Form, Formik} from "formik";
import * as ProductService from "../../service/ProductService";
import {toast} from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css'
import {TailSpin} from "react-loader-spinner";

export function CreateProducts() {
    return (
        <>
            <Formik initialValues={{
                name: "",
                quantity: "",
                price: "",
                date: ""
            }}
                    onSubmit={(values, {setSubmitting}) => {
                        const create = async () => {
                            setSubmitting(false)
                            await ProductService.save(values);
                            toast("Thêm mới thành công")
                        }
                        create();
                    }}>
                <div className='container'>
                    <h1>Create Product</h1>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">Name</label>
                            <Field type="text" className="form-control" id="exampleInputName"
                                   name='name' placeholder='Nhập tên sản phẩm'/>
                            {/*<ErrorMessage name='title' component='span' className='text-danger'/>*/}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputQuantity" className="form-label">Quantity</label>
                            <Field type="text" className="form-control" id="exampleInputQuantity"
                                   name='quantity' placeholder='Nhập số lượng sản phẩm'/>
                            {/*<ErrorMessage name='quantity' component='span' className='text-danger'/>*/}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPrice" className="form-label">Price</label>
                            <Field type="text" className="form-control" id="exampleInputPrice"
                                   name='price' placeholder='Nhập giá sản phẩm'/>
                            {/*<ErrorMessage name='title' component='span' className='text-danger'/>*/}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputDate" className="form-label">Date</label>
                            <Field type="date" className="form-control" id="exampleInputPrice"
                                   name='date'/>
                            {/*<ErrorMessage name='title' component='span' className='text-danger'/>*/}
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={false}>Submit</button>

                    </Form>
                </div>
            </Formik>
        </>
    )
}
