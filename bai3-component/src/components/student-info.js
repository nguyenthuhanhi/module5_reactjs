import {Component} from "react";

export class StudentInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            index:0 ,
            name:"",
            address:"",
            age:0,
            action:"ADD STUDENT",// deafault ADD STUDENT
            lists: [
                {name: 'Nam Hoai', address: 'Quang Binh', age: 22},
                {name: 'Ha Nhi', address: 'Quang Nam', age: 20},
                {name: 'Long', address: 'HCM', age: 18}
            ]

        }
        this.changeName =this.changeName.bind(this);
        this.changeAddress =this.changeAddress.bind(this);
        this.changeAge =this.changeAge.bind(this);
    }

    changeName = (e) =>{
        this.setState({
            name:e.target.value
        })
    }
    changeAddress = (e) =>{
        this.setState({
            address :e.target.value
        })
    }
    changeAge = (e) =>{
        this.setState({
            age:e.target.value
        })
    }

    addStudent =() => {0
        if(!this.state.lists.find(item=>item.name===this.state.name)){
            this.setState({
                lists:[
                    ...this.state.lists,
                    { name:this.state.name,address:this.state.address, age: this.state.age}
                ],
                name:"",
                address:"",
                age:""
            })
        }
    }
    EditStudent = (item,index)=>{
        this.setState({
            action:'UPDATE ITEM',
            name:item.name,
            address:item.address,
            age: item.age,
            index:index
        });
    }

    updateStudent = ()=>{
        let data = this.state.lists;
        data.map((item,index)=>{
            if(this.state.index===index){
                item.name = this.state.name;
                item.address = this.state.address;
                item.age = parseInt(this.state.age);
            }
        })
        //set update items
        this.setState({
            lists:data,
            name:"",
            address:"",
            age:"",
            action:'ADD_ITEM'
        })

    }
    deleteStudent=(name)=>this.setState({
        lists:this.state.lists.filter(item=>item.name!==name)


    })

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>{this.state.action}</h1>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="" className="form-control" onChange={this.changeName} value={this.state.name}/>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name=""  className="form-control" onChange={this.changeAddress} value={this.state.address}/>
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="number" name=""  className="form-control" onChange={this.changeAge} value={this.state.age}/>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary"  onClick={this.state.action==='ADD STUDENT'?this.addStudent:this.updateStudent}>Add</button>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <h1>List Students</h1>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Age</th>
                                <th>Modify</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.lists.map((item,index)=>(
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.age}</td>
                                        <td><button onClick={()=>this.EditStudent(item,index)}>modify</button></td>
                                        <td><button onClick={()=>this.deleteStudent(item.name)}>remove</button></td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}
