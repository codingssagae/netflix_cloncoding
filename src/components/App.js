import React, {useState} from 'react';
import {connect} from 'react-redux';
import { addItem } from '../actions';
import TodoBoard from './TodoBoard';

function App(props){
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addItem(inputValue);
        setInputValue('');
        };
    
     
    return(
        <main>
            <form onSubmit={handleSubmit}>
                <input value = {inputValue} type='text' onChange={(e)=> setInputValue(e.target.value)}/>
            <button type='submit'>검색</button>
            </form>
            <TodoBoard todoList={props.todoList} />

        </main>
    );

}

const mapStateToProps = (state) => {
    return {
    todoList: state.todoList
    };
};

export default connect(mapStateToProps, { addItem: addItem })(App);

