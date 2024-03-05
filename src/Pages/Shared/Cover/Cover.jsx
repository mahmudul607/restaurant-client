import { Parallax } from 'react-parallax';

const Cover = ({coverBg, coverTitle}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={coverBg}
        bgImageAlt="the dog"
        strength={-200}
    >
         <div className="hero h-[500px]" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content ">
                <div className=" w-3/4 text-center  h-2/4 m-auto bg-slate-500 bg-opacity-50 p-16">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                   
                </div>
            </div>
        </div>
    </Parallax>

       
    );
};

export default Cover;