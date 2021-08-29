import styled from "styled-components"
const Wraaper = styled.div`
.offer{
background-color: #fa6400;

color:white;
height: 20px;
text-align: center;
width: 100%;
padding: 10px;
}
.ofl{
    margin-left: 3%;
}
`
export function Offer() {
    return <Wraaper>
        <div className="offer">
            END OF SUMMER SALE
            <span className="ofl">Save up to $50 on Express Deal flights, hotels, and rental cars with code SUMMER5 Details</span>
            </div>
        </Wraaper>
}
