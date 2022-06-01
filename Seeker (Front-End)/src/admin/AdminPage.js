import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./AdminPage.css"
import NavBarSide from '../Components/SideNavBar/NavBarSide';
import NavBar from '../Components/NavBar/NavBar';
function AdminPage(props) {
	
  let navigate = useNavigate();
  useEffect(() => {
      if (!localStorage.getItem("token")) {
          navigate("/login", { replace: false });
          navigate(0);
      }
  });

const [formValue, setformValue] = React.useState({
  title: '',
  subtitle: '',
  courseSite: '',
  image_url: ''
});

const [courseId, setcourseId] = React.useState('');


const handleSubmit = async() => {
  // store the states in the form data
  const courseFormData = JSON.stringify({
    title: formValue.title,
    subtitle: formValue.subtitle,
    courseSite: formValue.courseSite,
    image_url: formValue.image_url
  })
  // courseFormData.append("title", formValue.title)
  // courseFormData.append("subtitle", formValue.subtitle)
  // courseFormData.append("courseSite", formValue.courseSite)
  // courseFormData.append("image_url", formValue.image_url)

  console.log(courseFormData)
  axios.post('http://localhost:80/api/course ', courseFormData,
   {
    headers: {
    'Content-Type': 'application/json'
    }
  }
  )
  .then(response => console.log(response.data))
  .catch(error => {
      this.setState({ errorMessage: error.message });
      console.error('There was an error!', error);
  });
  
}

const handleChange = (event) => {
  setformValue({
    ...formValue,
    [event.target.name]: event.target.value
  });
}

const handleCourseIdChange = (event) => {
  setcourseId(event.target.value);
}

const handleCourseDelete = async(id) => {
  await axios.delete(`http://localhost:80/api/course/${id}`)
  .then(response => console.log(response.data))
  .catch(error => {
      

      console.error('There was an error!');
  }
  )
}

	return (
        
<div>

  <NavBar />
  <NavBarSide />
<div className='container'>


<div className='row'>

    <div className='offset-col-2 col-md-2 offset-col-4 col-2 Edit'>
    <h3>Edit Courses</h3>
    
    
    </div>
</div>











<div className='row'>
<div className='offset-md-2 col-md-8 courseInput'>
<form onSubmit={handleSubmit}>

<br />
    <h2>Add Course</h2>

    <br />

    <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Course Name</span>
  <input type="text" class="form-control" name="subtitle" value={formValue.subtitle} onChange={handleChange} aria-describedby="basic-addon1" />
</div>

    <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Provider</span>
  <input type="text" class="form-control" name="title" value={formValue.title} onChange={handleChange}   aria-describedby="basic-addon1" />
</div>


<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">URL</span>
  <input type="text" class="form-control" name="courseSite" value={formValue.courseSite} onChange={handleChange}   aria-describedby="basic-addon1" />
</div>

<div class="input-group mb-3">
  <span class="input-group-text">Image url</span>
  <input type="text" class="form-control" name="image_url" value={formValue.image_url} onChange={handleChange} aria-label="Amount (to the nearest dollar)" />
 
</div>

    <div class="input-group">
  <span class="input-group-text ">Description</span>
  <textarea class="form-control top" aria-label="With textarea"></textarea>
  
</div>

<button type="submit" class="btn btn-secondary myButton">Add</button>
</form>
<br />

<h2>Delete Course</h2>
<br />




<div class="input-group mb-3">
  <span class="input-group-text">Course ID</span>
  <input type="text"  class="form-control input-width" name="courseId" value={courseId} onChange={handleCourseIdChange} />
  <button type="button" class="btn btn-secondary myButton" onClick={handleCourseDelete(courseId)} style={{marginLeft:"10px"}}>Delete</button>

</div>





    </div>


</div>






</div>
</div>
        
		);
}
export default AdminPage;
