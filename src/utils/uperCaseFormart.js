export default function uperCaseFormart(word) {
  return word.replace(/(^\w)/g, (key) => key.toUpperCase());
}
