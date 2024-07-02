import React, { useState } from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const addItem = () => {
    if (inputValue.trim() === '') {
      alert('Please write down the list');
      return;
    }
    if (!selectedDate) {
      alert('Please select a date');
      return;
    }
    
    const newItem = {
      todo: inputValue,
      date: selectedDate
    };

    setTodoList([...todoList, newItem]);
    setInputValue('');
    setSelectedDate(null);
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const deleteItem = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  return (
    <div className='App'>
      <input
        value={inputValue}
        type="text" 
        onChange={(event) => setInputValue(event.target.value)}
      />
      
        <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="날짜를 선택하세요"
       />
        <button onClick={addItem}>추가</button>
        <TodoBoard todoList={todoList} onDelete={deleteItem} />
    </div>
  );
}

export default App;