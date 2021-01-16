import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody,Button,InputGroup,FormInput,InputGroupAddon } from "shards-react";
import YufyApi from "../Api";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";




const HomeOverview = ({}) => {

  const [Showdata, setData] = useState([]);
  const [ShowHelperdata, sethelperno] = useState();
  const [GetPassword, SetPassword] = useState();

  const GetData=()=>{
    fetch(YufyApi.developement+'TotalYufyContact')
    .then(res => res.json())
    .then((data) => {

      setData(...Showdata, data);


    })
    .catch(console.log)

}

const [ShowPending, setPending] = useState([]);
const [ShowPointData, setPointData] = useState([]);


const PendingData=()=>{
  fetch(YufyApi.developement+'PendingRequest')
  .then(res => res.json())
  .then((data) => {

    setPending(...ShowPending, data);


  })
  .catch(console.log)
}

const YufyPointData=()=>{
  fetch(YufyApi.developement+'ZufyPointsAndHelp')
  .then(res => res.json())
  .then((data) => {

    setPointData(...ShowPointData, data);


  })
  .catch(console.log)
}

const Payout=()=>{

  console.log("Payout...");

fetch(YufyApi.developement+'HelperPayout')
        .then(res => res.json())
        .then((data) => {
         
          console.log("data...",data);
    
        })
        .catch(console.log)
    
  }

    useEffect(() => {
    GetData()
    PendingData()
    YufyPointData()
    },[])

    const showPassword=()=>{

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ UserContactNumber: ShowHelperdata })
    }
    
      fetch(YufyApi.developement+'GetChangePassword',requestOptions)
      .then(res => res.json())
      .then((data) => {
    
       
      SetPassword(data)
    
      })
      .catch(console.log)
    }
    


    return(
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Yufy Home" subtitle="Dashboard" className="text-sm-left mb-3" />
    </Row>

    <Row>
      {Showdata.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx}  md= "6"  sm= "6">
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            chartData={[
              {
                backgroundColor: "rgba(0, 184, 216, 0.1)",
                borderColor: "rgb(0, 184, 216)",
                data: [0]
              }
            ]}
            label={stats.key}
            value={stats.Value}
         
          
          />
        </Col>
      ))}
    </Row>


    <Row>
      {ShowPointData.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx}  md= "6"  sm= "6">
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            chartData={[
              {
                backgroundColor: "rgba(0, 184, 216, 0.1)",
                borderColor: "rgb(0, 184, 216)",
                data: [0]
              }
            ]}
            label={stats.key}
            value={stats.Value}
         
          
          />
        </Col>
      ))}
    </Row>

    <Row >
     
        <Button onClick={()=>Payout()}  className="mb-4 mr-5 ml-5" theme="primary" size="lg" block>
        Payout
        </Button>
     
     
    </Row>

<Row>

<Col lg="12" md="12" sm="12" className="mb-4">
    <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Know Your Helper Password</h6>
          </CardHeader>
          <CardBody  className="p-0 pb-3">
          <InputGroup seamless className="mb-3">
      <FormInput placeholder="Enter Helper Mobile No."  onChange={(e)=>sethelperno(e.target.value)} />
      <InputGroupAddon type="append">
        <Button  onClick={()=>showPassword()} theme="white">Search Password</Button>
      </InputGroupAddon>
    </InputGroup>
    {GetPassword &&
     <p   style={{
     textAlign:'center',
      justifyContent: "center",
      alignItems: "center"
    }}>Password :{GetPassword}</p>
   
}
         </CardBody>
        </Card>
    </Col>



</Row>


  </Container>
)};





export default HomeOverview;
