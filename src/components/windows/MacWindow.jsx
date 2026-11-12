import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"

const MacWindow = ({ children,width="60vw",height="70vh" }) => {
    return (
        <Rnd
            default={{
                width: width,
                height: height,
                x: 170,
                y: 100
            }}>
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>

                    <div className="title"><p>anurag_09 - zsh</p></div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow