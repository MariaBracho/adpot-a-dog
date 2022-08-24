import ListOfDogs from '../component/ListOfDogs'
import useDogUpload from '../context/useDogUpload'

export default function UpladedDogs () {
  const { listOfDogsUpload } = useDogUpload()
  return <ListOfDogs params={listOfDogsUpload} title="Uploaded Dog" />
}
