// import React, { useEffect } from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
// import Link from 'react-router-dom/Link';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import Add from '@material-ui/icons/Add'
// import Typography from '@material-ui/core/Typography';
// import Fab from '@material-ui/core/Fab';
// import Button from '@material-ui/core/Button';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import Dialog from '@material-ui/core/Dialog';
// import SearchIcon from '@material-ui/icons/Search';
// import BackspaceIcon from '@material-ui/icons/Backspace';
// import Loading from '../Loading';
// import AddMotoBike from './AddMotoBike';
// import moment from 'moment';
// import jwt_decode from 'jwt-decode';

// const StyledTableCell = withStyles(theme => ({
//     head: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     body: {
//         fontSize: 14,
//     },
// }))(TableCell);
// const useStyles = makeStyles(theme => ({
//     root: {
//         width: '100%',
//         overflowX: 'auto',
//     },
//     table: {
//         minWidth: 700,
//         marginTop: 10
//     },
//     formControl: {
//         margin: theme.spacing(0),
//         width: 160,
//         marginRight: 10
//     },
//     appBar: {
//         position: 'relative',
//     },
//     title: {
//         marginLeft: theme.spacing(2),
//         flex: 1 ,
//     }
// }));

// function MotoBikeList(props) {
//     const classes = useStyles();
    // const decode = jwt_decode(localStorage.getItem('jwt'));
    // const {
    //     addMotoBike, 
    //     motoBikes, 
    //     updateMotoBike ,
    //     deleteMotoBike, 
    //     selectMotoBike, 
    //     updateData,
    //     errs,
    //     getErrs
    // } = props.motoBikeProps;
//     const [open, setOpen] = React.useState(false);
//     const [status, setStatus] = React.useState('');
//     const [keyword, setKeyword] = React.useState('');
    // const handleSearch = ()=>{
    //     setKeyword(new Date().getMonth()+2)
    // }
//     const handleBack = ()=>{
//         setKeyword('')
//     }
//     function handleClickOpen() {
//         setOpen(true);
//     }
//     function handleClose() {
//         setOpen(false);
//     }
    // const MotoBike = (motoBike, index)=>{
    //     return <TableRow  key={index}>
    //                         <StyledTableCell align="center">{index+1}</StyledTableCell>
    //                         <StyledTableCell align="center">{motoBike.name} </StyledTableCell>
    //                         <StyledTableCell align="center">{motoBike.unit}</StyledTableCell>
    //                         <StyledTableCell align="center">{motoBike.address}</StyledTableCell>
    //                         <StyledTableCell align="center">{motoBike.model}</StyledTableCell>
    //                         <StyledTableCell align="center">{motoBike.color} </StyledTableCell>
    //                         <StyledTableCell align="center">{motoBike.license} </StyledTableCell>
    //                         <StyledTableCell align="center">{moment(motoBike.duration).format('DD/MM/YYYY')}</StyledTableCell>
                           
    //                         <StyledTableCell align="center" >
    //                             <Button
    //                                 onClick={() => {
    //                                     selectMotoBike(motoBike)
    //                                     setOpen(true)
    //                                 }}
    //                                 variant="outlined"
    //                                 size="small"
    //                                 color="primary"
    //                                 style ={{marginRight: 10}}
    //                                 >
    //                                 Sửa
    //                             </Button>
    //                             <Button 
    //                                 variant="outlined" 
    //                                 size="small" color="primary" 
    //                                 onClick={() => { deleteMotoBike(motoBike._id) }}>
    //                                 Xóa
    //                             </Button>
    //                         </StyledTableCell>
    //                     </TableRow>
    // };
    // const filterMotoBike = (motoBikes)=>{
    //     return motoBikes
    //     .filter(motoBike => {
    //         return motoBike.userId == decode.id 
    //     })
    //     .filter(motoBike => {
    //         return motoBike.duration.slice(5,7).indexOf(keyword) !==-1 || motoBike.type == keyword 
    //                 || motoBike.name.indexOf(keyword) !== -1 || motoBike.license.indexOf(keyword) !== -1
    //     })
    //     .map((motoBike, index)=>{
    //         return MotoBike(motoBike, index)
    //     })
        
    // }
