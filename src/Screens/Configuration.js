import React, { useState, useEffect,useRef } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, CardHeader, CardBody,Button } from "shards-react";
import YufyApi from "../Api";





const Configuration = ({  }) => {
    const myInputdata=useRef(null);

    const [ShowConf, SetConf] = useState();
    const [InputData, InputSet] = useState();

    const [Showdata, setData] = useState([]);

 


    const shoot=(i)=>{
      console.log('i',ShowConf,i) 
    
      switch (i) {
      case 'Gst':
        fetch(YufyApi.developement+'update_gst_tax', {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ GstTax: ShowConf })

           })
           .then((response) => response.json())
           .then((responseJson) => {
         console.log("getdata",responseJson)
         GetData()
          })
           .catch((error) => {
             console.error(error);
           });
          break;
     
      case 'Service Charge':
            fetch(YufyApi.developement+`update_convenience_fee?ConvenienceFee=${ShowConf}`)
               .then((response) => response.json())
               .then((responseJson) => {
             console.log("getdata",responseJson)
             GetData()
              })
               .catch((error) => {
                 console.error(error);
               });
              break;
         
      case 'Yufy Radius Max':
                fetch(YufyApi.developement+`update_distance_points`,{
                  method: 'Post',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ MaxRadius: ShowConf })
                })
                   .then((response) => response.text())
                   .then((responseJson) => {
                 GetData()
                  })
                   .catch((error) => {
                     console.error(error);
                   });
                  break;
             
      case 'Yufy Radius Min':
                    fetch(YufyApi.developement+`update_distance_points`,{
                      method: 'Post',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ MinRadius: ShowConf })
                    })
                       .then((response) => response.text())
                       .then((responseJson) => {
                     GetData()
                      })
                       .catch((error) => {
                         console.error(error);
                       });
                      break;
                 
      case 'Yufy Radius Point':
                        fetch(YufyApi.developement+`update_distance_points`,{
                          method: 'Post',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ Point: ShowConf })
                        })
                           .then((response) => response.text())
                           .then((responseJson) => {
                         GetData()
                          })
                           .catch((error) => {
                             console.error(error);
                           });
                          break;
       
      case 'Refer Yufy Helper Point':
                            fetch(YufyApi.developement+`update_ReferPoint`,{
                              method: 'Post',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ HelperReferPoint: ShowConf })
                            })
                               .then((response) => response.text())
                               .then((responseJson) => {
                             GetData()
                              })
                               .catch((error) => {
                                 console.error(error);
                               });
                              break;
                                             
      case 'Refer Yufy User Point':
                                fetch(YufyApi.developement+'update_ReferPoint',{
                                  method: 'Post',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify({ UserReferPoint: ShowConf })
                                })
                                   .then((response) => response.text())
                                   .then((responseJson) => {
                                 GetData()
                                  })
                                   .catch((error) => {
                                     console.error(error);
                                   });
                                  break;
                                                 
     case 'Yufy Bones Point':
                                    fetch(YufyApi.developement+`update_Bones`,{
                                      method: 'Post',
                                      headers: { 'Content-Type': 'application/json' },
                                      body: JSON.stringify({ BonesPoint: ShowConf })
                                    })
                                       .then((response) => response.text())
                                       .then((responseJson) => {
                                     GetData()
                                      })
                                       .catch((error) => {
                                         console.error(error);
                                       });
                                      break;
     
     
                                    }

       
      }

      const GetData=()=>{
        fetch(YufyApi.developement+'get_ConfigrationData')
        .then(res => res.json())
        .then((data) => {
         
          setData(data);
    
        })
        .catch(console.log)
    
    }

      useEffect(() => {
        GetData()

        },[])


 
        
        
        
 
        




    return(
  <Container fluid className="main-content-container px-4">
    <Col lg="12" md="12" sm="12" className="mb-4">
      <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
          <h6 className="m-0">Configure Yufy Service</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                  Configuration
                  </th>
                  <th scope="col" className="border-0">
                    Original Value
                  </th>
                  <th scope="col" className="border-0">
                    Updated Value</th>
                  <th scope="col" className="border-0">
                  </th>
           
                </tr>
              </thead>
              <tbody>
              {Showdata.map((stats, idx) => (

                  <tr key={idx}>
                  <td >{idx+1}</td>
                  <td>{stats.key}</td>
                  <td>{stats.Value}</td>
                  <td><input  type="text"  className="form-control form-control-md"  onChange={(e)=>SetConf(e.target.value)} onFocus={()=>InputSet(idx)}  /></td>
                  <td><Button disabled={InputData==idx?false:true} variant="outline-primary" onClick={()=>shoot(stats.key)}>Update</Button></td>
                 
                </tr>
                  ))}
              </tbody>
            </table>
     
          </CardBody>
        </Card>
      </Col>
    </Row>
          </Col>
  </Container>
)};




export default Configuration;
