import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, ImageListItem, Button, ButtonGroup} from '@mui/material';

import { DivWallet, CardContainer, CardEl, BuyButton, SoldButton } from './styled';

import { useEffect } from 'react';

import { useSelector } from 'react-redux';


export default function ActionAreaCard(props) {
  const walletReducer = useSelector(state => state.walletReducer);

  const buyCrypto = () => {
    console.log(walletReducer, ' ?????');
    // console.log(balance, ' balance');  
    // console.log(cryptos, ' cryptos');  
    // console.log(target, ' target');  
    // console.log(title, ' title');  
    // { balance, cryptos, target, title }
  }

  const showCrypto = () => {
    console.log(walletReducer, 'After state');
  }

  const { targetCard } = props;

  if(targetCard === 'user'){
    const { userWallet } = props;
    return userCard(walletReducer, buyCrypto, showCrypto);
  }

  if(targetCard === 'purchase-history'){
    const { purchaseHistory } = props;
    return purchaseHistoryCard(purchaseHistory);
  }

  return <div>
    'error'
  </div>
  
}

const userCard = (userWallet, buyCrypto, showCrypto) => {
  const { title, balance, cryptos} = userWallet;

  return (
    <CardEl>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div" align='center'>
          { title }
        </Typography>
        <Typography variant="h5" color="text.secondary" >
          Balance: { balance }$
        </Typography>
        
        {
          cryptos.length &&
          cryptos.map(crypto => {
            return (<CardContainer key={crypto.id}>
              <div style={{display: 'flex'}}>
                <div>
                  <DivWallet>
                    <Typography variant="body2" color="text.secondary">
                      Crypto Type: 
                    </Typography>
                    <Typography variant="body2" color="text.secondary"> 
                      {crypto.type}
                    </Typography>
                  </DivWallet>
                  <DivWallet>
                    <Typography variant="body2" color="text.secondary">
                      Crypto Amount: 
                    </Typography>
                    <Typography variant="body2" color="text.secondary"> 
                      {crypto.amount}
                    </Typography>
                  </DivWallet>
                </div>
              
                <ImageListItem key={crypto.id + '-img'}>
                  <img
                    src={crypto.img}
                    width='48'
                    height='48'
                    alt='dsadas'
                    loading="lazy"
                  />
                </ImageListItem>
              </div>
              
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <BuyButton onClick={buyCrypto} size='small'> Al </BuyButton>
                <SoldButton onClick={showCrypto} size='small'> Sat </SoldButton>
              </ButtonGroup>
            </CardContainer>)
          })
        }

      </CardContent>
    </CardEl>
  );
}

const purchaseHistoryCard = (purchaseHistory) => {
  const { title, cryptos } = purchaseHistory;

  return (
    <CardEl>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div" align='center'>
          { purchaseHistory.title }
        </Typography>

        {
          cryptos.map(crypto => {
            return (
              <CardContainer key={crypto.id}>
              <div style={{display: 'flex'}}>
                <div>
                  <DivWallet>
                    <Typography variant="body2" color="text.secondary">
                      Crypto Type: 
                    </Typography>
                    <Typography variant="body2" color="text.secondary"> 
                      {crypto.type}
                    </Typography>
                  </DivWallet>
                  <DivWallet>
                    <Typography variant="body2" color="text.secondary">
                      Crypto Amount: 
                    </Typography>
                    <Typography variant="body2" color="text.secondary"> 
                      {crypto.amount}
                    </Typography>
                  </DivWallet>
                </div>
              
                <ImageListItem key={crypto.id + '-img'}>
                  <img
                    src={crypto.img}
                    width='48'
                    height='48'
                    alt='dsadas'
                    loading="lazy"
                  />
                </ImageListItem>
              </div>

              <DivWallet>
                <Typography variant="body2" color="text.secondary">
                  Date: 
                </Typography>
                <Typography  variant="body2" color="text.secondary">
                  { crypto.date }
                </Typography>
              </DivWallet>
              
            </CardContainer>
            )
          })
        }

        
      </CardContent>
    </CardEl>
  );
}