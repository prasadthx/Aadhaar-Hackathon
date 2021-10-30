import {Button, Text, View} from "react-native";
import React, {useState} from "react";
import OTPInput from "../OTPInput";
import {fetchEKYC} from "../apiRequests";
import * as FileSystem from "expo-file-system";
import {zip, unzip, unzipAssets, subscribe, unzipWithPassword} from 'react-native-zip-archive'

const EnterOTP = ({ route, navigation }:any) => {
    const [OTP, setOTP] = useState("");

    const getFileUri = (name:any) => {
        console.log(FileSystem.documentDirectory);
        return FileSystem.documentDirectory + `${encodeURI(name)}.zip`;
    }

    const submitPressed = async () => {
        if (OTP.length === 6){
            const params = {
                txnId : route.params.txnId,
                OTP : OTP,
                uidNumber : route.params.uidNumber
            }
            const result = await fetchEKYC(params);
            if (result !== undefined){
                if (result.status === "Failure"){
                    alert("Failed to fetch the file");
                }
                else{
                    console.log(result.eKycXML);
                    const fileUri = getFileUri(result.fileName);
                    FileSystem.writeAsStringAsync(fileUri, result.eKycXML, { encoding: FileSystem.EncodingType.Base64 }).then(
                        () => {console.log("Success")
                        // @ts-ignore
                            unzipWithPassword(fileUri, FileSystem.documentDirectory, 2311)
                            .then((path) => {
                                console.log(`unzip completed at ${path}`)
                            })
                            .catch((error) => {
                                console.error(error)
                            })
                        alert("Offline Aadhaar Downloaded Successfully");
                        navigation.popToTop();
                    }
                    ).catch(error => console.log(error));
                }
            }
        }
        else {
            alert("Enter valid 6 digit number");
        }
    }

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Enter OTP</Text>
            <OTPInput
                length={6}
                onChangeText={setOTP}
                value={OTP}
            />
            <Button title={"Submit"} onPress={submitPressed}/>
        </View>
    )
}

export default EnterOTP;
