import React from "react";
import logo from "../images/logo.svg";

export default class Navbar extends React.Component {
	render() {
		return (
			<nav className="w-full bg-white border-b border-gray-200">
				<div>
					<div className="max-w-7xl mx-auto px-6">
						<div className="flex items-center py-3 justify-start space-x-10">
							<div className="flex justify-start w-0 flex-1">
								<img className="w-24" src={logo} alt="logo" />
							</div>
							<nav className="hidden xl:flex space-x-10 h-full">
								<button
									className="text-sm text-black"
									style={{ fontWeight: 500 }}
								>
									Prices
								</button>
								<button
									className="text-sm text-black"
									style={{ fontWeight: 500 }}
								>
									Learn
								</button>
								<button
									className="text-sm text-black"
									style={{ fontWeight: 500 }}
								>
									Individuals
								</button>
								<button
									className="text-sm text-black"
									style={{ fontWeight: 500 }}
								>
									Businesses
								</button>
								<button
									className="text-sm text-black"
									style={{ fontWeight: 500 }}
								>
									Developers
								</button>
								<button
									className="text-sm text-black"
									style={{ fontWeight: 500 }}
								>
									Company
								</button>
							</nav>
							<div className="hidden xl:flex items-center justify-end md:flex-1 xl:w-0">
								<button
									style={{ fontWeight: 500 }}
									className="whitespace-nowrap text-black hover:text-coinbase text-sm"
								>
									Sign in
								</button>
								<button
									style={{ borderRadius: "4px" }}
									className="ml-5 whitespace-nowrap inline-flex items-center justify-center text-sm px-4 py-2
                                border border-transparent shadow-sm text-white bg-palette"
								>
									Get Started
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
