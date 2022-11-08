import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../asset/login/login.svg';

const SignUp = () => {

    const handleSignUp = event => {
        event.preventDefault()
    }

    return (
        <div className="hero mt-5 mb-10">
            <div className="hero-content gap-10 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />

                </div>
                <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">SignUp </h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                    </div>
                    <p className='text-center mb-8 py-5'>Already Have an account? <Link className='text-orange-500' to='/login'>Login</Link></p>
                </form>

            </div>
        </div>
    );
};

export default SignUp;