import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import LayoutMainWidget from '@widgets';

const MainPage = lazy(() => import('./MainPage/'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutMainWidget />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};
