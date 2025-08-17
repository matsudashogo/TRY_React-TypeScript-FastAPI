import { useCallback } from 'react'
import InputText from '../parts/InputText'
import type { Todo } from '../pages/Top'

type TodoTitleInputProps = {
    todo: Todo;
    editTodo: (id: number, title: string) => void;
}

const TodoTitleInput = ({ todo, editTodo }: TodoTitleInputProps) => {
    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        editTodo(todo.id, event.target.value);
    }, [editTodo, todo.id]);

    return (
        <InputText
            value={todo.title}
            className="flex-1"
            onChange={handleChange}
        />
    )
}

export default TodoTitleInput;