import React from 'react'
import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { DataGrid } from '@material-ui/data-grid';


const columns = [
    { field: 'id', headerName: 'S.no', },
    { field: 'productName', headerName: 'Product Name', type:'string',  },
    { field: 'formulation', headerName: 'Formulation', type:'string', },
    { field: 'mfr', headerName: 'Mfr',type: 'string',},
    {field: 'qty',   headerName: 'Qty', type: 'number',},
    {field: 'free',   headerName: 'Free',type: 'number',},
    {field: 'exp',   headerName: 'Exp(mm/yy)', type: 'number',},
    {field: 'pack',   headerName: 'Pack', type: 'number',},
    {field: 'purity',   headerName: 'Pur.pri', type: 'number',},
    {field: 'mrp',   headerName: 'MRP', type: 'number',},
    {field: 'sdisc',   headerName: 'S.Disc', type: 'number',},
    {field: 'margin',   headerName: 'Margin', type: 'number',},
    {field: 'pdisc',   headerName: 'P.Disc', type: 'number',},
    {field: 'vat',   headerName: 'Vat', type: 'number',},
    {field: 'amount',   headerName: 'Amount', type: 'number',},
    
    
  ];
  
  const rows = [
    { id: 1, productName: 'archit', formulation: 'sagar', mfr:'PFI', qty:'10',free:'20',batchNo:'100',exp:'10/20',pack:'kit',purity:'10',mrp:'100',sdisc:'10%',margin:'100',pdisc:'20%',vat:'30%',amount:'1000',},
    { id: 2, productName: 'archit', formulation: 'sagar', mfr:'HIN', qty:'10',free:'20',batchNo:'100',exp:'10/20',pack:'kit',purity:'10',mrp:'100',sdisc:'10%',margin:'100',pdisc:'20%',vat:'30%',amount:'1000',},
    { id: 3, productName: 'archit', formulation: 'sagar', mfr:'MED',qty:'10' ,free:'20',batchNo:'100',exp:'10/20',pack:'kit',purity:'10',mrp:'100',sdisc:'10%',margin:'100',pdisc:'20%',vat:'30%',amount:'1000',},
    { id: 4, productName: 'archit', formulation: 'sagar', mfr:'PFI',qty:'10' ,free:'20',batchNo:'100',exp:'10/20',pack:'kit',purity:'10',mrp:'100',sdisc:'10%',margin:'100',pdisc:'20%',vat:'30%',amount:'1000',},
    { id: 5, productName: 'archit', formulation: 'sagar', mfr: 'HIN', qty:'10' ,free:'20',batchNo:'100',exp:'10/20',pack:'kit',purity:'10',mrp:'100',sdisc:'10%',margin:'100',pdisc:'20%',vat:'30%',amount:'1000',},
    { id: 6, productName: 'archit', formulation: 'sagar', mfr:'MED',qty:'10',free:'20',batchNo:'100',exp:'10/20',pack:'kit',purity:'10',mrp:'100',sdisc:'10%',margin:'100',pdisc:'20%',vat:'30%',amount:'1000',},
    ];

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));





function PurchaseHeadRecord() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
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
      const [selectedDate, setSelectedDate] = React.useState(new Date());

      const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    return (
        <div>
               <div className="flex  justify-between ">
          <div className="flex items-center">
				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
						Purchase Inventory
					</Typography>
				</FuseAnimate>
			</div>
            <div>
      <Button type="button" onClick={handleOpen} style={{backgroundColor:'black',color:'white'}}>
                 Add Inventory 
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
          <Grid container spacing={3}>
        <Grid item xs={12}>
        <form  noValidate autoComplete="off">
        <TextField
          label="GRN No"
          id="outlined-size-small"
          defaultValue="PSIN130001"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        />
         <TextField
          label="Invoice No"
          id="outlined-size-small"
          defaultValue="1234"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        /><br/>
          <TextField
          label="Parcel No"
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        />
          <TextField
          label="Distributor Code"
          id="outlined-size-small"
          defaultValue="DC00001"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        /><br/>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Distributor Name</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Distributor Name"
          inputProps={{
            name: '',
            id: 'outlined-age-native-simple',
          }}
          style={{width:'300px',margin:'6px ',height:'38px'}}
        >
          <option aria-label="None" value="" />
          <option value={10}>India</option>
          <option value={20}>America</option>
          <option value={30}>Australia</option>
        </Select>
      </FormControl>
         <TextField
          label="D.L No."
          id="outlined-size-small"
          defaultValue="DC00001"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        /><br/>
         <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Previous purchase items</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Previous purchase items"
          inputProps={{
            name: '',
            id: 'outlined-age-native-simple',
          }}
          style={{width:'300px',margin:'6px ',height:'38px'}}
        >
          <option aria-label="None" value="" />
          <option value={10}>India</option>
          <option value={20}>America</option>
          <option value={30}>Australia</option>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Previous purchase orders</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Previous purchase orders"
          inputProps={{
            name: '',
            id: 'outlined-age-native-simple',
          }}
          style={{width:'300px',margin:'6px ',height:'38px'}}
        >
          <option aria-label="None" value="" />
          <option value={10}>India</option>
          <option value={20}>America</option>
          <option value={30}>Australia</option>
        </Select>
      </FormControl><br/>
      <TextField
          label="Address"
          id="outlined-size-small"
          defaultValue="Hyderabad"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        />
         <TextField
          label="Actual Amount"
          id="outlined-size-small"
          defaultValue="1000"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        /><br/>
         <TextField
          label="Total margin"
          id="outlined-size-small"
          defaultValue="%"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        />
           <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',  
          }}
          style={{width:'200px',margin:'6px'}}

        />
    </MuiPickersUtilsProvider><br/>
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
        </Fade>
      </Modal>
    </div>
            </div>
            <hr/>
            <div style={{ height: 400, width: '100%',marginTop:'20px' }}>
                <DataGrid rows={rows} columns={columns} pformulationSize={5} checkboxSelection/>
              </div>
              <div>
                  <Button style={{float:'right',backgroundColor:'lightgrey',color:'white'}}>Removerow[F12]</Button>
              </div>
              <div>
              <Grid container spacing={3}>
        <Grid item xs={12}>
        <form  noValidate autoComplete="off">
        <TextField
          label="Products"
          id="outlined-size-small"
          defaultValue="3"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        />
            <TextField
          label="Sub-total"
          id="outlined-size-small"
          defaultValue="6100.00"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        />
            <TextField
          label="PR.Number"
          id="outlined-size-small"
          defaultValue="3"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        /><br/>
            <TextField
          label="Quantity"
          id="outlined-size-small"
          defaultValue="290"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        />
            <TextField
          label="Rounded off"
          id="outlined-size-small"
          defaultValue="0.0"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        />
            <TextField
          label="Free Quantity"
          id="outlined-size-small"
          defaultValue="0"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        /><br/>
             <TextField
          label="Disc Amount"
          id="outlined-size-small"
          defaultValue="0.00"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        />
            <TextField
          label="Invoice Amt"
          id="outlined-size-small"
          defaultValue="6155.00"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        />
            <TextField
          label="Total Vat"
          id="outlined-size-small"
          defaultValue="55.00"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        /><br/>
            <TextField
          label="Cash Amount"
          id="outlined-size-small"
          defaultValue="0"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        />
            <TextField
          label="Adjusted Amt"
          id="outlined-size-small"
          defaultValue="0.00"
          variant="outlined"
          size="small"
          style={{width:'300px',margin:'6px'}}
          
        />
        </form>
        </Grid>
        </Grid>
              </div>

        </div>
    )
}

export default PurchaseHeadRecord;
