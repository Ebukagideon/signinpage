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
    <div className="mx-auto bg-white h-screen md:flex  text-mine">
      <div className='hidden sm:block h-screen bg-cover w-2/5 m-1 rounded'>
        <img src="/image/onboarding-slider.png" alt='' className='object-cover '/>
      </div>

      <div className="text-center justify-center flex-1 flex-col font-sans text-sm">
        <div className='justify-center md:mt-40 md:mb-32 md:mx-20'>
          <div>
            <h1 className='text-2xl font-bold text-black'>Welcome back</h1>
            <p>Enter your details to login</p>
          </div>
          <form className='mt-5 text-left  p-2 flex-col space-1'>
            <div>
              <p>Email Address</p>
              <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-describedby="uidnote"
              className='border w-full h-10 rounded-lg p-2'
              />
              

              <p>Password</p>
              <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-describedby="pwdnote"
              className='border w-full h-10 rounded-lg p-2'/>

              <div className='flex justify-between'>
                <p>Remember me</p>
                <p className='text-green-700'>Forgot Password</p>
              </div>
            </div>

            <div className='w-full pt-5'>
              <button disabled={!validEmail || !validPwd ? true : false} className='bg-btn w-full h-10 rounded-lg text-white'>Log in</button>
              <p>Dont have an account? <a href="" className='text-btn'>Signup</a></p>
            </div>
          </form>
        </div>
        <div className='w-full '>
          <p className='text-xs'>By clicking “Login or Signup”, you assert that you have read and <br/>agreed to our <a href="" className='text-btn'>Terms of Service</a> and <a href="" className='text-btn'>Privacy Policy.</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
