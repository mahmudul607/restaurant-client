

const SectionTitle = ({subHeader, header}) => {
    return (
        <div className="text-center max-w-72   mx-auto">
            {
                subHeader ? <p className="text-[#D99904] pb-2">--- {subHeader} ---</p>:null
            }
            <h2 className="border-y-4 py-2 uppercase md:text-2xl sm:text-sm">{header}</h2>
            
        </div>
    );
};

export default SectionTitle;