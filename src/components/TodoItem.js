import React from "react";
import '../App.css';
function TodoItem(props) {
    const handleDelete = () => {
        props.onDelete();
    };

    return (
        <div className="listbox">
            <div>
                {props.item.todo}
            </div>
            <div>
                <strong>날짜:</strong> {props.item.date.toISOString().split('T')[0]}
                <span className="delete-button" onClick={handleDelete}>삭제</span>
            </div>
            
        </div>
    );
}

export default TodoItem;
