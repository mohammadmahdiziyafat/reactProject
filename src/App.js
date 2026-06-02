import Counter from './components/Counter.jsx';

import './App.css';
const count = () => {
    return (
        <div 
        className='count'>
            <h1>شمارنده </h1>
           
            <Counter count
            ={5}/>
            <Counter isLoginId = {true} myArray =
            {[1,2,3,4]} />
            <Counter count = {10}>
                این شمارنده من است 
            </Counter>
        </div>
    )
}
export default count