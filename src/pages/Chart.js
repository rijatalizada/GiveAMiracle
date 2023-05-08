import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data1 = [
  { answer: "Strongly Disagree", count: 2 },
  { answer: "Disagree", count: 1 },
  { answer: "Neutral", count: 4 },
  { answer: "Agree", count: 6 },
  { answer: "Strongly Agree", count: 2 },
];

const data2 = [
  { answer: "Yes", count: 10 },
  { answer: "No", count: 5 },
];

const data3 = [
  { answer: "Impact", count: 8 },
  { answer: "Fulfillment", count: 7 },
  { answer: "Cultural Exchange", count: 4 },
  { answer: "Organization", count: 6 },
  { answer: "Other", count: 2 },
];

const data4 = [
  { answer: "Never", count: 3 },
  { answer: "Rarely", count: 4 },
  { answer: "Sometimes", count: 6 },
  { answer: "Often", count: 2 },
];

const data5 = [
  { answer: "Not at all", count: 1 },
  { answer: "Slightly", count: 4 },
  { answer: "Moderately", count: 6 },
  { answer: "Very much", count: 4 },
];

const Chart = () => {
  return (
    <div className="container mx-auto my-8 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Volunteer Survey Results</h1>
      <h2 className="text-lg font-bold mb-2">
        Question 1: How organized was the program?
      </h2>
      <BarChart width={600} height={300} data={data1}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="answer" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
      <h2 className="text-lg font-bold my-2">
        Question 2: Would you recommend our program to others?
      </h2>
      <BarChart width={600} height={300} data={data2}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="answer" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
      <h2 className="text-lg font-bold my-2">
        Question 3: If you answered yes to the previous question, what reasons
        would you give to recommend our program? (Select all that apply)
      </h2>
      <BarChart width={600} height={300} data={data3}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="answer" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
      <h2 className="text-lg font-bold my-2">
        Question 4: How often did you feel supported by our program staff?
      </h2>
      <BarChart width={600} height={300} data={data4}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis data Key="answer" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
      <h2 className="text-lg font-bold my-2">
        Question 5: To what extent did our program help you achieve your
        personal goals?
      </h2>
      <BarChart width={600} height={300} data={data5}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="answer" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Chart;
