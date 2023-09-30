import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Register = () => {
    const [show, setShow] = useState(false);
    const [photo, setPhoto] = useState(null)
    // AuthContext
    const { user, createUser } = useContext(AuthContext);

    // on submit handle 
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        
        // password validation
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            toast.error('Please added tow uppercase latter!')
            return;
        } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            toast.error('A user cannot submit empty email and password fields')
            return;
        }
        if (password.length < 8) {
            toast.error('The password is less than 8 characters')
            return;
        }
        // register
        createUser(email, password)
            .then(result => {
                const signUpUser = result.user;
                console.log(signUpUser);
                setPhoto(signUpUser);
                form.reset('')
                toast.success('Successfully register');
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message);
            })


    }
    return (
        <div className='lg:flex w-full justify-items-center items-center h-full my-5'>

            <div className="lg:w-1/2 shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="shadow-2xl bg-base-100 p-8">
                    <div className='text-center'>
                        <h2 style={{ fontFamily: ' cursive' }} className='text-4xl font-bold my-3 text-red-700 '>You want recipe <br /><span className='text-orange-500'>info ! register our side</span> </h2>
                        <img className='h-36 border rounded-full shadow-lg' src="https://img.freepik.com/premium-vector/chinese-restaurant-logo-design-template-inspiration-vector-illustration_556641-201.jpg" alt="" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"><b>Username</b></span>
                        </label>
                        <input type="text" name='name' required placeholder="Enter username" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"><b>Photo URL</b></span>
                        </label>
                        <input type="text" name='photo' required placeholder="Enter photo url" className="input input-bordered" />
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
                        <div className='flex items-center gap-3 '>
                            <input type={show ? 'text' : 'password'} name='password' required placeholder="Enter password" className="input input-bordered w-full relative" /><span onClick={() => setShow(!show)}>
                                {
                                    show ? <FaEyeSlash  className='absolute'/> : <FaEye className='absolute'/>
                                }
                            </span>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-orange-500 hover:bg-red-600 border-none">Register</button>
                    </div>
                    <p className='text-center text-lg text-gray-700 my-5'><small>You have a account? please <b> <u className='text-blue-500'><Link to={'/login'}>login</Link></u></b></small></p>
                </form>
            </div>

            <div className='lg:w-1/2 flex justify-items-center items-center'>
                <img className='w-full' src="https://t4.ftcdn.net/jpg/03/31/50/87/360_F_331508755_eDTtcgYlNmjxC7MZIsRgXGsARgkigSaB.jpg" alt="" />
            </div>
        </div>
    );
};

export default Register;