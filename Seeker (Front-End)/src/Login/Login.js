import axios from "axios";// for post data
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function Login() {
    //Declare React States for error messages
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [loginError, setloginError] = useState(null);


    const handleLogin = (e) => {
        //Prevent page reload
        e.preventDefault();
        axios
            .post("http://localhost:80/users/login", {password, email})
            .then((response) => {
                console.log(response.data);
                if (response?.data?.message == "Success login") {
                    localStorage.setItem("token", response.data.data.token);
                    if (email.includes("@admin.com")) {
                    navigate("/admin");
                    }
                    else{
                    navigate("/");
                    }
                }
            })
            .catch(() => {
                setloginError("Could not login");
            });
    };


    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/", {replace: true});
            navigate(0);
        }
    });







    return (

        <div class="intro-body"
                 style={{
                    
                     height:"100%",
                     backgroundImage: "url(intro-bg.jpg)",backgroundSize: 'cover',
                     overflow: 'hidden',
                     backgroundRepeat  : 'no-repeat',
                     backgroundPosition: 'center',

                 }}>
            {/*<div style={{height: "79px"}}></div>*/}

            <form onSubmit={handleLogin}>

                <div class="container" style={{paddingTop: "106px"}}>

                    <div class="row d-flex d-md-flex justify-content-center justify-content-md-center align-items-md-center">
                        <div class="col-12 col-md-6 col-lg-6 col-xl-3 d-flex d-xl-flex justify-content-center justify-content-xl-center"
                             style={{width: "240.5px"}}><label
                            class="col-form-label text-start d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"
                            style={{fontSize: "32px",color: "var(--bs-light)"}}><strong>Email</strong></label></div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 d-flex d-sm-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-xl-center">
                            <input class="border rounded form-control-lg d-sm-flex d-xl-flex flex-fill justify-content-sm-center justify-content-xl-center align-items-xl-center"
                                   type="text" style={{width: "235px",height: "25px",padding: "33px 2px",margin: "5px"}}
                                   placeholder="  Enter Email " required="" name="userName"


                                value={email}
                                onChange={(e) => {
                                    setemail(e.target.value);
                                }}

                            /></div>
                        <div class="col-12 col-md-6 col-lg-6 col-xl-3 d-flex d-xl-flex justify-content-center justify-content-xl-center"
                             style={{width:"240.5px"}}><label
                            class="col-form-label text-start d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"
                            style={{fontSize: "32px",color:" var(--bs-light)"}}><strong>Password</strong></label></div>
                        <div class="col-12 col-md-6 col-lg-6 col-xl-3 d-flex d-sm-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-xl-center">
                            <input class="border rounded form-control-lg d-sm-flex d-xl-flex flex-fill justify-content-sm-center justify-content-xl-center align-items-xl-center"
                                   type="password" style={{width: "235px",height: "25px",padding: "33px 2px",margin: "5px"}}
                                   placeholder="  Enter Password" name="password" required=""
                                   pattern="!@#$%^&amp;*?+=~"
                                   value={password}
                                   onChange={(e) => {
                                       setpassword(e.target.value);
                                   }}
                            />

                        
                        </div>


                        {/*<div class="col-12 col-sm-12 col-md-11 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center justify-content-md-center align-items-md-center justify-content-lg-center justify-content-xl-start justify-content-xxl-start align-items-xxl-end"*/}
                        {/*     style={{padding:" 0px 12px 0px",paddingTop: "0px",height: "54px",width: "517px"}}><label*/}
                        {/*    class="col-form-label d-inline float-none d-sm-flex d-lg-flex flex-fill justify-content-sm-center align-items-md-center justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"*/}
                        {/*    style={{fontSize: "18px",color: "var(--bs-dark)",textAlign: "left",height: "32px",width: "241.953px",}}><br/><a*/}
                        {/*    href="forgetPasswordPage.php"><strong>Forgot Your Password ?</strong></a></label></div>*/}


{/* 
                        <div class="d-flex justify-content-center mt-3">
                            <div class="col-sm-8 text-center alert alert-danger alert-dismissible fade show"
                                 role="alert">
                                <h5> Invalid Username or Password! </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="alert"
                                        aria-label="Close"></button>
                            </div>
                        </div> */}
    {

                                    loginError &&  <div class="d-flex justify-content-center mt-3">
                            <div class="col-sm-8 text-center alert alert-danger alert-dismissible fade show"
                                 role="alert">
                                <h5> Invalid Username or Password! </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="alert"
                                        aria-label="Close"></button>
                            </div>
                        </div>
                            }


                        <div class="col-12 col-md-11 col-lg-12 d-flex justify-content-center" style={{paddingTop: "23px"}}>
                            <button class="btn btn-primary active d-sm-flex d-md-flex justify-content-sm-center justify-content-md-center"
                                    type="submit" name="submit"
                                    style={{height: "41px",width: "138.3281px",margin: "9px",background: "#2069c9",fontSize:"large"}}>Log In
                            </button>
                        </div>
                        <div class="w-100"></div>
                        <div class="w-100"></div>
                        <div class="w-100"></div>
                    </div>
                </div>
                </form>
        </div>




);
}

export default Login;
