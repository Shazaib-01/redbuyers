/** @format */

import SidebarItem from './SidebarItem';
import items from '../../utils/data/sidebar.json';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
