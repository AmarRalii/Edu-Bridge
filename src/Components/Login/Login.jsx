import React from "react";
import "./Login.css";
import { useForm, SubmitHandler } from "react-hook-form";
import login1 from "../../assets/Group 18.png";
import login2 from "../../assets/amico.png";
import login3 from "../../assets/geo_turf-point-grid.png";
import { Link, useNavigate } from "react-router-dom";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  let navigate = useNavigate();
  const loginSchema = z.object({
    email: z
      .string()
      .min(3, "not valid  E-mail")
      .max(25, "not valid  E-mail")
      .email({ message: "not valid email" }),
    password: z.string().min(3, "not valid Password").max(25, "not valid Password"),
  });

  const { handleSubmit, register, formState:{errors,isSubmitting,} ,reset} = useForm({
    mode: "onchange",
    resolver: zodResolver(loginSchema),
  });

  function getdata(data) {
    console.log(data);
    reset()
    navigate('/')
    
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
              {errors.email && <span className="">{errors.email.message}</span> }
            
              <input
                type="text"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && <span className="">{errors.password.message}</span> }

              <Link className="w-100 ">Forget Password ?</Link>
              <button type="submit">Log in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
