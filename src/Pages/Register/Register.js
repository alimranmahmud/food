import React, { useContext } from 'react';
import { ContextProvider } from '../../Firbase/AuthContext';
import { Link } from 'react-router-dom';

const Register = () => {
    const { googleSingin, createEmailPassword } = useContext(ContextProvider)
    const handleClickRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value
        console.log(name, email, password, confirm)

        createEmailPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user.uid) {
                    alert('registration successfully')
                }
                form.reset()
                console.log(user)
            })
            .then((error) => {
                console.log(error)
            })

    }

    const handleClickGoogle = () => {
        googleSingin()
            .then((result) => {
                const user = result.user
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">REGISTER NOW!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleClickRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
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

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" placeholder="confirm password" name='confirm' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <p className="label-text-alt">Already Have An Account Please <Link className="label-text-alt link link-hover" to='/login'>Log In </Link></p>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary mb-2">Register</button>
                        </div>
                    </form>
                    <button onClick={handleClickGoogle} className="btn btn-primary">Google </button>

                </div>
            </div>
        </div>
    );
};

export default Register;