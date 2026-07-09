import {baseURL} from "./baseURL.jsx";
import axios from 'axios'


export async function FetchCategories(){
    const url =baseURL + '/categories';
    const response =await axios.get(url );
    return response;
}
export async function FetchNews(){

    const url =baseURL + '/search?';
    const response =await axios.get(url+"language=EN&category=Technology" );
    return response;
}

export async function FetchNewsByCategory(category){
    const url =baseURL + '/search?';
    const response =await axios.get(url+"language=EN&category="+category );
    return response;
}

