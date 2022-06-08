 import {useState , useEffect} from "react" ; 
 import axios from "axios"
import { Cards } from "./card";
export const Product = ()=>{
    const [data , setData] = useState([]) ; 
    const [page , setPage] = useState(1) ; 
    const [text , setText] = useState("") ; 
    const [sortvalue , setSortValue] = useState("") 

    const sortOptions = ["title" , "price" , "category"]
        
     console.log(text) ; 
       const myfun = (value)=>{
        setPage((prev)=>prev + value) 
    }
 
    const searchitem = (e)=>{
        setText(e.target.value) 
    } 

   

    const handleSearch= async (e)=>{
        e.preventDefault()
         return await axios
         .get(`http://localhost:8080/data?q=${text}`)
         .then((data)=>{
             setData(data.data)
             setText("")
         })
         .catch((err)=>console.log(err))
                   
    } 

    const handleReset=()=>{
        getData()  ; 
    } 


    const handleSort= async (e)=>{
       let value = e.target.value ; 
       setSortValue(value)
         return await axios
         .get(`http://localhost:8080/data?_sort=${value}&_order=asc`)
         .then((data)=>{
             setData(data.data)
            
         })
         .catch((err)=>console.log(err))
    } 

   const handleFilter = async (value) =>{
    
      return await axios
      .get(`http://localhost:8080/data?status=${value}`)
      .then((data)=>{
          setData(data.data)
         
      })
      .catch((err)=>console.log(err))
   }


    useEffect(()=>{
       getData() ; 
     },[page])

     const getData= async()=>{
         return axios
         .get(`http://localhost:8080/data?_page=${page}&_limit=12`)
         .then((data)=>setData(data.data)) 
         .catch((err)=>console.log(err))
     }

    return (
        <>  
    <div style = {{display : "flex" , justifyContent : "space-around" , marginTop : "40px"}}> 
        <form onSubmit = {handleSearch}>
        <input onChange = {searchitem}  value = {text} type = "search" placeholder = "search"/>
        <input type = "submit"  color = "dark"/>
        <button onClick = {()=>handleReset()}>Reset</button>
       </form>  
         <div style = {{display : "flex"}}>
          <h5>Sort by :</h5>
           <select 
            style = {{width : "200px" , borderRadius:"3px" , height : "30px"}}
              onChange={handleSort} 
              value = {sortvalue}
           >
                 <option>Please select value</option>
                {sortOptions.map((data,i)=>{
                    return <option value = {data} key = {i}>{data}</option>
                })}
               
           </select>
           </div>
            <div style = {{display : "flex"}}>
                <h4>Filter Status</h4>
                <button style = {{background : "#64fe00" , color : "black",  width : "100px" }}onClick = {()=>handleFilter("active")}>Active</button>
                <button   style = {{background : "#ee1c25"  , color : "black" , width : "100px" ,  marginLeft : "10px"}} onClick = {()=>handleFilter("inactive")}>Inactive</button>
            </div>
        </div>
        <div style = {{display : "flex" , flexWrap : "wrap" , justifyContent : "space-around" }}>
            
           {data.map((e)=>{
               return <div  
               style = {{marginTop : "30px" ,cursor : "pointer"}} 
               key = {e.id}>
                   <Cards id = {e.id} title = {e.title} 
                   price = {e.price} image = {e.image}
                    category={e.category}/>
                    
                </div>
           })}
           
        </div> 
        <button style = {{border : "none" , marginRight : "10px" , color : "white" ,  background : "#1f80e0"}} onClick = {()=>myfun(-1)}>Prev</button>
              {page}
        <button style = {{border : "none"  , marginLeft : "10px", color : "white" ,  background : "#1f80e0"}} onClick = {()=>myfun(1)}>Next</button>
        </>
    )
}