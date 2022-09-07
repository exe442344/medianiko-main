 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
const firebaseConfig = {
    apiKey: "AIzaSyDMzgK5GnwR43TlRTd_04Z9uD4ir88TxGc",
    authDomain: "niko-page.firebaseapp.com",
    projectId: "niko-page",
    storageBucket: "niko-page.appspot.com",
    messagingSenderId: "580712204258",
    appId: "1:580712204258:web:d70bcf9271c371afe79bbb",
    measurementId: "G-91L4BF7YCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

onAuthStateChanged(auth, user => {
    if (user = null) {
        conhsole - log("logen in!!!")
    } else {
        console.log("no user")
    }
})

///////////////////////////////////////////////////

const {Client, Collection, Intents} = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
   


client.login("NzM3MTY1NjAwMjc4ODM5Mzc3.Xx5Y9g.A-XA8xlzSH5OF0vrj1DTX-4m_h0")