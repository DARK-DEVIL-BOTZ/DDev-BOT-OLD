const fs = require("fs");
const chalk = require("chalk");


//
global.available = true;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = true;


//auto functioner
global.autoTyping = false; //auto tying in gc (true to on, false to off)
global.autoRecord = false; //auto recording (true to on, false to off)


//
global.Owner = ["94703892615","94767880946"];   //If you want singal number so global.Owner = ['916297175943'] Change into your number
global.OwnerNumber = ["94703892615"];   //If you want singal number so global.Owner = ['916297175943'] Change into your number
global.ownertag = ["94703892615"];
global.OwnerName = "DARK DEVIL";
global.BotName = "DDev";
global.packname = "DDEV BOT";  //Do not change.
global.author = "By: Kai";   //Do not change.
global.BotSourceCode = "https://github.com/Kai0071/A17";  //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/GhRGdwfaMVDCoeAdzILfl"; 


//global.sessionName = "session";


// Set Here Prefix  //
global.prefa = ["."];
global.openAiAPI = "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";


//
global.location = "Kaluthara City, Sri Lanka";
global.reactmoji = "❤️";
global.themeemoji = "🤖";
global.vidmenu = { url: 'https://media.tenor.com/Jdu0Ov8X2sIAAAAC/A17-Bot.mp4' };
global.websitex = "https://github.com/malindunimsara";
global.lolhuman = "DARK DEVIL";


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: '𝙷𝚎𝚛𝚎 𝚢𝚘𝚞 𝚐𝚘...',
    useradmin: '𝚂𝚘𝚛𝚛𝚢, 𝚘𝚗𝚕𝚢 *𝙶𝚁𝙾𝚄𝙿 𝙰𝙳𝙼𝙸𝙽𝚂* 𝚌𝚊𝚗 𝚞𝚜𝚎 𝚝𝚑𝚒𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍!',
    botadmin: '𝚂𝚘𝚛𝚛𝚢, 𝚒 𝚌𝚊𝚗𝚝 𝚎𝚡𝚎𝚌𝚞𝚝𝚎 𝚝𝚑𝚒𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚠𝚒𝚝𝚑𝚘𝚞𝚝 𝚋𝚎𝚒𝚗𝚐 𝚊𝚗 *𝙰𝙳𝙼𝙸𝙽* 𝚘𝚏 𝚝𝚑𝚒𝚜 𝚐𝚛𝚘𝚞𝚙!',
    botowner: '𝙾𝚗𝚕𝚢 𝚖𝚢 *𝙾𝚆𝙽𝙴𝚁* 𝚌𝚊𝚗 𝚞𝚜𝚎 𝚝𝚑𝚒𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍!',
    grouponly: '𝚃𝚑𝚒𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚜 𝚘𝚗𝚕𝚢 𝚖𝚊𝚍𝚎 𝚏𝚘𝚛 *𝙶𝚁𝙾𝚄𝙿𝚂*!',
    privateonly: '𝚃𝚑𝚒𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚜 𝚘𝚗𝚕𝚢 𝚖𝚊𝚍𝚎 𝚏𝚘𝚛 *𝙿𝚁𝙸𝚅𝙰𝚃𝙴 𝙲𝙷𝙰𝚃𝚂*!',
    botonly: '𝙾𝚗𝚕𝚢 𝚝𝚑𝚎 *𝙱𝙾𝚃 𝙸𝚃𝚂𝙴𝙻𝙵* 𝚌𝚊𝚗 𝚞𝚜𝚎 𝚝𝚑𝚒𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍!',
    waiting: '𝙹𝚞𝚜𝚝 𝚆𝚊𝚒𝚝...',
    nolink: '𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚖𝚎 *𝙻𝙸𝙽𝙺*!',
    error: '𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚍!',
    banned: '𝚈𝚘𝚞 𝚊𝚛𝚎 *𝙱𝙰𝙽𝙽𝙴𝙳* 𝚏𝚛𝚘𝚖 𝚞𝚜𝚒𝚗𝚐 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜!',
    bangc: '𝚃𝚑𝚒𝚜 𝚐𝚛𝚘𝚞𝚙 𝚒𝚜 *𝙱𝙰𝙽𝙽𝙴𝙳* 𝚏𝚛𝚘𝚖 𝚞𝚜𝚒𝚗𝚐 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜!',
    nonsfw: '𝙳𝚘𝚗𝚝 𝚋𝚎 𝚊 𝚙𝚎𝚛𝚟𝚎𝚛𝚝! 𝚃𝚑𝚒𝚜 𝚒𝚜 𝚗𝚘𝚝 𝚊 𝙽𝚂𝙵𝚆 𝚎𝚗𝚊𝚋𝚕𝚎𝚍 𝚐𝚛𝚘𝚞𝚙!'
    
}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
