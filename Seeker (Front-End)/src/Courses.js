import 'bootstrap/dist/css/bootstrap.min.css';
import {React, useEffect, useState} from "react";
import './App.css';
import ActualCourse from './Components/Home/Card/ActualCourse';
import { Auth0Context, useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkPlusFill } from "react-icons/bs";



function Courses (props) {





	const [items, setCourses] = useState([]);
	
	const fetchCourses = () => {
		axios.get("http://localhost:80/api/course").then((response) => {
		  console.log(response.data.courses);
		  setCourses(response.data);
		});
	  };
	


	
  //========== Favourite  courses=====================================
  const addToFavourites = async (id) => {
    axios
      .put(`http://localhost:80/courses/favourite/${id}`)
      .then((response) => {
        console.log(response.data.message);
        fetchCourses();
      });
  };
  const removeFromFavourites = async (id) => {
    axios
      .put(`http://localhost:80/courses/favourite/remove/${id}`)
      .then((response) => {
        console.log(response.data.message);
        fetchCourses();
      });
  };




  //========== bookmark    courses =====================================
  const addToBookmarks = async (id) => {
    axios
      .put(`http://localhost:80/courses/bookmark/${id}`)
      .then((response) => {
        console.log(response.data.message);
        fetchCourses();
      });
  };
  const removeFromBookmarks = async (id) => {
    axios
      .put(`http://localhost:80/courses/bookmark/remove/${id}`)
      .then((response) => {
        console.log(response.data.message);
        fetchCourses();
      });
  };

 

	useEffect(async () => {
		 fetchCourses();
		

		
    }, []);
	
	
	
	// Render is used to
		return (
		<div className = "App">

<div className="">
    
         
    <div className='row d-flex justify-content-center'>


			{ items.length ? (
                items.map((item) => ( 
					<ActualCourse
					_id = {item._id}
					title={item.title}
					subtitle={item.subtitle}  
					image_url={item.image_url}
					courseSite = {item.courseSite} 
					isFavourite = {false}
					isBookmarked = {false}             
					/>
				
                ))
			) : (
				<div>Loading...</div>
			)}
            
			   </div>
			   </div>
		</div>

    
	);

  
 
     
  

  }



export default Courses;
