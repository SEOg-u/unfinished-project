import styled from "styled-components";
import { Link } from "react-router-dom";

import { imgLogo, textLogo } from "../assets";
import { useState } from "react";

const SignUp = () => {
  // 변수 선언
  let check = true;
  let numberOverlap = 0; // 중복확인 함수 완성 시 삭제
  let numberComfirm = 0;

  // error message 변수
  const [errorN, setErrorN] = useState(""); //   nickname error message
  const [errorP, setErrorP] = useState(""); //   password error message
  const [errorCP, setErrorCP] = useState(""); // checkPassword error message
  const [errorE, setErrorE] = useState(""); //   email error message
  const [errorEC, setErrorEC] = useState(""); // emailConfirm error message

  // input value 변수
  const [inputs, setInputs] = useState({
    nickname: "",
    pw: "",
    checkPw: "",
    email: "",
    emailConfirm: "",
  });
  const { nickname, pw, checkPw, email, emailConfirm } = inputs;

  // input value가 바뀔 때마다 전달
  const change = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // 중복확인 버튼 체크 함수
  const overlap = () => {};

  // 인증번호 버튼 체크 함수
  const confirm = () => {
    // 이메일 입력 안 했을 때
    if (email === "") {
      setErrorE("이메일을 입력해 주세요.");
      check = false;
    } else {
      setErrorE("");
    }
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
  // 1. nickname
  const errorNicknameM = () => {
    // 닉네임 입력 안 했을 때
    if (nickname === "") {
      setErrorN("닉네임을 입력해 주세요.");
      check = false;
    }
    // 중복확인 버튼 안 눌렀을 때
    else {
      setErrorN("");
    }
  };

  // 2. password & check password
  const errorPwM = () => {
    // 비밀번호 입력 안 했을 때
    if (pw === "" && checkPw === "") {
      setErrorP("비밀번호를 입력해 주세요.");
      setErrorCP("");
      check = false;
    }
    // 비밀번호와 비밀번호 확인이 다를 때
    else if (pw !== checkPw) {
      setErrorCP("비밀번호가 일치하지 않습니다.");
      setErrorP("");
      check = false;
    } else {
      setErrorP("");
      setErrorCP("");
    }
  };

  // 3. email
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
    // 이미 가입되어 있는 이메일 일 때

    // 인증번호 버튼 안 눌렀을 때
    else if (numberComfirm === 0) {
      setErrorE("인증번호 버튼을 눌러주세요.");
      check = false;
    } else {
      setErrorE("");
    }
  };

  // 4. email confirm
  const errorEmailConfirmM = () => {
    // 인증번호 입력 안 했을 때
    if (emailConfirm === "") {
      setErrorEC("인증번호를 입력해 주세요.");
      check = false;
    }
    // 인증번호 틀렸을 때
    else {
      setErrorEC("");
      setErrorE("");
    }
  };

  // 회원가입 체크 함수
  const checkSignUp = () => {
    errorNicknameM();
    errorPwM();
    errorEmailM();
    errorEmailConfirmM();

    if (check) {
      setErrorN("");
      setErrorP("");
      setErrorCP("");
      setErrorE("");
      setErrorEC("");

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
          <NicknameDiv>
            <NicknameInput
              onChange={change}
              name="nickname"
              value={nickname}
              type="text"
              placeholder="닉네임"
            />
            <OverlapButton
              onClick={() => {
                numberOverlap += 1;
                overlap();
              }}
            >
              중복확인
            </OverlapButton>
          </NicknameDiv>
          <NicknameErrorDiv name="errorN">{errorN}</NicknameErrorDiv>

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

          <CheckPwDiv>
            <CheckPwInput
              onChange={change}
              name="checkPw"
              value={checkPw}
              type="password"
              placeholder="비밀번호 확인"
            />
          </CheckPwDiv>
          <CheckPwErrorDiv name="errorCP">{errorCP}</CheckPwErrorDiv>

          <EmailDiv>
            <EmailInput
              onChange={change}
              name="email"
              value={email}
              type="email"
              placeholder="이메일"
            />
            <ConfirmButton onClick={confirm}>인증하기</ConfirmButton>
          </EmailDiv>
          <EmailErrorDiv name="errorE">{errorE}</EmailErrorDiv>

          <EmailConfirmDiv>
            <EmailConfirmInput
              onChange={change}
              name="emailConfirm"
              value={emailConfirm}
              type="text"
              placeholder="이메일 인증번호"
            />
          </EmailConfirmDiv>
          <EmailConfirmErrorDiv name="errorEC">{errorEC}</EmailConfirmErrorDiv>

          <SignUpBtDiv>
            <SignUpButton onClick={checkSignUp}>회원가입</SignUpButton>
          </SignUpBtDiv>
        </BodyDiv>

        <CoverGoLogInA to="/login">
          <GoLogInP>로그인하러 가기</GoLogInP>
        </CoverGoLogInA>
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
};

const buttonStyle = {
  width: "18%",
  backgroundColor: "transparent",
  color: "#898989",
  borderWidth: "1px",
  borderColor: "#000000",
  borderStyle: "solid",
};

const hoverButtonStyle = {
  backgroundColor: "#643C00",
  color: "#ffffff",
  borderColor: "#643C00",
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
  height: 480px;
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

const NicknameErrorDiv = styled.div`
  ${errorStyle}
`;
const PwErrorDiv = styled.div`
  ${errorStyle}
`;
const CheckPwErrorDiv = styled.div`
  ${errorStyle}
`;
const EmailErrorDiv = styled.div`
  ${errorStyle}
`;
const EmailConfirmErrorDiv = styled.div`
  ${errorStyle}
`;

const NicknameDiv = styled.div`
  ${divStyle}
`;
const NicknameInput = styled.input`
  width: 72%;
  ${inputStyle}
`;
const OverlapButton = styled.button`
  ${buttonStyle};
  &:hover {
    ${hoverButtonStyle}
  }
`;

const PwDiv = styled.div`
  ${divStyle}
`;
const PwInput = styled.input`
  width: 100%;
  ${inputStyle}
`;

const CheckPwDiv = styled.div`
  ${divStyle}
`;
const CheckPwInput = styled.input`
  width: 100%;
  ${inputStyle}
`;

const EmailDiv = styled.div`
  ${divStyle}
`;
const EmailInput = styled.input`
  width: 72%;
  ${inputStyle}
`;
const ConfirmButton = styled.button`
  ${buttonStyle}
  &:hover {
    ${hoverButtonStyle}
  }
`;

const EmailConfirmDiv = styled.div`
  ${divStyle}
`;
const EmailConfirmInput = styled.input`
  width: 100%;
  ${inputStyle}
`;

const SignUpBtDiv = styled.div`
  margin-top: 5px;
  height: 56px;
  width: 435px;
  display: flex;
  justify-content: center;
`;
const SignUpButton = styled.button`
  width: 210px;
  border: none;
  font-size: 16px;
  color: #ffffff;
  background-color: #643c00;
  &:hover {
    font-weight: 600;
  }
`;

const CoverGoLogInA = styled(Link)`
  margin-top: 15px;
  width: 540px;
  display: flex;
  justify-content: end;
  position: absolute;
  text-decoration: none;
`;
const GoLogInP = styled.p`
  color: #898989;
  font-family: "Noto Sans";
  font-style: normal;
  &:hover {
    font-weight: 600;
  }
`;

export default SignUp;
