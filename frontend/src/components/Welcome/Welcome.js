import React from 'react';

const Welcome = () => {
    return (
        <div className="text-center bg-image d-flex align-items-center justify-content-center" style={{
            backgroundImage: "url('https://img.lovepik.com/bg/20240108/Shimmering-Light-Animations-and-Royalty-Free-Video-Backgrounds-featuring-Bronze_2745621_wh1200.jpg')",
            backgroundSize: "cover",
            height: "90vh"
        }}>
            <div className="mask">
                <div className="d-flex justify-content-center align-items-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">Welcome to our Video Gallery</h1>
                        <h4 className="mb-3">"A Cloud based Video Storing and Sharing Platform"</h4>
                        <a className="btn btn-outline-light btn-lg" href="/gallery" role="button">Explore Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
