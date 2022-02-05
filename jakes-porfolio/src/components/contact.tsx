import React from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import { Form, Input, Button, message } from "antd";

export const Skills = () => {
  const handleSubmit = (e: any) => {
    
    console.log(e);
    emailjs
      .send("jakeroseboro", "jakeroseboro", {
        message_email: e.message_email,
        message: e.message,
        from_first_name: e.from_first_name,
        from_last_name: e.from_last_name,
      }, "user_vbjYlIJevYSxTjDOUmDQ0")
      .then((_) => {
        return message.success("email sent");
      })
      .catch((e) => console.log(e));
  };

  return (
    <section id="contact">
      <Container>
        <Fade bottom duration={600} delay={100} distance="0px">
          <h2 className="section-title">Contact us to learn more!</h2>
        </Fade>
        <Fade bottom duration={600} delay={100} distance="30px">
          <div className="contact-wrapper">
            <Form name="nest-messages" onFinish={handleSubmit}>
              <Row>
                <Col>
                  <Form.Item
                    name="from_first_name"
                    label="First Name"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item
                    name="from_last_name"
                    label="Last Name"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="message_email"
                label="Email"
                rules={[{ type: "email" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="message" label="Message">
                <Input.TextArea />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Fade>
      </Container>
    </section>
  );
};
