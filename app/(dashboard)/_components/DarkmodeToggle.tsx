"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch, cn } from "@nextui-org/react";
import { MoonIcon } from "@/app/_assets/icons/MoonIcon";
import { SunIcon } from "@/app/_assets/icons/SunIcon";

export default function App() {
  console.log("Runed");

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(
    theme === "light" ? false : true || false
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log(isDark);
    if (isDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [isDark, setTheme]);

  if (!mounted) return null;

  return (
    <Switch
      isSelected={isDark}
      onValueChange={setIsDark}
      classNames={{
        wrapper: cn("mr-0"),
      }}
      color="primary"
      size="sm"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
    ></Switch>
  );
}
