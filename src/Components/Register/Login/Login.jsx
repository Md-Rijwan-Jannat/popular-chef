import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    // AuthContext
    const { loginUser, googleUser, githubUser } = useContext(AuthContext);
    // on submit handle 
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // loginUser
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset('')
                toast.success('Successfully login')
                navigate(from, {replace:true})
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }
    const googleHandler = () => {
        // google login 
        googleUser()
            .then(result => {
                console.log(result)
                toast.success('Successfully login')
                navigate(from, {replace:true})
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message);
            })
    }
    const githubHandler = () => {
        // git hub 
        githubUser()
            .then(result => {
                console.log(result)
                toast.success('Successfully login')
                navigate(from, {replace:true})
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message);
            })
    }
    return (
        <div className='lg:flex w-full justify-items-center items-center h-full my-5'>

            <div className='lg:w-1/2 flex justify-items-center items-center'>
                <img className='w-1/2 ' src="https://static5.depositphotos.com/1036149/436/i/950/depositphotos_4367749-stock-photo-chef-3d-illustration.jpg" alt="" />
            </div>
            <div className="lg:w-1/2 shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="p-8">
                    <div className='text-center flex flex-col items-center justify-items-center'>
                        <h2 style={{ fontFamily: ' cursive' }} className='text-4xl font-bold my-3 text-red-700 '>Please Login and <br /><span className='text-orange-500'> see our recipe</span> </h2>
                        <img className='w-[200px] border rounded-full shadow-lg' src="https://img.freepik.com/premium-vector/chinese-restaurant-logo-design-template-inspiration-vector-illustration_556641-201.jpg" alt="" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"><b>Email</b></span>
                        </label>
                        <input type="email" name='email' required placeholder="Enter email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"><b>Password</b></span>
                        </label>
                        <div className='flex items-center gap-3'>
                            <input type={show ? 'text' : 'password'} required name='password' placeholder="Enter password" className="input input-bordered w-full" /><small onClick={() => setShow(!show)}>
                                {
                                    show ? <FaEyeSlash /> : <FaEye />
                                }
                            </small>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary my-2 bg-orange-500 hover:bg-red-600 border-none">Login</button>
                    </div>
                </form>

                <div className='px-5'>
                    <button onClick={googleHandler} className="w-full btn my-2 btn-outline hover:bg-blue-300 hover:border-none border-blue-300"><img className='w-10 rounded-full pr-1' src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227" alt="" /> continue with github</button>
                    <button onClick={githubHandler} className="w-full btn my-2 btn-outline"><img className='w-12 pr-1' src="https://pngimg.com/uploads/github/github_PNG40.png" alt="" /> continue with github</button>
                </div>
                <p className='text-center text-lg text-gray-700 my-5'><small>You have't account? please <b> <u className='text-blue-500'><Link to={'/register'}>register</Link></u></b></small></p>

            </div>
        </div>
    );
};

export default Login;