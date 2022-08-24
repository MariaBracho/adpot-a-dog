export default function nextPage (callback) {
  const onCallback = (lastPage) => lastPage + 1
  callback(onCallback)
}
