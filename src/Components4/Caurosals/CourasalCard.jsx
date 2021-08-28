

export default function CourasalCard(props) {
    return (
        <div>
            <div style={{ height: "300px",width:"29vw", margin: "5px",marginBottom:"0", borderRadius:"10px",padding:"0"}}>
                <img style={{height: "100%",width:"100%",borderRadius:"10px"}} src={props.imgsrc} alt="" />
            </div>
        </div>
    )
}