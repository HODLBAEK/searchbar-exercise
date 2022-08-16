import "./styles.css";
import JSONDATA from "../src/MOCKDATA.json";
import React from "react";

export default function App() {
	const [searchTerm, setSearchTerm] = React.useState("");
	return (
		<div className="App">
			<h1>Search Bar Exercise</h1>
			<input
				className="search-bar"
				type="text"
				placeholder="Type to Search"
				onChange={(event) => {
					setSearchTerm(event.target.value);
				}}
			/>
			{JSONDATA.filter((val) => {
				if (searchTerm === "") {
					return val;
				} else if (
					val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					val.last_name.toLowerCase().includes(searchTerm.toLowerCase())
				) {
					return val;
				}
			}).map((val, key) => {
				return (
					<div key={key}>
						<p>
							{val.last_name} <br /> {val.first_name}
						</p>
					</div>
				);
			})}
		</div>
	);
}
