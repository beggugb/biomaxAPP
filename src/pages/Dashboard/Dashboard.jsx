import React from 'react';
import {  
  Row,
  Col,
  Card, CardHeader, CardTitle, CardBody
} from "reactstrap"

import Bar from './components/Bar'
import Bars from './components/Bars'
import Pie from './components/Pie'
import Line from './components/Line'


function Dashboard () {     
   
  return (
    <div className="content">     
    <div className="main-contenido">
    
      <Row>
        <Col md="6">
          <Card>
          <CardHeader>            
            </CardHeader>
            <CardBody>
                 <Bar/>
            </CardBody>
          </Card>
        </Col>              
        <Col md="6">          
          <Card>
          <CardHeader>            
            </CardHeader>
            <CardBody>
                  <Bars/>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Card>
          <CardHeader>            
            </CardHeader>
            <CardBody>
              <Pie/>
            </CardBody>
          </Card>
        </Col>              
        <Col md="6">          
          <Card>
          <CardHeader>            
            </CardHeader>
            <CardBody>
              <Line/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  </div> 
  );
}

export default Dashboard