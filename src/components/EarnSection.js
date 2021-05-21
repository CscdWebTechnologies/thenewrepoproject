import React from "react";
import skale from "../images/skale.svg";
import celo from "../images/celo.svg";
import graph from "../images/graph.svg";
import cypher from "../images/cypher.svg";

export default class Earn extends React.Component {
	render() {
		return (
			<div className="px-7 lg:px-16 lg:max-w-7xl w-full mx-auto py-10">
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="my-auto mx-auto lg:mx-0">
						<p className=" text-3xl md:text-4xl font-medium max-w-sm text-center lg:text-left">
							Earn up to $39 worth of crypto
						</p>
						<p className="mt-4 text-sm max-w-sm text-center lg:text-left">
							Discover how specific cryptocurrencies work — and
							get a bit of each crypto to try out for yourself.
						</p>
						<div className="flex">
							<button
								className="bg-palette text-white text-sm px-4 py-3 mt-4 mx-auto lg:mx-0"
								style={{ borderRadius: "4px" }}
							>
								Start earning
							</button>
						</div>
					</div>
					<div className="mt-4 lg:mt-0">
						<div className="border lg:border-none border-gray-200 rounded-sm">
							<div className="px-3 md:px-6 py-5 transition duration-500 hover:shadow-lg rounded-md border-b lg:border-none border-gray-200">
								<div className="flex">
									<img
										src={graph}
										className="w-10 h-10"
										alt="logo"
									/>
									<p className="my-auto ml-4 text-lg lg:text-xl font-medium col-span-2">
										Skale
									</p>
									<p className="my-auto ml-4 text-lg lg:text-xl font-medium hidden lg:block">
										SKL
									</p>
									<p className="my-auto text-right flex-grow text-green-500 col-span-3 font-medium">
										Earn $3 SKL
									</p>
								</div>
							</div>

							<div className="px-3 md:px-6 py-5 transition duration-500 hover:shadow-lg rounded-md border-b lg:border-none border-gray-200">
								<div className="flex">
									<img
										src={skale}
										className="w-10 h-10"
										alt="logo"
									/>
									<p className="my-auto ml-4 text-lg lg:text-xl font-medium col-span-2">
										Skale
									</p>
									<p className="my-auto ml-4 text-lg lg:text-xl font-medium hidden lg:block">
										SKL
									</p>
									<p className="my-auto text-right flex-grow text-green-500 col-span-3 font-medium">
										Earn $3 SKL
									</p>
								</div>
							</div>

							<div className="px-3 md:px-6 py-5 transition duration-500 hover:shadow-lg rounded-md border-b lg:border-none border-gray-200">
								<div className="flex">
									<img
										src={celo}
										className="w-10 h-10"
										alt="logo"
									/>
									<p className="my-auto ml-4 text-lg lg:text-xl font-medium col-span-2">
										Skale
									</p>
									<p className="my-auto ml-4 text-lg lg:text-xl font-medium hidden lg:block">
										SKL
									</p>
									<p className="my-auto text-right flex-grow text-green-500 col-span-3 font-medium">
										Earn $3 SKL
									</p>
								</div>
							</div>

							<div className="px-3 md:px-6 py-5 transition duration-500 hover:shadow-lg rounded-md border-b lg:border-none border-gray-200">
								<div className="flex">
									<img
										src={cypher}
										className="w-10 h-10"
										alt="logo"
									/>
									<p className="my-auto ml-4 text-lg lg:text-xl font-medium col-span-2">
										Skale
									</p>
									<p className="my-auto ml-4 text-lg lg:text-xl font-medium hidden lg:block">
										SKL
									</p>
									<p className="my-auto text-right flex-grow text-green-500 col-span-3 font-medium">
										Earn $3 SKL
									</p>
								</div>
							</div>
						</div>

						<div className="mt-3">
							<p className="ml-8 font-normal text-palette hover:underline">
								View more {">"}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
