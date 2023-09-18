import {Component} from "react";

export class StudentInfo extends Component{
    constructor() {
        super();
        this.state = {
            list: [
                {id: 1, name: 'Nam Hoai', address: 'Quang Binh', age: 22},
                {id: 2, name: 'Ha Nhi', address: 'Quang Nam', age: 20},
                {id: 3, name: 'Long', address: 'HCM', age: 18}
            ]
        }
    }
    render() {
        return(
            <>
                <table className="table table-sm">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map(value => (
                        <tr>
                            <th scope="row">{value.id}</th>
                            <td>{value.name}</td>
                            <td>{value.address}</td>
                            <td>{value.age}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        )
    }
}
