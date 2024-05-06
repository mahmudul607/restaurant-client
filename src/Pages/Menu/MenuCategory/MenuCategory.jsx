import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, imgBg }) => {
    return (
        <div>
            {title && <Cover coverBg={imgBg} coverTitle={title}></Cover>}
            <ul className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">

                {
                    items.map(item => <MenuItem menu={item} key={item._id}></MenuItem>)
                }

            </ul>
            <div className="text-center">
               <Link to={`/food/${title}`}>
               <button className="btn btn-outline border-0 border-b-4 my-4 ">Order Your Favourite Food</button>
               </Link>
            </div>
        </div>
    );
};

export default MenuCategory;