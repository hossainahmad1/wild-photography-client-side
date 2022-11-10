import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import img from '../../asset/login/login.svg';
import app from '../../firebase/firebase.config';
import { AuthContex } from '../../Provider/AuthProvider';



const auth = getAuth(app)

const SignUp = () => {
    const { createUser, user, signInWithGoogle } = useContext(AuthContex);
    const [review, setReview] = useState('')

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateUser(name)
                form.reset()

            })
            .catch(err => console.log(err))
    }

    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                console.log('display name updated')
            })
            .catch(error => console.error(error))
    }

    const handleSignInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div className="hero mt-5 mb-10">
            <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h2 className='text-4xl font-bold mb-12 text-center'>SignUp Now </h2>
                    <p className='text-2xl font-bold'>Sign up is a phrase referring to the creation of an online account using an e-mail address or a username and password</p>
                </div>
                <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">SignUp </h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleSignInGoogle} className="btn btn-primary"><FaGoogle></FaGoogle> SignUp with Google</button>
                        </div>
                    </div>
                    <p className='text-center mb-8 py-5'>Already Have an account? <Link className='text-orange-500' to='/login'>Login</Link></p>
                </form>

            </div>
        </div>
    );
};

export default SignUp;