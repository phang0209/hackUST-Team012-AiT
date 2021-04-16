# hackUST-Team012-AiT
## Rescation
This is the prototype of the app Rescation proposed by Team012 AiT. It aims to tackle the issues raised in Theme 2 (Smart Travel Technology). The repository includes the frontend implementation.  

### Viewing Prototype
This project is created using the React Native framework with `expo cli`. Therefore, to view the code, please download download the lastest versions of `node.js`, `react-native` and `expo-cli`. Open the project folder and run `npm install`. Then run `npm start`. A page will be opened on the browser afterwards. Please choose your desired method to view. It is suggested to use an Android emulator from the Android Studio. In that case, turn on the emulator and choose `Run on Android device/emulator`. It is supposed that the app can be viewed at this point.  

### Feature Descriptions
Notice that this app is a prototype and part of the functions are not fully implemented. To facilitate the presentation of the features, here are some descriptions for the undeveloped functions:  
- Home Page:
  - The purpose of Search Bar is to allow users to search for shops and restaurants. It serves for the same purpose as the Search Bar in the Search Page.
  - The windows in the middle of the Home page are to 1) suggest trending/popular shops and restaurant or 2) provide any kind of extra information such as transportation
  - The window at the bottom is the space for advertisement
- Search Page (View Details):
  - Booking button: It brings the users to the Reservation Form page. It is supposed to transfer the information to the shops/restaurants and create a new entry in the Itinerary List. The booking status and records are supposed be checked in the Itinerary Entries ("reservation" attribute)
  - Add to Itinerary button: It is supposed to prompt users to fill in information such as date and time. It would then create a new entry in the Itinerary List
- Itinerary List:
  - It is supposed to contain multiple itinerary plans. In this prototype, we fixed it to one itinerary only. In an Itinerary list, it is supposed the entries can be sorted by date and time. Also, users can go into each entry and then do booking. It is supposed that the "reservation" attribute will be checked if the restaurant accepted the reservation
- Others:
  - It is supposed to run this app based on an Account System, which facilitate identification and recording

### Prototype on Figma
An UI prototype was created before the implementation, which can be viewed on [this page](https://www.figma.com/proto/mCnSWZmkH18eIeDGxQo3N5/Rescation?node-id=15%3A3&scaling=scale-down&page-id=0%3A1)
  
