import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import menuCategoriesSlice from "./slices/menuCategoriesSlice";
import menusSlice from "./slices/menusSlice";
import orderlinesSlice from "./slices/orderlinesSlice";
import ordersSlice from "./slices/ordersSlice";
import tablesSlice from "./slices/tablesSlice";
import companySlice from "./slices/companySlice";
import menusMenuCategoriesLocationsSlice from "./slices/menusMenuCategoriesLocations";
import locationsSlice from "./slices/locationSlice";
import appSlice from "./slices/appSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    cart: cartSlice,
    company: companySlice,
    locations: locationsSlice,
    menuCategories: menuCategoriesSlice,
    menusMenuCategoriesLocations: menusMenuCategoriesLocationsSlice,
    menus: menusSlice,
    orderlines: orderlinesSlice,
    orders: ordersSlice,
    tables: tablesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
