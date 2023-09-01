import React from "react";
import { Card, CardHeader, CardBody, CardFooter,Image,Stack, Heading,Text, Divider,ButtonGroup,Button,Box } from '@chakra-ui/react';
//import Products from "../Pages/Products";
import { useNavigate } from "react-router-dom";
const SingleProduct= (props) => {
    const {id, Img, Price,DiscountPrice, Type, Title, Weight, Brand, Description} = props;
    const navigate = useNavigate();
    function nav(){
      navigate(`/products/${id}`)
    }
    async function handelPayment(){
      let obj ={
        id: Date.now,
        Title,
        Description,
        Type,
        Weight,
        Price,
        DiscountPrice,
        Img,Brand
      }
      let res = await fetch("http://localhost:3032/Product",{
        method:"POST" , 
        body : JSON.stringify(obj), headers:{ "Content-Type":"application/json"
    },
        
      })
      let data = await res.json();
      window.location.href='/checkout';
      
    }
    return(
      <Box boxShadow='dark-lg' p='6' rounded='md' bg='white'>
  <Card maxW='sm' shadow='sm' maxH='400px'>
    <CardBody>
      <Image
        src={Img}
        alt=''
        borderRadius='lg'
        marginTop='-120px'
        height='180px'
        width='180px'
        marginLeft='20px'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{Type}</Heading>
        <Text color='blue.600' fontSize='2xl'>
          Price: {Price}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          Discount Price: {DiscountPrice}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue' mar onClick={nav} marginTop='-60px'>
          Details
        </Button>
        <Button variant='ghost' colorScheme='blue' onClick={handelPayment} marginTop='-60px' >
          Add to cart
        </Button>
      </ButtonGroup>
    </CardFooter>
</Card>
</Box>
    )
}
export default SingleProduct;