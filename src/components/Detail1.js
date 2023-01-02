import React from 'react'
import styled from 'styled-components'
function detail1() {
  return (
    <Container>
      <Background>
        <img src='/images/emoji.jpg' alt='/' />
      </Background>
      <ImageTitle>
        <h1>THE EMOJIES</h1>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png' alt='/' />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png' alt='/' /> 
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src='/images/group-icon.png'  alt='\'/>
        </GroupWatchButton>
      </Controls>
      <Subtitle>
        2021 . 1.30m . Family . Kids . Animation
      </Subtitle>
      <Description>
            Lorem ipsum dolor sit enim l nam aspernatur
            alias fuga doloremque ex omnis. Modi, quo 
            praesentium suscipit ex reiciendis eius ratione
            , ipsa, repudiandae iusto doloribus sed omnis di
            gnissimos est sunt facilis impedit. Totam quas
            i omnis accusantium aut harum vero exercitationem at n
            ecessitatibus ratione minus 

      </Description>
    </Container>
  )
}

export default detail1

const AddButton = styled.button`
margin-right: 16px;
height: 44px;
width: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
cursor: pointer;
background-color: rgba(0, 0, 0, 0.6);
border: 2px solid white;
transition: all 750ms cubic-bezier(0.55, 0.46, 0.45, 0.94) 0s;
  span{
    font-size: 28px;
    color: white;
  }

  &:hover{
    background: rgb(150,150,150);
  }
`

const Description = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
color: rgb(249,249,249);
max-width: 760px;
`

const Subtitle = styled.div`
  color: rgb(249,249,249) ;
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const GroupWatchButton = styled(AddButton)`

`

const Container = styled.div`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`

const Background = styled.div`
position: fixed;
top: 0;
left:0;
bottom: 0;
right: 0;
z-index: -1;
opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

const ImageTitle = styled.div`
width: 35vw;
margin-top: 50px;
height: 30vh;
min-height: 70%;
min-width: 76%;
  h1 {
    height: 70%;
    width: 70%;
    object-fit: cover;
    margin-top: -40px;
    padding-top: 70px;

  }
  `


const Controls = styled.div`
  align-items: center;
  display: flex;
`
const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
display: flex;
align-items: center;
height: 56px;       
background: rgb (249,249,249);
border: none;
padding: 0px 24px;
margin-right: 22px;
letter-spacing: 1.8px;
cursor:pointer;
  &:hover {
    background: rgb(150,150,150);
    transition: all 750ms cubic-bezier(0.55, 0.46, 0.45, 0.94) 0s;
  }
`

const TrailerButton = styled(PlayButton)`
background: rgba(0,0,0,0.6);
border: 1px solid rgb(249,249,249);
color: rgb((249,249,249);
`







