"use client";

import LanguageSwitcher from "@/app/day-2/components-2/LanguageSwitcher";
import { ShowSwitcher } from "../context/LanguageContext";

export default function showLanguageSwitcher() {
  return (
    <>
      <h1>Language Switcher</h1>
      <ShowSwitcher>
        <LanguageSwitcher />
      </ShowSwitcher>
    </>
  );
}
