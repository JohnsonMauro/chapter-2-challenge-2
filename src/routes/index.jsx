import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const Routing = () => (
  <Routes>
    <Route path="/" component={<Dashboard />} />
  </Routes>
);

export default Routing;
