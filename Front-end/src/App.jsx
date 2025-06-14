import Header from "./componentes/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (

    <div className="h-screen overflow-hidden flex flex-col">
        <BrowserRouter>
          <Header />

          {/* Configurando rotas para deixar o site mais dinâmico */}
          <main className="flex-1 overflow-y-auto no-scrollbar">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Login" element={<Login/>}/>
            </Routes>
          </main>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
