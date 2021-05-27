import axiosClient from "./axiosClient";

export const getPersonalDiscountCodes = () => axiosClient.get("/personal-discount-code/get-all");

export const deletePersonalDiscountCode = (personalDiscountCodeId) => axiosClient.delete("/personal-discount-code/delete",
    { params: { personalDiscountCodeId } }
);

export const createPersonalDiscountCode = (newPersonalDiscountCode) => axiosClient.post("/personal-discount-code/create",
    newPersonalDiscountCode,
    {
        headers: {
            "Content-type": "multipart/form-data"
        }
    }
);

export const updatePersonalDiscountCode = (newPersonalDiscountCode, PersonalDiscountCodeId) => axiosClient.patch("/personal-discount-code/update",
    newPersonalDiscountCode,
    {
        headers: {
            "Content-type": "multipart/form-data"
        },
        params: { PersonalDiscountCodeId }
    }
);