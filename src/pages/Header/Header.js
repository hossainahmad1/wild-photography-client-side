import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo/logo.png';
import { AuthContex } from '../../Provider/AuthProvider';



const Header = () => {
    const { user, logOut } = useContext(AuthContex)

    const navbarItems = <>
        <li className=' text-xl font-medium '><Link to='/'>Home</Link></li>
        {
            user?.email ?
                <>
                    <li className=' text-xl font-medium '><Link to='/myreview'>My Review</Link></li>
                    <li className=' text-xl font-medium '><Link to='/addservice'>Add Service</Link></li>
                </>
                :
                <></>
        }
        <li className=' text-xl font-medium '><Link to='/blog'> Blog </Link></li>
    </>

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }



    return (
        <div className="navbar bg-stone-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-base-100 rounded-box w-52">
                        {navbarItems}
                    </ul>
                </div>
                {/* <Link to='/'>
                    <img className='rounded-md' src={logo} alt="" />
                </Link> */}
                <h1 className='text-2xl font-bold ml-2'><Link to='/'>My Embodied</Link></h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbarItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <button onClick={handleSignOut} className='mx-2 font-medium text-lg'>SignOut</button>
                        :
                        <>
                            <Link className='mx-2 font-medium text-lg' to='/login'>Login</Link>
                            <Link className='mx-2 font-medium text-lg' to='/signup'>SignUp</Link>
                        </>
                }
            </div>
        </div >
    );
};

export default Header;