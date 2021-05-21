import React from "react";
import logo from "../images/logo.svg";

const company = [
	"About",
	"Careers",
	"Affiliates",
	"Blog",
	"Press",
	"Investors",
	"Legal & privacy",
	"Cookie policy",
	"Learn",
];

const support = [
	"Help center",
	"Contact us",
	"Create account",
	"ID verification",
	"Account information",
	"Payment methods",
	"Account access",
	"Supported crypto",
	"Supported countries",
	"Status",
];

const developers = [
	"Coinbase Cloud",
	"Connect",
	"Commerce",
	"Pro",
	"Bison Trails",
	"WalletLink",
	"Rosetta",
	"USDC",
];

const businesses = ["Prime", "Custody", "Asset Hub", "Commerce", "Developers"];

export default class Footer extends React.Component {
	render() {
		return (
			<div className="w-full bg-white py-20">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-4">
						<div>
							<img src={logo} alt="logo" className="w-28" />
							<select
								className="px-1 py-2 mt-5 border border-gray-300 w-2/3"
								style={{ borderRadius: "4px" }}
							>
								{/*[...Array(10).keys()].map((i) => (
									<option>English</option>
								))*/}
								    <option>English</option>
									<option>Deutsch</option>
									<option>Español - España</option>
									<option>Español - América Latina</option>
									<option>Français - France</option>
									<option>Bahasa Indonesia</option>
									<option>Italiano</option>
									<option>한국어</option>
									<option>Polski</option>
									<option>Português - Brasil</option>
									<option>Português - Portugal</option>
									<option>Pусский</option>
									<option>ไทย</option>
									<option>Türkçe</option>	
							</select>
							<p className="mt-4 text-gray-400">
								© 2021 Coinbase
							</p>
							<p className="mt-1 text-gray-400">
								Blog • Twitter • Facebook
							</p>
						</div>

						<div className="mx-auto">
							<div>
								<p className="font-semibold">Company</p>

								<div className="mt-4">
									{company.map((i) => (
										<p className="text-gray-400">{i}</p>
									))}
								</div>
							</div>

							<div className="mt-4">
								<p className="font-semibold">Learn</p>

								<div className="mt-4">
									{company.map((i) => (
										<p className="text-gray-400">{i}</p>
									))}
								</div>
							</div>
						</div>

						<div className="mx-auto">
							<div>
								<p className="font-semibold">Indivuduals</p>

								<div className="mt-4">
									{[...Array(5).keys()].map((i) => (
										<p className="text-gray-400">
											Buy & Sell
										</p>
									))}
								</div>
							</div>

							<div className="mt-4">
								<p className="font-semibold">Businesses</p>

								<div className="mt-4">
									{businesses.map((i) => (
										<p className="text-gray-400">{i}</p>
									))}
								</div>
							</div>

							<div className="mt-4">
								<p className="font-semibold">Developers</p>

								<div className="mt-4">
									{developers.map((i) => (
										<p className="text-gray-400">{i}</p>
									))}
								</div>
							</div>
						</div>

						<div className="mx-auto">
							<div>
								<p className="font-semibold">Support</p>

								<div className="mt-4">
									{support.map((i) => (
										<p className="text-gray-400">{i}</p>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
