import React, {useState} from 'react';
import Icon from "./components/Icon";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Container, Button, Col, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const items = new Array(9).fill("empty");


const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [result, setResult] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setResult("");
    items.fill("empty", 0 , 9);
  }

  const checkIsWinner = () => {
    if(items[0] === items[1] && items[0] === items[2] && items[0] !== "empty"){
      setResult( `${items[0]} wins`);
    } else if(items[3] === items[4] && items[3] === items[5] && items[3] !== "empty"){
      setResult( `${items[3]} wins`);
    } else if(items[6] === items[7] && items[6] === items[8] && items[6] !== "empty"){
      setResult( `${items[3]} wins`);
    } else if(items[0] === items[3] && items[0] === items[6] && items[0] !== "empty"){
      setResult( `${items[0]} wins`);
    } else if(items[1] === items[4] && items[1] === items[7] && items[1] !== "empty"){
      setResult( `${items[1]} wins`);
    } else if(items[2] === items[5] && items[2] === items[8] && items[2] !== "empty"){
      setResult( `${items[2]} wins`);
    } else if(items[0] === items[4] && items[0] === items[8] && items[0] !== "empty"){
      setResult( `${items[0]} wins`);
    } else if(items[2] === items[4] && items[2] === items[6] && items[2] !== "empty"){
      setResult( `${items[2]} wins`);
    }
    
  }

  const changeItem = itemNum => {
    if(result){
      return toast(result, {type: "success"});
    }

    if(items[itemNum]=== "empty"){
      items[itemNum] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else{
      return toast("Opps! already filled", {type: "error"});
    }

    checkIsWinner();
  }

  return(
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">

          {result ? (
            <div>
              <h1 color="success" className=" text-primary text-uppercase text-center ">
                {result}
              </h1>
              <Button color="success" block onClick={reloadGame}> Reload </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}

          <div className="grid">
            {items.map((item, index) => (
              <Card onClick={ () => changeItem(index)  }>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )

}

export default App;
