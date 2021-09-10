import { Paper } from "@material-ui/core"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import styled from "styled-components"
const Wrapper = styled.div`
position: -webkit-sticky;
.flex{
    display: flex;
    margin-left: 20px;
}
.width60{
    width:60%;
}
.width30{
    width:30%;
    text-align: right;

}
.total{
    padding: 10px;
    color: green;
    border: 1px solid grey;
    font-size: large;
    font-weight: bold;
}
.priceline{
    padding: 10px;
    font-size: small;
    color:#7a738f
    
}
.end{
    margin-top: 10px;
  padding: 2px;
  color: #7a738f ;
}
.blue{
    color: #3b8bf3;
}
.box3{
    padding-top: 1rem;
}
`
export function PaymentCard() {
    const a = useParams();
    const [userRoom,setUserRoom]=useState({})
    useEffect(() => {
        axios.get(`https://sudhir-app-test.herokuapp.com/rooms?id=${a.id}`).then((res) => {
            setUserRoom(res.data[0]);
        })
    }, [])
    

    console.log(userRoom,"userrrom")
    return <Wrapper>
        {userRoom ? <Paper elevation={3} className="box3">
            <div className="flex">
                <div className="width60">Cost per Night
                    <p>1Room</p>
                </div>
                <div className="width30">
                     ₹{userRoom.price}
                </div>
            </div>
            <div className="flex">
                <div className="width60">Number of nights
                 
                </div>
                <div className="width30">
                    X1
                </div>
            </div>
            <div className="flex">
                <div className="width60">Taxes and fees
                 
                </div>
                <div className="width30">
                     ₹240
                </div>
            </div>
            <div className="flex total">
                <div className="width60">Total Charges
                 
                </div>
                <div className="width30">
                     ₹{userRoom.price + 240}
                </div>
            </div>
            <Paper elevation={3} className="priceline">
                <p>Priceline coupons can not be redeemed for this booking.</p>
            </Paper>

        
        </Paper> :""}
        <p className="end">Prices in INR. Prices include all <span className="blue">taxes and fees </span>charged by Priceline.
            </p> 
        </Wrapper>
}
