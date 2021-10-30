import axios from "axios";
import uuid from 'react-native-uuid';

const generateCaptchaURL = "https://stage1.uidai.gov.in/unifiedAppAuthService/api/v2/get/captcha"

const generateOTPURL = "https://stage1.uidai.gov.in/unifiedAppAuthService/api/v2/generate/aadhaar/otp"

const fetchEKYCURL = "https://stage1.uidai.gov.in/eAadhaarService/api/downloadOfflineEkyc"

interface generateOTP {
    captchaValue:String,
    captchaTxnId:String,
    uidNumber: String
}

interface fetchEKYC{
    txnId : String,
    OTP : String,
    uidNumber : String
}

export const fetchCaptcha = async (aadhaarNumber:String) => {
    try {
        const response = await axios({
            method: 'post',
            url: generateCaptchaURL,
            headers: { 'content-type': 'application/json' },
            data: {
                "langCode": "en",
                "captchaLength": "3",
                "captchaType": "2"
            }
        })
        const { captchaBase64String, captchaTxnId } = response.data;
        const result = { captchaBase64String: captchaBase64String, captchaTxnId: captchaTxnId, uidNumber: aadhaarNumber};
        return result;
    }
    catch (error) {
        alert(error)
    }
}

export const generateOTP = async ({captchaValue, captchaTxnId, uidNumber}:generateOTP) => {
    try {
        const uuidID = uuid.v4();
        const response = await axios({
            method: 'post',
            url: generateOTPURL,
            headers: {
                'x-request-id': `${uuidID}`,
                'appid': 'MYAADHAAR',
                'Accept-Language':'en_in',
                'content-type': 'application/json'
            },
            data: {
                "uidNumber": uidNumber,
                "captchaTxnId": captchaTxnId,
                "captchaValue": captchaValue,
                "transactionId": `MYAADHAAR:${uuidID}`
            }
        })
        const result = {
            txnId : response.data.txnId,
            uidNumber : response.data.uidNumber,
            message : response.data.message,
            status : response.data.status
         }
        return result;
    }
    catch (error) {
        alert(error);
    }
}

export const fetchEKYC = async ({txnId, OTP, uidNumber}:fetchEKYC) => {
    try {
        const response = await axios({
            method: 'post',
            url: fetchEKYCURL,
            headers: {
                'content-type': 'application/json'
            },
            data: {
                "txnNumber": txnId,
                "otp": OTP,
                "shareCode": "2311",
                "uid": uidNumber,
            }
        })
        const result = {
            fileName : response.data.fileName,
            status: response.data.status,
            eKycXML : response.data.eKycXML,
            requestDate : response.data.requestDate
        }
        return result;
    }
    catch (error){
        alert(error);
    }
}
