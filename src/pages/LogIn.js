import styled from "styled-components";
import { Link } from "react-router-dom";

import { imgLogo, textLogo } from "../assets";
import { useState } from "react";

const LogIn = () => {
  // 변수 선언
  let check = true;

  // axios POST

  // error message 변수
  const [errorE, setErrorE] = useState(""); //   email error message
  const [errorP, setErrorP] = useState(""); //   password error message

  // input value 변수
  const [inputs, setInputs] = useState({
    email: "",
    pw: "",
  });
  const { email, pw } = inputs;

  // input value가 바뀔 때마다 전달
  const change = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // 이메일 형식 체크 함수
  const testEmail = () => {
    var reg =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!reg.test(email)) {
      return false;
    }

    return true;
  };

  // error message 보내주는 함수들
  // 1. email
  const errorEmailM = () => {
    // 이메일 입력 안 했을 때
    if (email === "") {
      setErrorE("이메일을 입력해 주세요.");
      check = false;
    }
    // 이메일 형식 틀렸을 때
    else if (!testEmail()) {
      setErrorE("잘못된 이메일 형식입니다.");
      check = false;
    }
    // 존재하지 않는 이메일 일 때
    else {
      setErrorE("");
    }
  };
  // 2. password
  const errorPwM = () => {
    // 비밀번호 입력 안 했을 때
    if (pw === "") {
      setErrorP("비밀번호를 입력해 주세요.");
      check = false;
    }
    // 비밀번호 틀릴 때
    else {
      setErrorP("");
    }
  };

  // 로그인 체크 함수
  const checkLogIn = () => {
    errorEmailM();
    errorPwM();

    if (check) {
      setErrorE("");
      setErrorP("");

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
          <EmailDiv>
            <EmailInput
              onChange={change}
              name="email"
              value={email}
              type="email"
              placeholder="이메일"
            />
          </EmailDiv>
          <EmailErrorDiv name="errorE">{errorE}</EmailErrorDiv>

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

          <LogInBtDiv>
            <LogInButton onClick={checkLogIn}>로그인</LogInButton>
          </LogInBtDiv>
        </BodyDiv>

        <CoverGoPnSDiv>
          <GoPwA to="/findpw">비밀번호를 잊어버렸어요</GoPwA>
          <GoSignUpA to="/signup">회원가입하러 가기</GoSignUpA>
        </CoverGoPnSDiv>
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
  height: 370px;
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
  margin-top: 50px;
  margin-left: 55px;
  width: 480px;
`;

const EmailErrorDiv = styled.div`
  ${errorStyle}
`;
const PwErrorDiv = styled.div`
  ${errorStyle}
`;

const EmailDiv = styled.div`
  ${divStyle}
`;
const EmailInput = styled.input`
  ${inputStyle}
`;

const PwDiv = styled.div`
  ${divStyle}
`;
const PwInput = styled.input`
  ${inputStyle}
`;

const LogInBtDiv = styled.div`
  margin-top: 25px;
  height: 56px;
  width: 435px;
  display: flex;
  justify-content: center;
`;
const LogInButton = styled.button`
  width: 210px;
  border: none;
  font-size: 16px;
  color: #ffffff;
  background-color: #643c00;

  &:hover {
    font-weight: 600;
  }
`;

const CoverGoPnSDiv = styled.div`
  margin-top: 42px;
  width: 540px;
  display: flex;
  justify-content: space-between;
  position: absolute;
`;

const GoPwA = styled(Link)`
  color: #898989;
  font-family: "Noto Sans";
  font-style: normal;
  text-decoration: none;

  &:hover {
    font-weight: 600;
  }
`;
const GoSignUpA = styled(Link)`
  color: #898989;
  font-family: "Noto Sans";
  font-style: normal;
  text-decoration: none;

  &:hover {
    font-weight: 600;
  }
`;

export default LogIn;
