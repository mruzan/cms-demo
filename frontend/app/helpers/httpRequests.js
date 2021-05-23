import axios from 'axios';
import appConfig from 'appConfig';
import { history } from '../store';

const scApiUrl = `${appConfig.api_base_url}/${appConfig.api_prefix}`;

const handleRequest = (method, url, auth, additionalOptions) => {
    const ajaxOptions = {
        url: `${scApiUrl}${url}`,
        type: 'json',
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(additionalOptions),
    };

    const request = axios(ajaxOptions);

    request.catch(error => {
        if (error.toString().match(/401/)) {
            history.push('/unauthorized');
        }
    });

    return request;
};

const httpRequests = {
    getQuestions: id => handleRequest('get', `/mode/${id}/questions`, false),

};

export default httpRequests;
