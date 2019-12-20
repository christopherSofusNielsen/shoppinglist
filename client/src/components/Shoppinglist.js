import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {getItems} from '../actions/itemActions';

class Shoppinglist extends Component{


    componentDidMount(){
        this.props.getItems();
    }
    
    render(){
        const {items}=this.props.item; //pulls out items from state
        
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

const mapStateToProps=(state)=>({
    item: state.item
})

export default connect(mapStateToProps, {getItems})(Shoppinglist);