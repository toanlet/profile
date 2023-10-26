import { SocketEvent } from 'src/util/constant';
export interface StatisticItem {
  _home?: string;
  _away?: string;
}

interface Statistics {
  corners?: StatisticItem;
  yellow_cards?: StatisticItem;
  green_cards?: StatisticItem;
  red_cards?: StatisticItem;
  yellow_red_cards?: StatisticItem;
}

interface Clock {
  _match_time: string;
  _remaining_time: string;
  _remaining_time_in_period: string;
}
interface SportEventStatus {
  _status: string;
  _home_score?: string;
  _away_score?: string;
  _match_status?: string;
  _home_gamescore?: string;
  _away_gamescore?: string;
  _home_penalty_score?: string;
  _away_penalty_score?: string;

  statistics?: Statistics;
  clock?: Clock;
  period_scores?: {
    period_score: PeriodScore[] | PeriodScore;
  };
  results?: Result[];
}

interface Score {
  _home_score?: string;
  _away_score?: string;
  _match_status_code: string;
}
interface PeriodScore extends Score {
  _number: string;
  _type: string;
}

interface Result extends Score {}
export module BetRadarV5 {
  export interface Base {
    _event_id: string;
    _timestamp: string;
    _product: string;
  }
  export interface OddChange extends Base {
    sport_event_status?: SportEventStatus;
    odds?: {
      market?: Market | Market[];
    };
  }
  interface Market {
    _id: string;
    _specifiers?: string;
    // _status?: MarketStatus;
    // outcome?: Outcome[];
  }
  export interface BetStop extends Base {
    _groups: string;
    _market_status: string | number;
  }
  export interface FixtureChange extends Base {
    _start_time: string;
  }
  export interface BetCancel {}
  export interface RollbackBetCancel {}
  export interface BetSettlement {}
  export interface RollbackBetSettlement {}
}
interface MyMapping extends Record<SocketEvent, any> {
  [SocketEvent.ODD_CHANGE_V5]: BetRadarV5.OddChange;
  [SocketEvent.BET_STOP_V5]: BetRadarV5.BetStop;
  [SocketEvent.FIXTURE_CHANGE_V5]: BetRadarV5.FixtureChange;
  [SocketEvent.BET_CANCEL_V5]: BetRadarV5.BetCancel;
  [SocketEvent.ROLLBACK_BET_CANCEL_V5]: BetRadarV5.RollbackBetCancel;
  [SocketEvent.BET_SETTLEMENT]: BetRadarV5.BetSettlement;
  [SocketEvent.ROLLBACK_BET_SETTLEMENT_V5]: BetRadarV5.RollbackBetSettlement;
}
export type BaseMessageType<Event extends SocketEvent> = {
  type: SocketEvent;
  room: string;
  message: Event extends never
    ? any
    : MyMapping[Event] extends object
    ? MyMapping[Event]
    : any;
};
export interface BrFixtureInfo {
  // only for event `fixture_change` - raw
  // fixture_info: brEvent.Fixture;
  // // tried to refine fixture
  // fixture_refined: BaseEvent;
}
export type BaseMessage<Event extends SocketEvent = any> =
  Event extends SocketEvent.FIXTURE_CHANGE_V5
    ? BaseMessageType<Event> & BrFixtureInfo
    : BaseMessageType<Event>;
