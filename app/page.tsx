import { LoadingProvider } from "./contexts/LoadingContext";
import "../styles/globals.css";
import Landing from "../components/UI/Landing";

const Home: React.FC = () => {
  return (
    <LoadingProvider>
      <main>
        <Landing />
      </main>
    </LoadingProvider>
  );
};

export default Home;
