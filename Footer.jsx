import React from "react";
import './footer.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import ForumIcon from '@mui/icons-material/Forum';
import { color } from "framer-motion";
import { Button, ButtonGroup, Stack, Box, border } from '@chakra-ui/react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const footer = () => {
    return(
        <div>
            <footer className="main-footer">
            <div className="child-footer">
                <ul className="list">
                    <li className="child-footer-1">
                        <h1 className="child-h1">Know Your Jewellery</h1>
                        <ul className="sub-list">
                            <li className="sub-list-1">DIAMOND GUIDE</li>
                            <li className="sub-list-1">JEWELLERY GUIDE</li>
                            <li className="sub-list-1">GEMSTONE GUIDE</li>
                            <li className="sub-list-1">GOLD RATE</li>
                            <li className="sub-list-1">DIGITAL RATE</li>
                        </ul>
                    </li>
                    <li className="child-footer-2">
                        <h1 className="child-h1">CaratLane Advantage</h1>
                        <ul className="sub-list">
                            <li className="sub-list-1">15-DAY RETURNS</li>
                            <li className="sub-list-1">FREE SHIPPING</li>
                            <li className="sub-list-1">FINANCING OPTIONS</li>
                            <li className="sub-list-1">OLD GOLD EXCHANGE</li>
                        </ul>
                    </li>
                    <li className="child-footer-3">
                        <h1 className="child-h1">Customer Service</h1>
                        <ul className="sub-list">
                            <li className="sub-list-1">RETURN POLICY</li>
                            <li className="sub-list-1">ORDER STATUS</li>
                        </ul>
                    </li>
                    <li className="child-footer-4">
                        <h1 className="child-h1">About Us</h1>
                        <ul className="sub-list">
                            <li className="sub-list-1">OUR STORY</li>
                            <li className="sub-list-1">PRESS</li>
                            <li className="sub-list-1">BLOG</li>
                            <li className="sub-list-1">CAREERS</li>
                        </ul>
                    </li>
                    <li className="child-footer-5">
                        <h1 className="child-h2">Contact Us</h1>
                        <ul className="sub-icon">
                            <li className="sub-list-1">
                                <div className="divIcon">
                                    <ul className="Icon-list">
                                        <li className="foot-icon"><PhoneIcon/></li>
                                        <li className="foot-icon"><ForumIcon/></li>
                                        <li className="foot-icon"><WhatsAppIcon/></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sub-list-2">
                                <a href="/"><span>24×7 Enquiry Support (All Days)</span></a>
                            </li>
                            <li className="sub-list-3">
                                <a href="/" >
                                    <span>General:</span><br/>
                                    <span className="link">Contactus@CaratLane.com</span></a>
                            </li>
                            <li className="sub-list-3">
                                <a href="/" ><span>Corporate:</span><span className="link">B2B@caratlane.com</span></a>
                            </li>
                            <li className="sub-list-3">
                                <a href="/" ><span>HR:</span><span className="link">Careers@caratlane</span></a>
                            </li>
                            <li className="sub-list-3">
                                <a href="/" ><span>Grievance: </span><span className="link">Click Here</span></a>
                            </li>
                            <li className="sub-button">
                            <Stack direction='row' spacing={4} align='center'>
                                <Button colorScheme='purple' variant='outline' fontSize={15}>
                                    FIND A <br />
                                    STORE
                                </Button>
                            </Stack>
                            </li>

                        </ul>
                    </li>
                </ul>
                <div className="sub-child-footer">
                    <ul className="list-social">
                        <li className="foot-icon"><FacebookIcon/></li>
                        <li className="foot-icon"><InstagramIcon/></li>
                        <li className="foot-icon"><PinterestIcon/></li>
                        <li className="foot-icon"><TwitterIcon/></li>
                        <li className="foot-icon"><LinkedInIcon/></li>
                    </ul>
                </div>
                <div className="last-div">
                    <div className="last-div-1">
                        <p className="copyright">Download Caratlane App</p>
                        <div className="download" >
                            <ul className="download-list">
                                <li className="play">
                                <Stack direction='row' spacing={4} align='center'>
                                    <Button colorScheme='purple' variant='outline' fontSize={15}>
                                        <img className="play-image" src="https://e7.pngegg.com/pngimages/284/214/png-clipart-google-play-books-play-store-angle-rectangle.png" alt="" width={40} />
                                        Google Play
                                    </Button>
                                </Stack></li>
                                <li className="play">
                                    <Stack direction='row' spacing={4} align='center'>
                                        <Button colorScheme='purple' variant='outline' fontSize={15}>
                                            <img className="app-image" src="https://www.freeiconspng.com/uploads/apple-icon-4.png" alt="" width={55} />
                                            App Store
                                        </Button>
                                    </Stack>
                                </li>
                            </ul>
                        </div>
                        <div className="pay-div">
                            <ul className="pay-list">
                                <li><img className="pay" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwoBdtqzBbnh2xFvfmTABnbzLc2gdLOiDolLU493K&s" alt="" /></li>
                                <li><img className="pay" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3m12p5sL1DdnRP_li1uDe2ynERLmrUIVLRqXdH7kBA&s" alt="" /></li>
                                <li><img className="pay" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_nXd17_dS1CUFJYkjWzv7H50WsxL0R_G_sq_3_3kKw&s" alt="" /></li>
                                <li><img className="pay" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9K8bq4PCg2h1TY6wUpY_XGX3qWJChPm5sbHoLRGUEkU83VTkIwfPIdNsXbwgcOhm2s08&usqp=CAU" alt="" /></li>
                                <li><img className="pay" src="https://pngimg.com/uploads/amazon/amazon_PNG28.png" alt="" /></li>
                            </ul>
                        </div>
                    </div>  
                </div>
            </div>
            </footer>
        </div>
    )
}

export default footer;