import React from 'react'
// import { callApi } from '../../utils/CallApi';
// import { useForm } from "react-hook-form";
// import { toast, Toast container mx-auto xl:px-[110px] } from 'react-toastify';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';



const Popup = ({ modalOpen, onClose, data }) => {


    return (
        <>
            <Modal classNames="rounded-md" open={modalOpen} className="" onClose={onClose} center>
                <div className="">
                    {/* Modal header */}
                    <div className=' pt-5'>
                        {data}
                    </div>
                </div>
            </Modal >
        </>
    )
}

export default Popup