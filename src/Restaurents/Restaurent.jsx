import React from "react";
import { ListGroup, Card, Row, Badge } from "react-bootstrap";
import { ratingColors } from "./common";
// import FontAwesome from "react-fontawesome";

export default function Restaurant(props) {
  const { details } = props;
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <Card className="border-left-primary shadow h-100">
        <Card.Body>
          <Row className="no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                {details["Restaurant Name"]}
              </div>
              <div className="mb-0 font-weight-bold text-gray-800">
                {details.score}
              </div>
            </div>
            <div className="col-auto">
              <p>
                <Badge style={ratingColors[details["Rating color"]]}>
                  {details["Aggregate rating"]}
                </Badge>{" "}
                <small>{details["Rating text"]}</small>
              </p>
            </div>
          </Row>
          <div>
            <ListGroup className="list-group list-group-flush p-0">
              <ListGroup.Item className="p-0 bg-light">
                <label className="text-info m-0">Cost for 2P:</label>{" "}
                {details["Average Cost for two"]}
              </ListGroup.Item>
              <ListGroup.Item className="p-0 bg-light">
                <label className="text-info m-0">Table booking:</label>{" "}
                {details["Has Table booking"]}
              </ListGroup.Item>
              <ListGroup.Item className="p-0 bg-light">
                <label className="text-info m-0">Online booking:</label>{" "}
                {details["Has Online delivery"]}
              </ListGroup.Item>
              <ListGroup.Item className="p-0 bg-light">
                <label className="text-info m-0">Votes:</label>{" "}
                {details["Votes"]}
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Card.Body>
        <Card.Footer>
          {details["Cuisines"].split(",").map((cuisin) => (
            <Badge className="mr-1" variant="info">
              <p className="m-0">
                <small>{cuisin}</small>
              </p>
            </Badge>
          ))}
        </Card.Footer>
      </Card>
    </div>
  );
}
