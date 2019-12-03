import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Clear } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import moment from 'moment';
import Loading from '../Loading'

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


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 700,
    marginTop: 10
  },
  formControl: {
    marginBottom: 30,
    minWidth: 200
  },
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  avatar: {
    backgroundColor: red[500]
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200
  },
  imageBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  margin: {
    marginLeft: 8
  }
}));

function RegularVehicles(props) {
  const classes = useStyles();
  const { vehicles, deleteVehicle, setValue, selectVehicle, commands } = props;
  const [open, setOpen] = React.useState(true);
  const [number, setNumber] = React.useState('');
  const [key, changeKey] = React.useState('');
  const [time, setTime] = React.useState('');
  const handleChange = e => {
    changeKey(e.target.value);
  };
  const Command = (row, index) => {
    return (
      <StyledTableRow key={index} style={{ color: row.status ? 'red' : '' }}>
        <StyledTableCell
          style={{ color: !row.status ? 'red' : '' }}
          component="th"
          scope="row"
        >
          {index + 1}
        </StyledTableCell>
        <StyledTableCell style={{ color: !row.status ? 'red' : '' }}>
          {row.doing}
        </StyledTableCell>
        <StyledTableCell style={{ color: !row.status ? 'red' : '' }}>
          {moment(row.time).format('DD/MM/YYYY')}
        </StyledTableCell>
        <StyledTableCell style={{ color: !row.status ? 'red' : '' }}>
          {row.from}
        </StyledTableCell>
        <StyledTableCell style={{ color: !row.status ? 'red' : '' }}>
          {row.to}
        </StyledTableCell>
        <StyledTableCell style={{ color: !row.status ? 'red' : '' }}>
          {row.result}
        </StyledTableCell>
      </StyledTableRow>
    );
  };
  const filterCommands = commands => {
    return commands
      .sort((a, b) => {
        return new Date(b.time).getTime() - new Date(a.time).getTime();
      })
      .filter(command => {
          
        return (
            command.license === number && command.time.slice(5,7).indexOf(time) !== -1
        );
      })
      .map((command, index) => {
        return Command(command, index);
      });
  };
  const Vehicle = (row, index) => {
    return (
      <StyledTableRow key={index}>
        <StyledTableCell component="th" scope="row">
          {index + 1}
        </StyledTableCell>
        <StyledTableCell>{row.brand}</StyledTableCell>
        <StyledTableCell>{row.type}</StyledTableCell>
        <StyledTableCell>{row.fuel}</StyledTableCell>
        <StyledTableCell>{row.number}</StyledTableCell>
        <StyledTableCell>{row.date}</StyledTableCell>
        <StyledTableCell>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            className={classes.margin}
            onClick={() => {
              setOpen(false);
              setNumber(row.number);
            }}
          >
            Thông tin hoạt động
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
      .filter(vehicle => {
        return (
          vehicle.brand.indexOf(key) !== -1 ||
          vehicle.type.indexOf(key) !== -1 ||
          vehicle.number.indexOf(key) !== -1 ||
          vehicle.fuel == key
        );
      })
      .map((vehicle, index) => {
        return Vehicle(vehicle, index);
      });
  };
  return (
    <div>
      {open ? (
        <Paper className={classes.root}>
          <Typography style={{ textAlign: 'center' }} variant="h4">
            Phương tiện vận tải thường xuyên
          </Typography>
          <div>
            <form>
              <TextField
                style={{ margin: 16 }}
                placeholder="Tìm kiếm"
                name="keyword"
                onChange={handleChange}
              />
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Nhiên liệu</InputLabel>
                <Select native onChange={handleChange}>
                  <option value="" />
                  <option value="Xăng">Xăng</option>
                  <option value="Dầu Diezen">Dầu Diezen</option>
                </Select>
              </FormControl>
            </form>
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
                  Loại phương tiện
                </StyledTableCell>
                <StyledTableCell style={{ background: '#3f51b5' }}>
                  Nhiên liệu sử dụng
                </StyledTableCell>
                <StyledTableCell style={{ background: '#3f51b5' }}>
                  Số đăng kí
                </StyledTableCell>
                <StyledTableCell style={{ background: '#3f51b5' }}>
                  Tổng km
                </StyledTableCell>

                <StyledTableCell style={{ background: '#3f51b5' }}>
                  Thao tác
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{filterVehicles(vehicles.data)}</TableBody>
          </Table>
          { vehicles.isUpdate ?  <Loading/>: null}
        </Paper>
      ) : (
        <Paper
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <Typography style={{ textAlign: 'center' }} variant="h4">
            Thông tin hoạt động
          </Typography>
          <Typography style={{ textAlign: 'center' }} variant="h4">
            {`Xe ${number}`}{' '}
          </Typography>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Tháng</InputLabel>
            <Select
              native
              onChange={e => {
                setTime(e.target.value)
              }}
            >
              <option value=""></option>
              <option value="01">Tháng 1</option>
              <option value="02">Tháng 2</option>
              <option value="03">Tháng 3</option>
              <option value="04">Tháng 4</option>
              <option value="05"> Tháng 5</option>
              <option value="06">Tháng 6</option>
              <option value="07"> Tháng 7</option>
              <option value="08">Tháng 8</option>
              <option value="09">Tháng 9</option>
              <option value="10">Tháng 10</option>
              <option value="11">Tháng 11</option>
              <option value="12">Tháng 12</option>
            </Select>
          </FormControl>

          <Table className={classes.table}>
            <TableHead>
              <TableRow style={{ background: '#3f51b5' }}>
                <StyledTableCell style={{ background: '#3f51b5' }}>
                  STT
                </StyledTableCell>
                <StyledTableCell style={{ background: '#3f51b5' }}>
                  Nhiệm vụ
                </StyledTableCell>
                <StyledTableCell style={{ background: '#3f51b5' }}>
                  Thời gian
                </StyledTableCell>
                <StyledTableCell style={{ background: '#3f51b5' }}>
                  Đi từ
                </StyledTableCell>
                <StyledTableCell style={{ background: '#3f51b5' }}>
                  Đi đến
                </StyledTableCell>
                <StyledTableCell style={{ background: '#3f51b5' }}>
                  Km
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{filterCommands(commands)}</TableBody>
            <TableHead>
              <TableRow style={{ background: '#3f51b5' }}>
                <StyledTableCell
                  style={{ background: '#3f51b5' }}
                ></StyledTableCell>
                <StyledTableCell
                  style={{ background: '#3f51b5' }}
                ></StyledTableCell>
                <StyledTableCell
                  style={{ background: '#3f51b5' }}
                ></StyledTableCell>
                <StyledTableCell
                  style={{ background: '#3f51b5' }}
                ></StyledTableCell>
                <StyledTableCell style={{ background: '#3f51b5' }}>
                  Tổng cộng
                </StyledTableCell>
                <StyledTableCell
                  style={{ background: '#3f51b5' }}
                ></StyledTableCell>
              </TableRow>
            </TableHead>
          </Table>
          <Button
            style={{ margin: 10 }}
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => {
              setOpen(true);
            }}
          >
            Quay về
          </Button>
        </Paper>
      )}
    </div>
  );
}
export default RegularVehicles;
