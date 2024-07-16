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
global.caption = process.env.CAPTION || global.caption || "ＣＲＩＭＳＯＮ亗" 


global.devs = "917559414182" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919403621818";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917559414182";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_35_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODksXG4gICAgICAgIDI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDksXG4gICAgICAgIDY1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMyxcbiAgICAgICAgODcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc3LFxuICAgICAgICA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NCxcbiAgICAgICAgODksXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNixcbiAgICAgICAgMTU3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc5LFxuICAgICAgICA5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY2LFxuICAgICAgICA0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTksXG4gICAgICAgIDU4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgODEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhvZjdacEw0YTRzR2RTSDZKTDZwNkk2UnA2U0pwRThTbkdocS9uQVptaGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDg0NTk0MzM4OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY3MzQ5QzFGOUYwMDJFMjAzNzFCQTdFODdDOTcyNDEzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTEzNjkzNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ4NDU5NDMzODk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MUJDRTZDOTYyRUMxRkMwOTM3MEE1NjY0RDBFQkEyNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjExMzY5MzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0ODQ1OTQzMzg5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjcxMzY4RkY0N0ZCRjQxQjQ5NzY5NjdFMEY1MTc0NUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMTM2OTM1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDg0NTk0MzM4OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEwMUMzMEE3OEQ2MzU1QTIxRjFCN0RFNDhEMzk5NUE5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTEzNjkzNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNUDgwZGhxa1RQbVRmakpQVXlpeXVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk2Y2E0NWIxLTNiNzAtNDBiNS05YjMzLTczMDRlYWQxNjc3NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAyMTgsXG4gICAgICAzMyxcbiAgICAgIDE0LFxuICAgICAgODMsXG4gICAgICAyMzcsXG4gICAgICAyMjYsXG4gICAgICAyNDUsXG4gICAgICAxMTQsXG4gICAgICAyNDksXG4gICAgICA4NyxcbiAgICAgIDMzLFxuICAgICAgMjQ3LFxuICAgICAgOTQsXG4gICAgICAyNDUsXG4gICAgICA1MCxcbiAgICAgIDEzNCxcbiAgICAgIDIzNCxcbiAgICAgIDQ3LFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDExNSxcbiAgICAgIDI1NSxcbiAgICAgIDE2NyxcbiAgICAgIDIzOSxcbiAgICAgIDI1MCxcbiAgICAgIDIsXG4gICAgICAxOTksXG4gICAgICAxNzgsXG4gICAgICAxNzYsXG4gICAgICA1NyxcbiAgICAgIDE2OSxcbiAgICAgIDMsXG4gICAgICA4OCxcbiAgICAgIDU5LFxuICAgICAgMjM3LFxuICAgICAgNDMsXG4gICAgICAyMTEsXG4gICAgICAyMTMsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGS0pNSDhQWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDg0NTk0MzM4OTY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODc4NzU1NTA5ODIxNzQ6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJMZWdlbmRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMam44b29FRUtEdTJiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9KL2g0cnpzTVE2Rzc1TUxpN2xOekRtb0N5NDV2Qm5BS2VaR2ZrQjE4RE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSlpwZnN3elA4V0IwKzYzR1o0Z214VlAxcTUzM2MzUEc2eVRCcGE5cVpVN2lrK2hPWjZnMWxQVjZ1UzR0aHppM2R0a2NIV3pxcS9aVUpqNVF2M2VTQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWTNDcWllMWIvUmlnaFdodVQ1NVEwQlNGdS9WT2RFTW9FQ25GRmZoRTV5QXNOZHF3Vndod0gzQXhUempHV3Vid3hUeEdHWVhsbE54bGN3eE9DSWVHQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDg0NTk0MzM4OTY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTM2OTMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRk9JXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGT0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXbnlsS2RMbytwdmU0ZXFEcFlSWG5oWmdQWTdpOUYzaWwvdXNqc0lZTWhzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTY1OTQzNjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTEzNjkzMTgyOVwifSIKfQ== "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "FOR MY CRIMSON" ,
  
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "𝙻𝙴𝙶𝙴𝙽𝙳𝙰𝚁𝚈",
  botname : process.env.BOT_NAME  || "ＣＲＩＭＳＯＮ",
  ownername:process.env.OWNER_NAME|| "ARYA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
