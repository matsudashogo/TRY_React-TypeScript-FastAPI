interface ButtonProps {
    className: string,
    text: string,
    event: () => void
}

const Button:React.FC<ButtonProps> = ({ className, text, event }) => {
    return (
        <button className={className} onClick={event}>
            {text}
        </button>
    );
}

export default Button