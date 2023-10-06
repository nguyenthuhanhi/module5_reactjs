import logo from './logo.svg';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import {ListBooks} from "./components/app-manage-books/listBooks";
import {CreateBooks} from "./components/app-manage-books/createBooks";
import {UpdateBooks} from "./components/app-manage-books/updateBooks";


function App() {
  return (
    <>
      {/*<NavLink to='/'>Home</NavLink>*/}
      {/*<NavLink to='/create' className='ms-2'>Create</NavLink>*/}
      <Routes>
        <Route path="/" element={<ListBooks/>}></Route>
        <Route path="/create" element={<CreateBooks/>}></Route>
        <Route path='/update/:id' element={<UpdateBooks/>}></Route>
        {/*<Route path="*" element={</>}></Route>*/}
      </Routes>
    </>
  );
}

export default App;
