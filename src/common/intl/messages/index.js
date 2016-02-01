import en from './en';

// Note messages for all languages are imported all at once. That's fine for
// almost all apps. If gzipped messages dir is bigger then say 20 kB, congrats!
// Your app is used and useful, so now it's time for further optimization. Since
// messages are in app state, they can be fetched or passed from server easily.


// Version 2 of the react-intl doesn't support nested translations
// so this function turns nested translations into a flat map of
// translations so that we can keep writing nested translations.
//
// If the translations looked like { foo: { bar: 'baz' } } this function
// would produce a new map like { 'foo.bar': 'baz' }
function flattenMessages(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    let value       = nestedMessages[key];
    let prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    }
    else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
}

export default {
  en: flattenMessages(en)
};
