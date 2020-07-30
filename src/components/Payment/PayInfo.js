import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import styled from "styled-components"
import MultilineTextFields from "./MultilineTextFields"
import { withRouter } from "react-router-dom"

import queryString from "query-string"
import Axios from "axios"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& >*": {
      margin: theme.spacing(1),
      //width: '25ch',
    },
  },
}))

const PayInfo = ({ history }) => {
  const payInfo = useStyles()
  const [customer, setCustomer] = React.useState("")
  const [companyName, setCompanyName] = React.useState("")
  const [customerNumber, setCustomerNumber] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [product, setProduct] = React.useState("data")

  // useEffect(() => {
  // })

  const handleclick = () => {
    if (customer === "" || customerNumber === "" || companyName === "" || email === "") {
      alert("필수 항목을 입력해주세요.")
    }
    // else if(typeof customer !== regString|| typeof customerNumber !== regInteger  || typeof companyName != regString  /*|| typeof email != */ ){
    //   alert("잘못된 형식입니다.")
    // }
    else {
      const impCode = "imp15944603"
      const { IMP } = window
      IMP.init(impCode)
      IMP.request_pay(
        {
          pg: "inicis",
          pay_method: "card",
          amount: 50000,
          merchant_uid: String(product) + "_" + String(companyName) + "_" + new Date().getTime(),
          name: String(product),
          buyer_email: String(email),
          buyer_name: String(customer),
          buyer_tel: Number(customerNumber),
        },
        callback
      )
    }
  }

  const callback = (rsp) => {
    const query = queryString.stringify(rsp)
    if (rsp.success) {
      Axios.post("http://192.168.5.193:8080/api/v1/payments", {
        orderId: rsp.merchant_uid,
        orderAmount: rsp.paid_amount,
        orderApprovedAt: new Date(rsp.paid_at * 1000),
        orderMethod: rsp.pay_method,
        buyerName: rsp.buyer_name,
        buyerEmail: rsp.buyer_email,
        buyerTel: rsp.buyer_tel,
        companyName: companyName,
        product: rsp.name,
      })
        .then(() => {
          console.log("a")
          history.push(`/payment/result?${query}`)
        })
        .catch((err) => console.log(err))
    } else {
      history.push(`/payment/result?${query}`)
    }
  }

  return (
    <Wrapper>
      <Header>Hunch DATA 구매</Header>
      <MultilineTextFields product={product} setProduct={setProduct} />
      <form className={payInfo.root} noValidate autoComplete="off">
        <TextFieldWrapper>
          <TextField
            id="standard-basic"
            label="이름"
            variant="outlined"
            onChange={(event) => setCustomer(event.target.value)}
          />
        </TextFieldWrapper>

        <TextFieldWrapper>
          <TextField
            id="standard-basic"
            label="회사명"
            variant="outlined"
            onChange={(event) => setCompanyName(event.target.value)}
          />
        </TextFieldWrapper>

        <TextFieldWrapper>
          <TextField
            id="standard-basic"
            label="전화번호"
            variant="outlined"
            onChange={(event) => setCustomerNumber(event.target.value)}
            helperText='"-"을 생략하고 입력하세요'
          />
        </TextFieldWrapper>

        <TextFieldWrapper>
          <TextField
            id="standard-basic"
            label="이메일"
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
          />
        </TextFieldWrapper>
      </form>
      <br />
      <div className={PayInfo.root}>
        <Button variant="contained" onClick={() => handleclick()}>
          결제하기
        </Button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const TextFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  flex-direction: column;
`

const Header = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 2rem;
  padding-top: 0;
  font-size: 3rem;
`

export default withRouter(PayInfo)
