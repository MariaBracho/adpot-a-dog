import { instance} from "../utils/apiKey"

export default async function getDogs ({limit}={limit:5}){
    const { data: listOfDogs } = await instance.get(`/images/search?limit=${limit}`)
    return listOfDogs.map(({id,url})=>{return {url,image_id:id} })
}