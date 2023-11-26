import Gantt from "./Components/Gantt";
import "./App.css";
import { Navbar, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="body ">
      <div>
        {/*NavBar starts here */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <img
              alt=""
              src="https://img.icons8.com/cute-clipart/2x/task.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'   '}
            Task Manager
          </Navbar.Brand>
        </Navbar>
        {/*NavBar ends here */}
      </div>
      <Card className="Card">
        {/*Gantt Chart*/}
        <Gantt></Gantt>
      </Card>
    </div>
  );
}

export default App;