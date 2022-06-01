import 'bootstrap/dist/css/bootstrap.min.css';
import Crousal from './Components/Home/Slider/Crousal'
import Card from './Components/Home/Card/Card'
import CardPath from './CardPath'
import ActualCourse from './Components/Home/Card/ActualCourse'
import Courses from './Courses'
import React from "react";
import LoginButton from './Components/loginbutton';
import LogoutButton from './Components/logoutbutton';
import NavBar from './Components/NavBar/NavBar';
import NavBarSide from './Components/SideNavBar/NavBarSide';


class Home extends React.Component {


    
		
	render() {
		
return (

      <div style={{ backgroundColor: "#ECF0F3" }}>
        <NavBar />
        <NavBarSide />
        <CardPath />
        <Courses />
        <Crousal />
      </div>

    
	);

  
 
     
  

  }
}


export default Home;



