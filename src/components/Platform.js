import React from "react";
import { ReactComponent as Secure } from "../images/secure.svg";

export default class Platform extends React.Component {
	render() {
		return (
			<div className="w-full py-20 flex flex-col max-w-7xl mx-auto">
				<p className="text-4xl font-semibold text-center">
					The most trusted cryptocurrency platform
				</p>
				<p className="text-lg text-center mt-4 text-gray-400">
					Here are a few reasons why you should choose Coinbase
				</p>
				<div className="grid grid-cols-3 space-x-5 mx-auto mt-10">
					<div className="flex flex-col px-4">
						<span className="mx-auto">
							<Secure />
						</span>

						<p className="mt-10 mx-auto">Secure storage</p>
						<p className="mt-10 max-w-sm mx-auto text-center text-gray-400">
							We store the vast majority of the digital assets in
							secure offline storage.
						</p>
						<p className="text-palette mt-5 text-sm text-center mx-auto">
							Learn how we implement industry best practices for
							account security
						</p>
					</div>

					<div className="flex flex-col px-4">
						<span className="mx-auto">
							<Secure />
						</span>

						<p className="mt-10 mx-auto">Secure storage</p>
						<p className="mt-10 max-w-sm mx-auto text-center text-gray-400">
							We store the vast majority of the digital assets in
							secure offline storage.
						</p>
						<p className="text-palette mt-5 text-sm text-center mx-auto">
							Learn how we implement industry best practices for
							account security
						</p>
					</div>

					<div className="flex flex-col px-4">
						<span className="mx-auto">
							<Secure />
						</span>

						<p className="mt-10 mx-auto">Secure storage</p>
						<p className="mt-10 max-w-sm mx-auto text-center text-gray-400">
							We store the vast majority of the digital assets in
							secure offline storage.
						</p>
						<p className="text-palette mt-5 text-sm text-center mx-auto">
							Learn how we implement industry best practices for
							account security
						</p>
					</div>
				</div>
			</div>
		);
	}
}
