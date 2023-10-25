import React, { Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';

const components = {
  dummyTable: React.lazy(() => import('./tabs/DummyTable')),
  dummyChart: React.lazy(() => import('./tabs/DummyChart')),
  dummyList: React.lazy(() => import('./tabs/DummyList')),
};

const App = () => {
  const { tabId } = useParams();
  const TabComponent = components[tabId] || components.dummyTable; // Set a default tab

  return (
    <div>
      <ul>
        <li><Link to="/dummyTable">Dummy Table</Link></li>
        <li><Link to="/dummyChart">Dummy Chart</Link></li>
        <li><Link to="/dummyList">Dummy List</Link></li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <TabComponent />
      </Suspense>
    </div>
  );
};

export default App;
