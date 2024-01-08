import axios from 'axios'
import React, { useEffect, useState } from 'react';
//import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Read(){
    const [data, setData] = useState([])
    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:3000/student/' +id)
            .then(res => setData(res.data))
            .catch(err => console.log(err));

    }, [])
    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-dark'>
           <div className='w-50 border bg-light shadow px-5 pt-3 pb-5 rounded'>
            <h3 className='text-success'>Showing Details Of Students</h3>
            <hr/>
            <div className='mb-2'>
                <strong ><span className='text-info'>Name:</span> {data.name}</strong>
            </div>
            <div className='mb-2'>
                <strong><span className='text-info'>Email:</span> {data.email}</strong>
            </div>
            <div className='mb-2'>
                <strong><span className='text-info'>Phone:</span> {data.phone}</strong>
            </div>
             <Link to={`/update/${id}`} className='btn btn-success'>Edit<i className="fa fa-pencil-square-o  ms-2"></i></Link>
             <Link to="/" className='btn btn-primary ms-3'>Back<i className="fa fa-backward ms-2"></i></Link>   
           </div>
        </div>
    )
}

export default Read;
