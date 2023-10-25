import React, { lazy, Suspense } from 'react';
import tabs from '../data/tabs.json';

const TabContent = ({ match }) => {
  const tabId = match.params.tabId;
  const selectedTab = tabs.find((tab) => tab.id === tabId);

  if (!selectedTab) {
    return <div>Tab not found</div>;
  }

  const LazyTab = lazy(() => import(`./tabs/${selectedTab.path}`));

  return (
    <div>
      <h2>{selectedTab.title}</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyTab />
      </Suspense>
    </div>
  );
};
export default TabContent;