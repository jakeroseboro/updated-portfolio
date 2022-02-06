import React from "react";
import Fade from "react-reveal/Fade";
import { Container} from "react-bootstrap";
import emailjs from "emailjs-com";
import { Form, Input, Button, message } from "antd";

export const Skills = () => {
  const handleSubmit = (e: any) => {
    emailjs
      .send(
        "jakeroseboro",
        "jakeroseboro",
        {
          message_email: e.message_email,
          message: e.message,
          from_first_name: e.from_first_name,
          from_last_name: e.from_last_name,
        },
        "user_vbjYlIJevYSxTjDOUmDQ0"
      )
      .then((_) => {
        return message.success("Email sent!");
      })
      .catch((_) => {
        return message.error("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact">
      <Container>
        <Fade bottom duration={600} delay={100} distance="0px">
          <h2 className="section-title">Contact us to learn more!</h2>
        </Fade>
        <Fade bottom duration={600} delay={100} distance="30px">
          <div className="contact-wrapper">
            <Form
              name="nest-messages"
              onFinish={handleSubmit}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 16 }}
            >
              <Form.Item
                name="from_first_name"
                label="First Name"
                rules={[{ required: true, message: "Please enter your first name!" }]}
                labelAlign="left"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="from_last_name"
                label="Last Name"
                rules={[{ required: true, message: "Please enter your last name!" }]}
                labelAlign="left"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="message_email"
                label="Email"
                rules={[{ type: "email", required: true , message: "Please enter your email!"}]}
                labelAlign="left"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                labelAlign="left"
                rules={[{ required: true, message: "Please enter your message!" }]}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{backgroundColor: "#000000"}}>
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
