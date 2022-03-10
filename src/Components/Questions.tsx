import React, { useEffect, useState } from "react";
import {
  MultiChoice,
  MultiSelect,
  TrueOrFalse,
  FillInTheBlank,
} from "./quesTypes";
import { useParams, useNavigate } from "react-router-dom";
import { JavascriptQuestions, htmlQuestions, cssQuestions } from "./data";
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline';
import './Styles.css'

const Questions: React.FC<any> = () => {
  const [data, setData] = useState<any>([JavascriptQuestions]);
  const [dataIndex, setDataIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const params = useParams();
  const handleAnswer = (ans: string) => {
    if (data[dataIndex].right.toLowerCase() === ans.toLowerCase()) {
      let total = score + 10;
      setScore(total);
      localStorage.setItem("score", total.toString());
    }
    dataIndex < data.length - 1
      ? setDataIndex((num) => num + 1)
      : navigate("/result");
  };
  useEffect(() => {
    if (params.name === "javascript") {
      setData(JavascriptQuestions);
    }
    if (params.name === "html") {
      setData(htmlQuestions);
    }
    if (params.name === "css") {
      setData(cssQuestions);
    }
  }, [params.name]);
  return (
    <React.Fragment>
    <Container  maxWidth='sm'>
       <div className="pages">
      {data.map((item: any, idx: number) => (
       
        <p style={{background: idx === dataIndex ? 'red' :'grey'}} key={idx} onClick={() => setDataIndex(idx)}>
          {idx + 1}
        </p>

      ))}
              </div>
      <h1 className="question">{dataIndex + 1}.{data[dataIndex].question}</h1>
      {data[dataIndex].type === "multi_choice" ? (
        <MultiChoice
          handleAnswer={handleAnswer}
          answers={data[dataIndex].answers}
        />
      ) : data[dataIndex].type === "true_false" ? (
        <TrueOrFalse handleAnswer={handleAnswer} />
      ) : data[dataIndex].type === "fill_blank" ? (
        <FillInTheBlank handleAnswer={handleAnswer} />
      ) : (
        data[dataIndex].type === "multi_select" && (
          <MultiSelect handleAnswer={handleAnswer} />
        )
      )}
    </Container>
    </React.Fragment>
  );
};

export default Questions;
