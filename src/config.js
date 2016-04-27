/**
 * Created by  on 2016/4/1.
 */
export const API_ROOT = (process.env.NODE_ENV === 'production')
    ?'http://localhost:8400/api'
    :'http://localhost:8400/api'
