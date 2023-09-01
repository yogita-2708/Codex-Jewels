import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import {Box,Button,Img,Text} from '@chakra-ui/react';

const SingleProdPage = ()=>{
    const {id} = useParams();
    const [data,setData] = useState([]);
    console.log(id);
    const api = "http://localhost:3033/products"

    async function fetchData(){
        let res = await fetch(`${api}/${id}`)
        let data = await res.json();
        setData(data);
        console.log(data);
    }
    fetchData();

    const handleButton = () => {
        //history.push('/payment');
        window.location.href = '/payment';
      };

    return(<>
        <div>
        <Box boxShadow='dark-lg' p='3' rounded='md' bg='white' marginLeft='40px' width='350px'>
        <Img src={data.Img} alt="error" height='200px' width='200px' marginLeft='70px'/>
        <Text as='del'>RS:{data.Price}</Text><Text marginLeft='80px' as='I18N'>Rs:{data.DiscountPrice}</Text>
        </Box>
        <Box boxShadow='outline' p='15' rounded='md' bg='white' width='1000px' height='270px' marginLeft='450px' marginTop='-270px'>
        <Text as='samp' fontSize='30px'>Type:{data.Type}</Text><br />
        <Text as='samp' fontSize='20px'>Brand:{data.Brand}</Text><br />
        <Text as='I18N' fontSize='20px' fontFamily='sans-serif'>Weight:{data.Weight}</Text><br />
        <Text as='i' fontSize='20px' textAlign='left'>Details:{data.Description}</Text>
        <Button colorScheme='teal' marginBottom='-120px' marginLeft='-280px' variant='solid' onClick={handleButton}>Buy Now</Button>
        </Box>
        </div>
        <Footer/>
        </>
    )
}
export default SingleProdPage;