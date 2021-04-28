import { useState } from 'react';
import Form from './components/form';
import Results from './components/results';
import './App.scss';

function App() {
  const [fileData, getFileData] = useState({})
  const getData = val => {
    getFileData(val);
  }
    return (  
    <div className="App">
      <Form dataProp={getData}/>
      <Results data={fileData} />
    </div>
  );
}

export default App;
