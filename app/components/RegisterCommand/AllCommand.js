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
import jwt_decode from 'jwt-decode';
import Loading from '../Loading';

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

function createData(name, rank, position, unit, infor) {
  return { name, rank, position, unit, infor };
}

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
    margin: theme.spacing(1),
    minWidth: 120
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

function AllCommand(props) {
  const classes = useStyles();
  const { commands, selectCommand, setValue } = props;
  const decode = jwt_decode(localStorage.getItem('jwt'));
  const [key, changeKey] = React.useState('');
  const handleChange = e => {
    changeKey(e.target.value);
  };
  const Command = (row, index) => {
    return (
      <StyledTableRow key={index} style={{color: row.status ? 'red' : ''}} >
        <StyledTableCell style={{color: !row.status ? 'red' : ''}} component="th" align="center" scope="row">
          {index + 1}
        </StyledTableCell>
        <StyledTableCell style={{color: !row.status ? 'red' : ''}} align="center">{row.doing}</StyledTableCell>
        <StyledTableCell style={{color: !row.status ? 'red' : ''}}  align="center">{row.pay}</StyledTableCell>
        <StyledTableCell style={{color: !row.status ? 'red' : ''}} align="center">
          {moment(row.time).format('DD/MM/YYYY')}
        </StyledTableCell>
        <StyledTableCell style={{color: !row.status ? 'red' : ''}} align="center">{row.status ? 'Đã phê duyệt' : "Chưa phê duyệt"}</StyledTableCell>
        <StyledTableCell align="center">
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => {
              selectCommand(row);
              setValue(1);
              setValue(0);
            }}
          >
            Xem
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    );
  };
  const filterCommands = commands => {
    return commands
      .filter(command => {
        return command.userId == decode.id;
      })
      .sort((a, b) => {
        return new Date(b.time).getTime() - new Date(a.time).getTime();
      })
      .filter(command => {
        return (
          command.doing.indexOf(key) !== -1 ||
          command.pay.indexOf(key) !== -1 ||
          command.time.indexOf(key)!== -1
        );
      })
      .map((command, index) => {
        return Command(command, index);
      });
  };
  return (
    <Paper className={classes.root}>
      <Typography style={{ textAlign: 'center' }} variant="h4">
        Danh sách lệnh vận chuyển
      </Typography>
      <div>
        <form>
          <TextField
            style={{ margin: 16 }}
            placeholder="Tìm kiếm"
            name="keyword"
            onChange={handleChange}
          />
          <TextField
            id="datetime-local"
            label="Thời gian thực hiện"
            type="date"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true
            }}
          />
        </form>
      </div>

      <Table className={classes.table}>
        <TableHead>
          <TableRow style={{ background: '#3f51b5' }}>
            <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
              STT
            </StyledTableCell>
            <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
              Thực hiện nhiệm vụ
            </StyledTableCell>
            <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
              Quyết toán ngành
            </StyledTableCell>
            <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
              Thời gian thực hiện
            </StyledTableCell>
            <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
              Trạng thái
            </StyledTableCell>
            <StyledTableCell align="center" style={{ background: '#3f51b5' }}>
              Chi tiết
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{filterCommands(commands.data)}</TableBody>
      </Table>
      { commands.isUpdate ?  <Loading/>: null}
    </Paper>
  );
}
export default AllCommand;
