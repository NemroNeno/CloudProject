import React from 'react';

export default function HomeCards() {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">What We Offer</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="assetImages/cardimages/access.jpg" className="card-img-top" alt="Access files anytime, anywhere" />
                        <div className="card-body">
                            <h5 className="card-title">Access files anytime, anywhere</h5>
                            <p className="card-text">
                                Instantly access your files from all your computers, mobile devices, and the web. Whether you're working from home, the office, or the most inspiring places on the planet.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="assetImages/cardimages/backups.jpg" className="card-img-top" alt="Enjoy Complimentary Storage and Bandwidth!" />
                        <div className="card-body">
                            <h5 className="card-title">Enjoy Complimentary Storage and Bandwidth!</h5>
                            <p className="card-text">
                                As a valued user, you get 50MB of complimentary storage space to save your images securely. Additionally, relish the freedom of 100MB in daily bandwidth to effortlessly share and download your visual tales.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="assetImages/cardimages/privacy.jpg" className="card-img-top" alt="Secure & Compliant" />
                        <div className="card-body">
                            <h5 className="card-title">Secure & Compliant</h5>
                            <p className="card-text">
                                Our groundbreaking privacy protection features, enterprise-grade infrastructure, and compliance with widely accepted security and privacy regulations worldwide ensure the safety of your data.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}