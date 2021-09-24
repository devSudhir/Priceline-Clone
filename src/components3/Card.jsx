import { Paper,makeStyles,Button } from "@material-ui/core"
import { v4 as uuid } from 'uuid';

import styled from "styled-components"
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SpaTwoToneIcon from '@material-ui/icons/SpaTwoTone';
import ListIcon from '@material-ui/icons/List';
import { useParams } from "react-router";
import RoomIcon from '@material-ui/icons/Room';
import { Link } from "react-router-dom";

const A = styled.div`

width: 70%;
margin-left: 2rem;


img{
    width: 300px;
    height:250px;
   
}
.orange{
    color:orange;
}
.blue{
    color:skyblue;

}
.headerlist{
    display:flex;
    margin-bottom: 15px;
}
.box4{
    width:20px;
    padding:5px;
    color:white;
    background-color: orange;
    margin-right: 10px;
}
.star{
    margin-left: 5px;
    padding-left: 5px;
    height:25px;
    border-left: 1px solid black;
}
  .chhosebtn {
        padding:5px 30px;
        font-size:large;
        color:white;
        background-color:green;
    }
    .perice{
    font-size:xx-large;
    line-height:15px;
    }
    .colorwhite{
        color:white;
        border: none;
        text-decoration: none;
    }

 `



const useStyles = makeStyles((theme) => ({
  
  marginIcon: {
    marginRight: "1rem",
        height: "20px"

    },
    btn: {
        padding: "2px",
        color: "#307abb",
        textTransform: "none"
    
    },
    orange: {
        color: "orange",
    },
    btn1: {
        marginLeft:"10px",
        padding: "2px",
        color: "orange",
          textTransform:"none"
    },
    listviewbtn: {
        marginLeft: "5px",
        padding: "2px",
        color:"#307abb"
    },
     listviewbtn2: {
         padding: "2px",
         background: "#307abb",
         color:"white"
    },
    mapview: {
        marginLeft:"1rem",
         fontSize:"15px"
    },
    
   

}));
export function Cards({ data }) {
      const a=useParams()
      const classes = useStyles();
    return <A>
        <div className="headerlist"><h3 style={{color:"#631833"}}>
            {data.length} hotels in {a.name}, India
            </h3 >
            <div style={{ marginLeft: "50%" }}><Button variant="outlined" className={classes.listviewbtn2}><ListIcon />Listview</Button>
                <Button variant="outlined" className={classes.listviewbtn}><RoomIcon/>Map View</Button></div>
               
        </div>
        {data.map((e) => {
            return <div key= {uuid()}>
            <Paper key={uuid()} elevation={3} style={{ height: "250px" ,marginBottom:"20px"}} >
            
                <div style={{ display: "flex" }}>
                    <div><img src={e.img} alt="" /></div>
                    <div style={{ width: "45%", textAlign: "left", padding: "10px",paddingLeft:"15px" }}>
                        <Button variant="outlined" className={classes.btn}><MonetizationOnIcon className={classes.marginIcon} />Best deal</Button>
                        <Button variant="outlined" className={classes.btn1} > <SpaTwoToneIcon className={classes.marginIcon} /> Very clean</Button>
                        <h3>{e.title}</h3>
                        <div style={{ display: "flex" }}>
                                <div>{ e.location}</div>
                                <div className="orange"><RoomIcon className={ classes.mapview}/>Map View</div>
                        </div>
                        <div>
                            <p>{e.description}</p>
                        </div>
                        <div style={{ marginTop: "30px", display: "flex" }}>
                                <div className="orange box4">{ e.review}</div>
                                <div className="blue">{e.total_review }</div>
                                <div className="star">{e.star}  Start hotel</div>
                        </div>
                    </div>
                    <div style={{ borderLeft: "1px solid #c8c9c8",paddingLeft:"10px",textAlign:"center"}}>
                            <div style={{ marginTop: "130px" }}> <div className="perice">₹{e.price }</div>
                            <p>per-night</p>
                            <button value={e.id} className="chhosebtn" style={{ padding: "5px 30px", fontSize: "large", color: "white", background: "green" }}><Link to={`/Rooms/${e.id}`} className="colorwhite">Choose</Link></button>
                        </div>
                    </div>
                </div>
                </Paper>
                </div>
     
        })}
            </A>
}