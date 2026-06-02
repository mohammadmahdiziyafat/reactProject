import { Component } from "react";
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
const Counter = (props) => {
  console.log(props);

  return (
    <div>
      <p> شمارنده من :{props.count || 25  }</p>
      <p> {props.children} </p>
    </div>
  );
};

 

export default Counter;
