import React from 'react'
import styled from'styled-components'
function Login() {
  return (
    <Container> 
      <CTA>
        <CTALogoOne>
          <img src='/images/cta-logo-one.svg' alt='/' />
        </CTALogoOne>
        <SignUpBtn>
          GET IT ALL
        </SignUpBtn>
        <Description>
            Lorem ipsum dolor sit enim l nam aspernatur
            alias fuga doloremque ex omnis. Modi, quo 
            praesentium suscipit ex reiciendis eius ratione,
            merda poto loik khopif uhnadis duho kept koisd.
        </Description>
        <CTALogoTwo>
          <img src='/images/cta-logo-two.png' alt='/' />
        </CTALogoTwo>
      </CTA>
    </Container>
  )
}

export default Login

const CTALogoTwo = styled.div`
display: flex;
max-width: 680px;
padding: 0px 20px;
width: 100%;
flex-direction: column;
opacity: 0.8;
justify-content: center;
`

const Description = styled.p`
color: white;
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`

const SignUpBtn = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
padding: 17px 0px;
color: #f9f9f9;
border-radius: 6px;
text-align: center;
font-size: 18px;
cursor: pointer;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom: 12px;
  &:hover {
    background: #0498ee;
    transition: all 750ms cubic-bezier(0.55, 0.46, 0.45, 0.94) 0s;
    letter-spacing: 4.5px;
`


const CTA = styled.div`
max-width: 650px;
padding: 80px 40px;
width: 850%;
display: flex;
flex-direction: column;
margin-top: 22px;
`

const CTALogoOne = styled.div`
z-index: 1;

`

const Container = styled.div`
position: relative;
height: calc(100vh - 70px);
display: flex;
align-items: top;
justify-content: center;


  &:before {
    position: absolute;
    content: "";
    top: 0; 
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7px;
    background-image: url('/images/login-background.jpg');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`