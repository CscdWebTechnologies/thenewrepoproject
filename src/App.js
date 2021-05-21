import "./index.css";

import Navbar from "./components/Nav";
import JumpStart from "./components/JumpStart";
import Table from "./components/Table";
import Earn from "./components/EarnSection";
import Portfolio from "./components/CreatePortfolio";
import Platform from "./components/Platform";
import Bar from "./components/Bar";
import GetStarted from "./components/GetStarted";
import CTA from "./components/Cta";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<JumpStart />
			<Table />
			<Earn />
			<Portfolio />
			<Platform />
			<Bar />
			<GetStarted />
			<CTA />
			<Footer />
		</div>
	);
}

export default App;
