import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const CourseSummary = ({details }) => {
    console.log(details);
    
    return (
        <div>
            <Card className="mb-5">
                <Card.Header>
                    <div className='d-flex'>
                        <Image
                            roundedCircle
                            className='me-2'
                            src={details.author.img}
                            style={{height: '60px'}}
                        ></Image>
                        <div>
                            <p className='mb-0'>{details.author.name}</p>
                            <p>{details.author.published_date}</p>
                        </div>
                        
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{details.title}</Card.Title>
                   
                    <Card.Text>
                        {
                            details.details > 20?
                            <p>{details.details.slice(0, 20) +'....'} </p>
                            :
                            <p>{details.details}</p>
                        }
                    </Card.Text>
                    <Button  variant="primary">Get Premium access</Button>
                </Card.Body>
                <Card.Footer className="text-muted">{details.total_view}</Card.Footer>
            </Card>
        </div>
    );
};

export default CourseSummary;