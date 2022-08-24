import ListOfDogs from '../component/ListOfDogs'
import useDogsContext from '../context/useDogsContext'

export default function FavouriteDog () {
  const { listOfFavoriteDogs } = useDogsContext()
  return <ListOfDogs params={listOfFavoriteDogs} title="Favourites" />
}
