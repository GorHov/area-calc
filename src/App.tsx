import react from 'react'
import Form from './components/Form';
import Table from './components/Table';
import Board from './components/Board';

// import { useAppDispatch, useAppSelector } from "./hooks/redux";
// import { productSlice } from "./store/reducers/ProductSlice";
// import { fetchData } from './store/reducers/ActionCreators';

function App() {

  // const {count , products} = useAppSelector(state => state.ProductReducer)
  // const {increment} = productSlice.actions
  // const dispatch = useAppDispatch()
  


  return (
    <div className="App">
      <Form/>
      <Table/>
      <Board/>
    </div>
  );
}

export default App;
