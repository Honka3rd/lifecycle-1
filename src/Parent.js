import React, { Component } from 'react';
class Parent extends Component {

write=(functionName,msg)=>{
  if(msg===undefined)
  {
    msg="";
  }
  console.log("parent",functionName,msg);
}

constructor(props){
  super(props);
  this.write('constructor');
}

render() {
  this.write('render');
    return (
      <div className="App">
        Component lifecycle
      </div>
    );
  }


  componentDidMount()
  {
    this.write('componentDidMount');
  }
}

export default Parent;