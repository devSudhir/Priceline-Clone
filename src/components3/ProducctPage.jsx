import { Paper,FormControl,InputLabel,InputBase,Select,Card,Button,Box,Switch,Checkbox,ButtonGroup,Slider,TextField} from "@material-ui/core"

import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from "styled-components";
import { useEffect,useState} from "react";
import { Cards } from "./Card"
import { Sidebar } from "./Sidebar"
import axios from "axios"
const A = styled.div`
 text-align: left;
.Ratedesign{
margin-right:1px;
}
h4{
  padding:8px 0px;
  border-bottom: 1px solid grey;
  font-weight: bold;
  font-size: 1.1rem;
}
.text_align{
  width:100%;
  font-size: 12px;
}
.text_align_Box{
    display: flex;
    margin-left: 1rem;
}
`
const useStyles = makeStyles((theme) => ({
 
    float: {
    float: "left",
    },

 
   buutonstyle: {
       textTransform: "none",
       color: "#307abb",
       padding: "4px",
       margin: "20px 5px"
    },
    container: {
       textAlign:"left",
      display: "grid",
       paddingLeft: "3rem"
    
  },
  marginIcon: {
    marginLeft: "1.5rem",
    height: "20px"
    }
  ,
    toogle: {
        marginTop:"5px"
  },
  themdesign: {
     maxWidth:"100%",
    display: "grid",
    gridTemplateColumns:"50% 50%"
      
  },

  ppage: {
    display: "flex",
    
  }


}));
export function ProductPage() {
 const [data, setData] = useState([]);
  useEffect(() => {
        axios.get("http://localhost:3001/hotels").then((res) => {
            setData(res.data)
        })
        .catch((e)=>{
        alert ("data no loades") 
        })     
    }, [])

  const handlesort = (e) => {
    var url = "http://localhost:3001/hotels";
    console.log(e.target.value)
    if (e.target.value === "low") {
      url="http://localhost:3001/hotels?_sort=price&_order=asc"
    }
    else if(e.target.value==="high"){
      url="http://localhost:3001/hotels?_sort=price&_order=desc"
    }
   
    axios.get(url).then((res) => {
            setData(res.data)
        })
}
  const classes = useStyles();



    return <A>
        <Paper  elevation={3}  className={classes.container} >
        <Box className={classes.float}>
          <Button className={classes.buutonstyle}>Popular Filter</Button>
          <select name="sort" onChange={handlesort} style={{padding:"7.5px 5px",background:"#e8f2ff"}}>
            <option value="Sort">Sort</option>
            <option value="low">Low</option>
            <option value="high">High</option>

 
  </select>
            <Button  className={classes.buutonstyle}value="default" variant="outlined" onClick={handlesort}>Default</Button>
            <Button  className={classes.buutonstyle} variant="outlined">FreeCancelation</Button>
            <Button  className={classes.buutonstyle} variant="outlined">New Cleaning Protocol</Button>
            <Button  className={classes.buutonstyle} variant="outlined">Kitchen</Button>
             <Button  className={classes.buutonstyle} variant="outlined">Pay Later</Button>
        </Box>
        <Box className={classes.ppage}>
          <Sidebar />
          <Cards data={data} />
        </Box>
       
         </Paper>
        </A>
}


