import React from "react";

const Demo = () =>{
    return(
        <>
        
        </>
    )
}

export default Demo;

// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = () => {
//     // TODO: Implement login logic
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-page">
//       <h1>Login</h1>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type={showPassword ? "text" : "password"}
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <i
//         className={`fas fa-eye ${showPassword ? "active" : ""}`}
//         onClick={toggleShowPassword}
//       ></i>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;