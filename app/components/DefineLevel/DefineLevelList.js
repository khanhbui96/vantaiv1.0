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
import AddDefineLevel from './AddDefineLevel';
import Loading from '../Loading';


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

function DefineLevelList(props) {
    const classes = useStyles();
  
    const {
        addDefineLevel, 
        defineLevels, 
        updateDefineLevel ,
        deleteDefineLevel, 
        selectDefineLevel, 
        updateData,
        errs,
        getErrs
    } = props.defineLevelProps;
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState('');
    const [keyword, setKeyword] = React.useState('');
   
    function handleClickOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    const DefineLevel = (defineLevel, index)=>{
        return <TableRow key={index} >
                            <StyledTableCell align="center">{index+1}</StyledTableCell>
                            <StyledTableCell align="center">{defineLevel.label} </StyledTableCell>
                            <StyledTableCell align="center">{defineLevel.fluel}</StyledTableCell>
                            <StyledTableCell align="center">{defineLevel.define1}</StyledTableCell>
                            <StyledTableCell align="center">{defineLevel.define2}</StyledTableCell>
                           
                            <StyledTableCell align="center" >
                                <Button
                                    onClick={() => {
                                        selectDefineLevel(defineLevel);
                                        getErrs({});
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
                                    onClick={() => { deleteDefineLevel(defineLevel._id) }}>
                                    Xóa
                                </Button>
                            </StyledTableCell>
                        </TableRow>
    };
    const filterDefineLevel = (defineLevels)=>{
        return defineLevels.filter(defineLevel=> {
            return defineLevel.label.indexOf(keyword) !== -1 || defineLevel.fluel == keyword
        } ).map((defineLevel, index)=>{
            return DefineLevel(defineLevel, index)
        })
        
    }
    return (
        <Paper className={classes.root}>
            <Typography style={{ textAlign: 'center' }} variant='h5'>
                ĐỊNH MỨC TIÊU THỤ XĂNG, DẦU ĐỐI VỚI XE Ô TÔ, MÔ TÔ
            </Typography>
            <div>
                <TextField
                    style={{ margin: 16 }}
                    placeholder='Tìm kiếm'
                    onChange={(e)=>{
                        setKeyword(e.target.value)}}
                />
                <FormControl className={classes.formControl}>
                    <InputLabel  htmlFor="age-native-simple">Nhiên liệu{''}</InputLabel>
                    <Select native onChange={(e) => {
                        setKeyword(e.target.value)
                    }}>
                        <option value="" ></option>
                        <option value='Xăng'>Xăng</option>
                        <option value='Dầu Diezen'>Dầu Diezen</option>
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
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <div>
                        <AddDefineLevel
                            errs={errs}
                            getErrs = {getErrs} 
                            setOpen={setOpen}
                            addDefineLevel={addDefineLevel}
                            updateData={updateData}
                            selectDefineLevel={selectDefineLevel}
                            updateDefineLevel={updateDefineLevel}
                        />
                    </div>
                </Dialog>
            </div>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow style={{ background: "#3f51b5" }}>
                        <StyledTableCell style={{ background: "#3f51b5" }}>STT</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Tên trang bị</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Tên nhiên liệu </StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Định mức Theo TT/59 của BQP</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Định mức Thường xuyên của Quân đoàn</StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">Thao tác</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {filterDefineLevel(defineLevels.data)}
                </TableBody>
            </Table>
            { defineLevels.isUpdate ?  <Loading/>: null}
                <div>
                </div>
        </Paper>
    );
};

export default DefineLevelList