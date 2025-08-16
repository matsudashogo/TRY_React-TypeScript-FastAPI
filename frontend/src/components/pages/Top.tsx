import { useState } from 'react'
import Header from '../parts/Hearder'
import Button from '../parts/Button'
import Input from '../parts/Input'

interface Todo {
    id: number,
    title: string,
    created_at: string,
    updated_at: string,
}

const todoList: Todo[] = [
    {
        id: 1,
        title: 'タスク1',
        created_at: '2021-01-01',
        updated_at: '2021-01-01',
    },
    {
        id: 2,
        title: 'タスク2',
        created_at: '2021-01-01',
        updated_at: '2021-01-01',
    }
]

const Top: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState(todoList);

    const addTodo = () => {
        const newTodo = {
            id: todos.length + 1,
            title: inputValue,
            created_at: new Date().toISOString().split('T')[0],
            updated_at: new Date().toISOString().split('T')[0],
        }

        setTodos([...todos, newTodo]);
        setInputValue(''); // 入力フィールドをクリア
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
                            <td className="px-6 py-4 font-medium text-gray-900">{todo.title}</td>
                            <td className="px-6 py-4 text-gray-600">{todo.created_at}</td>
                            <td className="px-6 py-4 text-gray-600">{todo.updated_at}</td>
                            <td className="px-6 py-4 text-center space-x-2">
                                <Button
                                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                                    text="編集"
                                    event={() => { alert('編集') }}
                                />
                                <Button
                                    className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                                    text="削除"
                                    event={() => { alert('削除') }}
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