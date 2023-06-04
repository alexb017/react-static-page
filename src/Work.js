import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function Work() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when element comes into view
    });

    const topImages = useSpring({
        opacity: inView ? 1 : 0, // Fade in when in view, fade out when not in view
        transform: inView ? 'scale(1)' : 'scale(0)',
        config: { duration: 1000 },
    });

    const topText = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(100px)',
        config: { duration: 1000 },
    });

    const centerImages = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0)',
        config: { duration: 1000 },
    });

    const centerText = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(-100px)',
        config: { duration: 1000 },
    });

    const bottomImages = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0)',
        config: { duration: 1000 },
    });

    const bottomText = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
    });

    return (
        <section className="main-work">
            <div className="container">
                <div className="work">
                    <div className="work-content grid">
                        <h2 className="work-h2 grid-col-13">How does Fitr work?</h2>
                        <animated.div className="work-top-left grid-col-12" style={topImages} ref={ref}>
                            <img className="work-img-center img" width="100%" height="auto" src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="mor-shani-hfMz6T7F1vE-unsplash_qm69xa" />
                            <div className="work-img-left">
                                <img className="img" width="100%" height="100%" src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2231&q=80" alt="meghan-holmes-buWcS7G1_28-unsplash_zjsmyd" />
                            </div>
                            <div className="work-img-right">
                                <img className="img" width="100%" height="100%" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1820&q=80" alt="venti-views-I1EWTM5mFEM-unsplash_yzywjt" />
                            </div>
                        </animated.div>
                        <animated.div className="work-top-right grid-col-23" style={topText} ref={ref}>
                            <h4 className="work-h4">For anyone looking to improve their health and fitness</h4>
                        </animated.div>
                        <animated.div className="work-center-left grid-col-12" style={centerText} ref={ref}>
                            <h4 className="work-h4">The app includes features such as a workout tracker, a calorie tracker, and meal planner</h4>
                        </animated.div>
                        <animated.div className="work-center-right grid-col-23" style={centerImages} ref={ref}>
                            <img className="img" width="100%" height="100%" src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="vitalii-pavlyshynets-kcRFW-Hje8Y-unsplash_ofewdq" />
                        </animated.div>
                        <div className="work-col-height grid-col-13"></div>
                        <animated.div className="work-bottom-left grid-col-12" style={bottomImages} ref={ref}>
                            <img className="img" width="100%" height="100%" src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" alt="kelly-sikkema-IZOAOjvwhaM-unsplash_qctsva" />
                        </animated.div>
                        <animated.div className="work-bottom-right grid-col-23" style={bottomText} ref={ref}>
                            <h4 className="work-h4">The workout tracker allows the user to log their workouts, including the exercises performed, the number of sets and reps, and the duration of the workout</h4>
                        </animated.div>
                    </div>
                </div>
            </div>
        </section>
    )
}