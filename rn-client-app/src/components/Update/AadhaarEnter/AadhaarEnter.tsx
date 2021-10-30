import {Button, Text, View} from "react-native";
import React, {useState} from "react";
import OTPInput from "../OTPInput";
import {fetchCaptcha} from "../apiRequests";

const AadhaarEnter = ({ navigation }:any) => {
    const [aadhaarNo, setAadhaarNo] = useState("");

    const submitPressed = async () => {
        if (aadhaarNo.length === 12){
            const result = await fetchCaptcha(aadhaarNo);
            navigation.navigate("CaptchaVerify", result)
        }
        else {
            alert("Enter valid 12 digit number");
        }
    }

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Aadhaar Enter</Text>
            <OTPInput
                length={12}
                onChangeText={setAadhaarNo}
                value={aadhaarNo}
            />
            <Button title={"Submit"} onPress={submitPressed}/>
        </View>
    )
}

export default AadhaarEnter;
