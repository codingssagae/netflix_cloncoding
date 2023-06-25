import { useState } from "react";
import { createStore } from "react-redux";




function search (){


    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type = "text" title="title" placeholder="영화 제목을 검색.."/>
                <button type="submit">검색하기</button>
            </form>
        </div>
    );
    

}


const initialState = [
    {
        id: 1,
        text: '',
    }
]

function reducer(state= initialState, action){



}



var store = Redux.createStore(reducer);
store.subscribe(search);





