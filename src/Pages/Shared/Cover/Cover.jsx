import { Parallax } from 'react-parallax';

const Cover = ({coverBg, coverTitle, para}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={coverBg}
        bgImageAlt="the dog"
        strength={-200}
    >
         <div className="hero lg:h-[500px] " >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content max-lg:pt-24 max-md:text-sm max-sm:text-xs ">
                <div className="  lg:w-3/4 md:w-2/3 sm:w-full text-center  h-2/4 m-auto bg-slate-500 bg-opacity-50 lg:p-16 md:p-8 p-4">
                    <h1 className="mb-5 lg:text-5xl md:text-3xl sm:text-xl font-bold uppercase">{coverTitle}</h1>
                    <p className="mb-5 capitalize">{
                        para? para  : 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'
}</p>
                   
                </div>
            </div>
        </div>
    </Parallax>

       
    );
};

export default Cover;