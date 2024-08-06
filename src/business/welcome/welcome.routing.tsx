import { Route, Routes } from 'react-router-dom';
import WelcomeRooberah from '#/business/welcome/welcome-page/welcomeRooberah.tsx';

const WelcomeRouting = () => {
  return (
    <Routes>
      <Route index element={<WelcomeRooberah />} />
    </Routes>
  );
};

export default WelcomeRouting;
