import React from 'react';
import { Outlet } from 'react-router-dom'
import TopBar from 'Layout/TopBar';

export default function Layout() {
    return (
        <div className='l-main'>
            <TopBar />
            <Outlet />
        </div>
    )
}