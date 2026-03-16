import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const Resume = lazy(() => import("./components/Resume"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <Router>
      <LoadingProvider>
        <Suspense>
          <Routes>
            <Route path="/" element={
              <MainContainer>
                <Suspense>
                  <CharacterModel />
                </Suspense>
              </MainContainer>
            } />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Suspense>
      </LoadingProvider>
    </Router>
  );
};

export default App;
