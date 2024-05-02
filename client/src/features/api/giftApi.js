import { apiSlice } from "./apiSlice";

export const giftApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateGift: builder.mutation({
      query: (data) => ({
        url: "gift/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Gift"],
    }),
    getGiftStatus: builder.query({
      query: () => "gift/status",
      providesTags: ["Gift"],
    }),
  }),
});

export const { useGetGiftStatusQuery, useUpdateGiftMutation } = giftApi;
