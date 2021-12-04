import React from 'react';
import './Registration Form CSS.css'
  
const MultipleInputs = () => {
  
    return(
        <body>
  <form>
    <div class="loginbox">


    <h1>Signup Here</h1>
    
    <p>Registration Name</p>
    <input type="text" name=""  placeholder="Your Registration Name" required/>
    <br></br> 
    <p>User Name</p>
    <input type="text" name="" placeholder="Your User Name" required/>
    <br></br>
    <p>DOB</p>
    <input type="date" name="" required/>
    <br></br>
    <p>Mobile Number</p>
    <input type="tel" name="" placeholder="Your Mobile Number" required/>
    <br></br>
    <p>Email ID</p>
    <input type="email" name="" placeholder="Your Email ID" />
    <br></br>
    <p>City</p>
    <input type="text" name="" placeholder=" Your City" required/>
    <br></br>
    <button type="submit">Signup</button>
    </div> 
      </form>
    </body>
    )
  }
  export default MultipleInputs