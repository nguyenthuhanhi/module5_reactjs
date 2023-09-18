import {Component} from "react";

export class TodoList extends Component{
        constructor() {
            super();
            this.state = {
                list: [],
                item: ''
            }
        }
        handleChange = (event) =>{
            this.setState({item: event.target.value})
        }
        handleAddItem = () =>{
            if(this.state.item !== ''){
                this.setState({
                    list: [this.state.item, ...this.state.list]
                })
            }

        }

        render() {
            return(
                <>
                    <div>
                        <h2>Todo List</h2>
                        <input type= "text"
                        onChange={event => this.handleChange(event)}/>
                        <button onClick={this.handleAddItem}>Add</button>
                    </div>

                    <table>
                        {this.state.list.map(value =>(
                            <tr>
                                <td>{value}</td>
                            </tr>
                        ))}
                    </table>
                </>
            )
        }
}
