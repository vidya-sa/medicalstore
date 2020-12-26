import React from 'react';
 import { makeStyles } from '@material-ui/core/styles';
 import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';





const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

}));    

function Crm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
    return (
        <div>
            <div className="header">
                 <h1 style ={{textAlign:'center'}}>Customer details</h1>
            </div>
            <div className='flex  justify-between'>
            <div>
                <h2>General details</h2>
             
 </div>
 <div>
 <Button type="button" onClick={handleOpen} style={{backgroundColor:'black',color:'white'}}>
        Add Details
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <div style={{textAlign:'center'}}>
      <Grid container spacing={3}>
        <Grid item xs={12}> 
        <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Customer Code"
          id="outlined-size-small"
          defaultValue="Customer Code"
          variant="outlined"
          size="small"
          style={{width:'250px',paddingRight:'10px'}}
          
        />
         <TextField
          label="Customer Name"
          id="outlined-size-small"
          defaultValue="Customer Name"
          variant="outlined"
          size="small"
          style={{width:'250px',paddingRight:'10px'}}
          
        />

<TextField
          label="Family Name"
          id="outlined-size-small"
          defaultValue="Family Name"
          variant="outlined"
          size="small"
          style={{width:'250px',paddingRight:'10px'}}
          
        />
       
         <TextField
          label="Age"
          id="outlined-size-small"
          defaultValue="Age"
          variant="outlined"
          size="small"
          style={{width:'70px',paddingRight:'10px'}}
          
        /><br/><br/>

        <label>Gender:</label>
                 <FormControlLabel
          value="male"
          control={<Radio color="primary" />}
          label="Male"
          labelPlacement="start"
          
        />
         <FormControlLabel
          value="Female"
          control={<Radio color="primary" />}
          label="Female"
          labelPlacement="start"
          alignItems="justify"
          style={{paddingRight:'10px'}}
          
        />
          <TextField
          label="Credit Limit"
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{width:'250px',paddingRight:'10px'}}
          
        />
    </form>
        </Grid>
        </Grid>
        </div>

    <section>
                <h2>Contact details</h2>
                <hr/>
            </section><br/>
           
            <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>  
        <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Address"
          id="outlined-size-small"
          defaultValue="Address"
          variant="outlined"
          size="small"
          style={{width:'300px'}}
          
        />
           <TextField
          id="outlined-size-small"
          defaultValue="Area/Locality"
          variant="outlined"
          size="small"
          style={{width:'300px'}}
          
        /><br/>
           <TextareaAutosize aria-label="minimum height" 
           rowsMin={3} 
           placeholder="Details"
           id="outlined-size-small"
            variant="outlined" 
           size="small"
           style={{width:'300px',paddingTop:'10px', border:'1px solid lightgray',marginLeft:'10px',borderRadius:'2px'}}
           /><br/>
                 <TextField
          label="City"
          id="outlined-size-small"
          defaultValue="Hyderabad"
          variant="outlined"
          size="small"
          style={{width:'300px'}}
          
        />
        </form>
        
        </Grid>
        <Grid item xs={12} sm={4}> 
        <form className={classes.root} noValidate autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Country</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Country"
          inputProps={{
            name: 'Country',
            id: 'outlined-age-native-simple',
          }}
          style={{width:'300px'}}
        >
          <option aria-label="None" value="" />
          <option value={10}>India</option>
          <option value={20}>America</option>
          <option value={30}>Australia</option>
        </Select>
      </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">State</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="State"
          inputProps={{
            name: 'State',
            id: 'outlined-age-native-simple',
          }}
          style={{width:'300px'}}
        >
          <option aria-label="None" value="" />
          <option value={10}>Andhra pradesh</option>
          <option value={20}>Telangana</option>
          <option value={30}>Rayalaseema</option>
        </Select>
      </FormControl>
      <TextField
          label="Pincode"
          id="outlined-size-small"
          defaultValue="502319"
          variant="outlined"
          size="small"
          style={{width:'300px'}}
          
        />
        </form>
        </Grid>
        <Grid item xs={12} sm={4}> 
        <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Phone NUmber"
          id="outlined-size-small"
          type="number"
          defaultValue="8686540587"
          variant="outlined"
          size="small"
          style={{width:'300px'}}
           />
                <TextField
          label="Email"
          id="outlined-size-small"
          placeholder="@gmail.com"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{width:'300px'}}
           />
             <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Alert Type</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Alert type"
          inputProps={{
            name: 'State',
            id: 'outlined-age-native-simple',
          }}
          style={{width:'150px'}}
        >
          <option aria-label="alert type" value="" />
          <option value={10}>Sms</option>
          <option value={20}>Email</option>
        </Select>
      </FormControl><br/>
      <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          value="start"
          label="Send Customer ID by sms"
          labelPlacement="start"
          style={{flexDirection:'row'}}
        />
      </FormGroup>
    </FormControl>
    
        </form>
        </Grid>
        
        <div style={{marginLeft:'auto',marginRight:'auto'}}>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<SaveIcon />}
        style={{marginRight:'60px'}}
      >
        Save[F3]
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<EditIcon/>}
        style={{marginRight:'60px'}}
      >
        Edit[F6]
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<RotateLeftIcon/>}
        style={{marginRight:'60px'}}  
            >
        Reset[F4]
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<DeleteIcon/>}
        style={{marginRight:'60px'}}     
         >
        Cancel[F8]
      </Button>
      
      
   
    </div>

        </Grid>
        </div>
          </div>
        </Fade>
      </Modal>
 </div>
 </div>
 <hr/>

            


        </div>
    )
}

export default Crm
