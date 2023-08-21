import { toast } from "react-toastify";
import { callPublicApi, callingPublicApi } from "../Apiendpoint";
import Swal from "sweetalert2";

const showLoadingPopup = () => {
  
  Swal.fire({
    title: 'Loading...',
    allowOutsideClick: false,
    showConfirmButton: false,
    onBeforeOpen: () => {
      Swal.showLoading();
    },
  });
};

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
    showLoadingPopup();
    let response = await callingPublicApi(endpoint, "post", payload);
    if (response.message === "Response sent successfully") {
      Swal.fire({
        title: 'Congratulation!',
        text: 'Request sent successfully!',
        icon: 'success',
        showConfirmButton: false,
        footer: '<button class="w-[55%] py-[6px] rounded-full bg-[#1F3D64] text-white text-center uppercase" id="customButton">OK</button>',
        didOpen: () => {
          
          document.getElementById('customButton').addEventListener('click', () => {
            Swal.close();
          });
        },
      });
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