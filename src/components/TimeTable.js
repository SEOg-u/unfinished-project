import styled from "styled-components";
import Graph from "./Graph";

const TimeTable = () => {
  return (
    <Div>
      <TitleDiv>
        <TitleP>Time Table</TitleP>
        <ExplainP>1시간 간격</ExplainP>
      </TitleDiv>

      <BodyDiv>
        <GDiv>
          <P>5~6</P>
          <Graph />
        </GDiv>

        <GDiv>
          <P>7~8</P>
          <Graph />
        </GDiv>

        <GDiv>
          <P>9~10</P>
          <Graph />
        </GDiv>

        <GDiv>
          <P>11~12</P>
          <Graph />
        </GDiv>

        <GDiv>
          <P>13~14</P>
          <Graph />
        </GDiv>

        <GDiv>
          <P>15~16</P>
          <Graph />
        </GDiv>

        <GDiv>
          <P>17~18</P>
          <Graph />
        </GDiv>

        <GDiv>
          <P>19~20</P>
          <Graph />
        </GDiv>

        <GDiv>
          <P>21~22</P>
          <Graph />
        </GDiv>

        <GDiv>
          <P>23~24</P>
          <Graph />
        </GDiv>

        <GDiv>
          <P>1~2</P>
          <Graph />
        </GDiv>

        <GDiv>
          <P>3~4</P>
          <Graph />
        </GDiv>
      </BodyDiv>
    </Div>
  );
};

// styled-components
const Div = styled.div`
  width: 410px;
  height: 445px;
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
`;
const TitleDiv = styled.div`
  margin-top: 5px;
  margin-left: 30px;
  width: 86%;
  border-width: 0 0 1px 0;
  border-color: #643c00;
  border-style: solid;
  display: flex;
  justify-content: space-around;
`;
const TitleP = styled.p`
  margin-left: 73.5px;
  font-size: 36px;
  font-weight: 600;
`;
const ExplainP = styled.p`
  margin-left: 20px;
  margin-bottom: 6px;
  font-size: 13px;
  display: flex;
  align-items: flex-end;
`;

const BodyDiv = styled.div`
  margin-top: 13.5px;
`;

const GDiv = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  width: 47px;
  margin-left: 16px;
  font-size: 16px;
`;

export default TimeTable;
