
export const end_url = 'https://accounts.spotify.com/authorize';
const redirect_uri = 'http://localhost:3000/';
const client_id = '99e69a55b683405a90400ddbabbb2c87';

const scopes = ['user-read-recently-played', 
'user-read-currently-playing', 
'playlist-read-private', 
'user-top-read'];

export const getAccessToken = hash => {
    const afterHash = hash.substring(1);
    const urlParams = afterHash.split('&');
    const paramSplit = urlParams.reduce((acc, currentValue) => {
        const [key, value] = currentValue.split('=');
        acc[key] = value;
        return acc;
    }, {})

    return paramSplit;
}

export const login_url = `${end_url}?client_id=${client_id}
&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;