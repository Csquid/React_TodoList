import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    render() {
        /*
            todos: todo 객체들이 들어있는 배열
            onToggle: 체크박스를 키고 끄는 함수
            onRemove: 아이템을 삭제시키는 함수
        */
        const { todos, onToggle, onRemove } = this.props;

        
        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem 
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );
        
        /*
        const todoList = todos.map(
            (todo) => (
                <TodoItem 
                    {...todo}                   //내부의 값들이 모두 자동으로 props로 설정이 됨
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={todo.id}
                />
            )
        );
        */

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;