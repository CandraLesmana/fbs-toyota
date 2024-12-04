import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [changeIcon, setChangeIcon] = useState(true);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const collapsHandle = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.classList.toggle('show');
          setChangeIcon(!changeIcon);
        }    
    }

    return (
        <>
            <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <div className='d-flex'>
                <i className="bi bi-list" onClick={toggleSidebar}></i>
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
                        <li>
                            <Link onClick={() => collapsHandle('collaps')} className='d-flex justify-content-between'>
                                Collapse 
                                {changeIcon ? (
                                    <i className="bi bi-caret-down-fill"></i>
                                ) : (
                                    <i className="bi bi-caret-up-fill"></i> 
                                )}
                            </Link>
                            <div className="collapse mx-3" id="collaps">
                                <ul>
                                    <li>
                                        <Link>Item 1</Link>
                                        
                                    </li>
                                    <li>
                                        <Link>Item 2</Link>
                                    </li>
                                    <li>
                                        <Link>Item 3</Link>
                                    </li>
                                </ul>
                            </div>
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