import { baseApi } from "../../api/baseApi";


const academicSemisterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemisters: builder.query({
      query: () => ({
        url: '/academic-semisters',
        method: "GET",
        
      }),
    }),
  }),
});

export const { useGetAllSemistersQuery } = academicSemisterApi;
