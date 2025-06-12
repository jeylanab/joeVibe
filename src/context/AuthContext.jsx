import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ✅ Load user from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      // Optionally check if token expired here (if you store expiry)
      // if (parsedUser.tokenExpiry && Date.now() > parsedUser.tokenExpiry) {
      //   logout();
      //   return;
      // }

      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (data) => {
    localStorage.setItem('userInfo', JSON.stringify(data));
    setUser(data);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
