import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Home = () => {

    const features = useRef([])
    features.current = []

    const addToArr = el => {
        features.current.push(el)
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
                start: 'top+=20px center',
                toggleActions: 'restart none none reverse',
                scrub: 0.5,
                // markers: true
            }
        })

        gsap.to('.secure-2', {
            text: ' safe',
            scrollTrigger: {
                trigger: '.secure-2',
                start: 'top center',
                toggleActions: 'restart none none reverse',
                scrub: 0.5,
                // markers: true
            }
        })
    }, [])

    return (
        <div className='home'>
            <h1>
                Accomplish more with better notes
            </h1>
            <h5>
                Blohsh Notes allows you to capture those ideas that came out of nowhere and find them fast
            </h5>
            <div className="note-demo">
                <p className="feature" ref={addToArr}>Create notes</p>
                <p className="feature" ref={addToArr}>Edit notes</p>
                <p className="feature" ref={addToArr}>Delete notes</p>
                <p className="feature" ref={addToArr}>Share notes</p>
                <p className="feature" ref={addToArr}>Sort notes</p>
                <p className="feature" ref={addToArr}>Your notes</p>
                <p className="feature" ref={addToArr}>Your info</p>
                <p className="feature" ref={addToArr}>Keep it
                <span className='secure-1'> ••••••</span></p>
                <p className="feature" ref={addToArr}>Keep it
                <span className='secure-2'> ••••</span></p>

            </div>
        </div>
    )
}

export default Home
