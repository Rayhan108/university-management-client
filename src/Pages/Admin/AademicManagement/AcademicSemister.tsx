import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemistersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";

export type TTableData = Pick<
  TAcademicSemester,
  'name' | 'year' | 'startMonth' | 'endMonth'
>;

const AcademicSemister = () => {
  const [params,setParams]=useState([]);
    const {data:semisterData}=useGetAllSemistersQuery(params);
    
    const tableData = semisterData?.data?.map(
      ({ _id, name, startMonth, endMonth, year }) => ({
        key: _id,
        name,
        startMonth,
        endMonth,
        year,
      })
    );

    const columns: TableColumnsType<TTableData> = [
      {
        title: 'Name',
        key:'name',
        dataIndex: 'name',
        showSorterTooltip: { target: 'full-header' },
        filters: [
          {
            text: 'Autumn',
            value: 'Autumn',
          },
          {
            text: 'Summar',
            value: 'Summar',
          },
          {
            text: 'Fall',
            value: 'Fall',
          },
         
        ],
   
      },
      {
        title: 'Year',
        key:'year',
        dataIndex: 'year',
        
      },
      {
        title: 'Start Month',
        key:'startMonth',
        dataIndex: 'startMonth',
      },
      {
        title: 'End Month',
        key:'endMonth',
        dataIndex: 'endMonth',
      },
    ];

    const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
      if(extra.action==='filter'){
        const queryParams = []
        filters.name?.forEach((item)=>(  queryParams.push({name:"name",value:item})))
setParams(queryParams)
      }
    };
        
    return (
      <Table<TTableData>
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: 'sorter-icon' }}
    />
    );
};

export default AcademicSemister;