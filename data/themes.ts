export type ThemeId = "light" | "catppuccin" | "githubDark" | "nord" | "dracula";

export type ThemeOption = {
  id: ThemeId;
  name: string;
  description: string;
};

export const themes: ThemeOption[] = [
  {
    id: "light",
    name: "Clean Light",
    description: "A polished version of the current portfolio style.",
  },
  {
    id: "catppuccin",
    name: "Catppuccin",
    description: "Pastel mocha colors, soft borders, and subtle cat-ear cards.",
  },
  {
    id: "githubDark",
    name: "GitHub Dark",
    description: "High-contrast dark mode inspired by GitHub's developer UI.",
  },
  {
    id: "nord",
    name: "Nord",
    description: "Cool blue-gray tones with calm technical energy.",
  },
  {
    id: "dracula",
    name: "Dracula",
    description: "A saturated editor-like palette for a playful night mode.",
  },
];
