import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <div className="appWrapper">
      <Sidebar />
      <Content />
      <Feed /> 
    </div>
  );
}

export default App;
