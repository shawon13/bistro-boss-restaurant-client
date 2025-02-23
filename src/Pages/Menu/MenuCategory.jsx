import React from 'react';
import Cover from '../Shared/Cover/Cover';
import MenuItems from '../Shared/MenuItems/MenuItems';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, img, title, description }) => {
    return (
        <div>
            {
                title && <Cover img={img} coverTitle={title} coverDescription={description}></Cover>
            }
            <div className='grid grid-cols-2 gap-8 mt-16 max-w-screen-lg mx-auto'>
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className="text-center mt-8">
                <Link to={`/order/${title}`}>
                    <button className='btn btn-outline text-black border-b-2 border-t-0 border-x-0 border-black bg-transparent text-base uppercase'>order your favourite food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;