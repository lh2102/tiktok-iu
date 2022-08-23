import * as request from '~/utils/request';


export const search = async (q='%20', type = 'less') => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q: q,
                type,
            },
        });
        return res.data
    } catch (error) {
        console.log(error);
    }
};
search();