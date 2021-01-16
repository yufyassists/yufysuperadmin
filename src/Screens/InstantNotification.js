


import React, { useState, useEffect,useRef } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, CardHeader, CardBody,Button, Form,
    FormInput,
    FormSelect,
    FormGroup,FormRadio,
    InputGroup,
    InputGroupAddon,
    InputGroupText } from "shards-react";
    import YufyApi from "../Api";





const InstantNotification = ({  }) => {
  
      useEffect(() => {
        },[])

        const [ShowRadio, SetRadio] = useState();
        const [ShowTitle, SetTitle] = useState();
        const [ShowMessage, SetMessage] = useState();

        const Update=()=>{
          fetch(YufyApi.developement+'Instantnotification',{
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({Id:ShowRadio,Message:ShowTitle,Body:ShowMessage })
    
           })
           .then(res => res.json())
           .then((data) => {
console.log(data)
           })
           .catch(console.log)
          }
     
     
    return(

  <Container fluid className="main-content-container px-4">
    <Col lg="12" md="12" sm="12" className="mb-4">
    <Row >
    <Col lg="12" md="12" sm="12" className="mb-4">
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
          <h6 className="m-0">Publish Notification</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3 text-center">

          <Form  >
          <FormGroup>

          <FormInput
          placeholder="Notification Title"
          onChange={(e)=>SetTitle(e.target.value)}
        />
        
        </FormGroup>
         
          <FormGroup>

<FormInput
          placeholder="Notification Body"
          onChange={(e)=>SetMessage(e.target.value)}

/>

</FormGroup>

          </Form>

          <Row>
          <Col md="7">
          <p className="mb-2">Select to whom notification has to be sent</p>
          <FormRadio
            inline
            checked={ShowRadio === "YufyUser"}
            onChange={() => {
              SetRadio("YufyUser");
            }}
          >
            Yufy User
          </FormRadio>
          <FormRadio
            inline
            checked={ShowRadio === "YufyHelper"}
            onChange={() => {
              SetRadio("YufyHelper");
            }}
          >
              Yufy Helper

          </FormRadio>
          <FormRadio
            inline
            checked={ShowRadio === "AllYufy"}
            onChange={() => {
              SetRadio("AllYufy");
            }}
          >
                 All Yufy users & helpers  
                         </FormRadio>
       
       
          </Col>
          <Col md="5" className="form-group">
        <Button  onClick={()=>Update()}    theme="primary" className="mb-2 mr-1" >
        Sent
        </Button>
      
        </Col>
          </Row>

          </CardBody>
          </Card>
      </Col>

   </Row>
    </Col>
 


  </Container>
)};




export default InstantNotification;
