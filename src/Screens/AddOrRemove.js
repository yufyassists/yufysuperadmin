import React, { useState, useEffect,useRef } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, CardHeader, CardBody,Button, Form,
    FormInput,
    FormGroup,
    FormSelect,
   
    InputGroup,
    InputGroupAddon,
    InputGroupText } from "shards-react";
import YufyApi from "../Api";





const AddOrRemove = ({  }) => {

    const [AdminName, SetAdminName] = useState();
    const [AdminEmail, SetAdminEmail] = useState();
    const [AdminMobile, SetAdminMobile] = useState();
    const [AdminPaaword, SetAdminPassword] = useState();
    const [Showdata, setData] = useState([]);

 



      const GetData=()=>{
        fetch(YufyApi.developement+'Show_admin')
        .then(res => res.json())
        .then((data) => {
         
          setData(data);
    
        })
        .catch(console.log)
    
    }

      useEffect(() => {
        GetData()
        },[])


 
        const Submit=()=>{
          console.log(AdminName,AdminEmail,AdminMobile)
    
          fetch(YufyApi.developement+'add_admin', {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ AdminMobileNO: AdminMobile,Password:AdminPaaword,Name:AdminName,Email:AdminEmail,Role:"3" })

           })
           .then((response) => response.text())
           .then((responseJson) => {
             console.log("response",responseJson)
            GetData()

        })
           .catch((error) => {
             console.error("error",error);
           });
        }   
        
        
 const Remove=(e)=>{
   console.log(e)
  fetch(YufyApi.developement+`delete_admin?admin_mobile=${e}`)
  .then(res => res.text())
  .then((data) => {
    GetData()
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
          <h6 className="m-0">Add Admins</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3 text-center">
          <Form>
          <FormGroup>

          <FormInput
          placeholder="Admin Name"
          onChange={(e) => SetAdminName(e.target.value)}
        />
        
        </FormGroup>
          <FormGroup>

<FormInput
placeholder="Admin Email"
onChange={(e) => SetAdminEmail(e.target.value)}
/>
</FormGroup>
          <FormGroup>

<FormInput
placeholder="Mobile Number"
onChange={(e) => SetAdminMobile(e.target.value)}
/>
</FormGroup>
          <Row form>
        <Col md="6">
        <FormInput
          type="password"
          placeholder="Password"
          onChange={(e) =>SetAdminPassword(e.target.value)}
        />        </Col>
        <Col md="6" className="form-group">
        <FormInput
          type="password"
          placeholder="Confirm Password"
          onChange={() => {}}
        />
        </Col>
      </Row>

    </Form>
         <Button onClick={Submit} theme="primary" className="mb-2 mr-1" >
        Submit
        </Button>
       
          </CardBody>
          </Card>
      </Col>

   </Row>
    </Col>
 
 <Row>
 <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
          <h6 className="m-0">Yufy Admins</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                  Admin MobileNo
                  </th>
                  <th scope="col" className="border-0">
                  Admin Name
                  </th>
                  <th scope="col" className="border-0">
                   Admin Email
                </th>
                <th scope="col" className="border-0">
                </th>
           
                </tr>
              </thead>
              <tbody>
              {Showdata.map((stats, idx) => (

                  <tr key={idx}>

                  <td>{idx+1}</td>
                  <td>{stats.AdminMobileNO}</td>
                  <td>{stats.Name}</td>
                  <td>{stats.Email}</td>
                  <td><Button  onClick={()=>Remove(stats.AdminMobileNO)}  variant="outline-primary">Remove</Button></td>

                 
                </tr>
                ))}
            
              </tbody>
            </table>
     
          </CardBody>
        </Card>
      </Col>

 </Row>
  </Container>
)};




export default AddOrRemove;
