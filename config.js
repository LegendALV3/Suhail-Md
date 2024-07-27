const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="vyankateshlegend@gmail.com"
global.location="Delhi,India."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Delhi";
global.github=process.env.GITHUB|| "..";
global.gurl  =process.env.GURL  || "..";
global.website=process.env.GURL || "..." ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/kKb9d29/4fadb08e1a49f8949d72b968dbe102af.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "† 𝕷𝖔𝖗𝖉 𝕸𝖆𝖚𝖉𝖎𝖇 ♣" 


global.devs = "2348188660553" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919403621818";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348188660553";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_08_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMTk5LFxuICAgICAgICA1NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2LFxuICAgICAgICA3OSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDczLFxuICAgICAgICA4MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDU2LFxuICAgICAgICA2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MixcbiAgICAgICAgNjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDcxLFxuICAgICAgICAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MixcbiAgICAgICAgNDMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMzLFxuICAgICAgICA5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDkxLFxuICAgICAgICA0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU5LFxuICAgICAgICA1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTczLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYyLFxuICAgICAgICA0MixcbiAgICAgICAgMjA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzMixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidy9GOG9KYzVzNUw3UjlRWXZtRW9wMmRPZjRoWFZDQy9BcmFGbExIZkxuQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUmdzU0h0RU1RUDJjOGFuMkhqUGpQUVwiLFxuICBcInBob25lSWRcIjogXCI0MmZhNmVlMi0yMmE2LTQ2OWMtOTc2Zi0xNWFiZmRiNDYzOTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgMTE3LFxuICAgICAgMTM0LFxuICAgICAgMTEyLFxuICAgICAgMjA5LFxuICAgICAgNDcsXG4gICAgICAyMDYsXG4gICAgICAyNTMsXG4gICAgICAxNjEsXG4gICAgICA3MixcbiAgICAgIDE1NCxcbiAgICAgIDEzMCxcbiAgICAgIDEyOSxcbiAgICAgIDMwLFxuICAgICAgMTg0LFxuICAgICAgMjI3LFxuICAgICAgNTQsXG4gICAgICA5NSxcbiAgICAgIDEwOSxcbiAgICAgIDIzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDIyNSxcbiAgICAgIDU0LFxuICAgICAgMTUwLFxuICAgICAgNDksXG4gICAgICAyNTMsXG4gICAgICAxMCxcbiAgICAgIDYsXG4gICAgICAyMTQsXG4gICAgICAxODMsXG4gICAgICAyMDgsXG4gICAgICAxNzAsXG4gICAgICAyNDQsXG4gICAgICAxOTgsXG4gICAgICAzOSxcbiAgICAgIDExMCxcbiAgICAgIDIwMSxcbiAgICAgIDM4LFxuICAgICAgOTUsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVlGVEFaMlhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxODg2NjA1NTM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTc5Njg4NzUxOTQwOTozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lxeWl1Y0NFSXJ5a3JVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQWJQMVJFd1BYVHhBRDRDYlJnaVFaeXhTMUlRZHVpWnNPVVY2bzVKUHNtZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJieGR2enFmcU9WMkdWbVorMGlqTjFJeGh6WE9oTUppTm5GR1Q3TEZxais1Nm1pNWQ4TlEvQWFKSms0bk9XNG5yblByek14RnFuU2cvdUZBMkQ2UU5BZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPajlpenZJSXA1TTVpQ21CVUUxTStML1RTTlZPa2FqeUNXK3BwWVBwbWtZZXZXakNsVDZVM0tVelR2NmVWR3lySy9FZWZHcXhSMlNJWHV2cDFZdVhCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTg4NjYwNTUzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjA3MTMxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU91elwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3V6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNEpXLzI5S1NiTUV0aGxqdmp4Rkx5ejBxdG84emR3UFhRd1B6alNTNUZtZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NTMwNDc4MTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDczODg2MjUwM1wifSIKfQ=="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "FOR MY CRIMSON" ,
  
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "𝙻𝙴𝙶𝙴𝙽𝙳𝙰𝚁𝚈",
  botname : process.env.BOT_NAME  || "Dfw",
  ownername:process.env.OWNER_NAME|| "Menace",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "GOJO"  ).toUpperCase(),



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
