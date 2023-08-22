import { useContext } from 'react';

import AuthContext from '../contexts/context.jsx';

const useAuth = () => useContext(AuthContext);

export default useAuth;