import styled from 'styled-components';

import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@mui/icons-material";

const Container = styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
position:relative;

`

const Circle = styled.div`




`

const Image = styled.img`

height:75%;


`
const Info = styled.div`


z-index:3;
align-items:center;
justify-content:center;

`

const Icon = styled.div`
width:40px;
height:40px;
align-items:center;
transition:all 0.5s ease;

&:hover {
   
    transform: scale(1.1);
}


`
const Product = ({item}) => {
  return (
 <Container>

    <Circle/>
    <Image src={item.img}/>
    <Info>
    <Icon>
    <ShoppingCartOutlined/>

    </Icon>

    <Icon>
    <SearchOutlined/>

    </Icon>

    <Icon>
    <FavoriteBorderOutlined/>

    </Icon>

    </Info>

 </Container>
  )
}

export default Product
