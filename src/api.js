import axios from "axios";

const searchImages = async (term) =>{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID -LD7tNpY1h1CMf77Lb8VGqDa8Ey4a7LpAWr3hPN5ZRE'
        },
        params:{
            query: term,
        }
    })
    return response.data.results
}

export default searchImages