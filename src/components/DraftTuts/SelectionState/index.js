import React, { Component } from 'react';
import PageContent from '../../PageContent';

export default class SelectionStateTut extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<PageContent {...this.props}>
				<p>Hello, world</p>
				<p>This is the starter template!</p>
				<p>Let's create some kick-ass <code>draft-js</code> tutorials.</p>
			</PageContent>
		);
	}
}
