import { useEffect } from 'react';
import type { SocketEvent } from 'src/utils/constants';
import { useStableFn } from '../use-stable-fn';
import { useSocket } from './use-socket';

export function useSocketEventFn(
  forEvent: SocketEvent,
  callback: (...arg: any[]) => any,
  enabled = true,
) {
  const { registerListener } = useSocket();

  const handler = useStableFn(callback);

  useEffect(() => {
    if (!enabled) return;
    const cleanup = registerListener(forEvent, handler);

    return () => {
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerListener, forEvent, enabled]);
}
