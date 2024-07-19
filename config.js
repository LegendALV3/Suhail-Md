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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_56_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMixcbiAgICAgICAgMjI2LFxuICAgICAgICA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY2LFxuICAgICAgICA2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTE4LFxuICAgICAgICA3OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDkwLFxuICAgICAgICA5MixcbiAgICAgICAgMTE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjksXG4gICAgICAgIDYzLFxuICAgICAgICA0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMyxcbiAgICAgICAgNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDksXG4gICAgICAgIDExNixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEzLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgNzksXG4gICAgICAgIDk2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNyxcbiAgICAgICAgNjksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI4LFxuICAgICAgICA4OSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5FS1FDWDJpU2o0dnNiMnA2Q2NiQkJHWFR4c1pHallTY0pkeldJKzl6OGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjN0d2pDemZzUlltMHg1Sjc3Qk5qdEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTcyYzkxYmYtZmIyMy00NGY1LWI0YmEtM2QxNTIzOTY1NmIxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgMTc0LFxuICAgICAgMTE2LFxuICAgICAgNDEsXG4gICAgICAxMDIsXG4gICAgICAxNCxcbiAgICAgIDIxOCxcbiAgICAgIDI0MyxcbiAgICAgIDE1NyxcbiAgICAgIDIzNCxcbiAgICAgIDE4NCxcbiAgICAgIDIzMCxcbiAgICAgIDE1MSxcbiAgICAgIDE3MyxcbiAgICAgIDE1MyxcbiAgICAgIDkxLFxuICAgICAgMTI2LFxuICAgICAgOTAsXG4gICAgICAxMDUsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgODgsXG4gICAgICAxMDMsXG4gICAgICA5MCxcbiAgICAgIDQ5LFxuICAgICAgMTkwLFxuICAgICAgMTM5LFxuICAgICAgMTMxLFxuICAgICAgMTgsXG4gICAgICAxMTgsXG4gICAgICAzMCxcbiAgICAgIDIzLFxuICAgICAgMTMsXG4gICAgICAyNCxcbiAgICAgIDE1NSxcbiAgICAgIDcwLFxuICAgICAgMjMwLFxuICAgICAgMTg0LFxuICAgICAgMjQwLFxuICAgICAgMjI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjUzWEpUNFZSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYyNzgxNTU4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMzE0NTkzOTg3Mzc5MzoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tuL29JSUJFUGZINTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia291WDM3eG5VdzFodkRibGQrNzJBcTIwaHRKdk1lSVNmLzJwUW5vcjBoTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtM1RTRWUralRDK05oUStiZ1BiaEU1L2QydTdqUHY1Mm9rM1ZnWDFyNWtYbUVNRGl2VW5adWptT29qNlUya2dMcXdwWkl5UXFNQnNpS0RrV0JxMVNBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1K3YxZys4cVplNHR1ejZWdUV4TXU5TG1ub21zOElodFJLSGtwY0RMRWN5bU9qcU5jaUlMaTA0WWc3T1ZPa21aVVBrazBQUGM0NGVIVmJDM0d2NXNnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTYyNzgxNTU4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzYxNDA0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="

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
