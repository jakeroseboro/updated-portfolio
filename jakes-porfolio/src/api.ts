import Axios from "axios";
import { useQuery } from 'react-query';

export const gitHubCall =async(repo:string)=>{
    const api_key = process.env.REACT_APP_API_KEY;
    const url = `https://api.github.com/repos/jakeroseboro/${repo}`;
    const response = await Axios.get(url, {headers: {Authorization: `token ${api_key}`}})
    return response;
}

export const RepoData = (repo:string) =>
    useQuery('RepoData', () => gitHubCall(repo).then(r => {
        return r.data
    }),
);