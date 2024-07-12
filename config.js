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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://ibb.co/2Y8kHT6" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "🄻🄴🄶🄴🄽🄳🄰🅁🅈" 


global.devs = "919403621818" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919403621818";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919403621818";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_48_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI5LFxuICAgICAgICA5NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTksXG4gICAgICAgIDg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDk4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MixcbiAgICAgICAgODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzksXG4gICAgICAgIDI5LFxuICAgICAgICA0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY1LFxuICAgICAgICA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDk3LFxuICAgICAgICA4NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDUzLFxuICAgICAgICA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpNVFJrT2hONWtPT1Bwd29OMGUzYk1yZGN6cVpvNitTeTI2SThtdTlMQTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDg2OTk1MTQ0MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA5NDU4QTVCOEQyNUYzQjlFQkZGMzg1RkNBRUJGNTQ2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDc0NTMxNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ4Njk5NTE0NDM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RERGQTE5MThCQzdEQzhBNzRGNTVERjIxQTJFNzY5N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3NDUzMTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia2RpMFprRW1Sb21WNDNhbWZxRWxRd1wiLFxuICBcInBob25lSWRcIjogXCJlN2YzNWY5Yi00YjU3LTRmMjQtYTM4MS0yYjQ1ZWIwNWVhZTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgNjcsXG4gICAgICAxMDQsXG4gICAgICAxNjEsXG4gICAgICAxMTIsXG4gICAgICAxNDMsXG4gICAgICAzMixcbiAgICAgIDE0LFxuICAgICAgMjM5LFxuICAgICAgMjUsXG4gICAgICAxMzMsXG4gICAgICAxNTMsXG4gICAgICAxMSxcbiAgICAgIDU0LFxuICAgICAgMzMsXG4gICAgICAyMzgsXG4gICAgICA5MCxcbiAgICAgIDI3LFxuICAgICAgMTUwLFxuICAgICAgMTgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMTgzLFxuICAgICAgMTk4LFxuICAgICAgMTg1LFxuICAgICAgMjE3LFxuICAgICAgMTcyLFxuICAgICAgMTc2LFxuICAgICAgMTg1LFxuICAgICAgNDcsXG4gICAgICA2LFxuICAgICAgMjUwLFxuICAgICAgMjU0LFxuICAgICAgNyxcbiAgICAgIDEzMCxcbiAgICAgIDEwMSxcbiAgICAgIDkyLFxuICAgICAgMTE4LFxuICAgICAgMzgsXG4gICAgICAxNzgsXG4gICAgICAyNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkhLTFdYSkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjQ4Njk5NTE0NDM1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MDc3MDE0OTYxMzU3MzoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIvwnZq18J2QhvCdmrXwnZq08J2Qg/CdmqvwnZqq8J2QmFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09LaDdKRUNFTjc2d2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieWlUSnZob094aDZLdXcrei9SbGNOM1dvMWloU2pyR2FTRkZrSU5iMnNWaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJncVRad1o3aEppRlA4ZVgrNjNLbkVaUXZlMHlJSGZCTm9hdW96T3pnbGlzZkozOFp4a2hBWmdkK0FYSTF3NkJZZlVtZ0xEVFJmSGhoNlV3L3BsTlpDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5VmtpUnM1bmpxam01bkhZWHRhOXN1eXBrbXBUSDJWbnJOeEVFYkt3U3VOemlPdnM0L0FDQ1ZsaDZRaEF2Y2ppSGIwYXJUQjBnN3d3QjRZWmRGazBDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0ODY5OTUxNDQzNToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDc0NTMxMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJxd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnF3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwickVTVGNmcFFiVnlUK21GWW9OVFVyMEcxc21ORW5IKzhZb1RiNFE4K2xoTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NzQyOTYyOTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDc0NTMxNDk0N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "YOU WILL ALWAYS REMEMBER ME" ,
  
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "𝙻𝙴𝙶𝙴𝙽𝙳𝙰𝚁𝚈",
  botname : process.env.BOT_NAME  || "𝙻𝙴𝙶𝙴𝙽𝙳𝙰𝚁𝚈",
  ownername:process.env.OWNER_NAME|| "LEGEND",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
