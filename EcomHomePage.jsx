import React from "react";
import './EcomHomePage.css';
import { Button, ButtonGroup } from '@chakra-ui/react'
import CarouselCard from "../components/CarouselCard";
//import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
//import GpsFixedIcon from '@mui/icons-material/GpsFixed';

const EcomHomePage = () => {
    return (
        <div className="MainDiv">
            <div className="div-1">
                <a href=""><img className="image" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/AppBanner/RakshaBandhan/02/Desktop_1920-x560_toplisting.jpg" alt="" /></a>
            </div>
            <div className="div-2">
                <div className="div-2-1">
                    <a href=""><img src="https://caratlane-live-product-images.s3.ap-south-1.amazonaws.com/media/static/images/V4/2023/Shaya/08-AUGUST/RESPONSIVE/18/Responsive_03.jpg " alt="" /></a>
                </div>
                <div className="div-2-2">
                    <a href=""><img className="image-1" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/oge/2x.webp" alt="" /></a>
                    <a href=""><img className="image-2" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/NewArrivals/03/1X.webp" alt="" /></a>
                </div>
            </div>
            <div className="div-3">
                Video
            </div>
            <div className="div-4">
                <div className="sub-div-4-1">
                    <img className="img-div-4" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/AB/Office_Wear_Designs_Desktop.jpg" alt="" />
                    <img className="img-div-4" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/AB/Stylish_Party_Wear_Desktop.jpg" alt="" />
                    <img className="img-div-4" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/AB/Gifts_for_You_Desktop.jpg" alt="" />
                </div>
                <div className="sub-div-4-2">
                    <img className="img-div-4" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/AB/Anniversary_Milestone_Desktop.jpg" alt="" />
                    <img className="img-div-4" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/AB/Family_Favourites_Desktop.jpg" alt="" />
                    <img className="img-div-4" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/AB/Gifts_for_Her_Desktop.jpg" alt="" />
                </div>
            </div>
            <div className="div-5">
                <img className="div-5-img" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/Collection/01/Collection_Harry_potter.jpg" alt="" />
                <img className="div-5-img-1" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/Collection/01/Collection_ADaa_Product.webp" alt="" />
                <img className="div-5-img" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/HPBanner/Collection/01/Collection_ENVOUE_Product.webp" alt="" />
            </div>
            <div className="Button">
                <Button className="button-1" colorScheme='black' variant='outline' borderColor={"pink.500"}>
                    View All Collection
                </Button>
            </div>

            <div className="div-6">
                <div className="div-6-1">
                    <img className="div-6-img" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/AppBanner/RBoffer/01/2x.webp" alt="" />
                    <img className="div-6-img" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/AppBanner/Kids/01/2X.webp" alt="" />
                </div>
                <div className="div-6-1">
                    <img className="div-6-imgs" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/AppBanner/RTS_RB/01/2X.webp" alt="" />
                    <img className="div-6-imgs" src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/08-AUG/AppBanner/Bestsellers/01/2X.webp" alt="" />
                </div>
            </div>

            <div className='try'>
                <div className='appoint'>
                    <div >
                        <img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/06-JUN/HPBanner/Down/T@H.webp" alt='image3' />
                        <div className='appoint1'><h1 className="appoint1-h1">Unsure Which<br />Design To Pick?</h1>
                            <p className="appoint1-para">Book A FREE Home Trial!</p>
                            <button>Schedule <br /> Appointment</button>
                        </div>
                    </div>
                <div><img src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/06-JUN/HPBanner/Down/Store.webp" alt='image4' />
                    <div className='appoint2'><h1>Come visit us at <br />any of our stores!</h1>
                    
                    </div>
                </div>
                </div>
        </div>

        <div className="div-7">
            <div className="div-7-1">
                <img className="div-7-img" src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/11-NOV/Others/13/OLD-GOLD_.png" alt="" />
                <p className="div-7-para">Love Your Gold? Get MORE For It!</p>
                <button>Know More</button>
            </div>
        </div>

        <div className="div-8">
            <img className="div-8-img" src="https://images.cltstatic.com/live-images/c656a495c4564a4c8ac8a1f5dee414bd.png" alt="" />
            <Button className="div-8-but" colorScheme='black' variant='outline' borderColor={"pink.500"}>
                    Know More
            </Button>
        </div>

        <div>
            <div>
                <CarouselCard/>
            </div>
        </div>

        <div className="mainDiv9">
            <div>
                <h3 className="div-9-h">Sign up to be a Caratlane Insider</h3>
            </div>
            <div className="div-9">
            <h3 className="div-9-h">Sign up to be a Caratlane Insider</h3>
                <input type="email" required="true"/>
                <button>SUBMIT</button>
            </div>
            <ul className="div-9-list">
                <li><input type="radio" />Female</li>
                <li><input type="radio" />Male</li>
                <li><input type="radio" />Other</li>
            </ul>
            
        </div>
            
            <div className='about'>
        <div>
          <h3 className="about-head-1">Online Jewellery Store</h3>
          
          <p className="about-para">CaratLane.com began in 2008 with the simple motto of democratising jewellery. And today, after 13 glorious years, it has come to be recognised as one of the top 20 e-commerce portals in India. Steadily growing from strength to strength since inception, CaratLane has also established 165 stores across the length and breadth of India.<br/><br />
            Since July 2016, we joined forces with India’s most desired and largest jewellery brand, Tanishq, through a strategic investment made by Titan Company in CaratLane. This takes us another step closer to achieving our shared mission - to make beautiful jewellery accessible to everyone.</p>
        </div>
        
        <div>
          <h3 className="about-head-1">Shopping at CaratLane</h3>
          
          <p className="about-para">Placing security first, CaratLane ensures that every transaction made on the site is safe and smooth for the customers. To attain this, the company follows stern policies of transparency through the whole customer buying journey.<br/><br/>


            For further convenience, all CaratLane products come backed with certification from international laboratories, and a blanket 15-day-return policy, no questions asked.<br/><br/>


            CaratLane provides the exquisite craftsmanship of beautiful jewellery designs such as rings, earrings, pendants, necklace, chains, bangles, bracelets, mangalsutra, nose pins. Apart from jewellery, CaratLane offers 22k (916) and 24k (995) gold coins with certification and the guarantee of a BIS Hallmarked stamp.</p>
        </div>

        <div>
          <h3 className="about-head-1">CaratLane’s Vision</h3>
          
          <p className="about-para">CaratLane works with the vision of offering tastefully designed jewellery at revolutionary prices. This is achieved by eliminating all inefficiencies which result in drastically reduced costs. With CaratLane, users stand to save as much as 30% when compared to prices in the market.<br/><br/>


            Our app is designed to bridge the vast gap between the virtual and the physical world. This has been attained with the help of the Virtual Try-on feature that permits the users to virtually put on 1000s of earrings to see just how they look when placed on the ears.<br/><br/>


            With over 100 thousand downloads, the CaratLane app has emerged to be one of the most liked applications in the jewellery circuit.</p>
        </div>


      </div> 

        </div>
        
    )
}
export default EcomHomePage;