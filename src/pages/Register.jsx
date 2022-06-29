// import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// const Register = () => {
//   const signupNameRef = useRef();
//   const signupPasswordRef = useRef();
//   const signupEmailRef = useRef();

//   const submitHandler = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <Helmet title="Signup">
//       <CommonSection title="Signup" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="12" className="m-auto text-center">
//               <form className="form mb-5" onSubmit={submitHandler}>
//                 <div className="form__group">
//                   <input
//                     type="text"
//                     placeholder="Full name"
//                     required
//                     ref={signupNameRef}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     ref={signupEmailRef}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     required
//                     ref={signupPasswordRef}
//                   />
//                 </div>
//                 <button type="submit" className="addTOCart__btn">
//                   Sign Up
//                 </button>
//               </form>
//               <Link to="/login">Sudah punya akun? Login</Link>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Register;



import React from "react";

const Signup = () => {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-danger mb-1" data-bs-toggle="modal" data-bs-target="#signupModal" style={{ marginRight: "8px" }}>
                <span className="fa fa-user-plus me-1"></span>Daftar
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Daftar
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-danger w-100 mb-4">
                                <span className="fa fa-google me-2"></span> Daftar dengan Google
                            </button>
                            <button className="btn btn-danger w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span> Daftar dengan Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">
                                        Username
                                    </label>
                                    <input type="text" className="form-control" id="exampleInput" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Alamat email
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
                                <button type="submit" className="btn btn-outline-danger w-100 mt-5">
                                    Daftar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;






// import React, { useContext, useEffect } from 'react';
// // import Layout from '../components/Layout';
// import { useForm, Controller } from 'react-hook-form';
// // import NextLink from 'next/link';
// // import Form from '../components/Form';
// import {
//   Button,
//   Link,
//   List,
//   ListItem,
//   TextField,
//   Typography,
// } from '@mui/material';
// // import { useSnackbar } from 'notistack';
// import axios from 'axios';
// import jsCookie from 'js-cookie';
// import { useRouter } from 'next/router';
// // import { Store } from '../utils/Store';
// // import { getError } from '../utils/error';

// export default function RegisterScreen() {
//   const { state, dispatch } = useContext(Store);
//   const { userInfo } = state;
//   const router = useRouter();
//   const { redirect } = router.query;

//   useEffect(() => {
//     if (userInfo) {
//       router.push(redirect || '/');
//     }
//   }, [router, userInfo, redirect]);

//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm();

//   const { enqueueSnackbar } = useSnackbar();

//   const submitHandler = async ({ name, email, password, confirmPassword }) => {
//     if (password !== confirmPassword) {
//       enqueueSnackbar("Passwords don't match", { variant: 'error' });
//       return;
//     }
//     try {
//       const { data } = await axios.post('/api/users/register', {
//         name,
//         email,
//         password,
//       });
//       dispatch({ type: 'USER_LOGIN', payload: data });
//       jsCookie.set('userInfo', JSON.stringify(data));
//       router.push(redirect || '/');
//     } catch (err) {
//       enqueueSnackbar(getError(err), { variant: 'error' });
//     }
//   };
//   return (
//     <Layout title="Register">
//       <Form onSubmit={handleSubmit(submitHandler)}>
//         <Typography component="h1" variant="h1">
//           Register
//         </Typography>
//         <List>
//           <ListItem>
//             <Controller
//               name="name"
//               control={control}
//               defaultValue=""
//               rules={{
//                 required: true,
//                 minLength: 2,
//               }}
//               render={({ field }) => (
//                 <TextField
//                   variant="outlined"
//                   fullWidth
//                   id="name"
//                   label="Name"
//                   inputProps={{ type: 'name' }}
//                   error={Boolean(errors.name)}
//                   helperText={
//                     errors.name
//                       ? errors.name.type === 'minLength'
//                         ? 'Name length is more than 1'
//                         : 'Name is required'
//                       : ''
//                   }
//                   {...field}
//                 ></TextField>
//               )}
//             ></Controller>
//           </ListItem>

//           <ListItem>
//             <Controller
//               name="email"
//               control={control}
//               defaultValue=""
//               rules={{
//                 required: true,
//                 pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
//               }}
//               render={({ field }) => (
//                 <TextField
//                   variant="outlined"
//                   fullWidth
//                   id="email"
//                   label="Email"
//                   inputProps={{ type: 'email' }}
//                   error={Boolean(errors.email)}
//                   helperText={
//                     errors.email
//                       ? errors.email.type === 'pattern'
//                         ? 'Email is not valid'
//                         : 'Email is required'
//                       : ''
//                   }
//                   {...field}
//                 ></TextField>
//               )}
//             ></Controller>
//           </ListItem>
//           <ListItem>
//             <Controller
//               name="password"
//               control={control}
//               defaultValue=""
//               rules={{
//                 required: true,
//                 minLength: 6,
//               }}
//               render={({ field }) => (
//                 <TextField
//                   variant="outlined"
//                   fullWidth
//                   id="password"
//                   label="Password"
//                   inputProps={{ type: 'password' }}
//                   error={Boolean(errors.password)}
//                   helperText={
//                     errors.password
//                       ? errors.password.type === 'minLength'
//                         ? 'Password length is more than 5'
//                         : 'Password is required'
//                       : ''
//                   }
//                   {...field}
//                 ></TextField>
//               )}
//             ></Controller>
//           </ListItem>
//           <ListItem>
//             <Controller
//               name="confirmPassword"
//               control={control}
//               defaultValue=""
//               rules={{
//                 required: true,
//                 minLength: 6,
//               }}
//               render={({ field }) => (
//                 <TextField
//                   variant="outlined"
//                   fullWidth
//                   id="confirmPassword"
//                   label="Confirm Password"
//                   inputProps={{ type: 'password' }}
//                   error={Boolean(errors.confirmPassword)}
//                   helperText={
//                     errors.confirmPassword
//                       ? errors.confirmPassword.type === 'minLength'
//                         ? 'Confirm Password length is more than 5'
//                         : 'Confirm Password is required'
//                       : ''
//                   }
//                   {...field}
//                 ></TextField>
//               )}
//             ></Controller>
//           </ListItem>
//           <ListItem>
//             <Button variant="contained" type="submit" fullWidth color="primary">
//               Register
//             </Button>
//           </ListItem>
//           <ListItem>
//             Already have an account?{' '}
//             <NextLink href={`/login?redirect=${redirect || '/'}`} passHref>
//               <Link>Login</Link>
//             </NextLink>
//           </ListItem>
//         </List>
//       </Form>
//     </Layout>
//   );
// }
