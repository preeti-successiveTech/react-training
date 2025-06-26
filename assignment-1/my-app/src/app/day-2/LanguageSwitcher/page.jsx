"use client";

import LanguageSwitcher from "@/components/components-2/LanguageSwitcher";
import { ShowSwitcher } from "../../../context/context/LanguageContext";

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
