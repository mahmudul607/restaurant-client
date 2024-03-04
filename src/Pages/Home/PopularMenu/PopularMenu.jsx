
import { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('Menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
    },[])
    return (
        <div className='menu my-4'>
            <SectionTitle
                subHeader={"Check it Out"}
                header={"From our menu"}
            ></SectionTitle>
            <div>
                <ul className="grid grid-cols-2 ms:grid-cols-1">
                    
                    {
                        menu.map(item => <MenuItem menu={item} key={item._id}></MenuItem>)
                    }

                </ul>
            </div>

            <div className='text-center '>
                <div className='uppercase mx-auto w-64  border-b-4 rounded-b-xl border-black  p-4 text-xl'>View Full Menu</div>
            </div>

        </div>
    );
};

export default PopularMenu;