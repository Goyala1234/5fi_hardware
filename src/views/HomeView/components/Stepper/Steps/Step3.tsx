import {
  Box,
  Divider,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  OutlinedInput,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled
} from '@mui/material';
import React from 'react';
import CustomButton from '../../../../../components/CustomButton';
import Wrapper from './components/Wrapper';

import DirectionsIcon from '@mui/icons-material/Directions';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme: any }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'red',
    color: 'yellow'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

const data = [
  {
    id: 1,
    productDetails: '5-Fi Access point',
    qty: 1,
    availability: 'Immediate',
    unitPrice: '$2800',
    price: '$2800'
  },
  {
    id: 2,
    productDetails: '5-Fi SIM cards',
    qty: 1,
    availability: 'Immediate',
    unitPrice: '$10',
    price: '$10'
  }
];

const Step3 = () => {
  return (
    <Wrapper icon="/images/shopping.svg" title="Shopping Cart">
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography>Order #237890</Typography>
        <Typography>14 Dec 2022 at 11:22 am</Typography>
      </Box>

      <Divider sx={{ border: '2px solid #DDDDE2', margin: '21px 0' }} />

      <Stack direction={'row'} spacing={4}>
        <CustomButton background="#E97C61" sx={{ borderRadius: '20px' }}>
          Unpaid
        </CustomButton>
        <CustomButton background="#E8AB4D" sx={{ borderRadius: '20px' }}>
          Unfulfilled
        </CustomButton>
      </Stack>

      <Box>
        <Stack direction={'row'} spacing={4}>
          <TextField
            placeholder="Search"
            sx={{
              '& .MuiOutlinedInput-root': {
                paddingLeft: 0,
                paddingRight: 0,
                borderRadius: '20px',
                fontFamily: 'Poppins',
                fontSize: '20px',
                lineHeight: '34px',
                fontWeight: 'normal',
                fontStyle: 'normal',
                color: '#CACACA'
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  sx={{
                    padding: '30px',
                    backgroundColor: '#1F3BB3',
                    borderRadius: '20px'
                  }}
                  position="end"
                >
                  <img src="/images/search.svg" alt="search" />
                </InputAdornment>
              )
            }}
          />

          <CustomButton background="#1F3BB3" sx={{ borderRadius: '20px' }}>
            Browse catalog
          </CustomButton>
        </Stack>

        <Box mt="35px">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Sr. No.</StyledTableCell>
                  <StyledTableCell align="right">
                    Product details
                  </StyledTableCell>
                  <StyledTableCell align="right">Quantity</StyledTableCell>
                  <StyledTableCell align="right">Availability</StyledTableCell>
                  <StyledTableCell align="right">Unit price</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((d) => (
                  <StyledTableRow key={d.id}>
                    <StyledTableCell component="th" scope="row">
                      {d.id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {d.productDetails}
                    </StyledTableCell>
                    <StyledTableCell align="right">{d.qty}</StyledTableCell>
                    <StyledTableCell align="right">
                      {d.availability}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {d.unitPrice}
                    </StyledTableCell>
                    <StyledTableCell align="right">{d.price}</StyledTableCell>
                    <StyledTableCell align="right">X</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      <Box>
        <Typography>Bill Details</Typography>
      </Box>
    </Wrapper>
  );
};

export default Step3;
