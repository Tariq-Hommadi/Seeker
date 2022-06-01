import 'bootstrap/dist/css/bootstrap.min.css';

import ActualCourse from "./Components/Home/Card/ActualCourse"
import Lists from "./Components/Home/Card/Lists"
import courses from './CoursesTest';
import React from "react";
import ActualPath from './ActualPath';
function callCourses(props){
    return(

    <ActualCourse 

    title={props.title}

    provider={props.provider}


    />   );
};
class FavPage extends React.Component {


    
		
	render() {
        

		
return (


      <div className="text-center" style={{width:'100%'}}>


<div style={{display:'block'}}>
      <Lists desc
      // desc={"Check out the Paths that you have foviroted over here"}
      headline={"Favorite paths"}
       />
      </div>
<div className='row ' style={{display:"flex",justifyContent:"center"}}>
        <ActualPath />
        <ActualPath />
</div>
        <br /><br />



      <div style={{display:'block'}}>
      <Lists desc
      // desc={"Find the Courses that you have faviroted over here"}
      headline={"Favorite Courses"}
       />
      </div>

      <div className='row' style={{display:"flex",justifyContent:"center"}}> {courses.map(callCourses)}</div>


        <br /><br />

        
        </div>
	);

  
 
     
  

  }
}


export default FavPage;



