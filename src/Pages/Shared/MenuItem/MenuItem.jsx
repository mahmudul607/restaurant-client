
import './MenuItems.css'
const MenuItem = ({menu}) => {

    const {name, price, recipe, image} = menu;

    return (
        <div className="flex flex-col min-[640px]:flex-row   p-4 menu-items my-4 ">
                        <div className="min-[640px]:w-1/3 pr-4 w-full ">
                            <div
                                className="  "
                            >
                                <img className="w-full h-full  menu-icons" src={image} alt="" />
                            </div>
                        </div>
                        <div className='min-[640px]:w-2/3 w-full'>
                            <h2 className=' font-bold text-lg'>{name} ------------------</h2>
                            <p className='max-sm:text-xs'>{recipe}</p>
                        </div>
                        <div className='text-[#D99904] font-bold text-lg'>${price}</div>

                    </div>
    );
};

export default MenuItem;