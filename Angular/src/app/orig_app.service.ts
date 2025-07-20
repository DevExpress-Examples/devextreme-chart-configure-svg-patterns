import {Injectable} from "@angular/core";

export class Item {
  day: string| undefined;
  count: number | undefined;
}

const dataSource: Item[] = [{
  day: "Monday",
  count: 3
}, {
  day: "Tuesday",
  count: 2
}, {
  day: "Wednesday",
  count: 3
}, {
  day: "Thursday",
  count: 4
}, {
  day: "Friday",
  count: 6
}, {
  day: "Saturday",
  count: 11
}];


@Injectable()
export class Service {
  getDataSource(): Item[] {
    return dataSource;
  }
}
