import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Verify = () => {
  const { navigate, token, setCartIem, backendUrl } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const VerifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }
      const res = await axios.post(
        `${backendUrl}/api/order/verifyStrip`,
        { success, orderId },
        { headers: { token } }
      );
      if (res.data.success) {
        setCartIem({});
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    VerifyPayment();
  }, [token]);

  return <div>Verify</div>;
};

export default Verify;
