import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function Place() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when element comes into view
    });

    const element = useSpring({
        opacity: inView ? 1 : 0, // Fade in when in view, fade out when not in view
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
    });

    return (
        <section className="main-place">
            <div className="container">
                <animated.div className="place" style={element} ref={ref}>
                    <div className="place-content grid">
                        <h3 className="place-h3 grid-col-12">All in one place.<br /> All on-demand.</h3>
                        <h5 className="place-h5 grid-col-23">Fitr gives you customisable tracking, so you can monitor the things that matter most. See your achievements, celebrate your successes, and see how you can improve.</h5>
                        <div className="places grid-col-13">
                            <div className="places-top">
                                <div className="place-box place-box-color">
                                    <h5>Arms</h5>
                                </div>
                                <div className="place-box">
                                    <img className="img" width="100%" height="100%" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80" alt="evan-wise-wTcD3MwL_VY-unsplash_tgrxjb" />
                                </div>
                                <div className="place-box place-box-color">
                                    <h5>Back</h5>
                                </div>
                                <div className="place-box">
                                    <img className="img" width="100%" height="100%" src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1662&q=80" alt="mor-shani-li4dxZ0KYRw-unsplash_hmafwz" />
                                </div>
                            </div>
                            <div className="places-bottom">
                                <div className="place-box">
                                    <img className="img" width="100%" height="100%" src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="vitalii-pavlyshynets-kcRFW-Hje8Y-unsplash_ofewdq" />
                                </div>
                                <div className="place-box place-box-color">
                                    <h5>Legs</h5>
                                </div>
                                <div className="place-box">
                                    <img className="img" width="100%" height="100%" src="https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="venti-views-I1EWTM5mFEM-unsplash_yzywjt" />
                                </div>
                                <div className="place-box place-box-color">
                                    <h5>Core</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </div>
        </section>
    )
}