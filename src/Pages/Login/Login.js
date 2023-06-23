import React, { useContext } from 'react';
import { ContextProvider } from '../../Firbase/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginimage from '../../assets/login/login.jpeg'

const Login = () => {
    const { login } = useContext(ContextProvider)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.form?.pathname || '/';
    const handleClickLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const passowrd = form.password.value;
        console.log(email, passowrd)
        login(email, passowrd)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user.uid) {
                    alert('log in successfull')
                }
                form.reset()
                navigate(from, { replace: true })
                console.log(user)

            })
            .catch((error) => console.log(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <img className='rounded-full' src={loginimage} alt="" />
                </div>
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 lg:mr-[300px]">
                    <form onSubmit={handleClickLogin} className="card-body">
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
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <p className='label-text-alt' > Are You Create A New Account Please !!! <Link className="label-text-alt link link-hover" to='/register'>Register</Link></p>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;