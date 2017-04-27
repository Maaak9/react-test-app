	import React from 'react';


	class App extends React.Component {
		constructor(){
			super();
			this.state = {
				txt: 'this is the state txt',
				cat: 0
			}
		}
		update( e ){
			this.setState({txt: e.target.value})
		}
	  	render(){
	    return (
	      <div>
	        <h1>{this.state.txt} - {this.state.cat}</h1>
					<Widget update={this.update.bind(this)}></Widget>
					<Widget update={this.update.bind(this)}></Widget>
					<Widget update={this.update.bind(this)}></Widget>
	      </div>
	    )
	  }
	}

const Widget = (props) =>
	<input type="text" onChange={props.update.bind(this)}/>
	
	/*
	App.propTypes = {
		txt: React.PropTypes.string,
		cat: React.PropTypes.number.isRequired
	}

	App.defaultProps = {
		txt: "this is the default txt"
	}
*/
	//const App = () => <h1>Hello stateless</h1>

	export default App
