import { Component } from "react";
import { func, PropTypes } from "prop-types";
// component class
// class Counter extends Component {
// static defaultProps = {
// count:50}
//   render() {
//     console.log(this.props);
//     const { count } = this.props;
//     return (
//       <div>
//         <p> شمارنده من :{count}</p>
//       </div>
//     );
//   }
// }
const Counter = ({ inc, dec, reset, count }) => {
  return (
    <div>
      <h1 style={{ color: count === 0 ? "gray" : "white" }}>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec} disabled={count === 0}>
        -
      </button>
      <br />
      <button onClick={reset}>reset</button>
    </div>
  );
};
Counter.propTypes = {
  inc: PropTypes.func,
  dec: PropTypes.func,
  reset: PropTypes.func,
  count: PropTypes.number,
};

export default Counter;
