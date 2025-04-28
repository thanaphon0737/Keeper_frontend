import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { loginUser, registerUser } from "../services/api";
function Register() {
    const navigate = useNavigate();
  const [formData, setFromData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    const register = async () => {
      try {
        const res = await registerUser(username, email, password);
        console.log("register with : ", { username, email, password });
        if(res.status === 200){
            login();
        }
      } catch (error) {
        console.error(error);
      }
    };
    const login = async () => {
      try {
        const res = await loginUser(email, password);
        if(res.status === 200){

            console.log("login success");
            navigate("/dashboard");
            console.log("data sending back", res.data);
            sessionStorage.setItem("userId", res.data.userId);
        }
      } catch (error) {
        console.error(
          "Login failed:",
          error.response?.data?.message || error.message
        );
      }
    };

    register();
  };
  return (
    <div className="flex justify-center items-center h-screen bg-[#D6DFE8]">
      <div className="flex border-2 rounded-lg w-[500px] h-[550px] justify-center items-center bg-white">
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-4 items-center"
        >
          <h1 className="text-xl">Member Register</h1>
          <input
            type="text"
            name="username"
            className="bg-gray-400 rounded-lg p-1"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            className="bg-gray-400 rounded-lg p-1"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            className="bg-gray-400 rounded-lg p-1"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="border-2 bg-blue-400 p-1 rounded-lg w-full"
          >
            Register
          </button>
          <Link to="/login" className="place-self-start text-gray-400">
            Login again
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Register;
