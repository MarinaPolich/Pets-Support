import { createSlice } from "@reduxjs/toolkit";
import {
  getNoticesByCategories,
  addNotice,
  userNotice,
  getFavUserNotice,
  deleteNotice,
} from "./notices-operations";

const initialState = {
  category: "",
  totalCount: 0,
  filter: "",
  items: [],
  error: null,
  isLoading: false,
};

const noticesSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {
    filterNotices: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNoticesByCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.items = [];
      })

      .addCase(getNoticesByCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.notices;
        state.category = payload.category;
        state.totalCount = payload.totalCount;
      })
      .addCase(getNoticesByCategories.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addNotice.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const newItem = {
          title: payload.title,
          name: payload.name,
          birthdate: payload.birthdate,
          breed: payload.breed,
          location: payload.location,
          comments: payload.comments,
          price: payload.price,
        };
        state.items.filter((item) => {
          if (item._id !== payload._id) {
            state.items.push(newItem);
          }
          return newItem;
        });
      })
      .addCase(addNotice.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(userNotice.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.items = [];
      })
      .addCase(userNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.data;
        state.category = "own";
        state.totalCount = payload.counter;
      })
      .addCase(userNotice.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(getFavUserNotice.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.items = [];
      })
      .addCase(getFavUserNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.favorite;
        state.category = "favorite";
        state.totalCount = payload.counter;
      })
      .addCase(getFavUserNotice.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteNotice.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.items = [];
      })
      .addCase(deleteNotice.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        return state.items.filter((item) => item._id !== payload._id);
      })
      .addCase(deleteNotice.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const { filterNotices } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
