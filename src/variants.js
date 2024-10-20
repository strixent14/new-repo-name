export const fadeIn = (direction, delay) => {
    return{
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 100 : direction === 'right' ? -70 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                delay: delay,
                duration: 2,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}