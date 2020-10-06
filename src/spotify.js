const endPoint="https://accounts.spotify.com/authorize";
const clientId="1406a3ae5a3345b3a9923f6c44a426af";
const redirectUrl="http://localhost:3000/";

const scopes=[
    "user-top-read",
    "user-read-recently-played",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
];


export const getAccessToken= ()=>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item)=>{
        var parts= item.split("=");
        initial[parts[0]]=decodeURIComponent(parts[1]);

        return initial;
    },{});
}

export const loginUrl=`${endPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;