//     return (
//         <Paper className={classes.root}>
            // <Typography style={{ textAlign: 'center' }} variant='h5'>
            //     THÔNG TIN PHƯƠNG TIỆN THEO QUY ĐỊNH
            // </Typography>
            // <div>
            //     <TextField
            //         style={{ margin: 16 }}
            //         placeholder='Tìm kiếm'
            //         onChange={(e)=>{
            //             setKeyword(e.target.value)}}
            //     />
            //     <FormControl className={classes.formControl}>
            //         <InputLabel  htmlFor="age-native-simple">Loại xe{''}</InputLabel>
            //         <Select native onChange={(e) => {
            //             setKeyword(e.target.value)
            //         }}>
            //             <option value="" ></option>
            //             <option value='motor'>Xe mô tô - Xe gắn máy</option>
            //             <option value='car'>Xe ô tô</option>
            //         </Select>
            //     </FormControl>
            //    <Fab
            //         onClick={handleClickOpen}
            //         size="medium"
            //         color="primary"
            //         aria-label="Add"
            //         className={classes.margin}
            //         style={{ float: 'right' }}>
            //         <Add />
            //     </Fab>
            //     {!keyword ? <Fab
            //         onClick={handleSearch}
            //         size="medium"
            //         color="primary"
            //         aria-label="Add"
            //         className={classes.margin}
            //         style={{ float: 'right', marginRight: 20 }}>
            //         <SearchIcon/>
            //     </Fab>:
            //     <Fab
            //     onClick={handleBack}
            //     size="medium"
            //     color="primary"
            //     aria-label="Add"
            //     className={classes.margin}
            //     style={{ float: 'right', marginRight: 20 }}>
            //     <BackspaceIcon/>
            // </Fab>            
            // }
            //     <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            //         <div>
            //             <AddMotoBike
            //                 setOpen={setOpen}
            //                 addMotoBike={addMotoBike}
            //                 updateData={updateData}
            //                 selectMotoBike={selectMotoBike}
            //                 updateMotoBike={updateMotoBike}
            //                 errs={errs}
            //                 getErrs={getErrs}
            //             />
            //         </div>
            //     </Dialog>
            // </div>

//             <Table className={classes.table}>
                // <TableHead>
                //     <TableRow style={{ background: "#3f51b5" }}>
                //         <StyledTableCell style={{ background: "#3f51b5" }} align="center">STT</StyledTableCell>
                //         <StyledTableCell style={{ background: "#3f51b5" }} align="center">Họ và tên</StyledTableCell>
                //         <StyledTableCell style={{ background: "#3f51b5" }} align="center">Đơn vị</StyledTableCell>
                //         <StyledTableCell style={{ background: "#3f51b5" }} align="center">Địa chỉ</StyledTableCell>
                //         <StyledTableCell style={{ background: "#3f51b5" }} align="center">Tên xe</StyledTableCell>
                //         <StyledTableCell style={{ background: "#3f51b5" }} align="center">Màu</StyledTableCell>
                //         <StyledTableCell style={{ background: "#3f51b5" }} align="center">Biển kiểm soát</StyledTableCell>
                //         <StyledTableCell style={{ background: "#3f51b5" }} align="center">Hạn bảo hiểm phương tiện</StyledTableCell>
                //         <StyledTableCell style={{ background: "#3f51b5" }} align="center">Thao tác</StyledTableCell>
                //     </TableRow>
                // </TableHead>
//                 <TableBody>
//                   {filterMotoBike(motoBikes.data)}
//                 </TableBody>
//             </Table>
//                 { motoBikes.isUpdate ?  <Loading/>: null}
//                 <div>
//                 </div>
//         </Paper>
//     );
// };

// export default MotoBikeList

// import React, { useEffect } from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
// import Link from 'react-router-dom/Link';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
// import Add from '@material-ui/icons/Add'
// import Typography from '@material-ui/core/Typography';
// import Fab from '@material-ui/core/Fab';
// import Button from '@material-ui/core/Button';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import Dialog from '@material-ui/core/Dialog';
// import AddDefineLevel from './AddDefineLevel';
// import Loading from '../Loading';

// const StyledTableCell = withStyles(theme => ({
//     head: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     body: {
//         fontSize: 14,
//     },
// }))(TableCell);
// const useStyles = makeStyles(theme => ({
//     root: {
//         width: '100%',
//         overflowX: 'auto',
//     },
//     table: {
//         minWidth: 700,
//         marginTop: 10
//     },
//     formControl: {
//         margin: theme.spacing(0),
//         width: 160,
//         marginRight: 10
//     },
//     appBar: {
//         position: 'relative',
//     },
//     title: {
//         marginLeft: theme.spacing(2),
//         flex: 1 ,
//     }
// }));

// function MotoBikeList(props) {
//     const classes = useStyles();

// const {
//     addDefineLevel,
//     defineLevels,
//     updateDefineLevel ,
//     deleteDefineLevel,
//     selectDefineLevel,
//     updateData,
//     errs,
//     getErrs
// } = props.defineLevelProps;
// const [open, setOpen] = React.useState(false);
// const [status, setStatus] = React.useState('');
// const [keyword, setKeyword] = React.useState('');

// function handleClickOpen() {
//     setOpen(true);
// }
// function handleClose() {
//     setOpen(false);
// }
// const DefineLevel = (defineLevel, index)=>{
//     return <TableRow key={index} >
//                         <StyledTableCell align="center">{index+1}</StyledTableCell>
//                         <StyledTableCell align="center">{defineLevel.label} </StyledTableCell>
//                         <StyledTableCell align="center">{defineLevel.fluel}</StyledTableCell>
//                         <StyledTableCell align="center">{defineLevel.define1}</StyledTableCell>
//                         <StyledTableCell align="center">{defineLevel.define2}</StyledTableCell>

