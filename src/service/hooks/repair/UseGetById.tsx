import { useQuery } from '@tanstack/react-query';
import Http from '../../core/interceptor/Interceptor';


const UseGetById = (id:string) => {

    const {data,status} = useQuery({
        queryKey: ['categoryById',id],
        queryFn: async () => {
            const data = await Http(`http://213.232.125.164:28080/api/warehouse/category/v1/getById?Id=${id}`);
            return data.data;
        }
    })
  
    // console.log(resualt.data?.value.data)
    return {data,status};
};

export default UseGetById;
