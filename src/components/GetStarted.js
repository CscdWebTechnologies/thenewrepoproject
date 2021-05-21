import React from "react";
import acc from "../images/Account.png";
import bank from "../images/Bank.png";
import hand from "../images/Hand.png";

export default class GetStarted extends React.Component {
	render() {
		return (
			<div className="w-full py-20">
				<div className="max-w-7xl mx-auto">
					<p className="text-4xl font-medium mx-auto text-center">
						Get started in a few minutes
					</p>
					<p className="text-sm mt-4 text-gray-400 text-center mx-auto">
						Coinbase supports a variety of the most popular digital
						currencies.
					</p>

					<div className="grid grid-cols-5 mt-20">
						<div className="mx-auto">
							<img src={acc} alt="img" className="mx-auto" />
							<p className="text-black mt-10  mx-auto">
								Create an account
							</p>
						</div>

						<span className="border-b border-gray-500 h-1/3"></span>

						<div className="mx-auto">
							<img src={bank} alt="img" className="mx-auto" />
							<p className="text-black mt-10  mx-auto">
								Link your account
							</p>
						</div>

						<span className="border-b border-gray-500 h-1/3"></span>

						<div className="mx-auto">
							<img src={hand} alt="img" className="mx-auto" />
							<p className="text-black mt-10  mx-auto">
								Start buying & selling
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
