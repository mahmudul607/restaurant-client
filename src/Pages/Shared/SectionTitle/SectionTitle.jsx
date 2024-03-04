

const SectionTitle = ({subHeader, header}) => {
    return (
        <div className="text-center max-w-72   mx-auto">
            <p className="text-[#D99904] pb-2">--- {subHeader} ---</p>
            <h2 className="border-y-4 py-2 uppercase text-2xl">{header}</h2>
            
        </div>
    );
};

export default SectionTitle;