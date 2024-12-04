import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>
            <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <div className='d-flex'>
                <i class="bi bi-list" onClick={toggleSidebar}></i>
                    {isOpen && (
                        <h5 className='mx-3'>Sidebar</h5>
                    )}
                </div>
                {isOpen && (
                <>
                    <nav>
                    <ul>
                        <li>
                            <Link to="/">Dashboard</Link>
                        </li>
                    </ul>
                    </nav>
                </>
                )}
            </aside>
        </>
    );
}

export default Sidebar;