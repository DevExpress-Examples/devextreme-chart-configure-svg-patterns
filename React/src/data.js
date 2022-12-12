const dataSource = [{
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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getDataSource() {
    return dataSource;
  },
};
