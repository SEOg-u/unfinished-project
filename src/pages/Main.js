import styled from "styled-components";
import Header from "../components/Header";
import TimeTable from "../components/TimeTable";

const Main = () => {
  return (
    <>
      <Header />

      <BodyDiv>
        <TimeTable />
      </BodyDiv>
    </>
  );
};

// styled-components
const BodyDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

export default Main;
