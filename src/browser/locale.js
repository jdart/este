
const matchPrefix = (locale, prefix) =>
  (new RegExp(`^${prefix}`, 'i')).test(locale);

export default (defaultLocale, acceptedLocales) => {
  if (!process.env.IS_BROWSER)
    return defaultLocale;

  const matchLocale = (locale) =>
    matchPrefix(locale, navigator.language || navigator.browserLanguage);

  const matches = acceptedLocales.filter(matchLocale);

  return matches.length ? matches[0] : defaultLocale;
};

