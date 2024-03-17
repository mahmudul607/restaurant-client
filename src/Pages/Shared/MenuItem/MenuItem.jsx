
import './MenuItems.css'
const MenuItem = ({menu}) => {

    const {name, price, recipe, image} = menu;

    return (
        <div className="flex flex-row p-4 menu-items my-4">
                        <div className="w-1/3 h-2/5">
                            <div
                                className="  "
                            >
                                <img className="w-full h-full  menu-icons" src={image} alt="" />
                            </div>
                        </div>
                        <div className='w-2/3'>
                            <h2 className=' font-bold text-lg'>{name} ------------------</h2>
                            <p>{recipe}</p>
                        </div>
                        <div className='text-[#D99904] font-bold text-lg'>${price}</div>

                    </div>
    );
};

export default MenuItem;