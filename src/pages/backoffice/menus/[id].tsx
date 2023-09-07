import DeleteDialog from "@/components/DeleteDialog";
import Loading from "@/components/Loading";
import { config } from "@/config";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { appData } from "@/store/slices/appSlice";
import { fetchMenusMenuCategoriesLocations } from "@/store/slices/menusMenuCategoriesLocations";
import { removeMenu, updateMenu } from "@/store/slices/menusSlice";
import { getSelectedLocationId } from "@/utils/client";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteIcon from "@mui/icons-material/Delete";
import { Autocomplete, Box, Button, Checkbox, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { Menus as Menu } from "@prisma/client";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const EditMenu = () => {
  const router = useRouter();
  const menuId = router.query.id as string;
  const { isLoading, menus } = useAppSelector(appData);
  const menu = menus.find((menu) => menu.id === Number(menuId)) as Menu;
  const [menuToUpdate, setMenuToUpdate] = useState<Partial<Menu>>();
  const dispatch = useAppDispatch();
  const selectedLocationId = getSelectedLocationId() as string;
  const [open, setOpen] = useState(false);

  const handleUpdateMenu = async () => {
    const response = await fetch(`${config.apiBaseUrl}/menus`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...menuToUpdate,
        id: menu.id,
      }),
    });
    const menuUpdated = await response.json();
    dispatch(updateMenu(menuUpdated));
    dispatch(fetchMenusMenuCategoriesLocations(selectedLocationId));
  };

  const handleDeleteMenu = async () => {
    await fetch(`${config.apiBaseUrl}/menus?id=${menuId}`, {
      method: "DELETE",
    });
    dispatch(removeMenu(menu));
    dispatch(fetchMenusMenuCategoriesLocations(selectedLocationId));
    router.push("/backoffice/menus");
  };

  if (isLoading) return <Loading />;

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button
          color="error"
          variant="contained"
          startIcon={<DeleteIcon />}
          onClick={() => setOpen(true)}
        >
          Delete
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          mt: 5,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            defaultValue={menu?.name}
            sx={{ mb: 2 }}
            onChange={(evt) =>
              setMenuToUpdate({ ...menuToUpdate, name: evt.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="number"
            defaultValue={menu?.price}
            sx={{ mb: 2 }}
            onChange={(evt) =>
              setMenuToUpdate({
                ...menuToUpdate,
                price: Number(evt.target.value),
              })
            }
          />
          <Button
            variant="contained"
            onClick={handleUpdateMenu}
            sx={{ width: "fit-content" }}
          >
            Update
          </Button>
        </Box>
      </Box>
      <DeleteDialog
        title="Are you sure you want to delete this menu?"
        open={open}
        setOpen={setOpen}
        callback={handleDeleteMenu}
      />
    </Box>
  );
};

export default EditMenu;
