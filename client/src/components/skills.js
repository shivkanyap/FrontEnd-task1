import axios from 'axios';
import Add from './Add';
import Edit from './Edit'
import React, {  useState,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Link} from 'react-router-dom'


function rand() {
    return Math.round(Math.random() * 20) - 10;
}
  
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[1],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Form =(props) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [editopen,seteditOpen]=React.useState(false)

    const [data,setdata]=useState([])
    const [showForm,setshowForm]=useState(false)
    const [showTable,setshowTable]=useState(true)

    const handleEditOpen=()=>{
        seteditOpen(true)
    }
    const handleEditClose=()=>{
        seteditOpen(false)
    }
    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    
    const body = (
    <div style={modalStyle} className={classes.paper}>
         <Add/>
    </div>
    );
 
    const bodyedit=(
        <div style={modalStyle} className={classes.paper}>
        
        <Edit/>
    </div>
    )
    useEffect(()=>{

        axios.get('http://localhost:3005/data/all',{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((response)=>{
            
            setdata(response.data)
        })
        .catch(err=>console.log(err))
    },[])
  
  const handleDelete=(id)=>{
      console.log(id)

   const confirm=window.confirm("Are you sure?")
   if(confirm){
    //    const id=props.match.params.id
       console.log(id)
       axios.delete(`http://localhost:3005/data/delete/${id}`)
       .then(response=>{
           response.send(data)

       })
   }
      

  }
  
    const handleShowForm = () => {
        console.log('hello');
        return (
            <div>  
                <h1>hello</h1>  
            </div>
        );
    };

    const Table = () => {
        return (
        <div>
            <div>
                <button
                type='button'
                className='btn btn-primary'
                data-toggle='popover'
                color='blue'
                onClick={handleOpen}
                >
                <i className='fa fa-plus' aria-hidden='true'></i>Add new Record
                </button>
                <button className='btn btn-primary'>
                <i className='fa fa-search' aria-hidden='true'></i>Filter
                </button>
                <button type='button' className= 'btn btn-primary'>
                Primary
                </button>
                {showForm ? handleShowForm : null}
            </div>
            <div>
                <table className="table">
                <thead>
                    <tr className="th">
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Stock</th>
                    <th>gg</th>
                    </tr>
                </thead>
                <tbody>
                 
                    {data.map(da => {
                        return (
                        <>
                            <tr scope="row" key={da._id}>
                            <td >{da.num}</td>
                            <td>{da.title}</td>
                            <td>{da.author}</td>
                            <td>{da.publisher}</td>
                            <td>{da.stock}</td>
                            <td>
                            <button  type='button'
                className='btn btn-warning'
                data-toggle='popover'
                color='blue'
                onClick={()=>handleEditOpen()}>

                                <i className='fa fa-pencil' aria-hidden='true'></i>
                                <Link to={`edit/${da._id}`}>
                                    Edit
                                </Link>
                                
                            </button>
                            </td>
                            <td>
                            <button className='btn btn-danger' onClick={handleDelete(da._id)}>
                                
                                <i className='fa fa-trash' aria-hidden='true'></i>
                                <Link to={`/delete/${da._id}`}>
                                        Delete
                                </Link>
                            
                            </button>
                            </td>
                            </tr>
                        </>
                        );
                    })}
                  
                </tbody>
                </table>
            </div>
        </div>
        );
    };

    const handleAdd = () => {

        console.log('data',data)
        setshowForm(true)
        setshowTable(false)

    };
  
    return (
      <div>
        {showTable ? Table() : null}
        {showForm ? handleShowForm() : null}

        {/* <button type="button" onClick={handleOpen}>
            Open Modal
        </button> */}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
        {body}
        </Modal>


        <Modal
        open={editopen}
        onClose={handleEditClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {bodyedit}
      </Modal>
        </div>



    );
  
}
export default Form;
