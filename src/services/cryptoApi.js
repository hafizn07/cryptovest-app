import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
}

const createRequest = (url) => ({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl: process.env.REACT_APP_CRYPTO_API_URL}),
    endpoints:(builder) => ({
        getCryptos : builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails:builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory:builder.query({
            query: ({coinId,timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    })

});

export const {useGetCryptosQuery, useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery} = cryptoApi;