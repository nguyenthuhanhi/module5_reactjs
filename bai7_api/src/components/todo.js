import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useEffect, useState} from "react";


export function Todo() {
    const [titles, setTitels] = useState([]);
    // statee
    const [state, setState] = useState();

    useEffect(() => {
        fetchApi().then(data => console.log(data));
    }, [])

    const fetchApi = async () => {
        try {
            const result = await axios.get('http://localhost:8080/todos')
            setTitels(result.data)
        } catch (e) {
            console.log(e)
        }
    }

    const handleCreateData = async (values) => {
        try {
            const result = await axios.post('http://localhost:8080/todos', values)
            await fetchApi()
            return result.data;
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <>
            <h1>Todo List</h1>
            <Formik initialValues={{
                id: '',
                title: ''
            }} onSubmit={(values) => {
                // eslint-disable-next-line no-undef
                handleCreateData(values).then(data => console.log(data));
            }
            }>
                <Form>
                    <div>
                        <Field type="text" className="form-control" id="exampleInputTodo"
                               name='title'/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </Form>
            </Formik>
            <ul>
                {titles.map((item) => (
                        <li>{item.title}</li>
                    )
                )}
            </ul>

        </>
    )
}
