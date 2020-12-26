import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit'




const columns = [
    { field: 'id', headerName: 'S.no', width:75,},
    { field: 'invoiceno', headerName: 'Invoice No', type:'number',width:160,  },
    { field: 'invoicedate', headerName: 'Invoice Date', type:'number',width:160, },
    { field: 'invoiceamount', headerName: 'Invoice Amount',type: 'number',width:160,},
    {field: 'invoicebalanceamount',   headerName: 'Invoice Balance Amount', type: 'number',width:160,},
    {field: 'paidamount',   headerName: 'Paid Amount',type: 'number',width:160,},
    {field: 'remarks',   headerName: 'Remarks', type: 'string',width:160,},
    
  ];
  
  const rows = [
    { id: 1, invoiceno: '20', invoicedate: '13th', invoiceamount:'100', invoicebalanceamount:'10',paidamount:'20',remarks:'good',},
    { id: 2, invoiceno: '30', invoicedate: '14th', invoiceamount:'160', invoicebalanceamount:'10',paidamount:'20',remarks:'good',},
    { id: 3, invoiceno: '40', invoicedate: '15th', invoiceamount:'300',invoicebalanceamount:'10' ,paidamount:'20',remarks:'good',},
    { id: 4, invoiceno: '50', invoicedate: '16th', invoiceamount:'400',invoicebalanceamount:'10' ,paidamount:'20',remarks:'good',},
    { id: 5, invoiceno: '60', invoicedate: '17th', invoiceamount: '500', invoicebalanceamount:'10' ,paidamount:'20',remarks:'good',},
    { id: 6, invoiceno: '70', invoicedate: '18th', invoiceamount:'600',invoicebalanceamount:'10',paidamount:'20',remarks:'good',},
    ];


const useStyles = makeStyles((theme) => ({
    root: {
    //   '& .MuiTextField-root': {
    //     margin: theme.spacing(1),
        
    //   },
    //   '& > *': {
    //     margin: theme.spacing(1),
    //   },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    // selectEmpty: {
    //   marginTop: theme.spacing(2),
    // },
  
  }));

function Finance() {
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
    const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
    return (
        <div>
             <section className="header">
                 <h1 style ={{textAlign:'center'}}>Payment</h1>
            </section>
          <div>
              <div style={{textAlign:'center'}}>
              <form noValidate autoComplete="off">
        <TextField
          label="Payment"
          id="outlined-size-small"
          defaultValue="PAY130001"
          variant="outlined"
          size="small"
          style={{width:'250px'}}
          
        /><br/>
         <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Distributor Name</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Distributor Name"
          inputProps={{
            name: 'Distributor Name',
            id: 'outlined-age-native-simple',
          }}
          style={{width:'250px',minHeight:'30px'}}
          
        >
          <option aria-label="None" value="" />
          <option value={10}>Vidyasagar</option>
          <option value={20}>Archith</option>
          <option value={30}>Naveen</option>
        </Select>
      </FormControl><br/>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Payment type</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Payment type"
          inputProps={{
            name: 'Payment Typer',
            id: 'outlined-age-native-simple',
          }}
          style={{width:'250px',minHeight:'30px'}}
          
        >
          <option aria-label="None" value="" />
          <option value={10}>Cash</option>
          <option value={20}>UPI</option>
          <option value={30}>Debit</option>
        </Select>
      </FormControl><br/>
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
          style={{width:'135px'}}
        />
    </MuiPickersUtilsProvider>
    <div style={{ height: 400, width: '100%',marginTop:'20px' }}>
                <DataGrid rows={rows} columns={columns} pformulationSize={5} checkboxSelection/>
              </div><br/>
              
        
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
        EditIcon={<EditIcon/>}
        style={{marginRight:'60px'}}
      >
        Edit[F6]
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        DeleteIcon={<EditIcon/>}
        style={{marginRight:'60px'}}  
            >
        Reset[F4]
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        EditIcon={<EditIcon/>}
        style={{marginRight:'60px'}}     
         >
        Cancel[F8]
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        EditIcon={<EditIcon/>}
        style={{marginRight:'60px'}}     
         >
        Removerow[F12]
      </Button>
      </div>
        </form>
        </div>
          </div>
          </div>
    )
}

export default Finance
