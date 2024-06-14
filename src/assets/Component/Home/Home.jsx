import React from 'react';
import Icon from '../../Gallery/Icon3.png'

const Home = () => {
    return (
        <div>
            <img src={Icon} className='w-[150px]' />
            <div className='flex justify-center items-center'>
            <div className='grid grid-cols-6 gap-x-20'>
                <h1>Accordion</h1>
                <h1>Button</h1>
                <h1>Carousel</h1>
                <h1>Dropdown</h1>
                <h1>Footer</h1>
                <h1>Form</h1>
                <h1>Input</h1>
                <h1>Modal</h1>
                <h1>Navbar</h1>
                <h1>Rating</h1>
                <h1>Progress</h1>
                <h1>Select</h1>
                <h1>Banner</h1>
                <h1>Spinner</h1>
                <h1>Toggle Light</h1>
                <h1>Table</h1>
                <h1>Tooltip</h1>
            </div>
            </div>
        </div>
    );
};

export default Home;