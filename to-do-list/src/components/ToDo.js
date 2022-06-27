import React from 'react';
import './toDo.css'
import { Container, InputGroup, Form, ListGroup, Button, Col, Row } from 'react-bootstrap'
import { FaRegEdit } from 'react-icons/fa';
import {FiDelete} from 'react-icons/fi';
import {MdDone} from 'react-icons/md'
import {AiOutlineCheckCircle} from 'react-icons/ai'
class ToDo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputToDo:"",
            toDoList: [],
            editIndex: '',
            editStatus: false,
        }
    }
    add() {
        if (this.state.inputToDo !== '') {
            if (this.state.editStatus) {
                let newArr = this.state.toDoList.map((element, index) => {
                    if (index === this.state.editIndex) 
                        element.text = this.state.inputToDo
                    return element
                })
                this.setState({
                    toDoList: newArr,
                    inputToDo: "",
                    editStatus: false,
                    editIndex: '',
                })

            }
            else {
                let inp = this.state.inputToDo
                this.setState((prevState) => ({
                    toDoList: [...prevState.toDoList, { text:inp, completed:false }],
                    inputToDo: "",
                }))
            }
        }
    }
    delete(key) {
        let newArr = this.state.toDoList.filter((element, idx) => key !== idx)
        this.setState({
            toDoList: newArr
        })
    }
    edit(key) {
        // let newArr = this.state.toDoList.filter((element, index) => index === key)
        // this.setState({
        //     inputToDo: newArr,
        //     editIndex: key,
        //     editStatus: true,
        // })
        // this.add()
        
        this.setState((prevState) =>({
            inputToDo: prevState.toDoList[key].text,
            editIndex: key,
            editStatus: true,
        })    
        )
        this.add()
    }
    done(index){
       
        this.setState((prevState) => ({
            toDoList: prevState.toDoList.map((element,idx) =>{
                if(index === idx)
                    element.completed = true
                return element
            })
        })
        )
    }
    render() {
        let { inputToDo, toDoList, editStatus } = this.state
        return (

            <>
             <h1 style={{textDecoration:'underline'}}>To-Do-List</h1>
                <Container style={{ margin: '30px auto' , backgroundColor: 	'#dddbea'}}>
                   <br/>
                    <Col md={{ span: 5, offset: 4 }}>
                        <InputGroup size="lg">
                            <Form.Control size='lg' className='input-to-do' placeholder='Enter To-Do' value={inputToDo} onChange={(e) => this.setState({ inputToDo: e.target.value })} />
                            <Button variant="outline-dark" className='input-to-do' id='add-btn' onClick={() => this.add()
                            }>{editStatus?<AiOutlineCheckCircle />:`+`}</Button>
                        </InputGroup>
                        <ListGroup className='to-do-list'>

                            {
                                toDoList.map((list, index) =>
                                (
                                    <ListGroup.Item key={index}>
                                        <Row>
                                            <Col md={8} id ='listCOl' className={list.completed && 'completed'} >{list.text}</Col>
                                            <Col md={4}>
                                                <div className='btns'>
                                                <Button size='sm' variant="warning"  className={list.completed && 'btn-disable'} id='btn1' onClick={() => this.edit(index)}> <FaRegEdit /> </Button>
                                                <Button size='sm' variant="danger"   id='btn2' onClick={() => this.delete(index)}> <FiDelete/> </Button>
                                                <Button size='sm' variant='success' className={list.completed && 'btn-disable'}  id='btn3' onClick={() => this.done(index)} > <MdDone /> </Button>
                                                </div>  
                                                </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )
                                )
                            }
                        </ListGroup>
                    </Col>
                </Container>
            </>
        )
    }
}
export default ToDo