import 'bulma/css/bulma.min.css';
import Footer from './footer';
import Header from './header';
import Home from './home';
import Navigation from './navigation';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Create from "./pages/Create";


function App() {
  return (
    <div className="App">

      <Navigation />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Buy' element={<Buy />} />
          <Route path="Sell" element={<Sell />} />
          <Route path="Create" element={<Create />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;



// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='Buy' element={<Buy />} />
//         <Route path="Sell" element={<Sell />} />
//         <Route path="Create" element={<Create />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }