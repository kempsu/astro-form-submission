import React, { useState } from 'react'


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const testSubmit = (e) => {
    e.preventDefault();
    console.log("TEST FROM LOGIN.JSX");
}

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div>
        <div>
          <div>
            <h2>
              Form from Login.jsx
            </h2>
          </div>
          <form method='POST' onSubmit={testSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div>
              <div>
                <label htmlFor="email-address">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit" >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
