import QuantitySelector from "@/components/QuantitySelector";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { appData } from "@/store/slices/appSlice";
import { CartItem, addToCart } from "@/store/slices/cartSlice";
import { generateRandomId } from "@/utils/client";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Menu = () => {
  const router = useRouter();
  const query = router.query;
  const dispatch = useAppDispatch();
  const { menus } = useAppSelector(appData);
  const { isLoading } = useAppSelector((state) => state.app);
  const menuId = router.query.id as string;
  const menu = menus.find((item) => item.id === Number(menuId));
  const [quantity, setQuantity] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleAddToCart = () => {
    if (!menu) return;
    const cartItem: CartItem = {
      id: generateRandomId(),
      menu,
      quantity,
    };
    dispatch(addToCart(cartItem));
    router.push({ pathname: "/order", query });
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
          src={menu?.assetUrl || ""}
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
            onClick={handleAddToCart}
            sx={{
              width: "fit-content",
              mt: 3,
            }}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Menu;
