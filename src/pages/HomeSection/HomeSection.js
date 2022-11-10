import React from 'react';

const HomeSection = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://rewildingbritain.imgix.net/images/roe-deer_SS.jpg?auto=format&crop=focalpoint&domain=rewildingbritain.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=1125&ixlib=php-3.3.1&q=82&usm=20&w=2000")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Deer is very beautiful</h1>
                        <p className="mb-5">A wild animal is an animal that is, well, wild. This means that it isn't tame and it lives</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection;