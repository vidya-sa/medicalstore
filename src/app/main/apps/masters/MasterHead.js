import React from 'react'
import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));





const columns = [
    { field: 'id', headerName: 'S.no', width:85,},
    { field: 'code', headerName: 'Code', type:'number', width:85 },
    { field: 'products', headerName: 'Products', },
    { field: 'formulation', headerName: 'Formulation',type: 'string', width:85 },
    {field: 'quantity',   headerName: 'Qty', type: 'number', width:85,},
    {field: 'batch-no',   headerName: 'Batch-No',type: 'number',width:85},
    {field: 'expiry',   headerName: 'Expiry', type: 'string && number',width:90},
    { field: 'price', headerName: 'Price' ,type: 'number',width:85 },
    { field: 'mrp', headerName: 'Mrp' ,type: 'number',width:85},
    { field: 'disc', headerName: 'Disc%' ,type: 'number',width:85 },
    { field: 'vat', headerName: 'Vat%' ,type: 'number',width:85 },
    { field: 'amount', headerName: 'Amount' ,type: 'number',width:85 },
  ];
  
  const rows = [
    { id: 1, products: 'Snow', code: 'Jon', formulation:'Jon', quantity:'10',batchNo:'20',expiry:'dec2020',price:'500',mrp:'100',disc:'50%', vat:'50%',amount:'1000', },
    { id: 2, products: 'Lannister', code: 'Cersei', formulation:'Jon', quantity:'10',batchNo:'20',expiry:'dec2020',price:'500',mrp:'100',disc:'50%', vat:'50%',amount:'1000',},
    { id: 3, products: 'Lannister', code: 'Jaime', formulation:'Jon',quantity:'10' ,batchNo:'20',expiry:'dec2020',price:'500',mrp:'100',disc:'50%', vat:'50%',amount:'1000',},
    { id: 4, products: 'Stark', code: 'Arya', formulation:'Jon',quantity:'10' ,batchNo:'20',expiry:'dec2020',price:'500',mrp:'100',disc:'50%', vat:'50%',amount:'1000',},
    { id: 5, products: 'Targaryen', code: 'Daenerys', formulation: 'Jon', quantity:'10' ,batchNo:'20',expiry:'dec2020',price:'500',mrp:'100',disc:'50%', vat:'50%',amount:'1000',},
    { id: 6, products: 'Melisandre', code: null, formulation:'Jon',quantity:'10',batchNo:'20',expiry:'dec2020',price:'500',mrp:'100',disc:'50%', vat:'50%',amount:'1000',},
    { id: 7, products: 'Clifford', code: 'Ferrara', formulation:'Jon', quantity:'10',batchNo:'20',expiry:'dec2020',price:'500',mrp:'100',disc:'50%', vat:'50%',amount:'1000',},
    { id: 8, products: 'Frances', code: 'Rossini', formulation: 'Jon',quantity:'10',batchNo:'20',expiry:'dec2020',price:'500',mrp:'100',disc:'50%', vat:'50%',amount:'1000',},
    { id: 9, products: 'Roxie', code: 'Harvey', formulation:'Jon', quantity:'10',batchNo:'20',expiry:'dec2020',price:'500',mrp:'100',disc:'50%', vat:'50%',amount:'1000',},
  ];


function MasterHead() {
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
        <div>        <div className="flex  justify-between ">
          <div className="flex items-center">
				{/* <FuseAnimate animation="transition.expandIn" delay={300}>
					<Icon className="text-32">shopping_basket</Icon>
				</FuseAnimate> */}
				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
						Drug Details
					</Typography>
				</FuseAnimate>
			</div>
            <div>
            <Button type="button" onClick={handleOpen} style={{backgroundColor:'black',color:'white'}}>
        Add Drug      </Button>
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
            <div>
            <Grid container spacing={3}>
        <Grid item xs={12}> 
        <form  noValidate autoComplete="off">
        <TextField
          label="Drug Code"
          id="outlined-size-small"
          defaultValue="Drug130001"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'8px'}}
          
        />
         <TextField
          label="Drug Name"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'8px'}}
          
        />
        
        <FormControl variant="outlined" className={classes.formControl} style={{margin:'8px',}}>
        <InputLabel htmlFor="outlined-age-native-simple">Therapeudic/Classification</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Therapeudic/Classification"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
          style={{width:'300px'}}
        >
          <option aria-label="None" value="" />
          <option value={10}>nutrition</option>
          <option value={20}>hygenic</option>
          <option value={30}>Healthy</option>
        </Select>
      </FormControl><br/>
      <FormControl variant="outlined" className={classes.formControl} style={{margin:'8px',}}>
        <InputLabel htmlFor="outlined-age-native-simple">Sub-Therapeudic/Sub-Classification</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Sub-Therapeudic/Sub-Classification"
          inputProps={{
            name: '',
            id: 'outlined-age-native-simple',
          }}
          style={{width:'300px'}}
        >
          <option aria-label="None" value="" />
          <option value={10}>Sub nutrition</option>
          <option value={20}>Sub Classification</option>
          <option value={30}>Sub therapy</option>
        </Select>
      </FormControl>
      <TextField
          label="Indication"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'8px'}}
          
        />
      <FormControl variant="outlined" className={classes.formControl} style={{margin:'8px',}}>
        <InputLabel htmlFor="outlined-age-native-simple">Manufacture Name</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Manufacture Name"
          inputProps={{
            name: '',
            id: 'outlined-age-native-simple',
          }}
          style={{width:'300px'}}
        >
          <option aria-label="None" value="" />
          <option value={10}>India</option>
          <option value={20}>America</option>
          <option value={30}>Australia</option>
        </Select>
      </FormControl><br/>
      <FormControl variant="outlined" className={classes.formControl} style={{margin:'8px',}}>
        <InputLabel htmlFor="outlined-age-native-simple">Formulation</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Formulation"
          inputProps={{
            name: '',
            id: 'outlined-age-native-simple',
          }}
          style={{width:'300px'}}
        >
          <option aria-label="Tablet" value="" />
          <option value={10}>India</option>
          <option value={20}>America</option>
          <option value={30}>Australia</option>
        </Select>
      </FormControl>
      <TextField
          label="Dosage"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'8px'}}
          
        />
         <TextField
          label="Package"
          id="outlined-size-small"
          defaultValue="10"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'8px'}}
          
        /><br/>
        <TextField
          label="schedule"
          id="outlined-size-small"
          defaultValue="H"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'8px'}}
          
        />
        <TextField
          label="schedule"
          id="outlined-size-small"
          defaultValue="50"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'8px'}}
          
        />
         <FormControl variant="outlined" className={classes.formControl} style={{margin:'8px',}}>
        <InputLabel htmlFor="outlined-age-native-simple">Vat select</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Vat Select"
          inputProps={{
            name: '',
            id: 'outlined-age-native-simple',
          }}
          style={{width:'300px'}}
        >
          <option aria-label="" value="" />
          <option value={10}>India</option>
          <option value={20}>America</option>
          <option value={30}>Australia</option>
        </Select>
      </FormControl><br/>
      <Button
        variant="contained"
        className={classes.button}
        style={{margin:'8px',backgroundColor:'black',color:'white'}}
      >
         Add New Vat
      </Button>
      <FormControlLabel
          value="vat"
          control={<Radio color="primary" />}
          label="Vat on purchase price"
          labelPlacement="start"
          
        />
         <FormControlLabel
          value="vat"
          control={<Radio color="primary" />}
          label="Vat on Mrp"
          labelPlacement="start"
          alignItems="justify"
          style={{paddingRight:'10px'}}
          
        /><br/>
     <div style={{display:'flex'}}>
    <Button
        variant="contained"
        className={classes.button}
        startIcon={<SaveIcon />}
        style={{margin:'8px'}}
      >
        Save[F3]
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<EditIcon />}
        style={{margin:'8px'}}
      >
        Edit[F6]
      </Button><br/>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<RotateLeftIcon  />}
        style={{margin:'8px'}}
      >
        Reset[F4]
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<DeleteIcon />}
        style={{margin:'8px'}} 
             >
        Delete[F8]
      </Button>
      </div>
        </form>

        </Grid>
        </Grid>

            </div>
          </div>
        </Fade>
      </Modal>
            </div>
            
        </div>
                <div style={{ height: 400, width: '100%',marginTop:'20px' }}>
                <DataGrid rows={rows} columns={columns} pformulationSize={5} checkboxSelection />
              </div>
              </div>

    )
}

export default MasterHead
