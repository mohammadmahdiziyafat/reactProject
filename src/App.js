import Counter from './components/Counter.jsx';

import { Component } from 'react';
// react hook
import { useState } from 'react'
import './App.css';

// export const count = () => {
//     return (
//         <div
//             className='count'>
//             <h1>شمارنده </h1>

//             <Counter count
//                 ={5} />
//             <Counter isLoginId={true} myArray=
//                 {[1, 2, 3, 4]} />
//             <Counter count={10}>
//                 این شمارنده من است
//             </Counter>
//         </div>
//     )
// }


// class App extends Component {
//     state = {
//         counter: 50,
//         name: 'mohammadmahdi',
//         family: 'ziafat'
//     }
//     render() {
//         const { counter, name, family } = this.state;
//         return (
//             <div
//                 className='count'>
//                 <header>
//                     <h1>شمارنده ی من </h1>
//                 </header>
//                 <p> {counter} </p>
//                 <p> {name} </p>
//                 <p> {family} </p>
//                 <Counter>
//                     my counter
//                 </Counter>
//             </div>
//         )
//     }




// }
const App = () => {
    const [count, setCount] = useState(0);
    // const ChangeState = () => {
    //     setCount(Math.floor(Math.random()*1000))
    // }
    // or 
    const increaseCount = () => {
        setCount(count + 1)
    }
    const decreaseCount = () => {
        if(count === 0)
        {
            return
        }
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div
            className='count'>
            <header className='App-header'>
                <h1 className='H1'>شمارنده ی من </h1>
                
            </header>
           
            <Counter inc={increaseCount} dec={decreaseCount} reset={reset} count={count} />



            {/* <Counter>
                my counter
            </Counter> */}
        </div>
    )
}

export default App
// export default count