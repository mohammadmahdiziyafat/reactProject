import Counter from './components/Counter.jsx';
import { Component } from 'react';
import './App.css';
// const count = () => {
//     return (
//         <div 
//         className='count'>
//             <h1>شمارنده </h1>

//             <Counter count
//             ={5}/>
//             <Counter isLoginId = {true} myArray =
//             {[1,2,3,4]} />
//             <Counter count = {10}>
//                 این شمارنده من است 
//             </Counter>
//         </div>
//     )
// }
class App extends Component {
    state = {
        counter: 50,
        name: 'mohammadmahdi',
        family: 'ziafat'
    }




    render() {
        const { counter, name, family } = this.state;
        return (
            <div
                className='count'>
                <header>
                    <h1>شمارنده ی من </h1>
                </header>
                <p> {counter} </p>
                <p> {name} </p>
                <p> {family} </p>
            </div>
        )
    }




}
export default App
// export default count