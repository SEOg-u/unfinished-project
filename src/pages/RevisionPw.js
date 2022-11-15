import styled from "styled-components";
import { Link } from "react-router-dom";

import { imgLogo, textLogo } from "../assets";
import { useState } from "react";

const RevisionPw = () => {
  // 변수 선언
  let check = true;

  // error message 변수
  const [errorP, setErrorP] = useState(""); //     password error message
  const [errorNP, setErrorNP] = useState(""); //   newPassword error message
  const [errorCNP, setErrorCNP] = useState(""); // checkNewPassword error message

  // input value 변수
  const [inputs, setInputs] = useState({
    pw: "",
    newPw: "",
    checkNewPw: "",
  });
  const { pw, newPw, checkNewPw } = inputs;

  // input value가 바뀔 때마다 전달
  const change = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // error message 보내주는 함수들
  const errorPwM = () => {
    // 비밀번호 입력 안 했을 때
    if (pw === "") {
      setErrorP("현재 비밀번호를 입력해 주세요.");
      check = false;
    }
    // 비밀번호 틀릴 때
    else {
      setErrorP("");
    }
  };

  // 2. new password & check new password
  const errorNewPwM = () => {
    // 비밀번호 입력 안 했을 때
    if (newPw === "" && checkNewPw === "") {
      setErrorNP("새로운 비밀번호를 입력해 주세요.");
      setErrorCNP("");
      check = false;
    }
    // 비밀번호와 비밀번호 확인이 다를 때
    else if (newPw !== checkNewPw) {
      setErrorCNP("비밀번호가 일치하지 않습니다.");
      setErrorNP("");
      check = false;
    } else {
      setErrorNP("");
      setErrorCNP("");
    }
  };

  // 비밀번호 수정 체크 함수
  const checkRevision = () => {
    errorPwM();
    errorNewPwM();

    if (check) {
      setErrorP("");
      setErrorNP("");
      setErrorCNP("");

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
          <PwDiv>
            <PwInput
              onChange={change}
              name="pw"
              value={pw}
              type="password"
              placeholder="비밀번호"
            />
          </PwDiv>
          <PwErrorDiv name="errorP">{errorP}</PwErrorDiv>

          <NewPwDiv>
            <NewPwInput
              onChange={change}
              name="newPw"
              value={newPw}
              type="password"
              placeholder="새로운 비밀번호"
            />
          </NewPwDiv>
          <NewPwErrorDiv name="errorCP">{errorNP}</NewPwErrorDiv>

          <CheckNewPwDiv>
            <CheckNewPwInput
              onChange={change}
              name="checkNewPw"
              value={checkNewPw}
              type="password"
              placeholder="새로운 비밀번호 확인"
            />
          </CheckNewPwDiv>
          <CheckNewPwErrorDiv name="errorCNP">{errorCNP}</CheckNewPwErrorDiv>

          <RevisionBtDiv>
            <RevisionButton onClick={checkRevision}>수정하기</RevisionButton>
          </RevisionBtDiv>
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
  paddingTop: "2.2px",
  paddingLeft: "20px",
  width: "100%",
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
  height: 400px;
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

const PwErrorDiv = styled.div`
  ${errorStyle}
`;
const NewPwErrorDiv = styled.div`
  ${errorStyle}
`;
const CheckNewPwErrorDiv = styled.div`
  ${errorStyle}
`;

const PwDiv = styled.div`
  ${divStyle}
`;
const PwInput = styled.input`
  ${inputStyle}
`;

const NewPwDiv = styled.div`
  ${divStyle}
`;
const NewPwInput = styled.input`
  ${inputStyle}
`;

const CheckNewPwDiv = styled.div`
  ${divStyle}
`;
const CheckNewPwInput = styled.input`
  ${inputStyle}
`;

const RevisionBtDiv = styled.div`
  margin-top: 25px;
  height: 56px;
  width: 435px;
  display: flex;
  justify-content: center;
`;
const RevisionButton = styled.button`
  width: 210px;
  border: none;
  font-size: 16px;
  color: #ffffff;
  background-color: #643c00;

  &:hover {
    font-weight: 600;
  }
`;

export default RevisionPw;
