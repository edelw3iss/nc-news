import axios from "axios";

const api = axios.create({
    baseURL: "https://nc-news-ec.herokuapp.com/api"
})

export function getTopics () {
    return api.get("/topics").then((res) => {
        console.log(res.data.topics);
        return res.data.topics;
    })
}