import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, styled, TextField, Typography } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
// import EmailIcon from '@mui/icons-material/Email';

const TextFieldEdit = styled(TextField)({
  width   : '77%',
});

const ButtonEdit = styled(Button)({
  width   : '78%',
  padding : '5px',
  margin  : '20px',
  // color:'#b2dffc',
  background:'#b2dffc'
  
}); 

const TypographyEdit = styled (Typography)({
  color : '#6e5af5',
  fontFamily: 'Henny Penny, cursive',
  fontSize:'50px',
 
});


export default function Signup() {
  return (
    <Box
      sx={{
        my: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      
      <Paper sx={{width:'30%',padding:'60px 20px 40px 20px ' }}  elevation={4}>
        <TypographyEdit variant=''>HIRAKI</TypographyEdit>
        <TextFieldEdit margin='normal' required   label="Email" variant='outlined' />
        <TextFieldEdit margin='normal' required   label="Username" variant='outlined' />
        <TextFieldEdit margin='normal' required  label="Password" variant='outlined' />
        <TextFieldEdit margin='normal' required  label="Confirm Password" variant='outlined' />
        <TextFieldEdit margin='normal' required  label="Gender" variant='outlined' />
        <TextFieldEdit margin='normal' required  label="Birth date" variant='outlined' />
        <ButtonEdit variant='contained'>Sign Up</ButtonEdit>

        <div className='grid-container'>
          <Typography className='grid-item' variant='p' >Login with</Typography>
          <FacebookIcon className='grid-item'
            sx={{
              color:'#007bff',
              marginBottom:'-5px', 
              marginLeft:'5px'
            }}
            />
          <GoogleIcon className='grid-item'
            sx={{
              color:'#d62d2dd9',
              marginBottom:'-5px', 
              marginLeft:'5px'
            }}
            />

          </div>
      </Paper>

      <Box
        sx={{
          my: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor:'blue',
          width:'30%'
        }}
      >
        <Paper sx={{width:'100%',padding:'30px 20px' }}  elevation={4}>
        <Typography>Have an account? <b>Login</b></Typography>
        </Paper>
        

      </Box>
    </Box>
  );
}

