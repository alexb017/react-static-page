import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function Review() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when element comes into view
    });

    const div = useSpring({
        opacity: inView ? 1 : 0, // Fade in when in view, fade out when not in view
        transform: inView ? 'scale(1.1)' : 'scale(1)',
        config: { duration: 1000 },
    });

    const div2 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translate(100px)',
        config: { duration: 1000 },
        delay: 500
    });

    const div3 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translate(100px)',
        config: { duration: 1000 },
        delay: 700
    });

    const div4 = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translate(100px)',
        config: { duration: 1000 },
        delay: 900
    });

    return (
        <section className="main-review">
            <div className="container">
                <animated.div className="review" style={div} ref={ref}>
                    <div className="review-content grid">
                        <h2 className="review-h2 grid-col-13">Life's <span>better</span> with Fitr</h2>
                        <h4 className="review-h4 grid-col-13">But don't take our word for it. Read what some of the people in our community have to say.</h4>
                        <div className="reviews grid-reviews grid-col-13">
                            <animated.div className="review-box grid-col-12" style={div2} ref={ref}>
                                <h4>Alex</h4>
                                <p>Germany</p>
                                <p className="rb-p">Fitr is an outstanding fitness app that offers a wide range of workouts, from strength training to yoga, to help users get in shape.</p>
                            </animated.div>
                            <animated.div className="review-box grid-col-23" style={div3} ref={ref}>
                                <h4>Mary</h4>
                                <p>USA</p>
                                <p className="rb-p">Fitr is a convenient and straightforward app that offers quick, high-intensity workouts that can be done anywhere, anytime.</p>
                            </animated.div>
                            <animated.div className="review-box grid-col-34" style={div4} ref={ref}>
                                <h4>Alexandra</h4>
                                <p>Canada</p>
                                <p className="rb-p">Fitr is a great fitness app that offers a wide range of workouts, from cardio to yoga, taught by celebrity trainers.</p>
                            </animated.div>
                        </div>
                    </div>
                </animated.div>
            </div>
        </section>
    )
}