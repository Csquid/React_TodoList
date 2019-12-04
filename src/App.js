import React from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import TodoItemList from './components/TodoItemList';
import Form from './components/Form';
import './app.css';

/*
function App() {
  return (
    <div>
      {/*<Header />
      <Sidebar />
      <TodoListTemplate form={<Form/>}> 
        <TodoItemList/>
      </TodoListTemplate>
    </div>
  );
}
*/
class App extends React.Component {
  id = 3;

  state = {
    input: '',
    todos: [
      {id: 0, text: ' 리액트 소개', checked: false},
      {id: 1, text: ' 리액트 소개', checked: true},
      {id: 2, text: ' 리액트 소개', checked: false}
    ]
  }

  handleToggle = (id) => {
    //현재 state가 가지고 있는 정보중 todos를 가지고온다.
    const { todos } = this.state;

    //파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];  //선택한 객체을 반환해서 selected 변수에 집어넣는다.
    
    const nextTodos = [...todos];  //현재 todos의배열을 복사하여 nextTodos변수에 넣는다 즉 nextTods는 clone Array가 된다.
    
    /*
      기존의 todos에서 클릭한 element 객체에 들어있는 todos를 복사하고, 
      그 todos의 checked 를 역으로 덮어씌운다 --> 역으로 덮어씌운다는것은 무엇인가?
      만약 true 라면 false 로 false라면 true
      if true --> false || if false --> true
    */
    
    console.log(todos);

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    
    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }
  
  handleChange = (e) => {
    this.setState({
      input: e.target.value   //input의 다음 바뀔 값
    });
  }
  
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',  //인풋 비우고
      //concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        check: false
      })
    });
  }

  handleKeyPredss = (e) => {
    //눌려진 키가 Enter 이라면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  render() {
    const { input } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPredss,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form = {(
        <Form 
          value={input}
          onKeyPress={handleKeyPredss}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={this.state.todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}
export default App;
