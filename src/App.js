import React from 'react';
import { useState, useEffect, useRef } from 'react';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

function App() {

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(true);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  return (
    <div className="mx-auto bg-white h-screen md:flex  ">
      <div className='sm-hidden bg-cover bg-[url("https://cdn.vectorstock.com/i/1000v/57/61/gas-station-vector-9905761.jpg")] w-2/5 m-1'>
        <div className=' pt-96 pl-10'>
          <p className=' text-xl font-semibold'>The simplest way to manage<br/>your fleets Effectively.</p>
          <p className='pt-2 '>experiece a better and reliable way to <br/>manage your fleets with Quickfill</p>
        </div>
      </div>

      <div className="text-center justify-center flex-1 mt-32">
        <h1 className='text-lg font-bold'>Welcome back</h1>
        <p>Enter your details to login</p>
        <form className='mt-5 justify-center text-left lg:pl-52 lg:pr-52 p-2 flex-col space-1'>
          <div>
          <p>Email Address</p>
          <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          aria-describedby="uidnote"
          className='border mr-2 w-full h-10'/>
          <input/>
          </div>

          <div>
            <p>Password</p>
            <input
            placeholder="Password"
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            aria-describedby="pwdnote"
            className='border mr-2 w-full h-10'/>
          </div>

          <div className='flex justify-between'>
            <div>
              <p>Remember me</p>
            </div>
            <div>
              <p className='text-green-800'>Forgot Password</p>
            </div>
          </div>

          <div className='w-full text-center pt-5'>
            <button disabled={!validEmail || !validPwd ? true : false} className='bg-green-900 w-full h-10 rounded text-white'>Log in</button>
            <p>Dont have an account? <a href="" className='text-green-800'>Signup</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
