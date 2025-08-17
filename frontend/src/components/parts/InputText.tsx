type InputProps = {
    className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputText: React.FC<InputProps> = ({ className, ...props }) => {
    return (
        <input
            {...props}
            className={[
                "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400",
                className
            ].filter(Boolean).join(' ')}
            type="text"
        />
    );
}

export default InputText;