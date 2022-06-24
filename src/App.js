import React, {useState} from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';



export const SearchContext = React.createContext();


function App() {
  const [valueInput, setValueInput] = useState('')
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{valueInput,setValueInput}}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;