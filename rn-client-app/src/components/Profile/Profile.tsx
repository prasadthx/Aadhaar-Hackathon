
import React from "react";

import { StyleSheet,
            Text,Image,SafeAreaView,TouchableOpacity,
            View } from 'react-native';
const name='F_name M_name L_name'
const aadhaarnum='XXXXXXX'
const mobnum='2532783'
const dob='1-1-2001'
const add='XXXXXXX'


const Profile = () => {
    return (
        
            <SafeAreaView style={styles.container}>
                <TouchableOpacity>
                    <Image style={styles.image}
                        source={{
                            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
                        }}
                        style={{ width: 125, height: 125, borderRadius: 12, marginLeft: 10, marginTop: 30 }}
                    />
                </TouchableOpacity>
                <Text style={styles.fontname} >
                    {name}
                </Text>

                <Text style={styles.fonts}>
                    AADHAAR NUMBER
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20, }}>{aadhaarnum}</Text>

                <Text style={styles.mob_num}>
                    MOBILE NUMBER
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20, }}>{mobnum} </Text>

                <Text style={styles.mob_num}>
                    DATE OF BIRTH
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20, }}>{dob} </Text>

                <Text style={styles.mob_num}>
                    ADDRESS
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20, }}>{add} </Text>



            </SafeAreaView>
        
    );
}

export default Profile;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      marginTop: 16,
  
      alignItems: 'center',
      justifyContent: 'flex-start',
  
    },
    fontname: {
  
    fontWeight: 'bold',
    marginTop:50,
    fontSize:25,
     alignItems: 'center',
  
  },
      fonts: {
      marginTop:50,
      fontSize:18,
  
      textAlign: "left",
  
      },
      mob_num: {
      marginTop: 30,
  
      fontSize:18
      }
  });
