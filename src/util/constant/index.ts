export const LOCAL_STORE = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_INFO: 'user-info',
};
export const FORMAT_DATE_TIME = 'YYYY-MM-DD HH:mm:ss';

export const MAIN_MENU = [{}];

export enum SocketEvent {
  Identity = 'identity', // login
  UserBalance = 'user_balance', // wallet

  FantasyBalance = 'fantasy_balance-v3',
  UserTransaction = 'user_transaction',
  MyBets = 'my_bet-v3',
  PlaceBet = 'place_bet-v3',
  CountLiveNow = 'count_live_now',
  ODD_CHANGE_V5 = 'odds_change',
  BET_STOP_V5 = 'bet_stop',
  FIXTURE_CHANGE_V5 = 'fixture_change',
  BET_CANCEL_V5 = 'bet_cancel',
  ROLLBACK_BET_CANCEL_V5 = 'rollback_bet_cancel',
  BET_SETTLEMENT = 'bet_settlement',
  ROLLBACK_BET_SETTLEMENT_V5 = 'rollback_bet_settlement',
}
