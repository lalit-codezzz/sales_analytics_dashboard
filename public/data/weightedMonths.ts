const wm: Months[] = [
  "Jan",
  "Jan",
  "Jan",
  "Jan",
  "Feb",
  "Feb",
  "Feb",
  "Feb",
  "Feb",
  "Mar",
  "Mar",
  "Mar",
  "Mar",
  "Mar",
  "Apr",
  "Apr",
  "Apr",
  "Apr",
  "Apr",
  "Apr",
  "May",
  "May",
  "May",
  "May",
  "May",
  "May",
  "May",
  "May",
  "June",
  "June",
  "June",
  "June",
  "June",
  "June",
  "June",
  "June",
  "July",
  "July",
  "July",
  "July",
  "July",
  "July",
  "July",
  "July",
  "July",
  "Aug",
  "Aug",
  "Aug",
  "Aug",
  "Aug",
  "Aug",
  "Aug",
  "Aug",
  "Aug",
  "Aug",
  "Sep",
  "Sep",
  "Sep",
  "Sep",
  "Sep",
  "Sep",
  "Sep",
  "Sep",
  "Sep",
  "Sep",
  "Oct",
  "Oct",
  "Oct",
  "Oct",
  "Oct",
  "Oct",
  "Oct",
  "Oct",
  "Oct",
  "Oct",
  "Oct",
  "Nov",
  "Nov",
  "Nov",
  "Nov",
  "Nov",
  "Nov",
  "Nov",
  "Nov",
  "Nov",
  "Nov",
  "Nov",
  "Nov",
  "Dec",
  "Dec",
  "Dec",
  "Dec",
  "Dec",
  "Dec",
  "Dec",
  "Dec",
  "Dec",
  "Dec",
  "Dec",
  "Dec",
];

type Months =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "June"
  | "July"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";

function shuffleArray<T>(arr: readonly T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

export const monthPosition: Record<Months, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  June: 5,
  July: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

export const daysInMonths: Record<Months, number> = {
  Jan: 31,
  Feb: 28,
  Mar: 31,
  Apr: 30,
  May: 31,
  June: 30,
  July: 31,
  Aug: 31,
  Sep: 30,
  Oct: 31,
  Nov: 30,
  Dec: 31,
};

export const weightedMonths: Months[] = shuffleArray(wm);
