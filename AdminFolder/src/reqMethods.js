import axios from "axios";

const BASS_URL = 'http://localhost:5000/api/'
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTdjMzVmODRkNzEwZmZkYTc5OTMxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDMwNTEwOCwiZXhwIjoxNjU0NTY0MzA4fQ.-afTMyQ3r-y1Q6JnHfR1SDEKfx04ucHtmOHocGgAgEA"
//  JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;

console.log(Token)
export const publicRequest = axios.create({
    baseURL: BASS_URL,
});
export const userRequest = axios.create({
    baseURL: BASS_URL,
    headers: { token: `Bearer ${Token}` }
});