import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function Overview() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when element comes into view
    });

    const element = useSpring({
        opacity: inView ? 1 : 0, // Fade in when in view, fade out when not in view
        config: { duration: 2000 },
    });

    return (
        <section className="main-overview">
            <div className="overview">
                <div className="overview-content">
                    <animated.div className="overview-img" style={element} ref={ref}>
                        <img className="img" width="100%" height="auto" src="https://images.unsplash.com/photo-1616279967983-ec413476e824?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1704&q=80" alt="graham-mansfield-y7ywDXWJ-JU-unsplash_u7mhhb" />
                    </animated.div>
                </div>
            </div>
        </section>
    )
}