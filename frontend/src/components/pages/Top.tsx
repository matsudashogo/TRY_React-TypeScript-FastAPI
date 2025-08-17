import { useState } from 'react'
import Header from '../parts/Header'
import Button from '../parts/Button'
import Input from '../parts/Input'

type Todo = {
    id: number,
    title: string,
    created_at: string,
    updated_at: string,
    is_edit: boolean,
}

const todoList: Todo[] = [
    {
        id: 1,
        title: 'タスク1',
        created_at: '2021-01-01 00:00:00',
        updated_at: '2021-01-01 00:00:00',
        is_edit: false,
    },
    {
        id: 2,
        title: 'タスク2',
        created_at: '2021-01-01 00:00:00',
        updated_at: '2021-01-01 00:00:00',
        is_edit: false,
    }
]

const Top: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState(todoList);

    const addTodo = () => {
        const newTodo = {
            id: todos.length + 1,
            title: inputValue,
            created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
            is_edit: false,
        }

        setTodos([...todos, newTodo]);
        setInputValue('');
    }

    const editTodo = (id: number, newTitle: string) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, title: newTitle, updated_at: new Date().toISOString().slice(0, 19).replace('T', ' ') }
            }
            return todo
        })
        setTodos(newTodos)
    }

    const toggleEdit = (id: number) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, is_edit: !todo.is_edit }
            }
            return todo
        })
        setTodos(newTodos)
    }

    const deleteTodo = (id: number) => {
        if (confirm('削除しますか？')) {
            const newTodos = todos.filter((todo) => todo.id !== id)
            setTodos(newTodos)
        }
    }

    return (
        <>
            <Header title="TODO一覧" />
            <div className="mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4">
                    <Input
                        placeholder="新しいタスクを入力してください"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                        value={inputValue}
                        onChange={setInputValue}
                    />
                    <Button
                        text="追加"
                        event={addTodo}
                        className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 shadow-sm"
                    />
                </div>
            </div>

            <table className="min-w-full border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                    <tr>
                        <th className="px-6 py-3 text-left border border-gray-200">ID</th>
                        <th className="px-6 py-3 text-left border border-gray-200">タスク名</th>
                        <th className="px-6 py-3 text-left border border-gray-200">作成日時</th>
                        <th className="px-6 py-3 text-left border border-gray-200">更新日時</th>
                        <th className="px-6 py-3 text-center border border-gray-200">操作</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {todos.map((todo) => (
                        <tr key={todo.id} className="hover:bg-gray-50 transition">
                            <td className="px-6 py-4 text-gray-800">{todo.id}</td>
                            <td className="px-6 py-4 font-medium text-gray-900">
                                {todo.is_edit ? (
                                    <Input
                                        value={todo.title}
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                                        onChange={(value) => editTodo(todo.id, value)}
                                    />
                                ) : (
                                    todo.title
                                )}
                            </td>
                            <td className="px-6 py-4 text-gray-600">{todo.created_at}</td>
                            <td className="px-6 py-4 text-gray-600">{todo.updated_at}</td>
                            <td className="px-6 py-4 text-center space-x-2">
                                <Button
                                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                                    text={todo.is_edit ? '保存' : '編集'}
                                    event={() => toggleEdit(todo.id)}
                                />
                                <Button
                                    className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                    text="削除"
                                    event={() => deleteTodo(todo.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Top