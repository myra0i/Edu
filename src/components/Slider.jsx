import styled from 'styled-components';
import {ArrowLeftOutlined, ArrowRightOutlined} from '@mui/icons-material';
import { useState } from 'react';
import {mobile} from "../responsive"


const Container = styled.div`
margin-top:15px;
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
flex:1;




`;

const Arrow = styled.div`

width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;

`;

const Wrapper = styled.div`

height:100%;
display:flex;
transition:all 1.5s ease;
transform: translateX(${props=>props.slideIndex * -100 }vw);
${ mobile({ "padding":"10px"})};

`;

const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;

`;

const ImageContainer = styled.div`
height:100%;



`;
const Image = styled.img`
height:80%;

${ mobile({ 'height': "85%" ,"width":"115vw"})};

`;

const InfoContainer = styled.div`

flex: 1;
padding:50px;
${ mobile({ 'display': "none"})};


`;

 const Title = styled.h1`
 font-size:70px;

 `;
 const Desc = styled.p`
 margin:50px 0px;
 font-size:20px;
 font-weight:500;
 letter-spacing:3px;

 `;
 const Button = styled.button`
 
 padding:10px;
 font-size:20px;
 background-color:transparent;
 cursor:pointer;

 `;


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {

        if(direction === "left"){

            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            setSlideIndex(slideIndex <2 ? slideIndex +1 :0)
        }

    };
  return (

<Container>

<Arrow direction="left" onClick={()=>handleClick("left")}>
<ArrowLeftOutlined/>
   
</Arrow>

<Wrapper slideIndex= {slideIndex}>

<Slide>

<ImageContainer>

    <Image src='../../assets/po.jpg'/>

</ImageContainer>

<InfoContainer>

<Title>SUMMER SWAY </Title>
<Desc>We Offer Quality Clothes </Desc>
<Button>Shop Now</Button>

</InfoContainer>



</Slide>

<Slide>

<ImageContainer>

    <Image src='../../assets/cu.jpg'/>

</ImageContainer>

<InfoContainer>

<Title>AUTUMN SALE </Title>
<Desc>Dont Compromise Your Style</Desc>
<Button>Shop Now</Button>

</InfoContainer>



</Slide>

<Slide>

<ImageContainer>

    <Image src='../../assets/t.jpg'/>

</ImageContainer>

<InfoContainer>

<Title>WINTER SALE </Title>
<Desc>Dont Compromise Your Style</Desc>
<Button>Shop Now</Button>

</InfoContainer>



</Slide>

</Wrapper>

<Arrow direction="right"  onClick={()=>handleClick("right")}>
<ArrowRightOutlined/>

</Arrow>
</Container>


  )
}

export default Slider
