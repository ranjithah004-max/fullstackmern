// const State=()=>{
//     let count=0;
//     const increase=()=>{
//         count++;
//         console.log(count);
//     }
//     return (
//         <div>
//             <h1>count:{count}</h1>
//             <button onClick={increase}>Increase</button>
//         </div>
//     )
// }
// export default State

import { useEffect,useState } from "react"

const State=()=>{
    const[count,setcount]=useState(0);
    const[show,setShow]=useState(false);
    useEffect(()=>{
        console.log("from useffect");
    },[show])
    return (
        <div>
            <h1>USESTATE Example</h1>
            <h3>Count:{count}</h3>
            <button onClick={()=>setcount(count+1)}>Increase</button>

            {show && <h2>This is hidden msg</h2>}
            <button onClick={()=>setShow(!show)}>{(show && <p>Hide</p>)||(!show && <p>show</p>)}</button>
        </div>
    )
}
export default State