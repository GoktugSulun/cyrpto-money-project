import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { CardActionArea, ImageListItem, Button, ButtonGroup} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Icon } from '@iconify/react';

import { DivWallet, CardContainer, CardEl } from './styled';
import { BuyButton, SoldButton } from '../../assets/styled';
import HistoryDetail from './HistoryDetail'

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as thunkActions from '../../store/actions/thunkActions'


export default function ActionAreaCard(props) {
  const walletReducer = useSelector(state => state.walletReducer);
  const historyReducer = useSelector(state => state.historyReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { targetCard } = props;

  if(targetCard === 'user'){
    return userCard(walletReducer, navigate);
  }

  if(targetCard === 'purchase-history'){
    return purchaseHistoryCard(historyReducer, navigate, dispatch);
  }

  return <div>
    'error'
  </div>
  
}

const userCard = (userWallet, navigate) => {
  const { title, balance, cryptos } = userWallet;

  return (
    <CardEl>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div" align='center'>
          { title }
        </Typography>
        <Divider />
        <Typography sx={{ mt: 4}} variant="h5" color="text.secondary" >
          Balance: { balance }$
        </Typography>
        
        {
          cryptos &&
          cryptos?.map((crypto, index) => {
            return (<CardContainer key={`crypto-wallet-${index}`}>
              <div style={{display: 'flex'}}>
                <Icon icon={`cryptocurrency:${crypto?.type?.toLowerCase()}`} width="48" height="48" />
                <div>
                  <DivWallet>
                    <Typography variant="body2" color="text.secondary">
                      Crypto Type: 
                    </Typography>
                    <Typography variant="body2" color="text.secondary"> 
                      {crypto?.type}
                    </Typography>
                  </DivWallet>
                  <DivWallet>
                    <Typography variant="body2" color="text.secondary">
                      Crypto Amount: 
                    </Typography>
                    <Typography variant="body2" color="text.secondary"> 
                      {crypto?.amount}
                    </Typography>
                  </DivWallet>
                </div>       
              </div>
              
              {/* <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <BuyButton onClick={cryptoBuyHandler} size='small'> Buy </BuyButton>
                <SoldButton onClick={cryptoSoldHandler} size='small'> Sell </SoldButton>
              </ButtonGroup> */}
            </CardContainer>)
          })
        }

        {
          !cryptos && <Typography sx={{ color: 'red', marginTop: 10, fontStyle: 'italic' }} >Your wallet is empty! <br /> <Typography onClick={() => navigate('/markets')} component='span' sx={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>Go to markets</Typography> and buy some crypto :)</Typography>
        }

      </CardContent>
    </CardEl>
  );
}

const purchaseHistoryCard = (purchaseHistory, navigate, dispatch) => {
  const { title, cryptos } = purchaseHistory;
  console.log(cryptos, ' cryptos');

  // const clearHistoryHandler = () => {
  //   dispatch(thunkActions.clearCryptoHistory());
  // }

  return (
    <CardEl>
      <CardContent>
        
       {/* <ClearHistoryEl onClick={clearHistoryHandler} >
        <abbr title='Clear History'><DeleteIcon fontSize='medium' /></abbr>
       </ClearHistoryEl> */}
        <Typography gutterBottom variant="h3" component="div" align='center'>
          { purchaseHistory?.title }
        </Typography>
        <Divider style={{ marginBottom: 40 }} />

        {
          cryptos && 
          cryptos.map((crypto, index) => {
            return (
              <CardContainer key={`crypto-history-${index}`}>
                <div style={{display: 'flex'}}>
                  <Icon icon={`cryptocurrency:${crypto?.type?.toLowerCase()}`} width="48" height="48" />
                  <div>
                    <DivWallet>
                      <Typography variant="body2" color="text.secondary">
                        Crypto Type: 
                      </Typography>
                      <Typography variant="body2" color="text.secondary"> 
                        {crypto?.type}
                      </Typography>
                    </DivWallet>
                    <DivWallet>
                      <Typography variant="body2" color="text.secondary">
                        Crypto Amount: 
                      </Typography>
                      <Typography variant="body2" color="text.secondary"> 
                        {crypto?.amount}
                      </Typography>
                    </DivWallet>
                    <HistoryDetail crypto={crypto} />
                  </div>                
                </div>

                <DivWallet>
                  <Typography sx={{ fontStyle: 'italic' }} variant="body2" color="text.secondary">
                    { 
                    // 1 hour = 3600000 ms
                    ((new Date().getTime() - new Date(crypto?.date).getTime()) / 3600000) < 1 
                      ? 'in 1 hr...'
                      : `before ${Math.trunc((new Date().getTime() - new Date(crypto?.date).getTime()) / 3600000)} hr...`
                    }
                  </Typography>
                </DivWallet>
              
            </CardContainer>
            )
          })
        }

        {
          cryptos?.length === 0 && <div style={{ fontStyle:'italic', color: 'red' }}> There is no history! </div>
        }

        
      </CardContent>
    </CardEl>
  );
}