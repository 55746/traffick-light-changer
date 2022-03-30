import React, { useState } from "react";
// import Lights from "./Light.jsx";
import "../../styles/index.css";
// import Props from "prop-types";

const Home = () => {
	const [selectcss, setSelectcss] = useState("");
	return (
		<div className="parentDiv">
			<div
				className={
					selectcss == "thisisatrueCondition"
						? "red select circle"
						: "red circle"
				}
				onClick={() => setSelectcss("thisisatrueCondition")}>
				a
			</div>
			<div
				className={
					selectcss == "thisisatrueCondition2"
						? "yellow select circle"
						: "yellow circle"
				}
				onClick={() => setSelectcss("thisisatrueCondition2")}>
				b
			</div>
			<div
				className={
					selectcss == "thisisatrueCondition3"
						? "green select circle"
						: "green circle"
				}
				onClick={() => setSelectcss("thisisatrueCondition3")}>
				c
			</div>
		</div>
	);
};

export default Home;
