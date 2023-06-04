import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function Price() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when element comes into view
    });

    const div = useSpring({
        opacity: inView ? 1 : 0, // Fade in when in view, fade out when not in view
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
    });

    return (
        <section className="main-price">
            <div className="container">
                <animated.div className="price" style={div} ref={ref}>
                    <div className="price-content grid">
                        <div className="price-left grid-col-12">
                            <h3 className="price-h3">Start your 14-day <span>free</span> trial today</h3>
                            <h5 className="price-h5">We're so confident that you'll love Fitr, we're willing to let you try it out for free for 14 days. No credit card required.</h5>
                            <button type="button" className="btn-apple">
                                <div className="btn-apple-text">
                                    <h5>Download on the app store</h5>
                                </div>
                            </button>
                            <p>$12/month or $59/year after 14 days. Cancel anytime.</p>
                        </div>
                        <div className="price-right grid-col-23">
                            <img className="img" width="100%" height="auto" src="https://images.unsplash.com/photo-1560233026-ad254fa8da38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=718&q=80" alt="wesley-tingey-zjO7xkCogZM-unsplash_eidplo" />
                        </div>
                    </div>
                </animated.div>
            </div>
        </section>
    )
}