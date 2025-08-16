interface InputProps {
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
    className = '', 
    placeholder = '', 
    value = '',
    onChange,
}) => {
    return (
        <input 
            type="text"
            className={className} 
            placeholder={placeholder} 
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
        />
    );
}

export default Input