
import { TQueryParam, TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createASemister: builder.mutation({
      query: (data) => ({
        url: "/academic-semisters/create-academic-semister",
        method: "POST",
        body: data,
      }),
    }),
    getAllSemisters: builder.query({
      query: (args) => {
        const params = new URLSearchParams()
      
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
  return {
    url: "/academic-semisters",
    method: "GET",
    params:params
  }
      },
      transformResponse: (response : TResponseRedux<TAcademicSemester[]>) => {
        // console.log("inside redux", response);
        return {
          // data: response?.data,
          // meta: response?.meta,
          data: response?.data?.result,
          meta: response?.data?.meta,
        };
        
      },
    }),
  }),
});

export const { useCreateASemisterMutation, useGetAllSemistersQuery } =
  academicManagementApi;
