import { useMutation, useQueryClient } from '@tanstack/react-query';
import Http from '../../core/interceptor/Interceptor';
import toast from 'react-hot-toast';

  
function UseActiveGroupCat() {
    
    const client = useQueryClient();
    const {mutate}= useMutation({
        mutationFn:(data:number[])=>{
           
          
            return Http.post(`/api/warehouse/category/v1/groupActivate`,
               {
                ids :data
               }
            )
        },
        onSuccess: () => {
            toast.success("تغییرات شما با موفقیت اعمال شد")
          client.invalidateQueries({ queryKey: ["categorys"] });
        },
        onError:()=>{
            toast.success("خطا در انجام عملیات")
        }
    })
    return {activeMutate:mutate};
}
export default UseActiveGroupCat;