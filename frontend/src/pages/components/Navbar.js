import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_ENPOINT; 
    const token = localStorage.getItem('authToken');

    const logoutHandle = () => {
        axios.post(`${apiUrl}/logout`, {}, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then(function (res) {
            console.log(res);
            if(res.data.success == true){
                navigate('/login');
            }
          }).catch(function (error) {
            console.log(error);
          });
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex justify-content-end">
                <button type="submit" className="btn btn-primary" onClick={logoutHandle}>Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;