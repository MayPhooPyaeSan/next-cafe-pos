import QuantitySelector from "@/components/QuantitySelector";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { appData } from "@/store/slices/appSlice";
import { selectCart, updateCart } from "@/store/slices/cartSlice";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MenuUpdate = () => {
  const router = useRouter();
  const query = router.query;
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectCart);
  const cartItemId = router.query.id as string;
  const cartItem = items.find((item) => item.id === cartItemId);
  const [quantity, setQuantity] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleUpdateCart = () => {
    if (!cartItem) return;
    dispatch(
      updateCart({
        id: cartItemId,
        menu: cartItem.menu,
        quantity,
      })
    );
    router.push({ pathname: "/order/cart", query });
  };

  const handleQuantityDecrease = () => {
    const newValue = quantity - 1 === 0 ? 1 : quantity - 1;
    setQuantity(newValue);
  };

  const handleQuantityIncrease = () => {
    const newValue = quantity + 1;
    setQuantity(newValue);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          p: 4,
        }}
      >
        <Image
          src={cartItem?.menu?.assetUrl || ""}
          alt="menu-image"
          width={150}
          height={150}
          style={{
            borderRadius: "50%",
            margin: "0 auto",
          }}
        />
        <Box
          sx={{
            mt: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <QuantitySelector
            value={quantity}
            onDecrease={handleQuantityDecrease}
            onIncrease={handleQuantityIncrease}
          />
          <Button
            variant="contained"
            disabled={isDisabled}
            onClick={handleUpdateCart}
            sx={{
              width: "fit-content",
              mt: 3,
            }}
          >
            Update cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default MenuUpdate;
