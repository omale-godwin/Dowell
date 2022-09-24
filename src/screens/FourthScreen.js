import React from "react";
import styled from "styled-components";
import CupertinoFooter2 from "../components/CupertinoFooter2";
import MaterialCardWithButtons from "../components/MaterialCardWithButtons";
import MaterialRadio1 from "../components/MaterialRadio1";
import CupertinoFooter21 from "../components/CupertinoFooter21";
import MaterialButtonDanger from "../components/MaterialButtonDanger";

function FourthScreen(props) {
  return (
    <Container>
      <RectStack>
        <Dowell>
          <TextHead>Hi, Christ Select From Menu</TextHead>
          <hr
            style={{
              marginLeft: "0",
              width: "95%",
              marginTop: "5px",
              borderColor: "green",
            }}
          />
          <Image3 src={require("../assets/images/logo.png")}></Image3>
          <Brand>brand of cafe, branch</Brand>
          <MaterialCardWithButtons2Stack>
            <MaterialCardWithButtons
              style={{
                height: 101,
                width: 146,
                position: "absolute",
                left: 0,
                top: 0,
              }}></MaterialCardWithButtons>
            <MaterialRadio1
              style={{
                height: 17,
                width: 25,
                position: "absolute",
                left: 0,
                top: 5,
              }}></MaterialRadio1>
            <TextInput placeholder="$8"></TextInput>
            <TextInput1 placeholder="Z1106"></TextInput1>
          </MaterialCardWithButtons2Stack>
          <TextInput2StackStack>
            <TextInput2Stack>
              <TextInput2 placeholder="Z1106"></TextInput2>
              <MaterialCardWithButtons
                style={{
                  height: 101,
                  width: 146,
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}></MaterialCardWithButtons>
            </TextInput2Stack>
            <TextInput3 placeholder="$8"></TextInput3>
            <MaterialRadio1
              style={{
                height: 17,
                width: 25,
                position: "absolute",
                left: 0,
                top: 5,
              }}></MaterialRadio1>
          </TextInput2StackStack>
          <MaterialCardWithButtons4Stack>
            <MaterialCardWithButtons
              style={{
                height: 101,
                width: 146,
                position: "absolute",
                left: 0,
                top: 0,
              }}></MaterialCardWithButtons>
            <MaterialRadio1
              style={{
                height: 17,
                width: 25,
                position: "absolute",
                left: 0,
                top: 5,
              }}></MaterialRadio1>
            <TextInput4 placeholder="$8"></TextInput4>
            <TextInput5 placeholder="Z1106"></TextInput5>
          </MaterialCardWithButtons4Stack>
          <TextInput6StackStack>
            <TextInput6Stack>
              <TextInput6 placeholder="Z1106"></TextInput6>
              <MaterialCardWithButtons
                style={{
                  height: 101,
                  width: 146,
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}></MaterialCardWithButtons>
            </TextInput6Stack>
            <TextInput7 placeholder="$8"></TextInput7>
            <MaterialRadio1
              style={{
                height: 17,
                width: 25,
                position: "absolute",
                left: 0,
                top: 5,
              }}></MaterialRadio1>
          </TextInput6StackStack>
          <CupertinoFooter21
            style={{
              height: 49,
              width: 308,
              position: "absolute",
              left: 2,
              top: 600,
            }}></CupertinoFooter21>
          <CupertinoFooter2
            style={{
              height: 50,
              width: 327,
              position: "absolute",
              top: 680,
              left: 17,
            }}></CupertinoFooter2>
          <Rect>
            <LoremIpsumRow>
              <LoremIpsum>selected dished {"\n"}detail goes here</LoremIpsum>
              <MaterialButtonDanger
                style={{
                  height: 36,
                  width: 100,
                  borderWidth: 0,
                  borderColor: "#000000",
                  borderRadius: 12,
                  shadowRadius: 0,
                  marginLeft: 80,
                  borderStyle: "solid",
                  boxShadow: "5px 5px 0px  0.76px rgba(0,0,0,1) ",
                }}></MaterialButtonDanger>
            </LoremIpsumRow>
            <QuantityRow></QuantityRow>
          </Rect>
          <TextInput8 placeholder="Lorem Ipsum"></TextInput8>
          <TextInput9 placeholder="Lorem Ipsum"></TextInput9>
          <Rect2></Rect2>
        </Dowell>
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
const RectStack = styled.div`
  width: 381px;
  height: 738px;
  margin-top: 50px;
  position: relative;
  border-radius: 10px;
`;
const TextInput = styled.input`
  font-family: Roboto;
  top: 46px;
  left: 4px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 42px;
  height: 25px;
  font-size: 20px;
  border: none;
  background: transparent;
`;
const TextHead = styled.div`
  padding-left: 10px;
  padding-top: 20px;
  font-size: 20px;
  font-style: italic;
`;

const Image3 = styled.img`
  top: 0px;
  left: 300px;
  width: 50px;
  height: 65px;
  position: absolute;
  object-fit: contain;
`;
const Dowell = styled.div`
  top: -25px;
  left: 13px;
  width: 357px;
  height: 740px;
  position: absolute;
  background-color: rgba(212, 253, 194, 0.91);
  border-width: 1px;
  border-color: rgba(0, 0, 0, 1);
  flex-direction: column;
  display: flex;
  border-style: solid;
  border-radius: 5%;
`;
const TextInput1 = styled.input`
  font-family: Roboto;
  left: 3px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 59px;
  height: 25px;
  font-size: 20px;
  top: 72px;
  border: none;
  background: transparent;
`;

const MaterialCardWithButtons2Stack = styled.div`
  top: 96px;
  left: 19px;
  width: 146px;
  height: 101px;
  position: absolute;
`;

const TextInput2 = styled.input`
  font-family: Roboto;
  left: 4px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 59px;
  height: 25px;
  font-size: 20px;
  top: 72px;
  border: none;
  background: transparent;
`;

const TextInput2Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 146px;
  height: 101px;
  position: absolute;
`;

const TextInput3 = styled.input`
  font-family: Roboto;
  top: 46px;
  left: 5px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 42px;
  height: 25px;
  font-size: 20px;
  border: none;
  background: transparent;
`;

const TextInput2StackStack = styled.div`
  top: 96px;
  left: 188px;
  width: 146px;
  height: 101px;
  position: absolute;
`;

const TextInput4 = styled.input`
  font-family: Roboto;
  top: 46px;
  left: 4px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 42px;
  height: 25px;
  font-size: 20px;
  border: none;
  background: transparent;
`;

const TextInput5 = styled.input`
  font-family: Roboto;
  left: 3px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 59px;
  height: 25px;
  font-size: 20px;
  top: 71px;
  border: none;
  background: transparent;
`;

const MaterialCardWithButtons4Stack = styled.div`
  top: 210px;
  left: 192px;
  width: 146px;
  height: 101px;
  position: absolute;
`;

const TextInput6 = styled.input`
  font-family: Roboto;
  left: 3px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 59px;
  height: 25px;
  font-size: 20px;
  top: 71px;
  border: none;
  background: transparent;
`;

const TextInput6Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 146px;
  height: 101px;
  position: absolute;
`;

const TextInput7 = styled.input`
  font-family: Roboto;
  top: 46px;
  left: 4px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  width: 42px;
  height: 25px;
  font-size: 20px;
  border: none;
  background: transparent;
`;

const TextInput6StackStack = styled.div`
  top: 210px;
  left: 22px;
  width: 146px;
  height: 101px;
  position: absolute;
`;

const Rect = styled.div`
  top: 480px;
  left: 19px;
  width: 321px;
  height: 90px;
  position: absolute;
  background-color: rgba(184, 233, 134, 1);
  flex-direction: column;
  display: flex;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 4px;
`;
const Brand = styled.span`
  font-family: Roboto;
  top: 70px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: #121212;
  height: 32px;
  width: 357px;
  text-align: center;
  font-size: 20px;
`;
const LoremIpsumRow = styled.div`
  height: 36px;
  flex-direction: row;
  display: flex;
  margin-top: 11px;
  margin-left: 16px;
  margin-right: 24px;
`;

const QuantityRow = styled.div`
  height: 35px;
  flex-direction: row;
  display: flex;
  margin-top: 18px;
  margin-left: 85px;
  margin-right: 123px;
`;

const TextInput8 = styled.input`
  font-family: Roboto;
  top: 426px;
  left: 17px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 36px;
  width: 155px;
  border-width: 3px;
  border-color: #000000;
  border-style: solid;
  background: transparent;
`;

const TextInput9 = styled.input`
  font-family: Roboto;
  top: 426px;
  left: 180px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 36px;
  width: 155px;
  border-width: 3px;
  border-color: #000000;
  border-style: solid;
  background: transparent;
`;

const Rect2 = styled.div`
  top: 320px;
  left: 22px;
  width: 312px;
  height: 98px;
  position: absolute;
  background-color: #e6e6e6;
`;

export default FourthScreen;
