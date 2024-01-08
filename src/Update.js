import axios from 'axios'
//import React from 'react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Update(){
    //const [data, setData] = useState([])
    const {id} = useParams();
    const [values,setValues] = useState({
        name:"",
        email:"",
        phone:""
    })
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/student/' +id)
            .then(res =>{
                setValues(res.data);
            })
            .catch(err => console.log(err));

    }, [])

    const handleUpdate = (event)=>{
       event.preventDefault();
       axios.put('http://localhost:3000/student/'+id,values)
            .then(res =>{
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err));
    }
    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-dark'>
            <div className='w-50 border bg-light shadow px-5 pt-3 pb-5 rounded' >
                <h1>Update Student Details</h1>
                <hr/>
                <form onSubmit={handleUpdate}>
                    <div className='mb-2'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className='form-control' placeholder='Enter Name'
                       value={values.name}  onChange={e =>setValues({...values,name:e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className='form-control' placeholder='Enter Email'
                      value={values.email}  onChange={e =>setValues({...values,email:e.target.value})}  />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" name="phone" className='form-control' placeholder='Enter phone'
                        value={values.phone} onChange={e =>setValues({...values,phone:e.target.value})}/>
                    </div>
                    <button className='btn btn-success '>Update <i className="fa fa-pencil-square-o  ms-2"></i></button>
                    <Link to="/" className='btn btn-primary  ms-3'>Back <i className="fa fa-backward ms-2"></i></Link>
                </form>

            </div>
        </div>
    )
}

export default Update;
