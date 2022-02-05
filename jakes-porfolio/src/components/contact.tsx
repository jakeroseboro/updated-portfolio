import React from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import { Form, Input, Button } from "antd";

export const Skills = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
    //emailjs.sendForm('jakeroseboro', 'jakeroseboro', )
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
              <Form.Item
                name={["user", "name"]}
                label="Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[{ type: "email" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item name={["user", "website"]} label="Website">
                <Input />
              </Form.Item>
              <Form.Item name={["user", "introduction"]} label="Introduction">
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
