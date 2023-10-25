import { Link } from 'react-router-dom';

const TabMenu = () => {
  return (
    <ul>
      {tabs.map((tab) => (
        <li key={tab.id}>
          <Link to={`/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default TabMenu;