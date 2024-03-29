import { Header } from "./components/Header";
import { SummaryTable } from "./components/SummaryTable";
import "./styles/globals.css";
import "./lib/dayjs";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-full max-w-5xl flex flex-col gap-16">
        <Header />
        <SummaryTable />
      </div>
    </div>
  );
}

export default App;
