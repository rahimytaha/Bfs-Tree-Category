import { useInfiniteQuery } from "@tanstack/react-query";

import Http from "../../core/interceptor/Interceptor";
const UseGetAllData = (query: string, parentId: number | null) => {
  const { data, fetchNextPage, isSuccess } = useInfiniteQuery({
    queryKey: ["categorys", query, parentId],
    initialPageParam: 1,

    queryFn: async ({ pageParam }) => {
      console.log(pageParam);
      const data = await Http.get(
        `/api/warehouse/category/v1/getFilteredTree?PageIndex=${pageParam}&PageSize=5${
          query != "" ? `&FilterData=${query}` : ""
        }${parentId != null ? `&ParentId=${parentId}` : ""}`
      );
      return data.data;
    },
    getNextPageParam: function (lastPage, allPages, lastPageParams) {
      return lastPageParams + 1;
    },
    select: (resault) => {
      return resault.pages.flatMap((e) => (e?.value ? e.value.data : []));
    },
  });
  return { data, isSuccess, fetchNextPage };
};

export default UseGetAllData;
