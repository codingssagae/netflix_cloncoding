import React from 'react';
import TodoItem from './TodoItem';

function TodoBoard(props) {
    const todoList = props.todoList || []; // props.todoList가 undefined이면 빈 배열로 초기화
  return (
    <div className='sEarch'>
      <h1>최근 검색 기록</h1>
      {todoList.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
}

export default TodoBoard;