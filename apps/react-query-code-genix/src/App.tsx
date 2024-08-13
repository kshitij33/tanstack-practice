import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Todos from './components/Todos';
import { useTodoIds } from './services/queries';
const App = () => {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8080/todos')
  //     .then((response) => setData(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  // return <div>{JSON.stringify(data)}</div>;

  return (
    <div>
      <Todos />
    </div>
  );
};

export default App;
