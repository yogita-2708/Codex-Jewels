import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import "./Appointment.css";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
    Button
  } from '@chakra-ui/react'
import Navbar from "../Pages/Navbar";
const Appointment = () => {
    const [display, setDisplay] = useState("none");
    return(<>
        <div>
            <div className="mainDiv">
                <img src="https://www.avtaara.com/wp-content/uploads/2020/04/5e8b141d1c67e.png.webp" alt="" />
                <div className="mainDiv-2"><h1>Your Favourite Designs at Your Doorstep!</h1>
                <input type="number" required="true" placeholder="Enter Pincode" /><br />
                <button onClick={() => setDisplay('')} ><h4>submit</h4></button></div>
                <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            display={display}
            >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                Your Pin is Recorded!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                Thanks for submitting your Pin. Our team will get back to you soon.
            </AlertDescription>
        </Alert>
            </div>
        </div>
        <div className="footer1">
            <Footer/>
        </div>
        
        </>
    )
}

export default Appointment;