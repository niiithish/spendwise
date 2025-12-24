"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Switch } from "../ui/switch";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  return (
    <header className="border-b">
      <div className="mx-auto flex p-5 justify-between items-center">
        <Link href="/" className="block">
          {mounted ? (
            <>
              <Image
                src={theme === "dark" ? "./logo-light.svg" : "./logo-dark.svg"}
                width={100}
                height={100}
                alt="SpendWise"
              />
            </>
          ) : (
            <div style={{ width: 100, height: 100 }} />
          )}
        </Link>
        <div className="flex flex-row items-center justify-center gap-2">
          {mounted ? (
            <>
              <HugeiconsIcon icon={Sun01Icon} size={16} />
              <Switch
                className="cursor-pointer"
                checked={theme === "dark"}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
              />
              <HugeiconsIcon icon={Moon02Icon} size={16} />
            </>
          ) : (
            <div className="w-20" /> /* Placeholder to prevent layout shift */
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
