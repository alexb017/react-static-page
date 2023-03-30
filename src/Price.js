export default function Price() {
    return (
        <section className="main-price">
            <div className="container">
                <div className="price">
                    <div className="price-content grid">
                        <div className="price-left">
                            <h3 className="price-h3">Start your 14-day <span>free</span> trial today</h3>
                            <h5 className="price-h5">We're so confident that you'll love Fitr, we're willing to let you try it out for free for 14 days. No credit card required.</h5>
                            <button type="button" className="btn-apple">
                                <div className="btn-apple-text">
                                    <h5>Download on the app store</h5>
                                </div>
                            </button>
                            <p>$12/month or $59/year after 14 days. Cancel anytime.</p>
                        </div>
                        <div className="price-right">
                            <img className="img" width="100%" height="auto" src="https://res.cloudinary.com/drbu50m1e/image/upload/v1680125612/react-static-page/wesley-tingey-zjO7xkCogZM-unsplash_eidplo.jpg" alt="wesley-tingey-zjO7xkCogZM-unsplash_eidplo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}