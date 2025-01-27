import en from "../locales/en.json";
import pl from "../locales/pl.json";
import es from "../locales/es.json";
import de from "../locales/de.json";
import it from "../locales/it.json";
import pt from "../locales/pt.json";
import fr from "../locales/fr.json";

export const locales = {
  en,
  pl,
  es,
  de,
  it,
  pt,
  fr,
};

export type AvailableLanguages = keyof typeof locales;
export const defaultLanguage: AvailableLanguages = "en";
