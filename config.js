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
global.caption = process.env.CAPTION || global.caption || "BIANCA" 


global.devs = "+2349068067252" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919403621818,2349068067252";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349068067252";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_38_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU4LFxuICAgICAgICAzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQxLFxuICAgICAgICA1NixcbiAgICAgICAgMTYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDU3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDc0LFxuICAgICAgICA3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY5LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc1LFxuICAgICAgICA0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExLFxuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICA5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY5LFxuICAgICAgICA3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjN6WjcrbVdHQlJGdXJtc1NlU3d2cTkxd1VMOGYyVW1kK05jcEgrcjhiVEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEyOTYyMDA2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTYxMzk4QjFCRUEzODQxMzI5RDZGRUIzMkI0NzlFQkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjEyNzIwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEyOTYyMDA2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUEwMkJCNDIwQUI1QjQ4OUQ2MDUwMkRGN0FCNURGREZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjEyNzIyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBEMXpja3RDUU5XbEpYWUtxRFNaYkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjNkOTNlYTItNjE0Zi00ZWNhLTk2ZWUtY2M5NzU4NzBmM2U3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NSxcbiAgICAgIDIzMixcbiAgICAgIDEzMCxcbiAgICAgIDEwOCxcbiAgICAgIDE4MSxcbiAgICAgIDk0LFxuICAgICAgMTExLFxuICAgICAgOTQsXG4gICAgICA2OSxcbiAgICAgIDE0MyxcbiAgICAgIDE2NyxcbiAgICAgIDg3LFxuICAgICAgMTk4LFxuICAgICAgNDgsXG4gICAgICAyMDAsXG4gICAgICAxNDAsXG4gICAgICA3LFxuICAgICAgNTIsXG4gICAgICAxNTcsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICAyNTMsXG4gICAgICAyNyxcbiAgICAgIDIxMixcbiAgICAgIDIyNSxcbiAgICAgIDE1OCxcbiAgICAgIDQ0LFxuICAgICAgMzksXG4gICAgICA0NixcbiAgICAgIDE5OSxcbiAgICAgIDI1NSxcbiAgICAgIDI0MSxcbiAgICAgIDE4MSxcbiAgICAgIDExOSxcbiAgICAgIDE1MyxcbiAgICAgIDE3NSxcbiAgICAgIDIxNCxcbiAgICAgIDE4OSxcbiAgICAgIDgsXG4gICAgICAyMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUc4TllEQktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjk2MjAwNjg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMxNTA3ODMwNTI2MTgzOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUC9HdDQ4RUVLYSszclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsRXBQK1Y2a05Ubk9aSUhIRHo1SXArNjEvWHJSZUVFZ3lzOFpGMUt1RjNzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZvZUJWQTlNOTRLb3NCeEhTb0tYMG1SeG93bHZ5UHV6cno2eXBPUTE4bzNWYkJ0c0JaTGpwWFphTXN0eDNUSnZjR3N4KzhNcmV3VEIzZGF6dnFGb0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNsZ21WTktzVzk2ZmRwT3NVcklCLzluQmNxQ3hwZlQ2SW44Mlp3bXRMTmxwU0s5cEYwbVVibXdsb3FWOWRNU01hOWxrbytVSndrU0gxZ2lsTlB2VWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjk2MjAwNjg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMTI3MTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPblZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9uVi5qc29uIjogIntcImtleURhdGFcIjpcIm9MTURJdEp6dFRyME5KeVdDZVFKakVDVzJGRFliMEJoQ2YzK2oyaWt2NXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEwNjEwOTMxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMjEyNzIwNDM4XCJ9Igp9 "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "FOR MY CRIMSON" ,
  
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "𝙻𝙴𝙶𝙴𝙽𝙳𝙰𝚁𝚈",
  botname : process.env.BOT_NAME  || "BIANCA",
  ownername:process.env.OWNER_NAME|| "QUEEN MARGARET",


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
