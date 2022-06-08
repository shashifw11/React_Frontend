  import { useParams } from "react-router-dom"
  import {useState,useEffect} from "react" ; 
  import axios from "axios" ; 
  import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import {Link} from "react-router-dom"
export const ProductID = () =>{ 
     const {id} = useParams() 

     const [data , setDate] = useState([]);

         console.log(data) ; 
     useEffect(()=>{
          getData()
     },[])

     const getData = ()=>{
         axios.get(`http://localhost:8080/data/${id}`).then((data)=>{
              return setDate(data.data) ; 
         })
     }
    return (
        <div style = {{}}>
           <Card style={{ width: '18rem' , margin : "auto" , marginTop : "80px"}}>
  <Card.Img variant="top" src={data.image} />
  <Card.Body>
    <Card.Title>{data.title}</Card.Title>
    <Card.Title> $ : {data.price}</Card.Title>
    <Card.Text>
          {data.catgory}
    </Card.Text>
    <Button variant="primary">Add to cart</Button> <br/><br/>
    <Link to = "/"><Button style = {{width : "150px",  background : "teal"}} variant="primary">Go Back</Button></Link>
  </Card.Body>
</Card>
        </div>
    )
}