enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

const isWeekend = (day: string) => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    console.log(false);
  } else {
    console.log(true);
  }
};

isWeekend("Sunday");
