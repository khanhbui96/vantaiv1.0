import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
import Link from 'react-router-dom/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Add from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import SearchIcon from '@material-ui/icons/Search';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Loading from '../Loading';
import AddMotoBike from './AddMotoBike';
import moment from 'moment';
import jwt_decode from 'jwt-decode';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
        marginTop: 10
    },
    formControl: {
        margin: theme.spacing(0),
        width: 160,
        marginRight: 10
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1 ,
    }
}));

function MotoBikeList(props) {
    const classes = useStyles();
    const decode = jwt_decode(localStorage.getItem('jwt'));
    const {
        addMotoBike, 
        motoBikes, 
        updateMotoBike ,
        deleteMotoBike, 
        selectMotoBike, 
        updateData,
        errs,
        getErrs
    } = props.motoBikeProps;
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState('');
    const [keyword, setKeyword] = React.useState('');
    const handleSearch = ()=>{
        setKeyword(new Date().getMonth()+2)
    }
    const handleBack = ()=>{
        setKeyword('')
    }
    function handleClickOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    const MotoBike = (motoBike, index)=>{
        return <TableRow  key={index}>
                            <StyledTableCell align="center">{index+1}</StyledTableCell>
                            <StyledTableCell align="center">{motoBike.name} </StyledTableCell>
                            <StyledTableCell align="center">{motoBike.unit}</StyledTableCell>
                            <StyledTableCell align="center">{motoBike.address}</StyledTableCell>
                            <StyledTableCell align="center">{motoBike.model}</StyledTableCell>
                            <StyledTableCell align="center">{motoBike.color} </StyledTableCell>
                            <StyledTableCell align="center">{motoBike.license} </StyledTableCell>
                            <StyledTableCell align="center">{moment(motoBike.duration).format('DD/MM/YYYY')}</StyledTableCell>
                           
                            <StyledTableCell align="center" >
                                <Button
                                    onClick={() => {
                                        selectMotoBike(motoBike)
                                        setOpen(true)
                                    }}
                                    variant="outlined"
                                    size="small"
                                    color="primary"
                                    style ={{marginRight: 10}}
                                    >
                                    Sửa
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    size="small" color="primary" 
                                    onClick={() => { deleteMotoBike(motoBike._id) }}>
                                    Xóa
                                </Button>
                            </StyledTableCell>
                        </TableRow>
    };
    const filterMotoBike = (motoBikes)=>{
        return motoBikes
        .filter(motoBike => {
            return motoBike.userId == decode.id 
        })
        .filter(motoBike => {
            return motoBike.duration.slice(5,7).indexOf(keyword) !==-1 || motoBike.type == keyword 
                    || motoBike.name.indexOf(keyword) !== -1 || motoBike.license.indexOf(keyword) !== -1
        })
        .map((motoBike, index)=>{
            return MotoBike(motoBike, index)
        })
        
    }
    return (
        <Paper className={classes.root}>
            <Typography style={{ textAlign: 'center' }} variant='h5'>
                THÔNG TIN PHƯƠNG TIỆN THEO QUY ĐỊNH
            </Typography>
            <div>
                <TextField
                    style={{ margin: 16 }}
                    placeholder='Tìm kiếm'
                    onChange={(e)=>{
                        setKeyword(e.target.value)}}
                />
                <FormControl className={classes.formControl}>
                    <InputLabel  htmlFor="age-native-simple">Loại xe{''}</InputLabel>
                    <Select native onChange={(e) => {
                        setKeyword(e.target.value)
                    }}>
                        <option value="" ></option>
                        <option value='motor'>Xe mô tô - Xe gắn máy</option>
                        <option value='car'>Xe ô tô</option>
                    </Select>
                </FormControl>
               <Fab
                    onClick={handleClickOpen}
                    size="medium"
                    color="primary"
                    aria-label="Add"
                    className={classes.margin}
                    style={{ float: 'right' }}>
                    <Add />
                </Fab>
                {!keyword ? <Fab
                    onClick={handleSearch}
                    size="medium"
                    color="primary"
                    aria-label="Add"
                    className={classes.margin}
                    style={{ float: 'right', marginRight: 20 }}>
                    <SearchIcon/>
                </Fab>:
                <Fab
                onClick={handleBack}
                size="medium"
                color="primary"
                aria-label="Add"
                className={classes.margin}
                style={{ float: 'right', marginRight: 20 }}>
                <BackspaceIcon/>
            </Fab>            
            }
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <div>
                        <AddMotoBike
                            setOpen={setOpen}
                            addMotoBike={addMotoBike}
                            updateData={updateData}
                            selectMotoBike={selectMotoBike}
                            updateMotoBike={updateMotoBike}
                            errs={errs}
                            getErrs={getErrs}
                        />
                    </div>
                </Dialog>
            </div>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow style={{ background: "#3f51b5" }}>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">STT</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Họ và tên</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Đơn vị</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Địa chỉ</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Tên xe</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Màu</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Biển kiểm soát</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Hạn bảo hiểm phương tiện</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Thao tác</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {filterMotoBike(motoBikes.data)}
                </TableBody>
            </Table>
                { motoBikes.isUpdate ?  <Loading/>: null}
                <div>
                </div>
        </Paper>
    );
};

export default MotoBikeList