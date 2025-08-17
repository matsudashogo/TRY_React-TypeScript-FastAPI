import { useCallback } from 'react';

type InputProps = {
    value?: string;
    className?: string;
    onChange?: (value: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

const InputText: React.FC<InputProps> = ({ value, className, onChange, ...rest }) => {
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }, [onChange]);
    return (
        <input
            {...rest}
            value={value}
            className={className}
            type="text"
            onChange={handleChange}
        />
    );
}

export default InputText;