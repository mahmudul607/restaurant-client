import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useCategory from '../../../hooks/useCategory';

const PopularMenu = () => {
    const [popularMenu]= useCategory();
    return (
        <div className='menu my-4 '>
            <SectionTitle
                subHeader={"Check it Out"}
                header={"From our menu"}
            ></SectionTitle>
            <div>
                <ul className="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1">
                    
                    {
                        popularMenu.map(item => <MenuItem menu={item} key={item._id}></MenuItem>)
                    }

                </ul>
            </div>

            <div className='text-center '>
                <div className='uppercase mx-auto   border-b-4   btn btn-outline border-0  md:text-xl sm:text-sm'>View Full Menu</div>
            </div>

        </div>
    );
};

export default PopularMenu;