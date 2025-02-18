import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Container, Row, Col, Card } from "react-bootstrap";

const TaskProgress = () => {
  const percentage = 75; // Replace with dynamic value

  return (
    <Container >
      <Row >
        <Col md={7}>
          <Card>
            <Card.Body className="text-center">
              
              <CircularProgressbar
                value={percentage}
                text={`Task: ${percentage}%`}
                styles={buildStyles({
                  textSize: "16px",
                  pathColor: "#0d6efd", // Bootstrap Primary Color
                  textColor: "#000",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#f8f9fa",
                })}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskProgress;
