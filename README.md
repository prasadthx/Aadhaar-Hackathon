# Aadhaar-Hackathon

The Theme chosen for the Aadhaar Hackathon was:-
Authentication Reimagined

The problem statement:-
Airport / Stadium / Railway Station / Hotel Check-in Application: How could we use
Aadhaar services to create an application for smooth check-in to a Airport/Railway Station/Hotel
etc ? Please remember that the Aadhaar number should not be shared with the verifier
application. In addition, the verifier application should be assumed to have no access to UIDAI
servers. The application should work offline and provide a sub-second end-to-end response
time.

## Technologies Chosen :-

1. Client App:- React Native

2. Verifier App:- Tauri Rust, React JS for building view of Tauri, Actix Web Rust for Backend

We chose React Native due to it being a cross platform mobile development framework.
Tauri too being a cross platform desktop application development framework was chosen over Electron JS because
it occupies less memory with fast binaries and thus proves to be helpful in creating Native build. 
Actix Web was chosen as a backend framework with Diesel ORM and SQLite database.

## The workflow is:-
1. User downloads the client application. Also the verifier sets up the verifier app at his side.
2. Offline Aadhaar Card gets downloaded in the mobile phone of the user.
3. The user is able to view his/her Aadhaar Details through it.
4. The User can use the app to check-in by scanning the QR code provided by the verifier app thus an information
   transfer taking place.
5. After the check-in, the User can see the history of the Check-in as well as past check-ins in the history tab.

### The Binaries are provided in the Binaries folder.
Also the installer (.msi) of the Verifier App is present with its executable.

Some of the Screenshots of the App:-

<img src="./Screenshot (98).png"/>

<img src="./Screenshot (99).png"/>

<img src="./Screenshot (100).png"/>

<img src="./Screenshot (101).png"/>

<img src="./Screenshot (102).png"/>

The Presentation Video is also provided:-
video.mp4

### We have not executed the problem statement completely. We planned to connect the client and verifier side through WiFi, but could not complete it in time. We have implemented till, where the Offline EKYC gets downloaded in the User's Machine as well as the verifier side works by giving manual entries.
