import React from "react";
import btc from "../images/bitcoin.png";
import eth from "../images/eth.png";
import lite from "../images/lite.png";
import cash from "../images/bitcoin-cash.png";
import chart from "../images/chart.png";

const data = [
	{
		icon: btc,
		name: "Bitcoin",
		code: "BTC",
		price: "GHS 355,456.75",
		value: -4.86,
	},
	{
		icon: eth,
		name: "Ethereum",
		code: "ETH",
		price: "GHS 169,568.18",
		value: 2.75,
	},
	{
		icon: lite,
		name: "Litecoin",
		code: "LTC",
		price: "GHS 27,582.45",
		value: 5.23,
	},
	{
		icon: cash,
		name: "Bitcoin Cash",
		code: "BCH",
		price: "GHS 236,351.27",
		value: -4.15,
	},
];

function Row({ id, icon, name, code, price, value }) {
	return (
		<>
			<tr className="">
				<td className="pl-10 py-4 whitespace-nowrap text-lg text-gray-500">
					{id}
				</td>
				<td className="pr-6 py-4 whitespace-nowrap">
					<div className="flex items-center">
						<div className="flex-shrink-0 h-10 w-10">
							<img
								alt="logo"
								className="h-10 w-10 rounded-full"
								src={icon}
							/>
						</div>
						<div className="ml-4">
							<div className="text-lg font-normal text-gray-900">
								{name}
							</div>
						</div>
						<div className="ml-4">
							<div className="text-lg font-normal text-gray-400">
								{code}
							</div>
						</div>
					</div>
				</td>
				<td className="py-4 whitespace-nowrap text-lg text-gray-500">
					{price}
				</td>
				<td
					className={`py-4 whitespace-nowrap text-lg ${
						value < 0 ? "text-red-600" : "text-green-600"
					}`}
				>
					{value < 0 ? `${value}%` : `+${value}%`}
				</td>
				<td className="py-4 whitespace-nowrap text-lg text-gray-500">
					<img className="h-10 w-20" src={chart} alt="graph" />
				</td>
				<td className="py-4 whitespace-nowrap text-sm font-normal">
					<button
						style={{ borderRadius: "4px" }}
						className="text-white bg-palette-green py-3 px-5"
					>
						Buy
					</button>
				</td>
			</tr>
		</>
	);
}

export default class Table extends React.Component {
	render() {
		return (
			<div className="flex flex-col px-0 md:px-10 lg:px-16 lg:max-w-7xl w-full mx-auto">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div
							className="shadow overflow-hidden border-b border-gray-200"
							style={{ borderRadius: "4px" }}
						>
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-white">
									<tr className="hidden lg:table-row">
										<th
											scope="col"
											className="pl-10 py-5 text-left text-xs text-gray-600 font-light tracking-wider"
										>
											#
										</th>
										<th
											scope="col"
											className="pr-3 py-5 text-left text-xs text-gray-600 font-light tracking-wider"
										>
											Name
										</th>
										<th
											scope="col"
											className="pr-3 py-5 text-left text-xs text-gray-600 font-light tracking-wider"
										>
											Price
										</th>
										<th
											scope="col"
											className="pr-3 py-5 text-left text-xs text-gray-600 font-light tracking-wider"
										>
											Value
										</th>
										<th
											scope="col"
											className="pr-3 py-5 text-left text-xs text-gray-600 font-light tracking-wider"
										>
											Chart
										</th>
										<th
											scope="col"
											className="pr-3 py-5 text-left text-xs text-gray-600 font-light tracking-wider"
										>
											Trade
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{data.map((data, index) => {
										return (
											<Row
												id={index + 1}
												icon={data.icon}
												name={data.name}
												code={data.code}
												price={data.price}
												value={data.value}
											/>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
