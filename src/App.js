import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Feed from './components/Feed/Feed';

function App(props) {
  return (
    <div className="appWrapper">
      <Sidebar />
      <Content state={props.state}
               addPost={props.addPost}
               updateNewPostText={props.updateNewPostText}
               addMessage={props.addMessage}
               updateNewMessageText={props.updateNewMessageText} />
      <Feed /> 
    </div>
  );
}

export default App;
