import './App.css';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import TodoList from './components/TodoList';
import InputField from './components/InputField';

import {addTodo} from './store/todoSlice';

function App() {
  const [text, setText] = useState('');//оставлена  на уровне компонента, а не перенесена в redux, потому что больше нигде не используется
  const dispatch = useDispatch();

  const addTask = () => dispatch(addTodo(text));

  //обрабочик события onChange на input checkbox
  const toggleTodoComplete = (todoId) => {


    // setTodos (
    //   todos.map(
    //     todo => {
    //       if (todo.id !== todoId) return todo;

    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       }
    //     }
    //   )
    // )
  }

  //функция удалить todo
  const removeTodo = (todoId) => {
    //setTodos(todos.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="App">
        <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
        <TodoList 
          toggleTodoComplete={toggleTodoComplete}
          removeTodo={removeTodo}
        />
    </div>
  );
}

export default App;
