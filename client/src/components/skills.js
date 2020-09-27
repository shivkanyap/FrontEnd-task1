import React from 'react'
import axios from 'axios'
import index from '../index.css'
import Add from './Add'

class Form extends React.Component{
    constructor(props){
        super()
        this.state={
            data:[]
            // Num:'',
            // title:'',
            // author:'',
            // publisher:'',
            // stock:''
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:3005/data/all`)
        .then(response=>{
            console.log(response.data)
            this.setState(()=>({
                data:response.data
            }))
        })

    }
    handleAdd=()=>{
       props.history.push('/add')
        
    }
    render(){
        return(
            <div>
                <button type="button" className="btn btn-primary" data-toggle="popover" color="blue"  onClick={this.handleAdd} ><i className="fa fa-plus" aria-hidden="true"></i>Add new Record</button>
                <button className="btn btn-primary"><i className="fa fa-search" aria-hidden="true"></i>Filter</button>
                <button type="button" className="btn btn-primary">Primary</button>
               <table className="table">
                   <thead>
                        <tr className="th">
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Publisher</th>
                        <th scope="col">Stock</th>
                        <th scope="col">gg</th>
                        </tr>
                   </thead>
                   <tbody>
                    <tr  scope="row">
                    {this.state.data.map(da=>{
                           return(
                               <>
                               
                               <td>{da.num}</td>
                               <td>{da.title}</td>
                               <td>{da.author}</td>
                               <td>{da.publisher}</td>
                               <td>{da.stock}</td>
                               <td><button  className="btn btn-warning"><i className="fa fa-pencil" aria-hidden="true"></i>Edit</button><button className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i>Delete</button></td>
                               </>
                           )
                       })}
                    </tr>
                   </tbody>
                   {/* <th className="thead-dark">
                       <td>#</td>
                       <td>Title</td>
                       <td>author</td>
                       <td>Publisher</td>
                       <td>Stock</td>
                       <td> </td>
                   </th>
                   <tr>
                       {this.state.data.map(da=>{
                           return(
                               <div>
                               <td>{da.num}</td>
                               <td>{da.title}</td>
                               <td>{da.author}</td>
                               <td>{da.publisher}</td>
                               <td>{da.stock}</td>
                               <td><button>Edit</button></td>
                               </div>
                           )
                       })}
                     {/* <td>{this.data.num}</td>
                     <td>{this.data.title}</td>
                    <td>{this.data.author}</td>
                    <td>{this.data.publisher}</td>
                    <td>{this.data.stock}</td> */}
                   {/* </tr> */} 
               </table>

            </div>
        )
    }
}

export default Form