import { Component } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import Reset from "./components/Reset";
import Result from "./components/Result";
import SizeSetting from "./components/SizeSetting";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			color: "red",
			fontSize: 15,
		};
		this.onSetColor = this.onSetColor.bind(this);
		this.onChangeSize = this.onChangeSize.bind(this);
		this.onResetStyle = this.onResetStyle.bind(this);
	}
	onSetColor(params) {
		this.setState({
			color: params,
		});
	}
	onChangeSize(params) {
		if (
			this.state.fontSize + params >= 8 &&
			this.state.fontSize + params <= 36
		) {
			this.setState({
				fontSize: this.state.fontSize + params,
			});
		}
	}
	onResetStyle() {
		this.setState({
			color: "red",
			fontSize: 15,
		});
	}
	render() {
		return (
			<div className="container mt-50">
				<div className="row">
					<ColorPicker
						color={this.state.color}
						onReceiveColor={this.onSetColor}
					/>
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<SizeSetting
							fontSize={this.state.fontSize}
							onChangeSize={this.onChangeSize}
						/>
						<Reset onResetStyle={this.onResetStyle} />
					</div>
					<Result color={this.state.color} fontSize={this.state.fontSize} />
				</div>
			</div>
		);
	}
}

export default App;
