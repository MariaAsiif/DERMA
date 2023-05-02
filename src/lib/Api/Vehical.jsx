import { toast } from "react-toastify"
import { callPrivateApi } from "../Apiendpoint"


// Get Vehicals

export const GetVihicals = async () => {
    try {
        let response = await callPrivateApi('admin/vehicle/', 'get')
        if (response.success === true) {
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


// Create Rental
export const CreateLeased = async (data) => {
    let { property_id, leased_type, rent_collection_date ,   animal_allowed , parking_allowed , legal_disclosure , additional_details } = data
    try {
        let propertyId = Number(property_id)
        let payload = {
            "property_id": propertyId,
            "leased_type": leased_type,
            "rent_collection_date": rent_collection_date,
            "animal_allowed": animal_allowed,
            "parking_allowed":parking_allowed,
            "legal_disclosure": legal_disclosure,
            "additional_details": additional_details
        }

        let response = await callPrivateApi('/servicer/lease-builder/store', 'post', payload)
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

// Rental Update 
export const UpdateLeased = async (data) => {
    // let { type, realtor, name, email, license, broker, latitude, longitude, street, city, state, zipcode, rent, security_deposit, propertyType, leased_period, number_of_beds, number_of_baths, amenities, description, images, video } = data
    try {
        let payload = {
            "property_id":18,
            "leased_type": "monthly",
            "rent_collection_date": "0",
            "animal_allowed": "2 Cats, 3 Dogs, this is a textarea (optional)",
            "parking_allowed":"this is a textarea (optional)",
            "legal_disclosure": "this is a textarea (optional)",
            "additional_details": "this is a textarea (optional)"
        }

        let response = await callPrivateApi('/servicer/lease-builder/update', 'post', payload)
        if (response.success === true) {
            toast.success(response.message)
            return {
                data: response.data
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


export const DeleteLeased= async (id) => {
    try {

        let response = await callPrivateApi(`/servicer/lease-builder/destroy/${id}`, 'post')
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