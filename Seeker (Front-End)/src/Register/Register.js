import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginError, setloginError] = useState(null);
  const [password2, setpassword2] = useState("");
  const [name, setname] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:80/users/register", {
        password,
        email,
        password2,

        name,
      })
      .then((response) => {
        console.log(response.data);
        if (response?.data?.message == "registered successfully") {
          alert("registered successfully");
          navigate("/login");
        } else {
          setloginError("Could not regster");
        }
      })
      .catch((err) => {
        setloginError(err.response.data.message);
      });
  };
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/", { replace: true });
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









    
    
    
      <form onSubmit={handleRegister}>

      <div class="container" style={{paddingTop: "106px"}}>






      <div class="row d-flex d-md-flex justify-content-center justify-content-md-center align-items-md-center">


<div class="col-4 col-md-4 col-lg-4 col-xl-3 d-flex d-xl-flex justify-content-center justify-content-xl-center"
                             style={{width: "240.5px"}}>

          <label
                           htmlFor="registerName" class="col-form-label text-start d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"
                            style={{fontSize: "32px",color: "var(--bs-light)"}}>


           <strong>Name</strong> 
          </label>
          </div>


          <div class="col-8 col-sm-12 col-md-6 col-lg-6 col-xl-4 d-flex d-sm-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-xl-center">
          <input 

className="border rounded form-control-lg d-sm-flex d-xl-flex flex-fill justify-content-sm-center justify-content-xl-center align-items-xl-center"
                                 style={{width: "235px",height: "25px",padding: "33px 2px",margin: "5px"}}
                                   placeholder="  Enter User Name" required="" name="userName"

            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            type="text"
            id="registerName"
          
          />


       
</div>
</div>










<div class="row d-flex d-md-flex justify-content-center justify-content-md-center align-items-md-center">


<div class="col-4 col-md-4 col-lg-4 col-xl-3 d-flex d-xl-flex justify-content-center justify-content-xl-center"
                             style={{width: "240.5px"}}>

          <label   class="col-form-label text-start d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"
                            style={{fontSize: "32px",color: "var(--bs-light)"}} htmlFor="registerEmail">
                          
           <strong>Email</strong>
          </label>
          </div>
          <div class="col-8 col-sm-12 col-md-6 col-lg-6 col-xl-4 d-flex d-sm-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-xl-center">
          <input

className="border rounded form-control-lg d-sm-flex d-xl-flex flex-fill justify-content-sm-center justify-content-xl-center align-items-xl-center"
                                 style={{width: "235px",backgroundColor:"rgb(232 241 254)" ,height: "25px",padding: "33px 2px",margin: "5px"}}
                                   required="" name="userName"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            id="registerEmail"
            placeholder="email"
          />
          </div>
        </div>












        <div class="row d-flex d-md-flex justify-content-center justify-content-md-center align-items-md-center">


<div class="col-4 col-md-4 col-lg-4 col-xl-3 d-flex d-xl-flex justify-content-center justify-content-xl-center"
                             style={{width: "240.5px"}}>          <label class="col-form-label text-start d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"
                            style={{fontSize: "32px",color: "var(--bs-light)"}} htmlFor="registerPassword">
           <strong>Password</strong> 
          </label></div>
          <div class="col-8 col-sm-12 col-md-6 col-lg-6 col-xl-4 d-flex d-sm-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-xl-center">

          <input
className="border rounded form-control-lg d-sm-flex d-xl-flex flex-fill justify-content-sm-center justify-content-xl-center align-items-xl-center"
                                 style={{width: "235px",backgroundColor:"rgb(232 241 254)" ,height: "25px",padding: "33px 2px",margin: "5px"}}
                                   required="" name="userName"


            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="password"
            type="password"
            id="registerPassword"
          
          />
          </div>
        </div>







        <div class="row d-flex d-md-flex justify-content-center justify-content-md-center align-items-md-center">


<div class="col-4 col-md-4 col-lg-4 col-xl-3 d-flex d-xl-flex justify-content-center justify-content-xl-center"
                             style={{width: "240.5px"}}>      
          <label class="col-form-label text-start d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-start align-items-lg-center justify-content-xl-center align-items-xl-center"
                            style={{fontSize: "32px",color: "var(--bs-light)"}} htmlFor="registerRepeatPassword">
         <strong style={{fontSize:"25px"}}>Repeat password</strong>
          </label></div>
          <div class="col-8 col-sm-12 col-md-6 col-lg-6 col-xl-4 d-flex d-sm-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-xl-center">
          <input


className="border rounded form-control-lg d-sm-flex d-xl-flex flex-fill justify-content-sm-center justify-content-xl-center align-items-xl-center"
                                 style={{width: "235px",backgroundColor:"rgb(232 241 254)" ,height: "25px",padding: "33px 2px",margin: "5px"}}
                                   required="" name="userName"


            value={password2}
            onChange={(e) => {
              setpassword2(e.target.value);
            }}
            placeholder="repeat password"
            type="password"
            id="registerRepeatPassword"
          
          />
        </div>

</div>




        {loginError && <div className="alert alert-danger">{loginError}</div>}
<div className="d-flex justify-content-center" style={{marginTop:"15px"}}>
        <button type="submit" class="btn  btn-primary active d-sm-flex d-md-flex justify-content-sm-center justify-content-md-center"
         style={{height: "41px",width: "138.3281px",margin: "9px",background: "#2069c9",fontSize:"large"}}
        >
          Register
        </button>

</div>
<div className="d-flex justify-content-center" style={{marginTop:"15px"}}>

<a href="/login" class="btn  btn-primary active d-sm-flex d-md-flex justify-content-sm-center justify-content-md-center">Login?</a>
</div>

</div>
      </form>
    </div>






 
  );
}

export default Register;
