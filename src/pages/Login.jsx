// import React, { useState } from "react";
// import Axios from 'axios';
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// // import styles from "./SignUp.css"
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = (e) => {
//     e.preventDefault();
//     const user = {
//       email,
//       password,
//     };
//     console.log("Data user", user);
//     Axios.post('http://localhost:3001/users', user)
//     .then(res=>{
//       console.log("respones: ", res);
//       setEmail("");
//       setPassword("");
//     })
//   };

//   return (
//     <form>
//       <div>
//         <h2>Login</h2>
//         <p>Email</p>
//         <TextField
//           id="outlined-basic"
//           label="Email"
//           variant="outlined"
//           type="email"
//           name="email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <p>Password</p>
//         <TextField
//           id="outlined-basic"
//           label="Password"
//           variant="outlined"
//           type="password"
//           name="password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <p>
//           Sudah punya akun?
//           <Link to="/SignIn">
//             <Button color="primary">Log in</Button>
//           </Link>
//         </p>
//         <Button 
//           variant="contained" 
//           color="primary"
//           type="submit" 
//           onClick={submit}>
//           Login
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default Signup;

// /**
//  <TextField
//           error
//           id="outlined-error-helper-text"
//           label="Error"
//           defaultValue="Email"
//           helperText="Incorrect entry."
//           variant="outlined"
//         />
//  */



import React from "react";

const Login = () => {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-danger mb-1" data-bs-toggle="modal" data-bs-target="#loginModal" style={{ marginRight: "8px" }}>
                <span className="fa fa-sign-in me-1"></span>Masuk
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Masuk
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-danger w-100 mb-4">
                                <span className="fa fa-google me-2"></span> Masuk dengan Google
                            </button>
                            <button className="btn btn-danger w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span> Masuk dengan Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Email address
                                    </label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">
                                        Kami tidak akan pernah membagikan email Anda kepada orang lain.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Kata Sandi
                                    </label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        Selalu masuk
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-outline-danger w-100 mt-5">
                                    Masuk
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;