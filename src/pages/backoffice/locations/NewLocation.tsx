import { config } from "@/config";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { appData } from "@/store/slices/appSlice";
import { addLocation } from "@/store/slices/locationSlice";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const NewLocation = ({ open, setOpen }: Props) => {
  const { company } = useAppSelector(appData);
  const dispatch = useAppDispatch();
  const [newLocation, setNewLocation] = useState({
    name: "",
    address: "",
    companyId: company?.id,
  });

  const createNewLocation = async () => {
    const isValid = newLocation.name && newLocation.address;
    if (!isValid) return alert("Name and address are required.");

    try {
      const response = await fetch(`${config.apiBaseUrl}/locations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLocation),
      });

      if (!response.ok) {
        throw new Error("Failed to create location.");
      }

      const locationCreated = await response.json();
      dispatch(addLocation(locationCreated));
      setOpen(false);
      setNewLocation({ name: "", address: "", companyId: company?.id });
    } catch (error) {
      console.error("Error creating location:", error);
      alert(
        "An error occurred while creating the location. Please try again later."
      );
    }
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Create new location</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: 300,
          minHeight: 150,
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          sx={{ my: 2 }}
          onChange={(evt) =>
            setNewLocation({ ...newLocation, name: evt.target.value })
          }
        />
        <TextField
          label="Address"
          variant="outlined"
          sx={{ mb: 2 }}
          onChange={(evt) =>
            setNewLocation({ ...newLocation, address: evt.target.value })
          }
        />
        <Button
          variant="contained"
          onClick={createNewLocation}
          sx={{ width: "fit-content", alignSelf: "flex-end", mt: 2 }}
        >
          Create
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default NewLocation;
