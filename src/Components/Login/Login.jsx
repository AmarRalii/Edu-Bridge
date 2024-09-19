import React from "react";
import "./Login.css";
import { useForm, SubmitHandler } from "react-hook-form";
import login1 from "../../assets/Group 18.png";
import login2 from "../../assets/amico.png";
import login3 from "../../assets/geo_turf-point-grid.png";
import { Link, useNavigate } from "react-router-dom";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

export default function Login() {
  let navigate = useNavigate();
  const loginSchema = z.object({
    email: z
      .string()
      .min(3, "not valid  E-mail")
      .max(25, "not valid  E-mail")
      .email({ message: "not valid email" }),
    password: z
      .string()
      .min(3, "not valid Password")
      .max(25, "not valid Password"),
    role:z.string()
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onchange",
    resolver: zodResolver(loginSchema),
  });

  async function getdata(data) {
    try{
      let { data1 } = await axios.post(`http://localhost:5000/api/v1/login`,data);
      if(data1.jwt!= null){

        navigate("/dashboard");
        localStorage.setItem('token',data1.jwt)
        reset()
        console.log(data);
      }
      }
      catch(error){
        console.log('there is somthing wrong');
    }
  }

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-5 ">
            <img src={login3} alt="" />
            <div className="welcome-caption">
              <p>Nice to see you again</p>
              <h2>Welcome Back!</h2>
              <img src={login1} alt="" />
            </div>
            <div className="main-photo">
              <img src={login2} alt="" />
            </div>
            <button>
              <Link to={"/signup"}>Signup</Link>
            </button>
          </div>
          <div className="col-md-7 ">
            <form onSubmit={handleSubmit(getdata)}>
              <div className="form-caption">
                <h2>Let’s Get Started</h2>
                <h3>Login Account</h3>
              </div>
              <div className="social-links">
                <a href="">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-google"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-apple"></i>
                </a>
              </div>
              <input type="text" placeholder="E-mail" {...register("email")} />
              {errors.email && <span >{errors.email.message}</span> }
            
              <input type="text" placeholder="Password" {...register("password")} />
              {errors.password && <span >{errors.password.message}</span> }

              <input type="text" placeholder="Role" {...register("role")} />
              {errors.role && <span >{errors.role.message}</span> }

              <Link className="w-100 ">Forget Password ?</Link>
              <button type="submit">Log in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
