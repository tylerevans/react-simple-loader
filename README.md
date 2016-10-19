# React Simple Loading Component

This is a simple loading component to include in your React application.

To use, do the following:

```
npm install react-simple-loader
```

An example: Sample.jsx

```
import { Component, PropTypes } from "react";
import ReactSimpleLoader from "react-simple-loader";

class Sample extends Component {
	render() {
		const { item } = this.props;

		if (!item) {
			return <ReactSimpleLoader/>
		}

		return (
			<div>Hello World</div>
		);
	}
}

Sample.propTypes = {
	item: PropTypes.object
}

export default Sample;
```

There are various props you may customise:

| prop        | type           | example  |
| ------------- |:-------------:| -----:|
| color      | string | "#fff" |
| top     | string      |   "100px" |
| backgroundColor | string      |  "rgba(0,0,0,0.5)" |
| borderRadius | string      |  "4px" |
| fullScreen | boolean      |  false |

For any issues, please use github issues.
