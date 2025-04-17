import { useEffect } from 'react'

export default function MouseCursor() {
    useEffect(() => {
        const handleMouseEnter = () => {
            const cursor = document.querySelector('.mouseCursor')
            cursor.classList.add('cursor-big')
        }

        const handleMouseLeave = () => {
            const cursor = document.querySelector('.mouseCursor')
            cursor.classList.remove('cursor-big')
        }

        const handleMouseEnterElements = () => {
            const cursor = document.querySelector('.mouseCursor')
            cursor.classList.add('opacity-0')
        }

        const handleMouseLeaveElements = () => {
            const cursor = document.querySelector('.mouseCursor')
            cursor.classList.remove('opacity-0')
        }

        const handleMouseMove = (e) => {
            const innerCursor = document.querySelector('.cursor-inner')
            const outerCursor = document.querySelector('.cursor-outer')

            if (!innerCursor || !outerCursor) return

            outerCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
            innerCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        }

        const handleElementMouseEnter = () => {
            const innerCursor = document.querySelector('.cursor-inner')
            const outerCursor = document.querySelector('.cursor-outer')

            if (!innerCursor || !outerCursor) return

            innerCursor.classList.add('cursor-hover')
            outerCursor.classList.add('cursor-hover')
        }

        const handleElementMouseLeave = (e) => {
            const innerCursor = document.querySelector('.cursor-inner')
            const outerCursor = document.querySelector('.cursor-outer')

            if (!innerCursor || !outerCursor) return

            if (e.target.closest('.cursor-pointer')) return

            innerCursor.classList.remove('cursor-hover')
            outerCursor.classList.remove('cursor-hover')
        }

        window.addEventListener('mousemove', handleMouseMove)
        document.querySelectorAll('button, a, .cursor-pointer').forEach((element) => {
            element.addEventListener('mouseenter', handleElementMouseEnter)
            element.addEventListener('mouseleave', handleElementMouseLeave)
        })

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.querySelectorAll('button, a, .cursor-pointer').forEach((element) => {
                element.removeEventListener('mouseenter', handleElementMouseEnter)
                element.removeEventListener('mouseleave', handleElementMouseLeave)
            })
        }
    }, [])

    return (
        <>
            <div className="mouseCursor cursor-outer" style={{ visibility: 'visible' }} />
            <div className="mouseCursor cursor-inner" style={{ visibility: 'visible' }} />
        </>
    )
}

