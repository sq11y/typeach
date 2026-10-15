export const matchesForWCAG = [
  {
    bg: "bg",
    fg: 70,
    ui: 60,
    aaa: 80,
  },
  {
    bg: 10,
    fg: 70,
    ui: 60,
    aaa: 80,
  },
  {
    bg: 20,
    fg: 70,
    ui: 70,
    aaa: 80,
  },
  {
    bg: 30,
    fg: 70,
    ui: 70,
    aaa: 90,
  },
  {
    bg: 40,
    fg: 80,
    ui: 70,
    aaa: 90,
  },
  {
    bg: 50,
    fg: 80,
    ui: 70,
    aaa: "fg",
  },
  {
    bg: 60,
    fg: null,
    ui: 10,
    aaa: null,
  },
  {
    bg: 70,
    fg: 30,
    ui: 50,
    aaa: null,
  },
  {
    bg: 80,
    fg: 50,
    ui: 50,
    aaa: 20,
  },
  {
    bg: 90,
    fg: 50,
    ui: 60,
    aaa: 40,
  },
  {
    bg: "fg",
    fg: 50,
    ui: 60,
    aaa: 50,
  },
];

export const colors = [
  "red",
  "orange",
  "yellow",
  "brown",
  "green",
  "turquoise",
  "blue",
  "purple",
  "pink",
  "grey",
] as const;

export const ColorContrast = {
  AAText: 4.5,
  AAInterface: 3,
  AAAText: 7,
  AAAInterface: 4.5,
};

export type ColorContrastKey = keyof typeof ColorContrast;

export const ColorValues = ["bg", 10, 20, 30, 40, 50, 60, 70, 80, 90, "fg"] as const;

export type ColorValue = (typeof ColorValues)[number];
