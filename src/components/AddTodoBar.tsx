import React, { useState } from 'react';
import data from '../assets/data.json'; // Import the JSON data

interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

function AddTodoBar({ onTodoAdded }: { onTodoAdded: (newTodo: TodoItem) => void }) {
    const [newTodoText, setNewTodoText] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodoText(e.target.value);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && newTodoText.trim() !== '') {
            // Determine the next available ID
            const maxId = data.reduce((max, todo) => Math.max(max, todo.id), 0);
            const newId = maxId + 1;

            const newTodo: TodoItem = {
                id: newId,
                text: newTodoText.trim(),
                completed: false,
            };

            onTodoAdded(newTodo);
            setNewTodoText(''); // Clear the input field
        }
    };

    return (
        <>
            <div className="tw:w-full tw:px-5 tw:py-5 tw:bg-white tw:flex tw:rounded-lg tw:mt-10">
                <input
                    type="radio"
                    name="addTodo"
                    id=""
                    className="tw:mr-3 tw:appearance-none tw:after:border-[2px] tw:after:rounded-full tw:after:border-todo-lt-light-grayish-blue tw:after:px-3 tw:after:py-1"
                />
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Create a new todo..."
                    className="tw:focus:text-todo-lt-very-dark-grayish-blue tw:focus:outline-hidden"
                    value={newTodoText}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                />
            </div>
        </>
    );
}

export { AddTodoBar };