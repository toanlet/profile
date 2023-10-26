import _ from 'lodash';
import { useEffect, useState } from 'react';

// import { refineBrFixture } from 'src/utils/helpers';
// import { BaseMessage } from 'src/utils/types';
import { useStableFn } from '../use-stable-fn';
import { useSocket } from './use-socket';
import { SocketEvent } from 'src/util/constant';

/**
 * @param forEvent SocketEvent.ODD_CHANGE_V5
 * @param roomId The fixture id
 * @param callback the called func when client receives @param forEvent
 * @param enabled join room and listen to @param forEvent when this is true
 *
 * ```ts
 *
 * useRoom(SocketEvent.ODD_CHANGE_V5, 'sr:match:1', () => {
 *    your code...
 * })
 *
 * ```
 */
export const useRoom = <T extends SocketEvent>(
  forEvent: T,
  roomId: string | undefined,
  callback: (msg: BaseMessage<T>) => any,
  enabled = true
) => {
  const { socket, status, registerListener } = useSocket();
  const [connected, setConnected] = useState(false);

  const isReady = enabled && status === 'connected' && roomId;

  useEffect(() => {
    if (isReady) {
      const onMatchRoom = (joined: string) => {
        setConnected(joined === roomId);
      };

      socket
        .emit('joinRoom', roomId, onMatchRoom)
        .on('joinedRoom', onMatchRoom);

      // return () => {
      //   socket.emit('leaveRoom', roomId);
      // };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  const handler = useStableFn(callback);

  useEffect(() => {
    if (connected) {
      const cleanup = registerListener(forEvent, (msg: BaseMessage<T>) => {
        if (msg.room !== roomId) return;

        if (
          forEvent === SocketEvent.FIXTURE_CHANGE_V5 &&
          'fixture_info' in msg
        ) {
          // @ts-ignore
          _.set(msg, ['fixture_refined'], refineBrFixture(msg.fixture_info));
        }

        handler(msg);
      });

      return () => {
        cleanup();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerListener, connected, forEvent, roomId]);
};
