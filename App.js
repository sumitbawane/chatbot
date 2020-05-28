import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage } from "./chat";
import "./App.css";
class App extends Component {
	render() {
		const { feed, sendMessage } = this.props;
		return (
			<div>
				<div class='h1-div'>
					<h1>hello bot</h1>
				</div>

				<div class='chat-div'>
					{feed.map((entry) => (
						<p class='para-text'>
							{entry.sender}:{entry.text}
						</p>
					))}
				</div>
				<input
					class='text-bar'
					type='text'
					onKeyDown={(e) =>
						e.keyCode === 13 ? sendMessage(e.target.value) : null
					}
					onKeyUp={(e) =>
						e.keyCode === 13 ? (e.target.value = "") : null
					}></input>
			</div>
		);
	}
}
const mapStatetoProps = (state) => ({
	feed: state,
});

export default connect(mapStatetoProps, { sendMessage })(App);
