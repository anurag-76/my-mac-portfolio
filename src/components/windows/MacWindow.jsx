import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"

const MacWindow = ({ children, width = "60vw", height = "70vh", windowName, setWindowsState }) => {
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
                        <div
                            onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))}
                            className="dot red">
                                <img className='close' src="./navbar-icons/close-line.svg" alt="" />
                            </div>

                        <div
                            onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))}
                            className="dot yellow">
                                <img className='close' src="./navbar-icons/subtract-fill.svg" alt="" />
                            </div>

                        <div
                            onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))}
                            className="dot green">
                                <img className='close' src="./navbar-icons/col3.svg" alt="" />
                            </div>
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