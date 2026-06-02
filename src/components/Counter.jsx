import { Component } from "react";
// component class
// class Counter extends Component {
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
const Counter = (props) => {
  console.log(props);

  return (
    <div>
      <p> شمارنده من :{props.count  || 35}</p>
      <p> {props.children} </p>
    </div>
  );
};
Counter.defaultProps = {
  count : 50
}
export default Counter;
