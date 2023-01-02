import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function Movies() {
  return (
    <Container>
      <h4>Recomended For You</h4>
        <Content>
          <Wrap>
            <Link to={`/detail`} >
              <img src='/images/uglydolls.jpg' alt='' />
            </Link>
          </Wrap>
          <Wrap>
            <Link to={`/detail1`} >
              <img src='/images/emoji.jpg' alt='' />
            </Link>
          </Wrap>
          <Wrap>
            <Link to={`/detail2`} >
              <img src='/images/ferf.jpg' alt='' />
            </Link>
          </Wrap>
          <Wrap>
            <Link to={`/login`} >
              <img src='/images/lionking.jpg' alt='' />
            </Link>
          </Wrap>
          <Wrap>
            <Link to={`/login`} >
              <img src='/images/ralph.jpg' alt='' />
            </Link>
          </Wrap>
          <Wrap>
            <Link to={`/login`} >
              <img src='/images/gnom.jpg' alt='' />
            </Link>
          </Wrap>
          <Wrap>
            <Link to={`/login`} >
              <img src='/images/spiderman.jpg' alt='' />
            </Link>
          </Wrap>
          <Wrap>
            <Link to={`/login`} >
              <img src='/images/transilvania.jpg' alt='' />
            </Link>
          </Wrap>
        </Content>
      
      <br></br>
    
    </Container>
  )
}

export default Movies

const Container = styled.div`



`

const Content = styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(4 , minmax(0,1fr));
`

const Wrap = styled.div`
cursor: pointer;
border-radius: 10px;
overflow: hidden;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
rgb(0 0 0 /70%) 0px 16px 10px -10px;
transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 300ms;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


  &:hover {
    transform: scale(1.04);
    border-color: rgba(240, 240,300, 0.8);
    box-shadow: rgb(0 0 0 /80%) 0px 26px 30px -10px,
    rgb(0 0 0 /60%) 0px 16px 10px -10px;
  }
`

