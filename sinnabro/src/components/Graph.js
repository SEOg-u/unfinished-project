import { useState } from "react";
import styled from "styled-components";

const Graph = () => {
  // 변수 선언
  const [bar, setBar] = useState(0);

  // input value 변수
  const [inputs, setInputs] = useState({
    input: 0,
  });
  const { input } = inputs;

  // input value가 바뀔 때마다 전달
  const change = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // 그래프 길이 조절 함수
  const progress = () => {
    let i = 0;

    setInterval(() => {
      if (i <= input) {
        setBar(`${(i * 5) / 3}%`);
        i++;
      } else {
        clearInterval();
      }
    }, 16);
  };

  // input enterkey 눌렀을 때 경로
  const enterkey = (e) => {
    if (e.key === "Enter") {
      progress();
    }
  };

  return (
    <Div>
      <Input
        onChange={change}
        onKeyPress={enterkey}
        name="input"
        value={input}
        type="number"
        min="0"
        max="60"
      />

      <CoverBarDiv>
        <BarDiv bar={bar}></BarDiv>
      </CoverBarDiv>

      <Button onClick={progress}>완료</Button>
    </Div>
  );
};

// styled-components
const Div = styled.div`
  margin-top: 4px;
  margin-left: 12.5px;
  padding-bottom: 4px;
  width: 77.5%;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  padding-left: 8px;
  width: 35px;
`;
const CoverBarDiv = styled.div`
  width: 220px;
  height: 20px;
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  font-weight: 600;
  font-size: 0.8rem;
`;
const BarDiv = styled.div`
  padding: 0;
  width: ${({ bar }) => bar};
  height: 20px;
  text-align: center;
  background-color: #d1e482;
  color: #111;
`;
const Button = styled.button`
  width: 40px;
  color: #898989;
  background-color: transparent;
  border-width: 1px;
  border-color: #000000;
  border-style: solid;

  &:hover {
    color: #ffffff;
    background-color: #643c00;
    border-color: #643c00;
  }
`;

export default Graph;
