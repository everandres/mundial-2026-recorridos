export type LngLat = [number, number];

export interface Flight {
  id: string;
  code: string;
  iso: string;
  confederation: string;
  color: string;
  from: LngLat;
  to: LngLat;
  fromCity: string;
  toCity: string;
  stage: string;
  isReturn: boolean;
  isKnockout: boolean;
  date: string;
  day: number;
  tStart: number;
  tEnd: number;
  distance_km: number;
  cumBefore: number;
  cumulative_km: number;
  opponent: string | null;
  result: string | null;
}

export interface Team {
  code: string;
  name: string;
  confederation: string;
  iso: string;
  color: string;
  baseCamp: string;
  baseCoords: LngLat;
  eliminated: boolean;
  eliminatedRound: string | null;
  stageReached: string;
  totalKm: number;
  elimCity?: string;
  elimCoords?: LngLat;
  elimDay?: number;
  elimTime?: number;
}

export interface ClashSide {
  code: string;
  iso: string;
  color: string;
}

export interface Clash {
  id: string;
  date: string;
  day: number;
  tMatch: number;
  city: string;
  stadium: string;
  coords: LngLat;
  round: string;
  isKnockout: boolean;
  a: ClashSide;
  b: ClashSide;
  score: string | null;
  penalties: string | null;
  winner: string | null;
}

export interface Stadium {
  city: string;
  stadium: string;
  coords: LngLat;
  country: string;
}

export interface CityNode {
  name: string;
  coords: LngLat;
  isHost: boolean;
  stadium: string;
}

export interface Timeline {
  meta: {
    generated: string;
    status: string;
    day0: string;
    minDay: number;
    maxDay: number;
    dayCount: number;
  };
  teams: Record<string, Team>;
  flights: Flight[];
  clashes: Clash[];
  stadiums: Stadium[];
  cities: CityNode[];
}
