import axios from 'axios'

export const getGiphys = async (search) => {
    const data = await axios(`http://api.giphy.com/v1/gifs/search?q=${search}&limit=1&api_key=2ZChSn7gSeqfhbMYjrqpw8cgLJ88LBD5`)
        .then(response => response.data.data[0])
    return data
}