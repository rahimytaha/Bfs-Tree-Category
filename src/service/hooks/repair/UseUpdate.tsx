import { useMutation, useQueryClient } from "@tanstack/react-query";
import Http from "../../core/interceptor/Interceptor";
import toast from "react-hot-toast";
interface FormData {
  id: number;
  title: string;
  code: string;
  parentId?: number;
}

function UseUpdate() {
  const client = useQueryClient();
  const { mutate, mutateAsync } = useMutation({
    mutationFn: (data: FormData) => {
      return Http.put("/api/warehouse/category/v1/update", data);
    },
    onSuccess: () => {
        toast.success("تغییرات شما با موفقیت اعمال شد")
      client.invalidateQueries({ queryKey: ["categorys"] });
    },
    onError:()=>{
        toast.success("خطا در انجام عملیات")
    }
  });
  console.log(mutate, mutateAsync);
  return { mutate, mutateAsync };
}
export default UseUpdate;
