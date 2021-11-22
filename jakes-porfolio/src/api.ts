import Axios from "axios";
import { useQuery } from 'react-query';

export const gitHubCall =async(repo:string[])=>{
    const api_key = process.env.REACT_APP_API_KEY;
    //const url = `https://api.github.com/repos/jakeroseboro/${repo}`;
    let data = []

    for(let i of repo){
        const response = await Axios.get(`https://api.github.com/repos/jakeroseboro/${i}`, {headers: {Authorization: `token ${api_key}`}})
        data.push(response.data)
    }

    const response = repo.map(async(url) => await Axios.get( `https://api.github.com/repos/jakeroseboro/${url}`, {headers: {Authorization: `token ${api_key}`}}))
    //const response = await Axios.get(url, {headers: {Authorization: `token ${api_key}`}})
    return data;
}

export const RepoData = (repo:string[]) =>
    useQuery('RepoData', () => gitHubCall(repo).then(r => {
        return r
    }),
);