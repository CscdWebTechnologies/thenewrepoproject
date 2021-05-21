import React from "react";

export default class Bar extends React.Component {
	render() {
		return (
			<div className="w-full bg-palette py-20">
				<div className="max-w-7xl grid grid-cols-3 mx-auto">
					<div className="mx-auto">
						<p className="text-white text-6xl font-semibold">
							$335B
						</p>
						<p className="text-gray-300 mx-auto text-center">
							Quarterly volume traded
						</p>
					</div>

					<div className="mx-auto">
						<p className="text-white text-6xl font-semibold">
							100+
						</p>
						<p className="text-gray-300 mx-auto text-center">
							Countries supported
						</p>
					</div>

					<div className="mx-auto">
						<p className="text-white text-6xl font-semibold">
							56+M
						</p>
						<p className="text-gray-300 mx-auto text-center">
							Verified users
						</p>
					</div>
				</div>
			</div>
		);
	}
}
