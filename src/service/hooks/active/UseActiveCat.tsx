import { useMutation, useQueryClient } from '@tanstack/react-query';
import Http from '../../core/interceptor/Interceptor';
import toast from 'react-hot-toast';
interface FormData {
    id:number
    active:boolean
  }
  
function UseActiveCat() {
    
    const client = useQueryClient();
    const {mutate}= useMutation({
        mutationFn:({active,id}:FormData)=>{
            console.log("gkrmhljrnn")
          
            return Http.post(`/api/warehouse/category/v1/${active ? "activate":"deactivate"}`,
               {
                id:id
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
export default UseActiveCat;