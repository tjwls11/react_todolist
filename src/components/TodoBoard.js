import React from 'react';
import TodoItem from './TodoItem';

function TodoBoard({ todoList, onDelete, onUpdate }) {
    const handleUpdateEmoji = (index, newEmoji) => {
        const updatedList = [...todoList];
        updatedList[index].emoji = newEmoji;
        onUpdate(updatedList);
    };

    return (
        <div className="todo-board">
            <h1 style={{ color: '#974D99' }}>My Todo List</h1> {/* 원하는 색상으로 변경 */}
            {todoList.length === 0 ? (
                <p>No items in the list</p>
            ) : (
                todoList.map((item, index) => (
                    <TodoItem
                        key={index}
                        item={item}
                        onDelete={() => onDelete(index)}
                        onUpdateEmoji={(newEmoji) => handleUpdateEmoji(index, newEmoji)}
                    />
                ))
            )}
        </div>
    );
}

export default TodoBoard;
