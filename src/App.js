import logo from './logo.svg';
import Login from './component/Login';
import Register from './component/Register';
import { useState } from 'react';
import { auth } from './firebase';
import Dasbor from './component/Dasbor';
import Auth from './component/Auth';
import { useUserContext } from './context/userContext';

function App() {
  const { loading, eror, user } = useUserContext();
  return (
    <div>
      {/* {eror && <p className="error">{eror}</p>} */}
      {loading ? <p>loading . . .</p> : <>{user ? <Dasbor /> : <Auth />}</>}
    </div>
  );
}

export default App;
