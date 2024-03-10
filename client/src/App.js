import './App.css';
import Form from './components/Form';
import FormEdit from './components/FormEdit';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import List from './components/List';
import DepositForm from './components/DepositForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<Form />}></Route>
          <Route path='/edit/:id' element={<FormEdit/>}></Route>
          <Route path='/list' element={<List/>}></Route>
          <Route path='/deposit' element={<DepositForm/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
