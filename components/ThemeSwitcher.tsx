"use client";

import { Cat, Moon, Palette, Sparkles, Sun } from "lucide-react";
import type { ComponentType } from "react";
import { themes, type ThemeId } from "../data/themes";
import { useTheme } from "./ThemeProvider";

const themeIcons: Record<ThemeId, ComponentType<{ size?: number }>> = {
  light: Sun,
  catppuccin: Cat,
  githubDark: Moon,
  nord: Palette,
  dracula: Sparkles,
};

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-switcher" aria-label="Theme selector">
      {themes.map((themeOption) => {
        const Icon = themeIcons[themeOption.id];
        const active = themeOption.id === theme;

        return (
          <button
            type="button"
            className={active ? "theme-button active" : "theme-button"}
            key={themeOption.id}
            onClick={() => setTheme(themeOption.id)}
            aria-pressed={active}
            title={themeOption.description}
          >
            <Icon size={16} />
            <span>{themeOption.name}</span>
          </button>
        );
      })}
    </div>
  );
}
