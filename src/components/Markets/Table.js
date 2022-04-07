import * as React from 'react';
import { DataGrid, GridToolbar, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { Container, Button} from '@mui/material';
import { ContainerEl } from './styled';
import Modal from '../Common/Modal'

import { useSelector } from 'react-redux';


const ToolbarGrid = () => {
  const marketDatas = useSelector(state => state.marketReducer);

  const [finalClickInfo, setFinalClickInfo] = React.useState(null)

  const rows = createRows(marketDatas);
  const columns = createColumns(marketDatas, finalClickInfo);
;

  const handleOnCellClick = (params) => {
    setFinalClickInfo(params);
  };

  return (
    <ContainerEl maxWidth='lg'>
      <DataGrid
          rows={rows}
          columns={columns}
          autoHeight={true}
          onCellClick={handleOnCellClick}
          components={{
            Toolbar: GridToolbar,
          }}
        />
    </ContainerEl>
  );
}

const buyCryptoHandler = () => {
  console.log('Buy');
}

const soldCryptoHandler = () => {
  console.log('Sold');
}

// createColumns function
const createRows = (marketDatas) => {
  const rows = marketDatas.map((marketData, idx) => {
    return { 
      id: idx, 
      col0: marketData.subname, 
      col1: marketData.name, 
      col2: marketData.price + '$', 
      col3: marketData.day_change + '%', 
      col4: Number(marketData.day_volume ).toFixed(3) + 'M', 
      col5: Number(marketData.market_cap).toFixed(3) + 'M',
    }
  });

  return rows;
}

// createRows function
const createColumns = (marketDatas, finalClickInfo) => {
  const columns = [];

  for(let i=0; i<nameOfColumns.length; i++){
    columns.push({ field: `col${i}`, headerName: nameOfColumns[i], width: 150 } ) 
  }
  columns.push(
    { 
      field: 'Buy', 
      renderCell: (cellValues) => {
        return (
          <Modal 
            clickInfo={finalClickInfo}
            type='buy'
          />
        );
      }
    }
  );

  columns.push(
    { 
      field: 'Sell', 
      renderCell: (cellValues) => {
        return (     
          <Modal 
            clickInfo={finalClickInfo}
            type='sell'
          />
        );
      }
    }
  );

  return columns;
}

const nameOfColumns = [
  'Subname',
  'Name',
  'Price',
  '24h Change',
  '24h Volume',
  'Market Cap',
]

export default ToolbarGrid;

// const columns = [
//   { field: 'col1', headerName: 'Name', width: 150 },
//   { field: 'col2', headerName: 'Price', width: 150 },
//   { field: 'col3', headerName: '24h Change', width: 150 },
//   { field: 'col4', headerName: '24h Volume', width: 150 },
//   { field: 'col5', headerName: 'Market Cap', width: 150 },
// ];


// const rows = [
//   { id: 1, col1: 'BTC', col2: '46.758$', col3: '+4.04%', col4: '24h volume', col5: '$888,802.39M' },
//   { id: 2, col1: 'ETH', col2: '50.758$', col3: '+4.04%', col4: '24h volume', col5: '$888,802.39M' },
//   { id: 3, col1: 'USDT', col2: '48.758$', col3: '+4.04%', col4: '24h volume', col5: '$888,802.39M' },
// ];


// const columns = [
//    {
//      field: 'username',
//      headerName: 'Username',
//      description:
//        'The identification used by the person with access to the online service.',
//    },
//    { 
//       field: 'age', 
//       headerName: 'Age' 
//    },
// ];



