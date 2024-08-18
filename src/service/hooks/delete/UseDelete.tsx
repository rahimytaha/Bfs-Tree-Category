import { useMutation, useQueryClient } from "@tanstack/react-query";
import Http from "../../core/interceptor/Interceptor";
import toast from "react-hot-toast";

function UseDelete() {
  const client = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id: number) => {
      return Http.delete(`/api/warehouse/category/v1/remove?Id=${id}`);
    },
    onSuccess: () => {
      toast.success("تغییرات شما با موفقیت اعمال شد");
      client.invalidateQueries({ queryKey: ["categorys"] });
    },
    onError: (err) => {
      console.log(err)
      toast.error("(داده در جای دیگری استفاده شده است) خطا در انجام عملیات");
    },
  });
  return { mutate };
}
export default UseDelete;
