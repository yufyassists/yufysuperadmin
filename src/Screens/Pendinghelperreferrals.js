import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, CardHeader, CardBody,InputGroupAddon,InputGroup,FormInput,Button, timeoutsShape } from "shards-react";
import PageTitle from "./../components/common/PageTitle";
import { Table } from 'react-bootstrap';
import YufyApi from "../Api";



const Pendinghelperreferrals = ({  }) => {


    const [Showdata, setData] = useState([]);


    const GetData=()=>{
        fetch(YufyApi.developement+'AllReferHelper')
        .then(res => res.json())
        .then((data) => {
         
          setData(data);
    
        })
        .catch(console.log)
    
    }



    useEffect(() => {
        GetData()
    },[])


    const Remove=(e)=>{
       fetch(YufyApi.developement+'UpdateAllReferHelper',{
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({AadharNumber:e })

       })
       .then(res => res.text())
       .then((data) => {
         GetData()
       })
       .catch(console.log)
      }

    return(
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Pending Helper Referrals" className="text-sm-left mb-3" />
    </Row>

    <Col lg="12" md="12" sm="12" className="mb-4">
    <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">All Pending Referrals Helper</h6>
          </CardHeader>
          <CardBody  className="p-0 pb-3">
          <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Referred By</th>
      <th>Referred Helper Name</th>
      <th>Mobile Number</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {Showdata.map((stats, idx) => (
    <tr key={idx}>
    <td>{idx+1}</td>
    <td>{stats.ReferBy}</td>
    <td>{stats.HelperName}</td>
    <td>{stats.HelperNumber}</td>
    <td><Button onClick={()=>Remove(stats.AadharNumber)}    variant="outline-primary">Remove</Button></td>

  </tr>

   ))}
   </tbody>
</Table>
      
         </CardBody>
        </Card>
    </Col>


 
  </Container>
)};


export default Pendinghelperreferrals;
