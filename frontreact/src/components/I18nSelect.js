import React from "react";
import { LOCALES } from "../i18n/locales";

export const I18nSelect = ({ setLanguage }) => {
  return (
    <label>
      Idioma:
      <select onChange={(event) => setLanguage(event.target.value)}>
        <option value={LOCALES["SPANISH"]}>Español</option>
        <option value={LOCALES["ENGLISH"]}>English</option>
      </select>
    </label>
  );
};
