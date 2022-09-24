import React from "react";
import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function FirstScreen(props) {
  return (
    <Container>
      <RectStack>
        <Rect>
          <Image2Stack>
            <Image2></Image2>
          </Image2Stack>
          <Link to="/SecondScreen">
            <PlusIcon>
              <AiFillPlusCircle size="40px" color="green" />
            </PlusIcon>
          </Link>
        </Rect>
      </RectStack>
    </Container>
  );
}

const Container = styled.div`
  // display: flex;
  // border-width: 0px;
  // border-color: rgba(65, 117, 5, 1);
  // border-radius: 5px;
  // flex-direction: column;
  border-style: solid;
  position: absolute;
  left: 30%;
`;

const Rect = styled.div`
  top: -40px;
  left: 0px;
  width: 375px;
  height: 738px;
  position: absolute;
  background-color: #e6e6e6;
`;

const Image2 = styled.div`
  top: 0px;
  left: 0px;
  width: 369px;
  height: 657px;
  position: absolute;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/do1.png")});
  background-size: cover;
`;

const Image2Stack = styled.div`
  width: 350px;
  height: 393px;
  position: relative;
`;

const PlusIcon = styled.div`
  width: 66px;
  height: 100%;
  position: absolute;
  top: 730px;
  left: 300px;
  object-fit: contain;
`;

const RectStack = styled.div`
  width: 381px;
  height: 738px;
  margin-top: 50px;
  position: relative;
  border-radius: 10px;
`;

export default FirstScreen;
