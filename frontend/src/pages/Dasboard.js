import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function Dashboard(){
    return (
        <div className="layout">
            <Sidebar />

            <main className="main-content">
                <Navbar />
            </main>
        </div>
    );
}

export default Dashboard;