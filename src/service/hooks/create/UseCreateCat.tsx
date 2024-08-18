import { useMutation, useQueryClient } from '@tanstack/react-query';
import Http from '../../core/interceptor/Interceptor';
import toast from 'react-hot-toast';
interface FormData {
    title: string;
    code: string;
    parentId: number;
    isActive: boolean;
  }
  
function UseCreateCat() {
    
    const client = useQueryClient();
    const {mutate}= useMutation({
        mutationFn:(data:FormData)=>{
            console.log("gkrmhljrnn")
          
            return Http.post("/api/warehouse/category/v1/create",
               data
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
    return {mutate};
}
export default UseCreateCat;