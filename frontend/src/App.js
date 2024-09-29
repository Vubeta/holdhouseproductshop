import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routes/routers";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  {
                      publicRoutes.map((route, index) => {
                          const Layout  = DefaultLayout;
                          const Page = route.component;
                          return <Route
                              key={index}
                              path={route.path}
                              element={<Layout><Page/></Layout>}
                          />
                      })
                  }
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
