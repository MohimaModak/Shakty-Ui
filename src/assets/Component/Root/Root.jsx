import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='bg-black text-white h-screen'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;