import { config } from "@/config";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { CartItem, removeFromCart, selectCart } from "@/store/slices/cartSlice";
import { addOrder } from "@/store/slices/ordersSlice";
import { getCartTotalPrice } from "@/utils/client";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";

import { useRouter } from "next/router";
import { useEffect } from "react";

const Review = () => {
  const { items, isLoading } = useAppSelector(selectCart);
  const router = useRouter();
  const query = router.query;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading && !items.length) {
      const query = router.query;
      const isValid = query.locationId && query.tableId;
      isValid && router.push({ pathname: "/order", query });
    }
  }, [items, router.query]);

  const handleRemoveFromCart = (cartItem: CartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const confirmOrder = async () => {
    const { locationId, tableId } = query;
    const isValid = locationId && tableId && items.length;
    if (!isValid) return alert("Required locationId and tableId");
    const response = await fetch(
      `${config.apiBaseUrl}/app?locationId=${locationId}&tableId=${tableId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      }
    );
    const orderCreated = await response.json();
    dispatch(addOrder(orderCreated));
    router.push({ pathname: `/order/activeOrder/${orderCreated.id}`, query });
  };

  if (!items.length) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 3,
        bgcolor: "#E8F6EF",
        borderRadius: 15,
        mx: 3,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "500px" },
        }}
      >
        <Typography
          color={"primary"}
          variant="h4"
          sx={{ textAlign: "center", mb: 3 }}
        >
          Review your order
        </Typography>
        {items.map((cartItem, index) => {
          const { menu, quantity } = cartItem;
          return (
            <Box key={index}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{
                    width: 25,
                    height: 25,
                    mr: 1,
                    backgroundColor: "#1B9C85",
                  }}
                >
                  {quantity}
                </Avatar>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography variant="h6" color={"primary"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="h6" color={"primary"}>
                    {menu.price}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  mb: 3,
                  mt: 1,
                }}
              >
                <DeleteIcon
                  color="primary"
                  sx={{ mr: 2, cursor: "pointer" }}
                  onClick={() => handleRemoveFromCart(cartItem)}
                />
                <EditIcon
                  color="primary"
                  sx={{ cursor: "pointer" }}
                  onClick={() =>
                    router.push({
                      pathname: `menuUpdate/${cartItem.id}`,
                      query: router.query,
                    })
                  }
                />
              </Box>
            </Box>
          );
        })}
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Typography variant="h4" color="primary">
            Total: {getCartTotalPrice(items)}
          </Typography>
        </Box>
        <Box sx={{ mt: 3, textAlign: "center" }} onClick={confirmOrder}>
          <Button variant="contained">Confirm order</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
