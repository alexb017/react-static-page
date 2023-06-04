import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function Feature() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when element comes into view
    });

    const element1 = useSpring({
        opacity: inView ? 1 : 0, // Fade in when in view, fade out when not in view
        transform: inView ? 'translateX(0)' : 'translateX(-100px)',
        config: { duration: 1000 },
    });

    const img = useSpring({
        visibility: inView ? 'visible' : 'hidden',
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
    });

    return (
        <section className="main-feature">
            <div className="container">
                <animated.div className="feature" style={element1} ref={ref}>
                    <div className="feature-content grid">
                        <div className="feature-left grid-col-12">
                            <h2 className="feature-h2">Say hello to your new superpower</h2>
                            <h5 className="feature-h5">With a library of exercises, plus exciting ways to challenge friends and interact with a global community, Fitr arms you with the power to fight stress, fatigue and lack of focus.</h5>
                        </div>
                        <animated.div className="feature-right grid-col-23" style={img} ref={ref}>
                            <img className="feature-img img" width="100%" height="auto" src="https://images.unsplash.com/photo-1599552683573-9dc48255fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="thomas-yohei-BAlBUJb-SXQ-unsplash_dfnvfb" />
                        </animated.div>
                    </div>
                </animated.div>
            </div>
        </section>
    )
}