import { toast } from "react-toastify";
import { callPublicApi, callingPublicApi } from "../Apiendpoint";

// Send Eamil Request

export const SendEmail = async (data) => {
  const { sendername, senderemail, senderphone, selectservice } = data;
  try {
    let payload = {
      sendername: sendername,
      senderemail: senderemail,
      senderphone: senderphone,
      selectservice: selectservice,
    };
    let response = await callPublicApi(
      "emails/requestForBooking",
      "post",
      payload
    );
    if (response.success === true) {
      return {
        res: response.data,
      };
    } else {
      toast.error(response.message);
    }
  } catch (err) {
    toast.error(err);
  }
};

// Send Booking  Request

export const SendBooking = async (data) => {
  const {
    sendername,
    senderemail,
    bookingdate,
    senderphone,
    sendercountry,
    selectservice,
    sendermessage,
  } = data;
  try {
    let payload = {
      sendername: sendername,
      senderemail: senderemail,
      bookingdate: bookingdate,
      senderphone: senderphone,
      sendercountry: sendercountry,
      selectservice: [selectservice],
      sendermessage: sendermessage,
    };
    let response = await callPublicApi(
      "emails/requestForBooking",
      "post",
      payload
    );
    if (response.success === true) {
      return {
        res: response.data,
      };
    } else {
      toast.error(response.message);
    }
  } catch (err) {
    toast.error(err);
  }
};

// Send Question  Request

export const SendQuestion = async (data) => {
  const { sendername, senderemail, description } = data;
  try {
    let payload = {
      sendername: sendername,
      senderemail: senderemail,
      description: description,
      agreed: false,
    };
    let response = await callPublicApi(
      "emails/submitQuestion",
      "post",
      payload
    );
    if (response.success === true) {
      return {
        res: response.data,
      };
    } else {
      toast.error(response.message);
    }
  } catch (err) {
    toast.error(err);
  }
};

// Send Contact US

export const SendContactUs = async (endpoint, payload) => {
  try {
    let response = await callingPublicApi(endpoint, "post", payload);
    if (response.message === "Response sent successfully") {
      
      return {
        res: response.data,
      };
    } else {
      toast.error(response.message);
    }
  } catch (err) {
    toast.error(err);
  }
};
