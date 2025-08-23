// Migrated from orig_data.js – provides chart data source
export interface DayData {
  day: string;
  count: number;
}

const dataSource: DayData[] = [
  { day: 'Monday', count: 3 },
  { day: 'Tuesday', count: 2 },
  { day: 'Wednesday', count: 3 },
  { day: 'Thursday', count: 4 },
  { day: 'Friday', count: 6 },
  { day: 'Saturday', count: 11 },
];

export function getDataSource(): DayData[] {
  return dataSource;
}

export default { getDataSource };
