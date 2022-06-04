import axios from "axios";

const BASS_URL = 'http://localhost:5000/api/'
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTgwNjEyNzZkMDkwZjNhMjk1ZjAzNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTQzMDQyMzksImV4cCI6MTY1NDU2MzQzOX0.uA50LUXwh8PI9mLyWmz9ILlhGl4KjF5mNF16WTDl408"


export const publicRequest = axios.create({
    baseURL: BASS_URL,
});
export const userRequest = axios.create({
    baseURL: BASS_URL,
    header: { token: `Bearer ${Token}` }
});