import useMyBookings from "../../../hooks/useMyBookings";
import useOrderItems from "../../../hooks/useOrderItems";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const MyBooking = () => {
    const [myBookings] = useMyBookings();
    console.log(myBookings)
    const [orderItems] = useOrderItems();





    return (
        <div>
            <div>
                <SectionTitle
                    header="My Bookings"
                    subHeader="Check Bookings"

                ></SectionTitle>
            </div>

            <h2>foods:{myBookings.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-4 ">

                {
                    orderItems.map((item, index) =>
                        <div className="card w-full bg-base-100 shadow-xl image-full" key={item._id}>
                            <div className="card-actions justify-between z-20 p-2">
                                <h2 className="text-white">{index+1}</h2>
                                <button className="btn btn-square btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                            <figure><img src={item.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <p>${item.price}</p>
                                <p>paid</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-error">Cancel</button>
                                </div>
                            </div>
                        </div>


                    )
                }
            </div>

        </div>
    );
};

export default MyBooking;