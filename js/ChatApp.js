var React = require("react");
var Message = require("./Message");


var data = ["a","b","c"]
var ChatApp = React.createClass({
    
    render(){
       
        return(
            <div>
            <h1>{this.props.name}</h1>
            <h1> sonali  hello</h1>
            <h1>{this.props.class}</h1>
            <ul>
            {//items
            }
            </ul>
            </div>
            )
    }
})

module.exports  = ChatApp;
