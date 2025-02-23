import { Parallax } from 'react-parallax';

const Cover = ({ img, coverTitle, coverDescription }) => {
    return (
        <>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div
                    className="hero h-[600px] bg-cover bg-no-repeat bg-center"
                >
                    <div className="w-[850px] text-center">
                        <div className="bg-black bg-opacity-70 py-20 text-white">
                            <h1 className="font-semibold font-cinzel text-5xl uppercase ">{coverTitle}</h1>
                            <p className="font-inter text-base font-medium w-3/4 mx-auto mt-4">
                                {coverDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </Parallax>

        </>
    );
};

export default Cover;