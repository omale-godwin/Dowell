import React from "react";
import styled from "styled-components";
import { IoReloadCircleSharp } from "react-icons/io5";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import BasicTable from "../components/BasicTable";
import Button from "@material-ui/core/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

function SecondScreen(props) {
  const handleOnChange = (value) => {
    console.log(value);
    this.setState({ phone: value }, () => {
      console.log(this.state.phone);
    });
  };
  return (
    <Container>
      <RectStack>
        <Rect>
          <Image2Stack>
            <Image2></Image2>
            <Rect2>
              <Image3StackStack>
                <Image3Stack>
                  <Image3 src={require("../assets/images/do3.png")}></Image3>
                  <Brand>brand of cafe, branch</Brand>
                </Image3Stack>

                <IoReloadCircleSharp
                  className="icon"
                  style={{
                    position: "absolute",

                    right: "10%",
                  }}
                  size="30px"
                  color="green"
                />
                <MdCancel
                  className="icon"
                  style={{
                    position: "absolute",

                    right: "1%",
                  }}
                  size="30px"
                  color="red"
                />
              </Image3StackStack>
              <Brand1>&lt;0022&gt;. customer waiting</Brand1>

              <LoremIpsum3>
                <PhoneInput
                  style={{
                    borderRightColor: "green",
                    borderRightWidth: 5,
                    borderLeftColor: "green",
                    borderLeftWidth: 5,
                  }}
                  country={"us"}
                  placeholder={"Enter your mobile number to continue"}
                  // value={this.state.phone}
                  // onChange={(phone) => this.setState({ phone })}
                />{" "}
              </LoremIpsum3>
              <LoremIpsum4>
                <input
                  placeholder="Name"
                  style={{
                    textAlign: "center",
                    height: "35px",
                    width: "300px",
                    borderRightColor: "green",
                    borderRightWidth: 5,
                    borderLeftColor: "green",
                    borderLeftWidth: 5,
                  }}
                />
              </LoremIpsum4>

              <MyOrderState>my order state</MyOrderState>
              <BasicTable></BasicTable>
              <OrderBtn>
                {" "}
                <Button
                  style={{
                    borderRadius: "20px",
                    borderColor: "green",
                    fontSize: "12px",
                  }}
                  variant="outlined">
                  <Link to="/ThirdScreen">New Order</Link>
                </Button>
              </OrderBtn>
            </Rect2>
          </Image2Stack>
          <PlusIcon>
            <AiFillPlusCircle />
          </PlusIcon>
        </Rect>
      </RectStack>
    </Container>
  );
}
const LoremIpsum4 = styled.div`
  padding-left: 12px;
  padding-top: 12px;
`;

const Container = styled.div`
  display: flex;
  // border-width: 0px;
  // border-color: rgba(65, 117, 5, 1);
  // border-radius: 5px;
  // flex-direction: column;
  border-style: solid;
  position: absolute;

  height: fit-content;
`;
const OrderBtn = styled.div`
  padding-left: 30%;
  padding-top: 20px;
  font-size: 10px;
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

const Rect2 = styled.div`
  top: 110px;
  left: 9px;
  width: 357px;
  height: 630px;
  position: absolute;
  background-color: rgba(212, 253, 194, 0.91);
  border-width: 1px;
  border-color: rgba(0, 0, 0, 1);
  flex-direction: column;
  display: flex;
  border-style: solid;
  border-radius: 5%;
`;

const Image3 = styled.img`
  top: 0px;
  left: 2px;
  width: 200px;
  height: 121px;
  position: absolute;
  object-fit: contain;
`;

const Brand = styled.span`
  font-family: Roboto;
  top: 130px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 500;
  color: #121212;
  height: 32px;
  width: 357px;
  text-align: center;
  font-size: 26px;
`;

const Image3Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 357px;
  height: 146px;
  position: absolute;
`;

const Image3StackStack = styled.div`
  width: 357px;
  height: 146px;
  margin-top: 4px;
  position: relative;
`;

const Brand1 = styled.span`
  font-family: Helvetica;
  font-style: normal;
  font-weight: 300;
  color: rgba(18, 18, 18, 1);
  height: 37px;
  width: 357px;
  text-align: center;
  font-size: 18px;
  margin-top: 32px;
  color: red;
`;

const LoremIpsum3 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 18px;
  margin-top: 13px;
  margin-left: 11px;
`;

const MyOrderState = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 14px;
  margin-left: 8px;
`;

const Image2Stack = styled.div`
  width: 350px;
  height: 393px;
  position: relative;
`;

const PlusIcon = styled.div`
  width: 66px;
  height: 100%;
  margin-top: 5px;
  margin-left: 302px;
  object-fit: contain;
`;

const RectStack = styled.div`
  width: 360px;
  height: 700px;
  margin-top: 50px;
  position: relative;
  border-radius: 10px;
`;

export default SecondScreen;
