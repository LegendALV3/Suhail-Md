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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_40_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODQsXG4gICAgICAgIDQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNixcbiAgICAgICAgMTgwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTExLFxuICAgICAgICA0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDU2LFxuICAgICAgICAzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTczLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDc3LFxuICAgICAgICA1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDkwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc5LFxuICAgICAgICA5MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4WjNVS3dMZHJuOWkvTTBpQiszYVpLRWJOVnpxaHh5Sk9pd2FMTll2Ry9VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuN2JtSG9FOVIzaTNmcDViQ3N2YnJBXCIsXG4gIFwicGhvbmVJZFwiOiBcImZhZTgwY2I5LWIwNGQtNDMxYi1iZWViLTA5MTAzMzQ5OWMxZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDIxMSxcbiAgICAgIDE0MCxcbiAgICAgIDYzLFxuICAgICAgMjMsXG4gICAgICA5MixcbiAgICAgIDExMixcbiAgICAgIDIyOCxcbiAgICAgIDg1LFxuICAgICAgOTUsXG4gICAgICAyMjcsXG4gICAgICA3MyxcbiAgICAgIDIyOCxcbiAgICAgIDE0NCxcbiAgICAgIDIxOCxcbiAgICAgIDIwMCxcbiAgICAgIDE3NyxcbiAgICAgIDY1LFxuICAgICAgMixcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgMTA1LFxuICAgICAgMTc0LFxuICAgICAgMTc5LFxuICAgICAgMjI5LFxuICAgICAgMTAxLFxuICAgICAgMTQzLFxuICAgICAgNzIsXG4gICAgICAyMDksXG4gICAgICAxMixcbiAgICAgIDIyMyxcbiAgICAgIDE2MixcbiAgICAgIDIyMixcbiAgICAgIDEyMCxcbiAgICAgIDIxNSxcbiAgICAgIDE1OCxcbiAgICAgIDQsXG4gICAgICAzNSxcbiAgICAgIDEyNixcbiAgICAgIDEzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKN000UDc1RlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDg2OTk1NTI0MTg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM1NDI5MTM1NjQ2Nzc5OjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTGVnZW5kXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGY2bDZrQkVKejF6TFFHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvNFo1ZmZha1draDM2dkZsOW5JdHFNaFNnVmpkZjk5YUpPMHhvQ0RqMkc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZ2bHpUa0RVUGE3bk83QjlvQTllQkE5aG1xQkorZHVyMWlxZVFyZ1N5NmQ4cExHQjhLSlk2ZjlRQmo2S3pwaytQdTlDaUFkRnRFWlVMSnlaV3VwSkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhTTlBZazlRdmpxR0tqbHZnLzlQNUw3dVdvTnV5N2pqYWlpa3JYZjFDK3RNMXdEMHRUaUR5NWRCVUNRSUc0RW44b0JabGd3Q1o4eXY4ajQwYXdYQUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQ4Njk5NTUyNDE4OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5MjQ4MzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGZFJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZkUi5qc29uIjogIntcImtleURhdGFcIjpcIjhCS25oRzFnaVdqdCszUmgxaDFNSDlES2lvOCtyMXBSTlk5MEp0NU04K0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzU0ODExMjU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
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
