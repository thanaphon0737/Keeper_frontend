import { useState } from "react";
import { Link } from "react-router";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleLogin =async e => {
    e.preventDefault();
    console.log("login with : ", {email,password});
    try {
      const res = await loginUser(email,password);
      console.log(res)
      if(res.status === 200){

        console.log('login success')
        navigate("/dashboard");
        console.log("data sending back",res.data)
        sessionStorage.setItem("userId",res.data.userId)
      }
    }catch (error){
      console.error('Login failed:', error.message)
    }
  }
  return (
    <div className="flex justify-center items-center h-screen bg-[#D6DFE8]">
      <div className="flex border-2 rounded-lg w-[500px] h-[550px] justify-center items-center bg-white">
        <form onSubmit={handleLogin} className="flex flex-col gap-4 items-center">
          <h1 className="text-xl">Member Login</h1>
          <input type="text" 
          className="bg-gray-400 rounded-lg p-1" 
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <input type="text" 
          className="bg-gray-400 rounded-lg p-1" 
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          />
          <button type="submit"
          className="border-2 bg-blue-400 p-1 rounded-lg w-full">Login</button>
          <button className="place-self-start text-gray-400">forgot password?</button>
          <Link to="/register" className="place-self-start text-gray-400">create account</Link>
        </form>
      </div>
    </div>
  );
}
export default Login;
