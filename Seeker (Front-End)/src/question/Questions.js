import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import React, { useEffect, useState } from "react";
import "./Question.css"
function Questions(props) {
	// <HomePage />
 
	// const questions = ["how ", "why", "when"]
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [score1, setScore1] = useState(0);
	const [score2, setScore2] = useState(0);
	const [score3, setScore3] = useState(0);
 let levelOfknowledge;
 let suggString= 'The suggested sourse for you is ';
 let suggestedCourse;

 // new empty line
 function NewlineText(props) {
	const text = props.text;
	return <div>{text}</div>;
  }


  let navigate = useNavigate();
  useEffect(() => {
	  if (!localStorage.getItem("token")) {
		  navigate("/login", { replace: false });
		  navigate(0);
	  }
  });


  // level of knowledge
  const getResult = (score) => {
		if(score === 0){
			levelOfknowledge = 'biggener. ';
			suggestedCourse = 'JAVA from zero'
			return [levelOfknowledge, <NewlineText text={'‎'} />, suggString, suggestedCourse, <NewlineText text={'‎'} />] ;

	   }else if (score === 1) {
		levelOfknowledge = 'medium.';
		suggestedCourse = 'functions of JAVA'
		return [levelOfknowledge, <NewlineText text={'‎'} />, suggString, suggestedCourse, <NewlineText text={'‎'} />] ;
	   } else {
		levelOfknowledge = 'expert.';
		suggestedCourse = 'JAVA hero.'
		return [levelOfknowledge, <NewlineText text={'‎'} />, suggString, suggestedCourse, <NewlineText text={'‎'} />] ;
	   }
};
  
	const handleAnswerOptionClick = () => {
	
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < 3) {
			setCurrentQuestion(nextQuestion);
			let answer = document.getElementById('textid').value

			// const fetchCourses = () => {
			// 	axios.get("http://localhost:80/courses/favourites").then((response) => {
			// 		console.log(response.data.courses);
			// 		setCourses(response.data.courses);
			// 	});
			// };

			let sent1 ="process of analyzing a data set in an unstructured way"
			let courseID = ""

			if(nextQuestion == 1){
			sent1 = "process of analyzing a data set in an unstructured way"
			courseID = "6278f0f67100a3af2d75e317"
			// setScore1(answer)
			}

			if(nextQuestion == 2){
			sent1 = "technique makes use of graphics to show relationships between 2 or more datasets"
			courseID = "6278f1be7100a3af2d75e31b"
			// setScore2(answer)
			}


			var payload = {
				sent1: sent1,
				sent2: answer,
				courseID: courseID
			};
			
			var dataToSent = JSON.stringify({

				sent1: sent1,
				sent2: answer,
				courseID: courseID
			
			  })
			// var dataToSent = new FormData();
			// dataToSent.append( "json", JSON.stringify( payload ) );
			
			// fetch("http://localhost:80/postdatatoFlask",
			// {
			// 	method: "PUT",
			// 	body: dataToSent
			// })
			// .then(function(res){ 
			// 	console.log(res)
			// 	if(nextQuestion == 1){
			// 		setScore1(res)
			// 	}else
			// 	setScore2(res)
			// 	return res.json(); })


			// const fetchAnser = () => {
				axios.put("http://localhost:80/postdatatoFlask", dataToSent,
				{
					headers: {
					'Content-Type': 'application/json'
					}

				}
				).then((response) => {
					console.log(response.data);
					if(nextQuestion == 1){
						setScore1(response.data)
					}else
						setScore2(response.data)
					// setScore2(response);
				});
				console.log("axios call", dataToSent)
			// };

			


			// console.log(answer)
		} else {
			let answer = document.getElementById('textid').value

				var dataToSent = JSON.stringify({

					sent1: "process involves setting up ways of collecting and understanding data",
				sent2: answer,
				courseID: "6278f2ca7100a3af2d75e31f"
				
				  })


			
			// fetch("http://localhost:80/postdatatoFlask",
			// {
			// 	method: "PUT",
			// 	body: dataToSent
			// })
			// .then(function(res){ 
			// 	console.log(res)
			// 	setScore3(res)
			// 	return res.json(); })

			// const fetchAnser = () => {
				axios.put("http://localhost:80/postdatatoFlask", dataToSent,
				{
					headers: {
					'Content-Type': 'application/json'
					}

				}
				).then((response) => {
					console.log(response.data);
					setScore3(response.data)
				});
			// };

			// fetchAnser


			setShowScore(true);


      
		}
    

	};

	// if(score === 0){
	// 	txt.replace('Your level is biggener') 
	//    }else if (score === 1) {
	// 	txt.replace('Your level is mideum')  
	//    } else {
	// 	txt.replace('Your level is expert ') 
	//    }
	return (
		
		<div className='app'>
			{/* <HomePage b/> */}
			{showScore ? (
				<div className='score-section' >
				<br />

				<span style={{color:"white"}}>	You scored ({score1}) out of 1 for the first question. </span><br /><br />
				<span style={{color:"white"}}>	You scored ({score2}) out of 1 for the second question. </span><br /><br />
				<span style={{color:"white"}}>	You scored ({score3}) out of 1 for the third question.</span> <br /><br />

					<div className='d-flex justify-content-end' style={{width:"100%"}}>

          <a className='Enroll-btn MyBtn2' href="/bookmarks" style={{boxShadow:"0px 0px 0px 0px #ebebeb"}}>Submit</a>
          </div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span style={{color:"white"}}>Question {currentQuestion + 1}/3</span>
						</div>
						<div className='question-text'> 	<span style={{color:"white",fontSize:"large"}}> {props.questions[currentQuestion]}</span></div>
					</div>

					<textarea className='textarea2' id= "textid" name="textTaken" placeholder='Right what you know' ></textarea>

				<div className='answer-section d-flex justify-content-end ' >
					<div className='d-flex justify-content-end'>
							<button style={{boxShadow:"0px 0px 0px 0px #ebebeb"}} className='Enroll-btn MyBtn2' onClick={() => handleAnswerOptionClick()}>Next</button>
							</div>  
					</div>
				</>
			)}
		</div>
	);
}
export default Questions;
