import styled from "styled-components";
import { Link } from "react-router-dom";

import { imgLogo, textLogo } from "../assets";
import { useState } from "react";

const DDay = () => {
  // 변수 선언
  let check = true;

  // error message 변수
  const [errorN, setErrorN] = useState(""); //   name error message
  const [errorD, setErrorD] = useState(""); //   date error message

  // input value 변수
  const [inputs, setInputs] = useState({
    name: "",
    date: "",
  });
  const { name, date } = inputs;

  // input value가 바뀔 때마다 전달
  const change = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // error message 보내주는 함수들
  // 1. name
  const errorNameM = () => {
    // 디데이 이름 입력 안 했을 때
    if (name === "") {
      setErrorN("디데이 이름을 입력해 주세요.");
      check = false;
    } else {
      setErrorN("");
    }
  };

  // 2. date
  const errorDateM = () => {
    // 날짜 선택 안 했을 때
    if (date === "") {
      setErrorD("날짜를 선택해 주세요.");
      check = false;
    } else {
      setErrorD("");
    }
  };

  // 추가하기 체크 함수
  const checkAdd = () => {
    errorNameM();
    errorDateM();

    if (check) {
      setErrorN("");
      setErrorD("");

      // axios 연동
    }
  };

  return (
    <Div>
      <BoxDiv>
        <TitleDiv>
          <Link to="/">
            <IMGLogo src={imgLogo} alt="IMGLogo" />
            <TextLogo src={textLogo} alt="TextLogo" />
          </Link>
        </TitleDiv>

        <BodyDiv>
          <NameDiv>
            <NameInput
              onChange={change}
              name="name"
              value={name}
              type="text"
              placeholder="디데이 이름"
            />
          </NameDiv>
          <NameErrorDiv name="errorN">{errorN}</NameErrorDiv>

          <DateDiv>
            <DateInput
              onChange={change}
              name="date"
              value={date}
              type="date"
              placeholder="비밀번호"
            />
          </DateDiv>
          <DateErrorDiv name="errorD">{errorD}</DateErrorDiv>

          <AddBtDiv>
            <AddButton onClick={checkAdd}>추가하기</AddButton>
          </AddBtDiv>
        </BodyDiv>
      </BoxDiv>
    </Div>
  );
};

// css variable
const errorStyle = {
  marginTop: "1.2px",
  fontSize: "11.5px",
  height: "20px",
  color: "red",
  fontWeight: 700,
};

const divStyle = {
  width: "90%",
  height: "40px",
  display: "flex",
  justifyContent: "space-between",
};

const inputStyle = {
  width: "100%",
  paddingTop: "2.2px",
  paddingLeft: "20px",
};

// styled-components
const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BoxDiv = styled.div`
  width: 540px;
  height: 340px;
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
`;
const TitleDiv = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IMGLogo = styled.img`
  width: 45px;
`;
const TextLogo = styled.img`
  margin-left: 10px;
  width: 150px;
`;
const BodyDiv = styled.div`
  margin-top: 23px;
  margin-left: 55px;
  width: 480px;
`;

const NameErrorDiv = styled.div`
  ${errorStyle}
`;
const DateErrorDiv = styled.div`
  ${errorStyle}
`;

const NameDiv = styled.div`
  ${divStyle}
`;
const NameInput = styled.input`
  ${inputStyle}
`;

const DateDiv = styled.div`
  ${divStyle}
`;
const DateInput = styled.input`
  padding-right: 20px;
  ${inputStyle}
`;

const AddBtDiv = styled.div`
  margin-top: 30px;
  height: 56px;
  width: 435px;
  display: flex;
  justify-content: center;
`;
const AddButton = styled.button`
  width: 210px;
  border: none;
  font-size: 16px;
  color: #ffffff;
  background-color: #643c00;

  &:hover {
    font-weight: 600;
  }
`;

export default DDay;
