const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254114663370";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_17_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MixcbiAgICAgICAgMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDU4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODYsXG4gICAgICAgIDU4LFxuICAgICAgICA0MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk3LFxuICAgICAgICA5NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA2LFxuICAgICAgICA5NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImx0NHRrRHpJQVZKcjFUU3VnK2s4UUN3VE15QkN2SFEvbGsrQ0pvVUh4ZVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkViMnpMTTVqU3ctYVoyWjduSkVJSGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTZhZmFhNGMtODZjYS00MjRlLThlNzktMGVhZTg0NjJmNDhhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDEzMSxcbiAgICAgIDE0MSxcbiAgICAgIDEyMCxcbiAgICAgIDIzNCxcbiAgICAgIDE2MCxcbiAgICAgIDU4LFxuICAgICAgMTIzLFxuICAgICAgMjAzLFxuICAgICAgMjksXG4gICAgICAxMDEsXG4gICAgICAzMCxcbiAgICAgIDEwMCxcbiAgICAgIDI5LFxuICAgICAgMTE3LFxuICAgICAgMTkxLFxuICAgICAgMTcxLFxuICAgICAgMTI2LFxuICAgICAgMTAwLFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgMjMzLFxuICAgICAgMjI1LFxuICAgICAgMTc1LFxuICAgICAgNTQsXG4gICAgICAyMDgsXG4gICAgICAyMzQsXG4gICAgICA4OSxcbiAgICAgIDE1MixcbiAgICAgIDIxNCxcbiAgICAgIDI0NixcbiAgICAgIDIwNSxcbiAgICAgIDI2LFxuICAgICAgMTk1LFxuICAgICAgNTgsXG4gICAgICAxMjQsXG4gICAgICAxNDMsXG4gICAgICAxMDksXG4gICAgICAxMjcsXG4gICAgICAxMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjNTUjlQWUtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc1NjMzOTM5NjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzU4MTA5Mzc1NTMwNjE6MTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQmxhY2tcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNORHp1Y1FCRU8vcG5iSUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFueTlnbURUMktaVW9LN0RBUTV4SGI0ZURtTEdzd0JYSE5xeERaZGZEVVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTFdxV3NjNFN2eVIrTkR3VFJIUWFRU0hYcXZnWmhEUmkxRVJGVGNtbzcyODQyOWE0QnpyVFZwemxwSytKWnBtelc4UHBQRiszRGdTM2NxNytZUGYvREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQjE0L0hiUmcvRkxGZUV6S3h3M0hocE4wS0FQeVFVZG9uRXBrTU9GZUQ1Mk00eGtwSnRDVHBWOEY3WWt6djVUekwxV0xnQnJKU1VBcGM2SS96bktGamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzU2MzM5Mzk2OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTk1OTAyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVac1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVpzLmpzb24iOiAie1wia2V5RGF0YVwiOlwickFub1NqSk9TT01PTkVjd2R0OWFEWWtabndxZThGc2czZmNpUXJGWXFRZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MTE5OTA0ODAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTk0NDM5OTU0OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Black",
  ownername:process.env.OWNER_NAME|| "It'x Demon",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ENIGMA"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
