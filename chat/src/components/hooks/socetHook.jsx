import { useContext } from 'react';
import socketContext from '../contexts/socetContext.jsx';

const useSocket = () => useContext(socketContext);

export default useSocket;
