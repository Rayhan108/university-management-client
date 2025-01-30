
import { TQueryParam, TResponseRedux } from "../../../types";
import { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from "../../../types/academicManagement.type";
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
    getAcademicFaculties: builder.query({
      query: () => {
        return { url: '/academic-faculties', method: 'GET' };
      },
      transformResponse: (response: TResponseRedux<TAcademicFaculty[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: '/academic-faculties/create-academic-faculty',
        method: 'POST',
        body: data,
      }),
    }),
    getAcademicDepartments: builder.query({
      query: () => {
        return { url: '/academic-departments', method: 'GET' };
      },
      transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: '/academic-departments/create-academic-department',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateASemisterMutation, useGetAllSemistersQuery ,useGetAcademicDepartmentsQuery,} =
  academicManagementApi;
