const qrcode = require('qrcode-terminal')
const {Client,LocalAuth} = require("whatsapp-web.js")
// const fs = require("fs")

// const authFilePath = '.wwebjs_auth';
// const cacheFilePath = '.wwebjs_cache';

// try {
//     if (fs.existsSync(authFilePath)) {
//         fs.unlinkSync(authFilePath);
//         console.log(`Deleted ${authFilePath}`);
//     }

//     if (fs.existsSync(cacheFilePath)) {
//         fs.unlinkSync(cacheFilePath);
//         console.log(`Deleted ${cacheFilePath}`);
//     }
// } catch (err) {
//     console.error(`Error deleting file: ${err.message}`);
// }

const whatsapp = new Client({
    authStrategy : new LocalAuth()
})

whatsapp.on('qr',(qr)=>{
    qrcode.generate(qr,{
        small:true
    })

})

whatsapp.on('message',async(message)=>{

    if(message.isGroupMsg){
        return;
    }
    const lowercasemsg = message.body.toLowerCase();
    if(lowercasemsg == "hello" || lowercasemsg == "hi"){
        message.reply("hello you are talking to my bot")
        message.reply(`if you need any help type "help" ` )
    }
    if(lowercasemsg == "help" || lowercasemsg == "Help"){
        message.reply("I can help you with development, promotion and bussiness ")
    }
    else if(lowercasemsg.includes("development") ){
        message.reply("sure I will help you with development");
    }
    else if(lowercasemsg.includes("promotion") ){
        message.reply("sure I will help you with promotion");
    }
    else if(lowercasemsg.includes("bussiness") ){
        message.reply("sure I will help you with bussiness");
    }

})
whatsapp.on('ready',()=>{
    console.log("client is ready")
})
whatsapp.initialize()