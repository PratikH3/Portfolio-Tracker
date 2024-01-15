//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import mainImg from "./assets/main-img.svg";

function App() {
  return (
    <>
      <Navbar title="Portfolio Tracker" />
      <div className="d-flex justify-content-center flex-column mx-5">
        <img src={mainImg} alt="" width={250} className="m-auto"/>

        <p>
          More than three million people track their finances with Empower,
          which has more than $22 billion in assets under management (AUM) as of
          April 30, 2022. 1 Besides the ability to track your net worth and
          create a savings plan, clients can sync nearly any investment and bank
          account, including credit cards, retirement, and taxable accounts.
          After downloading all of your financial data, the app can track
          performance, asset allocation, and fees with easy-to-read graphs and
          charts. Investment Checkup The Investment Checkup feature allows
          clients to track investments by account, asset class, or individual
          security. The app allows you to view your asset allocation and whether
          you're underweight or overweight in a particular sector. You can also
          establish a benchmark such as the S&P 500 index, and the app will help
          provide Smart Weighting recommendations. You can also track your
          holdings and their performance against other major market indices,
          exchange-traded funds (ETFs), and mutual fund positions. By analyzing
          asset allocation, the app helps assess your portfolio's risk level and
          recommends a target asset allocation to reduce the risk of loss.
          Investors can examine past performance to see how the portfolio would
          have performed and compare that performance against your target asset
          allocation. The Investment Checkup feature also monitors the costs of
          your investments, including mutual fund fees, to help save you money.
          Retirement Planning The Retirement Planner function can help determine
          if you're meeting your savings and retirement goals. From there, you
          can create a spending plan to meet those goals. Wealth Advisor Clients
          also have the option to work with a personal wealth management advisor
          to discuss their investment needs via FaceTime, email, or phone. The
          app's bank-level security uses a two-step remote authentication
          process. However, the wealth management function charges a fee. 1
        </p>
      </div>
    </>
  );
}

export default App;
