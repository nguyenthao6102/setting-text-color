import React, { Component } from "react";

export default class Reset extends Component {
	resetStyle() {
		this.props.onResetStyle();
	}
	render() {
		return (
			<button
				type="button"
				className="btn btn-primary"
				onClick={() => this.resetStyle()}
			>
				reset
			</button>
		);
	}
}
