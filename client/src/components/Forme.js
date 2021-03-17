import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

class Forme extends Component {
    render() {
        let currentStatus = this.props.status;
        let titre = "Add Proposals";
        if (currentStatus==="RegisteringVoters"){
            titre = "Add Voters";
        } 
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <Card style={{ width: '50rem' }}>
                    <Card.Header><strong>{titre}</strong></Card.Header>
                    <Card.Body>
                    <Form.Group controlId="formAddress">
                        <Form.Control type="text" id="address"
                        ref={(input) => { this.address = input }}
                        />
                    </Form.Group>
                    <Button onClick={ this.whitelist } variant="dark" > Add </Button>
                    </Card.Body>
                </Card>
                </div>                
            </div>
        );
    }
}



export default Forme;