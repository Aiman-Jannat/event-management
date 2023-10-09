import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useState } from "react";
import { getAuth } from "firebase/auth";


const Login = () => {
  const {user, signIn, logout} = useContext(AuthContext);
  const [error, setError] = useState('');
  const[success, setSuccess] = useState(false);
 
    
  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError('');
    setSuccess(false);
    signIn(email, password)
    .then(res => setSuccess(true))
    .catch(error=>setError(error.message));

  }
    return (
      
           <div>
            <div className="hero min-h-screen bg-blue-50">
  <div className="hero-content flex-col px-24">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-purple-900">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit}>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name="password" required />
          
        </div>
        {error?<p className="text-red-500">{error}</p>:success?<p className="text-green-900">Successfully logged in!</p>:''}
        <div className="form-control mt-6">
            <input type="submit" className="bg-blue-800 rounded-md py-3 text-white font-bold" value="Login" />
          </div>
          <p>Don not have an Account? Please <Link to='/register'><span className="text-blue-900 underline">register</span></Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
        
    );
};

export default Login;