import React from "react";
import "./style.css"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Register = React.memo(() => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const save = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="divRegister">
      <form onSubmit={handleSubmit(save)}>
        <div id="login-box">
          <div className="left">
            <h1>Գրանցվել</h1>

            <input type="text" placeholder="Մուտքանուն" {...register("username", { required: "Մուտքագրեք մուտքանուն*" })} />
            {errors.username && (
              <p style={{ fontSize: "12px", color: "red" }}>{errors.username.message}</p>
            )}

            <input type="text" placeholder="Էլ-փոստ" {...register("email", {
              required: "Մուտքագրեք էլ-փաստ*", pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Անվավեր էլփոստի հասցե "
              }
            })} />
            {errors.email && (
              <p style={{ fontSize: "12px", color: "red" }}>{errors.email.message}</p>
            )}

            <input type="password" placeholder="Գաղտնաբառ" {...register("password", {
              required: "Մուտքագրեք գաղտնաբառ*",
              // pattern: {
              //     value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.*\W)(?!.* ).{8,16}$/,
              //     message: "Անվավեր գաղտնաբառ "
              // }
            })} />
            {errors.password && (
              <p style={{ fontSize: "12px", color: "red" }}>{errors.password.message}</p>
            )}

            <input type="password" placeholder="Կրկնել գաղտնաբառը*" {...register("password", {
              required: "Կրկնեք գաղտնաբառը*",
              // pattern: {
              //     value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              //     message: "Անվավեր գաղտնաբառ"
              // }
            })} />
            {errors.password && (
              <p style={{ fontSize: "12px", color: "red" }}>{errors.password.message}</p>
            )}

            <button className="button4"><Link to={"/login"}>Գրանցվել</Link></button>
          </div>

          <div className="right">
            <button className="social-signin facebook">Մուտք գործեք Facebook</button>
            <button className="social-signin twitter">Մուտք գործեք Twitter</button>
            <button className="social-signin google">Մուտք գործեք Gmail</button>
          </div>
          <div className="or">OR</div>
        </div>
      </form>
    </div>
  );
});