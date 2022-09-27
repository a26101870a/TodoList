import React from "react";
import { NavLink } from 'react-router-dom';

const topbarnavItems = [
    {
        display: 'My Tasks',
        to: '/',
    },
    {
        display: 'In Progress',
        to: '/progress',
    },
    {
        display: 'Completed',
        to: '/completed',
    },
]

export default function TopBar() {
    return (
        <div className='l-topbar'>
            <div className='topbar'>
                {topbarnavItems.map((item, index) => (
                    <div key={index}>
                        <NavLink to={item.to}
                            className={({ isActive }) => 'topbar__item ' +
                                (isActive ? 'topbar__item-active ' : '')}>
                            <div className='topbar__display '>{item.display}</div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}