import React from "react";
import { Form, Radio, Button, Input } from "antd";

const Survey = () => {
  const onFinish = (values) => {
    console.log("Survey Form Values:", values);
  };

  return (
    <section className="w-full flex justify-center bg-[#243E36]">
      <div className="p-4 w-[50%] bg-[#F1F7ED] shadow-inherit">
        <h1 className="text-2xl font-bold mb-4">Volunteer Survey</h1>
        <Form
          name="volunteer-survey"
          onFinish={onFinish}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Form.Item
            name="mail"
            label="Your Mail (Secured)"
            rules={[
              {
                required: true,
                message: "Please enter your mail",
              },
            ]}
          >
            <Input placeholder="Mail" type="string" />
          </Form.Item>
          <Form.Item
            name="englishLevel"
            label="What is your English proficiency level?"
            rules={[
              {
                required: true,
                message: "Please select your English proficiency level",
              },
            ]}
          >
            <Radio.Group>
              <Radio style={{ display: "block" }} value="beginner">
                Beginner
              </Radio>
              <Radio style={{ display: "block" }} value="intermediate">
                Intermediate
              </Radio>
              <Radio style={{ display: "block" }} value="advanced">
                Advanced
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="challenges"
            label="What challenges have you faced while volunteering with our program? (Select all that apply)"
          >
            <Radio.Group>
              <Radio style={{ display: "block" }} value="language barrier">
                Language barrier with the orphans
              </Radio>
              <Radio style={{ display: "block" }} value="lack of resources">
                Lack of resources/materials
              </Radio>
              <Radio style={{ display: "block" }} value="behavior issues">
                Behavioral issues with the orphans
              </Radio>
              <Radio style={{ display: "block" }} value="time constraints">
                Time constraints
              </Radio>
              <Radio style={{ display: "block" }} value="lack of training">
                Lack of training or guidance
              </Radio>
              <Radio style={{ display: "block" }} value="other">
                Other (please specify)
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="impact"
            label="How has volunteering with our program impacted you personally?"
          >
            <Radio.Group>
              <Radio style={{ display: "block" }} value="teaching skills">
                Improved my teaching skills
              </Radio>
              <Radio style={{ display: "block" }} value="cultural awareness">
                Increased my cultural awareness
              </Radio>
              <Radio style={{ display: "block" }} value="communication skills">
                Enhanced my communication skills
              </Radio>
              <Radio style={{ display: "block" }} value="fulfilled">
                Made me feel more fulfilled
              </Radio>
              <Radio style={{ display: "block" }} value="other">
                Other (please specify)
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="recommend"
            label="Would you recommend volunteering with our program to others?"
            rules={[
              {
                required: true,
                message: "Please select an option",
              },
            ]}
          >
            <Radio.Group>
              <Radio style={{ display: "block" }} value="yes">
                Yes
              </Radio>
              <Radio style={{ display: "block" }} value="no">
                No
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="recommendReasons"
            label="If you answered yes to the previous question, what reasons would you give to recommend our program? (Select all that apply)"
          >
            <Radio.Group>
              <Radio style={{ display: "block" }} value="impact">
                Positive impact on orphans' education and well-being
              </Radio>
              <Radio style={{ display: "block" }} value="fulfillment">
                Fulfilling and rewarding experience
              </Radio>
              <Radio style={{ display: "block" }} value="cultural exchange">
                Opportunity for cultural exchange
              </Radio>
              <Radio style={{ display: "block" }} value="organization">
                Well-organized program and supportive team
              </Radio>
              <Radio style={{ display: "block" }} value="other">
                Other (please specify)
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }} className="text-center">
            <Button className="text-black" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Survey;
