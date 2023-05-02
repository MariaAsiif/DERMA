import { toast } from "react-toastify"
import { callPublicApi } from "../Apiendpoint"
// User api's 

// SignUp as a Servicer 
export const SignUpUser = async (data) => {
    //  let { firstname , lastname , dateofbirth , phone  , email , password , confirmpassword} = data 
    try {
        let payload = {
            "first_name": data?.fname,
            "last_name": data?.lname,
            // "date_of_birth": data?.dateofbirth,
            "date_of_birth": "10/25/1989",
            "phone_number": data?.phone,
            "email": data?.email,
            "password": data?.password,
            "password_confirmation": data?.confirmPwd
        }

        let checkRole = data.Role === "Servicer" ? '/user/register/servicer' : '/user/register/rental'
        let response = await callPublicApi(checkRole, 'post', payload)
        if (response.success === true) {
            toast.success(response.message)
            return {
                res: response.data
            }
        }
        else {
            toast.error(response.message)
        }
    }
    catch (err) {
        toast.error(err)

    }
}

// Signup AS a Rental
// export const SignUpRental = async (data) => {
//     //  let { firstname , lastname , dateofbirth , phone  , email , password , confirmpassword} = data 
//     try {
//         let payload = {
//             "first_name": data?.fname,
//             "last_name":data?.lname,
//             // "date_of_birth": data?.dateofbirth,
//             "date_of_birth":"10/25/1989",
//             "phone_number": data?.phone,
//             "email": data?.email,
//             "password": data?.password,
//             "password_confirmation": data?.confirmPwd
//         }

//         let response = await callPublicApi('/user/register/renter', 'post', payload)
//         if (response.success === true) {
//             toast.success(response.message)
//             return {
//                 res: response.data
//             }
//         }
//         else {
//             toast.error(response.message)
//         }
//     }
//     catch (err) {
//         toast.error(err)

//     }
// }


// SignIn User 

export const SignInUser = async (data) => {
    let { email, password } = data
    try {
        let payload = {
            "email": email,
            "password": password
        }



        let response = await callPublicApi("admin/login", 'post', payload)
        if (response.success === true) {
            toast.success(response.message)
            return { res: response.data }
        }
        else {
            toast.error(response.message)
            return { error: response.message }
        }
    }
    catch (err) {
        toast.error(err)

    }
}


// SignIn User With Social 

export const SignInUserSocialy = async (data) => {
    let { email, phoneNumber, uid, displayName , role , checkProvider } = data

    try {
        let payload = {
            "first_name": displayName,
            "phone_number": phoneNumber,
            "email": email,
            ...checkProvider === "google_user_id" ? { "google_user_id" : uid } : checkProvider === "fb_user_id" ? { "fb_user_id" : uid } :  checkProvider === "apple_user_id" ? { "apple_user_id" : uid } : ""
        }
        console.log("data" , payload)
        let checkRole = role === "servicer" ? "/user/login/servicer" : "/user/login/renter"

           let response = await callPublicApi(checkRole, 'post', payload)
           console.log("rea", response)
        //    if (response.success === true) {
        //        toast.success(response.message)
        //        return { res : response.data }
        //    }
        //    else {
        //        toast.error(response.message)
        //        return { error : response.message }
        //    }
    }
    catch (err) {
        toast.error(err)

    }
}

// forgot 

export const ForgotUser = async (data) => {
    //  let { firstname , lastname , dateofbirth , phone  , email , password , confirmpassword} = data 
    try {
        let payload = {
            email: data,
        }

        let response = await callPublicApi('/user/reset-password/step-1', 'post', payload)
        if (response.success === true) {
            toast.success(response.message)
            return { res: response.data }
        }
        else {
            toast.error(response.message)
        }
    }
    catch (err) {
        toast.error(err)

    }
}

// otp send 
export const SendOtp = async (data) => {
    try {
        let payload = {
            "email": data.email,
            "pin_code": data.otp
        }

        let response = await callPublicApi('/user/reset-password/step-2', 'post', payload)
        if (response.success === true) {
            toast.success(response.message)
            return { res: response.data }
        }
        else {
            toast.error(response.message)
        }
    }
    catch (err) {
        toast.error(err)

    }
}


// otp send 
export const ResetPassword = async (data) => {
    try {
        let payload = {
            "email": data?.email,
            "new_pass": data?.password,
            "r_new_pass": data?.r_password
        }

        let response = await callPublicApi('/user/reset-password/step-3', 'post', payload)
        if (response.success === true) {
            toast.success(response.message)
            return {
                res: response.data
            }
        }
        else {
            toast.error(response.message)
        }
    }
    catch (err) {
        toast.error(err)

    }
}