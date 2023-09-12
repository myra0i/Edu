 import styled from 'styled-components'

 import { mobile } from '../responsive'

 import { Link } from 'react-router-dom';
 
 const Container =styled.div`

 width:100vw;
 height:100vh;
 background:url("../../../assets/21.jpg")
 right;
 background-size:cover;
 display:flex;
 align-items:center;
 justify-content:center;


 `
 const Wrapper = styled.div`
 width:40%;
 padding:20px;
 border: white;
 ${ mobile({ 'width': "75%"})};


 `
 const Title = styled.h1`
 font-weight:300;
 font-size:24px;
 
 `
 const Form = styled.form`
 display:flex;
 flex-wrap:wrap;
 
 `
 const Input = styled.input`
 flex:1;
 min-width:40%;
 margin:20px 10px 0px 0px;
 padding:10px;
 `

 
 const Button = styled.button`
 margin-top:15px;
 width:40%;
 border:none;
 padding:15px 20px;
 background-color:teal;
 color:white;
 cursor:pointer;
 decoration:none;

 
 `

const Register = () => {
  return (
   <Container>
     

    <Wrapper>

    <Title>
        Create Account
    </Title>

    <Form>

    <Input placeholder="first name"/>
    <Input placeholder="last name"/>
    <Input placeholder="email"/>
    <Input placeholder="username"/>
    <Input placeholder="password"/>
    <Input placeholder="confirm password"/>


    <Button>
    <Link to={`/`}>CREATE</Link>
    </Button>
    </Form>
    </Wrapper>

   </Container>
  )
}

export default Register