//                         <StyledTableCell align="center" >
//                             <Button
//                                 onClick={() => {
//                                     selectDefineLevel(defineLevel);
//                                     getErrs({});
//                                     setOpen(true)
//                                 }}
//                                 variant="outlined"
//                                 size="small"
//                                 color="primary"
//                                 style ={{marginRight: 10}}
//                                 >
//                                 Sửa
//                             </Button>
//                             <Button
//                                 variant="outlined"
//                                 size="small" color="primary"
//                                 onClick={() => { deleteDefineLevel(defineLevel._id) }}>
//                                 Xóa
//                             </Button>
//                         </StyledTableCell>
//                     </TableRow>
// };
// const filterDefineLevel = (defineLevels)=>{
//     return defineLevels.filter(defineLevel=> {
//         return defineLevel.label.indexOf(keyword) !== -1 || defineLevel.fluel == keyword
//     } ).map((defineLevel, index)=>{
//         return DefineLevel(defineLevel, index)
//     })

// }
//     return (
//         <Paper className={classes.root}>
// <Typography style={{ textAlign: 'center' }} variant='h5'>
//     ĐỊNH MỨC TIÊU THỤ XĂNG, DẦU ĐỐI VỚI XE Ô TÔ, MÔ TÔ
// </Typography>
// <div>
//     <TextField
//         style={{ margin: 16 }}
//         placeholder='Tìm kiếm'
//         onChange={(e)=>{
//             setKeyword(e.target.value)}}
//     />
//     <FormControl className={classes.formControl}>
//         <InputLabel  htmlFor="age-native-simple">Nhiên liệu{''}</InputLabel>
//         <Select native onChange={(e) => {
//             setKeyword(e.target.value)
//         }}>
//             <option value="" ></option>
//             <option value='Xăng'>Xăng</option>
//             <option value='Dầu Diezen'>Dầu Diezen</option>
//         </Select>
//     </FormControl>
//    <Fab
//         onClick={handleClickOpen}
//         size="medium"
//         color="primary"
//         aria-label="Add"
//         className={classes.margin}
//         style={{ float: 'right' }}>
//         <Add />
//     </Fab>
//     <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//         <div>
//             <AddDefineLevel
//                 errs={errs}
//                 getErrs = {getErrs}
//                 setOpen={setOpen}
//                 addDefineLevel={addDefineLevel}
//                 updateData={updateData}
//                 selectDefineLevel={selectDefineLevel}
//                 updateDefineLevel={updateDefineLevel}
//             />
//         </div>
//     </Dialog>
// </div>

//             <Table className={classes.table}>
// <TableHead>
//     <TableRow style={{ background: "#3f51b5" }}>
//         <StyledTableCell style={{ background: "#3f51b5" }}>STT</StyledTableCell>
//         <StyledTableCell style={{ background: "#3f51b5" }} align="center">Tên trang bị</StyledTableCell>
//         <StyledTableCell style={{ background: "#3f51b5" }} align="center">Tên nhiên liệu </StyledTableCell>
//         <StyledTableCell style={{ background: "#3f51b5" }} align="center">Định mức Theo TT/59 của BQP</StyledTableCell>
//         <StyledTableCell style={{ background: "#3f51b5" }} align="center">Định mức Thường xuyên của Quân đoàn</StyledTableCell>
//         <StyledTableCell style={{ background: "#3f51b5" }} align="center">Thao tác</StyledTableCell>
//     </TableRow>
// </TableHead>
// <TableBody>
//   {filterDefineLevel(defineLevels.data)}
// </TableBody>
//             </Table>
//             { defineLevels.isUpdate ?  <Loading/>: null}
//                 <div>
//                 </div>
//         </Paper>
//     );
// };

// export default MotoBikeList

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Add from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import BackspaceIcon from '@material-ui/icons/Backspace';
import FormControl from '@material-ui/core/FormControl';
import Fab from '@material-ui/core/Fab';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import jwt_decode from 'jwt-decode';
import moment from 'moment';
import AddMotoBike from './AddMotoBike';
import Loading from '../Loading';


const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5)
  }
}));
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
function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  }

  function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  }

  function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  }

  function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

const useStyles2 = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: 'auto'
  }
}));

function MotoBikeList(props) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
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

  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, motoBikes.data.length - page * rowsPerPage);
  const [key, changeKey] = React.useState('');
  const handleChange = e => {
    changeKey(e.target.value);
  };

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
  const value = motoBikes.data.filter(motoBike => {
    return motoBike.userId == decode.id 
})
.filter(motoBike => {
    return motoBike.duration.slice(5,7).indexOf(keyword) !==-1 || motoBike.type == keyword 
            || motoBike.name.indexOf(keyword) !== -1 || motoBike.license.indexOf(keyword) !== -1
}).length;
  useEffect(() => {
    if (value < 6 || value == 6) {
      setRowsPerPage(value);
    } else {
      setRowsPerPage(6);
    }
  }, [value]);
  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
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
            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>

        {motoBikes.isUpdate ? <Loading /> : null}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          style={{ float: 'right' }}
          colSpan={3}
          count={value}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </div>
    </Paper>
  );
}
export default MotoBikeList;
