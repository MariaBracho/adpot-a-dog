import ListOfDogs from 'component/cardDogList/ListOfDogs'
import useFavouriteDogs from 'context/useFavouriteDogs'
import TitleLoadAndDescription from 'component/TitleLoadAndDescription'

export default function FavouriteDog () {
  const { listOfFavoriteDogs, isLoadListOfFavouriteDogs } = useFavouriteDogs()
  return (
    <>
      <TitleLoadAndDescription
        title="Favourite"
        loader={isLoadListOfFavouriteDogs}
      />
      <ListOfDogs title="Favourites" listOfDogs={listOfFavoriteDogs} />
    </>
  )
}
