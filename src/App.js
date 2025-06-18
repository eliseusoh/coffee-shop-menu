import React, { useState } from 'react';
import { Button, Container, Typography, Box, Card, CardContent, CardMedia, Grid } from '@mui/material';
import {Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {Paper} from '@mui/material';


function App() {

  const [cart, setCart] = useState([])
  //this is for snackbar notifications when adding item to cart
  const [open, setOpen] = useState(false)

  const coffeeMenu = [
    {
      id: 1,
      name: 'Matcha',
      price: 4.25,
      description: 'Our classic matcha with oat milk.',
      image:'https://images.unsplash.com/photo-1582785513054-8d1bf9d69c1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hdGNoYXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 2,
      name: 'Iced Latte',
      price: 3.65,
      description: 'The milky coffee - with ice.',
      image:'https://images.unsplash.com/photo-1585671582673-66144d229f22?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGF0dGV8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 3,
      name: 'Espresso',
      price: 1.55,
      description: 'An espresso shot with spice.',
      image:'https://plus.unsplash.com/premium_photo-1669687924558-386bff1a0469?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXNwcmVzc298ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 4,
      name: 'Black Coffee',
      price: 2.25,
      description: 'A classic black coffee, no milk.',
      image:'https://plus.unsplash.com/premium_photo-1723559972702-2659e41dbb5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 5,
      name: 'Flat White',
      price: 7.65,
      description: 'The extra milky one.',
      image:'https://images.unsplash.com/photo-1620052087057-bfd8235f5874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZsYXQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 6,
      name: 'Special Matcha',
      price: 10.55,
      description: 'A not so classic matcha, with a twist.',
      image:'https://images.unsplash.com/photo-1717603545758-88cc454db69b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hdGNoYXxlbnwwfHwwfHx8MA%3D%3D'
    }
  ]

  return (
    // like a div
    //sx is the style prop in MUI
    <Box sx={{backgroundColor: '#f5f5f5', minHeight: '100vh', py:4}}>
      {/* centers content with padding */}
    <Container>

    {/* creates a surface container with a shadow like paper sat on a desk */}
      <Paper
      // gives shadow
      elevation={3}
      sx={{
        p:4,
        borderRadius: 3,
        backgroundColor: 'white',
        mt:4,
        mb: 4
      }}>

      {/* for any text, gutterBottom adds bottom margin automatically */}
      <Typography variant='h3' align='center' gutterBottom
      sx={{
        fontWeight: 'bold',
        fontFamily: 'Georgia, serif',
      }}>
        The Coffee Spot</Typography>

      {/* for the shopping cart */}
      <Box sx={{textAlign: 'center', mb:5}}>
        <Badge badgeContent={cart.length} color='primary'>
          <ShoppingCartIcon fontSize='large'/>
        </Badge>
        <Typography variant='h6' sx={{mt:1}}>
          Items in Cart: {cart.length}
        </Typography>
      </Box>

    {/* creates grid layout, spacing is gap between items */}
    <Grid container spacing={3} justifyContent='center'>
      {coffeeMenu.map((coffee)=>(
        // each card in the grid
        <Grid item key={coffee.id}>

      {/* Card for the item */}
      <Card sx={{height: '100%', display:'flex', flexDirection:'column', width: 300}}>
        {/* image component for cards */}
        <CardMedia
        component='img'
        height='200'
        image={coffee.image}
        alt={coffee.name}
        sx={{objectFit:'cover'}}
        />
        <CardContent sx={{flexGrow: 1}}>
          <Typography variant='h5'>
               {coffee.name}
          </Typography>
          <Typography color='text.secondary'
          >
            {coffee.description}
          </Typography>

          <Typography variant='h6'>
           £{coffee.price}
          </Typography>
        </CardContent>
         <Button 
      variant='contained' 
      color='primary'
      fullWidth
      sx={{marginTop:2}}
      onClick={()=> {
        setCart([...cart, coffee])
        setOpen(true)
        }}>
      Order</Button>
      </Card>
      </Grid>
        ))}
    </Grid>

    {/* for cart notification */}
    <Snackbar
    //this contols visibility
    open={open}
    // close after 3 seconds
    autoHideDuration={3000}
    onClose={()=> setOpen(false)}
    // positions to bottom right
    anchorOrigin={{vertical: 'bottom', horizontal:'right'}}
    >
    <Alert
    // severity makes it green
    onClose={()=> setOpen(false)} severity='success'> 
      Item added to cart!
    </Alert>
    </Snackbar>
  
    </Paper>
    </Container>
    </Box>
  );
}

export default App;
