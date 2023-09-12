import styled from "styled-components"

const Container = styled.div`
height:30px;
background-color: black;
color:white;
display:flex;
justify-content:center;
font-size:14px;
font-weight:500;

`

const Announcement = () => {
  return (
   <Container>
    Super Deals Free Shipping on Orders over 2000 Shillings
   </Container>
  )
}

export default Announcement
