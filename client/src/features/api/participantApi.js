import { apiSlice } from "./apiSlice";

export const participantApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createParticipant: builder.mutation({
      query: (data) => ({
        url: "participant",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Participant"],
    }),

    participantStatus: builder.query({
      query: () => "participant/status",
      providesTags: ["Participant"],
    }),

    getLastParticipants: builder.query({
      query: () => "participant",
      providesTags: ["Participant"],
    }),

    resetParticipantTable: builder.mutation({
      query: (data) => ({
        url: "participant/clean",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Participant"],
    }),

    validateInformation: builder.mutation({
      query: (data) => ({
        url: "participant/validate",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateParticipantMutation,
  useResetParticipantTableMutation,
  useParticipantStatusQuery,
  useGetLastParticipantsQuery,
  useValidateInformationMutation,
} = participantApi;
