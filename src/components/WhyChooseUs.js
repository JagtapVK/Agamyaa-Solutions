import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import girl from '../images/girl.jpg';


const InfoCard = ({ title, text }) => (
  <Card className="mb-3 shadow-sm">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
    </Card.Body>
  </Card>
);

const WhyChooseUs = () => {
  const info = [
    {
      title: 'Offshore and cost effective services:',
      text: 'We offer our clients with the best offshore call center outsourcing services in which we are specialized in. We often offer our clients with highly cost effective technique which keeps you connected with us.',
    },
    {
      title: 'Customer Support:',
      text: 'We understand the importance of our relation with each other, when we rise you also rise with us. We believe in creating best opportunities, therefore we also believe in creating a long term relation with our clients.',
    },
    {
      title: '24*7*365 Availability',
      text: 'We offer services to our clients 24*7*365. Whenever you want any help our team will be present for your support.',
    },
    {
      title: 'Multi Lingual Support',
      text: 'We also provide you Multi lingual support team so that it would be easy to meet your PAN India requirements.',
    },
    {
      title: 'In House IT team',
      text: 'We also have our In house IT Tech team which includes our professional programmers, developers and our support team.',
    },
    {
      title: 'Low Attrition Rate',
      text: 'We have very low rate of attrition at our company. Current rate of attrition is 5%.',
    },
  ];

  return (
    <Container className="py-5">
      <Row>
        <Col lg={5} className="mb-4">
          <img
            src={girl}
            alt="Support Agent"
            className="img-fluid rounded"
          />
        </Col>
        <Col lg={7}>
          <h2 className="mb-4">WHY GO FOR RIEMEN SOLUTION?</h2>
          {info.map((item, index) => (
            <InfoCard key={index} title={item.title} text={item.text} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
