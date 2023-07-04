import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MovieCard({movie}){

    const {name,description,posterUrl, language, casts, director, _id} = movie;
    
    
    const [count,setCount]=useState(100)
    const [isLiked,setIsLiked] =useState(false);

     const like =()=>{
      console.log(count)

      if(isLiked){
        setCount(count-1)
        setIsLiked(false)
      } else{
        setCount(count+1)
        setIsLiked(true)
      }
    }


    return  <>
      
     <Card className='mx-3 my-3' style={{ width: '18rem',cursior:"pointer",backgroundColor:"black",color:"gray"}} >
   
      <Card.Img style={{height:"25rem"}} variant="top" src={posterUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Movie HINDI In a post-apocalyptic world, a lone survivor battles against both the remnants of humanity and terrifying creatures in a desperate quest for redemption and the hope of a new beginning.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='d-flex bg-dark text-white justify-content-between'>
          <span style={{fontWeight:600}} className='text-justify'>Language:- </span>     
          <span> {language} </span>               
          </ListGroup.Item>
        <ListGroup.Item className='d-flex bg-dark text-white justify-content-between'>

            <span style={{fontWeight:600}} className='text-justify'>Director:- </span>     
          <span> {director} </span> 

        </ListGroup.Item>
        <ListGroup.Item className='d-flex bg-dark text-white justify-content-between'style={{height:"4rem"}} >
           <span style={{fontWeight:600}} className='text-justify'>Cast:- </span>     
          <span  style={{fontSize:"1rem"}}>  {casts.join(', ')} </span> 
       </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <div style={{fontSize:"1.5rem"}} className='d-flex align-items-center justify-content-between'>
        <i className="bi bi-heart-fill justify-content-around" onClick={like} style={{color: (isLiked)? "red":"gray"}}/> {count }
        <Card.Link href={`/movie/${_id}/details`}>SEE TRAILER <i className="bi bi-arrow-right-circle-fill"></i></Card.Link>
        </div> 
      </Card.Body>
    </Card>
 
    </>
   
}

export default MovieCard;