import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { io } from 'socket.io-client';
import { SocketEvent } from 'src/util/constant';



const socket = io(process.env.REACT_APP_SOCKET_URL!, {
  forceNew: true,
  autoConnect: false,
});

type UnregisterFunc = () => void;
type CallbackFunc = (...args: any[]) => any;

interface SocketIOInterface {
  socket: SocketEvent;
  status: ConnectionStatus;
  error?: any;
  registerListener: (forEvent: SocketEvent, cb: CallbackFunc) => UnregisterFunc;
  unregisterListener: (forEvent: SocketEvent, cb: CallbackFunc) => void;
}

export const IoContext = createContext<SocketIOInterface>({
  socket,
  status: 'disconnected',
  error: undefined,
  registerListener: () => () => {},
  unregisterListener: () => {},
});

export type ConnectionStatus = 'connecting' | 'connected' | 'disconnected';

export const useSocket = () => useContext(IoContext)!;

export const SocketProvider: React.FC = ({ children }) => {
  const [status, setStatus] = useState<ConnectionStatus>('disconnected');
  const [error, setError] = useState<any>();

  const registerListener = useCallback(
    (forEvent: SocketEvent, callback: any) => {
      socket.on(forEvent, callback);

      return () => {
        socket.off(forEvent, callback);
      };
    },
    [],
  );

  const unregisterListener = useCallback(
    (forEvent: SocketEvent, callback?: (...args: any[]) => any) => {
      socket.off(forEvent, callback);
    },
    [],
  );

  useEffect(() => {
    socket
      .connect()
      .on('connect_error', (error) => {
        setError(error);
      })
      .on('disconnect', () => {
        setStatus('disconnected');
      })
      .on('connect', () => {
        setStatus('connected');
      });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <IoContext.Provider
      value={{ socket, error, status, registerListener, unregisterListener }}>
      {children}
    </IoContext.Provider>
  );
};
