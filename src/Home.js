import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/student') 
            .then(res => setData(res.data))
            .catch
 (err => console.log(err));

    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm("Would tou like to Delete?")
        if (confirm) {
            axios.delete('http://localhost:3000/student/' + id)
                .then(res => {
                    // navigate('/')
                   window.location.reload();
                }).catch(err => console.log(err));
        }
    }
    return (

        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-110 '>
            <h1 className='text-primary bg-dark w-75 text-center'>Information Of Students</h1>
            <div className='w-75 rounded bg-white border shadow p-4'>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className='btn btn-success mb-2'>Add New Student : <i className="fa fa-user"></i></Link>
                </div>
                <table className='table table-striped table-dark table-bordered border-primary table-hover' >
                    <thead>
                        <tr>
                            <th className='table-primary'>ID</th>
                            <th className='table-primary'>Name</th>
                            <th className='table-primary'>Email</th>
                            <th className='table-primary'>Phone</th>
                            <th className='table-primary'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.id}</td>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.phone}</td>
                                    <td>
                                        <Link to={`/read/${d.id}`} className='btn btn-sm btn-outline-info m-2'>Read<i className="fa fa-calendar-check-o ms-2"></i></Link>
                                        <Link to={`/update/${d.id}`} className='btn btn-sm btn-outline-primary m-2'>Edit<i className="fa fa-pencil-square-o  ms-2"></i></Link>
                                        <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-outline-danger'>Delete<i className="fa fa-trash-o  ms-2"></i></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )


}

export default Home;

