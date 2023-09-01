import React from "react";
import SingleProduct from "../components/SingleProduct";
import { useEffect,useState } from "react";
import { WrapItem , Wrap, Box} from "@chakra-ui/react";
const Products = () => {
   const [data,setData] = useState([]);
   const [backUpData,setBackUpData] = useState([]);
   const [dataSort,setDataSort] = useState("Select");
   const [dataFilt,setDataFilt] = useState("");

   async function fetchData(){
      let res =await fetch("http://localhost:3033/products");
      let data1 = await res.json();
      setData(data1);
    }

    useEffect(()=>{
        fetchData();
        setDataFilt("all");
      },[])
    
      useEffect(() => {
        // Update the backupProducts when products change
        setBackUpData([...data]);
      }, [data]);

    function SortTheData(dataSort){
      const sortdata=[...backUpData]
      if(dataSort==="Select"){
        return sortdata;
      }
      if (dataSort === "asc"){
        sortdata.sort((a, b) => a.Price - b.Price);
      }else{
        sortdata.sort((a, b) => b.Price - a.Price);
      }
      return sortdata;
  }

  function FilterTheData(data,dataFilt){
    if(dataFilt==="all"){
      return data;
    }
    return data.filter((item)=>item.Type===dataFilt)
  }

  const dataSortFun = SortTheData(dataSort);
  const dataFiltFun = FilterTheData(dataSortFun,dataFilt);
    return(
      
      <div className="MainDiv" style={{display:"flex",color:"blue"}}>
        <div className='Ecom1' style={{marginLeft:"50px",marginTop:"-30px"}}>
            <Box boxShadow='dark-lg' p='3' rounded='md' bg='white'>
            <select id="SortData" value={dataSort} onChange={((e)=>setDataSort(e.target.value))}>
              <option value="Select">Item in Default</option>
              <option value="asc">Low-to-High</option>
              <option value="dsc">High-to-Low</option>
            </select>
            </Box>
        </div>
        
        <div className='Ecom2' style={{marginLeft:"30px",marginTop:"-30px"}}>
            <Box boxShadow='dark-lg' p='3' rounded='md' bg='white'>
            <select id="filt" value={dataFilt} onChange={((e)=>setDataFilt(e.target.value))}>
              <option value="all">All</option>
              <option value="Jhumka">Jhumka</option>
              <option value="Drops">Drops</option>
              <option value="Hoops">Hoops</option>
              <option value="Studs">Studs</option>
            </select>
            </Box>
        </div>
        <WrapItem>
            <Wrap spacing='60px' marginLeft='-285px'>
          {
            dataFiltFun.map(el => {
                return <SingleProduct {...el} />;
            })
          }
          </Wrap>
          </WrapItem>
      </div>
    )
}
export default Products;