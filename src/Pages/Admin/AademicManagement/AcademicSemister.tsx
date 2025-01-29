import { useGetAllSemistersQuery } from "../../../redux/features/admin/academicManagement.api";


const AcademicSemister = () => {
    const {data}=useGetAllSemistersQuery(undefined);
    console.log(data);
    return (
        <div>
          <h1>Academic Semisters</h1>  
        </div>
    );
};

export default AcademicSemister;