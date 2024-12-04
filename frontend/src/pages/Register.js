import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const apiUrl = process.env.REACT_APP_ENPOINT; 

    const registerHandle = () => {
        axios.post(`${apiUrl}/register`, {
            name: name,
            email: email,
            password: password
          }).then(function (res) {
            console.log(res);
            if(res.data.success == true){
                localStorage.setItem('authToken', res.data.token);
                navigate('/');
            }
          }).catch(function (error) {
            console.log(error);
          });
      };

    return (
        <div className='row justify-content-center align-items-center mt-5'>
            <div className='col-md-4'>
                <div className='card'>
                    <div className='card-body d-flex flex-column'>
                        <div className='d-flex justify-content-center'>
                            <h4 className='title'>Register</h4>
                        </div>
                        <div className='form-group'>
                            <label>Name</label>
                            <input type='text' onChange={(e) => setName(e.target.value)} value={name} className='form-control'></input>
                        </div>
                        <div className='form-group'>
                            <label>Email</label>
                            <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} className='form-control'></input>
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} className='form-control'></input>
                        </div>
                        <div className='d-flex justify-content-start'>
                            <Link to={'/login'} className='fs-6'>Back to login</Link>
                        </div>
                        <button type='submit' onClick={registerHandle} className='btn btn-primary mt-3'>Registrasi</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;