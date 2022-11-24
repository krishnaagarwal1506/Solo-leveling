import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import img1 from "./assests/imgFolder/1.jpg";
import img2 from "./assests/imgFolder/2.png";
import img3 from "./assests/imgFolder/3.jpg";
import img4 from "./assests/imgFolder/4.png";
import img5 from "./assests/imgFolder/5.jpg";
let imagesList = [img1, img2, img3, img4, img5];

function App() {
  return (
    <div className="App">
      <Header images={imagesList} />
      <Main images={imagesList} />
    </div>
  );
}
export default App;
