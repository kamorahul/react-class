var React = require("react");


var Message = React.createClass({
    render(){
    return ( 
        <li>
        {this.props.data}
        </li>
        )
    }
})


module.exports = Message;
