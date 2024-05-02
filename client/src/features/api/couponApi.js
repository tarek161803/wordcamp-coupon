import { apiSlice } from "./apiSlice";

export const couponApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    seedCoupons: builder.mutation({
      query: (data) => ({
        url: "coupon/seed",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Coupon"],
    }),
    searchCoupon: builder.mutation({
      query: (data) => ({
        url: "coupon",
        method: "POST",
        body: data,
      }),
    }),
    couponsStatus: builder.query({
      query: () => "coupon/status",
      providesTags: ["Coupon"],
    }),
    generatePDF: builder.query({
      query: () => "coupon/pdf-generate",
    }),
    resetCouponTable: builder.mutation({
      query: (data) => ({
        url: "coupon/clean",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Coupon"],
    }),
  }),
});

export const {
  useSeedCouponsMutation,
  useCouponsStatusQuery,
  useResetCouponTableMutation,
  useLazyGeneratePDFQuery,
  useSearchCouponMutation,
} = couponApi;
