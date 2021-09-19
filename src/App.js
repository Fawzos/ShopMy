import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CategoriesScreen from "./screens/CategoriesScreen";
import HomeScreen from "./screens/HomeScreen";
import ContactUs from "./screens/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route path="/categories/:category_id" component={CategoriesScreen} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
