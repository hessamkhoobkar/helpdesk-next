"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "@/app/_components/icons/MoonIcon";
import { SunIcon } from "@/app/_components/icons/SunIcon";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [isDark]);

  if (!mounted) return null;

  return (
    <Switch
      isSelected={isDark}
      onValueChange={setIsDark}
      defaultSelected
      color="primary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    >
      Dark mode
    </Switch>
  );
}
