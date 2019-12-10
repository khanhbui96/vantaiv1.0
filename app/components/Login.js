import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '40vw'
  },
  textfield: {
    margin: 10,
    width: '100%'
  }
}));

function Login(props) {
  const { errs, loginUser, history, getErrs, user } = props;
  const classes = useStyles();

  const [state, setState] = React.useState({
    login: '',
    password: '',
    errs: {
      login: '',
      password: ''
    }
  });
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = async e => {
    e.preventDefault();
    loginUser({ ...state }, type => {
      if (type == 1) {
        history.push('/guest');
      } else {
        history.push('/host');
      }
    });
    
  };
  const handleOnChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  useEffect(() => {
    setState({
      ...state,
      errs: {}
    });
    if (Object.keys(errs).length) {
      setState({
        ...state,
        errs: {
          ...errs
        }
      });
    }
    if (!navigator.onLine) {
      setOpen(true);
    }
  }, [errs]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Paper className={classes.root}>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onSubmit={handleClick}
        >
          <Typography variant="h3">Đăng nhập</Typography>
          <TextField
            className={classes.textfield}
            error={state.errs.login ? true : false}
            helperText={state.errs.login ? state.errs.login : ''}
            value={state.login}
            name="login"
            label="Tên đăng nhập"
            variant="outlined"
            onChange={handleOnChange}
          />
          <TextField
            error={state.errs.password ? true : false}
            helperText={state.errs.password ? state.errs.password : ''}
            className={classes.textfield}
            value={state.password}
            name="password"
            label="Mật khẩu"
            variant="outlined"
            onChange={handleOnChange}
          />

          <Button variant="outlined" type="submit">
            Đăng nhập
          </Button>
          <Typography style={{ marginTop: 8 }}>
            (Nếu chưa có tài khoản nhấn{' '}
            <Link
              to="/register"
              style={{ color: 'blue' }}
              onClick={() => {
                getErrs({});
              }}
            >
              Đăng kí
            </Link>
            ){' '}
          </Typography>
        </form>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
            {'Phầm mềm yêu cầu Internet, kiểm tra lại đường truyền'}
          </DialogTitle>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Đã rõ
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={ false}
          onClose={handleClose2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
         
        >
          
              <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
              <DialogActions>
          <CircularProgress />
          </DialogActions>
          <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
            {'Đang đăng nhập. Xin chờ!'}
          </DialogTitle>
              </div>
        </Dialog>
      </Paper>
    </div>
  );
}

export default Login;
