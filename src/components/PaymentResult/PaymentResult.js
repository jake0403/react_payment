import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import styled from 'styled-components';

const PaymentResult = ({history}) => {
    const {location} = history;
    const {search} = location;
    const query = queryString.parse(search);
    const {buyer_name, error_msg} = query;
    const isSuccessed = getIsSuccessed();

    function getIsSuccessed() {
        const {success, imp_success} = query;
        if(typeof imp_success === "string") return imp_success ==='true';
        if(typeof imp_success === "boolean") return imp_success === true;
        if(typeof success === 'string') return success === 'true';
        if(typeof success === 'boolean') return success === true;
    }

    const resultType = isSuccessed ? '완료' : '실패';
    return (
        <Wrapper>
            <h1>
            <Header>{`결제 ${resultType}`} </Header>
            </h1>
            <br/>
            {isSuccessed ? (
                <>
                <Text> 감사합니다 </Text>
                <SubHeader>{buyer_name}님의 결제가 {resultType} 되었습니다.</SubHeader>
                </>
            ) : (
                <>
                <Text> {error_msg} </Text>
                </>
            )}
            <br/>
            <br/>
            <Button variant="contained" onClick={() => history.push('/Home')}>홈으로 돌아가기</Button>
            
        </Wrapper>
    )

}

const Wrapper = styled.div`
    padding: 5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Do Hyeon', sans-serif;
`;

const Header = styled.div`
  font-weigth: bold;
  margin-top: -24px; 
  text-align: center; 
  font-size: 48px;
  padding: 3rem;
  padding-top: 0; 
  font-family: 'Do Hyeon', sans-serif;
`;

const SubHeader = styled.div`
  font-family: 'Do Hyeon', sans-serif;
  text-align: center;
  padding: 2rem;
  padding-top: 0;
  font-size: 22px;
`;

const Text = styled.div `
  text-align: left;
  padding: 2rem;
  padding-top: 0;
  font-size: 30px;
`;

export default withRouter (PaymentResult);
