import useCounter from "./useCounter"

const Service =() =>{
    const{count,increment,decrement,reset}=useCounter()
    return (
        <div>
            <h2>About us</h2>
            <h3>customhook</h3>
            <h4>Count:{count}</h4>
            <p>you want any services</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-`</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default Service