"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch, cn } from "@nextui-org/react";
import { MoonIcon } from "@/app/_assets/icons/MoonIcon";
import { SunIcon } from "@/app/_assets/icons/SunIcon";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isDark) {
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
      classNames={{
        wrapper: cn("mr-0"),
      }}
      color="primary"
      size="sm"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    ></Switch>
  );
}
