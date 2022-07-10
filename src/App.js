
import './App.css';
import AverageRating from './Components/AverageRating';
import Reviews from './Components/Reviews';
import SentimentalAnalysis from './Components/SentimentalAnalysis';
import Sidebar from './Components/SideBar';
import WebVisitors from './Components/WebVisitors';
// import Card from './Components/Card';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      {/* <Card card={props.title}/> */}
      <Reviews />
      <AverageRating />
      <SentimentalAnalysis />
      <WebVisitors />

    </div>
  );
}

export default App;
