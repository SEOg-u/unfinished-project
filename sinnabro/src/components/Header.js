import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { imgLogo, textLogo } from "../assets";

const Header = () => {
  // 날짜
  const [date, setDate] = useState("00.00");

  useEffect(() => {
    const Timer = setInterval(() => {
      let time = new Date();

      if (time.getMonth() + 1 < 10 && time.getDate() < 10) {
        setDate("0" + (time.getMonth() + 1) + ".0" + time.getDate());
      } else if (time.getMonth() + 1 < 9 && time.getDate() > 10) {
        setDate("0" + (time.getMonth() + 1) + "." + time.getDate());
      } else if (time.getMonth() + 1 > 9 && time.getDate() < 10) {
        setDate(time.getMonth() + 1 + ".0" + time.getDate());
      } else if (time.getMonth() + 1 > 9 && time.getDate() > 10) {
        setDate(time.getMonth() + 1 + "." + time.getDate());
      } else {
        console.log("DateError (components/Header.js/24)");
      }
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, []);

  // 시간
  const [clock, setClock] = useState("00 : 00");

  useEffect(() => {
    const Timer = setInterval(() => {
      let time = new Date();

      if (time.getHours() < 10 && time.getMinutes() < 10) {
        setClock("0" + time.getHours() + " : 0" + time.getMinutes());
      } else if (time.getHours() < 10 && time.getMinutes() > 10) {
        setClock("0" + time.getHours() + " : " + time.getMinutes());
      } else if (time.getHours() > 10 && time.getMinutes() < 10) {
        setClock(time.getHours() + " : 0" + time.getMinutes());
      } else if (time.getHours() > 10 && time.getMinutes() > 10) {
        setClock(time.getHours() + " : " + time.getMinutes());
      } else {
        console.log("ClockError (components/Header.js/49)");
      }
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, []);

  return (
    <Div>
      <ImgsA to="/">
        <IMGLogo src={imgLogo} alt="IMGLogo" />
        <TextLogo src={textLogo} alt="TextLogo" />
      </ImgsA>

      <TextsDiv>
        <SnLDiv>
          <SignUpA to="/signup">회원가입</SignUpA>
          <LogInA to="/login">로그인</LogInA>
        </SnLDiv>

        <TimeDiv>
          <ClockP>{`${date} - ${clock}`}</ClockP>
        </TimeDiv>
      </TextsDiv>
    </Div>
  );
};

// css variable
const goStyle = {
  textDecoration: "none",
  color: "#000000",
  fontFamily: "Noto Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
};

// styled-components
const Div = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-color: #643c00;
  border-width: 1px 0px 1px 0px;
  border-style: solid;
`;
const ImgsA = styled(Link)`
  margin-left: 1.2%;
  width: 136px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IMGLogo = styled.img`
  width: 28px;
`;
const TextLogo = styled.img`
  width: 100px;
`;

const TextsDiv = styled.div`
  display: flex;
  align-items: center;
`;
const SnLDiv = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
`;
const SignUpA = styled(Link)`
  ${goStyle}
`;
const LogInA = styled(Link)`
  ${goStyle}
`;

const TimeDiv = styled.div`
  width: 142px;
  display: flex;
  justify-content: center;
  border-width: 0px 0px 0px 1px;
  border-color: #643c00;
  border-style: solid;
`;
const ClockP = styled.p`
  color: #000000;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

export default Header;
