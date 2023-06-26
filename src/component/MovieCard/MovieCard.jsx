import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { ArrowRightCircleFill,HeartFill} from 'react-bootstrap-icons';

function MovieCard({movie}){

    const {name,description,posterUrl, language, casts, director, _id} = movie;

    console.log(posterUrl);

    return  <>
    <Link key={_id} to={`/movie/${_id}/details`}>
     <Card className='mx-3 my-3' style={{ width: '18rem', backgroundColor:"black",color:"gray"}} >
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

        <div style={{fontSize:"1rem"}} className='d-flex align-items-center justify-content-around'>
        <HeartFill style={{color:"red"}}/>700k
        <span className='d-flex fs-6 align-items-center '>SEE TRAILER </span>
              <Card.Link href='#'>
                 <ArrowRightCircleFill style={{color:"green"}}/>
                </Card.Link>
        </div>
        
      </Card.Body>
    </Card>

    </Link>
    </>
   
}

export default MovieCard;