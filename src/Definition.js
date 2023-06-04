import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function Definition() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when element comes into view
    });

    const h2 = useSpring({
        opacity: inView ? 1 : 0, // Fade in when in view, fade out when not in view
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
    });

    const h4 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
    });

    const btn = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
    });

    const img1 = useSpring({
        visibility: inView ? 'visible' : 'hidden',
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
    });

    const img2 = useSpring({
        visibility: inView ? 'visible' : 'hidden',
        transform: inView ? 'translateX(0)' : 'translateX(100px)',
        config: { duration: 1000 },
    });

    const img3 = useSpring({
        visibility: inView ? 'visible' : 'hidden',
        transform: inView ? 'translateX(0)' : 'translateX(-100px)',
        config: { duration: 1000 },
    });

    return (
        <section className="main-definition">
            <div className="container">
                <div className="definition">
                    <div className="definition-content grid">
                        <div className="definition-left grid-col-12">
                            <animated.h2 className="definition-h2" style={h2} ref={ref}>Get competitive with new-found friends</animated.h2>
                            <animated.h4 className="definition-h4" style={h4} ref={ref}>Create unique exercise-based challenges and compete against your friends! We believe that the idea of "winning" is an incredible motivator to help you push your limits when it comes to physical.</animated.h4>
                            <animated.button type="button" className="btn-apple" style={btn} ref={ref}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18.01" height="24" viewBox="0 0 256 315"><path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262" /></svg>
                                <div className="btn-apple-text">
                                    <p className="btn-apple-top-text">Download on the</p>
                                    <p className="btn-apple-bottom-text">App Store</p>
                                </div>
                            </animated.button>
                        </div>
                        <div className="definition-right grid-col-23">
                            <animated.img className="img" style={img1} ref={ref} width="100%" height="auto" src="https://images.unsplash.com/photo-1662961154170-d2421e29f94b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="yoav-aziz--yqiYu9xRBU-unsplash_xxup61" />
                            <animated.img className="img" style={img2} ref={ref} width="100%" height="auto" src="https://images.unsplash.com/photo-1609096458733-95b38583ac4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" alt="blocks-fletcher-3_PaUEEcwMc-unsplash_fkfyct" />
                            <animated.img className="img" style={img3} ref={ref} width="100%" height="auto" src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="fitsum-admasu-oGv9xIl7DkY-unsplash_tuxciut" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}