import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useHistory } from 'react-router-dom'

import notes from '../assets/images/notes.svg'
import secure from '../assets/images/secure.svg'
import responsive from '../assets/images/responsive-design.svg'
import sort from '../assets/images/sort.svg'

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Home = () => {

    const features = useRef([])
    features.current = []

    const addToArr = el => {
        features.current.push(el)
    }
    const history = useHistory()
    const start = () => {
        history.push('/login')
    }
    useEffect(() => {
        features.current.forEach((el, i) => {
            gsap.from(el, {
                autoAlpha: 0,
                y: -50,
                ease: 'elastic',
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: 'top center',
                    toggleActions: 'restart none none reverse',
                    scrub: 0.5
                }
            })
        })

        gsap.to('.secure-1', {
            text: ' secure',
            scrollTrigger: {
                trigger: '.secure-1',
                start: 'top+=15px center',
                toggleActions: 'restart none none reverse',
                scrub: 0.5,
                // markers: true
            }
        })

        gsap.to('.secure-2', {
            text: ' safe',
            scrollTrigger: {
                trigger: '.secure-2',
                start: 'top+=15px center',
                toggleActions: 'restart none none reverse',
                scrub: 0.5,
                // markers: true
            }
        })
    }, [])
    const FeatureItem = ({icon, children}) => {
        return (
            <div className="home__item">
                <img src={icon} alt="Feature icon"/>
                { children[0] }
                { children[1] }
            </div>
        )
    }
    return (
        <div className='home'>
            <h1>
                Accomplish more with better notes
            </h1>
            <h5>
                Blohsh Notes allows you to capture those ideas that came out of nowhere and find them fast
            </h5>
            <div className="home__demo">
                <p className="feature" ref={addToArr}>Create notes</p>
                <p className="feature" ref={addToArr}>Edit notes</p>
                <p className="feature" ref={addToArr}>Delete notes</p>
                <p className="feature" ref={addToArr}>Share notes</p>
                <p className="feature" ref={addToArr}>Sort notes</p>
                <p className="feature" ref={addToArr}>Your notes</p>
                <p className="feature" ref={addToArr}>Your info</p>
                <p className="feature secret" ref={addToArr}>Keep it
                <span className='secure-1'> ••••••</span></p>
                <p className="feature" ref={addToArr}>Keep it
                <span className='secure-2'> ••••</span></p>

            </div>

            <div className="home__container">
                <h2>Sneak peek</h2>
                <FeatureItem icon={notes}>
                    <h3>Your notes, a piece of cake</h3>
                    <p>Keeping important info has never been easier</p>
                </FeatureItem>

                <FeatureItem icon={secure}>
                    <h3>Privacy, a big deal</h3>
                    <p>All data is encrypted before it goes up to the server</p>
                </FeatureItem>

                <FeatureItem icon={responsive}>
                    <h3>Notes, notes anywhere</h3>
                    <p>Keep important info handy. Manage notes from your phone, tablet or desktop</p>
                </FeatureItem>

                <FeatureItem  icon={sort}>
                    <h3>Find things fast</h3>
                    <p>Bunch of options to search and sort notes, so you get what you need when you need it</p>
                </FeatureItem>
            </div>

            <div className="home__cta">
                <button onClick={start}>
                    Get started now
                </button>
                <p>Capturing ideas has never been so much easy</p>
            </div>
        </div>
    )
}

export default Home
