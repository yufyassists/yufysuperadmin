import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody,InputGroupAddon,InputGroup,FormInput,Button,
  Form,
  FormGroup, timeoutsShape } from "shards-react";
import PageTitle from "./../components/common/PageTitle";
import YufyApi from "../Api";




const KnowYourHelper = ({ smallStats }) => {

  const [ShowUserdata, setuserno] = useState();
  const [ShowUseresult,setuserresult] = useState();
  const [Showuserno,setusername] = useState();
  const [ShowUserEmail,SetUserEmail] = useState();

  


  const [ShowHelperdata, setHelperno] = useState();



    useEffect(() => {
  
    },[])

const showUser=()=>{

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ContactNumber: ShowUserdata })
}

  fetch(YufyApi.developement+'KnowYourUser',requestOptions)
  .then(res => res.json())
  .then((data) => {

    setuserresult(data)

  })
  .catch(console.log)
}
const showHelper=()=>{

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ HelperMobileNo: ShowHelperdata })
}

  fetch(YufyApi.developement+'KnowYourHelper',requestOptions)
  .then(res => res.json())
  .then((data) => {

  console.log("hihi",data)


  })
  .catch(console.log)
}




    return(
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Know Your User And Helper" className="text-sm-left mb-3" />
    </Row>


{!ShowUseresult &&

<>

    <Col lg="12" md="12" sm="12" className="mb-4">
    <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Know Your User</h6>
          </CardHeader>
          <CardBody  className="p-0 pb-3">
          <InputGroup seamless className="mb-3">
      <FormInput placeholder="Enter User Mobile No."  onChange={(e)=>setuserno(e.target.value)} />
      <InputGroupAddon type="append">
        <Button  onClick={()=>showUser()} theme="white">Search User</Button>
      </InputGroupAddon>
    </InputGroup>
      
         </CardBody>
        </Card>
    </Col>


    <Col lg="12" md="12" sm="12" className="mb-4">
    <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Know Your Helper</h6>
          </CardHeader>
          <CardBody  className="p-0 pb-3">
          <InputGroup seamless className="mb-3">
      <FormInput placeholder="Enter User Helper No." onChange={(e)=>setHelperno(e.target.value)}  />
      <InputGroupAddon type="append">
        <Button onClick={()=>showHelper()} theme="white">Search Helper</Button>
      </InputGroupAddon>
    </InputGroup>
      
         </CardBody>
        </Card>
    </Col>

    </>
}
{ShowUseresult &&
<>
<Row >
    <Col lg="12" md="12" sm="12">
        <Card>
          <CardHeader>
          <h6 className="m-0">Yufy User</h6>
          </CardHeader>
          <CardBody className="text-center">
       {ShowUseresult.map((item,index)=>(

<>
<img src={`data:image/png;base64,${item.photo}` }/>
   
          <Form  key={item}>
          <FormGroup>

          <FormInput
          placeholder="User Name"
        // value={item.name}
         onChange={(e) => setusername(e.target.value)}

        />
        
        </FormGroup>
          <FormGroup>

<FormInput
value={item.email}
placeholder="Email"
onChange={(e) => SetUserEmail(e.target.value)}
/>
</FormGroup>
          <FormGroup>

<FormInput
value={item.UserWallet}
placeholder="Amout in User Wallet"
//onChange={(e) => SetAdminMobile(e.target.value)}
/>
</FormGroup>
          <Row form>
        <Col md="6">
        <FormInput
          placeholder="Number of Helps Obtaine"
         // onChange={(e) =>SetAdminPassword(e.target.value)}
         value={item.totalnumberofhelpsobtaine}
        />        </Col>
        <Col md="6" className="form-group">
        <FormInput
          placeholder="Password"
       //   onChange={() => {}}
        />
        </Col>
      </Row>

    </Form>
    </>
        ))}
         <Button  theme="primary" className="mb-2 mr-1" >
        Submit
        </Button>
    
          </CardBody>
          </Card>
      </Col>

   </Row>
</>

}

  </Container>
)};


export default KnowYourHelper;
