import './App.css';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import TodoList from './components/TodoList';
import InputField from './components/InputField';

import {addTodo} from './store/todoSlice';

function App() {
  const [text, setText] = useState('');//оставлена  на уровне компонента, а не перенесена в redux, потому что больше нигде не используется
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('');
  };

  return (
    <div className="App">
        <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
        <TodoList 
          // toggleTodoComplete={toggleTodoComplete}
        />
    </div>
  );
}

export default App;
