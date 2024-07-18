import React, { useState } from 'react'
import Icon from './Icon'

const Navbar = () => {

    const [active, setActive] = useState('Dashboard');

    return (
        <nav className='navbar'>
            <Icon />
            <div className='menu'>
                {
                    [
                        'Dashboard',
                        'Collect',
                        'Detect',
                        'Investigate',
                        'Respond',
                        'Configure',
                        'Admin'
                    ].map((item, idx) => (
                        <h5 key={idx}>{item}</h5>
                    ))
                }
            </div>
            <div className="profile">
                <div>
                    <img src="profile.png" alt="prof" />
                    <select>
                        <option>Marketing</option>
                    </select>
                </div>
                <div>
                    <img src="profile2.png" alt="prof" />
                    <select>
                        <option>All Tenants</option>
                    </select>
                </div>
                <div>
                    <img src="notification.png" alt="bell" />
                </div>
                <div>
                    <img src="heart-rate.png" alt="heart" />
                </div>
                <div>
                    <img src="question.png" alt="que" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar