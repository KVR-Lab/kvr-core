export const RuntimeStatuses = [
  'WAITING',
  'RUNNING',
  'PAUSED',
  'COMPLETED',
  'FAILED',
  'CANCELLED',
] as const;

export type RuntimeStatus = (typeof RuntimeStatuses)[number];

export const TerminalRuntimeStatuses: readonly RuntimeStatus[] = [
  'COMPLETED',
  'FAILED',
  'CANCELLED',
];

export interface RuntimeOperation {
  id: string;
  source: string;
  status: RuntimeStatus;
  startedAt: string | null;
  finishedAt: string | null;
  duration: number | null;
  error: string | null;
  result: unknown;
  planId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface RuntimeSnapshot {
  service: 'runtime';
  status: RuntimeStatus;
  running: boolean;
  paused: boolean;
  startedAt: string | null;
  current: RuntimeOperation | null;
  operations: RuntimeOperation[];
}
