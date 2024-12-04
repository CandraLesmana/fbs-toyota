import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const apiUrl = process.env.REACT_APP_ENPOINT; 

    const loginHandle = () => {
        axios.post(`${apiUrl}/login`, {
            email: email,
            password: password
          }).then(function (res) {
            console.log(res);
            if(res.data.success == true){
                localStorage.setItem('authToken', res.data.token);
                navigate('/');
            }
            setMessage(res.data.message)
            console.log(res.data.message);
          }).catch(function (error) {
            console.log(error);
            setMessage('Login Failed')
          });
      };

    return (
        <div className='row justify-content-center align-items-center mt-5'>
            <div className='col-md-4'>
                <div className='card'>
                    <div className='card-body d-flex flex-column'>
                        <div className='d-flex justify-content-center'>
                            <h4 className='title'>Login</h4>
                        </div>
                        {message && (
                            <>
                                <div className='alert alert-danger'>{message}</div>
                            </>
                        )}
                        <div className='form-group'>
                            <label>Email</label>
                            <input type='text' onChange={(e) => setEmail(e.target.value)} value={email} className='form-control'></input>
                        </div>
                        <div className='form-group'>
                            <label>Password</label>
                            <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} className='form-control'></input>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <Link to={'/register'} className='fs-6'>Create account if dont have!</Link>
                        </div>
                        <button type='submit' onClick={loginHandle} className='btn btn-primary mt-3'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;