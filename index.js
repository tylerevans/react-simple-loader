import { Component, PropTypes } from "react";
import Radium from "radium";

import { StyleRoot } from "radium";

var bounceEffect = Radium.keyframes({
	"0%, 80%, 100%": {
		"webkitTransform": "scale(0)",
		"transform": "scale(0)"
	},
	"40%": {
		"webkitTransform": "scale(1)",
		"transform": "scale(1)"
	}
});

class ReactSimpleLoader extends Component {
	render() {
		const { color, top, backgroundColor, borderRadius, fullScreen } = this.props;

		var styles = {
			spinner: {
				position: "fixed",
				left: "50%",
				top: top ? top : "100px",
				marginLeft: "-60px",
				textAlign: "center",
				background: backgroundColor ? backgroundColor : "rgba(0,0,0,0.5)",
				borderRadius: borderRadius ? borderRadius : "4px",
				zIndex: 9999,
				padding: "20px 20px 14px"
			},
			bounce: {
				width: "18px",
				height: "18px",
				backgroundColor: color ? color : "#000",
				margin: "0 2px",
				borderRadius: "100%",
				display: "inline-block",
				animation: "bouncedelay 1.4s infinite ease-in-out both",
				animationName: bounceEffect
			},
			bounce2: {
				"WebkitAnimationDelay": "-0.16s",
				"animationDelay": "-0.16s"
			},
			bounce3: {
				"WebkitAnimationDelay": "-0.32s",
				"animationDelay": "-0.32s"
			},
			fullscreen: {
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: 9998,
				background: "rgba(0,0,0,0.5)",
				textAlign: "center"
			}
		};

		return (
			<div>
				<StyleRoot>
					<div style={fullScreen && [styles.fullscreen]}>
						<div style={[styles.spinner]}>
							<div style={[styles.bounce, styles.bounce3]}/>
							<div style={[styles.bounce, styles.bounce2]}/>
							<div style={[styles.bounce]}/>
						</div>
					</div>
				</StyleRoot>
			</div>
		);
	}
}

ReactSimpleLoader.propTypes = {
	color: PropTypes.string,
	top: PropTypes.string,
	backgroundColor: PropTypes.string,
	borderRadius: PropTypes.string,
	fullScreen: PropTypes.bool,
};

export default Radium(ReactSimpleLoader);
