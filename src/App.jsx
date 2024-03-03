import './App.css';
import {useState} from 'react';
import TodoList from './components/TodoList';
import InputField from './components/InputField';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  //функция добавить todo
  const addTodo = () => {
    if (text.trim().length) {
      setTodos ([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false
        }
      ])
      setText ('');
    } 
  }

  //обрабочик события onChange на input checkbox
  const toggleTodoComplete = (todoId) => {
    setTodos (
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo;

          return {
            ...todo,
            completed: !todo.completed,
          }
        }
      )
    )
  }

  //функция удалить todo
  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="App">
        <InputField text={text} handleInput={setText} handleSubmit={addTodo}/>
        <TodoList 
          todos={todos}
          toggleTodoComplete={toggleTodoComplete}
          removeTodo={removeTodo}
        />
    </div>
  );
}

export default App;
