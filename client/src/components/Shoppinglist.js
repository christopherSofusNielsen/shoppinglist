import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class Shoppinglist extends Component{
    state={
        items:[
            {id:uuid(), name:'Eggs'},
            {id:uuid(), name:'Water'},
            {id:uuid(), name:'Steak'},
            {id:uuid(), name:'Milk'}
        ]
    }

    render(){
        const {items}=this.state; //pulls out items from state
        
        return(
            <Container>
                <Button 
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={()=>{
                        const name=prompt('Enter item');
                        if(name){
                            this.setState(state=>({
                                items: [...state.items, {id:uuid(), name:name}]
                            }));
                        }
                        // }
                        //This is the same
                        // if(name){
                        //     this.setState({items:this.state.items.concat({id:uuid(), name:name})});
                        // }
                    }}>
                        Add Item
                    </Button>

                    <ListGroup>
                        <TransitionGroup className="shopping-list">
                            {items.map(({id, name})=>(
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={()=>{
                                                this.setState(state=>({
                                                    items:state.items.filter(item=>item.id !==id)
                                                }))
                                            }}
                                        >&times;</Button>
                                        {name}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
            </Container>
        );
    }


}

export default Shoppinglist;