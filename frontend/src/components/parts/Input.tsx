import { useCallback } from 'react';

type InputProps = Partial<HTMLInputElement> & {
    className?: string;
    onChange?: (value: string) => void;
}

const InputText: React.FC<InputProps> = ({ onChange } ,...props) => {
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }, [onChange]);
    return (
        <input 
            {...props}
            type="text"
            onChange={handleChange}
        />
    );
}

export default InputText;