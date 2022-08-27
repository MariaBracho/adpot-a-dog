import ListOfDogs from 'component/cardDogList/ListOfDogs'
import useDogUpload from 'context/useDogUpload'
import TitleLoadAndDescription from 'component/TitleLoadAndDescription'

export default function DogsUploaded () {
  const { listOfDogsUpload, isLoadListOfUploadedDogs } = useDogUpload()
  return (
    <>
      <TitleLoadAndDescription
        title="Dogs uploaded"
        loader={isLoadListOfUploadedDogs}
      />
      <ListOfDogs listOfDogs={listOfDogsUpload} title="Dogs uploaded" />
    </>
  )
}
