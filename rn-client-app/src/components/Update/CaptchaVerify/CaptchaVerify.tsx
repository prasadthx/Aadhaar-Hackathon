import {Text, View, Image, StyleSheet, Button, TextInput} from "react-native";
import React, {useState} from "react";
import OTPInput from "../OTPInput";
import {generateOTP} from "../apiRequests";

const CaptchaVerify = ({route, navigation}:any) => {

    const { captchaBase64String, captchaTxnId, uidNumber } = route.params;

    const [captcha, setCaptcha] = useState("");

    const submitPressed = async () => {
        if (captcha.length === 6){
            const params = {
                captchaValue : captcha,
                captchaTxnId : captchaTxnId,
                uidNumber : uidNumber
            }
            const result = await generateOTP(params);
            if (result !== undefined){
                if (result.status === "Failure"){
                    alert(result.message);
                }
                else {
                    navigation.navigate("EnterOTP", result);
                }
            }
        }
        else{
            alert("Enter valid captcha");
        }
    }

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Captcha Verfiy</Text>
            <Image source={{uri: `data:image/gif;base64,${captchaBase64String}`}} style={styles.logo}  resizeMode="contain"/>
            <TextInput
                style={styles.input}
                onChangeText={setCaptcha}
                value={captcha}
                textAlign="center"
                maxLength={6}
            />
            <Button title={"Submit"} onPress={submitPressed}/>
        </View>
    )
}

export default CaptchaVerify;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 3,
        padding: 10,
        borderRadius:12,
        borderColor:"blue"
    },
    logo: {
        width: 150,
        height: 100,
    },
});
