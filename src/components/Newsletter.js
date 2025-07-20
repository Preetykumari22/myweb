import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import photo from "../assets/img/tu.jpg";

export const Newsletter = ({ status }) => {
  useEffect(() => {
    if (status === 'success') {
      // Clear fields if needed
    }
  }, [status]);

  return (
    <Col >
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col  className="profile-image-container">
            <div className="profile-image">
              <img src={photo} alt="Profile" />
            </div>
          </Col>
          <Col  className="para">
            <div >
            <h3>Thanks for visiting!</h3>
            </div>
          </Col>

        </Row>
      </div>
    </Col>
  );
};
