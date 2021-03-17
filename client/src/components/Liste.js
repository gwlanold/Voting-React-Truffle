import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';

class Liste extends Component {
    
    render() {
        let currentStatus = this.props.status;
        let titre = "list of proposals";
        if (currentStatus==="RegisteringVoters"){
            titre = "list of voters";
        } 
        return (
            <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <Card style={{ width: '50rem' }}>
                    <Card.Header><strong>{titre}</strong></Card.Header>
                    <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>@</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.whitelist !== null && 
                                this.props.whitelist.map((a) => <tr><td>{a}</td></tr>)
                            }
                            </tbody>
                        </Table>
                        </ListGroup.Item>
                    </ListGroup>
                    </Card.Body>
                </Card>
                </div>
            </div>
        );
    }
}


export default Liste;