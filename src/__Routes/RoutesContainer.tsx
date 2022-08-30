import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "../components/Loading/Loading";

const Home = lazy(() => import("../screen/Home/HomeContainer"));
const Settings = lazy(() => import("../screen/Settings/SettingsContainer"));
const Topics = lazy(() => import("../screen/Topics/TopicsContainer"));

const RoutesContainer = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesContainer;
