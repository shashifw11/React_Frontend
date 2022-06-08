import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import {Link} from "react-router-dom"
 export const Cards = ( {id,price,image,category,title})=>{

    return (
        <div>
   <Card style={{ width: '18rem'  , height  : "400px"}}>
     <Card.Img  style = {{width : "80%" , height : "60%" , margin : "auto"}} variant="top" src={image} />
  <Card.Body style = {{ lineHeight : "10px" ,height : "120px" }}>
    <Card.Title>{title}</Card.Title>
    <Card.Title> $ {price}</Card.Title>
    <Card.Text>{category}</Card.Text>
   
</Card.Body>
<Link to = {`${id}`}><Button style = {{width : "80%"}} variant="primary">Buy Now</Button></Link>
</Card>
        </div>
    )
}