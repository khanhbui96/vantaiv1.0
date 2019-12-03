import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
import Link from 'react-router-dom/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Add from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import moment from 'moment';
import UpdateVerify from './UpdateVerify';


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
function InforVerify(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { vehicles, selectVehicle, updateVehicle, updateData} = props;
  const [single, setSingle] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const [keyword, setKeyword] = React.useState('');
  const handleChange = event => {
    setKeyword(event.target.value);
  };

  const Vehicle = (row, index) => {
    return (
      <StyledTableRow key={index}>
        <StyledTableCell component="th" scope="row">
          {index + 1}
        </StyledTableCell>
        <StyledTableCell>{row.brand}</StyledTableCell>
        <StyledTableCell>{row.number}</StyledTableCell>
        <StyledTableCell> {moment(row.verify.start ).format('DD/MM/YYYY')}</StyledTableCell>
        <StyledTableCell>{moment(row.verify.end ).format('DD/MM/YYYY')}</StyledTableCell>
        <StyledTableCell>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.margin}
            onClick={() => {
              selectVehicle(row)
              handleClickOpen()
            }}
          >
            Cập nhật thông tin kiểm định
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    );
  };
  const filterVehicles = vehicles => {
    return vehicles
      .filter(vehicles=>{
        return (
          vehicles.status == 'Sử dụng thường xuyên'
        )
      })
      .filter(vehicle=>{
        return(
          vehicle.verify.end.slice(5,7).indexOf(keyword) !== -1
        )
      })
      .map((vehicle, index) => {
        return Vehicle(vehicle, index);
      });
  };
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  function handleChangeSingle(value) {
    setSingle(value);
  }
  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit'
      }
    })
  };
  return (
    <Paper style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <Typography style={{ textAlign: 'center', marginTop : 20 }} variant="h5">
        THỜI HẠN KIỂM ĐỊNH PHƯƠNG TIỆN
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Thời gian</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={keyword}
          onChange={handleChange}
        >
          <MenuItem value=''>Tất cả</MenuItem>
          <MenuItem value='3'>Đợt 1 (Tháng 3)</MenuItem>
          <MenuItem value='9'>Đợi 2 (Tháng 9)</MenuItem>
        </Select>
      </FormControl>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <UpdateVerify
            updateData={updateData}
            handleClose={handleClose}
            updateVehicle={updateVehicle}
          />
        </Dialog>
      </div>

      <Table className={classes.table}>
        <TableHead>
          <TableRow style={{ background: '#3f51b5' }}>
            <StyledTableCell style={{ background: '#3f51b5' }}>
              STT
            </StyledTableCell>
            <StyledTableCell style={{ background: '#3f51b5' }}>
              Nhãn xe chuyên dùng
            </StyledTableCell>
            <StyledTableCell style={{ background: '#3f51b5' }}>
              Số đăng kí
            </StyledTableCell>
            <StyledTableCell style={{ background: '#3f51b5' }}>
              Ngày kiểm định
            </StyledTableCell>
            <StyledTableCell style={{ background: '#3f51b5' }}>
              Ngày hết hạn kiểm định
            </StyledTableCell>

            <StyledTableCell style={{ background: '#3f51b5' }}>
              Thao tác
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{filterVehicles(vehicles)}</TableBody>
      </Table>

      <div></div>
    </Paper>
  );
}

export default InforVerify;
