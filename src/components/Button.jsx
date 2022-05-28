export default function Button({
    children,
    backgroundColor = 'main',
    size,
    animate,
    icon,
    ...props
}) {
    const sizeClassName = size ? 'btn-' + size : ''
    const animateClassName = animate ? 'btn-animate' : ''
    
    return (
        <button
            className={`btn bg-${backgroundColor} ${sizeClassName} ${animateClassName}`}
            {...props}
        >
            <span className="btn__txt">{children}</span>
            {
                icon ? (
                    <span className="btn__icon">
                        <i className={`${icon} bx-tada`}></i>
                    </span>
                ) : null
            }
        </button>
    )
}
