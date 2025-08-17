type InputProps = {
    className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputText: React.FC<InputProps> = ({ className, ...props }) => {
    return (
        <input
            {...props}
            className={className}
            type="text"
        />
    );
}

export default InputText;