import React from 'react';
import styled from 'styled-components';
import { Button} from 'antd';
import {CreditCardOutlined} from '@ant-design/icons';
import { withRouter, Link } from 'react-router-dom';



function Payment({ history }) {
  return (
      <Wrapper>
      <div>
          <h1>Hunch 결제</h1>
          <h4>아래 버튼을 눌러 결제를 진행해주세요.</h4>
      </div>
      <div></div>
      <ButtonContainer>
        <Link to="/payment/payinfo">
          <Button>
          <CreditCardOutlined/>
          Hunch 데이터 결제
          </Button>
        </Link>
      </ButtonContainer>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  

  > div {
    position: absolute;
    left: 0;
    right: 0;
  }
  > div:first-child {
    background-color: #343a40;
    top: 0;
    bottom: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > * {
      color: #fff;
    }

    h4 {
      margin: 0;
      line-height: 1.5;
    }
  }
  > div:nth-child(2) {
    top: 50%;
    bottom: 0;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  margin-top: 2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 10rem;
    width: 15rem;
    margin: 0 0.5rem;
    border: none;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.13);
    .anticon {
      margin-bottom: 0.5rem;
      font-size: 2rem;
      & + span {
        margin: 0;
      }
    }
  }
`;

export default withRouter(Payment);
