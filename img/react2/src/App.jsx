import { useRef } from "react"

export default function App() {
    const value = useRef(0);
    const range = useRef(0);
    function drag(){
      value.current.textContent=range.current.value;
    }
    function reset(){
      value.current.textContent = 0;
      range.current.value = 0;
    }
  return (
  <>
  <div style = {{height: "100vh", display: "flex", justifyContent: "center", alignItems : "center"}}>
    <span ref={value}>0</span>
<input 
  ref={range}
  onChange={drag}
  type="range"
  className="form-range"
  min="0"
  max="100"
  defaultValue="0"
  step="1"
  id="customRange3"
  
/>
<button onClick={reset}>Reset</button>
</div>
</>
  )
}
