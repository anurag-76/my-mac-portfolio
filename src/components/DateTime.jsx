import { useState, useEffect } from 'react'

const DateTime = () => {
    const [dateTime, setDateTime] = useState('')

    useEffect(() => {
        const update = () => {
            const d = new Date()
            setDateTime(`${d.toLocaleDateString('en-US', { weekday: 'short' })} ${d.getDate()} ${d.toLocaleDateString('en-US', { month: 'short' })} ${d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase()}`)
        }

        update()
        const interval = setInterval(update, 1000)
        return () => clearInterval(interval)
    }, [])

    return <div>{dateTime}</div>
}

export default DateTime