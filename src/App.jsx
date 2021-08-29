import "./styles.css";
import { SearchSection } from "./Component/Hotel/SearchSection";
import { Login } from "./Component/Login/Login";
export default function App() {
  return (
    <div className="App">
      <SearchSection />
      {<Login />}
    </div>
  );
}
