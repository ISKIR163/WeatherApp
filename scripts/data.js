export const cardsData = [
  {
    title: "Влажность",
    icon: "./images/humidity.png",
    value: "75 %",
    progress: true,
    type: "range",
    range: { min: 0, max: 100 },
  },
  {
    title: "Давление",
    icon: "./images/barometr.png",
    value: "761",
    progress: true,
    gradient: true,
    type: "status",
    caption: "Повышенное",
  },
  {
    title: "Видимость",
    icon: "./images/visibility.png",
    value: "28 км",
    progress: true,
    type: "status",
    caption: "Нормальная",
  },
  {
    title: "Рассвет",
    icon: "./images/sunrise.png",
    value: "8:42",
    type: "time",
    caption: "Прошло: ",
    extraTime: "2:47",
  },
  {
    title: "Закат",
    icon: "./images/sunset.png",
    value: "16:37",
    type: "time",
    caption: "Осталось: ",
    extraTime: "05:08",
  },
  {
    title: "Сила ветра",
    icon: "./images/airplane.png",
    value: "2 м/с",
    type: "wind",
    direction: "Северо-восточный",
  },
];

export const directionAngles = {
  Северный: 315,
  "Северо-восточный": 0,
  Восточный: 45,
  "Юго-восточный": 90,
  Южный: 135,
  "Юго-западный": 180,
  Западный: 225,
  "Северо-западный": 270,
};

export const carouselDataHour = [
  {
    date: "2024-01-06",
    time: "12:00",
    condition: "broken-clouds",
    temperature_celsius: "-7",
  },
  {
    date: "2024-01-06",
    time: "15:00",
    condition: "broken-clouds",
    temperature_celsius: "-5",
  },
  {
    dateTime: "2024-01-06",
    time: "18:00",
    condition: "broken-clouds",
    temperature_celsius: "-7",
  },
  {
    dateTime: "2024-01-06",
    time: "21:00",
    condition: "broken-clouds",
    temperature_celsius: "-9",
  },
  {
    dateTime: "2024-01-07",
    time: "00:00",
    condition: "broken-clouds",
    temperature_celsius: "-11",
  },
  {
    dateTime: "2024-01-07",
    time: "03:00",
    condition: "broken-clouds",
    temperature_celsius: "-13",
  },
  {
    dateTime: "2024-01-07",
    time: "06:00",
    condition: "broken-clouds",
    temperature_celsius: "0",
  },
  {
    dateTime: "2024-01-07",
    time: "09:00",
    condition: "broken-clouds",
    temperature_celsius: "0",
  },
  {
    dateTime: "2024-01-07",
    time: "12:00",
    condition: "broken-clouds",
    temperature_celsius: "0",
  },
];

export const carouselDataDay = [
  {
    date: "2024-01-07",
    condition: "few-clouds",
    day_temperature: "-17",
    night_temperature: "-11",
  },
  {
    date: "2024-01-08",
    condition: "few-clouds",
    day_temperature: "-16",
    night_temperature: "-8",
  },
  {
    date: "2024-01-09",
    condition: "broken-clouds",
    day_temperature: "-8",
    night_temperature: "-2",
  },
  {
    date: "2024-01-10",
    condition: "broken-clouds",
    day_temperature: "-10",
    night_temperature: "-9",
  },

  {
    date: "2024-01-11",
    condition: "broken-clouds",
    day_temperature: "-12",
    night_temperature: "-10",
  },
  {
    date: "2024-01-12",
    condition: "broken-clouds",
    day_temperature: "-14",
    night_temperature: "-12",
  },
];
