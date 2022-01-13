import React, { useRef } from 'react';
import { useUserContext } from '../context/userContext';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { userLogIn, PasswordEror, eror, forgotPassword } = useUserContext();

  const submit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) userLogIn(email, password);
  };
  function forgot() {
    const email = emailRef.current.value;
    if (email) forgotPassword(email).then(() => (emailRef.current.value = ''));
  }

  return (
    <div className="w-full">
      <form onSubmit={submit} className="w-[400px] border-2 rounded-lg border-slate-500 p-4 mx-auto mt-[190px]">
        <p className="text-[45px] font-bold">LOGIN</p>
        <div className="grid">
          <label className=" font-thin">Username</label>
          <input ref={emailRef} type="text" className="py-2 mt-2 px-3 border-[2px] border-teal-700 hover:border-teal-500 focus:outline-none rounded-lg" placeholder="Enter Here" />
        </div>
        <div className="grid mt-5">
          <label className=" font-thin">Password</label>
          <input
            ref={passwordRef}
            type="password"
            className="py-2 mt-2 px-3 border-[2px] border-teal-700 hover:border-teal-500 focus:outline-none rounded-lg"
            placeholder="Enter Here"
          />
          {eror && <p className="error">{eror}</p>}
        </div>
        <button type="sumbit" className="p-2 bg-teal-400 font-bold text-white w-full rounded-lg mt-5">
          Sign In
        </button>
        <p className="mt-5 text-right">
          Dosnt Have Account? <span className="mt-5 cursor-pointer font-bold text-teal-500">Sign Up</span>
        </p>
        <p onClick={forgot} className=" cursor-pointer">
          forgot password?
        </p>
      </form>
    </div>
  );
}

export default Login;
