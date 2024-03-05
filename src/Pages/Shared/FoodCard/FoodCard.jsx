

const FoodCard = ({foodItem}) => {
    const {name, image, price, recipe} = foodItem;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
                
            </figure>
            <p className="absolute top-12 right-16 bg-black text-white p-2">${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4 text-[#BB8506] hover:text-[#BB8506]">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;