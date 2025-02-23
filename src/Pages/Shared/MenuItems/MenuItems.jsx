
const MenuItems = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        <div className='flex justify-between h-28'>
            <img src={image} className='w-[100px] h-[86px]' style={{ borderRadius: '0px 100px 100px 100px' }} alt="" />
            <div className='ml-4'>
                <h3 className='font-cinzel text-xl font-normal dark-color'>{name} ----------</h3>
                <p className='font-inter text-base font-normal ark3-color'>{recipe}</p>
            </div>
            <p>
                <span>${price}</span>
            </p>
        </div>
    );
};

export default MenuItems;