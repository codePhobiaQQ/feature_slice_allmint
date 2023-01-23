import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('./MainPage/'));

export const Routing = () => {
  return (
    <Routes>
      <Route index path="/" element={<MainPage />} />
      {/* <Route path='*' /> */}
    </Routes>
  );
};
