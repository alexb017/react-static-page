import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Question from "./Question";

export default function Questions() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once when element comes into view
    });

    const h2 = useSpring({
        opacity: inView ? 1 : 0, // Fade in when in view, fade out when not in view
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
    });

    const div = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
    });

    return (
        <section className="main-questions">
            <div className="container">
                <div className="questions">
                    <div className="questions-content grid">
                        <animated.h2 className="question-h2 grid-col-13" style={h2} ref={ref}>Frequently Asked Questions</animated.h2>
                        <animated.div className="grid-col-13" style={div} ref={ref}>
                            <Question title="What is Fitr?" content="Fitr is a powerful new platform dedicated to unlocking enhanced physical and mental wellbeing. With Fitr you are invited to join a passionate and uplifting community of likeminded health-seekers. You'll be able to build custom workouts and track personal progress, plus you can create your own personal challenges, or join others for a little friendly competition. Backed by experts, powered by people like you. Fitr lets you rebuild your health and happiness from the inside out." />
                            <Question title="How can Fitr help me?" content="Fitr is here to arm you with the powers you need to fight against stress, fatigue and lack of focus. With a library of amazingly effective exercises, coupled with exciting ways to challenge friends and interact with a global community, Fitr unleashes your potential and revitalises your wellbeing. Fitr helps you to ignite your energy and unleash your best self." />
                            <Question title="How much does it cost?" content="At Fitr we're keen to be as accessible as possible - and a lot of our content is free to consume on our social media accounts. However, a paid account will give you the full Fitr experience: giving you access to our extensive exercise library; allowing you to set yourself, and friends, bespoke challenges; plus the ability to monitor and track your progress, with incentivized goals to hit along the way. We offer a monthly subscription of €12 per month, or a discounted annual subscription of €60. We offer everyone a 14-day free trial period, so you can see the benefits of Fitr yourself before you commit." />
                            <Question title="Which platforms are available?" content="Fitr is currently only available on iOS devices, but future releases will include both desktop and Android versions." />
                            <Question title="How can I cancel my subscription?" content="Your subscription can be canceled at any time in your account settings. Your account will stay activated for the duration of your current 'paid period' which may be for the remainder of the month, or the year, depending upon which subscription you signed up for." />
                        </animated.div>
                    </div>
                </div>
            </div>
        </section>
    )
}