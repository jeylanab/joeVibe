// src/user/UserSidebar.jsx
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaBox, FaUserEdit, FaSignOutAlt, FaHome, FaHeart, FaHeadset } from 'react-icons/fa';

const menuItems = [
  { label: 'Home', path: '/', icon: <FaHome /> },
  { label: 'Shop Products', path: '/products', icon: <FaShoppingCart /> },
  { label: 'My Orders', path: '/user/orders', icon: <FaBox /> },
  { label: 'Wishlist', path: '/user/wishlist', icon: <FaHeart /> },
  { label: 'Edit Profile', path: '/user/profile', icon: <FaUserEdit /> },
  { label: 'Support', path: '/user/support', icon: <FaHeadset /> },
];

const UserSidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg h-screen sticky top-0 hidden md:block">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-orange-600">JoeVibe User</h1>
      </div>

      <nav className="flex flex-col p-4 space-y-2">
        {menuItems.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 font-medium transition 
              ${isActive ? 'bg-orange-100 text-orange-600' : 'hover:bg-orange-50'}`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t mt-auto">
        <button className="flex items-center gap-2 px-4 py-2 w-full text-sm text-red-600 hover:bg-red-100 rounded-lg">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default UserSidebar;
