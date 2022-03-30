import React, { useState } from "react";
import "../../styles/index.css";

const Home = () => {
	const [selectcss, setSelectcss] = useState("");
	return (
		<>
			<div className="coloreddiv"></div>
			<div className="parentDiv">
				<div
					className={
						selectcss == "thisisatrueCondition"
							? "red select circle"
							: "red circle"
					}
					onClick={() => setSelectcss("thisisatrueCondition")}></div>
				<div
					className={
						selectcss == "thisisatrueCondition2"
							? "yellow select circle"
							: "yellow circle"
					}
					onClick={() => setSelectcss("thisisatrueCondition2")}></div>
				<div
					className={
						selectcss == "thisisatrueCondition3"
							? "green select circle"
							: "green circle"
					}
					onClick={() => setSelectcss("thisisatrueCondition3")}></div>
			</div>
		</>
	);
};

export default Home;
