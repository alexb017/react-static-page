import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function Advantages() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when element comes into view
    });

    const h2 = useSpring({
        opacity: inView ? 1 : 0, // Fade in when in view, fade out when not in view
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
    });

    const div1 = useSpring({
        opacity: inView ? 1 : 0, // Fade in when in view, fade out when not in view
        transform: inView ? 'translateX(0)' : 'translateX(-100px)',
        config: { duration: 1000 },
    });

    const div2 = useSpring({
        opacity: inView ? 1 : 0, // Fade in when in view, fade out when not in view
        transform: inView ? 'translateX(0)' : 'translateX(100px)',
        config: { duration: 1000 },
    });

    const div3 = useSpring({
        opacity: inView ? 1 : 0, // Fade in when in view, fade out when not in view
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
        delay: 500
    });

    const div4 = useSpring({
        opacity: inView ? 1 : 0, // Fade in when in view, fade out when not in view
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
        delay: 700
    });

    const div5 = useSpring({
        opacity: inView ? 1 : 0, // Fade in when in view, fade out when not in view
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
        delay: 900
    });

    return (
        <section className="main-advantages">
            <div className="container">
                <div className="advantages">
                    <div className="advantages-content grid-3">
                        <animated.h2 className="advantages-h2 grid-col-14" style={h2} ref={ref}>Fitr lifts you to the heights of your personal powers, then beyond</animated.h2>
                        <animated.div className="advantages-1 grid-col-12" style={div1} ref={ref}>
                            <h4 className="advantages-1-h4">Join a global community of likeminded health-seekers</h4>
                        </animated.div>
                        <animated.div className="advantages-2 grid-col-24" style={div2} ref={ref}>
                            <h4 className="advantages-2-h4">Create your own challenges, or join others for a little friendly competition</h4>
                        </animated.div>
                        <animated.div className="advantages-3 grid-col-12" style={div3} ref={ref}>
                            <h4 className="advantages-3-h4">Build custom workouts and track personal progress</h4>
                        </animated.div>
                        <animated.div className="advantages-4 grid-col-23" style={div4} ref={ref}>
                            <h4 className="advantages-5-h4">Access our extensive library of exercises</h4>
                        </animated.div>
                        <animated.div className="advantages-5 grid-col-34" style={div5} ref={ref}>
                            <h4 className="advantages-5-h4">Ignite your energy and unleash your best self</h4>
                        </animated.div>
                    </div>
                </div>
            </div>
        </section>
    )
}