import React, { useRef } from 'react';
import { useUserContext } from '../context/userContext';

function Register() {
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  const { registerUser } = useUserContext();

  const submit = (e) => {
    e.preventDefault();
    console.log('s');
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    if (email && name && password) registerUser(email, name, password);
  };

  return (
    <div className="w-full">
      <form onSubmit={submit} className="w-[400px] border-2 rounded-lg border-slate-500 p-4 mx-auto mt-[190px]">
        <p className="text-[45px] font-bold">Register</p>
        <div className="grid">
          <label className=" font-thin">Email</label>
          <input ref={emailRef} type="text" className="py-2 mt-2 px-3 border-[2px] border-teal-700 hover:border-teal-500 focus:outline-none rounded-lg" placeholder="Enter Here" />
        </div>
        <div className="grid mt-5">
          <label className=" font-thin">Name</label>
          <input ref={nameRef} type="text" className="py-2 mt-2 px-3 border-[2px] border-teal-700 hover:border-teal-500 focus:outline-none rounded-lg" placeholder="Enter Here" />
        </div>
        <div className="grid mt-5">
          <label className=" font-thin">Password</label>
          <input
            ref={passwordRef}
            type="password"
            className="py-2 mt-2 px-3 border-[2px] border-teal-700 hover:border-teal-500 focus:outline-none rounded-lg"
            placeholder="Enter Here"
          />
        </div>
        <button type="submit" className="p-2 bg-teal-400 font-bold text-white w-full rounded-lg mt-5">
          Create Account
        </button>
        <p className="mt-5 text-right">
          Already Have Account? <span className="mt-5 cursor-pointer font-bold text-teal-500">Sign In</span>
        </p>
      </form>
    </div>
  );
}

export default Register;
