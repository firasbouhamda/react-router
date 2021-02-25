import React,{useState} from 'react';
import {Modal,Button,Form,Col} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
const AddModal = ({show,handleClose,addMovie}) => {
    const  onStarClick = (nextValue, prevValue, name) => {
         setNewMovie({...newMovie, rate:nextValue});
      }
      const [newMovie, setNewMovie] = useState({
          title:'',
          main_img:'',
          desccription:'',
          rate:1,
          year:'',
          duration:0,
          genre:''

      })
      const handleChange = (e) => {
          setNewMovie({...newMovie, [e.target.name]:e.target.value})
      }
    return (
        
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Row>
  <Form.Group controlId="formGridAddress1">
    <Form.Label>Title</Form.Label>
    <Form.Control placeholder="Title" name="title"  onChange={handleChange}/>
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Image URL</Form.Label>
    <Form.Control placeholder="Image URL" name="main_img" onChange={handleChange} />
  </Form.Group>
  </Form.Row>

  

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Duration</Form.Label>
      <Form.Control name="duration" placeholder="Duration" onChange={handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Genre</Form.Label>
      <Form.Control as="select" defaultValue="Choose..." name="genre"  onChange={handleChange}>
        <option>Action</option>
        <option>Drame</option>
        <option>Comedy</option>
        <option>Romance</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Year</Form.Label>
      <Form.Control name="year" placeholder="Year" onChange={handleChange}/>
    </Form.Group> 
  </Form.Row>
  <Form.Row>
      <Form.Label>Rating</Form.Label>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
        value={newMovie.rate}
          onStarClick={onStarClick}
        />
  
  </Form.Row>
  <Form.Row>
      <Form.Label>Description</Form.Label>
      
  <Form.Control as="textarea" rows={3} name="description" onChange={handleChange}/>
  </Form.Row>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick = {() => {
              addMovie(newMovie);
              handleClose();
          }}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
       
    )
}

export default AddModal
