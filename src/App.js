import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Feed from './components/Feed/Feed';

function App(props) {
  return (
    <div className="appWrapper">
      <Sidebar />
      <Content state={props.state}
               dispatch={props.dispatch} />
      <Feed /> 
    </div>
  );
}

export default App;
