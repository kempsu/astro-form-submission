import React, { useState } from 'react'
import { CognitoUser, AuthenticationDetails, CognitoUserPool } from "amazon-cognito-identity-js";


export default function Login2() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const userPool = new CognitoUserPool({
    UserPoolId: 'eu-central-1_Abcdef',
    ClientId: '1234567890'
  });

  const testSubmit = (e) => {
    e.preventDefault();
    console.log("TEST FROM LOGIN2.JSX");
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
            Form from Login2.jsx
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
