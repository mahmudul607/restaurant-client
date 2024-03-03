

const SectionTitle = ({subHeader, header}) => {
    return (
        <div className="text-center max-w-64   mx-auto">
            <p className="text-[#D99904] pb-2">{subHeader}</p>
            <h2 className="border-y-4 py-2 uppercase">{header}</h2>
            
        </div>
    );
};

export default SectionTitle;