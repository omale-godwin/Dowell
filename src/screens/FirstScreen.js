import React from "react";
import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function FirstScreen(props) {
  return (
    <Container>
      <RectStack>
        <Rect>
          <Image2></Image2>

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
  display: flex;
  // border-width: 0px;
  // border-color: rgba(65, 117, 5, 1);

  border-style: solid;
  position: absolute;
  left: 30%;
  width: fit-content;
  height: fit-content;
`;

const Rect = styled.div`
  top: -40px;
  left: 0px;
  width: 375px;
  height: fit-content;
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
