import React from "react";
import screen from "../images/apps.webp";
import graph from "../images/graph_icon.svg";
import calendar from "../images/calendar.svg";
import vault from "../images/vault.svg";
import mobile from "../images/mobile.svg";

export default class Portfolio extends React.Component {
	render() {
		return (
			<div className="px-16 max-w-7xl w-full mx-auto py-10 border-b border-gray-200">
				<div className="flex">
					<div className="mx-auto">
						<p
							className="font-medium text-center"
							style={{ fontSize: "40px" }}
						>
							Create your cryptocurrency portfolio today
						</p>
						<p className="mt-6 text-center text-gray-400 font-light">
							Coinbase has a variety of features that make it the
							best place to start trading
						</p>
					</div>
				</div>

				<div className="flex mt-10">
					<div className="w-full grid grid-cols-1 xl:grid-cols-3 xl:gap-x-10 lg:px-20 xl:px-0">
						<div className="col-span-1">
							<button className="py-3 grid grid-cols-1 md:grid-cols-7 xl:grid-cols-9 xl:space-x-4 items-start rounded-lg group">
								<div
									className="bg-white rounded-full shadow-xl p-5 col-span-2 md:col-span-1 xl:col-span-2 mx-auto md:mx-0"
									style={{ width: "70px", height: "70px" }}
								>
									<img
										src={graph}
										className="transform w-full m-auto group-hover:scale-125 transition duration-500"
										alt="img"
									/>
								</div>

								<div className="col-span-5 md:col-span-6 xl:col-span-7 w-full text-center md:text-justify mt-5 md:mt-0">
									<p className="text-xl font-medium text-black transition duration-100 group-hover:text-insurerity-light">
										Manage your portfolio
									</p>
									<p className="mt-3 text-md tracking-wide font-normal text-gray-400">
										Buy and sell popular digital currencies,
										keep track of them in the one place.
									</p>
								</div>
							</button>

							<button className="py-3 grid grid-cols-1 md:grid-cols-7 xl:grid-cols-9 xl:space-x-4 items-start rounded-lg group">
								<div
									className="bg-white rounded-full shadow-xl p-5 col-span-2 md:col-span-1 xl:col-span-2 mx-auto md:mx-0"
									style={{ width: "70px", height: "70px" }}
								>
									<img
										src={mobile}
										className="transform w-full m-auto group-hover:scale-125 transition duration-500"
										alt="img"
									/>
								</div>

								<div className="col-span-5 md:col-span-6 xl:col-span-7 w-full text-center md:text-justify mt-5 md:mt-0">
									<p className="text-xl font-medium text-black transition duration-100 group-hover:text-insurerity-light">
										Mobile apps
									</p>
									<p className="mt-3 text-md tracking-wide font-normal text-gray-400">
										Invest in cryptocurrency slowly over
										time by scheduling buys daily, weekly,
										or monthly.
									</p>
								</div>
							</button>

							<button className="py-3 grid grid-cols-1 md:grid-cols-7 xl:grid-cols-9 xl:space-x-4 items-start rounded-lg group">
								<div
									className="bg-white rounded-full shadow-xl p-5 col-span-2 md:col-span-1 xl:col-span-2 mx-auto md:mx-0"
									style={{ width: "70px", height: "70px" }}
								>
									<img
										src={vault}
										className="transform w-full m-auto group-hover:scale-125 transition duration-500"
										alt="img"
									/>
								</div>

								<div className="col-span-5 md:col-span-6 xl:col-span-7 w-full text-center md:text-justify mt-5 md:mt-0">
									<p className="text-xl font-medium text-black transition duration-100 group-hover:text-insurerity-light">
										Vault protection
									</p>
									<p className="mt-3 text-md tracking-wide font-normal text-gray-400">
										For added security, store your funds in
										a vault with time delayed withdrawals.
									</p>
								</div>
							</button>

							<button className="py-3 grid grid-cols-1 md:grid-cols-7 xl:grid-cols-9 xl:space-x-4 items-start rounded-lg group">
								<div
									className="bg-white rounded-full shadow-xl p-5 col-span-2 md:col-span-1 xl:col-span-2 mx-auto md:mx-0"
									style={{ width: "70px", height: "70px" }}
								>
									<img
										src={calendar}
										className="transform w-full m-auto group-hover:scale-125 transition duration-500"
										alt="img"
									/>
								</div>

								<div className="col-span-5 md:col-span-6 xl:col-span-7 w-full text-center md:text-justify mt-5 md:mt-0">
									<p className="text-xl font-medium text-black transition duration-100 group-hover:text-insurerity-light">
										Recurring buys
									</p>
									<p className="mt-3 text-md tracking-wide font-normal text-gray-400">
										Stay on top of the markets with the
										Coinbase app for Android or iOS.
									</p>
								</div>
							</button>
						</div>
						<div className="col-span-2 block">
							<img src={screen} className="w-full" alt="img" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
