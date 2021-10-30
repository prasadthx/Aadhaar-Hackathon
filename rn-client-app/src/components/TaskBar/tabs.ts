import CheckIn from "../CheckIn/CheckIn";
import Update from "../Update/Update";
import Profile from "../Profile/Profile";
import Settings from "../Settings/Settings";

const tabs = [
    { name: 'account-check', title: 'Check-In', screen:'CheckIn' },
    { name: 'database-refresh', title: 'Update', screen: 'Update' },
    { name: 'account-settings', title: 'Profile', screen: 'Profile' },
    { name: 'history', title: 'History', screen: 'History' },
    { name: 'help', title: 'Help', screen : 'Settings' },
];

export default tabs;
