import './App.css';
import Button from "@mui/material/Button";

function App() {

  return (
    <>
      <div className="button-container">
        <Button variant="contained">
          Contained
        </Button>
        <Button variant="outlined">
          Outlined
        </Button>
        <Button variant="text">
          Hover OVer Me
        </Button>
      </div>
      <div className="button-container">
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
      </div>
    </>
  );
}

export default App;
