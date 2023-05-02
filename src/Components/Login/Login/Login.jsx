import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = useState(false)
     // on submit handle 
     const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className='flex gap-12 justify-center my-7'>

            <div>
                <img style={{ height: '500px', width: '500px' }} src="https://static5.depositphotos.com/1036149/436/i/950/depositphotos_4367749-stock-photo-chef-3d-illustration.jpg" alt="" />
            </div>
            <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit}  className="card-body">
                    <div className='text-center'>
                        <h2 style={{ fontFamily: ' cursive' }} className='text-4xl font-bold my-3 text-red-700 '>Please Login and <br /><span className='text-orange-500'> see our recipe</span> </h2>
                        <img className='h-36 border rounded-full shadow-lg' src="https://img.freepik.com/premium-vector/chinese-restaurant-logo-design-template-inspiration-vector-illustration_556641-201.jpg" alt="" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"><b>Email</b></span>
                        </label>
                        <input type="email" name='email' placeholder="Enter email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"><b>Password</b></span>
                        </label>
                        <div className='flex items-center gap-3'>
                            <input type={show ? 'text': 'password'} name='password' placeholder="Enter password" className="input input-bordered w-full" /><small onClick={()=>setShow(!show)}>
                                {
                                    show ? <FaEyeSlash/> : <FaEye />
                                }
                            </small>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-orange-500 hover:bg-red-600 border-none">Login</button>
                    </div>
                    <p><small>You have't account? please <b> <u className='text-blue-500'><Link to={'/register'}>register</Link></u></b></small></p>
                </form>
            </div>
        </div>
    );
};

export default Login;