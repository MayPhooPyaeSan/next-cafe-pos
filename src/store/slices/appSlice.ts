import { config } from "@/config";
import {
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "..";
import { setMenuCategories } from "./menuCategoriesSlice";
import { setMenus } from "./menusSlice";
import { setOrderlines } from "./orderlinesSlice";
import { setOrders } from "./ordersSlice";
import { setTables } from "./tablesSlice";
import { setLocations } from "./locationSlice";
import { setCompany } from "./companySlice";
import { setMenusMenuCategoriesLocations } from "./menusMenuCategoriesLocations";

interface fetchAppDataPayload {
  locationId?: string;
}

export const fetchAppData = createAsyncThunk(
  "app/fetchAppData",
  async (payload: fetchAppDataPayload, thunkAPI) => {
    thunkAPI.dispatch(setAppLoading(true));
    const response = await fetch(
      `${config.apiBaseUrl}/app?locationId=${payload.locationId}`
    );
    const responseJson = await response.json();
    const {
      menus,
      menuCategories,
      locations,
      menusMenuCategoriesLocations,
      tables,
      orders,
      company,
      orderlines,
    } = responseJson;

    thunkAPI.dispatch(setMenus(menus));
    thunkAPI.dispatch(setMenuCategories(menuCategories));
    thunkAPI.dispatch(setLocations(locations));
    thunkAPI.dispatch(
      setMenusMenuCategoriesLocations(menusMenuCategoriesLocations)
    );
    thunkAPI.dispatch(setOrders(orders));
    thunkAPI.dispatch(setOrderlines(orderlines));
    thunkAPI.dispatch(setTables(tables));
    thunkAPI.dispatch(setCompany(company));

    localStorage.setItem("selectedLocationId", locations[0].id);

    thunkAPI.dispatch(setAppLoading(false));
    thunkAPI.dispatch(setInit(true));
  }
);

const initialState = {
  init: false,
  isLoading: false,
  error: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setInit: (state, action: PayloadAction<boolean>) => {
      state.init = action.payload;
    },
    setAppLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setAppLoading, setInit } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;
export const selectMenuCategories = (state: RootState) =>
  state.menuCategories.items;
export const selectMenus = (state: RootState) => state.menus.items;
export const selectMenusMenuCategoriesLocations = (state: RootState) =>
  state.menusMenuCategoriesLocations.items;
export const selectLocations = (state: RootState) => state.locations.items;
export const selectCompany = (state: RootState) => state.company.item;
export const selectTables = (state: RootState) => state.tables.items;
export const selectOrders = (state: RootState) => state.orders.items;
export const selectOrderlines = (state: RootState) => state.orderlines.items;

export const appData = createSelector(
  [
    selectApp,
    selectMenuCategories,
    selectMenus,
    selectMenusMenuCategoriesLocations,
    selectLocations,
    selectCompany,
    selectTables,
    selectOrders,
    selectOrderlines,
  ],
  (
    app,
    menuCategories,
    menus,
    menusMenuCategoriesLocations,
    locations,
    company,
    tables,
    orders,
    orderlines
  ) => {
    return {
      isLoading: app.isLoading,
      menuCategories,
      menus,
      menusMenuCategoriesLocations,
      locations,
      company,
      tables,
      orders,
      orderlines,
    };
  }
);

export default appSlice.reducer;
