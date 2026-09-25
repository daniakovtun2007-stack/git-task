import Block2 from "./Block2"
function Block1(){
    return(
    <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{width: "500px", height: "500px", borderRadius: "30px", border: "2px solid black"}}>
        <Block2/>
        </div>
        </div>
    )
}
export default Block1