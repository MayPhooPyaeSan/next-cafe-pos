import Loading from "@/components/Loading";
import Layout from "@/components/layout";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { appData } from "@/store/slices/appSlice";
import { updateOrderlineStatus } from "@/store/slices/orderlinesSlice";
import {
  getNumberOfMenusByOrderId,
  getSelectedLocationId,
} from "@/utils/client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Menus as Menu,
  Orders as Order,
  OrderStatus,
  Orderlines as Orderline,
} from "@prisma/client";
import { useState } from "react";

interface Props {
  menus: Menu[];

  order: Order;
  orderlines: Orderline[];
}

const Row = ({ order, orderlines, menus }: Props) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const renderMenusAddonsFromOrder = () => {
    const orderlineItemsIds = orderlines.map((item) => item.itemId);
    const itemIds: string[] = [];
    orderlineItemsIds.forEach((item) => {
      const hasAdded = itemIds.includes(item);
      if (!hasAdded) itemIds.push(item);
    });

    const orderlineMenus = itemIds.map((itemId) => {
      const orderline = orderlines.find(
        (item) => item.itemId === itemId
      ) as Orderline;
      const orderlineMenu = menus.find(
        (item) => item.id === orderline.menuId
      ) as Menu;

      const status = orderlines.find((item) => item.itemId === itemId)?.status;

      const quantity = orderlines.find(
        (item) => item.itemId === itemId
      )?.quantity;

      return {
        menu: orderlineMenu,
        status,
        quantity,
        itemId,
      };
    });

    return orderlineMenus.map((item) => (
      <Box key={item.itemId} sx={{ mr: 2 }}>
        <Paper
          elevation={3}
          sx={{
            width: 250,
            height: 300,
            p: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6">{item.menu.name}</Typography>
                <Typography
                  variant="h6"
                  sx={{
                    backgroundColor: "#1B9C85",
                    borderRadius: "50%",
                    width: 30,
                    height: 30,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  {item.quantity}
                </Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box
                sx={{
                  maxHeight: "180px",
                  overflow: "scroll",
                }}
              ></Box>
            </Box>
            <Box>
              <Divider sx={{ mb: 2 }} />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={item.status}
                    label="Status"
                    onChange={(evt) =>
                      handleUpdateOrderStatus(item.itemId, evt)
                    }
                  >
                    <MenuItem value={OrderStatus.PENDING}>
                      {OrderStatus.PENDING}
                    </MenuItem>
                    <MenuItem value={OrderStatus.PREPARING}>
                      {OrderStatus.PREPARING}
                    </MenuItem>
                    <MenuItem value={OrderStatus.COMPLETE}>
                      {OrderStatus.COMPLETE}
                    </MenuItem>
                    <MenuItem value={OrderStatus.REJECTED}>
                      {OrderStatus.REJECTED}
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    ));
  };

  const handleUpdateOrderStatus = async (
    itemId: string,
    evt: SelectChangeEvent<"PENDING" | "PREPARING" | "COMPLETE" | "REJECTED">
  ) => {
    dispatch(
      updateOrderlineStatus({
        itemId,
        status: evt.target.value as OrderStatus,
      })
    );
  };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="right">{order.id}</TableCell>
        <TableCell align="right">
          {getNumberOfMenusByOrderId(orderlines, order.id)}
        </TableCell>
        <TableCell align="right">{order.tableId}</TableCell>
        <TableCell align="right">{order.isPaid ? "Yes" : "No"}</TableCell>
        <TableCell align="right">{order.price}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit sx={{ my: 2 }}>
            <Box sx={{ display: "flex" }}>{renderMenusAddonsFromOrder()}</Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const Orders = () => {
  const { isLoading, orders, orderlines, menus } = useAppSelector(appData);
  const selectedLocationId = getSelectedLocationId() as string;
  const currentLocationOrders = orders.filter(
    (item) => item.locationId === Number(selectedLocationId)
  );

  const getOrderlinesByOrderId = (orderId: number) => {
    return orderlines.filter((item) => item.orderId === orderId);
  };

  if (isLoading) return <Loading />;

  return (
    <Layout>
      <Box>
        <TableContainer component={Paper} sx={{ maxHeight: "100%" }}>
          <Table aria-label="collapsible table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="right">Order Id</TableCell>
                <TableCell align="right">No. of menus</TableCell>
                <TableCell align="right">Table Id</TableCell>
                <TableCell align="right">Paid</TableCell>
                <TableCell align="right">Total price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentLocationOrders.map((order) => (
                <Row
                  key={order.id}
                  menus={menus}
                  order={order}
                  orderlines={getOrderlinesByOrderId(order.id)}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Orders;
