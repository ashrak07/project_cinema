import {
  Typography,
  Box,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSeat, clearSeats } from "../Redux/SeatSlice";
import { createOrder } from "../Services/Api";

const CartComponent = () => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector((state) => state.seats.selectedSeats);
  const prj = useSelector((state) => state.projections.selectedProjection);
  console.log("zany ary ny avy am state ==>", prj);

  const calulateTotal = () => {
    return selectedSeats.length * prj.movie.priceUnit;
  };

  const [loading, setLoading] = useState(false);

  const fetchCreateOrder = async () => {
    setLoading(true);
    try {
      const data = {
        projection: "68457cdf29b4778b359f9193",
        client: "681894cbcf7dd6d9ba0bc37e",
        clientName: "nexthope",
        clientEmail: "nexthope@gmail.com",
        seats: selectedSeats,
      };
      console.log("request ==>", data);
      const response = await createOrder({ data });
      if (response) {
        console.log("response avy aty am front =>", response);
        dispatch(clearSeats());
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Box sx={{ margin: 5 }}>
        <Box sx={{ color: "white" }}>
          <Typography
            variant="h5"
            gutterBottom
            style={{
              fontFamily: "Montserrat",
              fontWeight: 600,
            }}
          >
            Select your seat
          </Typography>
          <Box>
            <Typography sx={{ mb: 1, fontFamily: "Quicksand" }}>
              {selectedSeats.length} Seats
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 50px)",
                // columnGap: 0.5,
                rowGap: 1,
              }}
            >
              {selectedSeats.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    background: "#607d8b",
                    borderRadius: 2,
                    width: 40,
                    height: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#fff",
                      fontFamily: "Quicksand",
                      fontSize: "small",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: 5, color: "white" }}>
          <Typography
            variant="h5"
            style={{
              fontFamily: "Montserrat",
              fontWeight: 600,
            }}
            gutterBottom
          >
            Movie Ticket
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "small",
            }}
          >
            <Typography variant="subtitle">Date & Time</Typography>
            <Typography variant="subtitle">12/07/2022 - 20:00 PM</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            marginBlock: 1,
            fontSize: "small",
          }}
        >
          <Typography variant="subtitle">Ticket</Typography>
          <Typography variant="subtitle">
            {" "}
            {selectedSeats.length} x {prj.movie.priceUnit}$
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            borderRadius: 2,
            fontSize: "small",
          }}
        >
          <Typography variant="subtitle">Total</Typography>
          <Typography variant="subtitle">{calulateTotal()}$</Typography>
        </Box>
      </Box>

      {/* --- cart --- */}
      <Box
        sx={{
          marginY: 5,
          padding: 5,
          borderRadius: 5,
          // background: "rgb(64, 161, 88)",
          // background: "rgb(52, 158, 177) ",
          background: "#ff8f00",
          // color: "white",
          color: "white",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle">Tickets/Double comfort</Typography>
          <Typography variant="subtitle">2</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle">Type</Typography>
          <Typography variant="subtitle">3D</Typography>
        </Box>
        <Divider sx={{ marginBlock: 2, background: "white" }}></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            style={{ fontFamily: "Montserrat", fontWeight: 600 }}
          >
            PRICE TOTAL
          </Typography>
          <Typography
            variant="h5"
            style={{
              fontFamily: "Montserrat",
              fontWeight: 600,
            }}
          >
            {calulateTotal()}$
          </Typography>
        </Box>
        <Box sx={{ marginY: 2 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              background: "white",
              color: "#ff8f00",
              fontWeight: 600,
              letterSpacing: 2,
              fontFamily: "Montserrat",
            }}
            onClick={fetchCreateOrder}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: "#ff8f00" }} />
            ) : (
              "BUY"
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartComponent;
