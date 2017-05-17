'use strict';
//react-native-storage
import {AsyncStorage} from 'react-native';

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function parseJson(response) {
    return response.json();
}

export default function request(url, options) {
    return AsyncStorage.getItem('authrization').then(authrization => {
        if (authrization) {
            let {token, serect} = JSON.parse(authrization);
            url += `$accessToken=${token}&acccessSecret=${serect}`;
        }

        console.log("======="+url);
        return fetch(url, options).then(checkStatus).then(parseJson).then(data => ({data})).catch(error => {
            if (error && error.message === 'Network request failed') {}
            return {error};
        });
    });
}
