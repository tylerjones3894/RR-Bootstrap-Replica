import './App.css';
import TopBar from './components/TopBar';
import Background from './components/Background';
import StoreListings from './components/StoreListings';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
};

export default App;
