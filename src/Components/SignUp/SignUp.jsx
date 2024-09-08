import React from "react";
import "./SignUp.css";
import { useForm, SubmitHandler } from "react-hook-form";
import login1 from "../../assets/Group 18.png";
import login2 from "../../assets/amico.png";
import login3 from "../../assets/geo_turf-point-grid.png";
import { Link, useNavigate } from "react-router-dom";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUp() {
  let navigate = useNavigate();
  const loginSchema = z.object({
    First_name: z
      .string()
      .min(3, "not valid Name Less than 3 chart")
      .max(10, "not valid Name more than 10 chart")
      ,
    Last_name: z
      .string()
      .min(3, "not valid Name Less than 3 chart")
      .max(10, "not valid Name more than 10 chart")
      ,
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
    navigate('/login')
  }

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-md-5 ">
            <img src={login3} alt="" />
            <div className="welcome-caption">
              <p>Nice to see you </p>
              <h2>Welcome!</h2>
              <img src={login1} alt="" />
            </div>
            <div className="main-photo">
              <img src={login2} alt="" />
            </div>
            <button>
              <Link to={"/login"}>Login</Link>
            </button>
          </div>
          <div className="col-md-7 ">
            <form onSubmit={handleSubmit(getdata)}>
              <div className="form-caption">
                <h2>Let’s Get Started</h2>
                <h3>Create An Account</h3>
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
              <input type="text" className="" placeholder="First Name" {...register("First_name")} />
              {errors.First_name && <span >{errors.First_name.message}</span> }

              <input type="text" className="" placeholder="Last Name" {...register("Last_name")} />
              {errors.Last_name && <span >{errors.Last_name.message}</span> }
              
              <input type="text" placeholder="E-mail" {...register("email")} />
              {errors.email && <span >{errors.email.message}</span> }
            
              <input
                type="text"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && <span >{errors.password.message}</span> }

              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
