import React, { Component } from "react";

export default class Result extends Component {
	setStyleResult() {
		return {
			color: this.props.color,
			borderColor: this.props.color,
			fontSize: this.props.fontSize + "px",
		};
	}
	render() {
		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<p>
					Color : {this.props.color} - Fontsize : {this.props.fontSize}px
				</p>
				<div id="content" style={this.setStyleResult()}>
					Nội dung setting
				</div>
			</div>
		);
	}
}
