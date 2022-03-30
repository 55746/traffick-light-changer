import React, { useState } from "react";
import "../../styles/index.css";

const Lights = (props) => {
	const [color, setColor] = useState(props.value);
	return (
		<div
			className="circle"
			style={{ background: color }}
			onClick={() => setColor(props.changeColor)}>
			departure
		</div>
	);
};

export default Lights;
