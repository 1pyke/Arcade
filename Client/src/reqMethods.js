import axios from "axios";

const BASS_URL = 'http://localhost:5000/api/'
const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTdjMzVmODRkNzEwZmZkYTc5OTMxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDEzNTU0NiwiZXhwIjoxNjU0Mzk0NzQ2fQ.6QwxPfvqNtpNdCJD5fBXn_ctHDL9FbzRxZ76zVjZzoA'


export const publicRequest = axios.create({
    baseURL: BASS_URL,
});
export const userRequest = axios.create({
    baseURL: BASS_URL,
    header: { token: `Bearer ${Token}` }
});