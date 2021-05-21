import React from "react";
import img from "../images/coinbase_BG.jpg";

export default class CTA extends React.Component {
	render() {
		return (
			<div className="bg-palette-light w-full">
				<div className="grid grid-cols-2">
					<div className="mx-auto pt-40 pb-16">
						<p className="text-4xl max-w-sm font-semibold">
							Earn up to $28 worth of crypto
						</p>
						<p className="mt-4 text-sm max-w-sm">
							Discover how specific cryptocurrencies work — and
							get a bit of each crypto to try out for yourself.
						</p>
						<button
							style={{ borderRadius: "4px" }}
							className="mt-4 whitespace-nowrap inline-flex items-center justify-center text-sm px-4 py-2
                                border border-transparent shadow-sm text-white bg-palette"
						>
							Start earning
						</button>
					</div>

					<div>
						<img src={img} alt="img" className="float-right" />
					</div>
				</div>
			</div>
		);
	}
}
