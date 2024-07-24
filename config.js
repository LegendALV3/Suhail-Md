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
global.caption = process.env.CAPTION || global.caption || "LEGENDARY" 


global.devs = "2349156137725" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919403621818";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349156137725";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_56_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDU1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0LFxuICAgICAgICA4LFxuICAgICAgICA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMixcbiAgICAgICAgMTc1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMixcbiAgICAgICAgOTEsXG4gICAgICAgIDczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMixcbiAgICAgICAgMTE2LFxuICAgICAgICA3NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MixcbiAgICAgICAgNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMixcbiAgICAgICAgODIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MCxcbiAgICAgICAgNzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTExLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyLFxuICAgICAgICA3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAzMSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgODYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkttbVVPdUFXZzJybEhqbmg2VHFzOXJKdDRQQ2lsS1huSWZoczlTM3dRUk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllYQnVGZEt1VE5HNVcteEwwMDRMSUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODhmYzlhYjYtZDkwOC00MzY4LWEyZDAtMzdkMzc0ZjA2Mzc0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDEyMyxcbiAgICAgIDE2NixcbiAgICAgIDcyLFxuICAgICAgMTA1LFxuICAgICAgNzYsXG4gICAgICAxNDYsXG4gICAgICAxMzgsXG4gICAgICA5MixcbiAgICAgIDEyMSxcbiAgICAgIDIyOCxcbiAgICAgIDE1OCxcbiAgICAgIDEyNixcbiAgICAgIDE0OCxcbiAgICAgIDIwNSxcbiAgICAgIDkzLFxuICAgICAgMjAwLFxuICAgICAgOTEsXG4gICAgICAyMDUsXG4gICAgICAyNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMTAyLFxuICAgICAgMTI1LFxuICAgICAgMjEwLFxuICAgICAgMTQ4LFxuICAgICAgMTYxLFxuICAgICAgMTM4LFxuICAgICAgMTAwLFxuICAgICAgMTM1LFxuICAgICAgMTc3LFxuICAgICAgMTY5LFxuICAgICAgMTY2LFxuICAgICAgNyxcbiAgICAgIDE4NSxcbiAgICAgIDIyNixcbiAgICAgIDY5LFxuICAgICAgMTMwLFxuICAgICAgNTcsXG4gICAgICAzNSxcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2RDJNN1dTRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxMTY1MzMwNjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGZ3X0NhcmRpYWNbXeKImlwiLFxuICAgIFwibGlkXCI6IFwiNzI4Njg5MDE3MjQyMTc6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOK1oxNllFRU9hN2c3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNXUEM2aGRSUE42dEk5dmNONGlGRXY0ZDlXOWJDOXVEc3JvT29UakQwM0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUHYrSTFvUUhHQ0hNVTZpMFFENEkzTnJCc1ZDT21CNXJwK0ExUldLNDFtS0NmR0s5M0ZpTEhXVkFaMklDQXdzdUkwMFJpU05XbXdVQVBMUUpYbUltRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTnZRRm1RaEZhZWJNbnBaRW5uSURGaVVUWm9Od21LMmdONEZuSzFDcHRIWmJKUEt2OVpmQjE3bTZUejZDcnFRbmVZZ2JCa0Z3YmpicmVGUlAzRDA5Z3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxMTY1MzMwNjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE4MTg2MDJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "FOR MY CRIMSON" ,
  
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "𝙻𝙴𝙶𝙴𝙽𝙳𝙰𝚁𝚈",
  botname : process.env.BOT_NAME  || "RAY",
  ownername:process.env.OWNER_NAME|| "TEDDY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "AYANOKOJI"  ).toUpperCase(),



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
