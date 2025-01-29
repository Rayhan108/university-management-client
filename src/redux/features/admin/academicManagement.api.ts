import { baseApi } from "../../api/baseApi";

const academicManagementApi=baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createASemister: builder.mutation({
          query: data => ({
            url: '/academic-semisters/create-academic-semister',
            method: "POST",
            body:data,
          }),
        }),
        getAllSemisters: builder.query({
            query: () => ({
              url: '/academic-semisters',
              method: "GET",
            
              
            }),
          }),
      }),
})

export const {useCreateASemisterMutation,useGetAllSemistersQuery} = academicManagementApi;