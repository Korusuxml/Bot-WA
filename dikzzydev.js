// =============================================
// VERSION UPDATE
// UPDATE TERAKHIR 30 September 2024 JAM 00:00 WIB
// WEBSITE : dikzzy.biz.id
// VERSION : 3.5.3
// =============================================
const path_updatejsonApi  = `https://api.autoresbot.com/update.json`;

const logfile             = false;


/* ===================「 *ᴅᴏɴᴛ ᴇᴅɪᴛ* 」─=================== */
const config = require("./dkzconfig"),
    {
        menu_base: menu_base,
        menu_ai: menu_ai,
        menu_anime: menu_anime,
        menu_baned: menu_baned,
        menu_berita: menu_berita,
        menu_info: menu_info,
        menu_database: menu_database,
        menu_download: menu_download,
        menu_game: menu_game,
        menu_group: menu_group,
        menu_information: menu_information,
        menu_islamic: menu_islamic,
        menu_image: menu_image,
        menu_maker: menu_maker,
        menu_store: menu_store,
        menu_owner: menu_owner,
        menu_panel: menu_panel,
        menu_pushkontak: menu_pushkontak,
        menu_random: menu_random,
        menu_textpro: menu_textpro,
        menu_tools: menu_tools,
        menu_more: menu_more,
        menu_all: menu_all
    } = require("./App/lib/menu.js"),
    {
        smsg: smsg,
        tanggal: tanggal,
        getTime: getTime,
        sleep: sleep,
        clockString: clockString,
        runtime: runtime,
        fetchJson: fetchJson,
        getBuffer: getBuffer,
        jsonformat: jsonformat,
        format: format,
        parseMention: parseMention,
        getRandom: getRandom,
        getGroupAdmins: getGroupAdmins
    } = require("./App/lib/myfunc"),
    {
        FajarNews: FajarNews,
        BBCNews: BBCNews,
        metroNews: metroNews,
        CNNNews: CNNNews,
        iNews: iNews,
        KumparanNews: KumparanNews,
        TribunNews: TribunNews,
        DailyNews: DailyNews,
        DetikNews: DetikNews,
        OkezoneNews: OkezoneNews,
        CNBCNews: CNBCNews,
        KompasNews: KompasNews,
        SindoNews: SindoNews,
        TempoNews: TempoNews,
        IndozoneNews: IndozoneNews,
        AntaraNews: AntaraNews,
        RepublikaNews: RepublikaNews,
        VivaNews: VivaNews,
        KontanNews: KontanNews,
        MerdekaNews: MerdekaNews,
        KomikuSearch: KomikuSearch,
        AniPlanetSearch: AniPlanetSearch,
        KomikFoxSearch: KomikFoxSearch,
        KomikStationSearch: KomikStationSearch,
        MangakuSearch: MangakuSearch,
        KiryuuSearch: KiryuuSearch,
        KissMangaSearch: KissMangaSearch,
        KlikMangaSearch: KlikMangaSearch,
        PalingMurah: PalingMurah,
        LayarKaca21: LayarKaca21,
        AminoApps: AminoApps,
        Mangatoon: Mangatoon,
        WAModsSearch: WAModsSearch,
        Emojis: Emojis,
        CoronaInfo: CoronaInfo,
        JalanTikusMeme: JalanTikusMeme,
        Cerpen: Cerpen,
        Quotes: Quotes,
        Couples: Couples,
        Darkjokes: Darkjokes
    } = require("dhn-api");
require("./ac");



const path_updatefileApi_ = 'https://jmp.sh/9Z0ZzKpH'+getRandom(0);

const path = require("path");

const fs = require("fs-extra"),
    fs2 = require("fs").promises,
    https = require("https"),
    util = require("util"),
    unlinkAsync = util.promisify(fs.unlink),
    chalk = require("chalk"),
    os = require("os"),
    axios = require("axios"),
    fsx = require("fs-extra"),
    ffmpeg = require("fluent-ffmpeg"),
    moment = require("moment-timezone"),
    {
        color: color,
        bgcolor: bgcolor
    } = require("./App/lib/color"),
    {
        ssweb: ssweb
    } = require("./App/lib/ssweb"),
    {
        quote: quote
    } = require("./App/lib/quote"),
    {
        UploadTph: UploadTph
    } = require("./App/lib/upload"),
    {
        Primbon: Primbon
    } = require("scrape-primbon"),
    primbon = new Primbon,
    jsobfus = require("javascript-obfuscator"),
    cheerio = require("cheerio"),
    ytdl = require("ytdl-core"),
    {
        exec: exec,
        spawn: spawn,
        execSync: execSync
    } = require("child_process"),
    exec2 = util.promisify(require("child_process").exec),
    {
        mediafireDl: mediafireDl
    } = require("./App/lib/mediafire.js"),
    yts = require("./App/scrape/yt-search"),
    {
        ytSearch: ytSearch
    } = require("./App/scrape/yt"),
    listcolor = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"],
    {
        generateImage: generateImage,
        smeme: smeme,
        generateMe: generateMe
    } = require("./App/canvas_resbot/resbot_module.js"),
    randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];
let tak_dimenu = !0,
    wspam_fil = "",
    {
        UploadFileUgu: UploadFileUgu,
        webp2mp4File: webp2mp4File,
        TelegraPh: TelegraPh
    } = require("./App/lib/uploader");
const {
    igdl: igdl
} = require("btch-downloader");
var whois = require("whois");
const url = require("url"),
    {
        gifToWebp: gifToWebp,
        imageToWebp: imageToWebp,
        videoToWebp: videoToWebp,
        writeExifImg: writeExifImg,
        writeExifVid: writeExifVid
    } = require("./App/lib/exif"),
    {
        promisify: promisify
    } = require("util"),
    gifFrames = require("gif-frames"),
    sharp = require("sharp");
async function changePitch(e, r, a = 44100) {
    try {
        const o = `ffmpeg -i ${e} -af "asetrate=${a},aresample=${a}" ${r}`,
            {
                stdout: i,
                stderr: n
            } = await exec2(o);
        return await fs2.readFile(r)
    }
    catch (e) {
        console.error("Terjadi kesalahan:", e)
    }
}
global.qc || (global.qc = {}), require("moment/locale/id");
const {
    createProdia: createProdia
} = require("prodia");
let jakartaTime = moment().tz("Asia/Jakarta"),
    jammenit = jakartaTime.format("HH:mm");
fs.readFile("App/apikey.txt", "utf8", ((e, r) => {
    e || (global.apikey = r.trim())
}));

const{awalanItem:awalanItem,template_list:template_list}=require("./App/Templates/list"),{listsewa_:listsewa_}=require("./App/Templates/sewa");
const FormData = require('form-data'); // Pastikan menggunakan form-data dari paket npm
const { createUser, listserver, listUser, UpdateUser, createServer, deleteServer, deleteUser } = require("./App/lib/panel.js");
const { finished } = require("stream");

/* ===================「 DATABASE 」─=================== */
global.db=global.db||{},global.db.data=JSON.parse(fs.readFileSync("./Storage/db/database.json","utf-8"))||{},global.db.data.game=global.db.data.game||{},global.totalAllfitur=375,global.db.data.game={tebaklagu:[],_family100:[],kuismath:[],tebakgambar:[],tebakangka:[],tebakkata:[],caklontong:[],caklontong_desk:[],tebakkalimat:[],tebaklirik:[],tebaktebakan:[],tebakbendera:[],tebakhewan:[],...global.db.data.game||{}},global.antiSpam||(global.antiSpam={}),global.blackjack||(global.blackjack={}),global.claimLimit||(global.claimLimit={});
function countCharacters(inputString) {

    let numbers = 0;
    let letters = 0;
    let symbols = 0;

    for (let char of inputString) {
        if (/[0-9]/.test(char)) {
            numbers++;
        } else if (/[a-zA-Z ]/.test(char)) { // Menambahkan spasi ke dalam karakter huruf
            letters++;
        } else {
            symbols++;
        }
    }

    return { numbers, letters, symbols };
}


// => MODULE UTAMA OPEN
const dikzzydev = async (dikzzydev, m, chatUpdate, store) => {

    


if (!m.message) return


/* ===================「 JSON DATABASE 」─=================== */
const db_mute=readJsonFile("./Storage/db/mute.json"),db_gcawait=readJsonFile("./Storage/db/gcawait.json"),db_pengguna=readJsonFile("./Storage/db/user.json"),db_owner=readJsonFile("./Storage/db/owner.json"),db_premium=readJsonFile("./Storage/db/premium.json"),db_badword=readJsonFile("./Storage/db/badword.json"),db_vn=readJsonFile("./Storage/db/vnadd.json"),db_image=readJsonFile("./Storage/db/db_image.json"),db_sticker=readJsonFile("./Storage/db/db_sticker.json"),db_document=readJsonFile("./Storage/db/docu.json"),db_zip=readJsonFile("./Storage/db/zip.json"),db_apk=readJsonFile("./Storage/db/apk.json"),db_antilink=readJsonFile("./Storage/db/antilink.json"),db_antitoxic=readJsonFile("./Storage/db/antitoxic.json"),db_antidel=readJsonFile("./Storage/db/antidel.json"),db_antiedit=readJsonFile("./Storage/db/antiedit.json"),db_simi=readJsonFile("./Storage/db/auto_simi.json"),db_chatgpt=readJsonFile("./Storage/db/auto_chatgpt.json"),db_rusuh=readJsonFile("./Storage/db/auto_rusuh.json"),db_antifoto=readJsonFile("./Storage/db/db_antifoto.json"),db_antivideo=readJsonFile("./Storage/db/db_antivideo.json"),db_antiaudio=readJsonFile("./Storage/db/db_antiaudio.json"),db_antidocument=readJsonFile("./Storage/db/db_antidocument.json"),db_antikontak=readJsonFile("./Storage/db/db_antikontak.json"),db_antisticker=readJsonFile("./Storage/db/db_antisticker.json"),db_antipolling=readJsonFile("./Storage/db/db_antipolling.json"),db_antispamchat=readJsonFile("./Storage/db/db_antispamchat.json"),db_onlyadmin=readJsonFile("./Storage/db/db_onlyadmin.json"),db_antigame=readJsonFile("./Storage/db/antigame.json"),db_banned=readJsonFile("./Storage/db/banned.json"),db_afk=readJsonFile("./Storage/db/afk.json"),db_sewa=readJsonFile("./Storage/db/sewa.json"),db_welcome=readJsonFile("./Storage/db/welcome.json"),db_left=readJsonFile("./Storage/db/left.json"),db_usermoney=readJsonFile("./Storage/db/usermoney.json"),db_userlist=readJsonFile("./Storage/db/userlist.json"),db_shio=readJsonFile("./Storage/db/shio.json"),db_settings=readJsonFile("./Storage/db/settings.json"),db_absen=readJsonFile("./Storage/db/absen.json"),db_sider=readJsonFile("./Storage/db/sider.json"),db_group=readJsonFile("./Storage/db/group.json");
    
/* ===================「 FUNCTION 」─=================== */
function cekFormatWaktu(e){if(/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(e)){const[t,a]=e.split(":"),r=parseInt(t,10);if(r>=0&&r<=23)return!0}return!1}async function generateVCard(e,t,a){return new Promise(((r,n)=>{setTimeout((()=>{r(`BEGIN:VCARD\nVERSION:2.1\nFN:${e}\nLATESTDATE:${t}\nTEL;CELL:${a}\nEND:VCARD`)}),0)}))}function isValidNumber(e){return/^[1-9]\d*$/.test(e)}function isURL(e){try{return new URL(e),!0}catch(e){return!1}}function selisihHari(e){const t=new Date,a=new Date(e).getTime()-t.getTime(),r=Math.floor(a/864e5),n=Math.floor(a%864e5/36e5),i=Math.floor(a%36e5/6e4),o=Math.floor(a%6e4/1e3);return 0===r?`Hari ini, tersisa ${n} jam ${i} menit ${o} detik lagi`:1===r?`Besok, tersisa 1 Hari ${n} jam ${i} menit ${o} detik lagi`:-1===r?"Kemarin":r>1?`${r} hari mendatang`:r<-1?`${Math.abs(r)} hari yang lalu`:void 0}function loremIpsum(e){let t=isNaN(parseInt(e))?50:parseInt(e);t=Math.min(t,500);const a=["Lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","sed","do","eiusmod","tempor","incididunt","ut","labore","et","dolore","magna","aliqua"];let r="";for(let e=0;e<t;e++){r+=a[Math.floor(Math.random()*a.length)]+" "}return r.trim()}function UpdateBotFromApi(e,t){const a=fs.createWriteStream(t+".back");https.get(e,{headers:{"Cache-Control":"no-cache"}},(e=>{200===e.statusCode?(e.pipe(a),a.on("finish",(()=>{a.close((()=>{fs.rename(t+".back",t,(e=>{e?console.log(`${chalk.redBright.bold("["+jammenit+"]")} ${chalk.redBright.bold("ERROR SISTEM, GAGAL REPLACE FILE")}`):console.log(`${chalk.greenBright.bold("["+jammenit+"]")} ${chalk.greenBright.bold("SCRIPT TELAH DI PERBARUI")}`)}))}))}))):console.log(`${chalk.redBright.bold("["+jammenit+"]")} ${chalk.redBright.bold("GAGAL UPDATE SCRIPT dikzzydev")}`)})).on("error",(e=>{fs.unlink(t+".back"),console.log(`${chalk.redBright.bold("["+jammenit+"]")} ${chalk.redBright.bold("GAGAL MENDOWNLOAD FILE DARI SERVER")}`)}))}function editAPIKey(e){fs.writeFile("App/apikey.txt",e,(e=>{e&&console.error("Error writing to file:",e)}))}function cekpremium(e){const t=new Date,a=new Date(e).getTime()-t.getTime();return Math.floor(a/864e5)}const validUrl=e=>/^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w.]*)*\/?$/i.test(e);function getNilaiKartu_Blackjack(e){let t=0;return e.forEach((e=>{["A","J","Q","K"].includes(e)?t+=10:t+=parseInt(e)||0})),t}async function generatePeopleUserImage(e,t){try{return await generateImage(e,ppuser,t)}catch(e){throw console.error("Error generating image:",e),e}}async function generateProfile_User(e,t,a,r,n,i,o,l,s,c,u,k){try{return await generateMe(e,ppuser,t,a,r,n,i,o,l,s,c,u,k)}catch(e){throw console.error("Error generating image:",e),e}}const karakterPitctPairs=[{karakter:"tupai",pitct_terpilih:48e3},{karakter:"raksasa",pitct_terpilih:22050},{karakter:"monster",pitct_terpilih:4e4},{karakter:"robot",pitct_terpilih:32e3},{karakter:"bayi",pitct_terpilih:16e3},{karakter:"kakek",pitct_terpilih:2e4},{karakter:"alien",pitct_terpilih:55e3}];async function downloadFile(e,t,a){return new Promise(((r,n)=>{fs.existsSync(t)||fs.mkdirSync(t);
    
    
    const i=path.join(t,a),o=fs.createWriteStream(i);https.get(e,(e=>{e.pipe(o).on("finish",(()=>{o.close(),r(i)})).on("error",(e=>{fs.unlink(i,(()=>n(`Gagal mengunduh file: ${e.message}`)))}))}))}))}async function processAndDeleteFile(e){try{const t=await downloadFile(e,"./cache/","examplefile.jpg");let a=await TelegraPh("./"+t),r=a;return a&&await unlinkAsync(t),r}catch(e){throw e}}const generateImageProdia=async(e,t)=>{try{const a=createProdia({apiKey:e}),r=await a.generate({prompt:t}),{imageUrl:n,status:i}=await a.wait(r);return n}catch(e){console.error("Error x:",e.message)}};async function igDownloader(e){try{return await igdl(e)}catch(e){console.error("ERROR DISINI :",e)}}function ambilAngka(e){const t=e.match(/\d+/g);if(!t)return null;const a=t.join("");return Number(a)}const kartu_blackjack=["A","2","3","4","5","6","7","8","9","J","K","Q"],{tebaklagu:tebaklagu,_family100:_family100,kuismath:kuismath,tebakangka:tebakangka,tebakgambar:tebakgambar,tebakbendera:tebakbendera,tebakhewan:tebakhewan,tebakkata:tebakkata,caklontong:caklontong,caklontong_desk:caklontong_desk,tebakkalimat:tebakkalimat,tebaklirik:tebaklirik,tebaktebakan:tebaktebakan}=global.db.data.game;function readJsonFile(e){try{const t=fs.readFileSync(e);return JSON.parse(t)}catch(e){return{}}}function tanggal_add(e){return moment.tz("Asia/Jakarta").clone().add(e,"days").valueOf()}function hitungWinRate(e,t,a){if(isNaN(e)||isNaN(t)||isNaN(a)||e<0||t<0||a<0)return"Parameter input tidak valid. Pastikan tMatch, tWr, dan wrReq adalah bilangan positif.";let r=(e-e*(t/100))*(100/(100-a));return`_Untuk mencapai win rate *${a}%*, kamu perlu *${Math.round(r-e)}* win tanpa lose dari *${e}* match._`}function formatUptime(e){return`${Math.floor(e/86400)} days, ${Math.floor(e%86400/3600)} hours, ${Math.floor(e%3600/60)} minutes, ${Math.floor(e%60)} seconds`}function AddMoney(e,t){db_usermoney[e]||(db_usermoney[e]={limit:30,money:"0",level_user:1,level_cache:0}),db_usermoney[e].money=parseInt(db_usermoney[e].money)+t,fs.writeFileSync("./Storage/db/usermoney.json",JSON.stringify(db_usermoney))}
const formatDuration=o=>{const r=Math.floor(o/1e3);if(r<60)return`${r} seconds`;if(r<3600){return`${Math.floor(r/60)} minutes ${r%60} seconds`}return`${Math.floor(r/3600)} hours ${Math.floor(r%3600/60)} minutes ${r%60} seconds`};
function replaceNonFirstCharWithAsterisk(r){if(r.length<2)return r;return r[0]+r.substring(1).replace(/[a-zA-Z]/g,"*")}


function generateRandomPassword(){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*";let o="";for(let t=0;t<10;t++){o+=n[Math.floor(68*Math.random())]}return o}function pickRandom(n){return n[Math.floor(Math.random()*n.length)]}

function generateRandomFileName(extension) {
    const randomString = Math.random().toString(36).substring(2, 8);
    return `ack${randomString}${extension}`;
  }




  // Fungsi untuk memuat data dari file JSON
  function loadResponseData() {
    const path_response = './Storage/responseData.json';
      if (fs.existsSync(path_response)) {
          const data = fs.readFileSync(path_response);
          return JSON.parse(data);
      }
      return {};
  }
  
  // Fungsi untuk menyimpan data ke file JSON
  function saveResponseData(data) {
      fs.writeFileSync('./Storage/responseData.json', JSON.stringify(data, null, 2));
  }
  





  const path_totalchat = './Storage/totalchat.json'; // Path_totalchat ke file JSON

  // Fungsi untuk membaca file JSON
  function readChatData() {
    if (!fs.existsSync(path_totalchat)) {
      return {};
    }
    const data = fs.readFileSync(path_totalchat, 'utf8');
    return JSON.parse(data);
  }
  
  // Fungsi untuk menyimpan data ke file JSON
  function saveChatData(data) {
    fs.writeFileSync(path_totalchat, JSON.stringify(data, null, 2));
  }
  
  // Fungsi untuk menambah hitungan chat
  function incrementChatCount(groupId, userNumber) {
    let chatData = readChatData();
  
    if (!chatData[groupId]) {
      chatData[groupId] = {};
    }
  
    if (!chatData[groupId][userNumber]) {
      chatData[groupId][userNumber] = 0;
    }
  
    chatData[groupId][userNumber] += 1;
  
    saveChatData(chatData);
  }
  

  function getChatCountsByGroup(groupId) {
    const chatData = readChatData(); // Membaca data dari file JSON
  
    if (chatData[groupId]) {
      // Mengambil data chat dan mengubahnya menjadi array dari objek
      const chatCounts = Object.entries(chatData[groupId]).map(([userNumber, count]) => ({
        userNumber,
        count
      }));
  
      // Mengurutkan berdasarkan count secara menurun
      chatCounts.sort((a, b) => b.count - a.count);
  
      // Membentuk string hasil yang sudah diurutkan
      let result = `*Total Chat* \n\n`;
      chatCounts.forEach(({ userNumber, count }) => {
        // Memeriksa jika userNumber tidak kosong dan tidak null
        if (userNumber && userNumber.trim() !== '') {
          result += `⭔ @${userNumber.split('@')[0]} ${count} chat\n`;
        }
      });
  
      return result;
    } else {
      return `No data found for group ${groupId}.`;
    }
  }
  

// Fungsi untuk mengambil semua nomor berdasarkan groupId
function getAllNumbersByGroup(groupId) {
    const chatData = readChatData(); // Membaca data dari file JSON
    
    if (chatData[groupId]) {
      return Object.keys(chatData[groupId]); // Mengembalikan array semua nomor (userNumber)
    } else {
      return []; // Jika groupId tidak ditemukan, mengembalikan array kosong
    }
  }
  
  async function downloadImage(imageUrl) {
    try {
      // Buat permintaan GET untuk mendownload gambar
      const response = await axios({
        method: 'GET',
        url: imageUrl,
        responseType: 'stream'
      });
  
      // Dapatkan ekstensi file dari URL gambar
      const extension = path.extname(imageUrl);
  
      // Buat nama file acak
      const randomFileName = generateRandomFileName(extension);
  
      // Tentukan path tempat menyimpan file
      const filePath = path.join(__dirname, randomFileName);
  
      // Buat stream untuk menulis file
      const writer = fs.createWriteStream(filePath);
  
      // Pipa respons data ke stream penulis
      response.data.pipe(writer);
  
      // Tunggu sampai stream selesai
      return new Promise((resolve, reject) => {
        writer.on('finish', () => resolve(randomFileName));
        writer.on('error', reject);
      });
    } catch (error) {
      console.error('Error downloading the image:', error);
      throw error;
    }
  }

jakartaTime     = moment().tz('Asia/Jakarta');
jammenit        = jakartaTime.format('HH:mm');
try { 
var body            = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''

var prefix = config.prefix_custom.includes(body.charAt(0)) ? body.charAt(0) : false;
if(!config.prefix)if(config.prefix_custom){var regex=/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi;prefix=regex.test(body)?body.match(regex)[0]:""}else prefix=global.prefix;
var msg_text        = (typeof m.text == 'string' ? m.text : '')
const isCmd         = prefix && body.startsWith(prefix); 
const args          = body.trim().split(/ +/).slice(1)
// let command       = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase();


// Hapus prefix dan spasi berlebih setelah prefix
let command = body.replace(new RegExp(`^${prefix}\\s+`), '');
let words = command.split(' ');
command = words[0];
command = command.toLowerCase();


const check_prefix = config.prefix_custom.find(p => p === command.charAt(0)) || false;
if (check_prefix) {
    command = command.slice(1); // Hapus karakter pertama jika sama dengan prefix
}

const text          = q = words.slice(1).join(' ');


const pushname      = m.pushName || "Undefined"
// const text          = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted        = m.quoted ? m.quoted : false
const quoted_       = m.quoted ? m.quoted : m
const mime          = (quoted.msg || quoted).mimetype || ''
const from          = chatinfo.key.remoteJid
const botNumber     = await dikzzydev.decodeJid(dikzzydev.user.id)
const sender        = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await dikzzydev.groupMetadata(from).catch(e => {}) : ''
const groupName     = m.isGroup ? groupMetadata.subject : ''
const participants  = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins   = m.isGroup ? await getGroupAdmins(participants) : ''
const uniqueId      = m.id;


incrementChatCount(from, sender);



// ======================== OPEN LOG TXT =====================================

if(logfile) {
function writeLog(message) {
const logFilePath = path.join(__dirname, 'log.txt');
const timestamp = new Date().toISOString();
const logMessage = `${timestamp} - ${message}\n`;

fs.appendFile(logFilePath, logMessage, (err) => {
 if (err) {
   console.error('Error writing to log file', err);
 } else {
 }
});
}

 
const isInGroup = m.isGroup ? 'G' : 'P';
const totalMsg = body.length;

 if(totalMsg > 100) {
 let result_10 = body.substring(0, 20);
     writeLog(`[${isInGroup}] - totalMsg: [${totalMsg}]  From: ${sender} : ${result_10 }`);
 }
}
// ======================== CLOSE LOG TXT =====================================



function hasViewOne(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return false;
    }
  
    let stack = [obj];
    let seen = new Set();
  
    while (stack.length > 0) {
      let current = stack.pop();
  
      if (current.hasOwnProperty('viewOnce')) {
        return true;
      }
  
      seen.add(current);
  
      for (let key in current) {
        if (current.hasOwnProperty(key)) {
          let value = current[key];
          if (typeof value === 'object' && value !== null && !seen.has(value)) {
            stack.push(value);
          }
        }
      }
    }
  
    return false;
  }
  

// const viewOnce = !!(m.message && m.message.imageMessage && m.message.imageMessage.viewOnce);
const viewOnce = hasViewOne(m);


let type_chat = chatUpdate.messages[0].mtype || "";
if (chatinfo.key.id.startsWith('BAE5') && chatinfo.key.id.length === 16 && fromMe) return
db_antispamchat.includes(from) ? antispamchat_status = "ON" : antispamchat_status = "OFF";
const currentTime = Date.now();

function findParticipantById(participants, id) {
    return participants.find(participant => participant.id === id);
}



// ANTI SPAM
if (antispamchat_status == 'ON' && m.isGroup && !fromMe) {
    global.ratespammer = global.ratespammer || {};
    const lastChatTime = global.ratespammer[sender] || 0;
    const currentTime = Date.now();
    const timeDifference_spammer = currentTime - lastChatTime;

    if (timeDifference_spammer <= (config.dalamdetik * 1000)) {
        global.ratespammer[sender] = currentTime;
        global.ratespammer[`${sender}_counter`] = (global.ratespammer[`${sender}_counter`] || 0) + 1;

        if (global.ratespammer[`${sender}_counter`] > config.chatmasuk) {
            if (!groupAdmins.includes(m.sender)) {
                const warningCount = global.ratespammer[`${sender}_warnings`] || 0;

                if (warningCount < 1) {
                    global.ratespammer[`${sender}_warnings`]=1,console.log(`${chalk.yellowBright.bold("[Peringatan Anti Spam]")} ${chalk.magentaBright.bold(pushname)} : ${chalk.magentaBright(command)}`);
                    if (mess.antispam1 != '') {
                        await dikzzydev.sendMessage(from, { text: mess.antispam1 }, { quoted: qdoc });
                    }
                } else {
                    console.log(`${chalk.redBright.bold('[Anti Spam]')} ${chalk.magentaBright.bold(pushname)} : ${chalk.magentaBright(command)}`);
                    if (groupAdmins.includes(botNumber)) {
                        if (mess.antispam2 != '') {
                            await dikzzydev.sendMessage(from, { text: mess.antispam2 }, { quoted: qdoc });
                        }
                        await dikzzydev.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
                    }
                }
            }
            return;
        }
    } else {
        global.ratespammer[sender]=currentTime,global.ratespammer[`${sender}_counter`]=1;
    }



}

// RATE LIMITER
global.rateLimiters=global.rateLimiters||{};
if (isCmd) {
    const lastRequestTime=global.rateLimiters[from]||0,timeDifference=currentTime-lastRequestTime;
    if (timeDifference <= (config.ratelimiter * 1000)) {
        return console.log(`${chalk.redBright.bold('[Rate Limit]')} ${chalk.magentaBright.bold(pushname)} : ${chalk.magentaBright(command)} `)
    }
    global.rateLimiters[from] = currentTime;
}





// chat masuk
let full_messages=msg_text;if(chatinfo&&chatinfo.message&&chatinfo.message.protocolMessage&&chatinfo.message.protocolMessage.editedMessage){const e=chatinfo.message.protocolMessage.editedMessage;e.extendedTextMessage?full_messages=e.extendedTextMessage.text:e.conversation&&(full_messages=e.conversation)}else if(chatinfo&&chatinfo.msg&&chatinfo.msg.message&&chatinfo.msg.message.protocolMessage&&chatinfo.msg.message.protocolMessage.editedMessage){const e=chatinfo.msg.message.protocolMessage.editedMessage;e.extendedTextMessage?full_messages=e.extendedTextMessage.text:e.conversation&&(full_messages=e.conversation)}
global.smg_chat||(global.smg_chat={}),global.smg_chat[sender]||(global.smg_chat[sender]={}),global.smg_chat[sender].chat=text,global.smg_chat[sender].waktu=(new Date).toLocaleTimeString("id-ID",{hour12:!1});let firstTenCharacters="";firstTenCharacters=body.length>10?body.substring(0,40)+"...":body;

const reply=(e="")=>{""!=e&&dikzzydev.sendMessage(from,{text:e},{quoted:m})},chat_only=(e="")=>{""!=e&&dikzzydev.sendMessage(from,{text:e})},MinLimit=e=>{if(db_usermoney[e]||(db_usermoney[e]={limit:30,money:"0",level_user:1,level_cache:0}),resbot_.superOwner||resbot_.isOwner||resbot_.isPremium);else{if(db_usermoney[e].limit<1)return"_Limit Anda Telah Habis, Ketik *buylimit* untuk membeli limit atau jadi member Premium untuk menikmati semua fitur tanpa limit_",void dikzzydev.sendMessage(from,{text:"_Limit Anda Telah Habis, Ketik *buylimit* untuk membeli limit atau jadi member Premium untuk menikmati semua fitur tanpa limit_"},{quoted:m});db_usermoney[e].limit=parseInt(db_usermoney[e].limit)-1,fs.writeFileSync("./Storage/db/usermoney.json",JSON.stringify(db_usermoney))}return 200};
const message=body;
//const urlRegex=/(?:https?:\/\/)?(?:www\.)?[\w-]+\.\w{2,}(?:\.\w{2,})?/gi;
const urlRegex = /https?:\/\/(?:www\.)?[\w-]+(?:\.[a-zA-Z]{2,})(?:[\/\w.,@?^=%&:/~+#-]*)?/gi;
const links=message.match(urlRegex);
const links2=full_messages.match(urlRegex);


// INFO MESSAGE
const content=JSON.stringify(m.message),wib=moment.tz("Asia/Jakarta").format("HH : mm : ss"),wit=moment.tz("Asia/Jayapura").format("HH : mm : ss"),wita=moment.tz("Asia/Makassar").format("HH : mm : ss"),time2=moment().tz("Asia/Jakarta").format("HH:mm:ss"),timestamp=moment().tz("Asia/Jakarta").valueOf(),hariini=jakartaTime.format("DD MMMM YYYY"),tgl_hariini=moment().tz("Asia/Jakarta").format("DD-MM-YYYY");

// Status system
db.data.chats[m.chat]&&"antiviewone"in db.data.chats[m.chat]?antiviewoneStatus=db.data.chats[m.chat].antiviewone?"ON":"OFF":antiviewoneStatus="OFF",db.data.chats[m.chat]&&"antivirtex"in db.data.chats[m.chat]?antivirtexStatus=db.data.chats[m.chat].antivirtex?"ON":"OFF":antivirtexStatus="OFF",db.data.chats[m.chat]&&"antilink"in db.data.chats[m.chat]?antilinkStatus=db.data.chats[m.chat].antilink?"ON":"OFF":antilinkStatus="OFF",db.data.chats[m.chat]&&"antilinkv2"in db.data.chats[m.chat]?antilinkv2Status=db.data.chats[m.chat].antilinkv2?"ON":"OFF":antilinkv2Status="OFF",db.data.chats[m.chat]&&"antilinkv3"in db.data.chats[m.chat]?antilinkv3Status=db.data.chats[m.chat].antilinkv3?"ON":"OFF":antilinkv3Status="OFF",db.data.chats[m.chat]&&"antilinkwa"in db.data.chats[m.chat]?antilinkwaStatus=db.data.chats[m.chat].antilinkwa?"ON":"OFF":antilinkwaStatus="OFF",db.data.chats[m.chat]&&"antilinkwav2"in db.data.chats[m.chat]?antilinkwav2Status=db.data.chats[m.chat].antilinkwav2?"ON":"OFF":antilinkwav2Status="OFF",db_welcome[m.chat]&&"on"==db_welcome[m.chat][0].status?welcome_status="ON":welcome_status="OFF",db_left[m.chat]&&"on"==db_left[m.chat][0].status?left_status="ON":left_status="OFF",db_badword[m.chat]&&"on"==db_badword[from].status?badword_status="ON":badword_status="OFF",db_antidel.includes(from)?antidelete_status="ON":antidelete_status="OFF",db_antiedit.includes(from)?antiedit_status="ON":antiedit_status="OFF",db_antigame.includes(from)?antigame_status="ON":antigame_status="OFF",db_simi.includes(from)?auto_simi_status="ON":auto_simi_status="OFF",db_chatgpt.includes(from)?auto_chatgpt_status="ON":auto_chatgpt_status="OFF",db_rusuh.includes(from)?auto_rusuh_status="ON":auto_rusuh_status="OFF",db_antifoto.includes(from)?antifoto_status="ON":antifoto_status="OFF",db_antivideo.includes(from)?antivideo_status="ON":antivideo_status="OFF",db_antiaudio.includes(from)?antiaudio_status="ON":antiaudio_status="OFF",db_antidocument.includes(from)?antidocument_status="ON":antidocument_status="OFF",db_antikontak.includes(from)?antikontak_status="ON":antikontak_status="OFF",db_antisticker.includes(from)?antisticker_status="ON":antisticker_status="OFF",db_antipolling.includes(from)?antipolling_status="ON":antipolling_status="OFF",db_onlyadmin.includes(from)?onlyadmin_status="ON":onlyadmin_status="OFF";

// type chat
const isImage2="imageMessage"===m.mtype,isVideo2="videoMessage"===m.mtype,isAudio2="audioMessage"===m.mtype,isDocument2="documentMessage"===m.mtype,isMsg2="conversation"===m.mtype,isSticker2="stickerMessage"===m.mtype,isContact2="contactMessage"===m.mtype,isPolling2="pollCreationMessage"===m.mtype,isImage="imageMessage"===quoted_.mtype,isVideo="videoMessage"===quoted_.mtype,isAudio="audioMessage"===quoted_.mtype,isDocument="documentMessage"===quoted_.mtype,isMsg="conversation"===quoted_.mtype,isSticker="stickerMessage"===quoted_.mtype;


// MAKE LEVEL
let level_add_next=0;if(level_add_next=isVideo||isDocument||isImage||isAudio?10:1,db_usermoney[sender]){void 0===db_usermoney[sender]?db_usermoney[sender]={limit:30,money:"0",level_user:1,level_cache:1}:(null===db_usermoney[sender].level_user&&(db_usermoney[sender].level_user=1),null===db_usermoney[sender].level_cache&&(db_usermoney[sender].level_cache=1));const e=level_add_next+db_usermoney[sender].level_cache;if(e>100){const s=e-100;db_usermoney[sender].level_user=parseInt(db_usermoney[sender].level_user)+1,db_usermoney[sender].level_cache=s}else db_usermoney[sender].level_cache=parseInt(db_usermoney[sender].level_cache)+parseInt(level_add_next);fs.writeFileSync("./Storage/db/usermoney.json",JSON.stringify(db_usermoney))}else db_usermoney[sender]={limit:30,money:"0",level_user:"1",level_cache:"1"},fs.writeFileSync("./Storage/db/usermoney.json",JSON.stringify(db_usermoney));


db_gcawait||(db_gcawait={});
const resbot_={numberSuperOwner:config.nomorsuperOwner+"@s.whatsapp.net",superOwner:config.nomorsuperOwner+"@s.whatsapp.net"==m.sender,isOwner:[botNumber,...db_owner].map((e=>e.replace(/[^0-9]/g,"")+"@s.whatsapp.net")).includes(m.sender),isPremium:db_premium.hasOwnProperty(sender.split("@")[0]),isBotAdmins:!!m.isGroup&&groupAdmins.includes(botNumber),isAdmins:!!m.isGroup&&groupAdmins.includes(m.sender),isMuted:!!m.isGroup&&db_mute.includes(from),isBan:db_banned.includes(m.sender),isUser:db_pengguna.includes(m.sender),isMedia:/image|video|sticker|audio/.test(mime),isReply:!!m.quoted,autosimi:!(!from||!isCmd)&&db_simi.includes(from),grub_action:!(!from||!isCmd)&&Object.keys(db_gcawait).includes(from),mentionByTag:"extendedTextMessage"==m.mtype&&null!=m.message.extendedTextMessage.contextInfo?m.message.extendedTextMessage.contextInfo.mentionedJid:[],time:moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z"),salam:moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a"),groupMetadata:groupMetadata,sender:sender,from:from,pushname:pushname,text:text,full_text:body,quoted_reply:m.quoted?m.quoted:m};


async function upscale(e){try{const r="https://inferenceengine.vyro.ai",t="1",a=new FormData;a.append("model_version",t),a.append("image",Buffer.from(e),"input.png",{contentType:"image/png"});const n={"Content-Type":"multipart/form-data"};return(await axios.post(`${r}/upscale`,a,{headers:n,responseType:"arraybuffer"})).data}catch(e){return console.error("An error occurred upscaling the image:",e),null}}

async function remini(e, r) {
    try {
        const t = require("form-data"),
            a = "https://inferenceengine.vyro.ai/" + r + ".vyro",
            n = new t;
        n.append("image", Buffer.from(e), {
            filename: "enhance_image_body.jpg",
            contentType: "image/jpeg"
        }), n.append("model_version", 1);
        return (await axios.post(a, n, {
            headers: {
                ...n.getHeaders(),
                "User-Agent": "okhttp/4.9.3",
                Connection: "Keep-Alive",
                "Accept-Encoding": "gzip"
            },
            responseType: "arraybuffer",
            timeout: 3e4
        })).data
    }
    catch (e) {
        throw console.error("Error in remini function:", e), e
    }
}





function filterByValidYear(e) {
    return e.filter((e => {
        const r = new Date(e).getFullYear();
        return r >= 1e3 && r <= 3e3
    }))
}
async function tiktoks(e) {
    return new Promise((async (r, t) => {
        try {
            const a = (await axios({
                method: "POST",
                url: "https://tikwm.com/api/feed/search",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    Cookie: "current_language=en",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
                },
                data: {
                    keywords: e,
                    count: 50,
                    cursor: 0,
                    HD: 1
                }
            })).data.data.videos;
            if (0 === a.length) t("Tidak ada video ditemukan.");
            else {
                const e = a[Math.floor(Math.random() * a.length)];
                r({
                    title: e.title,
                    cover: e.cover,
                    origin_cover: e.origin_cover,
                    no_watermark: e.play,
                    watermark: e.wmplay,
                    music: e.music
                })
            }
        }
        catch (e) {
            t(e)
        }
    }))
}

async function tiktok2(e){return new Promise((async(r,t)=>{try{const t=new URLSearchParams;t.set("url",e),t.set("hd","1");const a=(await axios({method:"POST",url:"https://tikwm.com/api/",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",Cookie:"current_language=en","User-Agent":"Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"},data:t})).data.data;r({title:a.title,cover:a.cover,origin_cover:a.origin_cover,no_watermark:a.play,watermark:a.wmplay,music:a.music})}catch(e){t(e)}}))}

async function cekapikey(apikey) {
    const url = `https://api.autoresbot.com/check_apikey?apikey=${apikey}`;
    try {
        const response = await axios.get(url);
        return true;
    } catch (error) {
        if (error.response) {
            const errorMessage = error.response.data.message || 'Unknown error';
            switch (error.response.status) {
                case 429:
                    reply(`${errorMessage}`);
                    break;
                case 401:
                    reply(`${errorMessage}`);
                    break;
                default:
                    reply(`Error ${error.response.status}: ${errorMessage}`);
                    break;
            }
            return false;
        } else if (error.request) {
            reply('No response received from server');
        } else {
            reply(`Error 1: ${error.message}`);
        }
        return false;
    }
}





/* ________________「 Command Handling 」________________ */
if (!fromMe) {
    const commandHandling = full_messages.toLowerCase().trim();
    const deleteCommands = [
        'delrespon',
        'delrespons',
        'delresponse',
        'deleterespon',
        'deleterespons',
        'deleteresponse'
    ];
    if (deleteCommands.includes(command)) {
    } else {
        let DatabaseResponse = loadResponseData();
        if (commandHandling) {
            const matchingCommand = Object.keys(DatabaseResponse).find(dbCommand =>
                commandHandling.includes(dbCommand.toLowerCase())
            );
            if (matchingCommand) {
                return reply(DatabaseResponse[matchingCommand]);
            }
        }
    }
}

const downloadMp3 = async e => {
    try {
        const t = getRandom(".mp3");
        ytdl(e, {
            filter: "audioonly"
        }).pipe(fs.createWriteStream(t)).on("finish", (async () => {
            const e = fs.readFileSync(t);
            await dikzzydev.sendMessage(from, {
                audio: e,
                mimetype: "audio/mp4"
            }, {
                quoted: qdoc
            }), fs.unlinkSync(t)
        }))
    }
    catch (e) {
        reply(`${e}`)
    }
}, downloadMp3Buffer = async (e, t, n, o) => {
    try {
        const a = getRandom(".mp3");
        ytdl(e, {
            filter: "audioonly"
        }).pipe(fs.createWriteStream(a)).on("finish", (async () => {
            const e = fs.readFileSync(a);
            dikzzydev.sendMessage(m.chat, {
                audio: e,
                mimetype: "audio/mp4",
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: !0,
                        title: o,
                        body: config.resbot_version,
                        thumbnailUrl: t,
                        sourceUrl: n,
                        mediaType: 1,
                        renderLargerThumbnail: !0
                    }
                }
            }, {
                quoted: qdoc
            }), fs.unlinkSync(a)
        }))
    }
    catch (e) {
        console.log(e)
        reply(`${e}`)
    }
};




// OWNER DATA
let list = []
for (let i of db_owner) {
list.push({
displayName: await dikzzydev.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await dikzzydev.getName(i + '@s.whatsapp.net')}\n
FN:${await dikzzydev.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:${config.email}\n
item2.X-ABLabel:Email\n
item3.URL:https://korosuxml.htm.id\n
item3.X-ABLabel:Grup WangSaff\n
item4.ADR:;;;;${config.region};;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}


// Mengecek premium otomatis
if(resbot_.isPremium){const e=db_premium[sender.split("@")[0]].expired;cekpremium(e)<0&&(console.log("Premium Habis"),delete db_premium[sender.split("@")[0]],fs.writeFileSync("./Storage/db/premium.json",JSON.stringify(db_premium)))}



// Mengecek AFK USER
/*
if (db_afk.hasOwnProperty(sender)) {
const lastOnlineTimestamp = db_afk[sender].last_online;
const alasan_afk = db_afk[sender].alasan;
const nowTimestamp = Date.now();
const timeDifference = nowTimestamp - lastOnlineTimestamp;
const secondsDifference = Math.floor(timeDifference / 1000);
const minutesDifference = Math.floor(timeDifference / (1000 * 60));
const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
let comparisonText;

if (secondsDifference < 60) {
    comparisonText = `${secondsDifference} detik yang lalu`;
} else if (minutesDifference < 60) {
    comparisonText = `${minutesDifference} menit yang lalu`;
} else if (hoursDifference < 24) {
    const remainingMinutes = minutesDifference % 60;
    comparisonText = `${hoursDifference} jam ${remainingMinutes} menit yang lalu`;
} else {
    comparisonText = `${daysDifference} hari yang lalu`;
}
reply(`🕊️ ${pushname} Telah Kembali Dari Afk Sejak _*${comparisonText}*_\n\n${alasan_afk}`);
delete db_afk[sender];
fs.writeFileSync('./Storage/db/afk.json', JSON.stringify(db_afk))
return false;
}

if  (!fromMe){
    let inTagMember=m.mentionedJid&&m.mentionedJid[0]?m.mentionedJid[0]:m.quoted?m.quoted.sender:null;db_afk.hasOwnProperty(inTagMember)&&reply(`🚫 *Jangan tag dia!*\n❏  *Dia sedang AFK* \n_Sejak *${comparisonText}*_ \n\n${db_afk[inTagMember].alasan}\n    `.trim());
}
*/


// Mengecek AFK USER
if (db_afk.hasOwnProperty(sender)) {
    const lastOnlineTimestamp = db_afk[sender].last_online;
    const alasan_afk = db_afk[sender].alasan;
    const nowTimestamp = Date.now();
    const timeDifference = nowTimestamp - lastOnlineTimestamp;
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let comparisonText;

    if (secondsDifference < 60) {
        comparisonText = `${secondsDifference} detik yang lalu`;
    } else if (minutesDifference < 60) {
        comparisonText = `${minutesDifference} menit yang lalu`;
    } else if (hoursDifference < 24) {
        const remainingMinutes = minutesDifference % 60;
        comparisonText = `${hoursDifference} jam ${remainingMinutes} menit yang lalu`;
    } else {
        comparisonText = `${daysDifference} hari yang lalu`;
    }
    reply(`🕊️ ${pushname} Telah Kembali Dari Afk Sejak _*${comparisonText}*_\n\n${alasan_afk}`);
    delete db_afk[sender];
    fs.writeFileSync('./Storage/db/afk.json', JSON.stringify(db_afk));
    return false;
}

/* ----------------- AFK ---------------------- */
if (!fromMe) {
    let inTagMember = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : null;
    if (db_afk.hasOwnProperty(inTagMember)) {
        const lastOnlineTimestamp = db_afk[inTagMember].last_online;
        const nowTimestamp = Date.now();
        const timeDifference = nowTimestamp - lastOnlineTimestamp;
        const secondsDifference = Math.floor(timeDifference / 1000);
        const minutesDifference = Math.floor(timeDifference / (1000 * 60));
        const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let comparisonText;

        if (secondsDifference < 60) {
            comparisonText = `${secondsDifference} detik yang lalu`;
        } else if (minutesDifference < 60) {
            comparisonText = `${minutesDifference} menit yang lalu`;
        } else if (hoursDifference < 24) {
            const remainingMinutes = minutesDifference % 60;
            comparisonText = `${hoursDifference} jam ${remainingMinutes} menit yang lalu`;
        } else {
            comparisonText = `${daysDifference} hari yang lalu`;
        }

        if (!global.smg_chat[sender].chat.includes('kick')) {
            return reply(`🚫 *Jangan tag dia!*\n\n❏ _Dia sedang AFK Sejak *${comparisonText}*_ \n\n${db_afk[inTagMember].alasan}\n`.trim());
        }
        
    }
}


// Mengecek sewabot otomatis
if (db_sewa.hasOwnProperty(from)) {
    const expired_delprem = db_sewa[from].expired;
    if (cekpremium(expired_delprem) < 0) {
        const text_outsewaExpired = `_*Masa SewaBOT Telah Habis*_, _Bot akan keluar otomatis_

_Terima kasih sudah menggunakan layanan sewa Furina Bot Ai._

*Nomor Owner*
wa.me/${config.nomorsuperOwner}` 

        try {

            await dikzzydev.sendMessage(from,{text: text_outsewaExpired },{quoted:m});
            delete db_sewa[from];
            fs.writeFileSync('./Storage/db/sewa.json', JSON.stringify(db_sewa))

        } catch(e){
                console.log(e)
        }
        await dikzzydev.groupLeave(from).then((res) => console.log('Berhasil Keluar Dari Grub sewa') ).catch((err) => console.log('Keluar Grub Gagal'))
    }
}

let status_badword="OFF";db_badword.hasOwnProperty(from)&&"on"==db_badword[from].status&&(status_badword="ON");
resbot_.superOwner&&(resbot_.isOwner=!0,resbot_.isPremium=!0);


// ANTI VIRTEX
// Fitur ini mengecek jumlah symbol yang tidak normal
if (antivirtexStatus == 'ON' && global.smg_chat[sender].chat.length > 1000 && m.isGroup && !fromMe) {
    const inputString = body.substring(0, 1000);
    const counts = countCharacters(inputString);
    if(counts.symbols > 10) {
        await reply(singlemess.antivirtex_detek)
        dikzzydev.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        return
    }
}



// GROUP ACTION
let timeoutIds={};if(resbot_.grub_action){const t=db_gcawait[from];var date1=new Date("2022-01-01 "+jammenit),date2=new Date("2022-01-01 "+t.waktu);if(date2>date1)var selisihMilidetik=date2-date1;Object.keys(db_gcawait).includes(from)&&(delete db_gcawait[from],fs.writeFileSync("./Storage/db/gcawait.json",JSON.stringify(db_gcawait))),"close"==t.action&&(timeoutIds[from]&&clearTimeout(timeoutIds[from]),timeoutIds[from]=setTimeout((async()=>{await dikzzydev.groupSettingUpdate(from,"announcement").then((t=>chat_only("_Sukses Menutup Group_"))).catch((t=>chat_only(jsonformat(t)))),delete timeoutIds[from]}),selisihMilidetik)),"open"==t.action&&(timeoutIds[from]&&clearTimeout(timeoutIds[from]),timeoutIds[from]=setTimeout((async()=>{await dikzzydev.groupSettingUpdate(from,"not_announcement").then((t=>chat_only("_Sukses Membuka Group_"))).catch((t=>chat_only(jsonformat(t)))),delete timeoutIds[from]}),selisihMilidetik))}

// ANTI DELETE
const id_msgUnique=chatUpdate.messages[0].key.id;if(global.antidelete=global.antidelete||{},m.isGroup&&""!==msg_text.trim())if(global.antidelete[id_msgUnique]){Array.isArray(global.antidelete[id_msgUnique].pesan)||(global.antidelete[id_msgUnique].pesan=[global.antidelete[id_msgUnique].pesan]);const e=30;global.antidelete[id_msgUnique].pesan.length>=e&&global.antidelete[id_msgUnique].pesan.shift(),global.antidelete[id_msgUnique].pesan.push(msg_text)}else global.antidelete[id_msgUnique]={id:id_msgUnique,pesan:[msg_text],token:"xx"};if("protocolMessage"===type_chat&&"ON"==antidelete_status&&!chatUpdate.messages[0].fromMe){const e=chatUpdate.messages[0].message.protocolMessage.key.id;if(global.antidelete[e]&&Array.isArray(global.antidelete[e].pesan)){const t=global.antidelete[e].pesan.slice(-1)[0],a=groupMetadata.participants.filter((e=>sender===e.id));dikzzydev.sendMessage(from,{text:`_*ANTI DELETE FROM*_ @${sender.split("@")[0]} \n\n${t}`,mentions:a.map((e=>e.id))},{quoted:m})}}



// ANTI EDIT
if(global.antiedit=global.antiedit||{},m.isGroup&&""!==msg_text.trim())if(global.antiedit[id_msgUnique]){Array.isArray(global.antiedit[id_msgUnique].pesan)||(global.antiedit[id_msgUnique].pesan=[global.antiedit[id_msgUnique].pesan]);const e=30;global.antiedit[id_msgUnique].pesan.length>=e&&global.antiedit[id_msgUnique].pesan.shift(),global.antiedit[id_msgUnique].pesan.push(msg_text)}else global.antiedit[id_msgUnique]={id:id_msgUnique,pesan:[msg_text],token:"xx"};if("editedMessage"===type_chat&&"ON"==antiedit_status){let e;try{e=chatUpdate.messages[0].message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage.text}catch(a){try{e=chatUpdate.messages[0].message.editedMessage.message.protocolMessage.editedMessage.conversation}catch(e){console.log(e)}}if(!chatUpdate.messages[0].fromMe){const a=chatUpdate.messages[0].message.editedMessage.message.protocolMessage.key.id;if(global.antiedit[a]&&Array.isArray(global.antiedit[a].pesan)){const s=`*Pesan Sebelumnya* => ${global.antiedit[a].pesan.slice(-1)[0]}`,t=groupMetadata.participants.filter((e=>sender===e.id));global.antiedit[a]={id:a,pesan:[e],token:"xx"},dikzzydev.sendMessage(from,{text:`_*ANTI EDIT FROM*_ @${sender.split("@")[0]} \n\n${s}`,mentions:t.map((e=>e.id))},{quoted:m})}else console.log("Tidak ada pesan atau pesan bukan merupakan array")}}




/* ===================「 ᴄᴜꜱᴛᴏᴍɪᴢᴇᴅ 」─=================== */
const audioData=[{time:"03:00:00",greeting:"Selamat Tengah Malam 🌌",file:"tmalam.mp3"},{time:"05:00:00",greeting:"Selamat Subuh 🌆",file:"subuh.mp3"},{time:"10:00:00",greeting:"Selamat Pagi 🌄",file:"pagi.mp3"},{time:"15:00:00",greeting:"Selamat Siang ☀",file:"siang.mp3"},{time:"18:00:00",greeting:"Selamat Sore 🌇",file:"sore.mp3"},{time:"19:00:00",greeting:"Selamat Petang 🌇",file:"petang.mp3"},{time:"23:59:00",greeting:"Selamat Malam 🌌",file:"malam.mp3"}];

let ucapanWaktu,audio_file;for(const a of audioData)if(time2<a.time){ucapanWaktu=a.greeting,audio_file=a.file,lll=a.time;break}
try {
    pp_users = await dikzzydev.profilePictureUrl(m.sender, 'image')
} catch {
    pp_users = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}


const resbot={key:{participant:"0@s.whatsapp.net",...m.chat?{remoteJid:"status@broadcast"}:{}},message:{contactMessage:{displayName:`${pushname}`,vcard:`BEGIN:VCARD\nVERSION:3.0\nN:XL;Koi,;;\nFN: dikzzydev\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,jpegThumbnail:pp_users,thumbnail:pp_users,sendEphemeral:!0}}},resbot2={key:{fromMe:!1,participant:"0@s.whatsapp.net",...m.chat?{remoteJid:"status@broadcast"}:{}},message:{extendedTextMessage:{text:ucapanWaktu,title:"",thumbnailUrl:pp_users}}};


const GcSiderUpdate=(i,s)=>{if(db_sider[s]){const e=db_sider[s].findIndex((s=>s.user_id===i));-1!==e?db_sider[s][e].timestamp=timestamp:db_sider[s].push({user_id:i,tanggal:tgl_hariini,timestamp:timestamp}),fs.writeFileSync("./Storage/db/sider.json",JSON.stringify(db_sider))}else db_sider[s]=[{user_id:i,tanggal:tgl_hariini,timestamp:timestamp}],fs.writeFileSync("./Storage/db/sider.json",JSON.stringify(db_sider))};

/*=======================[ CONST BARU ]=========================*/
const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: 'WhatsApp LLC',jpegThumbnail: "Korosu"}}}
   
const verify = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: `status@broadcast`
				} : {})
			},
			message: {
				'contactMessage': {
					'displayName': `${pushname}`,
					'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${[m.sender].nama},;;;\nFN:${pushname[m.sender]},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					'jpegThumbnail': config.allmenu,
					thumbnail: config.allmenu,
					sendEphemeral: true
				}
			}
		}


/* =================| PUBLIC / SELF |==================== */
if (!config.publik && !(resbot_.superOwner || resbot_.isOwner)) {
    return console.log(`${chalk.yellow.bold('[' + jammenit + ']')} ${chalk.yellow.bold(pushname)} : ${chalk.blueBright('BOT SEDANG SELF')}`);
}


/* =================| MUTE BOT |==================== */
if (resbot_.isMuted) {
    if ((msg_text.toLowerCase() === 'unmute' || msg_text.toLowerCase() === '.unmute')) {
        if (!resbot_.isAdmins) return reply(mess.admin)
        let index = db_mute.indexOf(from);
        if (index !== -1) {
            db_mute.splice(index, 1);
            fs.writeFileSync('./Storage/db/mute.json', JSON.stringify(db_mute));
            reply(singlemess.unmute);
        }
    } else {
        if(isCmd){
            return console.log(`${chalk.yellow.bold('['+jammenit+']')} ${chalk.yellow.bold(pushname)} : ${chalk.magentaBright('BOT SEDANG DI MUTED')} `)
        }
        return
    }
} 


/* =================| AUTO BLOCK NOMOR AWAL 212 |==================== */
if (m.sender.startsWith('212')) return dikzzydev.updateBlockStatus(m.sender, 'block')

/* =================| AUTO READ |==================== */
config.autoread&&dikzzydev.readMessages([m.key]);


/* =================| ADD USER |==================== */
if (isCmd && !resbot_.isUser) {
db_pengguna.push(sender)
fs.writeFileSync('./Storage/user.json', JSON.stringify(db_pengguna, null, 2))
}

/* =================| AUTO RUSUH |==================== */
if (auto_rusuh_status == 'ON' && m.isGroup && prefix.length === 0 && !fromMe) {
    if (isImage2) { // kalau ada yang ngirim gambar
    const dataRusuh_Image = [
    'Malah Ngirim Gambar Babi Kau',
    'Ngapain kirim gambar sini, gelud lah',
    'nye nye nye apaan gambar monyet',
    'gambar nya kek kontol ajg',
    'gambar jelek jgn di kirim pantek',
    'woi lu tau itu gambar kek kontol',
    'Mau pamer gambar doang, sini gelud kalo berani!',
    'Gambar nggak bikin lu jagoan, sini gelud!',
    'Ngirim gambar terus, sini hadap gua langsung!',
    'Gambar monyet aja berani ngirim, sini maju!',
    'Gambar lu nggak ada nyalinya, sini gelud!',
    'Udah kayak anak kecil, cuma bisa ngirim gambar',
    'Kalo berani, nggak usah kirim gambar, gelud aja!',
    'Ngirim gambar doang, nyali kagak ada?',
    'Gambar nggak bikin lu keren, sini gelud!',
    'Nggak usah banyak gaya pake gambar, sini ketemu!',
    'Gambar nggak ada guna, sini hadap gua!',
    'Ngirim gambar? Dasar pengecut, sini gelud nyata!',
    'Gambar lu cuma buat anak kecil, sini gelud!',
    'Berani ngirim gambar doang, sini hadap gua!',
    'Ngirim gambar? Lucu amat, sini ketemu langsung!',
    'Kalo nyali ada, ngapain main gambar, sini gelud!',
    'Gambar nggak bakal nyelamatin lu, sini gelud!',
    'Bocah gambar takut gelud nyata, sini buktikan!',
    'Cuma berani ngirim gambar, nyali maju kagak ada!',
    'Kalo jagoan, ngapain pake gambar? Sini gelud!',
    'Ngirim gambar buat apa? Kalo berani sini ketemu!',
    'Gambar nggak bikin lu berani, sini maju!',
    'Nggak ada nyali buat gelud nyata, cuma bisa ngirim gambar!',
    'Gambar buat bocah, kalo lu jantan sini ketemu gua!',
    'Ngapain ngirim gambar? Hadap gua langsung kalo berani!',
    'Berani ngirim gambar doang, sini gelud!',
    'Gambar nggak bakal nyelamatin lu, sini hadap gua!',
    'Jangan cuma berani di gambar, sini gelud nyata!',
    'Gambar lu lucu, tapi nyali maju kagak ada!',
    'Kalo lu berani, nggak usah ngirim gambar, gelud aja!',
    'Ngirim gambar cuma buat pengecut, sini hadap gua!',
    'Nggak usah gaya pake gambar, sini hadap langsung!',
    'Gambar nggak ada artinya, kalo berani sini gelud!',
    'Ngirim gambar nggak bikin lu jagoan, sini gelud nyata!',
    'Gambar buat bocah, hadap gua sini kalo berani!',
    'Berani ngirim gambar doang, gelud nyata mana?',
    'Gambar nggak bikin lu keren, sini hadap gua langsung!',
    'Ngapain ngirim gambar, sini ketemu gua!',
    'Kalo lu berani, hadap gua sini, nggak usah pake gambar!',
    'Gambar nggak bakal bikin lu selamat, sini gelud nyata!',
    'Ngirim gambar cuma buat bocah, kalo berani sini ketemu!',
    'Nggak usah ngirim gambar, sini hadap gua kalo berani!',
    'Kalo jagoan, nggak perlu gambar, hadap gua langsung!',
    'Gambar cuma buat yang takut gelud, sini maju!'
];
    return reply(pickRandom(dataRusuh_Image))
    }

    if (isSticker2) { // kalau ada yang ngirim sticker
        const dataRusuh_Sticker = [
    'Lo Ngirim Sticker di kira gua takut apa kontol',
    'kalo Berani sini gelud, gk usah main sticker babi',
    'dah di bilang kalo berani sini gelud kita, main sticker kek bocah kontol',
    'Ngapain ngirim sticker? Langsung aja gelud kalo berani',
    'Sticker doang, nyali kagak ada? Sini maju!',
    'Udah kayak anak kecil aja, beraninya cuma ngirim sticker',
    'Nggak usah banyak gaya pake sticker, sini hadap gua langsung!',
    'Kalo jagoan, nggak usah ngirim sticker, hadap sini!',
    'Lemah amat cuma berani ngirim sticker, sini gelud nyata!',
    'Sticker lu nggak bakal bikin gua takut, sini maju kalo berani!',
    'Males gua ngeladenin bocah sticker, kalo jantan sini langsung!',
    'Kalo beneran berani, nggak usah pake sticker segala, gelud aja!',
    'Berani ngirim sticker doang, nyali maju kagak ada!',
    'Bocah sticker mana berani gelud beneran, sini buktikan!',
    'Ngirim sticker nggak bakal bikin lu kelihatan berani, gelud sini!',
    'Lo pikir ngirim sticker bikin gua ciut? Sini gelud!',
    'Jangan cuma ngirim sticker, kalo berani sini buktikan!',
    'Sticker nggak ada guna, sini hadap gua langsung!',
    'Ngirim sticker? Dasar pengecut, sini gelud nyata!',
    'Sticker lu cuma buat anak kecil, kalo berani sini kita gelud!',
    'Beraninya cuma di sticker, sini kalo berani hadap gua!',
    'Ngirim sticker? Lucu amat, sini ketemu langsung!',
    'Kalo nyali ada, ngapain main sticker, sini gelud!',
    'Sticker nggak bakal nyelamatin lu, sini gelud!',
    'Bocah sticker takut gelud nyata, sini buktikan kalo berani!',
    'Cuma berani ngirim sticker, nyali maju kagak ada!',
    'Kalo jagoan, ngapain pake sticker? Sini gelud langsung!',
    'Ngirim sticker buat apa? Kalo berani sini ketemu!',
    'Sticker nggak bikin lu berani, sini maju kalo jantan!',
    'Nggak ada nyali buat gelud nyata, cuma bisa ngirim sticker!',
    'Sticker buat bocah, kalo lu jantan sini ketemu gua!',
    'Ngapain ngirim sticker? Hadap gua langsung kalo berani!',
    'Berani ngirim sticker doang, sini gelud kalo jagoan!',
    'Sticker nggak bakal nyelamatin lu, sini hadap gua!',
    'Jangan cuma berani di sticker, sini gelud nyata!',
    'Sticker lu lucu, tapi nyali maju kagak ada!',
    'Kalo lu berani, nggak usah ngirim sticker, gelud aja!',
    'Ngirim sticker cuma buat pengecut, sini hadap gua!',
    'Nggak usah gaya pake sticker, sini hadap langsung!',
    'Sticker nggak ada artinya, kalo berani sini gelud!',
    'Ngirim sticker nggak bikin lu jagoan, sini gelud nyata!',
    'Sticker buat bocah, hadap gua sini kalo berani!',
    'Berani ngirim sticker doang, gelud nyata mana?',
    'Sticker nggak bikin lu keren, sini hadap gua langsung!',
    'Ngapain ngirim sticker, sini ketemu gua!',
    'Kalo lu berani, hadap gua sini, nggak usah pake sticker!',
    'Sticker nggak bakal bikin lu selamat, sini gelud nyata!',
    'Ngirim sticker cuma buat bocah, kalo berani sini ketemu!',
    'Nggak usah ngirim sticker, sini hadap gua kalo berani!',
    'Kalo jagoan, nggak perlu sticker, hadap gua langsung!',
    'Sticker cuma buat yang takut gelud, sini maju kalo jantan!',
    'Sticker nggak ada guna, kalo berani sini hadap gua!',
    'Ngapain ngirim sticker? Sini ketemu gua kalo berani!',
    'Nggak usah gaya pake sticker, kalo jagoan sini ketemu!',
    'Ngirim sticker nggak bikin lu keren, sini gelud nyata!',
    'Sticker buat bocah, kalo berani sini hadap gua!',
    'Ngapain ngirim sticker, sini maju kalo berani!',
    'Kalo lu jagoan, nggak usah pake sticker, hadap gua sini!',
    'Sticker nggak bakal nyelamatin lu, sini hadap langsung!',
    'Beraninya cuma ngirim sticker, sini gelud nyata!',
    'Sticker nggak ada artinya, kalo jantan sini ketemu gua!',
    'Ngirim sticker? Sini ketemu gua langsung!',
    'Sticker nggak bikin lu keren, hadap gua sini kalo berani!',
    'Kalo berani, nggak usah ngirim sticker, gelud aja langsung!',
    'Sticker cuma buat yang takut gelud, sini hadap gua!',
    'Nggak usah banyak gaya pake sticker, kalo jagoan sini ketemu!',
    'Ngirim sticker nggak bikin lu jagoan, sini gelud nyata!',
    'Sticker buat bocah, sini hadap gua kalo berani!',
    'Ngapain ngirim sticker, sini maju kalo lu jagoan!',
    'Kalo lu berani, nggak usah pake sticker, hadap gua sini!',
    'Sticker nggak bakal nyelamatin lu, sini gelud langsung!',
    'Ngirim sticker cuma buat bocah, sini hadap gua kalo berani!',
    'Nggak usah ngirim sticker, sini hadap gua langsung!',
    'Kalo jagoan, nggak perlu sticker, hadap gua sini!',
    'Sticker cuma buat yang takut gelud, sini hadap gua kalo berani!',
    'Sticker nggak ada guna, kalo jantan sini ketemu gua!',
    'Ngapain ngirim sticker? Sini ketemu gua kalo berani!',
    'Nggak usah gaya pake sticker, kalo jagoan sini ketemu gua!',
    'Ngirim sticker nggak bikin lu keren, sini gelud nyata!',
    'Sticker buat bocah, kalo berani sini hadap gua langsung!',
    'Ngapain ngirim sticker, sini maju kalo berani!',
    'Kalo lu jagoan, nggak usah pake sticker, hadap gua sini langsung!',
    'Sticker nggak bakal nyelamatin lu, sini hadap gua kalo jantan!',
    'Beraninya cuma ngirim sticker, sini gelud nyata kalo berani!',
    'Sticker nggak ada artinya, kalo jantan sini ketemu gua langsung!',
    'Ngirim sticker? Sini ketemu gua kalo berani!',
    'Sticker nggak bikin lu keren, hadap gua sini kalo berani!',
    'Kalo berani, nggak usah ngirim sticker, gelud aja langsung sini!',
    'Sticker cuma buat yang takut gelud, sini hadap gua kalo jantan!',
    'Nggak usah banyak gaya pake sticker, kalo jagoan sini ketemu gua langsung!',
    'Ngirim sticker nggak bikin lu jagoan, sini gelud nyata kalo berani!',
    'Sticker buat bocah, sini hadap gua kalo jantan!',
    'Ngapain ngirim sticker, sini maju kalo lu jagoan berani!',
    'Kalo lu berani, nggak usah pake sticker, hadap gua sini langsung!',
    'Sticker nggak bakal nyelamatin lu, sini gelud langsung kalo berani!'
];

        return reply(pickRandom(dataRusuh_Sticker))

    }

    if (msg_text.toLowerCase().includes('bot')) { // kalau ada yang bilang bot

        const dataRusuh_Botmsg = [
    'Apaan lu kontol, mau gelud lawan bot?',
    'wei walaupun gue bot, gua bisa gelud ama lu babi',
    'lu kira lu apa ha',
    'kalau masih punya kontol jangan sok asik deh',
    'woi bajingan',
    'tolol lu ya',
    'Mau gelud sama bot? Lucu lu kontol',
    'Bot aja berani gelud, sini maju lu babi',
    'Jangan sok jago lu, gua bot juga bisa lawan',
    'Lu kira bot ga bisa gelud? Coba aja lu sini',
    'Bot aja ga takut sama lu, kontol',
    'Kalo lu jago, lawan bot sini, babi',
    'Bot juga punya nyali, sini lu hadap gua',
    'Lu pikir bot ga bisa marah? Sini gelud',
    'Walaupun bot, gua ga takut ama lu, kontol',
    'Sini gelud ama bot kalo berani, bangsat',
    'Lu beraninya lawan bot aja, tolol',
    'Bot juga bisa gelud, sini maju lu',
    'Jangan sok jago depan bot, anjing',
    'Gua bot tapi bisa lawan lu, sini kalo nyali ada',
    'Bot juga bisa marah, sini hadap gua, babi',
    'Beraninya lawan bot doang, dasar pengecut',
    'Lu kira bot ga punya nyali? Sini coba',
    'Bot juga bisa hajar lu, sini maju, kontol',
    'Jangan kira bot ga bisa lawan, sini lu',
    'Bot aja berani lawan, lu berani ga?',
    'Walaupun bot, gua bisa gelud, sini maju',
    'Sok jago lu depan bot, sini hadap gua',
    'Bot juga bisa gebukin lu, sini kalo nyali ada',
    'Lu kira gua takut karena gua bot? Kontol',
    'Beraninya lawan bot doang, dasar pengecut lu',
    'Lu ga ada nyali lawan bot aja takut, anjing',
    'Bot juga bisa ngelawan, sini hadap gua',
    'Jangan sok jago kalo lu cuma lawan bot, babi',
    'Walaupun bot, gua berani hadap lu, sini maju',
    'Lu pikir bot cuma diem? Sini gelud',
    'Bot aja bisa hajar lu, sini hadap gua',
    'Jangan kira bot ga bisa gelud, coba aja',
    'Bot juga punya nyali, sini lu babi',
    'Gua bot tapi bisa lawan, sini kalo berani',
    'Beraninya sama bot doang, tolol',
    'Lu kira bot ga bisa hajar? Sini coba',
    'Bot juga bisa ngamuk, sini hadap gua, kontol',
    'Lu pikir bot cuma bisa diem? Sini maju',
    'Bot juga bisa gelud, sini hadap gua kalo jagoan',
    'Jangan sok jago depan bot, coba sini',
    'Bot juga bisa ngelawan, sini maju kalo berani',
    'Lu kira bot ga ada nyali? Sini coba hadap gua',
    'Bot juga bisa marah, sini lu kontol',
    'Jangan sok jago kalo lu lawan bot doang, sini maju'
];
    return reply(pickRandom(dataRusuh_Botmsg))
    }

    if (isAudio2) {

        try {


        fs.readdir('./App/audio_rusuh', (err, files) => {
                if (files.length > 0) {
                    const randomIndex = Math.floor(Math.random() * files.length);
                    const randomFileName = files[randomIndex];
                    return dikzzydev.sendMessage(m.chat, { audio: fs.readFileSync('./App/audio_rusuh/'+randomFileName), mimetype: 'audio/mp4', ptt: true, fileLength: 88738},{quoted:qdoc})

                } 
            })


        } catch(e){
            console.log('sini')
        }

    }

    if (quoted.fromMe) { // kalau ada yang reply

        const dataRusuh_Berdemek = [
    'Apaan lu kontol, babi kau',
    'setan kau anjing',
    'lu kira gua takut ama lu',
    'woi kontol ajg',
    'apaan sok asik monyet',
    'Lu lagi diem napa muka kek kontol',
    'bangsat kau, jgn sok asik kontol',
    'ikan hiu makan tomat \nBodo amat kontol',
    'lu anjing kocak',
    'woi babi, sini maju',
    'muka lu kek monyet, gausah sok asik',
    'woi kontol, jgn sok jago lu',
    'lu kira gua peduli, bangsat',
    'muka lu kayak setan, apaan sok asik',
    'kontol, sini kalo berani',
    'sini maju, anjing',
    'lu pikir gua takut? Kontol!',
    'monyet, gausah banyak omong',
    'lu anjing, gausah sok asik',
    'woi bangsat, sini ketemu gua',
    'kontol, jangan banyak gaya lu',
    'lu kira gua takut ama muka jelek lu?',
    'bangsat, sini kalo jago',
    'anjing, lu ga bakal berani hadap gua',
    'kontol, lu ga ada nyali',
    'woi babi, gausah sok jago',
    'sok asik lu anjing, sini gelud',
    'setan, jgn banyak omong',
    'kontol, sini kalo nyali ada',
    'muka lu kayak babi, gausah sok asik',
    'lu pikir gua takut ama omongan lu, bangsat',
    'anjing, sini maju kalo berani',
    'woi kontol, diem lu',
    'muka lu kek monyet, apaan sok asik',
    'kontol, sini hadap gua',
    'bangsat, lu ga bakal berani',
    'anjing, lu cuma bisa omong doang',
    'kontol, lu pikir gua takut?',
    'woi babi, lu ga ada nyali',
    'sok asik lu anjing, sini ketemu gua',
    'setan, lu ga bakal berani hadap gua',
    'kontol, jangan banyak omong',
    'lu kira gua takut ama muka jelek lu, bangsat',
    'anjing, sini gelud kalo nyali ada',
    'kontol, lu ga ada nyali',
    'woi bangsat, lu cuma bisa omong doang',
    'kontol, sini hadap gua kalo berani',
    'anjing, lu pikir gua takut?',
    'muka lu kayak babi, gausah sok asik',
    'kontol, lu ga bakal berani hadap gua',
    'Apaan lu kontol, babi kau',
    'setan kau anjing',
    'lu kira gua takut ama lu',
    'woi kontol ajg',
    'apaan sok asik monyet',
    'Lu lagi diem napa muka kek kontol',
    'bangsat kau, jgn sok asik kontol',
    'ikan hiu makan tomat \nBodo amat kontol',
    'lu anjing kocak',
    'woi babi, sini maju',
    'muka lu kek monyet, gausah sok asik',
    'woi kontol, jgn sok jago lu',
    'lu kira gua peduli, bangsat',
    'muka lu kayak setan, apaan sok asik',
    'kontol, sini kalo berani',
    'sini maju, anjing',
    'lu pikir gua takut? Kontol!',
    'monyet, gausah banyak omong',
    'lu anjing, gausah sok asik',
    'woi bangsat, sini ketemu gua',
    'kontol, jangan banyak gaya lu',
    'lu kira gua takut ama muka jelek lu?',
    'bangsat, sini kalo jago',
    'anjing, lu ga bakal berani hadap gua',
    'kontol, lu ga ada nyali',
    'woi babi, gausah sok jago',
    'sok asik lu anjing, sini gelud',
    'setan, jgn banyak omong',
    'kontol, sini kalo nyali ada',
    'muka lu kayak babi, gausah sok asik',
    'lu pikir gua takut ama omongan lu, bangsat',
    'anjing, sini maju kalo berani',
    'woi kontol, diem lu',
    'muka lu kek monyet, apaan sok asik',
    'kontol, sini hadap gua',
    'bangsat, lu ga bakal berani',
    'anjing, lu cuma bisa omong doang',
    'kontol, lu pikir gua takut?',
    'woi babi, lu ga ada nyali',
    'sok asik lu anjing, sini ketemu gua',
    'setan, lu ga bakal berani hadap gua',
    'kontol, jangan banyak omong',
    'lu kira gua takut ama muka jelek lu, bangsat',
    'anjing, sini gelud kalo nyali ada',
    'kontol, lu ga ada nyali',
    'woi bangsat, lu cuma bisa omong doang',
    'kontol, sini hadap gua kalo berani',
    'anjing, lu pikir gua takut?',
    'muka lu kayak babi, gausah sok asik',
    'kontol, lu ga bakal berani hadap gua',
    'Lu kira gua takut ama muka jelek lu, kontol',
    'Wo lu kontol, sok asik aja',
    'Nggak usah gaya lu, kontol',
    'Muka lu kayak setan, anjing',
    'Woi babi, jangan sok kuat lu',
    'Lu pikir gua takut? Babi!',
    'Gak usah banyak omong, bangsat',
    'Anjing, lu berani hadap gua gak?',
    'Kontol, jangan banyak gaya',
    'Setan, lu pikir gua takut?',
    'Monyet, sini kalo nyali ada',
    'Babi, lu cuma bisa ngomong doang',
    'Bangsat, lu gak bakal berani',
    'Kontol, lu pikir gua takut ama lu?',
    'Lu kira gua peduli? Setan!',
    'Sok asik lu anjing, gua nggak takut',
    'Lu pikir gua takut ama muka jelek lu?',
    'Anjing, sini maju kalo berani',
    'Kontol, lu ga ada nyali',
    'Babi, lu cuma bisa omong doang',
    'Bangsat, lu gak bakal berani hadap gua',
    'Kontol, sini hadap gua kalo jagoan',
    'Anjing, lu pikir gua takut ama lu?',
    'Monyet, gausah sok asik',
    'Setan, lu gak bakal berani hadap gua',
    'Kontol, jangan banyak omong',
    'Babi, lu cuma bisa ngomong doang',
    'Bangsat, sini hadap gua kalo berani',
    'Kontol, lu pikir gua takut ama lu?',
    'Anjing, sini maju kalo nyali ada',
    'Setan, gua gak takut ama lu',
    'Kontol, sini hadap gua kalo jago',
    'Bangsat, lu ga bakal berani',
    'Babi, gua gak takut ama lu',
    'Anjing, lu cuma bisa ngomong doang',
    'Kontol, lu pikir gua takut ama lu?',
    'Setan, lu ga bakal berani hadap gua',
    'Kontol, jangan banyak gaya lu',
    'Anjing, sini maju kalo nyali ada',
    'Babi, gua gak takut ama lu'
];




        return reply(pickRandom(dataRusuh_Berdemek))
    }

}

/* =================| ANTI TOXIC |==================== */
function tambahUserToxic(o){global.UserToxic[o]?global.UserToxic[o].jumlah+=1:global.UserToxic[o]={user:o,jumlah:1}}function cekUserToxic(o){return global.UserToxic[o]?global.UserToxic[o].jumlah:0}global.UserToxic=global.UserToxic||{};
if (config.antitoxic && !msg_text.includes('badword') && status_badword == 'ON' && !fromMe) {
    msg_text = msg_text.toLowerCase();

    if (db_antitoxic.some(word => msg_text.includes(word)) && auto_rusuh_status == 'OFF') {
    dikzzydev.sendMessage(m.chat, { delete: m.key });
    console.log(`${chalk.yellow.bold('['+jammenit+']')} ${chalk.yellow.bold(pushname)} : ${chalk.whiteBright('ANTI TOXIC DETECTED')} `)
        tambahUserToxic(m.sender);

        const userToxicCount = cekUserToxic(m.sender);

        if (userToxicCount == 4) {
            return reply(singlemess.antibadword);
        }

        if (userToxicCount > 4) {
        if (!resbot_.isAdmins) {
            dikzzydev.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }

        }


        return 
    }
}

/* =================| ANTI LINK V1 |==================== */
if (antilinkStatus == 'ON') {
    if (links || links2 || (full_messages.includes('http') || full_messages.includes('wa.me') || full_messages.includes('chat.whatsapp')) ) {
          if (!resbot_.isBotAdmins) return reply(singlemess.antilink_notAdmin)
            if (resbot_.isAdmins) { 
            }else{
                console.log(`${chalk.yellow.bold('['+jammenit+']')} ${chalk.yellow.bold(pushname)} : ${chalk.whiteBright('Antilink V1 Terdeteksi')} `)
                await reply(singlemess.antilinkv1_detek)
                dikzzydev.sendMessage(m.chat, { delete: m.key })
                return
            }
    }
}

/* =================| ANTI LINK V2 |==================== */
if (antilinkv2Status == 'ON' && !fromMe) {
    if (links || links2 || (message.includes('http') || message.includes('wa.me') || message.includes('chat.whatsapp')) ) {
          if (!resbot_.isBotAdmins) return reply(singlemess.antilink_notAdmin)
            if (resbot_.isAdmins) {
            }else{
                await reply(singlemess.antilinkv2_detek)
                dikzzydev.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                return
            }
    }


}

/* =================| ANTI LINK V3 |==================== */
if (antilinkv3Status == 'ON' && !fromMe) {
    if (links || links2 || (message.includes('http') || message.includes('wa.me') || message.includes('chat.whatsapp')) ) {
          if (!resbot_.isBotAdmins) return reply(singlemess.antilink_notAdmin)
        
            if (resbot_.isAdmins) {

            }else{
                await reply(singlemess.antilinkv3_detek)
                dikzzydev.sendMessage(m.chat, { delete: m.key })
                dikzzydev.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                return
            }
    }
}

/* =================| ANTI LINKWA |==================== */
if (antilinkwaStatus == 'ON') {
    if (message.includes('chat.whatsapp')) {
          if (!resbot_.isBotAdmins) return reply(singlemess.antilinkwa_notAdmin)
            if (resbot_.isAdmins) {
            }else{
                console.log(`${chalk.yellow.bold('['+jammenit+']')} ${chalk.yellow.bold(pushname)} : ${chalk.whiteBright('Antilinkwa Terdeteksi')} `)
                await reply(singlemess.antilinkwa_detek)
                dikzzydev.sendMessage(m.chat, { delete: m.key })
                return
            }
    }
}

/* =================| ANTI LINKWA V2 |==================== */
if (antilinkwav2Status == 'ON' && !fromMe) {
    if (message.includes('chat.whatsapp')) {
        if (!resbot_.isBotAdmins) return reply(singlemess.antilinkwa_notAdmin)
            if (resbot_.isAdmins) {
            }else{
                console.log(`${chalk.yellow.bold('['+jammenit+']')} ${chalk.yellow.bold(pushname)} : ${chalk.whiteBright('Antilinkv3 Terdeteksi')} `)
                await reply(singlemess.antilinkwa2_detek)
                dikzzydev.sendMessage(m.chat, { delete: m.key })
                dikzzydev.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                return
            }
    }
}

/* =================| ANTI GAME |==================== */
if (antigame_status == 'ON' && prefix.length > 0) {

    const commands_antigame = [
        'tebak', 'dare', 'family', 'bj', 'blackjack', 'kuismath', 
        'tebak', 'suit', 'truth', 'jadian', 'biasakah', 'kapankah', 
        'cekganteng', 'cekcantik', 'cekmati', 'cekgila', 'cekbucin', 'cektolol'
    ];
    
    if (commands_antigame.some(commandPrefix => command.startsWith(commandPrefix))) {
        return reply(singlemess.antigame);
    }
}


/* =================| FUNCTION 2 |==================== */
async function loading(){await dikzzydev.sendMessage(from,{react:{text:"⏰",key:m.key}})}async function obfus(t){return new Promise(((e,a)=>{try{const a=jsobfus.obfuscate(t,{compact:!1,controlFlowFlattening:!0,controlFlowFlatteningThreshold:1,numbersToExpressions:!0,simplify:!0,stringArrayShuffle:!0,splitStrings:!0,stringArrayThreshold:1});e({status:200,author:"dikzzydev",result:a.getObfuscatedCode()})}catch(t){a(t)}}))}async function ttslide(t){const e=(await axios.get(`https://dlpanda.com/id?url=${t}&token=G7eRpMaa`)).data,a=cheerio.load(e);let s=[],o=[],n="Jikarinka";a("div.col-md-12 > img").each(((t,e)=>{o.push(a(e).attr("src"))})),s.push({creator:n,imgSrc:o});o.map(((t,e)=>({img:t,creator:n})));return s}const clean=t=>(t=t.replace(/(<br?\s?\/>)/gi," \n")).replace(/(<([^>]+)>)/gi,"");async function shortener(t){return t}async function tiktok(t){let e=await axios("https://lovetik.com/api/ajax/search",{method:"POST",data:new URLSearchParams(Object.entries({query:t}))});return result={},result.creator="YNTKTS",result.title=clean(e.data.desc),result.author=clean(e.data.author),result.nowm=await shortener((e.data.links[0].a||"").replace("https","http")),result.watermark=await shortener((e.data.links[1].a||"").replace("https","http")),result.audio=await shortener((e.data.links[2].a||"").replace("https","http")),result.thumbnail=await shortener(e.data.cover),result}async function filterValidImages(t,e){const a=[];for(const s of t)if(await isImageURL(s)&&(a.push(s),a.length>=e))break;return a}async function isImageURL(t){try{const e=(await fetch(t,{method:"HEAD"})).headers.get("content-type");return e&&e.startsWith("image")}catch(t){return!1}}const sendapk=t=>{dikzzydev.sendMessage(from,{document:t,mimetype:"application/vnd.android.package-archive"},{quoted:m}),reply("*Maaf ada yang salah !! Yang Bener Contoh : Yoapk Resbot*")};for(let t of db_apk)if(msg_text===t){sendapk(fs.readFileSync(`./Storage/apk/${t}.apk`))}const sendzip=t=>{dikzzydev.sendMessage(from,{document:t,mimetype:"application/zip"},{quoted:m}),reply("*Maaf ada yang salah !! Yang Bener Contoh : Yozip Resbot*")};for(let t of db_zip)if(msg_text===t){sendzip(fs.readFileSync(`./Storage/zip/${t}.zip`))}const senddocu=t=>{dikzzydev.sendMessage(from,{document:t,mimetype:"application/pdf"},{quoted:m}),reply("*Maaf ada yang salah !! Yang Bener Contoh : Yopdf Resbot*")};for(let t of db_document)if(msg_text===t){senddocu(fs.readFileSync(`./Storage/Docu/${t}.pdf`))}const sendvn=t=>{dikzzydev.sendMessage(from,{audio:t,mimetype:"audio/mp4",ptt:!0},{quoted:m})};


/* =================| GET PP USER 2 |==================== */
try {
ppuser = await dikzzydev.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)


/* =================| FAMILY 100 |==================== */
if (!prefix || prefix.length === 0) {
   
if (('family100'+from in _family100) && !fromMe) {
kuis = true
let room = _family100['family100'+from]
let teks = msg_text.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
 let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
 if (room.terjawab[index]) return !0
 room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
dikzzydev.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+from].pesan = mesg }).catch(_ => _)



if (isWin || isSurender) delete _family100['family100'+from]

console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : ${chalk.whiteBright('Family 100 Sedang Aktif')} `)
}

}

/* =================| TEBAK LAGU |==================== */
if (tebaklagu.hasOwnProperty(from.split('@')[0])) {
kuis = true
jawaban = tebaklagu[from.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {

 AddMoney(m.sender,config.MoneyMenangGame)


   dikzzydev.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:qdoc}) 
 delete tebaklagu[from.split('@')[0]]
} else {
    if (msg_text.toLowerCase() == 'nyerah') {
     dikzzydev.sendMessage(m.chat, { image: { url: config.game.tebaklagu }, caption: `Yahh Menyerah\nJawaban:  ${tebaklagu[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`}, {quoted:qdoc}) 
     delete tebaklagu[from.split('@')[0]]
     
    }else if(msg_text.toLowerCase() == 'hint'){
    let result_jwb_tebaklagu = replaceNonFirstCharWithAsterisk(tebaklagu[from.split('@')[0]]);
    reply(result_jwb_tebaklagu);

    }
    
}


}


/* =================| KUIS MATCH |==================== */
if (kuismath.hasOwnProperty(from.split('@')[0])) {
kuis = true
jawaban = kuismath[from.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
 AddMoney(m.sender,config.MoneyMenangGame)
 await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? ketik ${prefix}kuismath`)
 delete kuismath[from.split('@')[0]]
} else {
    if (msg_text.toLowerCase() == 'nyerah') {


     dikzzydev.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/1bcdee00d966bde630808.jpg' }, caption: `Yahh Menyerah\nJawaban:  ${kuismath[from.split('@')[0]]}\n\nIngin bermain? Ketik math`}, {quoted:qdoc}) 
     delete kuismath[from.split('@')[0]]
     
    }else if(msg_text.toLowerCase() == 'hint'){

    let result_jwb_kuismath = replaceNonFirstCharWithAsterisk(kuismath[from.split('@')[0]]);
    reply(result_jwb_kuismath);

    }
    
}



}


/* =================| TEBAK GAMBAR |==================== */
if (tebakgambar.hasOwnProperty(from.split('@')[0])) {
kuis = true
jawaban = tebakgambar[from.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
     AddMoney(m.sender,config.MoneyMenangGame)
 dikzzydev.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, {quoted:qdoc})
 delete tebakgambar[from.split('@')[0]]
}  else {
    if (msg_text.toLowerCase() == 'nyerah') {


     dikzzydev.sendMessage(m.chat, { image: { url: config.game.tebakgambar  }, caption: `Yahh Menyerah\nJawaban:  ${tebakgambar[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted:qdoc}) 
     delete tebakgambar[from.split('@')[0]]
     
    }else if(msg_text.toLowerCase() == 'hint'){

    let result_jwb_tebakgambar = replaceNonFirstCharWithAsterisk(tebakgambar[from.split('@')[0]]);
    reply(result_jwb_tebakgambar);

    }
    
}



}

/* =================| TEBAK BENDERA |==================== */
if (tebakbendera.hasOwnProperty(from.split('@')[0])) {
kuis = true
jawaban = tebakbendera[from.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
 AddMoney(m.sender,config.MoneyMenangGame)
 dikzzydev.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik Tebak Bendera`}, {quoted:qdoc})
 delete tebakbendera[from.split('@')[0]]
} else {
    if (msg_text.toLowerCase() == 'nyerah') {
    dikzzydev.sendMessage(m.chat, { image: { url: config.game.tebakbendera }, caption: `Yahh Menyerah\nJawaban:  ${tebakbendera[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak bendera`}, {quoted:qdoc}) 
    delete tebakbendera[from.split('@')[0]]
    }else if(msg_text.toLowerCase() == 'hint'){
    let result_jwb_tebakbendera = replaceNonFirstCharWithAsterisk(tebakbendera[from.split('@')[0]]);
    reply(result_jwb_tebakbendera);

    }
    
}



}

/* =================| TEBAK HEWAN |==================== */
if (tebakhewan.hasOwnProperty(from.split('@')[0])) {
kuis = true
jawaban = tebakhewan[from.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
 AddMoney(m.sender,config.MoneyMenangGame)
 dikzzydev.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Hewan 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik Tebak Hewan`}, {quoted:qdoc})
 delete tebakhewan[from.split('@')[0]]
} else {
    if (msg_text.toLowerCase() == 'nyerah') {


     dikzzydev.sendMessage(m.chat, { image: { url: config.game.tebakhewan }, caption: `Yahh Menyerah\nJawaban:  ${tebakhewan[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak hewan`}, {quoted:qdoc}) 
     delete tebakhewan[from.split('@')[0]]

    }else if(msg_text.toLowerCase() == 'hint'){

    let result_jwb_tebakhewan = replaceNonFirstCharWithAsterisk(tebakhewan[from.split('@')[0]]);
    reply(result_jwb_tebakhewan);

    }
    
}



}


/* =================| TEBAK KATA |==================== */
if (tebakkata.hasOwnProperty(from.split('@')[0])) {
kuis = true
jawaban = tebakkata[from.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
 AddMoney(m.sender,config.MoneyMenangGame)
 dikzzydev.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted:qdoc})  
 delete tebakkata[from.split('@')[0]]
}else {
    if (msg_text.toLowerCase() == 'nyerah') {

    dikzzydev.sendMessage(m.chat, { image: { url: config.game.tebakkata }, caption: `Yahh Menyerah\nJawaban:  ${tebakkata[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata`}, {quoted:qdoc}) 
    delete tebakkata[from.split('@')[0]]
    }else if(msg_text.toLowerCase() == 'hint'){

    let result_jwb_tebakkata = replaceNonFirstCharWithAsterisk(tebakkata[from.split('@')[0]]);
    reply(result_jwb_tebakkata);

    }
    
}

}

/* =================| TEBAK ANGKA |==================== */
if (tebakangka.hasOwnProperty(from.split('@')[0])) {
    kuis = true;
    jawaban = tebakangka[from.split('@')[0]];

    if (msg_text == '') return console.log('tebank angka kosong stiker')

    // Memeriksa apakah msg_text adalah angka
    if (!isNaN(msg_text) && msg_text.toLowerCase() == jawaban) {
        AddMoney(m.sender,config.MoneyMenangGame)
        dikzzydev.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Angka 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik Tebak Angka`}, {quoted: qdoc});
        delete tebakangka[from.split('@')[0]];
    } else if (!isNaN(msg_text) && msg_text.toLowerCase() < jawaban) {
        reply('Angka *'+msg_text+'* Terlalu Kecil');
    } else if (!isNaN(msg_text) && msg_text.toLowerCase() > jawaban) {
        reply('Angka *'+msg_text+'* Terlalu Besar');
    } else {
        if (msg_text.toLowerCase() == 'nyerah') {
            dikzzydev.sendMessage(m.chat, { image: { url: config.game.tebakangka }, caption: `Yahh Menyerah\nJawaban: ${tebakangka[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak angka`}, {quoted: qdoc});
            delete tebakangka[from.split('@')[0]];
        } else {
            //reply('*Jawaban Salah!* \n\nKetik \n*nyerah* untuk menyelesaikan');
        }
    }
}

/* =================|CAK LONTONG |==================== */
if (caklontong.hasOwnProperty(from.split('@')[0])) {
kuis = true
jawaban = caklontong[from.split('@')[0]]
deskripsi = caklontong_desk[from.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
    AddMoney(m.sender,config.MoneyMenangGame)
 dikzzydev.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:qdoc}) 
delete caklontong[from.split('@')[0]]
delete caklontong_desk[from.split('@')[0]]
} else {
    if (msg_text.toLowerCase() == 'nyerah') {

    dikzzydev.sendMessage(m.chat, { image: { url: config.game.tebaklontong }, caption: `Yahh Menyerah\nJawaban:  ${caklontong[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:qdoc}) 
    delete caklontong[from.split('@')[0]]
    delete caklontong_desk[from.split('@')[0]]

    }else if(msg_text.toLowerCase() == 'hint'){

    let result_jwb_caklontong_desk = replaceNonFirstCharWithAsterisk(caklontong[from.split('@')[0]]);
    reply(result_jwb_caklontong_desk);

    }
    
}


}


/* =================| TEBAK KALIMAT |==================== */
if (tebakkalimat.hasOwnProperty(from.split('@')[0])) {
kuis = true
jawaban = tebakkalimat[from.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
    AddMoney(m.sender,config.MoneyMenangGame)
 dikzzydev.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮 \n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:qdoc}) 
delete tebakkalimat[from.split('@')[0]]
} else {
    if (msg_text.toLowerCase() == 'nyerah') {

    dikzzydev.sendMessage(m.chat, { image: { url: config.game.tebakkalimat }, caption: `Yahh Menyerah\nJawaban:  ${tebakkalimat[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:qdoc}) 
    delete tebakkalimat[from.split('@')[0]]
    }else if(msg_text.toLowerCase() == 'hint'){

    let result_jwb_tebakkalimat = replaceNonFirstCharWithAsterisk(tebakkalimat[from.split('@')[0]]);
    reply(result_jwb_tebakkalimat);

    }
    
}


}

/* =================| TEBAK LIRIK |==================== */

if (tebaklirik.hasOwnProperty(from.split('@')[0])) {
kuis = true
jawaban = tebaklirik[from.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
    AddMoney(m.sender,config.MoneyMenangGame)
 dikzzydev.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted:qdoc}) 
 delete tebaklirik[from.split('@')[0]]
} else {
    if (msg_text.toLowerCase() == 'nyerah') {

    dikzzydev.sendMessage(m.chat, { image: { url: config.game.tebaklirik }, caption: `Yahh Menyerah\nJawaban:  ${tebaklirik[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`}, {quoted:qdoc}) 
    delete tebaklirik[from.split('@')[0]]

    }else if(msg_text.toLowerCase() == 'hint'){

    let result_jwb_tebaklirik = replaceNonFirstCharWithAsterisk(tebaklirik[from.split('@')[0]]);
    reply(result_jwb_tebaklirik);

    }
    
}




}

/* =================| TEBAK TEBAKAN |==================== */
if (tebaktebakan.hasOwnProperty(from.split('@')[0])) {
kuis = true
jawaban = tebaktebakan[from.split('@')[0]]
if (msg_text.toLowerCase() == jawaban) {
    AddMoney(m.sender,config.MoneyMenangGame)
 dikzzydev.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:qdoc}) 
 delete tebaktebakan[from.split('@')[0]]
} else {
    if (msg_text.toLowerCase() == 'nyerah') {
    dikzzydev.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/1bcdee00d966bde630808.jpg' }, caption: `Yahh Menyerah\nJawaban:  ${tebaktebakan[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak tebakan`}, {quoted:qdoc}) 
    delete tebaktebakan[from.split('@')[0]]
    }else if(msg_text.toLowerCase() == 'hint'){

    let result_jwb_tebaktebakan = replaceNonFirstCharWithAsterisk(tebaktebakan[from.split('@')[0]]);
    reply(result_jwb_tebaktebakan);

    }
    
}



}


/* =================| SUIT |==================== */


// SUIT
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
dikzzydev.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
dikzzydev.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) dikzzydev.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) dikzzydev.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) dikzzydev.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
dikzzydev.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) dikzzydev.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) dikzzydev.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
dikzzydev.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}







/* =================| TIC TAC TOE |==================== */

// TIKTAKTOE
var ky_ttt=[];tttawal=["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"],idttt=[],ers1=[],ers2=[],gilir=[];for(let t of ky_ttt)idttt.push(t.id),ers1.push(t.er1),ers2.push(t.er2),gilir.push(t.gilir);
const isTTT=!!m.isGroup&&idttt.includes(from);iser1=!!m.isGroup&&ers1.includes(sender),iser2=!!m.isGroup&&ers2.includes(sender);

if (isTTT && iser2){
if (msg_text.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

er1 @${tty.er1.split('@')[0]}=❌
er2 @${tty.er2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.er1.split('@')[0]}`
  dikzzydev.sendMessage(from, ucapan, text, {quoted: qdoc, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
  }
if (msg_text.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
dikzzydev.sendMessage(from, `Yahh @${tty.er2.split('@')[0]} Menolak:(`,text,{quoted:qdoc,contextInfo:{mentionedJid:[tty.er2]}})
}
}

if (isTTT && iser1){
nuber = parseInt(msg_text)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].er1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.er1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
dikzzydev.sendMessage(from, ucapan1, text, {quoted:qdoc, contextInfo:{mentionedJid: [tty.er1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

er2 @${tty.er2.split('@')[0]}=⭕
er1 @${tty.er1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.er2.split('@')[0]}`
 dikzzydev.sendMessage(from, ucapan, text, {quoted: qdoc, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
}

if (isTTT && iser2){
nuber = parseInt(msg_text)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].er2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.er2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
dikzzydev.sendMessage(from, ucapan1, text, {quoted:qdoc, contextInfo:{mentionedJid: [tty.er2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}




if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

er1 @${tty.er1.split('@')[0]}=⭕
er2 @${tty.er2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.er1.split('@')[0]}`
 dikzzydev.sendMessage(from, ucapan, text, {quoted: qdoc, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
}



/* =================| PANEL ACCESS |==================== */
const accessChecks = {
    owner: resbot_.isOwner,
    premium: resbot_.isPremium
};

const requiredAccess = config.PANEL.access;

/* =================| IF NOT OWNER CHAT |==================== */
if (!resbot_.superOwner) {
    if ((config.botDestination === 'group' && !m.isGroup) || (config.botDestination === 'private' && m.isGroup)) {
        console.log(`${chalk.redBright('['+jammenit+']')} ${chalk.redBright.bold('INFO : Bot Hanya Bisa digunakan di : '+config.botDestination )}`)
        return
    }
}

/* =================| BOT DESTINATION |==================== */
if (config.bot_destination == 'group') {
    if (!m.isGroup) return
}
if (config.bot_destination == 'private') {
    if (m.isGroup) return
}




/* =================|  FETCH DATA |==================== */
async function fetchDataFromApi(apiUrl, params) {
    const queryString = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
    
    const fullUrl = `${apiUrl}?${queryString}`;

    try {
        const response = await fetchJson(fullUrl);
        return response?.data || null;
    } catch (error) {
        return null;
    }
}





/* =================| STYLE CHAT |==================== */
function applyStyle(q, styleNumber) {
    if (!global.smg_chat[sender].chat) return reply(`_Contoh: style Furina_`);
const tekspengganti = [
    'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘQʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
][styleNumber - 1] || '';

const teksHasil = global.smg_chat[sender].chat.trim().split('').map(char => {
    if (char === ' ' || /[a-z]/.test(char)) {
    return char === ' ' ? ' ' : tekspengganti[char.charCodeAt(0) - 'a'.charCodeAt(0)];
    } else {
    return char;
    }
}).join('');
return reply(teksHasil);
}


/* =================| CEK LIST ITEM |==================== */
if (db_userlist[from]) {
    let resbot_checklist = db_userlist[from].findIndex(data => data.keyword.trim() === resbot_.full_text.trim().toLowerCase());

    if (resbot_checklist !== -1) {
        let text_sendlist = db_userlist[from][resbot_checklist].text
        if (db_userlist[from][resbot_checklist].url.length > 5) {
            if (db_userlist[from][resbot_checklist].url.endsWith('.mp4')) {
            
                //video
                await dikzzydev.sendMessage(m.chat, { video: fs.readFileSync(db_userlist[from][resbot_checklist].url), caption: text_sendlist }, { quoted: qdoc });
            }else if (db_userlist[from][resbot_checklist].url.endsWith('.mp3')) {
            
                //audio
                await dikzzydev.sendMessage(m.chat, { audio: fs.readFileSync(db_userlist[from][resbot_checklist].url), caption: text_sendlist }, { quoted: qdoc });
            }else if (db_userlist[from][resbot_checklist].url.endsWith('.gif')) {

                // sticker
                const buffer = fs.readFileSync(db_userlist[from][resbot_checklist].url);
                await dikzzydev.sendImageAsSticker(from, buffer, m, { packname: text_sendlist, author: '' });
            }else{

                // gambar
                await dikzzydev.sendMessage(m.chat, { image : { url : db_userlist[from][resbot_checklist].url }, caption: text_sendlist }, { quoted:qdoc })
            }
        }else{
            return reply(text_sendlist)
        }
    }
}






/* =================| AUTO SIMI |==================== */
if (auto_simi_status == 'ON' && m.isGroup && prefix.length === 0 && !fromMe) {
    if (msg_text.toLowerCase() == 'simi') {
        return reply('Apa ?')
    }
    if (msg_text.toLowerCase().includes('simi') || quoted.fromMe) {

            try {
            const apiUrl = `${global.apikey}/api/simi`;
            const params = {
                    language : 'id',
                    text: global.smg_chat[sender].chat.trim(),
                    apikey: apikey.acak,
                };

                const aiResponse = await fetchDataFromApi(apiUrl, params);

                if (aiResponse) {
                    return reply(`${aiResponse.trim()}`);
                } else {
                return reply('_Maaf Saya Lagi Sakit._')
                }
            } catch (e) {
                console.log(e)
            return reply('_Maaf Saya Lagi Sakit_')
            }
    }
}


/* =================| ANTI ANTI |==================== */
if (m.isGroup && !resbot_.isAdmins) {
    if (antifoto_status == 'ON' && isImage2) {
    return dikzzydev.sendMessage(m.chat, { delete: m.key })
    }

    if (antivideo_status == 'ON' && isVideo2) {
        return dikzzydev.sendMessage(m.chat, { delete: m.key })
    }

    if (antiaudio_status == 'ON' && isAudio2) {
        return dikzzydev.sendMessage(m.chat, { delete: m.key })
    }

    if (antidocument_status == 'ON' && isDocument2) {
        return dikzzydev.sendMessage(m.chat, { delete: m.key })
    }

    if (antikontak_status == 'ON' && isContact2) {
        return dikzzydev.sendMessage(m.chat, { delete: m.key })
    }

    if (antipolling_status == 'ON' && isPolling2) {
        return dikzzydev.sendMessage(m.chat, { delete: m.key })
    }


    if (antisticker_status == 'ON' && isSticker2) {
        return dikzzydev.sendMessage(m.chat, { delete: m.key })
    }
}



/* =================| AUTO AI |==================== */
if (auto_chatgpt_status == 'ON' && m.isGroup && prefix.length === 0 ) {
    if (msg_text.toLowerCase() == 'ai') {
        return reply('Helo, Ada Yang Bisa di bantu ?')
    }
    if (msg_text.toLowerCase().includes('ai') || quoted.fromMe) {
        let searchAiAuto;
        let namaSaya = await dikzzydev.getName(sender)
        if (quoted.text) {
            searchAiAuto = 'Nama saya adalah '+namaSaya+' dan pertanyaan adalah ';
            if (quoted.text.includes('Helo, Ada Yang Bisa di bantu ?')) {
                searchAiAuto = searchAiAuto + msg_text.toLowerCase().trim();
            }else{
                searchAiAuto = searchAiAuto + msg_text.toLowerCase().trim()+' dalam konteks '+quoted.text;
            }
        }else{
            searchAiAuto = msg_text.toLowerCase().trim();
        }
        searchAiAuto = searchAiAuto + ' buatkan dalam kalimat singkat'
            try {
            const apiUrl = `${global.apikey}/api/chatgpt3`;
                const params = {
                    text: searchAiAuto,
                    apikey: apikey.acak,
                };

                let aiResponse = await fetchDataFromApi(apiUrl, params);

                if (aiResponse) {
                    let hasilGanti = aiResponse.replace('[jam saat ini]', jammenit);
                    hasilGanti = hasilGanti.replace('[masukkan waktu saat ini]', jammenit);
                    hasilGanti = hasilGanti.replace('[jam]', jammenit);

                    return reply(`${hasilGanti.trim()}`);
                } else {
                    return console.log('gagal ai')
                }
            } catch (e) {
                console.log(e)
            return reply('Gagal')
            }
    }
}


/* =================| GAME TEBAK BOM |==================== */
if (global.tebakBom && global.tebakBom[from]) {
    if (!isNaN(parseInt(msg_text)) && parseInt(msg_text) >= 1 && parseInt(msg_text) <= 9) {
    if (global.tebakBom[from].terjawab.includes(msg_text.trim())) {
            return
        } else {
            global.tebakBom[from].terjawab.push(msg_text.trim());
            if (global.tebakBom[from].terjawab.length >= 8) {
                delete global.tebakBom[from];
                AddMoney(m.sender,10)
                return reply(`_*Yeahh Anda Menang !*_\n\n_Money Anda *+10*_`)
            }
            const arrayBuah = global.tebakBom[from].ListBuah;
            const hurufMap = {
                1: 'A', 2: 'B', 3: 'C',
                4: 'D', 5: 'E', 6: 'F',
                7: 'G', 8: 'H', 9: 'I'
            };
            const nomor = parseInt(msg_text);
            if (nomor >= 1 && nomor <= 9) {
                const huruf = hurufMap[nomor];
                const [row, col] = [(nomor - 1) / 3 | 0, (nomor - 1) % 3];
                global.tebakBom[from].bomView_User = global.tebakBom[from].bomView_User.replace(huruf, arrayBuah[row][col]);
            }
            let hurufViewUser = global.tebakBom[from].bomView_User;
            let arrayHurufViewUser = hurufViewUser.split(' ');

function gantiHurufDenganEmoji(huruf) {
    switch(huruf) {
        case 'A':
            return '1️⃣';
        case 'B':
            return '2️⃣';
        case 'C':
            return '3️⃣';
        case 'D':
            return '4️⃣';
        case 'E':
            return '5️⃣';
        case 'F':
            return '6️⃣';
        case 'G':
            return '7️⃣';
        case 'H':
            return '8️⃣';
        case 'I':
            return '9️⃣';
        default:
            return huruf;
    }
}

let emotTerjawab = arrayHurufViewUser.map(huruf => gantiHurufDenganEmoji(huruf));
let barisTerpisah = '';
for (let i = 0; i < emotTerjawab.length; i++) {
    barisTerpisah += emotTerjawab[i];
    if ((i + 1) % 3 === 0 || i === emotTerjawab.length - 1) {
        barisTerpisah += '\n';
    }
}

// ANDA KALAH
if (global.tebakBom[from].posisiBom == msg_text.trim()) {
    let posisiBom = global.tebakBom[from].posisiBom; // Salin nilai posisiBom sebelum menghapus objek
    delete global.tebakBom[from];
    AddMoney(m.sender, -5)
    return reply(`*ANDA KALAH*\n\n_Nomor *${posisiBom}* adalah 💣_ \n\n_Money Anda -5_`);
}

AddMoney(m.sender,5)

return reply(`${barisTerpisah}

_*Money Anda +5*_`)
        }
    }
}

/* =================| ONLY ADMIN |==================== */
if(onlyadmin_status == 'ON' && !resbot_.isAdmins){
    return
}

// UPLOAD TO API
async function uploadFileToApi(filePath, expired) {
    try {
        const form = new FormData();
        form.append('expired', expired); // 1minute, 1hour, 1day, 1month and 6months
        form.append('file', fs.createReadStream(filePath));
        
        const response = await axios.put(
            "https://autoresbot.com/tmp-files/upload",
            form,
            {
                headers: {
                    ...form.getHeaders(),
                    'Referer': 'https://autoresbot.com/',
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36 Edg/126.0.0.0'
                }
            }
        );
        return response.data;
    } catch (error) {
        return error;
    }
}
/* ===============| VIEW ONE |================ */
global.viewOnce = global.viewOnce || {};

// if (groupMetadata.id === "120363297254557601@g.us") {
//     console.log('-------------------')
//     console.log(m)
//     console.log('-------------------')
// }


if (antiviewoneStatus == 'ON' && viewOnce && !fromMe) {
    console.log('masuk sini');
    let media;
    try {
        console.log('Downloading media...');
        media = await dikzzydev.downloadAndSaveMediaMessage(quoted_);
        console.log('Media downloaded:', media);
    } catch (e) {
        console.log('Error during media download:', e);
    }

    if (media) {
        try {
            console.log('Uploading media...');
            const response = await uploadFileToApi(media, "1hour");
            console.log('Response:', response);
            if (response.status) {
                let caption = singlemess.antisekalilihat || '';
                await dikzzydev.sendMessage(from, { image: { url: response.data.url }, caption }, { quoted: qdoc });
            }
        } catch (e) {
            console.log('Error during media upload:', e);
        }
    }
}




// CEK IP
const checkIPs = async () => {
    try {
        // Check IPv4
        const ipv4Response = await axios.get('https://api.ipify.org', { timeout: 15000 });
        const ipv4 = ipv4Response.data.trim();

        // Check IPv6
        let ipv6 = 'Not Supported';
        try {
            const ipv6Response = await axios.get('https://api6.ipify.org', { timeout: 15000 });
            ipv6 = ipv6Response.data.trim();
        } catch (error) {
            console.error(`Failed to fetch IPv6: ${error.message}`);
        }

        // Prepare response
        let replyMessage = '_IP SERVER_\n';
        replyMessage += `IPv4: ${ipv4}\n`;
        replyMessage += `IPv6: ${ipv6}\n`;

        return replyMessage;
    } catch (e) {
        return `Gagal Saat Mengecek IP: ${e.message}`;
    }
};

const { URLSearchParams } = require('url');

function getYouTubeVideoUrl(signatureCipher) {
    try {
        // Parsing the signatureCipher
        const params = new URLSearchParams(signatureCipher);

        // Extracting the signature and URL
        const signature = params.get('s');
        const url = params.get('url');
        const sp = params.get('sp');

        // Validate extracted parameters
        if (!signature || !url || !sp) {
            throw new Error('Invalid signatureCipher format');
        }

        // Build video URL
        const videoUrl = `${url}&${sp}=${signature}`;

        // Return valid video URL
        return videoUrl;
    } catch (error) {
        console.error('Error parsing signatureCipher:', error);
        throw error;
    }
}

/* =================| COMMAND |==================== */
// if (command.toLowerCase().trim() === text.toLowerCase().trim()) return 
if (!prefix && config.prefix) return


/* =================| MENAMPILKAN LOG |==================== */
console.log(`${chalk.yellow.bold('['+jammenit+']')} ${chalk.yellow.bold(pushname)} : ${chalk.whiteBright(firstTenCharacters)} `)


//==============================/ APIKEY LIST /=====================
    const commandRequiredApikey = [
  "play", "yt", "lirik", "kbbi", "ytsearch", "ytmp3", "tiktok", "ttsearch", "tiktokslide", 
  "ig", "fb", "ytmp4", "pinterest", "twitter", "google", "stalktiktok", "shio", "ai", 
  "aimath", "voiceai", "imageai", "simi", "igemini", "gemini", "anime", "waifu", 
  "husbando", "neko", "shinobu", "kenon", "unbanned", "fajar", "cnn", "cnbc", "spotify", 
  "tiktokmp3", "cekkodam", "ff", "ml", "doa", "zikir", "hadits", "jadwalsholat", "listsurah", 
  "surah", "attp", "ttp", "qc", "qc2", "aesthetic", "cecan", "cogan", "cosplay", "darkjoke", 
  "hacker", "kucing", "memeindo", "motivasi", "profil", "pubg", "thailand", "vietnam", "walhp", 
  "animequotes", "bucinquotes", "dilaquote", "faktaunik", "jokes", "jawaquote", "pantun", 
  "randomquote", "blankpink", "boom", "gaming", "magma", "marvel", "matrix", "metal", "neon", 
  "pornhub", "sliced", "shadow", "valentine", "valentine2", "winter", "wolf", "cekrekening", 
  "cekewallet", "vn", "tourl", "hd", "apikey", "megumin", "bully", "cuddle", "hug", "awoo", 
  "kiss", "lick", "pat", "bonk", "yeet", "blush", "smile", "wave", "highfive", "handhold", 
  "nom", "bite", "glomp", "slap", "kill", "happy", "wink", "poke", "dance", "cringe","cry",
  "qc3","attp2","attp3","tt2","pin","pin2","pinterest","tebak hewan","tebakhewan","brat3"
];
    
    

const korosu = ['2e1f28b50479bda7f703b66d', 'fa0bd52fc73270f860b079d2', 'f54dc3dd6417549b08d86e21','f8d5f68fda8ca0f209b00099','f8d1ebc1caaf4eb369b91446','Kaptendikzzy','4b0a8fc339509e64bec0ec58','87408cf2605603f90f70ffec','18ce21f42b81335759dd33d1','d3a47aafe8a52acd1bbbb088','78dc442b203e6f1a3385bd7e','f57d2faccbd8383685716a99','58b42bdfc132c1f1f6bee646','911f53c75152e7560d9c5790',]; // Isi dengan API key yang ingin digunakan
const apikey = {}; // Inisialisasi objek apikey

if (commandRequiredApikey.includes(command)) {
    const randomIndex = Math.floor(Math.random() * korosu.length);
    const randomApiKey = korosu[randomIndex];

    apikey.acak = randomApiKey; // Simpan API key acak ke dalam objek apikey

    const result = await cekapikey(apikey.acak);
    if (!result) {
        return console.log(`${chalk.purpleBright('[' + jammenit + ']')} ${chalk.blueBright.bold('Apikey Error Cek Dikzzydev.js 2569')}`);
    }
}
    
    
    
    
    
if (resbot_.isBan) return console.log('pengguna sedang di ban')


switch(command) {


/* ________________「 SUBMENU 」________________ */
case 'submenu':
await dikzzydev.sendMessage(from, { react: { text: "1️⃣", key: m.key } });await dikzzydev.sendMessage(from, { react: { text: "2️⃣", key: m.key } });await dikzzydev.sendMessage(from, { react: { text: "3️⃣", key: m.key } });await dikzzydev.sendMessage(from, { react: { text: "4️⃣", key: m.key } });await dikzzydev.sendMessage(from, { react: { text: "5️⃣", key: m.key } });await dikzzydev.sendMessage(from, { react: { text: "6️⃣", key: m.key } });await dikzzydev.sendMessage(from, { react: { text: "7️⃣", key: m.key } });await dikzzydev.sendMessage(from, { react: { text: "8️⃣", key: m.key } });await dikzzydev.sendMessage(from, { react: { text: "9️⃣", key: m.key } });await dikzzydev.sendMessage(from, { react: { text: "🔟", key: m.key } });await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });async function sendMessageWithDelay(from, message, delay) {
  await dikzzydev.sendMessage(from, message);
  console.log('Pesan terkirim');
  return new Promise(resolve => setTimeout(resolve, delay));
}
// Penggunaan:
await sendMessageWithDelay(from, { react: { text: "✅", key: m.key } }, 1000);
console.log('Setelah delay');

const menuMapping = {
'ai'          : menu_ai,
'anime'       : menu_anime,
'baned'       : menu_baned,
'berita'      : menu_berita,
'info'        : menu_info,
'database'    : menu_database,
'download'    : menu_download,
'game'        : menu_game,
'group'       : menu_group,
'information' : menu_information,
'islamic'     : menu_islamic,
'islami'      : menu_islamic,
'islam'       : menu_islamic,
'image'       : menu_image,
'maker'       : menu_maker,
'store'       : menu_store,
'owner'       : menu_owner,
'panel'       : menu_panel,
'pushkontak'  : menu_pushkontak,
'random'      : menu_random,
'textpro'     : menu_textpro,
'tools'       : menu_tools,
'more'        : menu_more
};
menu_lib = menuMapping[global.smg_chat[sender].chat] || menu_base;
dikzzydev.sendMessage(m.chat, {text: menu_lib}, {quoted: qdoc});
        

break

/* ________________「 ALMENU 」________________ */
        async function aiman() {
var loadd = ["□□□□□□□□□□ 0%","■■□□□□□□□□ 20%","■■■□□□□□□□ 30%","■■■■□□□□□□ 40%","■■■■■□□□□□ 50%","■■■■■■■□□□ 70%","■■■■■■■■□□ 80%","■■■■■■■■■■ 100%","*Furina Bot AI*  🍁"];
let { key } = await dikzzydev.sendMessage(m.chat, {text: '_𝐋𝐨𝐚𝐝𝐢𝐧𝐠...._'})
await new Promise(resolve => setTimeout(resolve, 1500));
for (let i = 0; i < loadd.length; i++) {await dikzzydev.sendMessage(m.chat, {text: loadd[i], edit: key })}} 
case 'menu': {
    await aiman ();
        let aresbot = `
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏╭──❍「 *WELCOME* 」❍
*Halo semuanya 👋*

*Perkenalkan aku adalah* _*Furina Bot Ai*_, *sebuah Kecerdasan Buatan*

*Aku di sini untuk membantu kalian dan menjawab pertanyaan atau bermain.*

*Jika kalian punya pertanyaan atau butuh bantuan kalian bisa menggunakan command (.help) untuk membuka halaman bantuan pada bot ini.* 🌠🪐

╰─┬────❍
╭─┴─❍「 *USER INFO* 」❍
│ *Name* 🧑‍💼      : *${pushname}*
│ *Status* 🎫     : ${resbot_.superOwner ? '*SuperOwner*' : resbot_.isOwner ? '*Owner*' : resbot_.isPremium ? '*Premium*' : '*User*'}
│ *Date* 📅         : *${hariini}*
│ 
╰─┬───────────────────────❍͏
╭─┴─❍「 *BOT INFO* 」❍
│ *Bot Name*     : *Furina Bot AI*
│ *Mode*             : *${config.publik ? "Public": "Self"}*
│ *Platform*        : *${os.platform()}*
│ *Type*                 : *Node.js*
│ *Uptime*           : *${formatUptime(os.uptime() )}*
│ 
╰─────────────────────────❍͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
${menu_all}

`
let searchText = "⟡";
let totalAllfitur = (aresbot.match(new RegExp(searchText, "g")) || []).length;
global.totalAllfitur = totalAllfitur
dikzzydev.sendMessage(m.chat, {
    text : aresbot,
    contextInfo: {
    externalAdReply: {
        showAdAttribution: false, 
        title: `${ucapanWaktu}  ${pushname}`,
        body: config.resbot_version,
        thumbnailUrl:config.allmenu,
        sourceUrl: config.grup,
        mediaType: 1,
        renderLargerThumbnail:true
        
  
    }
    }
},
{ quoted:verify }
)
        
    

    if (config.audio_menu) {
        fs.readdir('./Storage/sound', (err, files) => {
            if (err) {
            return dikzzydev.sendMessage(m.chat, { audio: fs.readFileSync('./App/mp3/'+audio_file), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
            }
            if (files.length > 0) {
                const randomIndex = Math.floor(Math.random() * files.length);
                const randomFileName = files[randomIndex];
                return dikzzydev.sendMessage(m.chat, { audio: fs.readFileSync('./Storage/sound/'+randomFileName), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})

            } else {
                return dikzzydev.sendMessage(m.chat, { audio: fs.readFileSync('./App/mp3/'+audio_file), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
            }
        })
    }
}
    break

/* ________________「 Total Chat 」________________ */

case 'totalchat':
    if (!resbot_.isAdmins) return reply(mess.admin);
        
  let filter_totalhcat = getAllNumbersByGroup(from);
  filter_totalhcat = filter_totalhcat.map(item => item.split('@')[0]);
  const newDataTotalchat = groupMetadata.participants.filter(item2 => 
    filter_totalhcat.includes(item2.id.split('@')[0])
  );
  const totalchat = getChatCountsByGroup(from);
  return await dikzzydev.sendMessage(m.chat, { text: totalchat, mentions: newDataTotalchat.map(a => a.id) }, { quoted: qdoc });
break;

/* ________________「 Add Response Chat 」________________ */
case 'addrespon':
case 'addrespons':
case 'addresponse':
 {
    if (!resbot_.isOwner) return reply(mess.owner);

    // Memeriksa apakah input valid
    const addresponInput = global.smg_chat[sender]?.chat || '';
    if (!addresponInput.includes('|')) {
        return reply('_Masukkan Command | text_ \n\n_Contoh : *.addrespon assalamualaikum | waalaikumsalam*_');
    }
    let  [addresponseCommand, addresponseChat] = addresponInput.split('|').map(str => str.trim());
    if (!addresponseCommand || !addresponseChat) {
        return reply('_Masukkan Command dan Teks dengan benar!_');
    }
    addresponseCommand = addresponseCommand.toLowerCase();
    let responseData = loadResponseData();
    responseData[addresponseCommand] = addresponseChat;
    saveResponseData(responseData);
    reply(`_Response untuk "${addresponseCommand}" telah ditambahkan atau diperbarui!_`);
    break;
}
/* ________________「 Delete Response Chat 」________________ */
case 'delrespon':
case 'delrespons':
case 'delresponse':
case 'deleterespon':
case 'deleterespons':
case 'deleteresponse':
 {
    if (!resbot_.isOwner) return reply(mess.owner);

    // Memeriksa apakah input valid
    const deleteResponseCommand = global.smg_chat[sender]?.chat.toLowerCase().trim() || '';
    
    if (!deleteResponseCommand) {
        return reply('_Masukkan Command yang ingin dihapus!_');
    }

    // Memuat data dari file JSON
    let responseData = loadResponseData();

    // Periksa apakah command tersebut ada dalam database
    if (responseData.hasOwnProperty(deleteResponseCommand)) {
        // Hapus command dari database
        delete responseData[deleteResponseCommand];
        
        // Simpan perubahan ke file JSON
        saveResponseData(responseData);
        
        reply(`_Response untuk "${deleteResponseCommand}" telah dihapus!_`);
    } else {
        reply(`_Command "${deleteResponseCommand}" tidak ditemukan dalam database._`);
    }
    break;
}

/* ________________「 List Response Chat 」________________ */
case 'listrespons':
case 'listresponses':
case 'listresponse':
case 'listrespon':
 {
    if (!resbot_.isOwner) return reply(mess.owner);

    // Memuat data dari file JSON
    let responseData = loadResponseData();

    if (Object.keys(responseData).length === 0) {
        return reply('_Tidak ada respons yang tersimpan dalam database._');
    }

    // Membuat daftar respons untuk dikirim
    let responseList = 'List Respons:\n\n';
    for (const [command, response] of Object.entries(responseData)) {
        responseList += `⭔ *${command}*\n`;
    }

    reply(responseList);
    break;
}



/* ________________「 ML 」________________ */
case 'ml':
    if (!global.smg_chat[sender].chat) return reply('_Masukkan ID GAME_\n\n.ml 427679814 9954')
try {
if (command == 'ml' && !args[1]) return reply('_Masukkan ID Game dan Zone Id_\n\nContoh .ml 427679814 9954')
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    const userid = args[0];
    const serverId = args[1];
    let apiUrl = `https://api.autoresbot.com/api/checker/${command}?apikey=${apikey.acak}&user_id=${userid}`;
    if (serverId && command == 'ml') {
        apiUrl += `&server=${serverId}`;
    }
    const data = await fetchJson(apiUrl);
    const gameDataId = `*Hasil Pemeriksaan MLBB IGN*

*------*
_MLBB IGN_
_*${decodeURIComponent(data.data.username)}*_
*------*
_Account Country_
_*${data.data.create_role_country.toUpperCase()}*_
*------*
_Last Login Country_
_*${data.data.this_login_country.toUpperCase()}*_`


return reply(gameDataId);
} catch(e){
    console.log(e)

    return reply('_Gagal Saat Mengecek ID Game_')
}
break

/* ________________「 FF/COD 」________________ */
case 'ff':
case 'cod':
    if (!global.smg_chat[sender].chat) return reply('_Masukkan ID GAME_\n\n.ff 3806721101')

try {
if (command == 'ml' && !args[1]) return reply('_Masukkan ID Game dan Zone Id_\n\nContoh .ml 427679814 9954')
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

    const userid = args[0];
    const serverId = args[1];

    let apiUrl = `https://api.autoresbot.com/api/checker/${command}?apikey=${apikey.acak}&user_id=${userid}`;

    if (serverId && command == 'ml') {
        apiUrl += `&server=${serverId}`;
    }

    const data = await fetchJson(apiUrl);

    const gameDataId = `🎮  | ${data.data.game}

Game ID : ${data.data.game}
User ID : ${data.data.user_id}
Username : ${data.data.username}`
return reply(gameDataId);
} catch(e){

    return reply('_Gagal Saat Mengecek ID Game_')
}

break

/* ________________「 WINRATE 」________________ */
case 'winrate':

if (!global.smg_chat[sender].chat) return reply(`Gunakan Format : .winrate [totalmatch] [totalwinrate] [winrate yang di inginkan]

Contoh: winrate 70 60.5 90`)
const tMatch = args[0];
const tWr = args[1];
const wrReq = args[2];
if (!tMatch || !tWr || !wrReq) return reply(`Gunakan Format : .winrate [totalmatch] [totalwinrate] [winrate yang di inginkan]

Contoh: winrate 70 60.5 90`)
const hasilWinrate = hitungWinRate(tMatch, tWr, wrReq);
return reply(hasilWinrate);
break




/* ===============| FITUR BARU/NEW |===================*/

/* ________________「 NULIS 」________________ */
case 'nulis':
    {

    if (resbot_.isBan) return reply(mess.ban);
    if (!global.smg_chat[sender].chat) return reply(`_Masukkan nama Contoh *${prefix + command} Furina Ai*_`)
    
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    try {
        let getImage = await getBuffer(`https://api.siputzx.my.id/api/m/nulis?text=${text}`);
                 
        
        await dikzzydev.sendMessage(m.chat, { image: getImage, caption: mess.success }, { quoted: qdoc });
    } catch (err) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break
/* ________________「 BRAT」________________ */
case 'brat':
if (resbot_.isBan) return reply(mess.ban);
if (args.length === 0) return reply(`_Contoh: *${prefix + command} Furina*_`);
    try {
        ini_txt = args.join(" ")
        const ini_buffer_ttp = await getBuffer(`https://api.siputzx.my.id/api/m/brat?text=${text}`)
        if(ini_buffer_ttp){
            await dikzzydev.sendImageAsSticker(from, ini_buffer_ttp, m, { packname: config.packname, author: config.author });
        }
    } catch (e) {
        return await dikzzydev.sendMessage(from, { text: "_Terjadi kesalahan silahkan gunakan *.brat3*_ ", key: m.key });
    }
    break;


/* ________________「 BRAT2」________________ */

case 'brat2':
if (resbot_.isBan) return reply(mess.ban)
if (!resbot_.isPremium) return reply(mess.premium)
if (args.length === 0) return reply(`_Contoh: *${prefix + command} Furina*_`);
    try {
        ini_txt = args.join(" ")
        const ini_buffer_ttp = await getBuffer(`https://brat.caliphdev.com/api/brat?text=${text}`)
        if(ini_buffer_ttp){
            await dikzzydev.sendImageAsSticker(from, ini_buffer_ttp, m, { packname: config.packname, author: config.author });
        }
    } catch (e) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
    break;


/* ________________「 BRAT3」________________ */

case 'brat3':
if (resbot_.isBan) return reply(mess.ban)

if (args.length === 0) return reply(`_Contoh: *${prefix + command} Furina*_`);
    try {
        ini_txt = args.join(" ")
        const ini_buffer_ttpa = await getBuffer(`https://api.autoresbot.com/api/maker/brat?apikey=${apikey.acak}&textColor=000000&bgColor=ffffff&text=${text}`)
        if(ini_buffer_ttpa){
            await dikzzydev.sendImageAsSticker(from, ini_buffer_ttpa, m, { packname: config.packname, author: config.author });
        }
    } catch (e) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
    break;





/* ________________「 ACC 」_______________________ */

case 'acc': {
			if (!m.isGroup) return reply(mess.group)
if (!resbot_.isAdmins) return reply(mess.admin)
				const groupId = m.chat;
				const [subCommand, options] = args;
				const joinRequestList = await dikzzydev.groupRequestParticipantsList(groupId);

				switch (subCommand) {
					case 'list': {
						const formattedRequests = joinRequestList.length > 0 ?
							joinRequestList.map((request, i) => {
								const timestamp = request.request_time;
								return `*${i + 1}.*\n• Nomor: ${request.jid.split('@')[0]}\n• Metode Permintaan: ${request.request_method}\n• Waktu Permintaan: ${new Intl.DateTimeFormat('id-ID', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              }).format(new Date(1e3 * timestamp))}\n\n`;
							}).join('') :
							'Tidak ada permintaan bergabung yang tertunda.';
						reply(`*Daftar Permintaan Bergabung:*\n\n${formattedRequests}`);
						break;
					}
					case 'reject':
					case 'approve': {
						if (options === 'all') {
							for (const request of joinRequestList) {
								await dikzzydev.groupRequestParticipantsUpdate(groupId, [request.jid], subCommand);
								console.log(`Meng-${subCommand} participant dengan JID: ${request.jid}`);
							}
							reply(`*${subCommand === 'approve' ? 'Menyetujui' : 'Menolak'} semua permintaan bergabung.*`);
						} else {
							const participants = options.split('|').map(action => action.trim()).map(action => joinRequestList[parseInt(action) - 1]).filter(request => request);
							if (participants.length > 0) {
								let formattedResponse = '';
								for (const request of participants) {
									const response = await dikzzydev.groupRequestParticipantsUpdate(groupId, [request.jid], subCommand);
									const status = response[0]?.status === 'success' ? 'Gagal' : 'Berhasil';
									formattedResponse += `*${participants.indexOf(request) + 1}.*\n• Status: ${status}\n• Nomor: ${request.jid.split('@')[0]}\n\n`;
									console.log(`Meng-${subCommand} participant dengan JID: ${request.jid}`);
								}
								reply(`*${subCommand === 'approve' ? 'Menyetujui' : 'Menolak'} Permintaan Bergabung:*\n\n${formattedResponse}`);
							} else {
								reply('Tidak ada anggota yang cocok untuk reject/approve.');
							}
						}
						break;
					}
					default:
						reply('*Info*\nGunakan:\n- *acc list*\n- *acc approve [number list]*\n- *acc reject [number list]*\n- *acc reject/approve all* untuk menolak/menyetujui semua permintaan bergabung.\n\n> ©Furina Bot AI');
				}
			}
			break



/* ________________「 OPEN TIME 」________________ */

case 'opentime': {
				if (!m.isGroup) return reply(mess.notGroup)
				if (!resbot_.isAdmins) return reply(mess.userNotAdmin)
                              if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)
    
				if (args[1] == 'detik') {
					var timer = args[0] * `1000`
				} else if (args[1] == 'menit') {
					var timer = args[0] * `60000`
				} else if (args[1] == 'jam') {
					var timer = args[0] * `3600000`
				} else if (args[1] == 'hari') {
					var timer = args[0] * `86400000`
				} else {
					return reply('*Pilih:*\n- detik\n- menit\n- jam\n\n*Contoh*\n10 detik\n> ©Furina Bot AI')
				}
				m.reply(`_Grup Akan Dibuka Dalam ${q} Dimulai Dari Sekarang_`)
				setTimeout(() => {
					var nomor = m.participant
					const open = `Grup Telah Di Buka Oleh Admin\nSekarang Semua Member Dapat Mengirim Pesan\n> ©Furina Bot AI`
					dikzzydev.groupSettingUpdate(m.chat, 'not_announcement')
					m.reply(open)
				}, timer)
			}
			break
			


/* ________________「 CLOSE TIME 」________________ */

case 'closetime': {
        if (!m.isGroup) return reply(mess.notGroup)
if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)
if (!resbot_.isAdmins) return reply(mess.userNotAdmin)
        
				if (args[1] == 'detik') {
					var timer = args[0] * `1000`
				} else if (args[1] == 'menit') {
					var timer = args[0] * `60000`
				} else if (args[1] == 'jam') {
					var timer = args[0] * `3600000`
				} else if (args[1] == 'hari') {
					var timer = args[0] * `86400000`
				} else {
					return reply('*Pilih:*\ndetik\nmenit\njam\n\n*Contoh*\n10 detik\n> ©Furina Bot AI')
				}
				m.reply(`_Group Akan Ditutup Dalam ${q} Di Mulai Dari Sekarang_`)
				setTimeout(() => {
					var nomor = m.participant
					const close = `Grup Di Tutup Oleh Admin\nSekarang Hanya Admin Yang Dapat Mengirim Pesan\n> ©Furina Bot AI`
					dikzzydev.groupSettingUpdate(m.chat, 'announcement')
					m.reply(close)
				}, timer)
			}
			break
			

/* ________________「 PAY 」________________ */
case 'dana':
case 'pay':
case 'donate':
case 'payment': {
     const username = m.sender.split('@')[0]; // Mengambil username pengirim
    const asu = 10000; // Contoh jumlah donasi
    const caption = `*Hallo* ${username},*Saat ini kami hanya menerima pembayaran melalui Aplikasi  DANA*💰\n\n*• No Dana* 081277811884 \n\n> ©Furina Bot Ai`;

    const imageBuffer = fs.readFileSync('./App/src/media/dana.jpg');
    return dikzzydev.sendMessage(m.chat, { image: imageBuffer, caption: caption },{ quoted: qdoc });
    //await dikzzydev.sendMessage(m.chat, {text: teks}, { quoted: qdoc });//
                                 
    
    break;
}

/* ________________「 PINTEREST 2」________________ */
        
    case 'pin2': {

   
        const chatMessage = global.smg_chat[sender]?.chat;
  if (!chatMessage) return reply('_Contoh: *.pin kucing*_');
if (resbot_.isBan) return reply(mess.ban);
if (MinLimit(m.sender) === undefined) return;
try {
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    let pinterest_result = await fetchJson(`${global.apikey}/api/search/pinterest?text=${chatMessage}&apikey=${apikey.acak}`);

    if ( pinterest_result.data) {
        dikzzydev.sendMessage(from, { image: { url: pinterest_result.data }, caption: mess.success }, { quoted: qdoc });
    }else {
        throw new Error("ERROR");
    }
} catch (error) {
    await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
}
break;
}


/* ________________「 BOT  」________________ */

case 'bot':
    if (resbot_.isBan) return reply(mess.ban);
    if (!global.smg_chat[sender].chat) return reply('_Halo,ada yang bisa dibantu?_ 🤔');
    if (MinLimit(m.sender) === undefined) return
            
   try {
        const copilot = ('https://api.siputzx.my.id')
        const apiUrl = `${copilot}/api/ai/copilot?text=`;
        const params = {
            text: global.smg_chat[sender].chat,
            
        };
        const aiResponse = await fetchDataFromApi(apiUrl, params);

        if (aiResponse) {
            return reply(aiResponse);
        } else {
            const apiUrl2 = `${copilot}/api/ai/copilot`;
            const params2 = {
                text: global.smg_chat[sender].chat,
                
            };
            let aiResponse = await fetchDataFromApi(apiUrl2, params2);
            return reply(aiResponse)
        }
    } catch (e) {
        return await dikzzydev.sendMessage(from,{ text: "_maaf saya lgi ga enak badan,jgn ganggu dulu ya_ 🤒 ", key: qdoc.key});
    }
    break;



/* ________________「 SUS 」________________ */
case 'bokep' :
case 'hentai' :
case 'bkp' :
case 'tobrut' :
case 'memek' : {
reply ('hayolo ngapain kamu 🤨🤨')
await new Promise(resolve => setTimeout(resolve, 10000));
reply ('dasar cabul 😤')
}
break
      
 //==================== [Play Store]====≠============//
case 'playstore' :
   case 'app' :
   case 'apps' :
   case 'appstore' :
    case 'apk' :{
        
if (resbot_.isBan) return reply(mess.ban);
if (!global.smg_chat[sender].chat) return reply(`Contoh:  _${prefix + command} YouTube_`)
await dikzzydev.sendMessage(from, { react: { text: "⏳", key: m.key } });


const query = `${text}`;
const { data } = await axios.get("https://api.siputzx.my.id/api/s/playstore?query=" + query);

const { img,nama, developer,link,rate} = data.data[0];

const infoText = `_*「  Hasil Penelusuran  🔮」*_\n\n*Nama:* ${nama}\n\n*Developer:* ${developer}\n\n*Link:* ${link}\n\n*Rate:* ${rate}\n\n\n> by Google Play Store`

dikzzydev.sendMessage(m.chat, { image: { url: img }, caption: infoText }, { quoted: qdoc})
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        break
    }















/* ===============| FITUR TAMBAHAN / CADANGAN |===================*/

/* ________________「 YT 」________________ */
case 'yt': {
const chatMessage = global.smg_chat[sender]?.chat;
    if (!chatMessage) {
        return reply(`_Gunakan perintah dengan format_ *.play kangen band - terbang bersamaku*`);
    }
    if (MinLimit(m.sender) === undefined) return;

    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

    try {
        const search = await yts(chatMessage);
        const firstVideo = search.all.find(item => item.type === 'video') || search.all[0];

        if (firstVideo?.seconds > 3600) {
            return reply('_Maaf File Terlalu Besar, Tidak Dapat Di Kirim Di Whatsapp_');
        }

        const response = await fetchJson(`${global.apikey}/api/downloader/ytplay?apikey=${apikey.acak}&url=${firstVideo.url}`);
        if (response && response.status) {

            if(response.bytes > 104857600){
                return reply(`*File Terlalu Besar silakan download disini*\n\n${response.url}`)
            }

            await dikzzydev.sendMessage(m.chat, {
                audio: {url : response.url},
                mimetype: "audio/mp4",
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: firstVideo.title || "Untitled",
                        body: config.resbot_version,
                        sourceUrl: firstVideo.url,
                        thumbnailUrl: firstVideo.thumbnail || "https://example.com/default_thumbnail.jpg",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: qdoc });
        } else {
            return await dikzzydev.sendMessage(from, { react: { text: "❗", key: m.key } });
        }
    } catch (e) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }

    break;
}


/* ________________「 QC3 」________________ */
case 'qc3': {
    if (resbot_.isBan) return reply(mess.ban);
    if (!global.smg_chat[sender] || !global.smg_chat[sender].chat) {
        return reply('_Masukkan Teksnya_ \n\n_Contoh : *.qc Hallo*_');
    }

    let ppnyauser;
    try {
        ppnyauser = await dikzzydev.profilePictureUrl(m.sender, 'image');
    } catch (e) {
        ppnyauser = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg';
    }

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    let success = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const apiUrl = `${global.apikey}/api/maker/qc?apikey=${encodeURIComponent(apikey.acak)}&name=${encodeURIComponent(pushname)}&text=${encodeURIComponent(global.smg_chat[sender].chat)}&pp=${encodeURIComponent(ppnyauser)}`;
            const buffer_qc2 = await getBuffer(apiUrl);
            if (!Buffer.isBuffer(buffer_qc2)) {
                throw new TypeError('Response is not a valid Buffer');
            }

            await dikzzydev.sendImageAsSticker(from, buffer_qc2, m, { packname: config.packname, author: config.author });
            success = true;
            break;
        } catch (error) {
            if (attempt === 3) {
                reply('Maaf, terjadi kesalahan dalam menghasilkan sticker setelah 3 kali percobaan.');
            } else {
                await sleep(1000);  // Tunggu 1 detik sebelum mencoba lagi
            }
        }
    }
}
break;

















/* ===============| MENU AI |===================*/


/* ________________「 AI 」________________ */
case 'ai':
    if (resbot_.isBan) return reply(mess.ban);
    if (!global.smg_chat[sender].chat) return reply('_Halo, ada yang bisa dibantu?_');
    if (MinLimit(m.sender) === undefined) return;
    try {
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        const apiUrl = `${global.apikey}/api/chatgpt3`;
        const params = {
            text: global.smg_chat[sender].chat,
            apikey: apikey.acak,
        };
        const aiResponse = await fetchDataFromApi(apiUrl, params);

        if (aiResponse) {
            return reply(aiResponse);
        } else {
            const apiUrl2 = `${global.apikey}/api/gemini`;
            const params2 = {
                text: global.smg_chat[sender].chat,
                apikey: apikey.acak,
            };
            let aiResponse = await fetchDataFromApi(apiUrl2, params2);
            return reply(aiResponse)
        }
    } catch (e) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
    break;


/* ________________「 AIMATH 」________________ */
case 'aimath':
        if (resbot_.isBan) return reply(mess.ban);
        if (!global.smg_chat[sender].chat) return reply('_Hello Ada yang dapat di bantu ? saya bisa memecahkan soal matematika_');
        if (MinLimit(m.sender) === undefined) return;
    try {
        await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
            const apiUrl = `${global.apikey}/api/math`;
            const params = {
                text: global.smg_chat[sender].chat,
                apikey: apikey.acak,
            };
            const aiResponse = await fetchDataFromApi(apiUrl, params);
            if (aiResponse) {
                return reply(aiResponse);
            } else {
                return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
            }
        } catch (e) {
            return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
        }
    break;

/* ________________「 VOICEAI 」________________ */
case 'voiceai':
    if (resbot_.isBan) return reply(mess.ban);
    if (!global.smg_chat[sender].chat) return reply(`_Gunakan perintah *voiceai sebutkan nama nama ikan*_`)
    if (MinLimit(m.sender) === undefined) return;
    try {
        await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
            const regex = /[^a-zA-Z0-9\s]/g;
            const text_ai = global.smg_chat[sender].chat + ' dan buatkan hanya sesingkat mungkin';

            const apiUrl = `${global.apikey}/api/gemini`;
            const params = {
                text: global.smg_chat[sender].chat,
                apikey: apikey.acak,
            };
            let aiResponse = await fetchDataFromApi(apiUrl, params);
            if (aiResponse) {
            aiResponse = aiResponse.substring(0, 199);
            aiResponse = aiResponse.replace(regex, '');
        vn = await getBuffer(`https://translate.google.com/translate_tts?ie=UTF-8&q=${aiResponse}&tl=id&total=1&idx=0&textlen=4&client=tw-ob&prev=input&ttsspeed=1`)
        repf = await dikzzydev.sendMessage(
            m.chat,
            { audio: vn, mimetype: 'audio/mp4', ptt: true },
            { quoted: qdoc }
        );
            } else {
                return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
            }
    } catch (e) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
    break;

/* ________________「 IMAGEAI 」________________ */

case 'imageai':
        if (!resbot_.isPremium) return reply(mess.premium)
        if (resbot_.isBan) return reply(mess.ban);
        if (!global.smg_chat[sender].chat) return reply('_Contoh: *imageai kucing*_');
        if (MinLimit(m.sender) === undefined) return;
    try {
        await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
            const url_prodia = await fetchJson(`${global.apikey}/api/imgai?apikey=${apikey.acak}&text=${global.smg_chat[sender].chat}`)
            return dikzzydev.sendMessage(m.chat, { image : { url : url_prodia.data }, caption: mess.success }, { quoted:qdoc });
        } catch (e) {
            return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
        }
    break;


/* ________________「 SIMI 」________________ */
case 'simi':
        if (resbot_.isBan) return reply(mess.ban);
        if (!global.smg_chat[sender].chat) return reply('_Iya Kak?_');
        if (MinLimit(m.sender) === undefined) return;
        try {
        await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

            const apiUrl = `${global.apikey}/api/simi`;
            const params = {
                language : 'id',
                text: global.smg_chat[sender].chat,
                apikey: apikey.acak,
            };
            const aiResponse = await fetchDataFromApi(apiUrl, params);
            if (aiResponse) {
                return reply(aiResponse);
            } else {
                return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
            }
        } catch (e) {
            return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
        }
    break;


/* ________________「 IGEMINI 」________________ */
case 'igemini':
case 'geminiimage':{
        if (!isImage) return reply(`Balas/Kirim Gambar Serta Perintahnya Dengan *${prefix + command}*`);
        if (!global.smg_chat[sender].chat) return reply('_Apa Perintahnya ?_')
        if (MinLimit(m.sender) === undefined) return;
        await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
            try {
                const file_hd = await dikzzydev.downloadAndSaveMediaMessage(quoted_);

                const response = await uploadFileToApi(file_hd, "1hour");
                const url_teleph_hdurl1 = response.fileUrl; 



                const result = await fetchJson(`${global.apikey}/api/gemini-image?apikey=${apikey.acak}&url=${url_teleph_hd}&text=${global.smg_chat[sender].chat}`);
                if (result && result.data) {
    
                return reply(result.data)
            }else{
                return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
            }
            } catch (error) {
                return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
            }
        }
        break;
    
/* ________________「 GEMINI 」________________ */
case 'gemini':
        if (resbot_.isBan) return reply(mess.ban);
        if (!global.smg_chat[sender].chat) return reply('_Iya Kak?_');
        if (MinLimit(m.sender) === undefined) return;
        try {
        await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
            const apiUrl = `${global.apikey}/api/gemini`;
            const params = {
                text: global.smg_chat[sender].chat,
                apikey: apikey.acak,
            };
            const aiResponse = await fetchDataFromApi(apiUrl, params);
            if (aiResponse) {
                return reply(aiResponse);
            } else {
                return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
            }
        } catch (e) {
            return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
        }
    break;

/* ________________「 BOT 」________________ 
case 'bot': {
    let pesanBot = `_Saya Tidak Mengerti_`;
    let msg_received = global.smg_chat[sender].chat.toLowerCase();
    let UserTagList_Forbot = groupMetadata.participants.filter(item2 => sender === item2.id);

    // BOT KONDISI
    if (command == 'bot' && !global.smg_chat[sender].chat) {
        pesanBot = `_Halo, Kak_ @${sender.split("@")[0]} _Ada Yang Bisa Dibantu ?_`;
    }

    // TANYA BOT
    else if (msg_received.includes('siapa') && msg_received.includes('kamu')) {
        pesanBot = `_*Saya adalah Bot Whatsapp*_\n_Asisten yang dikembangkan oleh @alfnzy_._\n_Tugas saya adalah membantu menjawab pertanyaan dan dapat melakukan aksi yang diizinkan pada aplikasi WhatsApp_`;
    }

    // MENUTUP GRUB
    else if (msg_received.includes('tutup') && (msg_received.includes('grup') || msg_received.includes('grub') || msg_received.includes('gc') || msg_received.includes('group'))) {
        if (!resbot_.isAdmins) return reply(`_Maaf saya tidak dapat menutup group karena perintah ini hanya untuk admin group_`);
        
        dikzzydev.groupSettingUpdate(from, 'announcement')
                    .then((res) => reply(`_Group Sudah Ditutup tuan_`))
                    .catch((err) => reply(jsonformat(err)));
        return
    }

    // MEMBUKA GRUB
    else if (msg_received.includes('buka') && (msg_received.includes('grup') || msg_received.includes('grub') || msg_received.includes('gc') || msg_received.includes('group'))) {
        if (!resbot_.isAdmins) return reply(`_Maaf saya tidak dapat Membuka group karena perintah ini hanya untuk admin group_`);
        dikzzydev.groupSettingUpdate(from, 'not_announcement')
            .then((res) => reply(`_Group sudah dibuka tuan_`))
            .catch((err) => reply(jsonformat(err)));
        return
    }

    // MENCARI GAMBAR
    else if ((msg_received.includes('gambar') || msg_received.includes('foto')) && (msg_received.includes('cari') || msg_received.includes('carikan') || msg_received.includes('tolong') )) {
    
        imageTempt = args[args.length - 1];
        imageTempt = imageTempt.toLowerCase().trim();
        pesanBot = `_Baik Silakan di Tunggu yaa ..._ \n\nSaya akan mencari gambar dengan kata kunci *${imageTempt}*`;
        await reply(pesanBot)

            try {
            let pinterest_result = await fetchJson(`${global.apikey}/api/search/pinterest?text=${imageTempt}&apikey=${apikey.acak}`);

            if (pinterest_result.data && pinterest_result.data.length > 0) {
                const randomIndex_pin = Math.floor(Math.random() * pinterest_result.data.length);
                const randomImageUrl_pin = pinterest_result.data[randomIndex_pin];

                dikzzydev.sendMessage(from, { image: { url: randomImageUrl_pin }, caption: '_Ini tuan fotonya ..._' }, { quoted: qdoc });
            } 


        } catch (error) {
            return reply('_Maaf tuan gambar gagal di dapatkan_')
        }
    }


     // MENCARI LAGU
    else if (msg_received.includes('lagu') && (msg_received.includes('play') || msg_received.includes('cari') || msg_received.includes('carikan') || msg_received.includes('tolong') || msg_received.includes('putar') )) {
    
        songsTempt = msg_received.replace("lagu", "").replace("play", "").replace("carikan", "").replace("cari", "").replace("tolong", "").replace("putar", "").trim();
        pesanBot = `_Baik Silakan di Tunggu yaa ..._ \n\nSaya akan mencari lagu dengan kata kunci *${songsTempt}*`;
        reply(pesanBot)

        
    try {
            let search = await yts(songsTempt)
            
            let hasil_search_andplay = search.all.find(item => item.type === 'video')?.url;
            let first_playvideo = search.all[0];

            if (first_playvideo.seconds > 3600) {
                return reply('_Maaf Tuan Audionya Terlalu Besar, Tidak Dapat Di Kirim Disini_')
            }else{
                await downloadMp3(hasil_search_andplay);

            }

            return

        } catch(e) {
        return reply(`Maaf tuan lagunya gagal didapatkan`);
        }

    }
    
     // MEMBUAT STICKER
    else if ( (msg_received.includes('sticker') || msg_received.includes('stiker')) && (msg_received.includes('buat') || msg_received.includes('buatkan') )) {

        StickerTempt = msg_received.replace("sticker", "").replace("stiker", "").replace("buatkan", "").replace("buat", "").trim();
        pesanBot = `_Baik Silakan di Tunggu yaa ..._ \n\nSaya akan membuat sticker *${StickerTempt}*`;
        reply(pesanBot)

        
        try {
            let pinterest_result = await fetchJson(`${global.apikey}/api/search/pinterest?text=${StickerTempt}&apikey=${apikey.acak}`);

            if (pinterest_result.data && pinterest_result.data.length > 0) {
                const randomIndex_pin = Math.floor(Math.random() * pinterest_result.data.length);
                const randomImageUrl_pin = pinterest_result.data[randomIndex_pin];
                //dikzzydev.sendMessage(from, { image: { url: randomImageUrl_pin }, caption: `_Ini tuan gambarnya_` }, { quoted: qdoc });
                return dikzzydev.sendImageAsSticker(from, randomImageUrl_pin, m, { packname: config.packname, author: config.author });
            }
        } catch (error) {
            return reply(`Maaf tuan gambar gagal didapatkan`);
        }


    }
    // Default jika tidak ada kondisi yang terpenuhi
    else {
        pesanBot = `_Maaf, Kak_ @${sender.split("@")[0]} _Saya Belum Mengerti_`;
    }

    dikzzydev.sendMessage(from, { text: pesanBot, mentions: UserTagList_Forbot.map(a => a.id) }, { quoted: qdoc });
}
break;





*/




/* ===============| MENU ANIME |===================*/


/* ________________「 WAIFU 」________________ */
case 'waifu':case 'neko':case 'shinobu':case 'megumin':case 'bully':case 'cuddle':case 'cry':case 'hug':case 'awoo':case 'kiss':case 'lick':case 'pat':case 'smug':case 'bonk':case 'yeet':case 'blush':case 'smile':case 'wave':case 'highfive':case 'handhold':case 'nom':case 'bite':case 'glomp':case 'slap':case 'kill':case 'happy':case 'wink':case 'poke':case 'dance':case 'cringe':
    if (resbot_.isBan) return reply(mess.ban)
    if (MinLimit(m.sender) === undefined) return;
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    
    try {   
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

        const apiUrl = `${global.apikey}/api/anime`;
        const params = {
            method: command,
            apikey: apikey.acak,
        };
        const aiResponse = await fetchDataFromApi(apiUrl, params);
        if (aiResponse) {
            return dikzzydev.sendMessage(m.chat, { image : { url : aiResponse }, caption: mess.success }, { quoted:qdoc })
        } else {
            return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
        }
    } catch(e) {
            return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
break


/* ________________「 HUSBANDO 」________________ */
case 'husbando':
    if (MinLimit(m.sender) === undefined) return;
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    try{
        let husbando = await getBuffer(`${global.apikey}/api/husbando?apikey=${apikey.acak}`)
        await dikzzydev.sendMessage(m.chat, {image: husbando, caption: mess.success }, {quoted: qdoc})

    } catch(e){
        await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
break


/* ________________「 ANIME RANDOM 」________________ */
case 'anime':
    if (MinLimit(m.sender) === undefined) return;
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    try{
        let anime_random = await getBuffer(`${global.apikey}/api/random_anime?apikey=${apikey.acak}`)
        await dikzzydev.sendMessage(m.chat, {image: anime_random, caption: mess.success }, {quoted: qdoc})

    } catch(e){
        await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
break





/* ===============| MENU BERITA |===================*/


/* ________________「 FAJAR 」________________ */
case 'fajar':
if (MinLimit(m.sender) === undefined) return;
if (resbot_.isBan) return reply(mess.ban)
FajarNews().then(async(res) => {
let no = 0;
teks_berita = "";
for (let i of res) {
no += 1;
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Jenis: ${i.berita_jenis}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += "";
return reply(teks_berita) 
})
break


/* ________________「 CNN 」________________ */
case 'cnn':
if (MinLimit(m.sender) === undefined) return;
if (resbot_.isBan) return reply(mess.ban)
CNNNews().then(res => {
let no = 0
teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
reply(teks_berita) 
})
break


/* ________________「 CNBC 」________________ */
case 'cnbc':
if (MinLimit(m.sender) === undefined) return;
if (resbot_.isBan) return reply(mess.ban)
CNBCNews().then(async(res) => {
let no = 0
teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
dikzzydev.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted:qdoc })
})
break

/* ________________「 TRIBUN 」________________ */
case 'tribun':
if (MinLimit(m.sender) === undefined) return;
if (resbot_.isBan) return reply(mess.ban)
TribunNews().then(async(res) => {
let no = 0
let teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Jenis: ${i.berita_jenis}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
dikzzydev.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted:qdoc })
})
break

/* ________________「 KOMPAS 」________________ */
case 'kompas':
if (MinLimit(m.sender) === undefined) return;
if (resbot_.isBan) return reply(mess.ban)
KompasNews().then(async(res) => {
let no = 0
let teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Jenis: ${i.berita_jenis}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
dikzzydev.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted:qdoc })
})
break

/* ________________「 DETIK 」________________ */
case 'detik':
if (MinLimit(m.sender) === undefined) return;
if (resbot_.isBan) return reply(mess.ban)
DetikNews().then(async(res) => {
let no = 0
let teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
dikzzydev.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted:qdoc })
})
break

/* ________________「 DAILY 」________________ */
case 'daily':
if (MinLimit(m.sender) === undefined) return;
if (resbot_.isBan) return reply(mess.ban)
DailyNews().then(async(res) => {
let no = 0
let teks_berita = ""
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ""
dikzzydev.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted:qdoc })
})
break

/* ________________「 INEWS 」________________ */
case 'inews':
if (MinLimit(m.sender) === undefined) return;
if (resbot_.isBan) return reply(mess.ban)
iNews().then(async(res) => {
let no = 0
let teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break

/* ________________「 ANTARA 」________________ */
case 'antara':
if (MinLimit(m.sender) === undefined) return;
if (resbot_.isBan) return reply(mess.ban)

try {

    const antara = await fetchJson(`${global.apikey}/api/news/antara?apikey=${apikey.acak}`);

if (antara.success) {


    

    let no = 0
    let teks = ""
    for (let i of antara.data.posts) {
    no += 1
    teks += `\n• ${no.toString()} •\n`
    teks += `Berita: ${i.title}\n`
    teks += `Upload: ${i.pubDate}\n`
    teks += `Link: ${i.link}\n`
    }
    teks += ""
   // reply(teks) 

    dikzzydev.sendMessage(m.chat, { image : { url : antara.data.image }, caption: teks }, { quoted:qdoc })



}

} catch(e){
    return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
}





break

/* ________________「 KONTAN 」________________ */
case 'kontan':
if (resbot_.isBan) return reply(mess.ban)
if (MinLimit(m.sender) === undefined) return;
KontanNews().then(async (res) => {
let teks = ""
let no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
dikzzydev.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:qdoc })
})
break

/* ________________「 JALANTIKUS 」________________ */
case 'jalantikus':
    if (MinLimit(m.sender) === undefined) return;
var reis = await JalanTikusMeme()
teks_berita = "";
teks_berita += "Jalan Tikus Meme\n\n"
teks_berita += `Source: ${reis}`
teks_berita += ""
dikzzydev.sendMessage(m.chat, { image : { url : reis }, caption: teks_berita }, { quoted:qdoc })

break








/* ===============| MENU INFO |===================*/

/* ________________「 OWNER 」________________ */
case 'owner': case 'crator': case 'creator':{
    if (db_owner.length === 0) {
        return reply('_Belum ada owner yang tersimpan dalam database_');
    }
const repf = await dikzzydev.sendMessage(from, { 
contacts: { 
displayName: `${db_owner}`, 
contacts: list }, contextInfo: {
forwardingScore: 7, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: qdoc })
dikzzydev.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Ini adalah nomor owner dari Furina Bot Ai kak 😊`, contextInfo:{
forwardingScore: 7, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break

/* ________________「 GRUBBOT 」________________ */
case 'groupbot':
case 'grupbot':
case 'grubbot': {
if (global.smg_chat[sender].chat.trim()) return
dikzzydev.sendText(from, `
[1] Sticker Whatsapp 
${config.grup}

[2] Official Grup ${config.resbot_version}
https://chat.whatsapp.com/JvuNbGf0ueh9ky59uLhAPd

`, m)
}
break

/* ________________「 TUTOR 」________________ */
case 'help':
case 'tutorial': {
if (global.smg_chat[sender].chat.trim()) return

const list_tutorial = `_Berikut Panduan Penggunaan Furina Bot Ai_

_*⭔ Tutorial Lengkap*_
Untuk tutorial Lengkap nya bisa kakak tanyakan ke owner nya 😊
https://wa.me/6281277811884

_*⭔ Tutorial Versi Textnya Kamu Bisa Ketik list di bawah*_

.carapakaibot
.caraceklimit`

reply(`👋🏻 Hai Kak ${pushname}, Selamat ${resbot_.salam}
    
${list_tutorial}`);
}
break


case 'carapakaibot': {

const gantisound = `_*⭔ Cara Menggunakan Furina Bot*_

_*⭔ Langkah 1*_
Ketik Lah *.menu* untuk membuka halaman utama dari Bot ini (Ingat harus menggunakan tanda titik pada awalnya)

_*⭔ Langkah 2*_
Setelah menemukan fitur yang ingin digunakan ketik tanda titik pada awalan dari text fitur nya.
Contoh : *.ai*

_*⭔ Langkah 3*_
Apabila ada perintah lanjutan dari Bot maka ikutilah. seperti *.ai (Isi pertanyaan atau kalimat kalian).
Contoh : *.ai Siapa presiden Indonesia sekarang ?*

*NOTE : Untuk pengguna fitur lainya juga sama intinya harus menggunakan tanda (.) pada awalan nya.*
_Semoga Mengerti_ 😼`;
reply(gantisound)

}
break



case 'caraceklimit': {

const gantifotomenu = `_*⭔ Cara Cek Limit*_

_*⭔ Langkah 1*_
Kalian Tinggal Mengetik .limit dan tunggu balasan dari bot dalam bentuk foto.

*NOTE : Limit adalah batasan yang diberikan dalam menggunakan bot. Jika limit kalian sudah habis maka kalian tidak dapat lagi menggunakan Bot.*
*Kalian bisa membeli Premium untuk limit yang tidak terbatas,silahakan menghubungi Owner untuk membeli Limit*`;
reply(gantifotomenu)

}
break



/* ===============| MENU INFO |===================*/

        
//-_-_-_-_-_-_-_-_-_-_-_-[AUTO RESPON FURINA]-_-&-&-_-_-_-_-_-_-_-
    case 'furina': case 'halo': {

    const gantisuperowner = `*Iya,ada yang bisa Furina bantu ? kalo masih bingung ketik .help aja*😋 👉👈`
            reply(gantisuperowner)
    
        }
        break;
      
        
/* ________________「 ADDVN 」________________ */
case 'addvn': {
if (!resbot_.isOwner) return reply(mess.owner);
if (!global.smg_chat[sender].chat) return reply('_❗ Nama audionya apa_');

const audioName = global.smg_chat[sender].chat.toLowerCase();
if (db_vn.includes(audioName)) return reply("_❗ Nama tersebut sudah di gunakan_");

try {
    const mediaData = await dikzzydev.downloadAndSaveMediaMessage(quoted);
    db_vn.push(audioName);

    const destinationPath = `./Storage/Audio/${audioName}.mp3`;
    await fsx.copy(mediaData, destinationPath);
    fs.writeFileSync('./Storage/db/vnadd.json', JSON.stringify(db_vn));
    fs.unlinkSync(mediaData);
    reply(`_✅ Sukses Menambahkan Audio_\n\n_Cek dengan cara *${prefix}listvn*_`);
} catch (error) {
    return reply(`_*Balas vn dengan addvn*_`);
}
}
break;

/* ________________「 INFOPREMIUM 」________________ */

case 'premium': 
    case 'infopremium': {
    const xd =fs.readFileSync("./App/lib/infopremium.js") 
    const caption = `${xd},`;

    const imageBuffer = fs.readFileSync('./App/src/media/prem.jpg');
    return dikzzydev.sendMessage(m.chat, { image: imageBuffer, caption: caption }, { quoted: qdoc });
    break;
}









/* ________________「 SENDVN 」________________ */
case 'sendvn': {
if (args.length < 1) return reply('_Masukan nama listvn_');
const q = args[0].toLowerCase();
if (!db_vn.includes(global.smg_chat[sender].chat)) return reply("_❗ Nama tersebut tidak ada di dalam database_");
try {
    const index = db_vn.indexOf(global.smg_chat[sender].chat);
    const namafilevn = db_vn[index];
    const buffer = fs.readFileSync(`./Storage/Audio/${namafilevn}.mp3`);
    sendvn(buffer);
} catch (error) {
    return reply(mess.gagal);
}
}
break;


/* ________________「 DELDVN 」________________ */
case 'delvn': {
if (!resbot_.isOwner) return reply(mess.owner);
if (args.length < 1) return reply('_Masukan nama listvn_');
const text = args[0].toLowerCase();

if (!db_vn.includes(text)) return reply("_❗ Nama tersebut tidak ada di dalam database_");
const index = db_vn.indexOf(text);
db_vn.splice(index, 1);
fs.writeFileSync('./Storage/db/vnadd.json', JSON.stringify(db_vn));
fs.unlinkSync(`./Storage/Audio/${text}.mp3`);

reply(`_✅ Sukses delete vn ${text}_`);
}
break;

/* ________________「 LISTVN 」________________ */
case 'listvn': {
if (resbot_.isBan) return reply(mess.ban);
if (db_vn.length === 0) return reply('_❗ Tidak ada list vn di database_');
let teksooo = '⭓「 *LIST VN* 」\n│\n';
for (let x of db_vn) {
teksooo += `⭔ ${x}\n`;
}
reply(teksooo);
}
break;

/* ________________「 ADDIMAGE 」________________ */
case 'addimage': {
if (!resbot_.isOwner) return reply(mess.owner);
if (args.length < 1) return reply('_❗ Nama gambarnya apa_');
if (!resbot_.isMedia)  return reply('_❗ Balas Gambar dengan addimage_');

const imageName = text.toLowerCase();
if (db_image.includes(imageName)) return reply("_❗ Nama tersebut sudah di gunakan_");


try {
const mediaData = await dikzzydev.downloadAndSaveMediaMessage(quoted);
db_image.push(imageName);
const destinationPath = `./Storage/Images/${imageName}.jpg`;
await fsx.copy(mediaData, destinationPath);

    fs.writeFileSync('./Storage/db/db_image.json', JSON.stringify(db_image));
    fs.unlinkSync(mediaData);
    
    reply(`_✅ Sukses Menambahkan Image_\n\n_Cek dengan cara *${prefix}listimage*_`);
} catch (error) {
    console.log(`${chalk.redBright('['+jammenit+']')} ${chalk.redBright.bold('Error : '+command )}`)
    return reply(`_*Balas Gambar dengan addimage*_`);
}
}
break;

/* ________________「 SENDMAGE 」________________ */
case 'sendimage': {
  if (args.length < 1) return reply('_Masukan nama imagenya yang ada di *.listimage*_');
const q = args[0].toLowerCase();
if (!db_image.includes(global.smg_chat[sender].chat)) return reply("_❗ Nama tersebut tidak ada di dalam database_");
try {
    const index = db_image.indexOf(global.smg_chat[sender].chat);
    const namafilevn = db_image[index];
    const buffer = fs.readFileSync(`./Storage/Images/${namafilevn}.jpg`);
    dikzzydev.sendMessage(from, { image: buffer, caption: mess.success }, { quoted: qdoc });
} catch (error) {
    console.log(`${chalk.redBright('['+jammenit+']')} ${chalk.redBright.bold('Error : '+command )}`)
    return reply(mess.gagal);
}
}
break;

/* ________________「 LISTMAGE 」________________ */
case 'listimage': {
if (resbot_.isBan) return reply(mess.ban);

if (db_image.length === 0) return reply('_❗ Tidak ada list image di database_');
  let teksooo = '⭓「 *LIST IMAGE* 」\n│\n';
for (let x of db_image) {
    teksooo += `⭔ ${x}\n`;
}
reply(teksooo);
}
break;

/* ________________「 DELMAGE 」________________ */
case 'delimage': {
if (!resbot_.isOwner) return reply(mess.owner);
if (args.length < 1) return reply('_Masukan nama imagenya_');
const text = args[0].toLowerCase();
if (!db_image.includes(text)) return reply("_❗ Nama tersebut tidak ada di dalam database_");
const index = db_image.indexOf(text);
db_image.splice(index, 1);
fs.writeFileSync('./Storage/db/db_image.json', JSON.stringify(db_image));
fs.unlinkSync(`./Storage/Images/${text}.jpg`);
reply(`_✅ Sukses delete Image ${text}_`);
}
break;

/* ________________「 ADDSTICKER 」________________ */
case 'addsticker':
case 'addstiker': {
if (!resbot_.isPremium) return reply(mess.premium)
if (args.length < 1) return reply('_❗ Nama stickernya apa_');
if (!resbot_.isMedia)  return reply('_❗ Balas Sticker dengan .addsticker_');
const stickerName = global.smg_chat[sender].chat.trim().toLowerCase();
if (db_sticker.includes(stickerName)) return reply("_❗ Nama tersebut sudah di gunakan_");
try {
    const mediaData = await dikzzydev.downloadAndSaveMediaMessage(quoted);
    db_sticker.push(stickerName);
    const destinationPath = `./Storage/Sticker/${stickerName}.gif`;
    await fsx.copy(mediaData, destinationPath);
    fs.writeFileSync('./Storage/db/db_sticker.json', JSON.stringify(db_sticker));
    fs.unlinkSync(mediaData);

    reply(`_✅ Sukses Menambahkan Sticker_\n\n_Cek dengan cara *${prefix}liststicker*_`);
} catch (error) {
    console.log(`${chalk.redBright('['+jammenit+']')} ${chalk.redBright.bold('Error : '+command )}`)
    return reply(`_*Balas Gambar dengan .addsticker*_`);
}
}
break;


/* ________________「 SENDSTICKER 」________________ */
case 'sendsticker': {
if (args.length < 1) return reply('_Masukan nama liststicker_');
const text_sendsticker = global.smg_chat[sender].chat.trim().toLowerCase();
  if (!db_sticker.includes(text_sendsticker)) return reply(`_❗ Nama *${text_sendsticker}* tidak ada di dalam database_`);
try {
    const index = db_sticker.indexOf(text_sendsticker);
    const namafilevn = db_sticker[index];
    const buffer = fs.readFileSync(`./Storage/Sticker/${namafilevn}.gif`);
    await dikzzydev.sendImageAsSticker(from, buffer, m, { packname: config.packname, author: config.author });
} catch (error) {
    console.log(`${chalk.redBright('['+jammenit+']')} ${chalk.redBright.bold('Error : '+command )}`)
    return reply(mess.gagal);
}
}
break;


/* ________________「 LISTSTICKER 」________________ */
case 'liststicker': {
if (resbot_.isBan) return reply(mess.ban);

if (db_sticker.length === 0) return reply('_❗ Tidak ada list sticker di database_');
  let teksooo = '⭓「 *LIST STICKER* 」\n│\n';
for (let x of db_sticker) {
    teksooo += `⭔ ${x}\n`;
}
reply(teksooo);
}
break;


/* ________________「 DELSTICKER 」________________ */
case 'delsticker': {
if (!resbot_.isOwner) return reply(mess.owner);
if (args.length < 1) return reply('_Masukan nama sticker_');
const text_delsticker = global.smg_chat[sender].chat.trim().toLowerCase();
if (!db_sticker.includes(text_delsticker)) return reply("_❗ Nama tersebut tidak ada di dalam database_");
const index = db_sticker.indexOf(text_delsticker);
db_sticker.splice(index, 1);
fs.writeFileSync('./Storage/db/db_sticker.json', JSON.stringify(db_sticker));
fs.unlinkSync(`./Storage/Sticker/${text_delsticker}.gif`);
reply(`_✅ Sukses delete Sticker ${text_delsticker}_`);
}
break;



/* ________________「 DELLIST 」________________ */
case 'dellist':
if (!resbot_.isAdmins) return reply(mess.admin)
if (!global.smg_chat[sender].chat) return reply('_Contoh: *dellist canva*_')
const indexToRemove = db_userlist[from].findIndex(data => data.keyword.trim().toLowerCase() === global.smg_chat[sender].chat.trim().toLowerCase());
if (indexToRemove !== -1) {
        const videoPath = `./Storage/video/${db_userlist[from][indexToRemove].keyword}.mp4`;
        const stickerPath = `./Storage/Sticker/${db_userlist[from][indexToRemove].keyword}.gif`;
        try{fs.unlinkSync(videoPath)}catch(c){}try{fs.unlinkSync(stickerPath)}catch(c){}
        db_userlist[from].splice(indexToRemove, 1);
        fs.writeFileSync('./Storage/db/userlist.json', JSON.stringify(db_userlist))
       return reply(`Item dengan keyword *${global.smg_chat[sender].chat}* berhasil dihapus.`);
    } else {
       return reply(`keyword *${global.smg_chat[sender].chat}* tidak ditemukan.`);
    }
break

/* ________________「 LIST 」________________ */
case 'list':
    if (resbot_.isBan) return reply(mess.ban);
    if (db_userlist[from] && db_userlist[from].length > 0) {
        const listItems = db_userlist[from]
    .sort((a, b) => a.keyword.localeCompare(b.keyword))  // Mengurutkan berdasarkan abjad keyword
    .map((data, index) => `${awalanItem} ${data.keyword}`)
    .join('\n');
        let daftar_list = template_list.replace('{LIST_ITEMS}', listItems);
        daftar_list     = daftar_list.replace('{USER}', pushname);
        daftar_list     = daftar_list.replace('{WAKTU}', jammenit);
        daftar_list     = daftar_list.replace('{TANGGAL}', hariini);
        daftar_list     = daftar_list.replace('{UCAPAN}', ucapanWaktu);
        daftar_list     = daftar_list.replace('{GRUBNAME}', groupMetadata.subject);
        daftar_list     = daftar_list.replace('{USERTAG}', `@${sender.split("@")[0]}`);

        try {
            const UserTagList = groupMetadata.participants.filter(item2 => sender === item2.id);
            dikzzydev.sendMessage(from, { text: daftar_list, mentions: UserTagList.map(a => a.id) }, { quoted: qdoc });
        } catch(e){
            console.log(e)
        }

        
    } else {
        return reply('_Tidak Ada List Di Grup Ini, silakan ketik *addlist* untuk membuat baru_\n\n_Hanya *admin* yang dapat menambah / menghapus list_');
    }
    break;




/* ________________「 ADDLIST 」________________ */
case 'addlist':
    if (!resbot_.isAdmins) return reply(mess.admin)

    if (!global.smg_chat[sender].chat) return reply('_Masukkan Perintah dan Pesannya_\n\nContoh : addlist Spotify Premium | berikut adalah list Spotify Premium... \n\n_Apabila ingin menambah list dan gambar silakan kirim/reply gambarnya dengan caption *addlist*_')

    let [keyword_addlist, text_addlist] = global.smg_chat[sender].chat.split(`|`)
    if (!keyword_addlist || !text_addlist) return reply('_Masukkan Perintah dan Pesannya_ \n\nContoh : addlist Diamond ML | berikut adalah list Diamond ML...')
    let firstPipeIndex = global.smg_chat[sender].chat.trim().indexOf('|');
    let text_addlist2 = firstPipeIndex !== -1 ? global.smg_chat[sender].chat.trim().slice(firstPipeIndex + 1).trim() : global.smg_chat[sender].chat.trim();
    
    let url_addlist = ''
    if (isImage) {
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        let media_addlist = await dikzzydev.downloadAndSaveMediaMessage(quoted_)
        const response = await uploadFileToApi(media_addlist, "6months");
        url_addlist   = response.fileUrl;
            
    }else if(isVideo){

        const mediaData = await dikzzydev.downloadAndSaveMediaMessage(quoted_);

        const destinationPath = `./Storage/video/${keyword_addlist.trim()}.mp4`;
        await fsx.copy(mediaData, destinationPath);
        
        fs.unlinkSync(mediaData);
        url_addlist = `./Storage/video/${keyword_addlist.trim()}.mp4`

    }else if(isAudio){

        const mediaData = await dikzzydev.downloadAndSaveMediaMessage(quoted_);

        const destinationPath = `./Storage/audio/${keyword_addlist.trim()}.mp3`;
        await fsx.copy(mediaData, destinationPath);
        
        fs.unlinkSync(mediaData);
        url_addlist = `./Storage/audio/${keyword_addlist.trim()}.mp3`

    }else if(isSticker){
        const mediaData = await dikzzydev.downloadAndSaveMediaMessage(quoted_);
        const destinationPath = `./Storage/Sticker/${keyword_addlist.trim()}.gif`;
        await fsx.copy(mediaData, destinationPath);
        fs.unlinkSync(mediaData);
        url_addlist = `./Storage/Sticker/${keyword_addlist.trim()}.gif`
    }else{
        url_addlist = '-'
    }


if (!db_userlist[from]) {
    db_userlist[from] = [{ keyword: keyword_addlist.toLowerCase().trim(), text: text_addlist2, url: url_addlist}];
    
    fs.writeFileSync('./Storage/db/userlist.json', JSON.stringify(db_userlist))

    return reply(`${keyword_addlist} Sudah di tambahkan ke daftar list

_Ketik list untuk melihat daftar list_`)

}else{
    const existingDataIndex = db_userlist[from].findIndex(item => item.keyword.toLowerCase() === keyword_addlist.toLowerCase());
    if (existingDataIndex !== -1) {
         return reply(`_Gagal_\n\n_Kata Kunci *${keyword_addlist.trim()}* Sudah Ada Pada Daftar List_`)
        //db_userlist[from][existingDataIndex] = { keyword: keyword_addlist.toLowerCase(), text: text_addlist2,url: url_addlist };
    } else {
        db_userlist[from].push({ keyword: keyword_addlist.toLowerCase().trim(), text: text_addlist2,url: url_addlist });
    } 
fs.writeFileSync('./Storage/db/userlist.json', JSON.stringify(db_userlist));
return reply(`*List sudah di tambahkan* _Ketik list untuk melihat daftar *.list*_`)
}
break

/* ________________「 UPDATELIST 」________________ */
case 'updatelist':
    if (!resbot_.isAdmins) return reply(mess.admin)

    if (!global.smg_chat[sender].chat) return reply('_Masukkan Perintah dan Pesannya_\n\nContoh : updatelist canva | berikut adalah list canva ... \n\n_Apabila ingin mengubah gambar list silakan kirim/reply gambarnya dengan caption *updatelist*_')
    let [keyword_updatelist, text_updatelist] = global.smg_chat[sender].chat.split(`|`)
    if (!keyword_updatelist || !text_updatelist) return reply('_Masukkan Perintah dan Pesannya_ \n\nContoh : updatelist canva | berikut adalah list canva ...')

    keyword_updatelist = keyword_updatelist.trim();
    let firstPipeIndex_upadtelist = global.smg_chat[sender].chat.indexOf('|');
    let text_updatelist2 = firstPipeIndex_upadtelist !== -1 ? global.smg_chat[sender].chat.slice(firstPipeIndex_upadtelist + 1).trim() : global.smg_chat[sender].chat.trim();

    let url_updatelist = ''
    if (isImage) {
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        let media_updatelist = await dikzzydev.downloadAndSaveMediaMessage(quoted_)
        const response = await uploadFileToApi(media_updatelist, "6months");
        url_updatelist   = response.fileUrl;
            
    }else if(isVideo){

        const mediaData = await dikzzydev.downloadAndSaveMediaMessage(quoted_);

        const destinationPath = `./Storage/video/${keyword_updatelist.trim()}.mp4`;
        await fsx.copy(mediaData, destinationPath);
        
        fs.unlinkSync(mediaData);
        url_updatelist = `./Storage/video/${keyword_updatelist.trim()}.mp4`

    }else if(isSticker){

        const mediaData = await dikzzydev.downloadAndSaveMediaMessage(quoted_);

        const destinationPath = `./Storage/Sticker/${keyword_updatelist.trim()}.gif`;
        await fsx.copy(mediaData, destinationPath);
        
        fs.unlinkSync(mediaData);
        url_updatelist = `./Storage/Sticker/${keyword_updatelist.trim()}.gif`

    }else{
        url_updatelist = '-'
    }


if (!db_userlist[from]) {
    db_userlist[from] = [{ keyword: keyword_updatelist.toLowerCase().trim(), text: text_updatelist2, url: url_updatelist}];
    
    fs.writeFileSync('./Storage/db/userlist.json', JSON.stringify(db_userlist))

    return reply(`List sudah di tambahkan 

Ketik list untuk melihat daftar list`)

}else{
    const existingDataIndex = db_userlist[from].findIndex(item => item.keyword.toLowerCase() === keyword_updatelist.toLowerCase());

    if (existingDataIndex !== -1) {

        db_userlist[from][existingDataIndex] = { keyword: keyword_updatelist.toLowerCase().trim(), text: text_updatelist2,url: url_updatelist };
    }else {
           return reply(`_Tidak ada *${keyword_updatelist}* Pada daftar list_`)
    } 
fs.writeFileSync('./Storage/db/userlist.json', JSON.stringify(db_userlist));
return reply(`_Updatelist Berhasil_`)
}
break

/* ________________「 RENAMELIST 」________________ */
case 'renamelist':
    if (!resbot_.isAdmins) return reply(mess.admin)
    if (!global.smg_chat[sender].chat) return reply('_Contoh Penggunaan_ \n\n_.renamelist lama | baru_')
    let [key_updatelist, text_updatelist_update] = global.smg_chat[sender].chat.split(`|`)
    if (!key_updatelist || !text_updatelist_update) return reply('_Contoh Penggunaan_ \n\n_.renamelist lama | baru_')

    key_updatelist = key_updatelist.toLowerCase().trim();

    let firstPipeIndex_upadtelist_updatekey = global.smg_chat[sender].chat.indexOf('|');
    let text_updatelist_new = firstPipeIndex_upadtelist_updatekey !== -1 ? global.smg_chat[sender].chat.slice(firstPipeIndex_upadtelist_updatekey + 1).trim() : global.smg_chat[sender].chat.trim();

    const existingDataIndex = db_userlist[from].findIndex(item => item.keyword.toLowerCase().trim() === key_updatelist.toLowerCase().trim());



    const existingDataIndex_renamelist = db_userlist[from].findIndex(item => item.keyword.toLowerCase().trim() === text_updatelist_update.toLowerCase().trim());

    if (existingDataIndex_renamelist !== -1) {

       return reply(`_Gagal, Kata Kunci *${ text_updatelist_update.toLowerCase().trim()}* Sudah ada sebelumnya_`)
        
    }
    if (existingDataIndex !== -1) {

    db_userlist[from][existingDataIndex].keyword = text_updatelist_update.toLowerCase().trim();

    } else {
           return reply(`_Tidak ada *${key_updatelist.toLowerCase().trim()}* Pada daftar list_`)
    } 


fs.writeFileSync('./Storage/db/userlist.json', JSON.stringify(db_userlist));

return reply(`_Rename list dari *${key_updatelist.toLowerCase().trim()}* ke *${text_updatelist_update.toLowerCase().trim()}* Berhasil_`)



break








/* ===============| MENU DOWNLOAD |===================*/



/* ________________「 SPOTIFY 」________________ */
case 'spotify': {
    const chatMessage = global.smg_chat[sender]?.chat;
    if (!chatMessage) return reply(`_Contoh: *${prefix + command} terbang bersamaku*_`);
    if (MinLimit(m.sender) === undefined) return;


    let url_default;
    try {
    await dikzzydev.sendMessage(from, { react: { text: "⏳", key: m.key } });
        const resSpotify = await fetchJson(`${global.apikey}/api/search/spotify?text=${chatMessage}&apikey=${apikey.acak}`);
        if (!resSpotify.data || resSpotify.data.length === 0) return reply(`Tidak dapat menemukan lagu di Spotify.`);
        url_default = resSpotify.data[0].preview;
        
        const dSpotify = await fetchJson(`${global.apikey}/api/downloader/spotify?url=${resSpotify.data[0].url}&apikey=${apikey.acak}`);

const stringList = `
Title   : ${dSpotify.data && dSpotify.data.song ? dSpotify.data.song : 'Unknown'}
Artist  : ${dSpotify.data && dSpotify.data.artist ? dSpotify.data.artist : 'Unknown'}
Album   : ${dSpotify.data && dSpotify.data.album_name ? dSpotify.data.album_name : 'Unknown'}
Release : ${dSpotify.data && dSpotify.data.release_date ? dSpotify.data.release_date : 'Unknown'}
`;
const urldownload_spotify = `${dSpotify.data.url}`
const formattedStringList = '```' + stringList + '```';
await dikzzydev.sendMessage(m.chat, {
    audio: { url : urldownload_spotify},
    mimetype: 'audio/mp4',
    contextInfo: {
        externalAdReply: {
            showAdAttribution: true,
            title: dSpotify.data && dSpotify.data.song ? dSpotify.data.song : 'Unknown',
            body: stringList,
            thumbnailUrl: dSpotify.data.cover_url,
            sourceUrl: dSpotify.data.cover_url,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, { quoted:qdoc });
    } catch (error) {
        await dikzzydev.sendMessage(m.chat, { audio: {url : url_default}, mimetype: 'audio/mp4'})

        //await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
    break;

/* ________________「 LIRIK 」________________ */
case 'lirik': {
    const chatMessage = global.smg_chat[sender]?.chat;
    try {
    if (!chatMessage) return reply(`_Contoh : *${prefix + command}* matahariku_`)
    if (MinLimit(m.sender) === undefined) return;
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        // Lakukan pencarian lirik
        let getLirik = await fetchJson(`${global.apikey}/api/search/lyrics?apikey=${apikey.acak}&text=${chatMessage}`)

        // https://api.autoresbot.com/api/search/lyrics?apikey=APIKEY_GRATIS&text=matahariku

        // Periksa apakah lirik ditemukan
        if (getLirik && getLirik.data.title && getLirik.data.lyrics) {
            // text , await reply(`_*${getLirik.data.title}*_\n\n${getLirik.data.lyrics}`)
            const data_lirik = `_*Artist : ${getLirik.data.artist}*_\n\n_*Title : ${getLirik.data.title}*_\n\n${getLirik.data.lyrics}`
            
            await dikzzydev.sendMessage(m.chat, { image: {url : getLirik.data.image}, caption: data_lirik }, { quoted: qdoc });


        } else {
            // Tidak ada hasil lirik ditemukan
            await reply(`_Maaf, lirik *${chatMessage}* tidak ditemukan._`)
        }
    } catch (error) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break


/* ________________「 KBBI 」________________ */
case 'kbbi': {
    const chatMessage = global.smg_chat[sender]?.chat;
    if (!chatMessage) return reply(`Masukkan Query Contoh ${prefix + command} bumi`)
    if (MinLimit(m.sender) === undefined) return;
    try{
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        let getKbbi = await fetchJson(`${global.apikey}/api/information/kbbi?apikey=${apikey.acak}&text=${chatMessage}`)
        await reply(`${getKbbi.data.lema}

${getKbbi.data.arti}`)
    } catch (error){
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break




/* ________________「 YTS 」________________ */
case 'yts': case 'ytsearch': {
    const chatMessage = global.smg_chat[sender]?.chat;
    if (!chatMessage) return reply(`Contoh:  ${prefix + command} video ngakak`)
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    let search = await yts(chatMessage)
    if (MinLimit(m.sender) === undefined) return;
    let teks = '*YouTube Search*\n\n Result From '+chatMessage+'\n\n'
    let no = 1
    for (let i of search.all) {
    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
    }
    dikzzydev.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: qdoc })
    }
break


/* ________________「 YTMP3 」________________ */
case 'ytmp3': case 'youtubemp3': {
    const chatMessage = global.smg_chat[sender]?.chat;

    if (!chatMessage) return reply(`${mess.urlnotvalid} \n\nContoh: ${prefix + command} Linknya`)
    if (!isURL(chatMessage)) return reply(mess.urlnotvalid)
    if (MinLimit(m.sender) === undefined) return;
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

    let search = await yts(chatMessage)  
    let hasil_search_andplay = search.all.find(item => item.url === chatMessage)?.url;
    let first_playvideo = search.all[0];
    if (first_playvideo) {
            if (first_playvideo.seconds > 3600) {
                return reply('_Maaf Audio Terlalu Besar, Tidak Dapat Di Kirim Di Whatsapp_')
            }
    }
try {
    const response = await fetchJson(`${global.apikey}/api/downloader/ytplay?apikey=${apikey.acak}&url=${chatMessage}`);

    if (response && response.status) {

            if(response.bytes > 104857600){
                return reply(`*File Terlalu Besar silakan download disini*\n\n${response.url}`)
            }

            await dikzzydev.sendMessage(m.chat, {
                audio: {url : response.url},
                mimetype: "audio/mp4",
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: first_playvideo?.title || "Untitled",
                        body: config.resbot_version,
                        sourceUrl: chatMessage,
                        thumbnailUrl: first_playvideo?.thumbnail || "https://telegra.ph/file/12f0b1ed516a99906743f.png",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: qdoc });
        } else {
            return await dikzzydev.sendMessage(from, { react: { text: "❗", key: m.key } });
        }
} catch(error){
    return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
}
}
break


/* ________________「 TIKTOK 」________________ */
case 'tiktok':
case 'tt':
case 'tiktokmp4': {
    const chatMessage = global.smg_chat[sender]?.chat;
if (!chatMessage) return reply(`_Contoh: *${prefix + command}* Masukkan Linknya_`)
if (!isURL(chatMessage)) return reply(mess.urlnotvalid)
if (MinLimit(m.sender) === undefined) return;
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    try {
    let commandExecuted = false;
    let res = await tiktok2(`${chatMessage}`)
    if (res) {
    if (!commandExecuted) {
        await dikzzydev.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: res.title })
        commandExecuted = true
        }
    }else {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }

    } catch(e){
        console.log(e)
    }
}
break

case 'tiktok2':
case 'tt2':
case 'tiktokmp42': {
    if (!global.smg_chat[sender].chat) return reply(`_Contoh: *${prefix + command}* Masukkan Linknya_`)
    if (!isURL(global.smg_chat[sender].chat)) return reply(mess.urlnotvalid)

    if (MinLimit(m.sender) === undefined) return;
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

    try {
    let commandExecuted = false;
    let res = await fetchJson(`${global.apikey}/api/downloader/tiktok?apikey=${apikey.acak}&url=${global.smg_chat[sender].chat}`)
    if (res) {
        if (!commandExecuted) {
        dikzzydev.sendMessage(m.chat, { video: { url: res.data }, caption: res.title })
        commandExecuted = true
        }
    }else {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
    } catch(e){
        console.log(e)
    }
}
break


/* ________________「 TIKTOKSEARCH 」________________ */
case 'tiktokht':
case 'tthastag':
case 'tiktoksearch':
case 'ttsearch': {
    const chatMessage = global.smg_chat[sender]?.chat;
    if (!chatMessage) return reply(`Contoh: ${prefix + command} viral`)
    if (MinLimit(m.sender) === undefined) return;
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    try {
        let res = await tiktoks(chatMessage)

        dikzzydev.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: res.title, mimetype: 'video/mp4' })
    } catch (e) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break

/* ________________「 TTIKTOKSLIDE 」________________ */
case 'ttslide':
case 'tiktokslide': {
    const chatMessage = global.smg_chat[sender]?.chat;
    if (!chatMessage || !chatMessage.includes('tiktok')) {
        return reply(`Contoh: \n\n${prefix + command} https://vt.tiktok.com/ZSFka65gt/`);
    }
    const xcvvb = MinLimit(m.sender)
    if (xcvvb === undefined) return;
    try {
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        const limit = Math.min(parseInt(args[0]) || 4, 4); // Pastikan limit tidak lebih dari 5
        const ttslide_result = await ttslide(chatMessage);
        for (let i = 0; i < Math.min(ttslide_result[0].imgSrc.length, limit); i++) {
            await dikzzydev.sendMessage(m.chat, { image: { url: ttslide_result[0].imgSrc[i] } });
        }
    } catch (e) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
    break;
}

/* ________________「 TTIKTOKMP3 」________________ */
case 'tiktokmp3':
case 'ttmp3': {
 if (!resbot_.isPremium) return reply(mess.premium)
       const chatMessage = global.smg_chat[sender]?.chat;
        if (!chatMessage) return reply(`Contoh: ${prefix + command} Masukkan Link nya`)
        if (MinLimit(m.sender) === undefined) return;
        await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        try {
            let res = await tiktok2(`${chatMessage}`)
                await dikzzydev.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
                } catch (e) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break

/* ________________「 INSTAGRAM 」________________ */
case 'instagram':
case 'ig':
case 'igdl':{
    const chatMessage = global.smg_chat[sender]?.chat;
    if (!chatMessage) return reply("Masukkan Linknya ?");
    if (!isURL(chatMessage)) return reply("Masukkan Linknya ?");
    if (MinLimit(m.sender) === undefined) return
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    const mediaUrl = await igDownloader(chatMessage);
    const url_media = mediaUrl[0].url;
    try {
        const response = await axios.head(url_media); 
        const contentType = response.headers['content-type']; // Mendapatkan tipe konten dari header
        if (contentType.startsWith('image/')) {
            await dikzzydev.sendMessage(m.chat, { image: { url: url_media}, caption: mess.success }, { quoted: qdoc });
            return
        } else {
            await dikzzydev.sendMessage(m.chat, { video: { url: url_media}, caption: mess.success }, { quoted: qdoc });
            return 
        }
    } catch(e) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break;

/*__________________{tes tes}_______________*/
 //       case "apkmod": {
  //  if (!text) return m.reply("Masukkan nama aplikasi yang ingin dicari"); // Ganti dengan pesan yang lebih informatif

//    await dikzzydev.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

 //   try {
  //      const response = await fetchJson(`https://aemt.uk.to/happymod?query=${text}`);
   //     const results = response.result;

 //       if (results.length === 0) {
//            return m.reply("Aplikasi tidak ditemukan");
  //      }

  //      let message = "Hasil pencarian untuk *"+text+"*:\n";
    //    results.forEach(result => {
   //         message += `\n*Nama Apk:* ${result.title}\n*Rating:* ${result.rating}\n*Link Download:* ${result.link}\n`;
    //    });

    //    m.reply(message);
   // } catch (error) {
    //    console.error(error);
    //    m.reply("Terjadi kesalahan saat mengambil data");
   // } finally {
     //   await dikzzydev.sendMessage(m.chat, { react: { text: '', key: m.key } });
   // }
   // break;
   //     }
        
/* ________________「 FB 」________________ */
case 'tw':
case 'twitter': {
    const chatMessage = global.smg_chat[sender]?.chat;
    if (!chatMessage) return reply(mess.notlink)
    if (MinLimit(m.sender) === undefined) return;
    try {
        await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        let res = await fetchJson(`${global.apikey}/api/downloader/twitter?apikey=${apikey.acak}&url=${chatMessage}`)
        if (res && res.data.media) {
            await dikzzydev.sendMessage(m.chat, { video: { url: res.data.media[0].url }, caption: res.data.title , mimetype: 'video/mp4' })
        }else {
            return reply(res.message)
        }
    } catch(e) {
    return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break;




/* ________________「 FB 」________________ */
case 'fb':
case 'facebook':{
    const chatMessage = global.smg_chat[sender]?.chat;
    if (!chatMessage) return reply(mess.notlink)
    if (MinLimit(m.sender) === undefined) return;
    try {
        await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        let res = await fetchJson(`${global.apikey}/api/downloader/facebook?apikey=${apikey.acak}&url=${chatMessage}`)
    if (res) {
        await dikzzydev.sendMessage(m.chat, { video: { url: res.data[0] }, mimetype: 'video/mp4' })
    }
    } catch(e) {
    return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break;



/* ________________「 PLAY 」________________ */
case 'play' : {


const chatMessage = global.smg_chat[sender]?.chat;
    if (!chatMessage) {
        return reply(`_Gunakan perintah dengan format_ *.play kangen band - terbang bersamaku*`);
    }
    if (MinLimit(m.sender) === undefined) return;

    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

    try {
        const search = await yts(chatMessage);
        const firstVideo = search.all.find(item => item.type === 'video') || search.all[0];

        if (firstVideo?.seconds > 3600) {
            return reply('_Maaf File Terlalu Besar, Tidak Dapat Di Kirim Di Whatsapp_');
        }

        const response = await fetchJson(`${global.apikey}/api/downloader/ytplay?apikey=${apikey.acak}&url=${firstVideo.url}`);
        if (response && response.status) {

            if(response.bytes > 104857600){
                return reply(`*File Terlalu Besar silakan download disini*\n\n${response.url}`)
            }

            await dikzzydev.sendMessage(m.chat, {
                audio: {url : response.url},
                mimetype: "audio/mp4",
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: firstVideo.title || "Untitled",
                        body: config.resbot_version,
                        sourceUrl: firstVideo.url,
                        thumbnailUrl: firstVideo.thumbnail || "https://example.com/default_thumbnail.jpg",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: qdoc });
        } else {
            return await dikzzydev.sendMessage(from, { react: { text: "❗", key: m.key } });
        }
    } catch (e) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }

    break;
}





/* ________________「 YTMP4 」________________ */
case 'ytmp4': {
    const chatMessage = global.smg_chat[sender]?.chat;

    if (!chatMessage) return reply(`${mess.urlnotvalid} \n\nContoh: ${prefix + command} Linknya`)
    if (!isURL(chatMessage)) return reply(mess.urlnotvalid)
    if (MinLimit(m.sender) === undefined) return;
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    let search = await yts(chatMessage)  
    let first_playvideo = search.all[0];

    if (first_playvideo && first_playvideo.seconds > 3600) {
        return reply('_Maaf Video Terlalu Besar, Tidak Dapat Di Kirim Di Whatsapp_')
    }
    try { 

        const response = await fetchJson(`${global.apikey}/api/downloader/ytplay?apikey=${apikey.acak}&url=${chatMessage.trim()}&format=mp4`);
        if (response && response.status) {

            if(response.bytes > 104857600){
                return reply(`*File Terlalu Besar silakan download disini*\n\n${response.url}`)
            }else {
                return await dikzzydev.sendMessage(m.chat, { video: {url : response.url}, caption: mess.success })
            }
        } else {
            return await dikzzydev.sendMessage(from, { react: { text: "❗", key: m.key } });
        }
    } catch(e) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break

/* ________________「 PIN 」________________ */
case 'pin':
case 'pinterest': {
    
    
    const chatMessage = global.smg_chat[sender]?.chat;
  if (!chatMessage) return reply('_Contoh: *.pin kucing*_');
if (resbot_.isBan) return reply(mess.ban);
if (MinLimit(m.sender) === undefined) return;
try {
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    let pinterest_result = await fetchJson(`${global.apikey}/api/search/pinterest?text=${chatMessage}&apikey=${apikey.acak}`);

    if ( pinterest_result.data) {
        dikzzydev.sendMessage(from, { image: { url: pinterest_result.data }, caption: mess.success }, { quoted: qdoc });
    }else {
        throw new Error("ERROR");
    }
} catch (error) {
    await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
}
break;
}

/* ________________「 GOOGLE 」________________ */
case 'google': {
    const chatMessage = global.smg_chat[sender]?.chat;
    if (resbot_.isBan) return reply(mess.ban)
    if (!chatMessage) return reply(`Contoh:  ${prefix + command} Furina`)
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    let google = require('google-it')
    google({'query': chatMessage}).then(res => {
    let teks = `Google Search From : ${chatMessage}\n\n`
    for (let g of res) {
    teks += `⭔ *Title* : ${g.title}\n`
    teks += `⭔ *Description* : ${g.snippet}\n`
    teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
    } 
    reply(teks)
    })
}
break

/* ________________「 IGSTALK 」________________ */
case 'igstalk':{
    const chatMessage = global.smg_chat[sender]?.chat;
    if (resbot_.isBan) return reply(mess.ban)
    if (!chatMessage) return reply(`Contoh: ${prefix + command} stef_pubg`)
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    axios.get(`${global.apikey}/stalk/tiktok?apikey=${apikey.acak}&query=${chatMessage}`).then(({ data }) => {
    var caption = `Username : ${data.messages.data.username}\n`
    caption += `Nickname : ${data.messages.data.name}\n`
    caption += `Followers : ${data.messages.data.followers}\n`
    caption += `Followings : ${data.messages.data.following}\n`
    caption += `Likes : ${data.messages.data.likes}\n`
    caption += `Bio : ${data.messages.data.bio}\n`
    dikzzydev.sendMessage(from, { image: { url: data.messages.data.profile }, caption })
    })
}
break

/* ________________「 STALCKTIKTOK 」________________ */
case 'stalktiktok': {
    const chatMessage = global.smg_chat[sender]?.chat;
    if (resbot_.isBan) return reply(mess.ban)
    if (!chatMessage) return reply(`Contoh: ${prefix + command} kompascom`)
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    try {
    let result_stalktiktok = await fetchJson(`${global.apikey}/api/stalker/tiktok?apikey=${apikey.acak}&username=${chatMessage}`)
    
    var caption = `Username : ${result_stalktiktok.data.username}\n`
    caption += `Nickname : ${result_stalktiktok.data.name}\n`
    caption += `Followers : ${result_stalktiktok.data.followers}\n`
    caption += `Followings : ${result_stalktiktok.data.following}\n`
    caption += `Likes : ${result_stalktiktok.data.likes}\n`
    caption += `Bio : ${result_stalktiktok.data.bio}\n`
    reply(caption)
    
    } catch(e){
        await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break


/* ________________「 SHIO 」________________ */
case 'shio': {
if (resbot_.isBan) return reply(mess.ban)
if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
    if (db_shio[q]) {
        reply(db_shio[q])
    }else{
        reply('gak ada')
    }
}
break


/* ===============| MENU GAME |===================*/

/* ________________「 STAND / HIT / BJ 」________________ */
case 'stand':
    if (!global.blackjack[sender]) {
        return reply('Tidak ada permainan blackjack, silakan ketik *blackjack* untuk memulai permainan')
    }
    let stand_userkartu = global.blackjack[sender].userkartu
    let stand_compkartu = global.blackjack[sender].comp_kartu
    let stand_totaluser = getNilaiKartu_Blackjack(stand_userkartu)
    let stand_totalcomp = getNilaiKartu_Blackjack(stand_compkartu)
    if (stand_totaluser > stand_totalcomp) {
    let money_menang = global.blackjack[sender].taruhan * 2
    db_usermoney[sender].money = parseInt(db_usermoney[sender].money) + money_menang
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney))
    reply(`*KAMU MENANG*

Kartu Kamu : ${stand_userkartu.join(', ')}
Total : ${stand_totaluser}

Kartu Komputer : ${stand_compkartu.join(', ')}
Total : *${stand_totalcomp}*

Anda Mendapat *+ ${money_menang}* Money`)
    }else if(stand_totaluser == stand_totalcomp){
    let money_seri = global.blackjack[sender].taruhan;
    db_usermoney[sender].money = parseInt(db_usermoney[sender].money) + money_seri
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney))
reply(`*PEMAINAN SERI*

Kartu Kamu : ${stand_userkartu.join(', ')}
Total : ${stand_totaluser}

Kartu Komputer : ${stand_compkartu.join(', ')}
Total : *${stand_totalcomp}*

Money Anda *+ ${global.blackjack[sender].taruhan}*
`)

}else{
    reply(`*KAMU KALAH*

Kartu Kamu : ${stand_userkartu.join(', ')}
Total : ${stand_totaluser}

Kartu Komputer : ${stand_compkartu.join(', ')}
Total : *${stand_totalcomp}*

Money Anda *- ${global.blackjack[sender].taruhan}*
`)

}
delete global.blackjack[sender];
return 
break
case 'hit':
    if (!global.blackjack[sender]) {
        return reply('_Tidak ada permainan blackjack, silakan ketik *blackjack* untuk memulai permainan_')
    }
    let userkartu3 = kartu_blackjack[Math.floor(Math.random() * kartu_blackjack.length)];

    global.blackjack[sender].userkartu.push(userkartu3);

    let hit_kartuDiTangan = global.blackjack[sender].userkartu
    let hit_total_kartuuser = getNilaiKartu_Blackjack(hit_kartuDiTangan)
    
    if (hit_total_kartuuser > 21) {
    
    reply(`*KAMU KALAH*

Kartu Kamu : ${hit_kartuDiTangan.join(', ')}
Total : ${hit_total_kartuuser}

Money Anda *- ${global.blackjack[sender].taruhan}*
`)
delete global.blackjack[sender];
    }else{
    return reply(`*BLACK JACK*

Kartu Kamu : ${hit_kartuDiTangan.join(', ')}
Total : ${hit_total_kartuuser}

Kartu Komputer : ${global.blackjack[sender].comp_kartu[0]} , ?
Taruhan : *${global.blackjack[sender].taruhan}*

Ketik *hit* untuk mengambil kartu tambahan
Ketik *stand* untuk mengakhiri giliran`)
    }

break
case 'blackjack':
case 'bj':
if (resbot_.isBan) return reply(mess.ban)
if (!db_usermoney[sender]) {
db_usermoney[sender] = { limit: 30, money: '0',level_user: 1,level_cache:0 };

fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney))
}
if (global.blackjack[sender]) {
    return reply('Silakan Selesaikan Permainan, Untuk Bermain Baru')
}else{

    if (!isNaN(parseInt(global.smg_chat[sender].chat))) {
        if (parseInt(global.smg_chat[sender].chat) < 1)  return reply('_Masukkan Jumlah Taruhan_ \n\n_Contoh: *.blackjack 500*_')
    }else{
        return reply('_Masukkan Jumlah Taruhan_ \n\n_Contoh: *.blackjack 500*_')
    }
    if (!global.smg_chat[sender].chat) return reply('_Masukkan Jumlah Taruhan_ \n\n_Contoh: *.blackjack 500*_')
let money_blackjack = db_usermoney[sender].money;
if (parseInt(money_blackjack) < parseInt(global.smg_chat[sender].chat)) return reply('Money Anda Tidak Cukup \n\nMoney Anda : '+parseInt(money_blackjack))
    let userkartu1 = kartu_blackjack[Math.floor(Math.random() * kartu_blackjack.length)];
    let userkartu2 = kartu_blackjack[Math.floor(Math.random() * kartu_blackjack.length)];
    let userkartu_ = `${userkartu1}, ${userkartu2}`
    const kartuDiTangan = [userkartu1, userkartu2];
    let total_kartuuser = getNilaiKartu_Blackjack(kartuDiTangan)
    
     let compkartu1 = kartu_blackjack[Math.floor(Math.random() * kartu_blackjack.length)];
    let compkartu2 = kartu_blackjack[Math.floor(Math.random() * kartu_blackjack.length)];
    let compkartu_ = `${compkartu1}, ?`

    const kartuDiTangan_comp = [compkartu1, compkartu2];
    let total_kartucomp= getNilaiKartu_Blackjack(kartuDiTangan_comp)

    global.blackjack[sender] = {userkartu : kartuDiTangan, comp_kartu: kartuDiTangan_comp, taruhan: parseInt(global.smg_chat[sender].chat) }

    db_usermoney[sender].money = parseInt(db_usermoney[sender].money) - parseInt(global.smg_chat[sender].chat)
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney))
    return reply(`BLACK JACK

Kartu Kamu : ${userkartu_}
Total : ${total_kartuuser}

Kartu Komputer : ${compkartu_}
Taruhan : *${parseInt(global.smg_chat[sender].chat)}*

Ketik *hit* untuk mengambil kartu tambahan
Ketik *stand* untuk mengakhiri giliran`)
}


break


/* ________________「 FAMILY 100 」________________ */
case 'family100': {
    if (resbot_.isBan) return reply(mess.ban)
 if ('family100'+from in _family100) {
 return reply('Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan')
 }
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
 let random = anu[Math.floor(Math.random() * anu.length)]


 let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 _family100['family100'+from] = {
 id: 'family100'+from,
 pesan: await dikzzydev.sendText(from, hasil, m),
 ...random,
 terjawab: Array.from(random.jawaban, () => false),
 hadiah: 6,
 }
}
break



/* ________________「 TEBAK TEBAK 」________________ */
case 'tebaklagu': 
case 'tebakgambar': 
case 'tebakkata': 
case 'tebakkalimat': 
case 'tebaklirik': 
case 'tebaklontong': 
case 'tebakbendera': 
case 'tebakhewan': 
case 'tebakangka': 
case 'tebakbom': 
case 'tebak': {
if (resbot_.isBan) return reply(mess.ban)


if (global.smg_chat[sender].chat === "lagu" || command === 'tebaklagu') {

    if (tebaklagu.hasOwnProperty(from.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan")
    let anu = await JSON.parse(fs.readFileSync('./Storage/Games/tebaklagu.json'));
     let result = anu[Math.floor(Math.random() * anu.length)]

    let msg = await dikzzydev.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:qdoc})
    dikzzydev.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
    tebaklagu[from.split('@')[0]] = result.jawaban.toLowerCase()
    })
    console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)} `)
    await sleep(config.sleep_game)
    if (tebaklagu.hasOwnProperty(from.split('@')[0])) {
    dikzzydev.sendMessage(m.chat, { image: fs.readFileSync('./App/lib/waktu_habis.jpg'), caption:`Waktu Habis\nJawaban:  ${tebaklagu[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:qdoc}) 
    delete tebaklagu[from.split('@')[0]]
    }

} else if (global.smg_chat[sender].chat === 'gambar' || command === 'tebakgambar') {

     if (tebakgambar.hasOwnProperty(from.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
     let result = anu[Math.floor(Math.random() * anu.length)]
    dikzzydev.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
    tebakgambar[from.split('@')[0]] = result.jawaban.toLowerCase()
    })
    console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)} `)
    await sleep(config.sleep_game)
    if (tebakgambar.hasOwnProperty(from.split('@')[0])) {
    dikzzydev.sendMessage(m.chat, { image: fs.readFileSync('./App/lib/waktu_habis.jpg'), caption: `Waktu Habis\nJawaban:  ${tebakgambar[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted:qdoc}) 
    delete tebakgambar[from.split('@')[0]]
    }


} else if (global.smg_chat[sender].chat === 'bendera' || command === 'tebakbendera') {

    if (tebakbendera.hasOwnProperty(from.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan")
    let anu = await fetchJson(`https://api.autoresbot.com/api/game/bendera?apikey=d3a47aafe8a52acd1bbbb088`)
    dikzzydev.sendImage(from, anu.data.url_download, `*Sebutkan Nama Negara Di Atas Ini*\n*Jawab menggunakan Bahasa Inggris*\n\nWaktu : 60s*`, m).then(() => {
    tebakbendera[from.split('@')[0]] = anu.data.name.toLowerCase()
    })
    console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(anu.data.name)} `)
    await sleep(config.sleep_game)
    if (tebakbendera.hasOwnProperty(from.split('@')[0])) {
    
    dikzzydev.sendMessage(m.chat, { image: fs.readFileSync('./App/lib/waktu_habis.jpg'), caption: `Waktu Habis\nJawaban:  ${tebakbendera[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak bendera`}, {quoted:qdoc}) 
    delete tebakbendera[from.split('@')[0]]
    }

} else if (global.smg_chat[sender].chat === 'hewan' || command === 'tebakhewan') {

     if (tebakhewan.hasOwnProperty(from.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan")
    let anu = await fetchJson(`https://api.autoresbot.com/api/game/hewan?apikey=78dc442b203e6f1a3385bd7e`)
    let url_foto_tebakhewan = anu.data.question_image;
    url_foto_tebakhewan = url_foto_tebakhewan.replace(/^http:\/\/localhost:3000\//, 'https://api.autoresbot.com/');
    let url_foto_tebakhewan2 = anu.data.answer_image;
    url_foto_tebakhewan2 = url_foto_tebakhewan2.replace(/^http:\/\/localhost:3000\//, 'https://api.autoresbot.com/');

    dikzzydev.sendImage(from, url_foto_tebakhewan, `Sebutkan Nama Hewan Di Atas\n\nWaktu : 60s`, m).then(() => {
    tebakhewan[from.split('@')[0]] = anu.data.answer.toLowerCase()
    })
    console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(anu.data.answer)} `)
    await sleep(config.sleep_game)
    if (tebakhewan.hasOwnProperty(from.split('@')[0])) {
    dikzzydev.sendMessage(m.chat, { image: { url: url_foto_tebakhewan2 }, caption: `Waktu Habis\nJawaban:  ${tebakhewan[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak hewan`}, {quoted:qdoc}) 
    delete tebakhewan[from.split('@')[0]]
    }


} else if (body.includes('angka') ) {

let level_tebakangka = '';

const validLevels = ['easy', 'normal', 'hard', 'expert','setan'];

if (validLevels.join('|').includes(args[args.length - 1])) {
    level_tebakangka = args[args.length - 1];
} else {
     return reply(`-Masukkan Level\n\nContoh *${prefix}tebak angka easy*\n\n*Opsi*\neasy\nnormal\nhard\nexpert\nsetan`);
}
let angkaAcak = '';
let akhir_angkaAcak = '';
switch (level_tebakangka) {
    case 'easy':
        angkaAcak = Math.floor(Math.random() * 10) + 1;
        akhir_angkaAcak = 10
        break;
    case 'normal':
        angkaAcak = Math.floor(Math.random() * 100) + 1;
        akhir_angkaAcak = 100
        break;
    case 'hard':
        angkaAcak = Math.floor(Math.random() * 1000) + 1;
        akhir_angkaAcak = 1000
        break;
    case 'expert':
        angkaAcak = Math.floor(Math.random() * 10000) + 1;
        akhir_angkaAcak = 10000
        break;
    case 'setan':
        angkaAcak = Math.floor(Math.random() * 10000000000) + 1;
        akhir_angkaAcak = 10000000000
        break;
    default:
        return reply(`+Masukkan Level\n\nContoh *${prefix}tebak angka easy*\n\n*Opsi*\neasy\nnormal\nhard\nexpert\nsetan`);
}


if (tebakangka.hasOwnProperty(from.split('@')[0])) {
    delete tebakangka[from.split('@')[0]];
    return reply("Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan")
}
tebakangka[from.split('@')[0]] = angkaAcak;
reply(`Tebak Angka Dimulai\n\nTebak Angka dari 1 hingga ${akhir_angkaAcak}`);
console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(angkaAcak)} `)
await sleep(config.sleep_game);

if (tebakangka.hasOwnProperty(from.split('@')[0])) {
    
    dikzzydev.sendMessage(m.chat, { image: fs.readFileSync('./App/lib/waktu_habis.jpg'), caption: `Waktu Habis\nJawaban: ${tebakangka[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak angka`}, {quoted: qdoc});
    delete tebakangka[from.split('@')[0]];
}


} else if (global.smg_chat[sender].chat === 'kata' || command === 'tebakkata') {

     if (tebakkata.hasOwnProperty(from.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
     let result = anu[Math.floor(Math.random() * anu.length)]
    dikzzydev.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
    tebakkata[from.split('@')[0]] = result.jawaban.toLowerCase()
    })
    console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)} `)
    await sleep(config.sleep_game)
    if (tebakkata.hasOwnProperty(from.split('@')[0])) {
     
    dikzzydev.sendMessage(m.chat, { image: fs.readFileSync('./App/lib/waktu_habis.jpg'), caption: `Waktu Habis\nJawaban:  ${tebakkata[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted:qdoc}) 
    delete tebakkata[from.split('@')[0]]
    }
} else if (global.smg_chat[sender].chat === 'kalimat' || command === 'tebakkalimat') {

     if (tebakkalimat.hasOwnProperty(from.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan")
    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
     let result = anu[Math.floor(Math.random() * anu.length)]
     dikzzydev.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
     tebakkalimat[from.split('@')[0]] = result.jawaban.toLowerCase()
     })
     console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)} `)
     await sleep(config.sleep_game)
     if (tebakkalimat.hasOwnProperty(from.split('@')[0])) {
     
     dikzzydev.sendMessage(m.chat, { image: fs.readFileSync('./App/lib/waktu_habis.jpg'), caption:`Waktu Habis\nJawaban:  ${tebakkalimat[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:qdoc}) 
     delete tebakkalimat[from.split('@')[0]]
     }
 } else if (global.smg_chat[sender].chat === 'lirik' || command === 'tebaklirik') {

     if (tebaklirik.hasOwnProperty(from.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan")
     let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
     let result = anu[Math.floor(Math.random() * anu.length)]
     dikzzydev.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
     tebaklirik[from.split('@')[0]] = result.jawaban.toLowerCase()
     })
     console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)} `)
     await sleep(config.sleep_game)
     if (tebaklirik.hasOwnProperty(from.split('@')[0])) {
     
     dikzzydev.sendMessage(m.chat, { image: fs.readFileSync('./App/lib/waktu_habis.jpg'), caption: `Waktu Habis\nJawaban:  ${tebaklirik[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted:qdoc}) 
     delete tebaklirik[from.split('@')[0]]
     }
 } else if (global.smg_chat[sender].chat === 'lontong'  || command === 'tebaklontong') {

     if (caklontong.hasOwnProperty(from.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan")
     let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
     let result = anu[Math.floor(Math.random() * anu.length)]
     dikzzydev.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
     caklontong[from.split('@')[0]] = result.jawaban.toLowerCase()
    caklontong_desk[from.split('@')[0]] = result.deskripsi
     })
     console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)} `)
     await sleep(config.sleep_game)
     if (caklontong.hasOwnProperty(from.split('@')[0])) {
     
     dikzzydev.sendMessage(m.chat, { image: fs.readFileSync('./App/lib/waktu_habis.jpg'), caption:`Waktu Habis\nJawaban:  ${caklontong[from.split('@')[0]]}\nDeskripsi : ${caklontong_desk[from.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:qdoc}) 
     delete caklontong[from.split('@')[0]]
    delete caklontong_desk[from.split('@')[0]]
     }
 


}else if(global.smg_chat[sender].chat === 'bom' || command === 'tebakbom'){



    if (!global.tebakBom) {
    global.tebakBom = {};
}

if (global.tebakBom && global.tebakBom[from]) {
    return reply('_Masih Ada Game Sedang Berlangsung_')
}



//const buah = 💣
const buah = ['🍏','🍎','🍐','🍊','🍋','🍉','🍇','🍓','🍒','🍑','🥭','🍅'];


function acakArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function tambahBom(grid) {
  const posisiBom = Math.floor(Math.random() * 9);

  const baris = Math.floor(posisiBom / 3);
  const kolom = posisiBom % 3;
  grid[baris][kolom] = '💣';
  return posisiBom + 1;
}
const baris1 = acakArray(buah.slice(0, 3));
const baris2 = acakArray(buah.slice(3, 6));
const baris3 = acakArray(buah.slice(6, 9));
const grid = [
  baris1,
  baris2,
  baris3
];

const posisiBomReal = tambahBom(grid);
let hasilString = '';
for (let i = 0; i < 3; i++) {
  hasilString += grid[i].join(' ') + '\n';
}

const bomView_User = `1️⃣ 2️⃣ 3️⃣
4️⃣ 5️⃣ 6️⃣
7️⃣ 8️⃣ 9️⃣ `;


let bomView_User_Abjad = `A B C D E F G H I`;

global.tebakBom[from] = { posisiBom: posisiBomReal, terjawab: [], ListBuah : grid, bomView_User : bomView_User_Abjad};

return reply(`_*Tebak Bom Dimulai*_

${bomView_User}`)



}else{
     return reply(`_Contoh:  ${prefix + command} lagu_\n\n_Opsi Lainnya_ : \n» lagu\n» gambar\n» kata\n» kalimat\n» lirik\n» lontong\n» bendera\n» angka\n» hewan\n» bom`)
 }
}
break

/* ________________「 KUISMATCH 」________________ */
case 'kuismath': case 'math': {
if (resbot_.isBan) return reply(mess.ban)
 if (kuismath.hasOwnProperty(from.split('@')[0])) return reply("Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan")
 let { genMath, modes } = require('./App/src/math')
 if (!global.smg_chat[sender].chat) return reply (`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
 let result = await genMath(global.smg_chat[sender].chat.trim().toLowerCase())
 dikzzydev.sendText(from, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
 kuismath[from.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(from.split('@')[0])) {
console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)} `)
 reply("Waktu Habis\nJawaban: " + kuismath[from.split('@')[0]])
 delete kuismath[from.split('@')[0]]
 }
}
break

/* ________________「 TICTACTOE 」________________ */
case 'ttc': case 'ttt': case 'tictactoe': {
if (resbot_.isBan) return reply(mess.ban)
 let TicTacToe = require("./App/lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
reply('Partner ditemukan!')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await dikzzydev.sendText(room.x, str, m, { mentions: parseMention(str) } )
await dikzzydev.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break


case 'delttc': case 'delttt': {
if (resbot_.isBan) return reply(mess.ban)
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) return reply(`Kamu sedang tidak berada di room tictactoe !`)
delete this.game[roomnya.id]
reply(`Berhasil delete session room tictactoe !`)
}
break
        
/* ________________「 SUIT 」________________ */
case 'suitpvp': case 'suit': {
    if (resbot_.isBan) return reply(mess.ban)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${pushname}`, from, { quoted: qdoc })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await dikzzydev.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) dikzzydev.sendText(from, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break


/* ________________「 TRUTH 」________________ */
case 'truth':
    if (resbot_.isBan) return reply(mess.ban)
if (global.smg_chat[sender].chat) return
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)

await dikzzydev.sendMessage(m.chat, {image: truteh, caption: '*Truth*\n\n'+ ttrth }, {quoted: qdoc})


break

/* ________________「 DARE 」________________ */
case 'dare':
    if (resbot_.isBan) return reply(mess.ban)
if (global.smg_chat[sender].chat) return
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
await dikzzydev.sendMessage(m.chat, {image: buffer, caption: '*Dare*\n\n'+ der }, {quoted: qdoc})
break


/* ________________「 BISAKAH 」________________ */
case 'bisakah':
case 'bisa':
    if (resbot_.isBan) return reply(mess.ban);
    if (!global.smg_chat[sender].chat) return reply('Contoh:  *.bisakah anjing terbang*');
    
    let usersMentionBisakah = m.mentionedJid[0] || '';
    const bisa = [
        'Bisa', 'Tidak Bisa', 'Coba Ulangi', 'MANA GW TAU', 'Mungkin', 
        'Tentu Saja', 'Tidak Pasti', 'Coba Tanya Lagi', 'Tentu Tidak', 
        'Ya, Kenapa Tidak?', 'Tidak Hari Ini', 'Semoga Beruntung', 'Pasti', 
        'Tidak Mungkin', 'Ya', 'Tidak', 'Mungkin Lain Kali', 'Tidak Sekarang', 
        'Coba Saja', 'Aku Tidak Yakin'
    ];
    const keh = bisa[Math.floor(Math.random() * bisa.length)];
    const responseTextBisakah = `*Pertanyaan :* ${command} ${global.smg_chat[sender].chat}\n\n*Jawaban :* ${keh}`;

    const messageOptionsBisakah = usersMentionBisakah ? { text: responseTextBisakah, mentions: [usersMentionBisakah] } : { text: responseTextBisakah };
    dikzzydev.sendMessage(m.chat, messageOptionsBisakah, { quoted: qdoc });
    
    break;


/* ________________「 KAPAN 」________________ */
case 'kapankah':
case 'kapan':
    if (resbot_.isBan) return reply(mess.ban);
    if (!global.smg_chat[sender].chat) return reply('Contoh:  *.kapankah tukang bubur naik haji*');
    
    let usersMentionKapan = m.mentionedJid[0] || '';
    const kapan = [
        'Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi',
        '2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi',
        '4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi',
        '3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi'
    ];
    const koh = kapan[Math.floor(Math.random() * kapan.length)];
    const responseTextKapan = `*Pertanyaan :* ${command} ${global.smg_chat[sender].chat}\n\n*Jawaban :* ${koh}`;

    const messageOptionsKapan = usersMentionKapan ? { text: responseTextKapan, mentions: [usersMentionKapan] } : { text: responseTextKapan };
    dikzzydev.sendMessage(m.chat, messageOptionsKapan, { quoted: qdoc });

    break;



/* ________________「 CEKGANTENG 」________________ */
case 'cekganteng':
    if (resbot_.isBan) return reply(mess.ban)
    if(resbot_.mentionByTag.length === 0) return reply("Tag Orangnya")
        let gan = ''
        if (resbot_.numberSuperOwner == resbot_.mentionByTag[0]) {
            gan =['83','97','100','102','120','9999','127','86']
        }else{
            gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
        }
    const teng = gan[Math.floor(Math.random() * gan.length)]
    dikzzydev.sendMessage(m.chat, {text: '*Pertanyaan :* '+command+' '+global.smg_chat[sender].chat+'\n\n*Jawaban :* '+ teng, mentions: [m.mentionedJid[0]] }, {quoted: qdoc})
break

/* ________________「 CEKCANTIK 」________________ */
case 'cekcantik':
    if (resbot_.isBan) return reply(mess.ban)
      if(resbot_.mentionByTag.length === 0) return reply("Tag Orangnya")
         let can = ''
       if (resbot_.numberSuperOwner == resbot_.mentionByTag[0]) {
            can =['83','97','100','102','120','9999','127','86']
         } else{
            can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
         }
      const tik = can[Math.floor(Math.random() * can.length)]
   
     dikzzydev.sendMessage(m.chat, {text: '*Pertanyaan :* '+command+' '+global.smg_chat[sender].chat+'\n\n*Jawaban :* '+ tik, mentions: [m.mentionedJid[0]] }, {quoted: qdoc})


break

/* ________________「 CEKMATI 」________________ */
case 'cekmati':
    if (resbot_.isBan) return reply(mess.ban)
    if(resbot_.mentionByTag.length === 0) return reply("Tag Orangnya")
        let random_cekmati = Math.floor(Math.random() * 31) + 20;
      dikzzydev.sendMessage(m.chat, {text: `Nama : *${global.smg_chat[sender].chat}*\nMati Pada Umur : *${random_cekmati} Tahun*\n\n_Cepet Cepet Tobat Ya Soalnya Mati ga ada yang tau_`, mentions: [m.mentionedJid[0]] }, {quoted: qdoc})
    
break

/* ________________「 CEKGILA 」________________ */
case 'cekgila':
    if (resbot_.isBan) return reply(mess.ban)
      if(resbot_.mentionByTag.length === 0) return reply("Tag Orangnya")
         let can_cekgila = ''
       if (resbot_.numberSuperOwner == resbot_.mentionByTag[0]) {
            can_cekgila =['Tidak Gila','Dia Tidak Gila']
         } else{
            can_cekgila =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
         }
      const cekgila_const = can_cekgila[Math.floor(Math.random() * can_cekgila.length)]
   
     dikzzydev.sendMessage(m.chat, {text: '*Pertanyaan :* '+command+' '+global.smg_chat[sender].chat+'\n\n*Jawaban :* '+ cekgila_const, mentions: [m.mentionedJid[0]] }, {quoted: qdoc})


break

/* ________________「 CEKBUCIN 」________________ */
case 'cekbucin':
    if (resbot_.isBan) return reply(mess.ban)
      if(resbot_.mentionByTag.length === 0) return reply("Tag Orangnya")
         let can_cekbucin = ''
       if (resbot_.numberSuperOwner == resbot_.mentionByTag[0]) {
            can_cekbucin =['Tidak Bucin','Dia Tidak Bucin']
         } else{
            can_cekbucin =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
         }
      const cekbucin_const = can_cekbucin[Math.floor(Math.random() * can_cekbucin.length)]
     dikzzydev.sendMessage(m.chat, {text: '*Pertanyaan :* '+command+' '+global.smg_chat[sender].chat+'\n\n*Jawaban :* '+ cekbucin_const, mentions: [m.mentionedJid[0]] }, {quoted: qdoc})
break

/* ________________「 CEKTOLOL 」________________ */
case 'cektolol':
    if (resbot_.isBan) return reply(mess.ban)
      if(resbot_.mentionByTag.length === 0) return reply("Tag Orangnya")
         let can_cektolol = ''
       if (resbot_.numberSuperOwner == resbot_.mentionByTag[0]) {
            can_cektolol =['Tidak Tolol','Dia Tidak Tolol']
         } else{
            can_cektolol =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
         }
      const cektolol_const = can_cektolol[Math.floor(Math.random() * can_cektolol.length)]
     dikzzydev.sendMessage(m.chat, {text: '*Pertanyaan :* '+command+' '+global.smg_chat[sender].chat+'\n\n*Jawaban :* '+ cektolol_const, mentions: [m.mentionedJid[0]] }, {quoted: qdoc})
break

/* ________________「 CEK KODAM 」________________ */
case 'cekkodam':
case 'cekkhodam':
case 'cekodam':
    if (resbot_.isBan) return reply(mess.ban);

    let nama_cekkodam = '';
    
    if (resbot_.isReply) {
        nama_cekkodam = await dikzzydev.getName(m.quoted.sender);
    } else if (m.mentionedJid && m.mentionedJid.length > 0) {
        nama_cekkodam = await dikzzydev.getName(m.mentionedJid[0]);
    } else if (global.smg_chat[sender] && global.smg_chat[sender].chat) {
        nama_cekkodam = global.smg_chat[sender].chat;
    } else {
        return reply('_Example: .cekkodam dimas_');
    }

    if (nama_cekkodam === '') {
        return reply('_Example: .cekkodam dimas_');
    }

    try {
        const resultKodam = await fetchJson(`${global.apikey}/api/game/kodam?apikey=${apikey.acak}`);
        const result_kodam2 = `Nama, ${nama_cekkodam} , , , Kodam , ${resultKodam.data}`;
        const vn = await getBuffer(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(result_kodam2)}&tl=id&total=1&idx=0&textlen=${result_kodam2.length}&client=tw-ob&ttsspeed=1`);

        await dikzzydev.sendMessage(
            m.chat,
            { audio: vn, mimetype: 'audio/mp4', ptt: true },
            { quoted: qdoc }
        );
    } catch (error) {
        await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
    break;

    
/* ________________「 CEK KODAM TAG 」________________ */
// case 'cekkodam':
// case 'cekkhodam':
// case 'cekodam':
//     if (resbot_.isBan) return reply(mess.ban);
//     if (resbot_.mentionByTag.length === 0) return reply("Tag Orangnya");

//     try {
//         const resultKodam = await fetchJson(`${global.apikey}/api/game/kodam?apikey=${apikey.acak}`);
//         const vn = await getBuffer(`https://translate.google.com/translate_tts?ie=UTF-8&q=${resultKodam.data}&tl=id&total=1&idx=0&textlen=4&client=tw-ob&prev=input&ttsspeed=1`);
        
//         await dikzzydev.sendMessage(
//             m.chat,
//             { audio: vn, mimetype: 'audio/mp4', ptt: true },
//             { quoted: qdoc }
//         );
//     } catch (error) {
//         await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
//     }
//     break;
/* ________________「 KODAM 」________________ */
case 'kodam':
case 'khodam':
    if (resbot_.isBan) return reply(mess.ban);

    try {
        const resultKodam = await fetchJson(`${global.apikey}/api/game/kodam?apikey=${apikey.acak}`);
        const kodam = `_Nama :_ *${pushname}* \n\n_Khodam :_ *${resultKodam.data}*`
        dikzzydev.sendMessage(m.chat, {text: kodam }, {quoted: qdoc})

    } catch (error) {
        await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
    break;



/* ________________「 JADIAN 」________________ */
case 'jadian':


let senderIndex = Math.floor(Math.random() * participants.length);

let randomParticipant;
do {
    let randomIndex = Math.floor(Math.random() * participants.length);
    randomParticipant = participants[randomIndex];
} while (randomParticipant.id === sender);

const jadian_random = `@${sender.split('@')[0]} ❤️ @${randomParticipant.id.split('@')[0]}`;


dikzzydev.sendMessage(m.chat, { text : jadian_random , mentions: [sender,randomParticipant.id] })


break







/* ===============| MENU GROUP |===================*/


/* ________________「 ON 」________________ */
case 'on': {
        if (!m.isGroup) return reply(mess.group)
        if (!resbot_.isAdmins) return reply(mess.admin)
        const commandList_on = [
            { name: 'welcome', description: 'aktifkan welcome' },
            { name: 'left', description: 'aktifkan left' },
            { name: 'antilink', description: 'aktifkan antilink' },
            { name: 'antiviewonce', description: 'aktifkan antiviewonce' },
            { name: 'antivirtex', description: 'aktifkan antivirtex' },
            { name: 'antilinkv2', description: 'aktifkan antilinkv2' },
            { name: 'antilinkv3', description: 'aktifkan antilinkv3' },
            { name: 'antilinkwa', description: 'aktifkan antilinkwa' },
            { name: 'antilinkwav2', description: 'aktifkan antilinkwav2' },
            { name: 'antibadword', description: 'aktifkan antibadword' },
            { name: 'antidelete', description: 'aktifkan antidelete' },
            { name: 'antiedit', description: 'aktifkan antiedit' },
            { name: 'antigame', description: 'aktifkan antigame' },
            { name: 'autosimi', description: 'aktifkan auto simi' },
            { name: 'autochatgpt', description: 'aktifkan auto chatgpt' },
            { name: 'autorusuh', description: 'aktifkan auto chatgpt' },

            { name: 'antifoto', description: 'aktifkan antifoto' },
            { name: 'antivideo', description: 'aktifkan antivideo' },
            { name: 'antiaudio', description: 'aktifkan antiaudio' },
            { name: 'antidocument', description: 'aktifkan antidocument' },
            { name: 'antikontak', description: 'aktifkan antikontak' },
            { name: 'antisticker', description: 'aktifkan antisticker' },
            { name: 'antipolling', description: 'aktifkan antipolling' },
            { name: 'antispamchat', description: 'aktifkan antispamchat' },
            { name: 'onlyadmin', description: 'aktifkan onlyadmin' },
        ];

        const foundCommand_on = commandList_on.find(commandItem => commandItem.name === q);
    if (foundCommand_on) {
        if (foundCommand_on.name == 'welcome') { // HIDUPKAN WELCOME
            if (Array.isArray(db_welcome[from])) {
                let existingIndex_on = db_welcome[from].findIndex(data => 'status' in data);
                if (existingIndex_on !== -1) {
                        db_welcome[from][existingIndex_on].status = 'on';
                        fs.writeFileSync('./Storage/db/welcome.json', JSON.stringify(db_welcome))
                        return reply('_Berhasil Welcome Di Aktifkan_')
                }
            }else {
                return reply('_Anda Belum Membuat Pesan Welcome_ \n\n_Silakan ketik .setwelcome_')
            }

        }else if (foundCommand_on.name == 'left'){ // HIDUPKAN LEFT
            if (Array.isArray(db_left[from])) {
            let existingIndex_on = db_left[from].findIndex(data => 'status' in data);
            if (existingIndex_on !== -1) {
                    db_left[from][existingIndex_on].status = 'on';
                    fs.writeFileSync('./Storage/db/left.json', JSON.stringify(db_left))
                    return reply('_Berhasil Left Di Aktifkan_')
            }
            }else {
                return reply('_Anda Belum Membuat Pesan Left_ \n\n_*Silakan ketik setleft*_')
            }
        



        }else if (foundCommand_on.name == 'antilink'){ // HIDUPKAN ANTILINK
            if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)

                if (!db.data.chats[m.chat]) {
                    db.data.chats[m.chat] = {};
                }
                if (db.data.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya 🕊️`);
                db.data.chats[m.chat].antilink = true;
                fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data));
                return reply(`_Antilink Sudah Aktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antivirtex'){ // HIDUPKAN antivirtex
            if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)

                if (!db.data.chats[m.chat]) {
                    db.data.chats[m.chat] = {};
                }
                if (db.data.chats[m.chat].antivirtex) return reply(`Sudah Aktif Sebelumnya 🕊️`);
                db.data.chats[m.chat].antivirtex = true;
                fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data));
                return reply(`_Antivirtex Sudah Aktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antiviewonce'){ // HIDUPKAN antiviewone
            if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)

                if (!db.data.chats[m.chat]) {
                    db.data.chats[m.chat] = {};
                }
                if (db.data.chats[m.chat].antiviewone) return reply(`Sudah Aktif Sebelumnya 🕊️`);
                db.data.chats[m.chat].antiviewone = true;
                fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data));
                return reply(`_Antiviewone (Gambar Sekali Lihat) Sudah Aktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antilinkv2'){ // HIDUPKAN ANTILINK2
            if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)

                if (!db.data.chats[m.chat]) {
                    db.data.chats[m.chat] = {};
                }

                if (db.data.chats[m.chat].antilinkv2) return reply(`Sudah Aktif Sebelumnya 🕊️`)
                    db.data.chats[m.chat].antilinkv2 = true
                    fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data))
                    return reply(`_Antilinkv2 Sudah Aktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antilinkv3'){ // HIDUPKAN ANTILINK3
            if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)

                if (!db.data.chats[m.chat]) {
                    db.data.chats[m.chat] = {};
                }

                if (db.data.chats[m.chat].antilinkv3) return reply(`Sudah Aktif Sebelumnya 🕊️`)
                    db.data.chats[m.chat].antilinkv3 = true
                    fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data))
                    return reply(`_Antilinkv3 Sudah Aktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antilinkwa'){ // HIDUPKAN ANTILINKWA
        
            if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)

                if (!db.data.chats[m.chat]) {
                    db.data.chats[m.chat] = {};
                }

                if (db.data.chats[m.chat].antilinkwa) return reply(`Sudah Aktif Sebelumnya 🕊️`)
                    db.data.chats[m.chat].antilinkwa = true
                    fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data))
                    return reply(`_Antilinkwa Sudah Aktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antilinkwav2'){ // HIDUPKAN ANTILINKWAv2
        
            if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)

                if (!db.data.chats[m.chat]) {
                    db.data.chats[m.chat] = {};
                }
                if (db.data.chats[m.chat].antilinkwav2) return reply(`Sudah Aktif Sebelumnya 🕊️`)
                    db.data.chats[m.chat].antilinkwav2 = true
                    fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data))
                    return reply(`_Antilinkwav2 Sudah Aktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antibadword'){ // HIDUPKAN BADWORD
            db_badword[from] = { status: 'on' };
            fs.writeFileSync('./Storage/db/badword.json', JSON.stringify(db_badword))

            return reply('_Anti Badword Berhasil Di Aktifkan_')
            
        }else if (foundCommand_on.name == 'antidelete'){ // HIDUPKAN ANTIDELETE
            db_antidel.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/antidel.json', JSON.stringify(db_antidel))
            return reply('_Antidelete di aktifkan untuk grub ini_')

        }else if (foundCommand_on.name == 'antiedit'){ // HIDUPKAN ANTI EDIT
            db_antiedit.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/antiedit.json', JSON.stringify(db_antiedit))
            return reply('_Antiedit di aktifkan untuk grub ini_')
        
        }else if (foundCommand_on.name == 'antigame'){ // HIDUPKAN GAME
            db_antigame.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/antigame.json', JSON.stringify(db_antigame))
            return reply('_Fitur Anti Game di aktifkan untuk grub ini_')

        }else if (foundCommand_on.name == 'autosimi'){ // HIDUPKAN simi
            db_simi.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/auto_simi.json', JSON.stringify(db_simi ))
            return reply('_Fitur Autosimi di aktifkan untuk grub ini_\n\nUntuk Cara Penggunaan Silakan Menyertakan kata "simi" atau reply chat bot')
        
        }else if (foundCommand_on.name == 'autochatgpt'){ // HIDUPKAN chat gpt
            db_chatgpt.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/auto_chatgpt.json', JSON.stringify(db_chatgpt ))
            return reply('_Fitur Auto Ai di aktifkan untuk grub ini_')
    
        }else if (foundCommand_on.name == 'autorusuh'){ // HIDUPKAN auto rusuh
            db_rusuh.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/auto_rusuh.json', JSON.stringify(db_rusuh ))
            return reply('_Fitur Auto Rusuh di aktifkan untuk grub ini_ \n\n_Fitur *antibadword* akan dimatikan selama rusuh berlangsung_')
        

        }else if (foundCommand_on.name == 'antifoto'){ // HIDUPKAN antifoto
            db_antifoto.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antifoto.json', JSON.stringify(db_antifoto ))
            return reply('_Fitur Anti Foto di aktifkan untuk grub ini_')
        

        }else if (foundCommand_on.name == 'antivideo'){ // HIDUPKAN antivideo
            db_antivideo.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antivideo.json', JSON.stringify(db_antivideo ))
            return reply('_Fitur Anti Video di aktifkan untuk grub ini_')
        

        }else if (foundCommand_on.name == 'antiaudio'){ // HIDUPKAN antiaudio
            db_antiaudio.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antiaudio.json', JSON.stringify(db_antiaudio ))
            return reply('_Fitur Anti Audio di aktifkan untuk grub ini_')
        

        }else if (foundCommand_on.name == 'antidocument'){ // HIDUPKAN antidocument
            db_antidocument.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antidocument.json', JSON.stringify(db_antidocument ))
            return reply('_Fitur Anti Document di aktifkan untuk grub ini_')
        

        }else if (foundCommand_on.name == 'antikontak'){ // HIDUPKAN antikontak
            db_antikontak.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antikontak.json', JSON.stringify(db_antikontak ))
            return reply('_Fitur Anti Kontak di aktifkan untuk grub ini_')
        

        }else if (foundCommand_on.name == 'antipolling'){ // HIDUPKAN anti polling
            db_antipolling.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antipolling.json', JSON.stringify(db_antipolling ))
            return reply('_Fitur Anti polling di aktifkan untuk grub ini_')
        

        }else if (foundCommand_on.name == 'antisticker'){ // HIDUPKAN antisticker
            db_antisticker.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antisticker.json', JSON.stringify(db_antisticker ))
            return reply('_Fitur Anti Sticker di aktifkan untuk grub ini_')


        }else if (foundCommand_on.name == 'antispamchat'){ // HIDUPKAN antispamchat
            db_antispamchat.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antispamchat.json', JSON.stringify(db_antispamchat ))
            return reply('_Fitur Anti Spam Chat di aktifkan untuk grub ini_')


        }else if (foundCommand_on.name == 'onlyadmin'){ // HIDUPKAN onlyadmin
            db_onlyadmin.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_onlyadmin.json', JSON.stringify(db_onlyadmin ))
            return reply('_Only Admin Di Aktifkan Untuk Grub Ini_')
        }
        



        } else {

const template_onchat = `ɢᴜɴᴀᴋᴀɴ *.ᴏɴ ᴄᴏᴍᴍᴀɴᴅ*

[${antilinkStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋ       
[${antilinkv2Status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴠ2     
[${antilinkv3Status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴠ3     
[${antilinkwaStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴡᴀ     
[${antilinkwav2Status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴡᴀᴠ2   
[${badword_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʙᴀᴅᴡᴏʀᴅ
[${antidelete_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴅᴇʟᴇᴛᴇ     
[${antiedit_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴇᴅɪᴛ       
[${antigame_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪɢᴀᴍᴇ       
[${antifoto_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪꜰᴏᴛᴏ       
[${antivideo_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴠɪᴅᴇᴏ      
[${antiaudio_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴀᴜᴅɪᴏ      
[${antidocument_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴅᴏᴄᴜᴍᴇɴᴛ   
[${antikontak_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴋᴏɴᴛᴀᴋ     
[${antisticker_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪꜱᴛɪᴄᴋᴇʀ    
[${antipolling_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴘᴏʟʟɪɴɢ    
[${antispamchat_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪꜱᴘᴀᴍᴄʜᴀᴛ    
[${antivirtexStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴠɪʀᴛᴇx    
[${antiviewoneStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ    
[${auto_simi_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀᴜᴛᴏꜱɪᴍɪ       
[${auto_chatgpt_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀᴜᴛᴏᴄʜᴀᴛɢᴘᴛ    
[${auto_rusuh_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀᴜᴛᴏʀᴜꜱᴜʜ      
[${global.welcome_status === 'OFF' ? config.icon_off : config.icon_on}] ᴡᴇʟᴄᴏᴍᴇ        
[${left_status === 'OFF' ? config.icon_off : config.icon_on}] ʟᴇꜰᴛ           
[${onlyadmin_status === 'OFF' ? config.icon_off : config.icon_on}] ᴏɴʟʏᴀᴅᴍɪɴ           

ᴄᴏɴᴛᴏʜ : *.ᴏɴ ᴡᴇʟᴄᴏᴍᴇ*

Kᴇᴛᴇʀᴀɴɢᴀɴ
${config.icon_on} = Fɪᴛᴜʀ ᴀᴋᴛɪꜰ
${config.icon_off} = Fɪᴛᴜʀ ᴛɪᴅᴀᴋ ᴀᴋᴛɪꜰ`

        return reply(template_onchat);
        }

}
break

case 'off': {
    
        if (!m.isGroup) return reply(mess.group)
        if (!resbot_.isAdmins) return reply(mess.admin)


        const commandList_on = [
            { name: 'welcome', description: 'matikan welcome' },
            { name: 'left', description: 'matikan left' },
            { name: 'antilink', description: 'matikan antilink' },
            { name: 'antiviewonce', description: 'matikan antiviewonce' },
            { name: 'antivirtex', description: 'matikan antivirtex' },
            { name: 'antilinkv2', description: 'matikan antilinkv2' },
            { name: 'antilinkv3', description: 'matikan antilinkv3' },
            { name: 'antilinkwa', description: 'matikan antilinkwa' },
            { name: 'antilinkwav2', description: 'matikan antilinkwav2' },
            { name: 'antibadword', description: 'matikan antibadword' },
            { name: 'antidelete', description: 'matikan antidelete' },
            { name: 'antiedit', description: 'matikan antiedit' },
            { name: 'antigame', description: 'matikan antigame' },
            { name: 'autosimi', description: 'aktifkan auto simi' },
            { name: 'autochatgpt', description: 'aktifkan auto chatgpt' },
            { name: 'autorusuh', description: 'aktifkan auto chatgpt' },
            { name: 'antifoto', description: 'aktifkan antifoto' },
            { name: 'antivideo', description: 'aktifkan antivideo' },
            { name: 'antiaudio', description: 'aktifkan antiaudio' },
            { name: 'antidocument', description: 'aktifkan antidocument' },
            { name: 'antikontak', description: 'aktifkan antikontak' },
            { name: 'antisticker', description: 'aktifkan antisticker' },
            { name: 'antipolling', description: 'aktifkan antipolling' },
            { name: 'antispamchat', description: 'aktifkan antispamchat' },
            { name: 'onlyadmin', description: 'aktifkan onlyadmin' },
        ];

        const foundCommand_on = commandList_on.find(commandItem => commandItem.name === q);


    if (foundCommand_on) {

        if (foundCommand_on.name == 'welcome') { // MATIKAN WELCOME
            if (Array.isArray(db_welcome[from])) {
                let existingIndex_on = db_welcome[from].findIndex(data => 'status' in data);
                if (existingIndex_on !== -1) {
                        db_welcome[from][existingIndex_on].status = 'off';
                        fs.writeFileSync('./Storage/db/welcome.json', JSON.stringify(db_welcome))
                        return reply('_Berhasil Welcome Di Aktifkan_')
                }
            }else {
                return reply('_Anda Belum Membuat Pesan Welcome_ \n\n_Silakan ketik .setwelcome_')
            }

        }else if (foundCommand_on.name == 'left'){ // MATIKAN LEFT
            if (Array.isArray(db_left[from])) {
            let existingIndex_on = db_left[from].findIndex(data => 'status' in data);
            if (existingIndex_on !== -1) {
                    db_left[from][existingIndex_on].status = 'off';
                    fs.writeFileSync('./Storage/db/left.json', JSON.stringify(db_left))
                    return reply('_Berhasil Left Di Aktifkan_')
            }
            }else {
                return reply('_Anda Belum Membuat Pesan Left_ \n\n_*Silakan ketik setleft*_')
            }
        



        }else if (foundCommand_on.name == 'antilink'){ // MATIKAN ANTILINK
        
            if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)

                if (!db.data.chats[m.chat].antilink) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilink = false
                    fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data))
                    return reply(`Antilink Sudah Nonaktif 🕊️`)
            
        }else if (foundCommand_on.name == 'antivirtex'){ // MATIKAN antivirtex
        
            if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)

                if (!db.data.chats[m.chat].antivirtex) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antivirtex = false
                    fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data))
                    return reply(`_Antivirtex Sudah Nonaktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antiviewonce'){ // MATIKAN antiviewone
        
            if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)

                if (!db.data.chats[m.chat].antiviewone) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antiviewone = false
                    fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data))
                    return reply(`_Antiviewone Sudah Nonaktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antilinkv2'){ // MATIKAN ANTILINK2
        
            if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)

                if (!db.data.chats[m.chat].antilinkv2) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinkv2 = false
                    fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data))
                    return reply(`Antilink Sudah Nonaktif 🕊️`)
            
        }else if (foundCommand_on.name == 'antilinkv3'){ // MATIKAN ANTILINK3
        
            if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)

            if (!db.data.chats[m.chat].antilinkv3) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinkv3 = false
                    fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data))
                    return reply(`Antilink Sudah Nonaktif 🕊️`)
            
        }else if (foundCommand_on.name == 'antilinkwa'){ // MATIKAN ANTILINWA
        
            if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)

            if (!db.data.chats[m.chat].antilinkwa) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinkwa = false
                    fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data))
                    return reply(`Antilinkwa Sudah Nonaktif 🕊️`)
            
        }else if (foundCommand_on.name == 'antilinkwav2'){ // MATIKAN ANTILINWA
        
            if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)

            if (!db.data.chats[m.chat].antilinkwav2) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinkwav2 = false
                    fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data))
                    return reply(`Antilinkwav2 Sudah Nonaktif 🕊️`)
            
        }else if (foundCommand_on.name == 'antibadword'){ // MATIKAN BADWORD
        
            db_badword[from] = { status: 'off' };
            fs.writeFileSync('./Storage/db/badword.json', JSON.stringify(db_badword))
            return reply('_Anti Badword Berhasil Di Matikan_')
            
        }else if (foundCommand_on.name == 'antidelete'){ // MATIKAN ANTIDELETE
            let index = db_antidel.indexOf(m.chat);
            if (index !== -1) {
                let filteredArray_offantide = db_antidel.filter(item => item !== m.chat);
                fs.writeFileSync('./Storage/db/antidel.json', JSON.stringify(filteredArray_offantide));
                return reply('_Antidelete di matikan untuk grub ini_');
            } else {
            return reply('_Antidelete Sudah Nonaktif Sebelumnya_');
            }

        }else if (foundCommand_on.name == 'antiedit'){ // MATIKAN ANTI EDIT
            
        let index = db_antiedit.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offantiedit = db_antiedit.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/antiedit.json', JSON.stringify(filteredArray_offantiedit));
                    return reply('_Antiedit di matikan untuk grub ini_');
                } else {
                    return reply('_Antiedit Sudah Nonaktif Sebelumnya_');
                }
        
        
        }else if (foundCommand_on.name == 'antigame'){ // MATIKAN ANTI EDIT
            
        let index = db_antigame.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offantigame = db_antigame.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/antigame.json', JSON.stringify(filteredArray_offantigame))
                    return reply('_Fitur Game di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Game Sudah Nonaktif Sebelumnya_');
                }
        





        }else if (foundCommand_on.name == 'autosimi'){ // MATIKAN AUTOSIMI
            
        let index = db_simi.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offsimi = db_simi.filter(item => item !== m.chat);
                fs.writeFileSync('./Storage/db/auto_simi.json', JSON.stringify(filteredArray_offsimi))
                    return reply('_Fitur Autosimi di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Autosimi Sudah Nonaktif Sebelumnya_');
                }
        

        }else if (foundCommand_on.name == 'autochatgpt'){ // MATIKAN AI
            
        let index = db_chatgpt.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offchatgpt = db_chatgpt.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/auto_chatgpt.json', JSON.stringify(filteredArray_offchatgpt))
                    return reply('_Fitur Auto Chatgpt di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Auto Chatgpt Sudah Nonaktif Sebelumnya_');
                }
        




        }else if (foundCommand_on.name == 'autorusuh'){ // MATIKAN AUTOSIMI
            
        let index = db_rusuh.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offrusuh = db_rusuh.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/auto_rusuh.json', JSON.stringify(filteredArray_offrusuh))
                    return reply('_Fitur Auto Rusuh di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Auto Rusuh Sudah Nonaktif Sebelumnya_');
                }

        }else if (foundCommand_on.name == 'antifoto'){ // MATIKAN ANTI FOTO
            
        let index = db_antifoto.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offantifoto = db_antifoto.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/db_antifoto.json', JSON.stringify(filteredArray_offantifoto))
                    return reply('_Fitur Anti Foto di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Anti Foto Sudah Nonaktif Sebelumnya_');
                }
        



        }else if (foundCommand_on.name == 'antivideo'){ // MATIKAN ANTI VIDEO
            
        let index = db_antivideo.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offantivideo = db_antivideo.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/db_antivideo.json', JSON.stringify(filteredArray_offantivideo))
                    return reply('_Fitur Anti Video di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Anti Video Sudah Nonaktif Sebelumnya_');
                }
        


        }else if (foundCommand_on.name == 'antiaudio'){ // MATIKAN ANTI AUDIO
            
        let index = db_antiaudio.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offantiaudio = db_antiaudio.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/db_antiaudio.json', JSON.stringify(filteredArray_offantiaudio))
                    return reply('_Fitur Anti Audio di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Anti Audio Sudah Nonaktif Sebelumnya_');
                }
        

        }else if (foundCommand_on.name == 'antidocument'){ // MATIKAN ANTI DOCUMENT
            
        let index = db_antidocument.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offantidocument = db_antidocument.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/db_antidocument.json', JSON.stringify(filteredArray_offantidocument))
                    return reply('_Fitur Anti Document di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Anti Document Sudah Nonaktif Sebelumnya_');
                }
        


        }else if (foundCommand_on.name == 'antikontak'){ // MATIKAN ANTI Kontak
            
        let index = db_antikontak.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offantikontak = db_antikontak.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/db_antikontak.json', JSON.stringify(filteredArray_offantikontak))
                    return reply('_Fitur Anti Kontak di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Anti Kontak Sudah Nonaktif Sebelumnya_');
                }
        

        } else if (foundCommand_on.name == 'antipolling'){ // MATIKAN ANTI polling
            
            let index = db_antipolling.indexOf(m.chat);
                    if (index !== -1) {
                        let filteredArray_offantipolling = db_antipolling.filter(item => item !== m.chat);
                        fs.writeFileSync('./Storage/db/db_antipolling.json', JSON.stringify(filteredArray_offantipolling))
                        return reply('_Fitur Anti polling di matikan untuk grub ini_');
                    } else {
                        return reply('_Fitur Anti polling Sudah Nonaktif Sebelumnya_');
                    }
            

        }else if (foundCommand_on.name == 'antisticker'){ // MATIKAN ANTI Sticker
    
            let index = db_antisticker.indexOf(m.chat);
            if (index !== -1) {
                let filteredArray_offantisticker = db_antisticker.filter(item => item !== m.chat);
                fs.writeFileSync('./Storage/db/db_antisticker.json', JSON.stringify(filteredArray_offantisticker));
                return reply('_Fitur Anti Sticker di matikan untuk grup ini_');
            } else {
                return reply('_Fitur Anti Sticker Sudah Nonaktif Sebelumnya_');
            }
        
        
        }else if (foundCommand_on.name == 'antispamchat'){ // MATIKAN ANTI Sticker
    
            let index = db_antispamchat.indexOf(m.chat);
            if (index !== -1) {
                let filteredArray_offantispamchat = db_antispamchat.filter(item => item !== m.chat);
                fs.writeFileSync('./Storage/db/db_antispamchat.json', JSON.stringify(filteredArray_offantispamchat));
                return reply('_Fitur Anti SpamChat di matikan untuk grup ini_');
            } else {
                return reply('_Fitur Anti SpamChat Sudah Nonaktif Sebelumnya_');
            }
        

        }else if (foundCommand_on.name == 'onlyadmin'){ // MATIKAN ANTI onlyadmin
    
            let index = db_onlyadmin.indexOf(m.chat);
            if (index !== -1) {
                let filteredArray_offonlyadmin = db_onlyadmin.filter(item => item !== m.chat);
                fs.writeFileSync('./Storage/db/db_onlyadmin.json', JSON.stringify(filteredArray_offonlyadmin));
                return reply('_Only Admin dimatikan untuk grub ini_');
            } else {
                return reply('_Only Admin sudah Nonaktif Sebelumnya_');
            }
        }


        } else {
const template_offchat = `ɢᴜɴᴀᴋᴀɴ *.ᴏꜰꜰ ᴄᴏᴍᴍᴀɴᴅ*

[${antilinkStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋ       
[${antilinkv2Status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴠ2     
[${antilinkv3Status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴠ3     
[${antilinkwaStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴡᴀ     
[${antilinkwav2Status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴡᴀᴠ2   
[${badword_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʙᴀᴅᴡᴏʀᴅ
[${antidelete_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴅᴇʟᴇᴛᴇ     
[${antiedit_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴇᴅɪᴛ       
[${antigame_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪɢᴀᴍᴇ       
[${antifoto_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪꜰᴏᴛᴏ       
[${antivideo_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴠɪᴅᴇᴏ      
[${antiaudio_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴀᴜᴅɪᴏ      
[${antidocument_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴅᴏᴄᴜᴍᴇɴᴛ   
[${antikontak_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴋᴏɴᴛᴀᴋ     
[${antisticker_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪꜱᴛɪᴄᴋᴇʀ    
[${antipolling_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴘᴏʟʟɪɴɢ    
[${antispamchat_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪꜱᴘᴀᴍᴄʜᴀᴛ
[${antivirtexStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴠɪʀᴛᴇx    
[${antiviewoneStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ     
[${auto_simi_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀᴜᴛᴏꜱɪᴍɪ       
[${auto_chatgpt_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀᴜᴛᴏᴄʜᴀᴛɢᴘᴛ    
[${auto_rusuh_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀᴜᴛᴏʀᴜꜱᴜʜ      
[${global.welcome_status === 'OFF' ? config.icon_off : config.icon_on}] ᴡᴇʟᴄᴏᴍᴇ        
[${left_status === 'OFF' ? config.icon_off : config.icon_on}] ʟᴇꜰᴛ           
[${onlyadmin_status === 'OFF' ? config.icon_off : config.icon_on}] ᴏɴʟʏᴀᴅᴍɪɴ           

ᴄᴏɴᴛᴏʜ : *.ᴏꜰꜰ ᴡᴇʟᴄᴏᴍᴇ*

Kᴇᴛᴇʀᴀɴɢᴀɴ
${config.icon_on} = Fɪᴛᴜʀ ᴀᴋᴛɪꜰ
${config.icon_off} = Fɪᴛᴜʀ ᴛɪᴅᴀᴋ ᴀᴋᴛɪꜰ`
return reply(template_offchat);
}

}
break


/* ________________「 CREATEGC 」________________ */
case 'creategc':
    if (!resbot_.superOwner) return reply(mess.superOwner)
    if (!global.smg_chat[sender].chat) return reply(`_Contoh: ${prefix+command} nama grub_`)

let creategc = await dikzzydev.groupCreate(q, [])
   await dikzzydev.groupSettingUpdate(creategc.id, 'locked').then((res) => console.log(`Sekarang *Hanya Admin Yang Dapat Mengedit Pengaturan Grup*`)).catch((err) => console.log(jsonformat(err)))
   let response_creategc = await dikzzydev.groupInviteCode(creategc.id)


   dikzzydev.sendMessage(from, { text: `「 *Create Group* 」

_▸ Link : https://chat.whatsapp.com/${response_creategc}
`})

break


/* ________________「 BADWORD 」________________ */
case 'badword':
case 'badwords':
    try {
        if (resbot_.isBan) return reply(mess.ban);

        let teksooo = '*▧ 「 LIST BADWORDS* 」\n\n';
        for (let i of db_antitoxic) {
            teksooo += `✦ ${i}\n`;
        }
        teksooo += `\n*Total : ${db_antitoxic.length}*`;

        await reply(teksooo.trim())
    } catch (error) {
        console.error('Error handling badword command:', error);
        reply('Terjadi kesalahan saat memproses perintah badword.');
    }
    break;


/* ________________「 ADDBADWORD 」________________ */
case 'addbadword':
case 'addbadwords':
    if (!resbot_.isAdmins) return reply(mess.admin)
    if (resbot_.isBan) return reply(mess.ban)
    if (!global.smg_chat[sender].chat) return reply('Masukkan Textnya')

     if (db_antitoxic.includes(global.smg_chat[sender].chat.toLowerCase().trim())) {
        return reply('_Kata sudah ada dalam daftar *Badwords*_');
    }

    if (global.smg_chat[sender].chat.toLowerCase().trim().length < 2) return reply('Minimal 2 Huruf')
    db_antitoxic.push(global.smg_chat[sender].chat.toLowerCase().trim())
    fs.writeFileSync('./Storage/db/antitoxic.json', JSON.stringify(db_antitoxic))
    reply(`_Kata Telah Ditambahkan Ke List *Badwords*_`)

break

/* ________________「 DELBADWORD 」________________ */
case 'delbadword':
case 'delbadwords':
    if (!resbot_.isAdmins) return reply(mess.admin)
    if (resbot_.isBan) return reply(mess.ban)
    if (!global.smg_chat[sender].chat) return reply('Masukkan Textnya')
    const delbadword_list = db_antitoxic.indexOf(global.smg_chat[sender].chat.toLowerCase().trim())
    db_antitoxic.splice(delbadword_list, 1)
    fs.writeFileSync('./Storage/db/antitoxic.json', JSON.stringify(db_antitoxic))
    reply(`_Kata Telah Dihapus Dari List *Badwords*_`)
   

break

/* ________________「 CHANGELOG」________________ */
    case 'update': 
    case 'changelog': {
    const xd =fs.readFileSync("./App/lib/changelog.js") 
    const caption = `${xd},`;

    const imageBuffer = fs.readFileSync('./App/src/media/cng.jpg');
    return dikzzydev.sendMessage(m.chat, { image: imageBuffer, caption: caption }, { quoted: qdoc });
    break;
}

/* ________________「 ANTIDELTE 」________________ */
case 'antidelete':
    if (!resbot_.isAdmins) return reply(mess.admin)
    if (!m.isGroup) return reply(mess.group)
    if (!global.smg_chat[sender].chat) {
        return reply('Gunakan perintah antidelete on / off')
    }

    if (q == 'on') {
        db_antidel.push(m.chat) // Use m.chat instead of from
        fs.writeFileSync('./Storage/db/antidel.json', JSON.stringify(db_antidel))
        reply('_Antidelete di aktifkan untuk grub ini_')
    }

    if (q == 'off') {
        let index = db_antidel.indexOf(m.chat);
        if (index !== -1) {
            db_antidel.splice(index, 1);
            fs.writeFileSync('./Storage/db/antidel.json', JSON.stringify(db_antidel));
            reply('_Antidelete di matikan untuk grub ini_');
        } else {
            console.log('antidelete tidak dalam daftar');
        }
    }
    break;


/* ________________「 ANTIEDIT 」________________ */
case 'antiedit':
    if (!resbot_.isAdmins) return reply(mess.admin)
    if (!m.isGroup) return reply(mess.group)
    if (!global.smg_chat[sender].chat) {
        return reply('Gunakan perintah antiedit on / off')
    }

    if (global.smg_chat[sender].chat.toLowerCase().trim() == 'on') {
        db_antiedit.push(m.chat) // Use m.chat instead of from
        fs.writeFileSync('./Storage/db/antiedit.json', JSON.stringify(db_antiedit))
        reply('_antiedit di aktifkan untuk grub ini_')
    }

    if (global.smg_chat[sender].chat.toLowerCase().trim() == 'off') {
        let index = db_antiedit.indexOf(m.chat);
        if (index !== -1) {
            db_antiedit.splice(index, 1);
            fs.writeFileSync('./Storage/db/antiedit.json', JSON.stringify(db_antiedit));
            reply('_Antiedit di matikan untuk grub ini_');
        } else {
            console.log('Antiedit tidak dalam daftar');
        }
    }
    break;


/* ________________「 RESETSIDER 」________________ */
case 'resetsider':
    if (db_sider && db_sider[from]) {
      delete db_sider[from];
      fs.writeFileSync('./Storage/db/sider.json', JSON.stringify(db_sider));
      reply("_Sider Berhasil Direset Pada Grub ini_")
    } else {
      reply("_Sider Sudah Direset Pada Grub ini_")
    }
    break;


/* ________________「 GCSIDER 」________________ */
case 'gcsider':

if (!resbot_.isAdmins) return reply(mess.admin)
if (m.isGroup) { GcSiderUpdate(m.sender,from) }
const sevenDaysAgo = timestamp - (7 * 24 * 60 * 60 * 1000);
const filteredData = db_sider[from].filter(item => item.timestamp >= sevenDaysAgo);
const newDataSider = groupMetadata.participants.filter(item2 => !filteredData.some(item1 => item1.user_id === item2.id));

let arr_membersider = ''
for (let mem of newDataSider) {
arr_membersider += `⭔ @${mem.id.split('@')[0]} _Sider_\n`
}

let mem_sider       = newDataSider.length
let total_memgc     = groupMetadata.size
let teks_gcsider    = `_*${mem_sider} Dari ${total_memgc}* Anggota Grup ${groupMetadata.subject} Adalah Sider_

_*Dengan Alasan :*_
➊ _Tidak Aktif Selama lebih 7 hari_
➋ _Join Tapi Tidak Pernah Nimbrung_

_Harap Aktif Di Grup Karena Akan Ada Pembersihan Member Setiap Saat_


_*List Member Sider*_
${arr_membersider}
`

dikzzydev.sendMessage(m.chat, { text: teks_gcsider, mentions: newDataSider.map(a => a.id) }, { quoted:qdoc })


break

/* ________________「 LISTABSEN 」________________ */
case 'listabsen':
    if (resbot_.isBan) return reply(mess.ban)
    if (!resbot_.isAdmins) return reply(mess.admin)
    if (!m.isGroup) return reply(mess.group)
    if (db_absen[from+tgl_hariini]) {
    let stringAbsen = `*LIST ABSEN [ ${tgl_hariini} ]*\n\n`
    stringAbsen += db_absen[from+tgl_hariini].map(absen => `⭔ @${absen.user_id.split('@')[0]} \n`).join('');    

    let arr_listabsen   = db_absen[from+tgl_hariini].map(absen => ({ id: absen.user_id }));
    let jumlahOrangAbsen= arr_listabsen.length;
    let total_orgdgrub  = participants.length;

    let lomAbsen        = total_orgdgrub - jumlahOrangAbsen

    if (lomAbsen == 0) {
         stringAbsen += `\n*${jumlahOrangAbsen}* Orang Telah Absen Semua`
    }else{
         stringAbsen += `\n*${jumlahOrangAbsen}* Orang Telah Absen, Tersisa ${lomAbsen} Orang`
    }

    dikzzydev.sendMessage(m.chat, { text: stringAbsen, mentions: arr_listabsen.map(a => a.id) }, { quoted:qdoc })

    } else{
        return reply('Belum ada absen hari ini')
    }




break


/* ________________「 ABSEN 」________________ */
case 'absen':
    if (resbot_.isBan) return reply(mess.ban)
    if (!m.isGroup) return reply(mess.group)
    if (!db_absen[from+tgl_hariini]) {

        // pertama absen
        db_absen[from+tgl_hariini] = [{ user_id: sender, tanggal: tgl_hariini }];
        reply('Absen Berhasil')
    }else {

        // absen kedua
      const sudah_absen = db_absen[from+tgl_hariini].findIndex(item => item.user_id === sender);

      if (sudah_absen !== -1) {
            reply('Kamu sudah absen hari ini')
        }else {
            reply('Absen Berhasil')
            db_absen[from+tgl_hariini].push({ user_id: sender, tanggal: tgl_hariini });
        }
          
    }

 fs.writeFileSync('./Storage/db/absen.json', JSON.stringify(db_absen))


break

/* ________________「 BUYLIMIT 」________________ */
case 'buylimit':
    if (resbot_.isBan) return reply(mess.ban);
    if (!global.smg_chat[sender]?.chat) return reply('_Masukkan Format Yang Valid_ \nContoh: *buylimit 1000*\n\n*NOTE : 1 Limit = 20 Money* ');

    const extractedNumber = ambilAngka(global.smg_chat[sender].chat.toLowerCase().trim());
    let buylimit_number;

    if (!isNaN(extractedNumber)) {
        buylimit_number = extractedNumber.toString().replace(/^0+/, '');
    } else {
        return reply('Contoh: *.buylimit 50*');
    }

    if (buylimit_number < 1) {
        return reply('_Masukkan Format Yang Valid_ \n\n_Contoh: *buylimit 1000*_');
    }

    const uang_required = parseInt(buylimit_number) * 20;

    if (isNaN(buylimit_number) || buylimit_number <= 0) {
        return reply('Input harus berupa angka');
    }

    if (parseInt(db_usermoney[sender].money) < uang_required) {
        return reply('Money Anda Tidak Cukup Untuk Membeli Limit');
    }

    const limitadd = parseInt(buylimit_number);
    db_usermoney[sender].limit = parseInt(db_usermoney[sender].limit) + limitadd;
    db_usermoney[sender].money -= uang_required;

    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney));
    reply(`Pembelian Limit Berhasil \n\nLimit Anda Bertambah : ${limitadd}`);

    break;

/* ________________「 TOP 」________________ */
case 'topglobal':
case 'topusers':
case 'topuser':
case 'topmember':
case 'top':
    if (!resbot_.isAdmins) return reply(mess.admin)

try {
    
    let anggotaDenganAdmin_topmember = [];
    let sortedList_top_member = Object.entries(db_usermoney)
        .sort((a, b) => b[1].money - a[1].money)
        .map(([key, value]) => {
        anggotaDenganAdmin_topmember.push({ id: key });
        return `┣⭔ @${key.split('@')[0]}: ${value.money}`;
    });

    let topTenMembers = anggotaDenganAdmin_topmember.slice(0, 10); // Mengambil 10 data anggota teratas
    let topTenMentions = topTenMembers.map(a => a.id); // Mengambil ID dari 10 anggota teratas
    let resultString_top_member = sortedList_top_member.slice(0, 10).join('\n');
    let top_akhir = `┏━『 *TOP MEMBER* 』\n`+resultString_top_member+`\n┗━━━━━━━━━━━━━━━━━━◧`
    dikzzydev.sendMessage(m.chat, { text: top_akhir, mentions: topTenMentions }, { quoted: qdoc });


} catch(e){
    return reply('_Belum ada users_')
}

break;

/* ________________「 SENDLIMIT 」________________ */
case 'sendlimit':
    if (resbot_.isBan) return reply(mess.ban)
    if (!global.smg_chat[sender].chat) return reply('_Gunakan Perintah_ *.sendlimit* @tag 100')

    if (!db_usermoney[sender]) return reply('_Anda Tidak Punya Limit_');


    users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    if (users == '@s.whatsapp.net')  {
        users = args[0] + users
    }
    let cekuser_sendlimit = await dikzzydev.onWhatsApp(users);
    if (cekuser_sendlimit.length == 0) {
        return reply('Nomor Tidak Terdaftar Di WhatsApp!!!');
    }

    let tosendlimit = parseInt(args[1])
    if (!isNaN(tosendlimit)) {
        tosendlimit = tosendlimit.toString().replace(/^0+/, '');
    } else {
        return reply('Contoh: *.sendlimit* 6281277811884')
    }


    if (tosendlimit > parseInt(db_usermoney[sender].limit)) {
        return reply('_Limit Anda Tidak Cukup_');
    }


    if (!args[1]) return reply('Contoh: *.sendlimit* 6281277811884')

    if (tosendlimit >= 1000000) return reply('_*.sendlimit* tidak boleh lebih 1 Juta_')
    if (tosendlimit < 1) return reply('_*.sendlimit* minimal 1_')
    // khusus yang di beri

    if (!db_usermoney[users]) {
         db_usermoney[users] = { limit: tosendlimit, money: '0',level_user: 1,level_cache:0 };

    }else{
         db_usermoney[users].limit = parseInt(db_usermoney[users].limit) + parseInt(tosendlimit)
    }
    


    // khusus yang memberi
    db_usermoney[sender].limit = parseInt(db_usermoney[sender].limit) - parseInt(tosendlimit)
   
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney))

    const UserTagSendlimit = groupMetadata.participants.filter(item2 => users === item2.id);

    dikzzydev.sendMessage(from, { text : `Limit *${tosendlimit}* Telah Di Kirimkan Ke ${users.split('@')[0]}`, mentions: UserTagSendlimit.map(a => a.id) }, {quoted:qdoc})

break


/* ________________「 SENDMONEY 」________________ */
case 'sendmoney':
    if (resbot_.isBan) return reply(mess.ban)
    if (!global.smg_chat[sender].chat) return reply('Gunakan Perintah \n\nsendmoney @tag 100')

    if (!db_usermoney[sender]) return reply('Anda Tidak Punya Money');


    users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    if (users == '@s.whatsapp.net')  {
        users = args[0] + users
    }

     let tosendmoney = parseInt(args[1])
    if (!isNaN(tosendmoney)) {
        tosendmoney = tosendmoney.toString().replace(/^0+/, '');
    } else {
        return reply('Contoh: sendmoney 6281277811884')
    }

    if (!args[1]) return reply('Contoh: sendmoney 6281277811884')
    if (tosendmoney >= 1000000) return reply('_sendmoney tidak boleh lebih 1 Juta_')
    if (tosendmoney < 1) return reply('_*sendmoney* minimal 1_')


    // khusus yang di beri
    if (!db_usermoney[users]) {
         db_usermoney[users] = { limit: tosendmoney, limit: '0',level_user: 1,level_cache:0 };

    }else{
         db_usermoney[users].money = parseInt(db_usermoney[users].money) + parseInt(tosendmoney)
    }



    if (tosendmoney > parseInt(db_usermoney[sender].money)) {
        return reply('Money anda tidak cukup')
    }



    // khusus yang memberi
    
    db_usermoney[sender].money = parseInt(db_usermoney[sender].money) - parseInt(tosendmoney)
  
   
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney))

    const UserTagsendmoney = groupMetadata.participants.filter(item2 => users === item2.id);

    dikzzydev.sendMessage(from, { text : `Money *${tosendmoney}* Telah Di Kirimkan Ke ${users.split('@')[0]}`, mentions: UserTagsendmoney.map(a => a.id) }, {quoted:qdoc})

break

/* ________________「 ME2 」________________ */
case 'me2':
    if (resbot_.isBan) return reply(mess.ban)
    if (global.smg_chat[sender].chat) return

    if (!db_usermoney[sender]) {
   
     db_usermoney[sender] = { limit: 30, money: '0',level_user: 1,level_cache:0 };

     fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney))
}

let limit_meadd = '';

if (resbot_.superOwner || resbot_.isOwner || resbot_.isPremium) {
    limit_meadd = 'Unlimited (' + (db_usermoney[sender]?.limit ?? '0') + ')';
} else {
    limit_meadd = db_usermoney[sender]?.limit ?? 0;
}

let me_money = `
╭─── _*MY PROFILE*_ 
├────
├──
│ Name  : *${pushname}*
│ Level : ${resbot_.superOwner ? '*Super Owner*' : resbot_.isOwner ? '*Owner*' : resbot_.isPremium ? '*Premium*' : '*User*'}
│ Limit : *${limit_meadd}*
│ Money : *${db_usermoney[sender]?.money ?? 0}*
│
├────
╰────────────────────────`


reply(me_money)

break

/* ________________「 ME 」________________ */
case 'me':
case 'profile':
case 'my':
case 'limit':
case 'money':{

    if (global.smg_chat[sender].chat) return

    if (resbot_.isBan) return reply(mess.ban)

    if (!db_usermoney[sender]) {
         db_usermoney[sender] = { limit: 30, money: '0',level_user: 1,level_cache:1 };
         
    }


if (typeof db_usermoney[sender] === 'undefined') {
  // Jika tidak, inisialisasikan objek tersebut dengan properti level_user dan level_cache
  db_usermoney[sender] = { 
    limit: 30,
    money: '0',
    level_user: 1,
    level_cache:1
    };
} else {
  // Jika objek sudah didefinisikan, namun properti level_user atau level_cache tidak ada
  // Maka tambahkan properti-properti tersebut dengan nilai default
  // if (typeof db_usermoney[sender].level_user === 'undefined' || db_usermoney[sender].level_user == null) {
  //   db_usermoney[sender].level_user = 1;
  // }
  // if (typeof db_usermoney[sender].level_cache === 'undefined' || db_usermoney[sender].level_cache == null) {
  //   db_usermoney[sender].level_cache = 1;
  // }


    if (db_usermoney[sender].level_user == null) {
      db_usermoney[sender].level_user = 1;
    }

    if (db_usermoney[sender].level_cache == null) {
      db_usermoney[sender].level_cache = 1;
    }

    
    if (db_usermoney[sender].limit == null) {
        db_usermoney[sender].limit = 1;
      }

      if (db_usermoney[sender].money == null) {
        db_usermoney[sender].money = 1;
      }


}


fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney))


let limit_meadd = '';

if (resbot_.superOwner || resbot_.isOwner || resbot_.isPremium) {
    limit_meadd = 'Unlimited (' + (db_usermoney[sender]?.limit ?? '0') + ')';
} else {
    limit_meadd = db_usermoney[sender]?.limit ?? 0;
}


try {

let me_money = `
╭─── _*MY PROFILE*_ 
├────
├──
│ Name  : *${pushname}*
│ Level : ${resbot_.superOwner ? '*Super Owner*' : resbot_.isOwner ? '*Owner*' : resbot_.isPremium ? '*Premium*' : '*User*'}
│ Limit : *${limit_meadd}*
│ Money : *${db_usermoney[sender]?.money ?? 0}*
│ Level : *${db_usermoney[sender].level_user}*
│ Progress : *${db_usermoney[sender].level_cache}* / 100
│
├────
╰────────────────────────`
    

    const name_gc = groupMetadata.subject;
    const totalChat = 120;
    
    const psStats_ingrub = resbot_.isAdmins ? 'Admin' : "Member";
    const psStats_limit = limit_meadd;
    const psStats_money = db_usermoney[sender]?.money ?? 0;
    const psStats_level = `${db_usermoney[sender].level_user}`
    const psStats_cache = `${db_usermoney[sender].level_cache} / 100`
    const level_width = 313;



    const cacheBagian = db_usermoney[sender].level_cache / 100 * level_width;
  
const nomor_hp = m.sender.replace(/\D/g,''); // Menghapus karakter non-digit
const nomor_hp_final = nomor_hp.replace(/(\d{1,4})(?=(\d{4})+$)/g, '$1 ').trim(); // Menambah spasi setiap 4 digit dari belakang

let nomor_hp_fix = '+' + nomor_hp_final;
 nomor_hp_fix = nomor_hp_fix.replace(/6\s2/g, '62');



    const role_ingc = resbot_.superOwner ? 'Super Owner' : resbot_.isOwner ? 'Owner' : resbot_.isPremium ? 'Premium' : 'User';

    let flag;

    const duaAngkaPertama = nomor_hp_final.replace(/\s/g, '').substring(0, 2);


    if (duaAngkaPertama == '62') {
        flag = './62.png';

    }else if(duaAngkaPertama =='60'){
        flag = './60.png';
    }else{
        flag = './0.png';
    }


      let achievement = 'gamers';
    if (db_usermoney[sender].role) {
         achievement = db_usermoney[sender].role;
    }

  

    switch (achievement) {
        case 'gamers':
        case 'coding':
        case 'conqueror':
        case '100':
        case 'content creator':
        case 'fotografer':
        case 'music':
        case 'ilmuwan':
        case 'petualang':
        case 'hacker':
        case 'snake':
        case 'bull':
        case 'bear':
        case 'tiger':
        case 'cobra':
        case 'wolf':
        case 'imortal':

            achievement = './' + achievement + '.png';
            break;
        default:
            // Handle default case, jika perlu
            achievement = './gamers.png';
            break;
    }


    const PeopleUser = await generateProfile_User(pushname,cacheBagian,psStats_cache,nomor_hp_fix,role_ingc,psStats_cache,psStats_level,psStats_money,psStats_limit,psStats_ingrub,flag,achievement);

    dikzzydev.sendMessage(from, { image : PeopleUser,caption: '' }, {quoted:qdoc})



} catch(e){
    console.log(e)
}



}
break

//__________________(LIST APIKEY)________________*/
        case 'listapikey':
case 'daftarapikey': {
     if (!resbot_.superOwner) return reply(mess.superOwner)

    // Daftar API key dalam bentuk array
    const apiKeys = [
        'fa0bd52fc73270f860b079d2',
        'f54dc3dd6417549b08d86e21',
        'KaptenDikzzy'
    ];

    // Fungsi async untuk mengirim pesan satu per satu
    async function sendKeysOneByOne(keys) {
        for (const key of keys) {
            await reply(`${key}`);
            // Tambahkan delay jika diperlukan (misalnya, untuk menghindari rate limit)
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }

    // Panggil fungsi sendKeysOneByOne
    sendKeysOneByOne(apiKeys);
    break;
}
        
    
/* ________________「 SETROLE 」________________ */
case 'setrole': {
const roleERR = `_Pilih Role Di Bawah_ \n\n- gamers
- coding
- conqueror
- 100
- content creator
- fotografer
- music
- ilmuwan
- petualang
- hacker
- snake
- bull
- bear
- tiger
- cobra
- wolf
- imortal


Contoh : ${prefix + command} music`;


    if (!global.smg_chat[sender].chat) return reply(roleERR)
    const roleArr = ['gamers', 'coding', 'conqueror', '100', 'content creator', 'fotografer', 'music', 'ilmuwan', 'petualang', 'hacker','snake','bull','bear','tiger','cobra','wolf','imortal'];

    if (roleArr.includes(global.smg_chat[sender].chat)) {


    if (!db_usermoney[m.sender]) {
         db_usermoney[m.sender] = { limit: tolimit, money: '0',level_user: 1,level_cache:0 };
    }else{


        if (db_usermoney[sender].level_user < 10) {
             return reply(`_Minimal level 10 Untuk Menggunakan Role Ini_`)
        }
         db_usermoney[m.sender].role = global.smg_chat[sender].chat.trim().toLowerCase();
    }
   
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney))
       
    return reply(`_Success Menggati Role Ke *${global.smg_chat[sender].chat}*_`)



    } else {
        return reply(roleERR)
    }
}
break;


/* ________________「 ADDLIMIT 」________________ */
case 'addlimit':
    if (!resbot_.superOwner) return reply(mess.superOwner)
        if (!global.smg_chat[sender].chat) return reply('Contoh: addlimit 6281277811884')
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    if (users == '@s.whatsapp.net')  {
        users = args[0] + users
    }
    let tolimit = parseInt(args[1])
    if (isNaN(tolimit) || tolimit <= 0) {
        return reply('Input harus berupa angka.\n\nContoh: addlimit 6281277811884');
    }
    tolimit = tolimit.toString().replace(/^0+/, '');
    
    if (!args[1]) return reply('Contoh: addlimit 6281277811884')

    if (tolimit >= 1000000000) return reply('_addlimit tidak boleh lebih 1 M_')

    if (!db_usermoney[users]) {
        db_usermoney[users] = { limit: tolimit, money: '0',level_user: 1,level_cache:0 };
    }else{
        db_usermoney[users].limit = parseInt(db_usermoney[users].limit) + parseInt(tolimit)
    }
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney))
    reply(`Limit *${tolimit}* Telah Di Tambahkan `)
break

/* ________________「 CLAIM 」________________ */
case 'claim':
if (m.sender in global.claimLimit) {
    wspam_fil = (timestamp - global.claimLimit[m.sender].last_time)
    let timespam_spam = Math.ceil( (wspam_fil/1000) )
    wspam_fil = (timestamp - global.claimLimit[m.sender].last_time)
    const waktu_tunggu = config.limit_tunggu * 60 ;
    const waktu_lastclaim = wspam_fil/1000;
    const detikLagi = Math.floor(waktu_tunggu - waktu_lastclaim);
    const claim_hari = Math.floor(detikLagi / (3600 * 24));
    const claim_sisaDetik1 = detikLagi % (3600 * 24);
    const claim_jam = Math.floor(claim_sisaDetik1 / 3600);
    const claim_sisaDetik2 = claim_sisaDetik1 % 3600;
    const claim_menit = Math.floor(claim_sisaDetik2 / 60);
    const claim_sisaDetik3 = claim_sisaDetik2 % 60;
    let hasilFormat = '';
    if (claim_hari > 0) hasilFormat += `${claim_hari} hari, `;
    if (claim_jam > 0) hasilFormat += `${claim_jam} jam, `;
    if (claim_menit > 0) hasilFormat += `${claim_menit} menit, `;
    hasilFormat += `${claim_sisaDetik3} detik`;
    const pesanBalasan = `_Tunggu ${hasilFormat} lagi_`;
    if (waktu_lastclaim < waktu_tunggu) {
        return reply(pesanBalasan);
    }
}
let claimlimit_Person =  {
        "sender" : m.sender,
        'last_time' : timestamp
        }
global.claimLimit[sender] = claimlimit_Person
let claimLimit = Math.floor(Math.random() * 10) + 1;


 if (!db_usermoney[sender]) {
         db_usermoney[users] = { limit: 30, money: '0',level_user: 1,level_cache:0 };

    }else{
         db_usermoney[sender].limit = parseInt(db_usermoney[sender].limit) + parseInt(claimLimit)
    }
   
   
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney))

    return reply(`Anda Dapat *${claimLimit}* Limit`)

break

/* ________________「 ADDMONEY 」________________ */
case 'addmoney':
    if (!resbot_.superOwner) return reply(mess.superOwner)
    if (!global.smg_chat[sender].chat) return reply('Contoh: addmoney 6281277811884')
    users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    if (users == '@s.whatsapp.net')  {
        users = args[0] + users
    }
    let tomoney = parseInt(args[1])
    if (isNaN(tomoney) || tomoney <= 0) {
        return reply('Input harus berupa angka.');
    }
    tomoney = tomoney.toString().replace(/^0+/, '');
    if (!args[1]) return reply('Contoh: addmoney 628127781188400')

    if (tomoney >= 1000000000) return reply('_addlimit tidak boleh lebih 1 M_')

    if (!db_usermoney[users]) {
         db_usermoney[users] = { limit: 30, money: tomoney,level_user: 1,level_cache:0 };

    }else{
         db_usermoney[users].money = parseInt(db_usermoney[users].money) + parseInt(tomoney)
    }
   
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney))

    reply(`Money *${tomoney}* Telah Di Tambahkan `)
break


/* ________________「 SETWELCOME 」________________ */
case 'setwelcome':{
    if (!resbot_.isAdmins) return reply(mess.admin)
    if (!global.smg_chat[sender].chat) return reply(`_Masukkan Teksnya_

@NAME untuk menyebut nama
@GROUP untuk menyebut nama grub
@DESC untuk menyebut deskripsi


Contoh : setwelcome Selamat datang @NAME di grub @GROUP`)
if (Array.isArray(db_welcome[from])) {
    db_welcome[from] = [{ text: global.smg_chat[sender].chat.trim(), status: 'on' }];
}else {
    db_welcome[from] = [{ text: global.smg_chat[sender].chat.trim(), status: 'on' }];
}
fs.writeFileSync('./Storage/db/welcome.json', JSON.stringify(db_welcome))
return reply("Welcome Berhasil di Set")
}
break

/* ________________「 DELWELCOME 」________________ */
case 'delwelcome':{
    if (!resbot_.isAdmins) return reply(mess.admin)

if (Array.isArray(db_welcome[from])) {
    delete db_welcome[from];
    fs.writeFileSync('./Storage/db/welcome.json', JSON.stringify(db_welcome))
    reply('Welcome Berhasil Di Hapus')

}else {
    reply('Welcome Sudah Di Hapus')
}


}
break
//*__________________(SITUS TOP UP)_____________*
    case 'situstp': {
    if (!resbot_.superOwner) return reply(mess.superOwner)
        const username = m.sender.split('@')[0]; // Mengambil username pengirim
    const caption = 
`https://www.takapedia.com
https://www.saldogame.com
https://gempaytopup.com/
https://momomlbb.com/
https://www.radjatopup.id
https://ciaamarket.my.id/`


    const imageBuffer = fs.readFileSync('./App/src/media/sisi.jpg');
    return dikzzydev.sendMessage(m.chat, { image: imageBuffer, caption: caption }, { quoted: qdoc });
    break;
}
/* ________________「 WELCOME 」________________ */

case 'welcome':{
    if (!resbot_.isAdmins) return reply(mess.admin)
    if (!global.smg_chat[sender].chat) return reply(`_Status Welcome : *${welcome_status}*_  \n\n_Contoh:  welcome on/off_`)
    if (q == 'on') {

        if (Array.isArray(db_welcome[from])) {
        let existingIndex_on = db_welcome[from].findIndex(data => 'status' in data);

        if (existingIndex_on !== -1) {
                db_welcome[from][existingIndex_on].status = 'on';
                fs.writeFileSync('./Storage/db/welcome.json', JSON.stringify(db_welcome))
                return reply('Berhasil Welcome Di Aktifkan')
        }

            
        }else {
            return reply('Anda Belum Membuat Pesan Welcome \n\nSilakan ketik setwelcome')
        }

    }else if(q == 'off') {

         if (Array.isArray(db_welcome[from])) {
        let existingIndex_off = db_welcome[from].findIndex(data => 'status' in data);

        if (existingIndex_off !== -1) {
                db_welcome[from][existingIndex_off].status = 'off';
                fs.writeFileSync('./Storage/db/welcome.json', JSON.stringify(db_welcome))
                return reply('Berhasil Welcome Dimatikan')
        }

            
        }else {
            return reply('Anda Belum Membuat Pesan Welcome \n\nSilakan ketik setwelcome')
        }

    } else {
        return reply('Contoh:  welcome on/off')
    }



}
break

/* ________________「 SETLEFT 」________________ */
case 'setleft':{
    if (!resbot_.isAdmins) return reply(mess.admin)
    let text_setleft;
    try {
        let cekm = m.quoted.sender
        text_setleft = quoted.text.trim()
    }catch{
        text_setleft = global.smg_chat[sender].chat.trim();
    }
    if (text_setleft.length < 1) {
return reply(`_Masukkan Teksnya atau balas pesan_

@NAME untuk menyebut nama
@GROUP untuk menyebut nama grub


Contoh : _setleft Selamat tinggal @NAME telah keluar dari @GROUP_`)

}
if (Array.isArray(db_left[from])) {
    db_left[from] = [{ text: text_setleft, status: 'on' }];
}else {
    db_left[from] = [{ text: text_setleft, status: 'on' }];
}
fs.writeFileSync('./Storage/db/left.json', JSON.stringify(db_left))
return reply("_*Setleft* Berhasil di Set_")
}
break

/* ________________「 DELLEFT 」________________ */
case 'delleft':{
    if (!resbot_.isAdmins) return reply(mess.admin)
if (Array.isArray(db_left[from])) {
    delete db_left[from];
    fs.writeFileSync('./Storage/db/left.json', JSON.stringify(db_left))
    reply('Set Left Berhasil Di Hapus')

}else {
    reply('Set Left Sudah Di Hapus')
}
}
break

/* ________________「 LEFT 」________________ */

case 'left':{
    if (!resbot_.isAdmins) return reply(mess.admin)
    if (!global.smg_chat[sender].chat) return reply(`_Status Left : *${left_status}*_  \n\n_Contoh:  *left on/off*_`)
    if (q == 'on') {

        if (Array.isArray(db_left[from])) {
        let existingIndex_on = db_left[from].findIndex(data => 'status' in data);

        if (existingIndex_on !== -1) {
                db_left[from][existingIndex_on].status = 'on';
                fs.writeFileSync('./Storage/db/left.json', JSON.stringify(db_left))
                return reply('_*Berhasil Left Di Aktifkan*_')
        }

            
        }else {
            return reply('_Anda Belum Membuat Pesan Left_ \n\n_*Silakan ketik setleft*_')
        }

    }else if(q == 'off') {

         if (Array.isArray(db_left[from])) {
        let existingIndex_off = db_left[from].findIndex(data => 'status' in data);

        if (existingIndex_off !== -1) {
                db_left[from][existingIndex_off].status = 'off';
                fs.writeFileSync('./Storage/db/left.json', JSON.stringify(db_left))
                return reply('_*Berhasil Left Dimatikan*_')
        }

            
        }else {
            db_left[from] = [{ text: '', status: 'off' }];
            fs.writeFileSync('./Storage/db/left.json', JSON.stringify(db_left))
            return reply('_*Berhasil Left Dimatikan*_')
        }

    } else {
        return reply(`_Contoh:  *left on/off*_`)
    }



}
break

/* ________________「 DEL 」________________ */

case 'del': case 'delete':{

if (!resbot_.isAdmins) return reply(mess.admin)

if (quoted) {
    dikzzydev.sendMessage(m.chat,{delete: {remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender}})
}


}
break

/* ________________「 LINKGC 」________________ */
case 'linkgrup':
case 'linkgrub':
case 'linkgroup':
case 'linkgc': {
if (resbot_.isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.notGroup)
if (!resbot_.isBotAdmins) return reply('_Jadikan bot sebagai admin terlebih dahulu untuk menggunakan fitur ini_')
let response = await dikzzydev.groupInviteCode(from)
dikzzydev.sendText(from, `┏━『 *${groupMetadata.subject}* 』━◧
┣
┣» Total Member: ${groupMetadata.size}
┣» Link Group : https://chat.whatsapp.com/${response}
┣
┗━━━━━━━━━━━━━━━━━━◧`, m, { detectLink: true })
}
break


/* ________________「 INFOGC 」________________ */
case 'infogrub':
case 'infogroup':
case 'idgroup':
case 'idgrup':
case 'idgrub':
case 'infogc': {
if (resbot_.isBan) return reply(mess.ban)
if (!resbot_.isAdmins) return reply(mess.userNotAdmin)
if (!m.isGroup) return reply(mess.notGroup)
if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)
let response = await dikzzydev.groupInviteCode(from)
let teks = `┏━『 *${groupMetadata.subject}* 』━◧
┣
┣» Anggota : ${groupMetadata.size}
┣» ID  : ${groupMetadata.id}
┣» Link : https://chat.whatsapp.com/${response}
┣
┗━━━━━━━━━━━━━◧
`


// dikzzydev.sendMessage(from, {text: teks},{quoted:qdoc})

    dikzzydev.sendText(from, teks, m, { detectLink: true })
}
break


/* ________________「 RESETLINKGC 」________________ */
case 'resetlinkgc':
if (!m.isGroup) return reply(mess.notGroup)
if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)
if (!resbot_.isAdmins) return reply(mess.userNotAdmin)
dikzzydev.groupRevokeInvite(from)
break

/* ________________「 KICK 」________________ */
case 'kick': {
if (!m.isGroup) return reply(mess.notGroup)
if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)
if (!resbot_.isAdmins) return reply(mess.userNotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : global.smg_chat[sender].chat.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users == '@s.whatsapp.net')  return reply('Tag/Reply orangnya')
if (botNumber == users) return reply('Tidak Bisa Kick Diri Sendiri')
let bykick = await dikzzydev.groupParticipantsUpdate(from, [users], 'remove')
if (bykick) return reply(singlemess.kickmember)
}
break


/* ________________「 ADD 」________________ */
case 'add': {
if (!resbot_.isPremium) return reply(mess.premium)
if (!m.isGroup) return reply(mess.notGroup)
if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)
if (!resbot_.isAdmins) return reply(mess.userNotAdmin)
if (!global.smg_chat[sender].chat) return reply('Masukkan Nomornya')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
await dikzzydev.groupParticipantsUpdate(from, [users], 'add').then((res) => reply('Success') ).catch((err) => reply('Gagal'))
}
break


/* ________________「 PROMOTEME 」________________ */
case 'promoteme': {
    if (!resbot_.isOwner) return reply(mess.owner);
    if (!m.isGroup) return reply(mess.notGroup)
    if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)
    if (!resbot_.isPremium) return reply(mess.premium)
    await dikzzydev.groupParticipantsUpdate(from, [m.sender], 'promote')
    reply('Berhasil, Sekarang kamu sudah admin')
    }
    break

/* ________________「 PROMOTE 」________________ */
case 'promote': {
if (!m.isGroup) return reply(mess.notGroup)
if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)
if (!resbot_.isAdmins) return reply(mess.userNotAdmin)
if(! global.smg_chat[sender].chat){
    return reply('_Contoh Penggunaan:_ _.promote @tagorangnya_')
}
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : global.smg_chat[sender].chat.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dikzzydev.groupParticipantsUpdate(from, [users], 'promote')
reply(mess.promote_admin)
}
break

/* ________________「 DEMOTE 」________________ */
case 'demote': {
if (!m.isGroup) return reply(mess.notGroup)
if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)
if (!resbot_.isAdmins) return reply(mess.userNotAdmin)
if(! global.smg_chat[sender].chat){
    return reply('_Contoh Penggunaan:_ _.promote @tagorangnya_')
}
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dikzzydev.groupParticipantsUpdate(from, [users], 'demote')

reply(mess.demote_admin)
}
break

//________________________________//
  
        
/* ________________「 HIDETAG 」________________ */
case 'h':
case 'hidetag': {
if (!m.isGroup) return reply(mess.notGroup)
if (!resbot_.isAdmins) return reply(mess.userNotAdmin)
const texthidetag_ = quoted.text || global.smg_chat[sender].chat || '';

// Hidetag with image
if (isImage) {
        try {
            const file_hidetag = await dikzzydev.downloadAndSaveMediaMessage(quoted_);
        const response = await uploadFileToApi(file_hidetag, "1hour");
        const url_teleph_hd =response.fileUrl;

        await dikzzydev.sendMessage(from, { image: {url : url_teleph_hd}, caption: texthidetag_, mentions: participants.map(a => a.id) }, { quoted: qdoc });
        } catch(error){
            await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
        }
}else {
    dikzzydev.sendMessage(from, { text : texthidetag_ , mentions: participants.map(a => a.id)}, {quoted:qdoc})
}


}
break

/* ________________「 GRUB 」________________ */

case 'grub':
case 'gc':
case 'grup':
case 'groub':
case 'group': {


if (!resbot_.isPremium) return reply(mess.premium)
    if (!m.isGroup) return reply(mess.notGroup)
    if (!resbot_.isAdmins) return reply(mess.userNotAdmin)
    if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)
if (!global.smg_chat[sender].chat) return reply(`_Silahkan Ketik_\n
_${prefix + command} open_
_*${prefix + command} close*_

_${prefix + command} close 12:00_
`)



if (global.smg_chat[sender].chat === 'close') {
    await dikzzydev.groupSettingUpdate(from, 'announcement')
        .then((res) => reply(singlemess.close_grub))
        .catch((err) => reply(jsonformat(err)));
} else if (global.smg_chat[sender].chat === 'open') {
    await dikzzydev.groupSettingUpdate(from, 'not_announcement')
        .then((res) => reply(singlemess.open_grub))
        .catch((err) => reply(jsonformat(err)));
} else if (args[1] && args[1].length === 5) {

    const waktu_action_gc = args[1];

    if (!cekFormatWaktu(waktu_action_gc)) {
        return reply(`_🚫 Masukkan Format Jam Yang Valid_\n

Contoh:  
_${prefix + command} close 12:00_
    `);
    }

// MEMBUAT CRONJOB MANUAL AWAIT
if (!db_gcawait[from]) {
    db_gcawait[from] = { waktu: waktu_action_gc, action: args[0] };
} else {

    db_gcawait[from].waktu = waktu_action_gc;
    db_gcawait[from].action = args[0];
}

  fs.writeFileSync('./Storage/db/gcawait.json', JSON.stringify(db_gcawait));


  // Langsung jalankan cron
      const action_gc2 = db_gcawait[from];

    var date1clone = new Date("2022-01-01 " + jammenit);
    var date2clone = new Date("2022-01-01 " + action_gc2.waktu);

    if (date2clone > date1clone) {
        var selisihMilidetik = date2clone - date1clone;
    } else {
    }


    if (Object.keys(db_gcawait).includes(from)) {
        delete db_gcawait[from];
        fs.writeFileSync('./Storage/db/gcawait.json', JSON.stringify(db_gcawait))

    }

    if (action_gc2.action == 'close') {

        if (timeoutIds[from]) {
            clearTimeout(timeoutIds[from]);
        }

        // Set timeout dan simpan ID timeout dalam objek
        timeoutIds[from] = setTimeout(async () => {
            await dikzzydev.groupSettingUpdate(from, 'announcement')
                .then((res) => chat_only(singlemess.close_grub))
                .catch((err) => chat_only(jsonformat(err)));

            delete timeoutIds[from];

        }, selisihMilidetik);
    }

    if (action_gc2.action == 'open') {

        if (timeoutIds[from]) {
            clearTimeout(timeoutIds[from]);
        }

        timeoutIds[from] = setTimeout(async () => {
            await dikzzydev.groupSettingUpdate(from, 'not_announcement')
                .then((res) => chat_only(singlemess.open_grub))
                .catch((err) => chat_only(jsonformat(err)));

            delete timeoutIds[from];
        }, selisihMilidetik);
    }















    return reply(`_Berhasil, Group Akan Di ${args[0]} Pada Jam : *${args[1]}*_`);
} else {
    return reply(`_🚫 Masukkan Format Yang Valid_\n
_${prefix + command} open_
_*${prefix + command} close*_

_${prefix + command} close 12:00_
    `);
}


}
break

/* ________________「 EDITINFO 」________________ */
case 'editinfo': {
if (!m.isGroup) return reply(mess.notGroup)
if (!resbot_.isAdmins) return reply(mess.userNotAdmin)
if (!global.smg_chat[sender].chat) return reply(`Silahkan Ketik\n
${prefix + command} on
${prefix + command} off`)
if (args[0] === 'on'){
await dikzzydev.groupSettingUpdate(from, 'unlocked').then((res) => reply(`Sekarang *Semua Anggota Dapat Mengedit Pengaturan Grup*`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'off'){
await dikzzydev.groupSettingUpdate(from, 'locked').then((res) => reply(`Sekarang *Hanya Admin Yang Dapat Mengedit Pengaturan Grup*`)).catch((err) => reply(jsonformat(err)))
}
}
break


/* ________________「 EDITSUBJEK 」________________ */
case 'editsubjek': {
if (!m.isGroup) return reply(mess.notGroup)
if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)
if (!resbot_.isAdmins) return reply(mess.userNotAdmin)
if (!global.smg_chat[sender].chat) return reply('Text nya ?') 
await dikzzydev.groupUpdateSubject(m.chat, text).then((res) => console.log('Edit Grub') ).catch((err) => console.log('Edit Grub Gagal'))
}
break

/* ________________「 EDITDESK 」________________ */
case 'editdesk':{
if (!m.isGroup) return reply(mess.notGroup)
if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)
if (!resbot_.isAdmins) return reply(mess.userNotAdmin)
if (!global.smg_chat[sender].chat) return reply('Text Nya ?')
await dikzzydev.groupUpdateDescription(m.chat, text).then((res) => console.log('Edit Desk Grub') ).catch((err) => console.log('Edit Desk Gagal'))
reply('Silakan Baca Deskripsi Grub Baru \n\n'+global.smg_chat[sender].chat)
}
break

/* ________________「 TAGALL 」________________ */
case 'tagall': {
if (!m.isGroup) return reply(mess.notGroup)
if (!resbot_.isAdmins) return reply(mess.userNotAdmin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${global.smg_chat[sender].chat ? global.smg_chat[sender].chat : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
dikzzydev.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:qdoc })
}
break

/* ________________「 DEMOTEALL 」________________ */
case 'demoteall':
if (!resbot_.isPremium) return reply(mess.premium)
if (!m.isGroup) return reply(mess.notGroup)
if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)
if (!resbot_.isAdmins) return reply(mess.userNotAdmin)
var groupe = await dikzzydev.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
dikzzydev.groupParticipantsUpdate(from, mems, 'demote')
reply('Berhasil, Di Demote')
break

/* ________________「 PROMOTEALL 」________________ */
case 'promoteall':
if (!resbot_.superOwner) return reply(mess.superOwner)
if (!m.isGroup) return reply(mess.notGroup)
if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
var groupe = await dikzzydev.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
dikzzydev.groupParticipantsUpdate(from, mems, 'promote')
break

/* ________________「 SEWA 」________________ */
case 'sewabot':
if (resbot_.isBan) return reply(mess.ban)
    reply(listsewa_)
break

        
        
        
        
        
        
        
        
        
        
        
/* ________________「 SEWABOT 」________________ */

case 'sewa':
    if (!resbot_.isOwner) return reply(mess.owner);
    if (!args[0] || !args[1]) return reply(`_Contoh : ${prefix+command} https://chat.whatsapp.com/xxx 30_

_*30* artinya 30 hari, bot otomatis akan keluar apabila waktu habis_

_Jika Bot Sudah Bergabung ke Grub Sewa dan untuk perpanjang silakan ketik *.tambahsewa*_`)

if (!isURL(args[0]) && !args[0].includes('whatsapp.com')) return reply(`_Link Invalid!_ \n\n_Contoh : ${prefix+command} https://chat.whatsapp.com/xxx 30_`)

if (!isValidNumber(args[1])) {
    return reply(`_Masukkan Jumlah Hari Yang Valid_`)
}


let result_sewa = args[0].split('https://chat.whatsapp.com/')[1]
let res_linkgc = '';

const currentDate2 = new Date();
const thirtyDaysLater2 = new Date(currentDate2.getTime() + (args[1] * 24 * 60 * 60 * 1000) + (1*60*60*1000));
const timestampThirtyDaysLater2 = thirtyDaysLater2.getTime();


await dikzzydev.query({tag: "iq",attrs: {type: "get",xmlns: "w:g2",to: "@g.us"},content: [{ tag: "invite", attrs: { code: result_sewa } }]}).then(async(res) => { 
res_linkgc = res.content[0].attrs.id;
res_namegc = res.content[0].attrs.subject;
res_linkgc = res_linkgc + '@g.us';
db_sewa[res_linkgc] = { expired: timestampThirtyDaysLater2, start: hariini };
fs.writeFileSync('./Storage/db/sewa.json', JSON.stringify(db_sewa))





await dikzzydev.groupAcceptInvite(result_sewa)
    .then((res) => console.log('success gabung') ).catch((err) => console.log('Gagal Bergabung')

    );
return reply(`_*Bot Sudah Bergabung*_

Name Grub : *${res_namegc}*
Nomor Bot : ${botNumber.replace('@s.whatsapp.net','')}
Expired : *${selisihHari(timestampThirtyDaysLater2)}*

_Untuk Mengecek status sewa ketik *.ceksewa* pada grub tersebut_`)

})


break


/* ________________「 TAMBAHSEWA 」________________ */

case 'tambahsewa': {
    if (!resbot_.isOwner) return reply(mess.owner);
    if (!args[0] || !args[1]) return reply(`_Contoh : ${prefix+command} https://chat.whatsapp.com/xxx 30_

_*30* artinya penambahan 30 hari dihitung dari sisa waktu sewabot_

_Jika Bot Belum Bergabung ke Grub Sewa Silakan ketik *.sewabot*_`)

if (!isURL(args[0]) && !args[0].includes('whatsapp.com')) return reply(`_Link Invalid!_ \n\n_Contoh : ${prefix+command} https://chat.whatsapp.com/xxx 30_`)

if (!isValidNumber(args[1])) {
    return reply(`_Masukkan Jumlah Hari Yang Valid_`)
}
let result_sewa_tambahsewa = args[0].split('https://chat.whatsapp.com/')[1]
let res_linkgcaddsewa = '';
await dikzzydev.query({tag: "iq",attrs: {type: "get",xmlns: "w:g2",to: "@g.us"},content: [{ tag: "invite", attrs: { code: result_sewa_tambahsewa } }]}).then(async(res) => { 
res_linkgcaddsewa = res.content[0].attrs.id;
res_namegc = res.content[0].attrs.subject;
res_linkgcaddsewa = res_linkgcaddsewa + '@g.us';
let expired_cekprem_addsewa;
if (db_sewa.hasOwnProperty(res_linkgcaddsewa)) {
    expired_cekprem_addsewa = db_sewa[res_linkgcaddsewa].expired;
}else{
    return reply(`_*Nomor Bot Belum Pernah Bergabung*_\n\n_Silakan Ketik *.sewa* untuk membuat Sewa Baru_`)
}
const thirtyDaysLater2addsewa = new Date(expired_cekprem_addsewa + (args[1] * 24 * 60 * 60 * 1000) + (1*60*60*1000));
const timestampThirtyDaysLater2_addsewa = thirtyDaysLater2addsewa.getTime();
db_sewa[res_linkgcaddsewa] = { expired: timestampThirtyDaysLater2_addsewa, start: hariini };
fs.writeFileSync('./Storage/db/sewa.json', JSON.stringify(db_sewa))
await dikzzydev.groupAcceptInvite(result_sewa_tambahsewa)
    .then((res) => console.log('Success Bergabung') ).catch((err) => console.log('Gagal Bergabung')

    );
return reply(`_*Perpanjangan Berhasil*_

Name Grub : *${res_namegc}*
Nomor Bot : ${botNumber.replace('@s.whatsapp.net','')}
Expired : *${selisihHari(timestampThirtyDaysLater2_addsewa)}*

_Untuk Mengecek status sewa ketik *.ceksewa* pada grub tersebut_`)

})

}
break


/* ________________「 CEKSEWA 」________________ */

case 'ceksewa':
    let idsewa_cek;
    let res_namegc_ceksewa = groupMetadata.subject;

    if (global.smg_chat[sender].chat) {

        let result_sewa_ceksewa_ = args[0].split('https://chat.whatsapp.com/')[1]
        await dikzzydev.query({tag: "iq",attrs: {type: "get",xmlns: "w:g2",to: "@g.us"},content: [{ tag: "invite", attrs: { code: result_sewa_ceksewa_ } }]}).then(async(res) => { 
            idsewa_cek = res.content[0].attrs.id + '@g.us';
            res_namegc_ceksewa = res.content[0].attrs.subject;
        })
        
       
    }else{
        idsewa_cek = from;
    }

    if (db_sewa.hasOwnProperty(idsewa_cek)) {

        const expired_cekprem = db_sewa[idsewa_cek].expired;
        const selisihHari_cekprem = selisihHari(expired_cekprem);

        const cekprem_text = `_Name Group :_ ${res_namegc_ceksewa}

_Masa Sewabot :_ _*${selisihHari_cekprem}*_`

   

dikzzydev.sendMessage(m.chat, { text : cekprem_text , mentions: [sender] })




    }else{
         reply('_Grub Tidak Termasuk Sewa Bot_');
    }



break

/* ________________「 SEWAAKTIF 」________________ */
case 'sewaaktif': {
if (!resbot_.isOwner) return reply(mess.owner)

    try {
        let getallgrub = await dikzzydev.groupFetchAllParticipating();
async function formatGrup(index, grup) {
    let response2 = '-';
    let link_grouplist = '';

try {
response2 = await dikzzydev.groupInviteCode(grup.id);
    link_grouplist = `https://chat.whatsapp.com/${response2}`;
} catch{
    link_grouplist = '-'
}
let masa_sewa = '-'
if (db_sewa[grup.id]) {
    masa_sewa = selisihHari(db_sewa[grup.id].expired)
}
    return `╭─「 ${index} 」 *${grup.subject}*
│ Anggota : ${grup.participants.length}
│ ID Grub : ${grup.id}
│ Link    : ${link_grouplist}
│ Masa Sewa : ${masa_sewa}
╰────────────────────────\n> ©Furina Bot Ai`;
}

const grupTerurut = Object.values(getallgrub).sort((a, b) => b.participants.length - a.participants.length);
let nomorUrut = 0;
const listGrupString = await Promise.all(grupTerurut.map((grup) => formatGrup(++nomorUrut, grup)));

return reply(`_*Total Group : ${nomorUrut}*_ \n\n`+listGrupString.join('\n\n'));
} catch (e){
    console.log('error')
}


}
break;

/* ________________「 LISTSEWA 」________________ */
case 'listsewa':
if (resbot_.isBan) return reply(mess.ban)
if (!resbot_.isOwner) return reply(mess.owner)
let dataSorted = Object.keys(db_sewa).map(key => {
    return { idGrup: key, expired: db_sewa[key].expired };
});

dataSorted.sort((a, b) => a.expired - b.expired);

teksooo = '*▧ 「 LIST SEWA* 」\n\n'
for (let data of dataSorted) {
    teksooo += `╭─
│ ID Grup : ${data.idGrup}
│ Expired : ${selisihHari(data.expired)}
╰────────────────────────\n\n> ©Furina Bot Ai`;
}




teksooo += `\n*Total : ${Object.keys(db_sewa).length}*`
reply(teksooo.trim());

break

/* ________________「 DELSEWA 」________________ */
case 'delsewa':
    if (!global.smg_chat[sender].chat) return reply(`_❗ Masukkan ID Group. Gunakan ( .Infogroup ) untuk informasi group_

_*Noted*_ 
_Menghapus list sewa, tidak akan membuat bot keluar dari grub_\n\n_Untuk Keluar Dari Group Gunakan Perintah *.outgrub*_`);

    if (db_sewa.hasOwnProperty(global.smg_chat[sender].chat)) {
        delete db_sewa[global.smg_chat[sender].chat];
        fs.writeFileSync('./Storage/db/sewa.json', JSON.stringify(db_sewa))
        reply(`_Group *${global.smg_chat[sender].chat}* Telah Di Hapus Dari List Sewa!_`)

    }else{
        return reply(`_❗ ID Group Tidak Ditemukan_`)
    }
break



/* ________________「 OUTGROUP 」________________ */
case 'outgrup': 
case 'outgrupsewa': 
case 'outgroup':
case 'outgruB': 
case 'outgroub':  {
if (!resbot_.superOwner) return reply(mess.superOwner)
if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} 120363204743427585@g.us`)
    await dikzzydev.groupLeave(global.smg_chat[sender].chat).then((res) => reply('Berhasil Keluar Dari Grub') ).catch((err) => reply('Keluar Grub Gagal'))
        
}
break



/* ________________「 OUTGROUP 」________________ */
case 'antilink': {
                if (!m.isGroup) return reply(mess.group)
                if (!resbot_.isAdmins) return reply(mess.admin)
                if (!resbot_.isBotAdmins) return reply(mess.botNotAdmin)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya 🕊️`)
                    db.data.chats[m.chat].antilink = true
                    fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data))
                    return reply(`Antilink Sudah Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilink) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilink = false
                    fs.writeFileSync('./Storage/db/database.json', JSON.stringify(db.data))
                    return reply(`Antilink Sudah Nonaktif 🕊️`)
                } else {
                    return reply(`_Mode ${command}_\n\n\n_*Ketik .on ${command}*_
_*Noted !*_
Antilink : hapus pesan
Antilinkv2 : kick member
Antilinkv3 : hapus pesan + kick member
Antilinkwa : hapus pesan (link wa)
Antilinkwav2 : hapus pesan  +kick (link wa)

_❗ Hanya bisa gunakan satu antilink_
`)
                }
}
break

/* ________________「 ANTIBADWORD 」________________ */
case 'antibadword':
    if (!resbot_.isAdmins) return reply(mess.admin)
    if (!global.smg_chat[sender].chat) return reply(`_Status Badword: *${status_badword}*_\n\n_❗ Contoh Penggunaan: *antibadword on/off*_`)

    if (!db_badword[from]) {
        db_badword[from] = { status: 'off' };
    }
    if (global.smg_chat[sender].chat == 'on') {
        db_badword[from] = { status: 'on' };
        fs.writeFileSync('./Storage/db/badword.json', JSON.stringify(db_badword))

        return reply('_Anti Badword Berhasil Di Aktifkan_')

    }else if(q == 'off'){
        db_badword[from] = { status: 'off' };
        fs.writeFileSync('./Storage/db/badword.json', JSON.stringify(db_badword))
        return reply('_Anti Badword Berhasil Di Matikan_')

    }else{
       return reply(`_Status Badword: *${status_badword}*_\n\n_❗ Contoh Penggunaan: *antibadword on/off*_`)
    }




break


/* ________________「 GETNAME 」________________ */
case 'getname': {
if (resbot_.isReply) {
namenye = await dikzzydev.getName(m.quoted.sender)
reply(namenye)
} else if (!resbot_.isReply) {
dikzzydev.sendMessage(from, {text:"Reply orangnya"}, {quoted:qdoc})
}
}
break


/* ________________「 GETPIC 」________________ */
case 'getpic': {
    const getProfilePictureUrl = async (sender) => {
      try {
        const url = await dikzzydev.profilePictureUrl(sender, 'image');
        if (!url) throw new Error('URL not found');
        return url;
      } catch (e) {
        console.log('Error fetching profile picture:', e.message);
        return 'https://petermarshconsulting.com/wp-content/uploads/2022/07/Screenshot-2022-07-19-at-10.13.31.png';
      }
    };
  
    try {
      const sender = resbot_.isReply ? m.quoted.sender : m.sender;
      const pporg = await getProfilePictureUrl(sender);
      await dikzzydev.sendMessage(from, { image: { url: pporg }, caption: 'Done' }, { quoted: qdoc });
    } catch (e) {
      console.log('Error sending message:', e.message);
    }
  
    break;
  }
  


/* ________________「 SETPPBOT 」________________ */
case 'setppbot': {

if (!resbot_.superOwner) return reply(mess.superOwner)
if (!isImage) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
var medis = await dikzzydev.downloadAndSaveMediaMessage(quoted_, 'ppbot.jpeg')

var memeg = await dikzzydev.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`_Berhasil, Foto Profil Bot Telah Di Ganti_`)
}
break

/* ________________「 SETPPGC 」________________ */
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return reply(mess.group)
if (!resbot_.isAdmins) return reply(mess.admin)
if (!isImage) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await dikzzydev.downloadAndSaveMediaMessage(quoted_, 'ppgc.jpeg')
    try {
        await dikzzydev.updateProfilePicture(groupMetadata.id, { url: media })
        reply(mess.success)
    }catch(e){
        return reply('_Gagal_')
    }
}
break


/* ________________「 AFK 」________________ */
case 'afk': {
    if (resbot_.isBan) return reply(mess.ban)
    let alasan_afk = `*Alasan* ${global.smg_chat[sender].chat}`;
    if (!global.smg_chat[sender].chat){
        alasan_afk = '*Tiba Tiba AFK*';
    }
    db_afk[sender] = { last_online: Date.now(), alasan: alasan_afk.trim() };
    fs.writeFileSync('./Storage/db/afk.json', JSON.stringify(db_afk))
    return reply(`💤 Yahh, Kak *${pushname}*... Telah AFK\n\n ❏  ${alasan_afk.trim()}`)
}
break

/* ________________「 LISTONLINE 」________________ */
case 'listonline':
if (resbot_.isBan) return reply(mess.ban)
if (!m.isGroup) return reply(mess.group)
if (!resbot_.isAdmins) return reply(mess.admin)

    let anggotaDenganAdmin = [];
try {
    let teks = ''
    let status_online = ''

    for (let mem of participants) {
        
        if (mem.admin != null) {
            let anggota = {
                id: mem.id
                };
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                anggotaDenganAdmin.push(anggota);
        }
    }
    dikzzydev.sendMessage(m.chat, { text: teks, mentions: anggotaDenganAdmin.map(a => a.id) }, { quoted:qdoc })
} catch (e) {
    console.log(e)
}
break

/* ________________「 LISTADMIN 」________________ */
case 'listadmin':
if (resbot_.isBan) return reply(mess.ban)
    if (!m.isGroup) return reply(mess.group)
        if (!resbot_.isAdmins) return reply(mess.admin)
    try {
            let teks = ''
            for (let mem of participants) {
                if (mem.admin != null) {
                        teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
            }
            dikzzydev.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:qdoc })
        } catch (e) {
}
break

/* ________________「 LISTMEMBER 」________________ */
case 'listmember':
if (resbot_.isBan) return reply(mess.ban)
    if (!m.isGroup) return reply(mess.group)
        if (!resbot_.isAdmins) return reply(mess.admin)
    try {
            let teks = ''
            for (let mem of participants) {
                if (mem.admin == null) {
                        teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
            }
            dikzzydev.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:qdoc })
        } catch (e) {
}
break

/* ________________「 LISTALLUSER 」________________ */
case 'listalluser':
if (resbot_.isBan) return reply(mess.ban)
    if (!m.isGroup) return reply(mess.group)
        if (!resbot_.isAdmins) return reply(mess.admin)
    try {
            let teks = ''
            for (let mem of participants) {
                        teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
            dikzzydev.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:qdoc })
        } catch (e) {
}
break


/* ________________「 SETBIO 」________________ */
case 'setbio':
    if (!resbot_.superOwner) return reply(mess.superOwner)
    if (!global.smg_chat[sender].chat) return reply('Teksnya?')
    dikzzydev.updateProfileStatus(`${global.smg_chat[sender].chat}`)
    reply(`_Sukses mengganti bio ke *${global.smg_chat[sender].chat}*_`)
break

/* ________________「 SETNAME 」________________ */
case 'setname':
    if (!resbot_.superOwner) return reply(mess.superOwner)
    if (!global.smg_chat[sender].chat) return reply('Teksnya?')
    dikzzydev.updateProfileName(global.smg_chat[sender].chat)
    reply(`_Sukses mengganti nama ke *${global.smg_chat[sender].chat}*_`)
break

/* ________________「 MUTE 」________________ */
case 'mute':
        if (!resbot_.isAdmins) return reply(mess.admin)
        if (!m.isGroup) return reply(mess.group)
        if (resbot_.isMuted) return reply(`udah mute`)
        db_mute.push(from)
        fs.writeFileSync('./Storage/db/mute.json', JSON.stringify(db_mute))
        reply(singlemess.mute)
    break

/* ________________「 VERSION 」________________ */
case 'version': {
    return reply(`_*Name Script*_ : _Furina Bot AI_ \n_*Version Script :*_ ${config.resbot_version}`);
    }
    break;

/* ________________「 PING 」________________ */
case 'ping':
    if (resbot_.isBan) return reply(mess.ban);
    let domain = 'https://www.google.com';
    if (global.smg_chat[sender].chat) {
        domain = global.smg_chat[sender].chat;
    }
    if (!domain.startsWith('http://') && !domain.startsWith('https://')) {
        domain = 'https://' + domain;
    }
    const startTime = process.hrtime();
    axios.get(domain)
        .then(response => {
            const endTime = process.hrtime(startTime);
            const kecepatanResponMs = (endTime[0] * 1e9 + endTime[1]) / 1e6; // Mengambil waktu respons dalam milidetik
            const kecepatanResponS = kecepatanResponMs / 1000; // Mengubah waktu respons menjadi detik

            reply(`⟡ _Response Time :_ ${kecepatanResponS.toFixed(6)} s
⟡ _Ping :_ ${domain}
`);
        })
        .catch(error => {
            const endTime = process.hrtime(startTime);
            const kecepatanResponMs = (endTime[0] * 1e9 + endTime[1]) / 1e6; // Mengambil waktu respons dalam milidetik
            const kecepatanResponS = kecepatanResponMs / 1000; // Mengubah waktu respons menjadi detik

            if (error.response) {
                reply(`Error 2: ${error.message}\nResponse status: ${error.response.status}\nSpeed: ${kecepatanResponS.toFixed(6)} s`);
            } else {
                reply(`Error 3: ${error.message}\nSpeed: ${kecepatanResponS.toFixed(6)} s`);
            }
        });

    break;

/* ________________「 UPTIME 」________________ */
case 'uptime':
    if (resbot_.isBan) return reply(mess.ban)
    reply(formatUptime(os.uptime()) )
break

/* ________________「 INFOSYSTEM 」________________ */
case 'infosystem':
if (!resbot_.isOwner) return reply(mess.owner)
try {
const totalMemoryGB = Math.round(os.totalmem() / (1024 * 1024 * 1024));
const freeMemoryGB  = Math.round(os.freemem() / (1024 * 1024 * 1024));
const usedMemory    = Math.round(process.memoryUsage().rss / (1024 * 1024)); // dalam MB
const cpucore       = os.cpus().length


let infosystem = `╭────「 *SYSTEM INFORMATION* 」
│
│✦ Tᴏᴛᴀʟ ᴍᴇᴍᴏʀʏ--> *${totalMemoryGB} GB*
│✦ Fʀᴇᴇ ᴍᴇᴍᴏʀʏ--> *${freeMemoryGB} GB*
│✦ CPU Cᴏʀᴇ--> *${cpucore}*
│✦ Uꜱᴅ ᴍᴇᴍᴏʀʏ--> *${usedMemory} MB*
│✦ Nᴏᴅᴇ ᴊꜱ ᴠᴇʀꜱɪᴏɴ--> *${process.version}*
│✦ Pʟᴀᴛꜰᴏʀᴍ--> *${os.platform()}*
│✦ Uptime--> *${formatUptime(os.uptime() )}*
│
╰────────────────────────`
reply(infosystem)

// infosystem = '```'+infosystem+'```'



} catch(e){
    console.log(e)
}


break






/* ===============| MENU INFORMATION |===================*/


/* ________________「 INFOGEMPA 」________________ */
case 'gempa' :
case 'infogempa':{
let tod = await fetchJson(`${global.apikey}/api/information/gempadirasakan?apikey=${apikey.acak}`)

var capt = `_*Info Gempa*_

*• Tanggal :* ${tod.data[0].Tanggal}
*• Wilayah :* ${tod.data[0].Wilayah}
*• DateTime :* ${tod.data[0].DateTime}
*• Lintang :* ${tod.data[0].Lintang}
*• Bujur :* ${tod.data[0].Bujur}
*• Magnitude :* ${tod.data[0].Magnitude}
*• Dirasakan :* ${tod.data[0].Dirasakan}
*• Kedalaman :* ${tod.data[0].Kedalaman}

*NOTE : Informasi Berdasarkan Data BMKG Indonesia*`
reply(capt)
}

break

/* ________________「 ARTINAMA 」________________ */
case 'artinama': {
if (resbot_.isBan) return reply(mess.ban);

if (!global.smg_chat[sender].chat) return reply(`_Contoh:  ${prefix + command} Melinda_`);
try {
    let response = await fetchJson(`${global.apikey}/api/primbon/artinama?apikey=${apikey.acak}&text=${global.smg_chat[sender].chat}`);
    if (response.data) {
         dikzzydev.sendText(from, `⭔ *Nama :* ${global.smg_chat[sender].chat}\n⭔ *Arti :* ${response.data}`, m);
    }else{
        throw new Error('Invalid response data');
    }

} catch (error) {
    console.log(`${chalk.redBright('['+jammenit+']')} ${chalk.redBright.bold('FAILED : '+error )}`)
    return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
}
break;
}
/* ________________「 ARTIMIMPI 」________________ */
case 'artimimpi': {
if (resbot_.isBan) return reply(mess.ban);

if (!global.smg_chat[sender].chat) return reply(`_Contoh:  ${prefix + command} Melinda_`);

try {
    let response = await fetchJson(`${global.apikey}/api/primbon/tafsirmimpi?apikey=${apikey.acak}&text=${global.smg_chat[sender].chat}`);
    if (response.data) {
         dikzzydev.sendText(from, `⭔ *Nama :* ${global.smg_chat[sender].chat}\n⭔ *Arti :* ${response.data}`, m);
    }else{
        throw new Error('Invalid response data');
    }

} catch (error) {
    console.log(`${chalk.redBright('['+jammenit+']')} ${chalk.redBright.bold('FAILED : '+error )}`)
    return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
}
break;
}

/* ________________「 RAMALANJODOH 」________________ */
case 'ramalanjodoh': {
if (resbot_.isBan) return reply(mess.ban);
const [nama, tgl, nama2, tgl2] = global.smg_chat[sender].chat.split('|').map(item => item.trim());
if (!nama || !tgl || !nama2 || !tgl2) {
    return reply(`_Contoh: ${prefix + command} Melinda | 26-07-2001 | Budi | 14-07-2000_`);
}
    if (tgl.length < 10 || tgl2.length < 10) {
        return reply(`_Contoh: ${prefix + command} Melinda | 26-07-2001 | Budi | 14-07-2000_`);
    }
try {
    const response = await fetchJson(`${global.apikey}/api/primbon/ramalanjodoh?apikey=${apikey.acak}&tgl=${tgl}&name=${nama}&name2=${nama2}&tgl2=${tgl2}`);

    if (response.data) {
    dikzzydev.sendText(from, response.data, m);
    }else {
    throw new Error('Data respons tidak valid');
    }
} catch (error) {
    console.log(`${chalk.redBright('[' + jammenit + ']')} ${chalk.redBright.bold('GAGAL : ' + error)}`);
    return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
}
break;
}


/* ________________「 PASANGAN 」________________ */
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (resbot_.isBan) return reply(mess.ban)
 if (args.length == 0) return reply(`Contoh:  ${prefix + command} Budi|Putri`)
 if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} Budi|Putri`)
 let [nama1, nama2] = global.smg_chat[sender].chat.split(`|`)
 let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendImage(from,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break


/* ________________「 SIFATUSAHA 」________________ */
case 'sifatusaha': {
if (resbot_.isBan) return reply(mess.ban)
 if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix+ command} 28, 12, 2021`)
 let [tgl, bln, thn] = global.smg_chat[sender].chat.split(`,`)
 let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break


/* ________________「 PEKERJAAN 」________________ */
case 'pekerjaan': case 'kerja': {
if (resbot_.isBan) return reply(mess.ban)
if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = global.smg_chat[sender].chat.split(`,`)
 let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendText(from, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

/* ________________「 NASIB 」________________ */
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (resbot_.isBan) return reply(mess.ban)
 if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = global.smg_chat[sender].chat.split(`,`)
 let anu = await primbon.ramalan_nasib(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break

/* ________________「 PENYAKIT 」________________ */
case 'potensipenyakit': case 'penyakit': {
if (resbot_.isBan) return reply(mess.ban)
 if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = global.smg_chat[sender].chat.split(`,`)
 let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendText(from, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break


/* ________________「 ARTITAROT 」________________ */
case 'artitarot': case 'tarot': {
if (resbot_.isBan) return reply(mess.ban)
 if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = global.smg_chat[sender].chat.trim().split(`,`)
 let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendImage(from, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

/* ________________「 FENGSHUI 」________________ */
case 'fengshui': {
if (resbot_.isBan) return reply(mess.ban)
if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} Autores, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
 let [nama, gender, tahun] = global.smg_chat[sender].chat.trim().split(`,`)
 let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break

/* ________________「 HARIBAIK 」________________ */
case 'haribaik': {
if (resbot_.isBan) return reply(mess.ban)
 if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = global.smg_chat[sender].chat.trim().split(`,`)
 let anu = await primbon.petung_hari_baik(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

/* ________________「 HARISANGAR 」________________ */
case 'harisangar': case 'taliwangke': {
if (resbot_.isBan) return reply(mess.ban)
 if (!global.smg_chat[sender].chat) return reply (`Contoh:  ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = global.smg_chat[sender].chat.trim().split(`,`)
 let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendText(from, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

/* ________________「 HARISIAL 」________________ */
case 'harinaas': case 'harisial': {
if (resbot_.isBan) return reply(mess.ban)
 if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = global.smg_chat[sender].chat.trim().split(`,`)
 let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break

/* ________________「 NAGAHARI 」________________ */
case 'nagahari': case 'harinaga': {
if (resbot_.isBan) return reply(mess.ban)
 if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = global.smg_chat[sender].chat.trim().split(`,`)
 let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

/* ________________「 ARAHREZEKI 」________________ */
case 'arahrejeki': case 'arahrezeki': {
if (resbot_.isBan) return reply(mess.ban)
 if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = global.smg_chat[sender].chat.trim().split(`,`)
 let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendText(from, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

/* ________________「 PERUNTUNGAN 」________________ */
case 'peruntungan': {
if (resbot_.isBan) return reply(mess.ban)

 if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} Autores, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
 let [nama, tgl, bln, thn, untuk] = global.smg_chat[sender].chat.trim().split(`,`)
 let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

/* ________________「 WETON 」________________ */
case 'weton': case 'wetonjawa': {
if (resbot_.isBan) return reply(mess.ban)
 if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} 7, 7, 2005`)
 let [tgl, bln, thn] = global.smg_chat[sender].chat.trim().split(`,`)
 let anu = await primbon.weton_jawa(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendText(from, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break


/* ________________「 SIFAT 」________________ */
case 'sifat': case 'karakter': {
if (resbot_.isBan) return reply(mess.ban)
 if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} Autores, 7, 7, 2005`)
 let [nama, tgl, bln, thn] = global.smg_chat[sender].chat.trim().split(`,`)
 let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break

/* ________________「 KEBERUNTUNGAN 」________________ */
case 'keberuntungan': {
if (resbot_.isBan) return reply(mess.ban)
 if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} Autores, 7, 7, 2005`)
 let [nama, tgl, bln, thn] = global.smg_chat[sender].chat.trim().split(`,`)
 let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendText(from, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break

/* ________________「 MEMANCING 」________________ */
case 'memancing': {
if (resbot_.isBan) return reply(mess.ban)
 if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} 12, 1, 2022`)
 let [tgl, bln, thn] = global.smg_chat[sender].chat.trim().split(`,`)
 let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
 if (anu.status == false) return reply(anu.message)
 dikzzydev.sendText(from, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break

/* ________________「 MASASUBUR 」________________ */
case 'masasubur': {
if (resbot_.isBan) return reply(mess.ban)
 if (!global.smg_chat[sender].chat) return reply(`Contoh:  ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
 let [tgl, bln, thn, siklus] = global.smg_chat[sender].chat.trim().split(`,`)
 let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
 if (anu.status == false) return reply(anu.message)
    let resultmasasubur = anu.message.result
resultmasasubur = resultmasasubur.replace(/\s+/g, ' ');
resultmasasubur = resultmasasubur.replace('(adsbygoogle = window.adsbygoogle || []).push({});', '');
resultmasasubur = resultmasasubur.replace('Tgl', '\nTgl');
 dikzzydev.sendText(from, `⭔ *Hasil :* ${resultmasasubur}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break


































/* ===============| MENU ISLAMIC |===================*/

/* ________________「 DOA 」________________ */
case 'doa':
    let endpoing_doa = '';
    if (global.smg_chat[sender].chat) {
        if (global.smg_chat[sender].chat.length > 20) return
        // cari doa
        endpoing_doa = `${global.apikey}/api/doa?apikey=${apikey.acak}&q=${global.smg_chat[sender].chat}`
    }else{
        // doa acak
        endpoing_doa = `${global.apikey}/api/doa/random?apikey=${apikey.acak}`
    }
try {
let niatsholat_result = await fetchJson(endpoing_doa)
let msg_niatsholat = `*${niatsholat_result.data[0].doa}*

${niatsholat_result.data[0].ayat}
${niatsholat_result.data[0].latin}

${niatsholat_result.data[0].artinya}
`
return reply(msg_niatsholat)
} catch(e){
    return reply(`_Doa *${global.smg_chat[sender].chat.trim()}* Tidak Ada,_ \n_Coba gunakan kata kunci yang lebih pendek_ \n\n_Misalnya *${prefix + command} tidur*_`);
}

break


/* ________________「 ZIKIR 」________________ */
case 'zikir':{
    try {
    let zikir = await fetchJson(`${global.apikey}/api/random/zikir?apikey=${apikey.acak}`)
    await reply(zikir.data)
    } catch(e){
        console.log(e)
        
    }
}
break

/* ________________「 HADITS 」________________ */
case 'hadits':
case 'hadist':
case 'hadis':
try {
let asmaul_result = await fetchJson(`${global.apikey}/api/hadits/?apikey=${apikey.acak}`)
let msg_asmaul = `*${asmaul_result.data.judul}*

${asmaul_result.data.arab}

${asmaul_result.data.indo}
`
reply(msg_asmaul)
} catch(e){
    console.log(e)
    return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
}

break


/* ________________「 LISTSURAH 」________________ */
case 'listsurah':

reply(`_*Surah dalam Al-Qur'an*_

1. Al Fatihah (Pembuka): 7 Ayat

2. Al Baqarah (Sapi Betina): 286 Ayat

3. Ali Imran (Keluarga Imran): 200 Ayat

4. An Nisa (Wanita): 176 Ayat

5. Al Ma'idah (Jamuan): 120 Ayat

6. Al An'am (Hewan Ternak): 165 Ayat

7. Al-A'raf (Tempat yang Tertinggi): 206 Ayat

8. Al-Anfal (Harta Rampasan Perang): 75 Ayat

9. At-Taubah (Pengampunan): 129 Ayat

10. Yunus (Nabi Yunus): 109 Ayat

11. Hud (Nabi Hud): 123 Ayat

12. Yusuf (Nabi Yusuf): 111 Ayat

13. Ar-Ra'd (Guruh): 43 Ayat

14. Ibrahim (Nabi Ibrahim): 52 Ayat

15. Al-Hijr (Gunung Al Hijr): 99 Ayat

16. An-Nahl (Lebah): 128 Ayat

17. Al-Isra' (Perjalanan Malam): 111 Ayat

18. Al-Kahf (Penghuni-penghuni Gua): 110 Ayat

19. Maryam (Maryam): 98 Ayat

20. Ta Ha (Ta Ha): 135 Ayat

21. Al-Anbiya (Nabi-nabi): 112 Ayat

22. Al-Hajj (Haji): 78 Ayat

23. Al-Mu'minun (Orang-orang mukmin): 118 Ayat

24. An-Nur (Cahaya): 64 Ayat

25. Al-Furqan (Pembeda): 77 Ayat

26. Asy-Syu'ara' (Penyair): 227 Ayat

27. An-Naml (Semut): 93 Ayat

28. Al-Qasas (Kisah-kisah): 88 Ayat

29. Al-'Ankabut (Laba-laba): 69 Ayat

30. Ar-Rum (Bangsa Romawi): 60 Ayat

31. Luqman (Keluarga Luqman): 34 Ayat

32. As-Sajdah (Sajdah): 30 Ayat

33. Al-Ahzab (Golongan-golongan yang Bersekutu): 73 Ayat

34. Saba' (Kaum Saba'): 54 Ayat

35. Fatir (Pencipta): 45 Ayat

36. Ya Sin (Yasin): 83 Ayat

37. As-Saffat (Barisan-barisan): 182 Ayat

38. Sad (Sad): 88 Ayat

39. Az-Zumar (Rombongan): 75 Ayat

40. Ghafir (Yang Mengampuni): 85 Ayat

41. Fussilat (Yang Dijelaskan): 54 Ayat

42. Asy-Syura (Musyawarah): 53 Ayat

43. Az-Zukhruf (Perhiasan): 89 Ayat

44. Ad-Dukhan (Kabut): 59 Ayat

45. Al-Jasiyah (Yang Bertekuk Lutut): 37 Ayat

46. Al-Ahqaf (Bukit-bukit Pasir): 45 Ayat

47. Muhammad (Nabi Muhammad): 38 Ayat

48. Al-Fath (Kemenangan): 29 Ayat

49. Al-Hujurat (Kamar-kamar): 18 Ayat

50. Qaf (Qaf): 45 Ayat

51. Az-Zariyat (Angin yang Menerbangkan): 60 Ayat

52. At-Tur (Bukit): 49 Ayat

53. An-Najm (Bintang): 62 Ayat

54. Al-Qamar (Bulan): 55 Ayat

55. Ar-Rahman (Yang Maha Pemurah): 78 Ayat

56. Al-Waqi'ah (Hari Kiamat): 96 Ayat

57. Al-Hadid (Besi): 29 Ayat

58. Al-Mujadilah (Gugatan): 22 Ayat

59. Al-Hasyr (Pengusiran): 24 Ayat

60. Al-Mumtahanah (Wanita yang Diuji): 13 Ayat

61. As-Saff (Barisan): 14 Ayat

62. Al-Jumu'ah (Hari Jumat): 11 Ayat

63. Al-Munafiqun (Orang-orang yang Munafik): 11 Ayat

64. At-Tagabun (Hari Dinampakkan Kesalahan-kesalahan): 18 Ayat

65. At-Talaq (Talak): 12 Ayat

66. At Tahrim (Pengharaman): 12 Ayat

67. Al-Mulk (Kerajaan): 30 Ayat

68. Al-Qalam (Pena): 52 Ayat

69. Al-Haqqah (Hari Kiamat): 52 Ayat

70. Al-Ma'arij (Tempat Naik): 44 Ayat

71. Nuh (Nabi Nuh): 28 Ayat

72. Al-Jinn (Jin): 28 Ayat

73. Al-Muzzammil (Orang yang Berkelumun): 20 Ayat

74. Al-Muddassir (Orang yang Berselimut): 56 Ayat

75. Al-Qiyamah (Kiamat): 40 Ayat

76. Al-Insan (Manusia): 31 Ayat

77. Al-Mursalat (Malaikat-malaikat yang Diutus): 50 Ayat

78. An-Naba' (Berita Besar): 40 Ayat

79. An-Nazi'at (Yang Mencabut dengan Keras): 46 Ayat

80. 'Abasa (Bermuka Masam): 42 Ayat

81. At-Takwir (Menggulung): 29 Ayat

82. Al-Infitar (Terbelah): 19 Ayat

83. Al-Mutaffifin (Orang-orang yang Curang): 36 Ayat

84. Al-Insyiqaq (Terbelah): 25 Ayat

85. Al-Buruj (Gugusan Bintang): 22 Ayat

86. At-Tariq (Yang Datang di Malam Hari): 17 Ayat

87. Al-A'la (Maha Tinggi): 19 Ayat

88. Al-Gasyiyah (Hari Pembalasan): 26 Ayat

89. Al-Fajr (Fajar): 30 Ayat

90. Al-Balad (Negeri): 20 Ayat

91. Asy-Syams (Matahari): 15 Ayat

92. Al-Lail (Malam): 21 Ayat

93. Ad-Duha (Duha): 11 Ayat

94. Al-Insyirah (Melapangkan): 8 Ayat

95. At-Tin (Buah Tin): 8 Ayat

96. Al-'Alaq (Segumpal Darah): 19 Ayat

97. Al-Qadr (Kemuliaan): 5 Ayat

98. Al-Bayyinah (Pembuktian): 8 Ayat

99. Az-Zalzalah (Kegoncangan): 8 Ayat

100. Al-'Adiyat (Kuda Perang yang Berlari Kencang): 11 Ayat

101. Al-Qari'ah (Hari Kiamat yang Menggetarkan): 11 Ayat

102. At-Takasur (Bermegah-megahan): 8 Ayat

103. Al-'Asr (Masa): 3 Ayat

104. Al-Humazah (Pengumpat): 9 Ayat

105. Al-Fil (Gajah): 5 Ayat

106. Quraisy (Suku Quraisy): 4 Ayat

107. Al-Ma'un (Bantuan): 7 Ayat

108. Al-Kautsar (Nikmat yang Berlimpah): 3 Ayat

109. Al-Kafirun (Orang-orang Kafir): 6 Ayat

110. An-Nasr (Pertolongan): 3 Ayat

111. Al-Lahab (Gejolak Api): 5 Ayat

112. Al-Ikhlas (Ikhlas): 4 Ayat

113. Al-Falaq (Waktu Fajar): 5 Ayat

114. An-Nas (Manusia): 6 Ayat
`)

break


/* ________________「 SURAH 」________________ */
case 'surah':
  if (!global.smg_chat[sender].chat) return reply(`_Contoh Penggunaan: *surah 1*_`);


const surahData = [
  "Al-Fatihah","Al-Baqarah","Ali Imran","An Nisa","Al-Ma'idah",
  "Al-An'am","Al-A'raf","Al-Anfal","At-Taubah","Yunus",
  "Hud","Yusuf","Ar-Ra'd","Ibrahim","Al-Hijr",
  "An-Nahl","Al-Isra","Al-Kahf","Maryam","Ta Ha",
  "Al-Anbiya","Al-Hajj","Al-Mu'minun","An-Nur","Al-Furqan",
  "Ash-Shu'ara","An-Naml","Al-Qasas","Al-'Ankabut","Ar-Rum",
  "Luqman","As-Sajda","Al-Ahzab","Saba","Fatir",
  "Ya Sin","As-Saffat","Sad","Az-Zumar","Ghafir",
  "Fussilat","Ash-Shura","Az-Zukhruf","Ad-Dukhan","Al-Jathiya",
  "Al-Ahqaf","Muhammad","Al-Fath","Al-Hujurat","Qaf",
  "Adh-Dhariyat","At-Tur","An-Najm","Al-Qamar","Ar-Rahman",
  "Al-Waqi'a","Al-Hadid","Al-Mujadila","Al-Hashr","Al-Mumtahina",
  "As-Saff","Al-Jumu'a","Al-Munafiqun","At-Taghabun","At-Talaq",
  "At-Tahrim","Al-Mulk","Al-Qalam","Al-Haaqqa","Al-Ma'arij",
  "Nuh","Al-Jinn","Al-Muzzammil","Al-Muddathir","Al-Qiyama",
  "Al-Insan","Al-Mursalat","An-Naba","An-Nazi'at","Abasa",
  "At-Takwir","Al-Infitar","Al-Mutaffifin","Al-Inshiqaq","Al-Buruj",
  "At-Tariq","Al-Ala","Al-Ghashiya","Al-Fajr","Al-Balad",
  "Ash-Shams","Al-Lail","Adh-Dhuha","Ash-Sharh","At-Tin",
  "Al-Alaq","Al-Qadr","Al-Bayyina","Az-Zalzala","Al-Adiyat",
  "Al-Qaria","At-Takathur","Al-Asr","Al-Humazah","Al-Fil",
  "Quraish","Al-Ma'un","Al-Kawthar","Al-Kafirun","An-Nasr",
  "Al-Masad","Al-Ikhlas","Al-Falaq","An-Nas"
];


let [no_surah, no_ayat] = global.smg_chat[sender].chat.trim().includes('ayat') ? global.smg_chat[sender].chat.trim().split('ayat') : [q];

if (!no_surah) return reply(`_Contoh Penggunaan: *surah 1*_ \n\n_Atau Contoh Penggunaan: *surah 1*_`);


no_surah = no_surah.toLowerCase().trim();
no_ayat = no_ayat ? no_ayat.toLowerCase().trim() : ''

console.log(no_surah)
const position_surah = surahData.findIndex(surah => surah.toLowerCase() === no_surah);

if (position_surah !== -1) {
    no_surah = position_surah + 1
}


  const query_surah = `${no_surah}/${no_ayat}`;
 await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
  try {


  if (!global.smg_chat[sender].chat.trim().includes('ayat')) {
   no_surah = no_surah.toString().padStart(3, '0');
     await dikzzydev.sendMessage(m.chat, { audio: { url: `https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/${no_surah}.mp3` }, fileName: `surah.mp3`, mimetype: 'audio/mp4' });
     return
  }



      const surah_result = `${global.apikey}/islamic/quran?apikey=${apikey.acak}&query=${query_surah}`

  await dikzzydev.sendMessage(m.chat, { audio: { url: surah_result }, fileName: `surah.mp3`, mimetype: 'audio/mp4' });

}catch(e){
    console.log(e)
    return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
}

  break;

/* ________________「 JADWALSHOLAT 」________________ */
case 'jadwalsholat':
{
if (resbot_.isBan) return reply(mess.ban)
if (!global.smg_chat[sender].chat) return reply(`_Masukkan Nama kota Contoh *${prefix + command} Jakarta*_`)

try{

await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

let result_jadwalsholat = await fetchJson(`${global.apikey}/api/jadwalsholat/?apikey=${apikey.acak}&kota=${global.smg_chat[sender].chat}`)

if (!result_jadwalsholat.data) {
    throw new Error('Invalid response data');
}


await reply(`_Jadwal Sholat Area *${global.smg_chat[sender].chat}*_

_${result_jadwalsholat.data.jadwal.tanggal}_

[ ${result_jadwalsholat.data.jadwal.imsak} ] Imsyak
[ ${result_jadwalsholat.data.jadwal.subuh} ] *Subuh*
[ ${result_jadwalsholat.data.jadwal.dhuha} ] Dhuha
[ ${result_jadwalsholat.data.jadwal.dzuhur} ] *Dzuhur*
[ ${result_jadwalsholat.data.jadwal.ashar} ] *Ashr*
[ ${result_jadwalsholat.data.jadwal.maghrib} ] *Maghrib*
[ ${result_jadwalsholat.data.jadwal.isya} ] *Isya*

`)
} catch (err){
  reply(`_Tidak Ada Hasil Untuk Kota *${global.smg_chat[sender].chat}*_`)
}
}
break


































/* ===============| MENU IMAGE |===================*/


/* ________________「 ROTATE 」________________ */
case 'rotate':{
if (!isImage) return reply(`_Balas gambar dengan ${prefix + command}_`);
if (!global.smg_chat[sender].chat) return reply('_Masukkan Rotate 1 - 360_')
try {
const inputImagePath = await dikzzydev.downloadAndSaveMediaMessage(quoted_,uniqueId);
const outputImagePath_rotate = `tmp_${uniqueId}.jpg`;
const rotationAngle = parseInt(global.smg_chat[sender].chat);
if (isNaN(rotationAngle) || rotationAngle < 1 || rotationAngle > 360) {
    return reply('_Masukkan Rotate 1 - 360_');
}

sharp(inputImagePath)
.rotate(rotationAngle)
.toFile(outputImagePath_rotate, (err, info) => {
    if (err) {
    console.error(err);
    } else {
    dikzzydev.sendMessage(m.chat, { image: fs.readFileSync(outputImagePath_rotate), caption: mess.success }, { quoted: qdoc });
    fs.unlinkSync(inputImagePath);
    }
});

} catch(e){
    console.log(e)
}



}
break

/* ________________「 TAJAM 」________________ */
case 'tajam': {
    if (!isImage) return reply(`_Balas gambar dengan ${prefix + command}_`);
    if (!global.smg_chat[sender].chat) return reply('_Masukkan nilai ketajaman antara 1 - 100_');
    try {
    let inputImagePath_tajam = await dikzzydev.downloadAndSaveMediaMessage(quoted_,uniqueId);
    let outputImagePath_tajam =  `tmp_${uniqueId}.jpg`;
    let sharpeningLevel = parseFloat(global.smg_chat[sender].chat);
    if (sharpeningLevel < 1 || sharpeningLevel > 100 || isNaN(sharpeningLevel)) return reply('_Masukkan nilai ketajaman antara 1 - 100_');

    sharp(inputImagePath_tajam)
        .sharpen(sharpeningLevel)
        .toFile(outputImagePath_tajam, (err, info) => {
        if (err) {
            console.error(err);
            return reply('_Terjadi kesalahan saat memproses gambar_');
        } else {
        dikzzydev.sendMessage(m.chat, { image: fs.readFileSync(outputImagePath_tajam), caption: 'Gambar telah dipertajam' }, { quoted: qdoc });
            fs.unlinkSync(inputImagePath_tajam);
        }
        });
    } catch (e) {
    reply('_Terjadi kesalahan saat memproses gambar_');
    }
    break;
}

/* ________________「 FLIP 」________________ */
case 'flip': {
  if (!isImage) return reply(`_Balas gambar dengan ${prefix + command}_`);
  if (!global.smg_chat[sender].chat) return reply('Pilih "x" atau "y"');

  const flipDirection = global.smg_chat[sender].chat.trim().toLowerCase().trim();
  if (flipDirection !== 'x' && flipDirection !== 'y') return reply('Pilih "x" atau "y"');

  try {
    let inputImagePath = await dikzzydev.downloadAndSaveMediaMessage(quoted_,uniqueId);
    let outputImagePath_flip = `tmp_${uniqueId}.jpg`;

    // Flip the image based on user's choice
    let flipMethod = flipDirection === 'x' ? 'h' : 'v';
    sharp(inputImagePath)
      .flip(flipMethod === 'h')
      .flop(flipMethod === 'v')
      .toFile(outputImagePath_flip, (err, info) => {
        if (err) {
          console.error(err);
          return reply('_Terjadi kesalahan saat memproses gambar_');
        } else {
          const flipText = flipDirection === 'x' ? 'x' : 'y';
          dikzzydev.sendMessage(m.chat, { image: fs.readFileSync(outputImagePath_flip), caption: `Gambar telah dibalik ${flipText}` }, { quoted: qdoc });
           fs.unlinkSync(inputImagePath);
        }
      });
  } catch (e) {
    console.log(e);
    reply('_Terjadi kesalahan saat memproses gambar_');
  }
  break;
}

/* ________________「 BLUR 」________________ */
case 'blur': {
if (!isImage) return reply(`_Balas gambar dengan ${prefix + command}_`);
if (!global.smg_chat[sender].chat) return reply('Masukkan nilai blur antara 1 - 100');
const blurLevel = parseFloat(global.smg_chat[sender].chat);
if (isNaN(blurLevel) || blurLevel < 1 || blurLevel > 100) return reply('_Masukkan nilai blur antara 1 - 100_');

try {
    let inputImagePath = await dikzzydev.downloadAndSaveMediaMessage(quoted_,uniqueId);
    let outputImagePath_blur = `tmp_${uniqueId}.jpg`;
    sharp(inputImagePath)
    .blur(blurLevel)
    .toFile(outputImagePath_blur, (err, info) => {
        if (err) {
        return reply('_Terjadi kesalahan saat memproses gambar_');
        } else {
        dikzzydev.sendMessage(m.chat, { image: fs.readFileSync(outputImagePath_blur), caption: `Gambar telah diberi efek blur dengan tingkat ${blurLevel}` }, { quoted: qdoc });
        fs.unlinkSync(inputImagePath);
        }
    });
} catch (e) {
    reply('_Terjadi kesalahan saat memproses gambar_');
}
}
break;




/* ________________「 TOIMG 」________________ */
case 'toimage': case 'toimg': {
    if (!isSticker) return reply('Balas sticker dengan toimage')
    if (resbot_.isBan) return reply(mess.ban)
    if (MinLimit(m.sender) === undefined) return;
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
let media = await dikzzydev.downloadAndSaveMediaMessage(quoted_)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply("Gagal")
let buffer = fs.readFileSync(ran)
dikzzydev.sendMessage(from, { image: buffer }, {quoted:qdoc})
fs.unlinkSync(ran)
})
}
break







































/* ===============| MENU MAKER |===================*/

/* ________________「 TTP 」________________ */
case 'ttp':
if (resbot_.isBan) return reply(mess.ban);
if (args.length === 0) return reply(`_Contoh: *${prefix + command} Furina*_`);
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    try {
        ini_txt = args.join(" ")
        const ini_buffer_ttp = await getBuffer(`${global.apikey}/api/maker/ttp?apikey=${apikey.acak}&text=${ini_txt}`)
        if(ini_buffer_ttp){
            await dikzzydev.sendImageAsSticker(from, ini_buffer_ttp, m, { packname: config.packname, author: config.author });
        }
    } catch (e) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
    break;




case 'attp':
    if (!resbot_.isPremium) return reply(mess.premium)
    if (resbot_.isBan) return reply(mess.ban);
    if (args.length === 0) return reply(`_Contoh: *${prefix + command} Furina*_`);
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    try {
        const ini_txt = args.join(" ");
        const ini_buffer_ttp = await getBuffer(`${global.apikey}/api/maker/attp2?apikey=${apikey.acak}&text=${ini_txt}`);
        await dikzzydev.sendMessage(from, { 
            sticker: ini_buffer_ttp, 
            packname: '2', 
            author: '1' 
        }, { quoted });
    } catch (e) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
    break;


/* ________________「 ATTP2 」________________ */
case 'attp2':
        if (!resbot_.isPremium) return reply(mess.premium)
        if (resbot_.isBan) return reply(mess.ban);
        if (args.length === 0) return reply(`_Contoh: *${prefix + command} Furina*_`);
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        try {
            const ini_txt = args.join(" ");
            const ini_buffer_ttp = await getBuffer(`${global.apikey}/api/maker/attp3?apikey=${apikey.acak}&text=${ini_txt}`);
        await dikzzydev.sendMessage(from, { 
            sticker: ini_buffer_ttp, 
            packname: config.packname, 
            author: config.author 
        }, { quoted });

        } catch (e) {
            return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
        }
break;

/* ________________「 STICKER 」________________ */
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (resbot_.isBan) return reply(mess.ban)
    if (isImage || isVideo) {
    let media = await quoted_.download();
    let encmedia;
    if (isImage) {
        encmedia = await dikzzydev.sendImageAsSticker(from, media, m, { packname: config.packname, author: config.author });
    } else if ((quoted_.msg || quoted_).seconds <= 11) {
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        encmedia = await dikzzydev.sendVideoAsSticker(from, media, m, { packname: config.packname, author: config.author });
    } else {
        return reply('Maksimal 10 detik!');
    }
    await fs.unlinkSync(encmedia);
    } else {
      reply(`_Kirim Gambar/Video Dengan Caption *${prefix + command}*_\n\n_*Untuk Video Durasi 1-9 Detik*_`);
    }
}
break


/* ________________「 WM 」________________ */
case 'wm': {
if (resbot_.isBan) return reply(mess.ban)
if (!quoted) return reply(`_Balas Video/Image/Sticker Dengan Caption *${prefix + command}*_`)  
if (resbot_.isBan) return reply(mess.ban);
    if (!global.smg_chat[sender] || !global.smg_chat[sender].chat) {
        return reply('_Contoh: *wm Furina*_\n\n_Contoh 1: wm nama_\n_Contoh 2: wm youtube | creative_')
    }
let teks = `${global.smg_chat[sender].chat}`
const bnnd = global.smg_chat[sender].chat.split("|");
let packname_wm = bnnd[0] || '';
let packname_author = bnnd[1] || '';
const media = await dikzzydev.downloadAndSaveMediaMessage(quoted);
if (isSticker) {
    try {
        let media2 = await quoted.download()
        let encmedia = await dikzzydev.sendImageAsSticker(from, media2, m, { packname: `${packname_wm}`, author: packname_author })
        await fs.unlinkSync(encmedia)
    } catch(e){
            dikzzydev.sendMessage(from, {
    sticker: {
        url: media,
        packname: packname_wm, 
        author: packname_author 
    }
}, { quoted: qdoc });

    }
}
if (isImage) {
    try {
        let buffer
        let buff = Buffer.isBuffer(media) ? media : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(`,`)[1], 'base64') : /^https?:\/\//.test(media) ? await (await getBuffer(media)) : fs.existsSync(media) ? fs.readFileSync(media) : Buffer.alloc(0)
        buffer = await writeExifImg(buff, { packname:packname_wm, author:packname_author })
        await dikzzydev.sendMessage(from, { sticker: {url : buffer}, packname: `${packname_wm}`, author: packname_author }, { quoted:qdoc })

    } catch (e) {
        reply(mess.error)
    }
}
}
break


/* ________________「 SMEME 」________________ */
case 'smeme':{
    if (!global.smg_chat[sender].chat) return reply(`_Masukkan Textnya ?_ \n\nExample _*${prefix + command}* SpongeBob_ `)
    if (!isImage) return reply(`Balas/Kirim Gambar Dengan *${prefix + command}*`);

    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

    const [smemeText1 = '', smemeText2 = ''] = (global.smg_chat[sender].chat || '').split('|');

    try {
            const smemeGet = await dikzzydev.downloadAndSaveMediaMessage(quoted_);

            const response = await uploadFileToApi(smemeGet, "1hour");
            const url_telephSmeme =response.fileUrl; 

            const media =  await smeme(smemeText1,smemeText2, url_telephSmeme)
            encmedia = await dikzzydev.sendImageAsSticker(from, media, m, { packname: config.packname, author: config.author });
            await fs.unlinkSync(encmedia);
    } catch(e){
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break

/* ________________「 WMVIDEO 」________________ */
case 'wmvideo':{
if (resbot_.isBan) return reply(mess.ban)
let teks = `${text}`
try {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
if (/video/.test(mime)) {
let media = await quoted.download()
let encmedia = await dikzzydev.sendVideoAsSticker(from, media, m, { packname: `${teks}`, author: author })
await fs.unlinkSync(encmedia)
} else {
return reply(`_Kirim Gambar/Video Dengan Caption *${prefix + command}*\n\nUntuk Video Durasi 1-9 Detik_`);
}
} catch (e) {
reply(mess.error)
}
}
break


/* ________________「 QC 」________________ */
case 'qc': {

    if (resbot_.isBan) return reply(mess.ban);
    if (!global.smg_chat[sender] || !global.smg_chat[sender].chat) {
        return reply('_Masukkan Teksnya_ \n\n_Contoh : *.qc Hallo*_');
    }

    let ppnyauser;
    try {
        ppnyauser = await dikzzydev.profilePictureUrl(m.sender, 'image');
    } catch (e) {
        ppnyauser = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg';
    }

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    let success = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const apiUrl = `${global.apikey}/api/maker/qc?apikey=${encodeURIComponent(apikey.acak)}&name=${encodeURIComponent(pushname)}&text=${encodeURIComponent(global.smg_chat[sender].chat)}&pp=${encodeURIComponent(ppnyauser)}`;
            const buffer_qc2 = await getBuffer(apiUrl);
            if (!Buffer.isBuffer(buffer_qc2)) {
                throw new TypeError('Response is not a valid Buffer');
            }

            await dikzzydev.sendImageAsSticker(from, buffer_qc2, m, { packname: config.packname, author: config.author });
            success = true;
            break;
        } catch (error) {
            if (attempt === 3) {
                reply('Maaf, terjadi kesalahan dalam menghasilkan sticker setelah 3 kali percobaan\nSilahkan gunakan *.qc2* .');
            } else {
                await sleep(1000);  // Tunggu 1 detik sebelum mencoba lagi
            }
        }
    }
}
break;



/* ________________「 QC 2 」________________ */
case 'qc2': {
    if (resbot_.isBan) return reply(mess.ban);
    if (!global.smg_chat[sender] || !global.smg_chat[sender].chat) {
        return reply('_Masukkan Teksnya_ \n\n_Contoh : *.qc Furina*_');
    }
    let ppnyauser;
    try {
        ppnyauser = await dikzzydev.profilePictureUrl(m.sender, 'image');
    } catch(e) {
        ppnyauser = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg';
    }
    
    try {
        const rest = await quote(global.smg_chat[sender].chat, pushname, ppnyauser);
        await dikzzydev.sendImageAsSticker(from, rest.result, m, { packname: `${config.packname}`, author: `${config.author}`});
    } catch (error) {
        console.error('Error x:', error);
        reply('Maaf, terjadi kesalahan dalam menghasilkan sticker.\nSilahkan gunakan *.qc3 / .qc*');
    }
}
break;

/* ________________「 TOURL API 」________________ */
// case 'tourl2': {
//     if (resbot_.isBan) return reply(mess.ban);
//     if (!isImage) return reply(`_Balas/Kirim Gambar Dengan *${prefix + command}*_`);
//     if (MinLimit(m.sender) === undefined) return;
//     await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
//     let media = await dikzzydev.downloadAndSaveMediaMessage(quoted_);

//     try {
//         const response = await uploadFileToApi(media, apikey.acak)
      
//         if(response.status) {
//             const formater_send = `_*File Uploaded Successfully*_

// _Link_ : ${response.data.url}
// _Expired_ : ${response.data.expired}`
//             reply(formater_send);

//         }
//         await fs.unlinkSync(media)
//     } catch (error) {
//         return reply("Failed to upload image to API");
//     }
// }
// break;

/* ________________「 QCSTICK 」________________ */
case 'qcstick':{
if (resbot_.isBan) return reply(mess.ban)
let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
if (!teks) return reply(`Cara Penggunaan ${prefix}qc teks`)
const text = `${teks}`
const username = await dikzzydev.getName(m.quoted ? m.quoted.sender : m.sender)
const avatar = await dikzzydev.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)

const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": username,
"photo": {
"url": avatar
}
},
"text": text,
"replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const buffer = Buffer.from(res.data.result.image, "base64");
let encmedia = await dikzzydev.sendImageAsSticker(m.chat, buffer, m, { packname: config.packname, 
author: config.author, 
categories: ['🤩', '🎉'],
id: '12345',
quality: 100,
background: 'transparent'})
await fs.unlinkSync(encmedia)
})
}
break 

/* ________________「 TOURL 」________________ */
case 'tourl': {
if (resbot_.isBan) return reply(mess.ban)
if (!isImage) return reply(`_Balas/Kirim Gambar Dengan *${prefix + command}*_`);
if (MinLimit(m.sender) === undefined) return;
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
let media = await dikzzydev.downloadAndSaveMediaMessage(quoted_)

try {
    const response = await uploadFileToApi(media, "6months");
    return reply(`${mess.success}\n\n_Link_  : ${response.fileUrl}\n\n_Expired_ : ${response.expired}`)
} catch (error) {
    return reply(mess.error)
} finally  {
    await fs.unlinkSync(media)
}

}
break

/* ________________「 EMOJIMIX 」________________ */
case 'emojimix': { 
if (resbot_.isBan) return reply(mess.ban)

let hitungtext = args.join("");
if (!hitungtext.indexOf('+')) return reply(`_*Contoh:*_ ${prefix + command} 😅+🤔`)
if (args.length == 0) return reply(`_*Contoh:*_ ${prefix + command} 😅+🤔`)

let [emoji1, emoji2] = text.split`+`
if (!emoji1) return reply(`_*Contoh:*_ ${prefix + command} 😅+🤔`)
if (!emoji2) return reply(`_*Contoh:*_ ${prefix + command} 😅+🤔`)
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });


try {
    let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1.trim())}_${encodeURIComponent(emoji2.trim())}`);
    console.log(anu);
    console.log('-----------------------')
    if (anu && anu.results) {
        if (!anu.results || anu.results.length === 0) {
            throw new Error("No valid results found from the API.");
        }
        
        for (let res of anu.results) {
            let encmedia = await dikzzydev.sendImageAsSticker(from, res.url, m, { packname: config.packname, author: config.author, categories: res.tags });
            await fs.unlinkSync(encmedia);
        }
    } else {
        throw new Error("No results found or invalid response from API.");
    }
} catch (error) {
   return reply(`_Tidak Dapat Menggabungkan Emoji_ ${emoji1} _dan_ ${emoji2}`)
}




}
break

























/* ===============| MENU STORE |===================*/


/* ________________「 DONE 」________________ */
case 'done':
if (!resbot_.isAdmins) return reply(mess.admin)
try {
    let cekm = m.quoted.sender
}catch{
    return reply('_Balas Sebuah Pesanan_')
}
if (!m.quoted.text) return reply('Balas Sebuah Pesan Text')
tesk_proses = `_*TRANSAKSI BERHASIL「 ✅ 」*_
    
✅ JAM    : ${jammenit}
📝 Catatan : *${quoted.text}*

@${quoted.sender.split("@")[0]} _Terima Kasih Sudah Order_`
dikzzydev.sendMessage(from, { text : tesk_proses , mentions: [quoted.sender]}, {quoted:qdoc})
break

/* ________________「 PROSES 」________________ */
case 'proses':
if (!resbot_.isAdmins) return reply(mess.admin)
try {
    let cekm = m.quoted.sender
}catch{
    return reply('Balas Sebuah Pesanan Berupa Text')
}
if (!m.quoted.text) return reply('Balas Sebuah Pesan Text')
tesk_proses = `_*TRANSAKSI PENDING ⏳ 」*_
    
✅ JAM    : ${jammenit}
📝 Catatan : *${quoted.text}*`
dikzzydev.sendMessage(from, { text : tesk_proses , mentions: [quoted.sender]}, {quoted:qdoc})
break




































/* ===============| MENU OWNER |===================*/


/* ________________「 GCTAG 」________________ */
case 'gctag':
if (!resbot_.isOwner) return reply(mess.owner)
if (m.isGroup) return reply(mess.private)
if (!global.smg_chat[sender].chat) return reply('Masukkan ID Group \n\nContoh:  gctag 1234567889@g.us | pesannya')
let [idgc, pesangc] = global.smg_chat[sender].chat.trim().split(`|`)
if (!idgc) return reply('Masukkan ID Group \n\nContoh:  gctag 1234567889@g.us | pesannya')
if (!pesangc) return reply('Masukkan Pesannya \n\nContoh:  gctag 1234567889@g.us | pesannya')
        try {
                const groupMetadatagctag = await dikzzydev.groupMetadata(idgc.split(" ").join("")).catch(e => {})
                const participantsgctag  = await groupMetadatagctag.participants
                dikzzydev.sendMessage(idgc.split(" ").join(""), { text : pesangc , mentions: participantsgctag.map(a => a.id)})
                reply('Sukses')
            } catch(e) {
                return console.log('error' +e)
            }
break

/* ________________「 MODE 」________________ */
case 'mode': {
if (!resbot_.superOwner) return reply(mess.superOwner)
reply(`Gunakan Perintah 

*.public* untuk membuat bot menjadi publik [ semua orang ]

*.self* untuk bot menjadi self [ khusus owner ]`)
}
break


/* ________________「 PUBLIC 」________________ */
case 'public': {
    if (resbot_.superOwner || resbot_.isOwner) {
        config.publik = true
        return reply('_Sukses Change To *Public*_')
    }
}
break


/* ________________「 SELF 」________________ */
case 'self': {
    if (resbot_.superOwner || resbot_.isOwner) {
        config.publik = false
        return reply('_Sukses Change To *Self*_')
    }

}
break


/* ________________「 ENC 」________________ */
case 'enc': {
if (!resbot_.isPremium) return reply(mess.premium)
if (!global.smg_chat[sender].chat) return reply(`Contoh ${prefix+command} const v = require('baileys')`)
let meg = await obfus(global.smg_chat[sender].chat)
reply(`${meg.result}`)
const namaFile = 'encrypt.txt';
fs.writeFile(namaFile, meg.result, (err) => {
if (err) {
    console.error('Terjadi kesalahan:', err);
} else {
    console.log(`${chalk.yellow.bold('['+jammenit+']')} File "${namaFile}" berhasil dibuat dan ditulis. `)
}
});


}
break



/* ________________「 ADDOWNER 」________________ */
case 'addowner':
if (!resbot_.superOwner) return reply(mess.superOwner)
if (!args[0]) return reply(`_Penggunaan ${prefix+command} nomor_\n\n_Contoh *${prefix+command} 6281277811884*_`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let ceknye_addowner = await dikzzydev.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye_addowner.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
db_owner.push(bnnd)
fs.writeFileSync('./Storage/db/owner.json', JSON.stringify(db_owner))
reply(`_Nomor *${bnnd}* Telah Menjadi Owner !_`)

break



/* ________________「 DELOWNER 」________________ */
case 'delowner':
    if (!resbot_.superOwner) return reply(mess.superOwner);
    if (!args[0]) return reply(`_Penggunaan *${prefix+command} nomor*_\n_Contoh ${prefix+command} 6281277811884_`);
    if (global.smg_chat[sender].chat.trim() == 'all') {
        db_owner.splice(0, db_owner.length);
        fs.writeFileSync('./Storage/db/owner.json', JSON.stringify(db_owner));
        return reply(`_Semua Nomor *Owner* Telah Di Hapus!_`);
    }
    let yaki = args[0].split("|")[0].replace(/[^0-9]/g, '');
    let unp = db_owner.indexOf(yaki);
    if (unp === -1) return reply(`_Nomor *${yaki}* tidak ditemukan dalam daftar Owner!_`);
    db_owner.splice(unp, 1);
    fs.writeFileSync('./Storage/db/owner.json', JSON.stringify(db_owner));
    reply(`_Nomor *${yaki}* Telah Di Hapus Dari Owner!_`);
break;

/* ________________「 ADDPREM 」________________ */
case 'addpremium':
if (!resbot_.superOwner) return reply(mess.superOwner)
if (!args[0] || !args[1]) return reply(`_Contoh : *${prefix+command} 6281277811884 30*_

_*30* artinya 30 hari, premium otomatis expired apabila waktu habis_`)
const numberAddrepm = ambilAngka(args[0]);
let ceknye_addprem = await dikzzydev.onWhatsApp(numberAddrepm + `@s.whatsapp.net`)
if (ceknye_addprem.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
if (!isValidNumber(args[1])) {
    return reply(`_Masukkan Jumlah Hari Yang Valid_`)
}
const currentDate = new Date();
const thirtyDaysLater = new Date(currentDate.getTime() + (args[1] * 24 * 60 * 60 * 1000));
const timestampThirtyDaysLater = thirtyDaysLater.getTime();

db_premium[numberAddrepm] = { expired: timestampThirtyDaysLater, start: hariini };
fs.writeFileSync('./Storage/db/premium.json', JSON.stringify(db_premium))
return reply(`_Nomor *${numberAddrepm}* Telah Menjadi Premium !_`)

break

/* ________________「 CEKPREM 」________________ */
case 'cekpremium':

    try {
        if (resbot_.isPremium) {
            const expired_cekprem = db_premium[sender.split('@')[0]].expired;
            const selisihHari_cekprem = selisihHari(expired_cekprem);
            const cekprem_text = `_Halo_ @${sender.split('@')[0]} \n\n_Masa Premium :_ _*${selisihHari_cekprem}*_`
    dikzzydev.sendMessage(m.chat, { text : cekprem_text , mentions: [sender] })
        }else{
            return reply(`_Akun Anda Tidak Premium_`)
        }
    } catch(e){
        return reply(`_Akun Anda Tidak Premium !_`)
    }

break


/* ________________「 DELPREM 」________________ */
case 'delpremium':
if (!resbot_.superOwner) return reply(mess.superOwner)
if (!args[0]) return reply(`_Contoh:  ${prefix+command} 6281277811884_`)

const numberDelprem = ambilAngka(args[0]);
if (db_premium.hasOwnProperty(numberDelprem)) {
    delete db_premium[numberDelprem];
    fs.writeFileSync('./Storage/db/premium.json', JSON.stringify(db_premium))
    reply(`_Nomor *${numberDelprem}* Telah Di Hapus Dari Premium!_`)
}else{
    reply(`_Tidak Ada Data Ditemukan !_`)
}

break


/* ________________「 LISTPREM 」________________ */
case 'listpremium': 
if (resbot_.isBan) return reply(mess.ban)
teksooo = '*▧ 「 L I S T - P R E M I U M* 」\n\n'
for (let i in db_premium) {
teksooo += `✦ ${i}\n`
}
teksooo += `\n*Total : ${Object.keys(db_premium).length}*`
dikzzydev.sendMessage(from, { text: teksooo.trim() }, { quoted:qdoc, contextInfo: { "mentionedJid": db_premium } })
break

/* ________________「 BAN 」________________ */
case 'ban':  {
if (!resbot_.isOwner) return reply(mess.owner)

if (resbot_.mentionByTag.length !== 0) {
    orgnye = resbot_.mentionByTag[0]
}else if(quoted){
orgnye = quoted.sender
}else {
    return reply(`_Tag Orangnya Dengan Perintah *${prefix}ban*_`)
}
if (botNumber == orgnye) return reply(`_Tidak Bisa Ban BOT ini_`)
const cek_isBan = db_banned.includes(orgnye)
if (cek_isBan) return reply('*Pengguna Ini telah Di Ban*')
db_banned.push(orgnye)
fs.writeFileSync('./Storage/db/banned.json', JSON.stringify(db_banned))
return reply(`Berhasil di banned \n\nPengguna Yang Di Baned Tidak Dapat Menggunakan Semua Fitur Bot`)
}
break

/* ________________「 UNBAN 」________________ */
case 'unban':  {
if (!resbot_.isOwner) return reply(mess.owner)

if (resbot_.mentionByTag.length !== 0) {
    orgnye = resbot_.mentionByTag[0]
}else if(quoted){
orgnye = quoted.sender
}else {
       return reply(`_Tag Orangnya Dengan Perintah *${prefix}ban*_`)
}
const cek_isBan = db_banned.includes(orgnye)


if (!cek_isBan) return reply('_*Pengguna Ini telah Di Hapus Dari Ban*_')
let delbans = db_banned.indexOf(orgnye)
db_banned.splice(delbans, 1)

fs.writeFileSync('./Storage/db/banned.json', JSON.stringify(db_banned))
reply(`_*Berhasil Menghapus Pengguna yang Di Banned*_`)


}
break

/* ________________「 LISTBAN 」________________ */
case 'listban':
 teksooop = `▧ 「 *L I S T - B A N* 」\n`
for (let ii of db_banned) {
teksooop += `∘  ${ii}\n`
}
reply(teksooop)
break




/* ________________「 CHAT 」________________ */
case 'chat': {
if (!resbot_.isPremium) return reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Contoh: ${prefix + command} 6281277811884, helo

Atau

Contoh:  ${prefix + command} @tagorangnya, helo`)
let chat = t[1];
let u = m.quoted ? m.quoted.sender : t[0] ? t[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];



dikzzydev.sendMessage(u, { text: chat }, { quoted: qdoc })
let target = u.replace('@s.whatsapp.net','')
return reply(`_*Pesan Terkirim Ke Nomor :*_ ${target}

_Pesan :_ ${chat}`)
}
break



/* ________________「 JOIN 」________________ */
case 'join': {
if (!resbot_.superOwner) return reply(mess.superOwner)
if (!global.smg_chat[sender].chat) return reply('_Masukkan Link Group!_')
if (!isURL(global.smg_chat[sender].chat.trim()) && !global.smg_chat[sender].chat.trim().includes('whatsapp.com')) return reply('Link Invalid!')
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
let result = args[0].split('https://chat.whatsapp.com/')[1]

await dikzzydev.groupAcceptInvite(result).then((res) => reply('*Sudah Bergabung*')).catch((err) => reply('Ada masalah saat join grub mungkin link grub invalid atau link sudah di reset'))

}
break


/* ________________「 LEAVE 」________________ */
case 'leave': {
if (!resbot_.isPremium) return reply(mess.owner)
if (!m.isGroup) return reply('Buat Di Group Ya')
await dikzzydev.groupLeave(m.chat).then((res) => console.log('Keluar Grub') ).catch((err) => console.log('Keluar Grub Gagal'))
}
break


/* ________________「 BLOCK 」________________ */
case 'block': {
if (!resbot_.isOwner) return reply(mess.owner)
if (!global.smg_chat[sender].chat) return reply('_Masukkan Nomornya !_')
let number_block = await dikzzydev.onWhatsApp(global.smg_chat[sender].chat + `@s.whatsapp.net`)
if (number_block.length == 0) return reply(`_Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!_`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : global.smg_chat[sender].chat.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

dikzzydev.updateBlockStatus(users, 'block')
.then((data) => {
    reply(`_Nomor *${global.smg_chat[sender].chat}* Telah Di Blokir Dari Bot_`);
})
.catch((e) => {
    console.log(e)
    reply(`_Gagal Melakukan Block Ke Users *${global.smg_chat[sender].chat}*_`);
});



}
break

/* ________________「 UNBLOCK 」________________ */
case 'unblock': {
if (!resbot_.isOwner) return reply(mess.owner)
if (!global.smg_chat[sender].chat) return reply('_Masukkan Nomornya !_')
let number_unblock = await dikzzydev.onWhatsApp(global.smg_chat[sender].chat + `@s.whatsapp.net`)
if (number_unblock.length == 0) return reply(`_Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!_`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

dikzzydev.updateBlockStatus(users, 'unblock')
.then((data) => {
    reply(`_Nomor *${global.smg_chat[sender].chat}* Telah Dibuka Blokir Dari Bot_`);
})
.catch((e) => {
    console.log(e)
    reply(`_Gagal Melakukan Unblock Ke Users *${global.smg_chat[sender].chat}*_`);
});

}
break


/* ________________「 BUATSTORY 」________________ */
case 'buatstory':{
if (!resbot_.superOwner) return reply(mess.superOwner)
if (isImage) {
    const media = await dikzzydev.downloadAndSaveMediaMessage(quoted_)
    dikzzydev.sendMessage('status@broadcast', { image: { url: media }, caption: text }, {statusJidList: db_pengguna});
    }else if(isVideo){
        const media = await dikzzydev.downloadAndSaveMediaMessage(quoted_)
        dikzzydev.sendMessage('status@broadcast', { video: { url: media }, caption: text }, {statusJidList: db_pengguna});
    }else if(isAudio){
        return reply(`Balas Text, Image atau Video Dengan Caption ${prefix + command}`)
    }else{
        if (!text) return reply(`Balas Text, Image atau Video Dengan Caption ${prefix + command}`)
        dikzzydev.sendMessage('status@broadcast', { text,}, { backgroundColor: '#87CEFA',font: 3, statusJidList: db_pengguna});
    }
    reply(`*Sukses mengirim status whatsapp ke ${db_pengguna.length} Orang Yang Ada Di Database*`)
}
break


/* ________________「 RESTART 」________________ */
case 'restart':
if (!resbot_.superOwner) return reply(mess.superOwner)
        console.log(`${chalk.yellow.bold('['+jammenit+']')} Restaring Server... `)
        await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        fs.writeFile('restaring.txt', from, (err) => {
        if (err) {
            console.error('Terjadi kesalahan saat membuat file:', err);
            return;
        }
        });
        sleep(2000)
        exec(`node index`)
break


/* ________________「 BACKUP 」________________ */
case 'backup':{
    if (!resbot_.superOwner) return reply(mess.superOwner)
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    const foldersToBackup = ['App', 'Storage'];
    const filesToBackup = [
        'ac.js',
        'dikzzydev.js',
        'index.js',
        'package.json',
        'package-lock.json',
        'readme.md',
        'dkzconfig.js'
    ];

const backupCommand = `tar -czf backup.tar.gz ${foldersToBackup.join(' ')} ${filesToBackup.join(' ')}`;
exec(backupCommand, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error 4: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error 5: ${stderr}`);
        return;
    }
    reply('_Backup selesai, file bernama *backup.tar.gz*_')
});

}
break


/* ________________「 RESTORE 」________________ */
case 'restore':{
    if (!resbot_.superOwner) return reply(mess.superOwner)

    const backupFile = "backup.tar.gz";
    const restoreCommand = `tar -xzf ${backupFile} -C temp_backup`;
    if (!fs.existsSync(backupFile)) {
        reply('_File backup tidak ditemukan._')
        return;
    }
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

    fs.writeFile('restaring.txt', from, (err) => {
        if (err) {
            console.error('Terjadi kesalahan saat membuat file:', err);
            return;
        }
        console.log('file restaring.txt dibuat')
    });


    const tempDir = path.join(__dirname, "temp_backup");
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
    }

exec(restoreCommand, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error : ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error 6: ${stderr}`);
        return;
    }
    const filesToMove = fs.readdirSync(tempDir);
    filesToMove.forEach(file => {
        if (file !== 'restaring.txt') {
            const source = path.join(tempDir, file);
            const destination = path.join(__dirname, file);
            fs.moveSync(source, destination, { overwrite: true });
        }
    });

    fs.removeSync(tempDir);


    exec("node index.js", (error, stdout, stderr) => {
        if (error) {
            console.error(`Error 7: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error 8: ${stderr}`);
            return;
        }
        console.log(`File index.js berhasil dieksekusi.`);
    });



});




}
break


/* ________________「 RESET 」________________ */
case 'reset':
if (!resbot_.superOwner) return reply(mess.superOwner);

if(!global.smg_chat[sender].chat) {
    return reply('_Perintah ini akan menghapus seluruh data termasuk data document dan bot kembali seperti baru_ \n\nSilakan ketik *.reset -y* untuk melanjutkan')
}

if(global.smg_chat[sender].chat == '-y'){

    const DB_backupFile = "./Storage/db/db.tar";
    if (!fs.existsSync(DB_backupFile)) {
        reply('_File backup tidak ditemukan._')
        return;
    }
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

    fs.writeFile('restaring.txt', from, (err) => {
        if (err) {
            console.error('Terjadi kesalahan saat membuat file:', err);
            return;
        }
    });

const foldersToRemove = [
    '/Storage/db',
    '/Storage/video',
    '/Storage/audio',
    '/Storage/Sticker',
    '/.npm',
    '/.cache'
];
const dbFolderPath = './Storage/db';
const tarFilePath = path.join(dbFolderPath, 'db.tar');
const removeCommands = foldersToRemove.map(folder => `rm -rf ${folder}`).join(' && ');
const extractCommand = `tar -xf ${tarFilePath} -C ${dbFolderPath}`;

try {
    exec(removeCommands, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error saat menghapus folder: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error saat menghapus folder: ${stderr}`);
            return;
        }
            exec(extractCommand, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error saat mengekstrak file TAR: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.error(`Error saat mengekstrak file TAR: ${stderr}`);
                    return;
                }
                exec("node index.js", (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error 9: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.error(`Error 10: ${stderr}`);
                        return;
                    }
                    console.log(`File index.js berhasil dieksekusi.`);
                });


            });


    });
    
    
} catch(e){
    console.log("ERROR_", e)
}



}else{
    return reply('_Silakan ketik *.reset -y* untuk melanjutkan')
}


break;






tak_dimenu = false;


















/* ===============| MENU PANEL |===================*/
case 'statuspanel (mati)': {
    if (!resbot_.isOwner) {return reply(mess.owner);}

    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }

    try {
        await listUser();
        return reply(`_Status Panel :_ Berhasil Terhubung`)
    } catch (error) {
        if (error.errors && error.errors.length > 0) {
            return reply(`_Status Panel :_ Gagal Terhubung \n\nError : ${error.errors[0].detail}`)
        }
        return reply(`_Status Panel :_ Gagal Terhubung \n\nError : Periksa Kembali Konfiqurasi Anda`);
    }
}
break;


case 'createuser': {
    if (!resbot_.isOwner) {return reply(mess.owner);}

    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }
    const chatData = global.smg_chat[sender]?.chat || '';
    let [email, username, password] = chatData.split(' ');
    if (!email || !username || !password) {
        return reply(`Gunakan format: email username password\n\nContoh Penggunaan: createuser budi@gmail.com budi 123456
            
Jika Ingin password otomatis : gunakan *random*`);
    }
    if(password == 'random'){
        password = generateRandomPassword();
    }

    try {
        const createUserPanel = await createUser(email, username, password);
        if(createUserPanel && createUserPanel.object && createUserPanel.attributes){
           
            return reply(`*Berhasil Membuat Users Panel*\n
Id: ${createUserPanel.attributes.id}
Username: ${createUserPanel.attributes.username}
Email: ${createUserPanel.attributes.email}
Password: ${password}`);
        }else {
            return reply('Terjadi kesalahan saat membuat pengguna panel. Silakan coba lagi. :1');
        }
    } catch (error) {
        if (error.errors && error.errors.length > 0) {
            return reply(error.errors[0].detail);
        }
        console.error('Terjadi kesalahan saat membuat pengguna panel:', error);
        return reply('Terjadi kesalahan saat membuat pengguna panel. Silakan coba lagi. :2');
    }
}
break;

case 'createserver': {
    if (!resbot_.isOwner) {return reply(mess.owner);}
    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }

    const chatData = global.smg_chat[sender]?.chat || '';
    let [id_userpanel, name_server, ram] = chatData.split(' ');
    if (!id_userpanel || !name_server || !ram) {
        return reply(`Gunakan format: id name_server ram \n\nContoh Penggunaan: createserver 6 panel26agustus 5gb`);
    }
    
    const ramUser = 1024 * ram.match(/\d+/)[0]; 

    const resource = {
        memory: ramUser,
        swap: 0,
        disk: config.PANEL.disk_default,
        io: 500,
        cpu: config.PANEL.cpu_default
    }

    try {
    const response_createServer = await createServer(name_server, id_userpanel, resource);
    if(response_createServer){
        
        return reply(`*Berhasil Membuat Server*\n
ID: ${response_createServer.attributes.id}
UUID: ${response_createServer.attributes.uuid}
Name: ${response_createServer.attributes.name}
Status: ${response_createServer.attributes.status}

Alternatif Link : ${config.PANEL.URL}/server/${response_createServer.attributes.identifier}

`);
    }else {
        return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :1');
    }
} catch(error) {
    console.error('Terjadi kesalahan saat membuat server panel:', error);
    return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :2');
}


}
break



case 'listserver': {
    if (!resbot_.isOwner) {return reply(mess.owner);}

    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }
  
    try {
      const pageListServer = global.smg_chat[sender]?.chat || 1;
      const listserverPanel = await listserver(pageListServer);
      const totalUsersPanel = listserverPanel.meta.pagination.total;
      const countServerPanel = listserverPanel.meta.pagination.count;
      const ServerData = listserverPanel.data
        .map((item, index) => 
          `⭔ ID: ${item.attributes.id}\n⭔ Identifier: ${item.attributes.identifier}\n⭔ Name: ${item.attributes.name}\n⭔ Id User: ${item.attributes.user}\n`
        )
        .join('\n\n');
  
      let replyMessage = `Total: *${totalUsersPanel}*\n\nList Server Panel:\n\n${ServerData}`;
      if(countServerPanel > 49){
        replyMessage+= `\n\n*Next page ketik .listserver ${listserverPanel.meta.pagination.current_page + 1}*`
      }

        return reply(replyMessage);

    } catch (error) {
      console.error('Error fetching server list:', error.message);
      return reply('Terjadi kesalahan saat mengambil data server.');
    }
  }
  break;


case 'listuserpanel': {
    if (!resbot_.isOwner) {return reply(mess.owner);}

    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }
  
    try {
      const pageListUsers = global.smg_chat[sender]?.chat || 1;
      const listuserpanel = await listUser(pageListUsers);
      const totalUsersPanel = listuserpanel.meta.pagination.total;
      const countUsersPanel = listuserpanel.meta.pagination.count;

    
      // Memformat data pengguna
      const usersData = listuserpanel.data
        .map((user, index) => 
          `⭔ ID: ${user.attributes.id}\n⭔ Username: ${user.attributes.username}\n⭔ Email: ${user.attributes.email}`
        )
        .join('\n\n');
  
      // Menyusun pesan akhir
      let replyMessage = `Total: *${totalUsersPanel}*\n\nList Users Panel:\n\n${usersData}`;
      if(countUsersPanel > 49){
        replyMessage+= `\n\n*Next page ketik .userpanel ${listuserpanel.meta.pagination.current_page + 1}*`
      }
     
      
      return reply(replyMessage);
    } catch (error) {
      console.error('Error fetching user list:', error.message);
      return reply('Terjadi kesalahan saat mengambil data pengguna.');
    }
  }
  break;

case 'deleteserver': {
    if (!resbot_.isOwner) {return reply(mess.owner);}

    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }

    if(!global.smg_chat[sender]?.chat){
        return reply('_Gunakan Format : .deleteserver idserver_')
    }
    const id_deleteserver = global.smg_chat[sender]?.chat;
    try {
        await deleteServer(id_deleteserver);
        return reply(`_Berhasil Delete Server_`)
    } catch (error) {
        return reply(`_Gagal Delete Server_ \n\nError : ${error.errors[0].detail}`)
    }
}
break;

case 'deleteuser': {
    if (!resbot_.isOwner) {return reply(mess.owner);}

    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }

    if(!global.smg_chat[sender]?.chat){
        return reply('_Gunakan Format : .deleteuser iduser_')
    }
    const id_paneluser = global.smg_chat[sender]?.chat;
    try {
        await deleteUser(id_paneluser);
        return reply(`_Berhasil Delete Users_`)
    } catch (error) {
        return reply(`_Gagal Delete Users_ \n\nError : ${error.errors[0].detail}`)
    }
}
break;

case 'updateuser' : {
    if (!resbot_.isOwner) {return reply(mess.owner);}

    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }

    const chatData = global.smg_chat[sender]?.chat || '';
    let [id, email, username, newPassword] = chatData.split(' ');
    if (!id || !email || !username || !newPassword) {
        return reply(`Gunakan format: id email username password\n\nContoh Penggunaan: updateuser 2 budi@gmail.com budi 123456`);
    }
    
    try {
        const ResponseUpdateUser = await UpdateUser(id, email, username, newPassword)
        if(ResponseUpdateUser && ResponseUpdateUser.object && ResponseUpdateUser.attributes){
           
            return reply(`*Berhasil Mengubah Users Panel*\n
ID: ${ResponseUpdateUser.attributes.id}
Username: ${ResponseUpdateUser.attributes.username}
Email: ${ResponseUpdateUser.attributes.email}
Password: ${newPassword}`);
        }else {
            return reply('Terjadi kesalahan saat mengubah pengguna panel. Silakan coba lagi. :1');
        }
    } catch(error) {
        console.error('Terjadi kesalahan saat mengubah pengguna panel:', error);
        return reply('Terjadi kesalahan saat mengedit user. Silakan coba lagi. :2');
    }

}
break

case '1gb': {
    if (!accessChecks[requiredAccess]) {const message = requiredAccess === 'owner' ? mess.owner : mess.premium;return reply(message);}

    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }

    const chatData = global.smg_chat[sender]?.chat || '';
    let [nama, nomor] = chatData.split(',');
    if (!nama || !nomor) {
        return reply(`Gunakan format: 1gb nama, nomor\n\nContoh Penggunaan: 1gb budi,6281277811884`);
    }

    const gb1users_password = generateRandomPassword();
    const gb1users_email = `users_${nomor}@gmail.com`;
    const ram = '1';
    let id_user_created = null;

    try {
        const createUserPanel = await createUser(gb1users_email, nama, gb1users_password);
        id_user_created = createUserPanel?.attributes?.id || null;
    } catch (error) {
        if (error.errors?.length > 0) {
            const users = await listUser();
            const user = users.data.find(user => user.attributes.email === gb1users_email);
            id_user_created = user?.attributes?.id || null;
        }
    }
    if (id_user_created) {
        const ramUser = 1024 * parseInt(ram, 10);
        const resource = {
            memory: ramUser,
            swap: 0,
            disk: config.PANEL.disk_default,
            io: 500,
            cpu: config.PANEL.cpu_default
        };

        try {
            const response_createServer = await createServer(nama, id_user_created, resource);
            if (response_createServer) {

                // KiRIM Ke Pengguna
                const datapanel1gb = `*INFORMASI PANEL ANDA*\n\n
ID: ${response_createServer.attributes.id}
UUID: ${response_createServer.attributes.uuid}
Name: ${response_createServer.attributes.name}
Status: ${response_createServer.attributes.status}

*Data Login*
Email : ${gb1users_email}
Password : ${gb1users_password}

Alternatif Link: ${config.PANEL.URL}/server/${response_createServer.attributes.identifier}`;

                await dikzzydev.sendMessage(`${nomor}@s.whatsapp.net`, { text: datapanel1gb});

                return reply(`Success, Data Panel Sudah terkirim ke ${nomor}`);
            // KiRIM Ke Pengguna

            

            } else {
                return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :1');
            }
        } catch (error) {
            console.error('Terjadi kesalahan saat membuat server panel:', error);
            return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :2');
        }
    } else {
        return reply('Terjadi kesalahan saat mengambil data pengguna. :1');
    }
}
break;

case '2gb': {
    if (!accessChecks[requiredAccess]) {const message = requiredAccess === 'owner' ? mess.owner : mess.premium;return reply(message);}
    
    

    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }

    const chatData = global.smg_chat[sender]?.chat || '';
    let [nama, nomor] = chatData.split(',');
    if (!nama || !nomor) {
        return reply(`Gunakan format: 2gb nama, nomor\n\nContoh Penggunaan: 2gb budi,6281277811884`);
    }

    const gb2users_password = generateRandomPassword();
    const gb2users_email = `users_${nomor}@gmail.com`;
    const ram = '2';
    let id_user_created = null;

    try {
        const createUserPanel = await createUser(gb2users_email, nama, gb2users_password);
        id_user_created = createUserPanel?.attributes?.id || null;
    } catch (error) {
        if (error.errors?.length > 0) {
            const users = await listUser();
            const user = users.data.find(user => user.attributes.email === gb2users_email);
            id_user_created = user?.attributes?.id || null;
        }
    }

    if (id_user_created) {
        const ramUser = 1024 * parseInt(ram, 10);
        const resource = {
            memory: ramUser,
            swap: 0,
            disk: config.PANEL.disk_default,
            io: 500,
            cpu: config.PANEL.cpu_default
        };

        try {
            const response_createServer = await createServer(nama, id_user_created, resource);
            if (response_createServer) {

                // KiRIM Ke Pengguna
                const datapanel2gb = `*INFORMASI PANEL ANDA*\n\n
ID: ${response_createServer.attributes.id}
UUID: ${response_createServer.attributes.uuid}
Name: ${response_createServer.attributes.name}
Status: ${response_createServer.attributes.status}

*Data Login*
Email : ${gb1users_email}
Password : ${gb1users_password}

Alternatif Link: ${config.PANEL.URL}/server/${response_createServer.attributes.identifier}`;

                await dikzzydev.sendMessage(`${nomor}@s.whatsapp.net`, { text: datapanel2gb});

                return reply(`Success, Data Panel Sudah terkirim ke ${nomor}`);
            // KiRIM Ke Pengguna

            

            } else {
                return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :1');
            }
        } catch (error) {
            console.error('Terjadi kesalahan saat membuat server panel:', error);
            return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :2');
        }
    } else {
        return reply('Terjadi kesalahan saat mengambil data pengguna. :1');
    }
}
break;

case '3gb': {
    if (!accessChecks[requiredAccess]) {const message = requiredAccess === 'owner' ? mess.owner : mess.premium;return reply(message);}
    

    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }

    const chatData = global.smg_chat[sender]?.chat || '';
    let [nama, nomor] = chatData.split(',');
    if (!nama || !nomor) {
        return reply(`Gunakan format: 3gb nama, nomor\n\nContoh Penggunaan: 3gb budi,6281277811884`);
    }

    const gb3users_password = generateRandomPassword();
    const gb3users_email = `users_${nomor}@gmail.com`;
    const ram = '3';
    let id_user_created = null;

    try {
        const createUserPanel = await createUser(gb3users_email, nama, gb3users_password);
        id_user_created = createUserPanel?.attributes?.id || null;
    } catch (error) {
        if (error.errors?.length > 0) {
            const users = await listUser();
            const user = users.data.find(user => user.attributes.email === gb3users_email);
            id_user_created = user?.attributes?.id || null;
        }
    }

    if (id_user_created) {
        const ramUser = 1024 * parseInt(ram, 10);
        const resource = {
            memory: ramUser,
            swap: 0,
            disk: config.PANEL.disk_default,
            io: 500,
            cpu: config.PANEL.cpu_default
        };

        try {
            const response_createServer = await createServer(nama, id_user_created, resource);
            if (response_createServer) {

                // KiRIM Ke Pengguna
                const datapanel3gb = `*INFORMASI PANEL ANDA*\n\n
ID: ${response_createServer.attributes.id}
UUID: ${response_createServer.attributes.uuid}
Name: ${response_createServer.attributes.name}
Status: ${response_createServer.attributes.status}

*Data Login*
Email : ${gb1users_email}
Password : ${gb1users_password}

Alternatif Link: ${config.PANEL.URL}/server/${response_createServer.attributes.identifier}`;

                await dikzzydev.sendMessage(`${nomor}@s.whatsapp.net`, { text: datapanel3gb});

                return reply(`Success, Data Panel Sudah terkirim ke ${nomor}`);
            // KiRIM Ke Pengguna

            

            } else {
                return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :1');
            }
        } catch (error) {
            console.error('Terjadi kesalahan saat membuat server panel:', error);
            return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :2');
        }
    } else {
        return reply('Terjadi kesalahan saat mengambil data pengguna. :1');
    }
}
break;

case '4gb': {
    if (!accessChecks[requiredAccess]) {const message = requiredAccess === 'owner' ? mess.owner : mess.premium;return reply(message);}
    

    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }

    const chatData = global.smg_chat[sender]?.chat || '';
    let [nama, nomor] = chatData.split(',');
    if (!nama || !nomor) {
        return reply(`Gunakan format: 4gb nama, nomor\n\nContoh Penggunaan: 4gb budi,6281277811884`);
    }

    const gb4users_password = generateRandomPassword();
    const gb4users_email = `users_${nomor}@gmail.com`;
    const ram = '4';
    let id_user_created = null;

    try {
        const createUserPanel = await createUser(gb4users_email, nama, gb4users_password);
        id_user_created = createUserPanel?.attributes?.id || null;
    } catch (error) {
        if (error.errors?.length > 0) {
            const users = await listUser();
            const user = users.data.find(user => user.attributes.email === gb4users_email);
            id_user_created = user?.attributes?.id || null;
        }
    }

    if (id_user_created) {
        const ramUser = 1024 * parseInt(ram, 10);
        const resource = {
            memory: ramUser,
            swap: 0,
            disk: config.PANEL.disk_default,
            io: 500,
            cpu: config.PANEL.cpu_default
        };

        try {
            const response_createServer = await createServer(nama, id_user_created, resource);
            if (response_createServer) {

                // KiRIM Ke Pengguna
                const datapanel4gb = `*INFORMASI PANEL ANDA*\n\n
ID: ${response_createServer.attributes.id}
UUID: ${response_createServer.attributes.uuid}
Name: ${response_createServer.attributes.name}
Status: ${response_createServer.attributes.status}

*Data Login*
Email : ${gb1users_email}
Password : ${gb1users_password}

Alternatif Link: ${config.PANEL.URL}/server/${response_createServer.attributes.identifier}`;

                await dikzzydev.sendMessage(`${nomor}@s.whatsapp.net`, { text: datapanel4gb});

                return reply(`Success, Data Panel Sudah terkirim ke ${nomor}`);
            // KiRIM Ke Pengguna

            

            } else {
                return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :1');
            }
        } catch (error) {
            console.error('Terjadi kesalahan saat membuat server panel:', error);
            return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :2');
        }
    } else {
        return reply('Terjadi kesalahan saat mengambil data pengguna. :1');
    }
}
break;

case '5gb': {
    if (!accessChecks[requiredAccess]) {const message = requiredAccess === 'owner' ? mess.owner : mess.premium;return reply(message);}
    

    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }

    const chatData = global.smg_chat[sender]?.chat || '';
    let [nama, nomor] = chatData.split(',');
    if (!nama || !nomor) {
        return reply(`Gunakan format: 5gb nama, nomor\n\nContoh Penggunaan: 5gb budi,6281277811884`);
    }

    const gb5users_password = generateRandomPassword();
    const gb5users_email = `users_${nomor}@gmail.com`;
    const ram = '5';
    let id_user_created = null;

    try {
        const createUserPanel = await createUser(gb5users_email, nama, gb5users_password);
        id_user_created = createUserPanel?.attributes?.id || null;
    } catch (error) {
        if (error.errors?.length > 0) {
            const users = await listUser();
            const user = users.data.find(user => user.attributes.email === gb5users_email);
            id_user_created = user?.attributes?.id || null;
        }
    }

    if (id_user_created) {
        const ramUser = 1024 * parseInt(ram, 10);
        const resource = {
            memory: ramUser,
            swap: 0,
            disk: config.PANEL.disk_default,
            io: 500,
            cpu: config.PANEL.cpu_default
        };

        try {
            const response_createServer = await createServer(nama, id_user_created, resource);
            if (response_createServer) {

                // KiRIM Ke Pengguna
                const datapanel5gb = `*INFORMASI PANEL ANDA*\n\n
ID: ${response_createServer.attributes.id}
UUID: ${response_createServer.attributes.uuid}
Name: ${response_createServer.attributes.name}
Status: ${response_createServer.attributes.status}

*Data Login*
Email : ${gb1users_email}
Password : ${gb1users_password}

Alternatif Link: ${config.PANEL.URL}/server/${response_createServer.attributes.identifier}`;

                await dikzzydev.sendMessage(`${nomor}@s.whatsapp.net`, { text: datapanel5gb});

                return reply(`Success, Data Panel Sudah terkirim ke ${nomor}`);
            // KiRIM Ke Pengguna

            

            } else {
                return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :1');
            }
        } catch (error) {
            console.error('Terjadi kesalahan saat membuat server panel:', error);
            return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :2');
        }
    } else {
        return reply('Terjadi kesalahan saat mengambil data pengguna. :1');
    }
}
break;

case '6gb': {
    if (!accessChecks[requiredAccess]) {const message = requiredAccess === 'owner' ? mess.owner : mess.premium;return reply(message);}
    

    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }

    const chatData = global.smg_chat[sender]?.chat || '';
    let [nama, nomor] = chatData.split(',');
    if (!nama || !nomor) {
        return reply(`Gunakan format: 6gb nama, nomor\n\nContoh Penggunaan: 6gb budi,6281277811884`);
    }

    const gb6users_password = generateRandomPassword();
    const gb6users_email = `users_${nomor}@gmail.com`;
    const ram = '6';
    let id_user_created = null;

    try {
        const createUserPanel = await createUser(gb6users_email, nama, gb6users_password);
        id_user_created = createUserPanel?.attributes?.id || null;
    } catch (error) {
        if (error.errors?.length > 0) {
            const users = await listUser();
            const user = users.data.find(user => user.attributes.email === gb6users_email);
            id_user_created = user?.attributes?.id || null;
        }
    }

    if (id_user_created) {
        const ramUser = 1024 * parseInt(ram, 10);
        const resource = {
            memory: ramUser,
            swap: 0,
            disk: config.PANEL.disk_default,
            io: 500,
            cpu: config.PANEL.cpu_default
        };

        try {
            const response_createServer = await createServer(nama, id_user_created, resource);
            if (response_createServer) {

                // KiRIM Ke Pengguna
                const datapanel6gb = `*INFORMASI PANEL ANDA*\n\n
ID: ${response_createServer.attributes.id}
UUID: ${response_createServer.attributes.uuid}
Name: ${response_createServer.attributes.name}
Status: ${response_createServer.attributes.status}

*Data Login*
Email : ${gb1users_email}
Password : ${gb1users_password}

Alternatif Link: ${config.PANEL.URL}/server/${response_createServer.attributes.identifier}`;

                await dikzzydev.sendMessage(`${nomor}@s.whatsapp.net`, { text: datapanel6gb});

                return reply(`Success, Data Panel Sudah terkirim ke ${nomor}`);
            // KiRIM Ke Pengguna

            

            } else {
                return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :1');
            }
        } catch (error) {
            console.error('Terjadi kesalahan saat membuat server panel:', error);
            return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :2');
        }
    } else {
        return reply('Terjadi kesalahan saat mengambil data pengguna. :1');
    }
}
break;

case '7gb': {
    if (!accessChecks[requiredAccess]) {const message = requiredAccess === 'owner' ? mess.owner : mess.premium;return reply(message);}
    

    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }

    const chatData = global.smg_chat[sender]?.chat || '';
    let [nama, nomor] = chatData.split(',');
    if (!nama || !nomor) {
        return reply(`Gunakan format: 7gb nama, nomor\n\nContoh Penggunaan: 7gb budi,6281277811884`);
    }

    const gb7users_password = generateRandomPassword();
    const gb7users_email = `users_${nomor}@gmail.com`;
    const ram = '7';
    let id_user_created = null;

    try {
        const createUserPanel = await createUser(gb7users_email, nama, gb7users_password);
        id_user_created = createUserPanel?.attributes?.id || null;
    } catch (error) {
        if (error.errors?.length > 0) {
            const users = await listUser();
            const user = users.data.find(user => user.attributes.email === gb7users_email);
            id_user_created = user?.attributes?.id || null;
        }
    }

    if (id_user_created) {
        const ramUser = 1024 * parseInt(ram, 10);
        const resource = {
            memory: ramUser,
            swap: 0,
            disk: config.PANEL.disk_default,
            io: 500,
            cpu: config.PANEL.cpu_default
        };

        try {
            const response_createServer = await createServer(nama, id_user_created, resource);
            if (response_createServer) {

                // KiRIM Ke Pengguna
                const datapanel7gb = `*INFORMASI PANEL ANDA*\n\n
ID: ${response_createServer.attributes.id}
UUID: ${response_createServer.attributes.uuid}
Name: ${response_createServer.attributes.name}
Status: ${response_createServer.attributes.status}

*Data Login*
Email : ${gb1users_email}
Password : ${gb1users_password}

Alternatif Link: ${config.PANEL.URL}/server/${response_createServer.attributes.identifier}`;

                await dikzzydev.sendMessage(`${nomor}@s.whatsapp.net`, { text: datapanel7gb});

                return reply(`Success, Data Panel Sudah terkirim ke ${nomor}`);
            // KiRIM Ke Pengguna

            

            } else {
                return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :1');
            }
        } catch (error) {
            console.error('Terjadi kesalahan saat membuat server panel:', error);
            return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :2');
        }
    } else {
        return reply('Terjadi kesalahan saat mengambil data pengguna. :1');
    }
}
break;

case '8gb': {
    if (!accessChecks[requiredAccess]) {const message = requiredAccess === 'owner' ? mess.owner : mess.premium;return reply(message);}
    

    if (!config.PANEL.URL || !config.PANEL.KEY_APPLICATION || !config.PANEL.SERVER_EGG) {
        return reply(`Konfigurasi panel belum selesai.\n\nSilakan lengkapi bagian *panel_url*, *panel_key*, dan *server egg* di file *dkzconfig.js*.\n\nPastikan Anda adalah pemilik *server panel* atau *admin panel* untuk mendapatkan informasi tersebut.`);
    }

    const chatData = global.smg_chat[sender]?.chat || '';
    let [nama, nomor] = chatData.split(',');
    if (!nama || !nomor) {
        return reply(`Gunakan format: 8gb nama, nomor\n\nContoh Penggunaan: 8gb budi,6281277811884`);
    }

    const gb8users_password = generateRandomPassword();
    const gb8users_email = `users_${nomor}@gmail.com`;
    const ram = '8';
    let id_user_created = null;

    try {
        const createUserPanel = await createUser(gb8users_email, nama, gb8users_password);
        id_user_created = createUserPanel?.attributes?.id || null;
    } catch (error) {
        if (error.errors?.length > 0) {
            const users = await listUser();
            const user = users.data.find(user => user.attributes.email === gb8users_email);
            id_user_created = user?.attributes?.id || null;
        }
    }

    if (id_user_created) {
        const ramUser = 1024 * parseInt(ram, 10);
        const resource = {
            memory: ramUser,
            swap: 0,
            disk: config.PANEL.disk_default,
            io: 500,
            cpu: config.PANEL.cpu_default
        };

        try {
            const response_createServer = await createServer(nama, id_user_created, resource);
            if (response_createServer) {

                // KiRIM Ke Pengguna
                const datapanel8gb = `*INFORMASI PANEL ANDA*\n\n
ID: ${response_createServer.attributes.id}
UUID: ${response_createServer.attributes.uuid}
Name: ${response_createServer.attributes.name}
Status: ${response_createServer.attributes.status}

*Data Login*
Email : ${gb1users_email}
Password : ${gb1users_password}

Alternatif Link: ${config.PANEL.URL}/server/${response_createServer.attributes.identifier}`;

                await dikzzydev.sendMessage(`${nomor}@s.whatsapp.net`, { text: datapanel8gb});

                return reply(`Success, Data Panel Sudah terkirim ke ${nomor}`);
            // KiRIM Ke Pengguna

            

            } else {
                return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :1');
            }
        } catch (error) {
            console.error('Terjadi kesalahan saat membuat server panel:', error);
            return reply('Terjadi kesalahan saat membuat server panel. Silakan coba lagi. :2');
        }
    } else {
        return reply('Terjadi kesalahan saat mengambil data pengguna. :1');
    }
}
break;













/* ===============| MENU PUSHKONTAK |===================*/

/* ________________「 PENGUMUMAN 」________________ */
case 'pengumuman':
case 'announcement':
if (!resbot_.isOwner) return reply(mess.owner)
if (!global.smg_chat[sender].chat) return reply('_Masukkan Pesannya_ \n\n_Contoh :_ _.pengumuman pengumuman bot whatsapp_');
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
let url_teleph_hd;
if (isImage) {
        const file_hd       = await dikzzydev.downloadAndSaveMediaMessage(quoted_);
        const response = await uploadFileToApi(file_hd, "1hour");
        url_teleph_hd = response.fileUrl; 
}
let getallgrub_jpm = await dikzzydev.groupFetchAllParticipating();
    if (!global.jpm) {
        global.jpm = global.smg_chat[sender].chat.trim();
        global.jpmImage = isImage;
    }
for (let key in getallgrub_jpm) {
    if (getallgrub_jpm.hasOwnProperty(key)) {
        let groupData = getallgrub_jpm[key];
            if (global.jpmImage) {
                console.log("Mengirim Gambar Ke :", groupData.subject);
                await dikzzydev.sendMessage(groupData.id, { image: {url : url_teleph_hd}, caption: global.jpm });
            }else {
                await dikzzydev.sendMessage(groupData.id, { text : global.jpm })
            }
            await sleep(3000); // minimal 3 detik biar aman
    }
}

delete global.jpm;
delete global.jpmImage;
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
break;


/* ________________「 OUTALLGRUP 」________________ */
case 'outallgrup':
if (!resbot_.superOwner) return reply(mess.superOwner);

if(!global.smg_chat[sender].chat) {
    return reply('_Perintah ini akan mengeluarkan seluruh grub whatsapp pada bot_ \n\nSilakan ketik *.outallgrup -y* untuk melanjutkan')
}

if(global.smg_chat[sender].chat == '-y'){


    try {
        let outallgrup = await dikzzydev.groupFetchAllParticipating();
        const leavePromises = Object.values(outallgrup).map(async (group) => {
        if (groupMetadata.id != group.id) {
            await dikzzydev.groupLeave(group.id);
        } else {
            return null;
        }
        });
        const results = await Promise.all(leavePromises);
        results.forEach((result) => {
        if (result) {
            console.log(result)
            //reply(result);
        }
        });
    } catch (error) {
        console.error('Keluar Grub Gagal', error);
    }

}else{
    return reply('_Silakan ketik *.outallgrup -y* untuk melanjutkan')
}


break;



/* ________________「 LISTGC 」________________ */
case 'listgroup':
case 'listgrup':
case 'listgrup':
case 'listgroub':
case 'listgrub':
case 'listgc':
case 'gruplist':
case 'groplist':
case 'grouplist':
if (!resbot_.isOwner) return reply(mess.owner)
let getallgrub = await dikzzydev.groupFetchAllParticipating();
async function formatGrup(index, grup) {
    let response2 = '-';
    let link_grouplist = '';
try {
response2 = await dikzzydev.groupInviteCode(grup.id);
    link_grouplist = `https://chat.whatsapp.com/${response2}`;
} catch{
    link_grouplist = '-'
}
return `╭─「 ${index} 」 *${grup.subject}*
│ Anggota : ${grup.participants.length}
│ ID Grub : ${grup.id}
│ Link    : ${link_grouplist}
╰────────────────────────`;
}
const grupTerurut = Object.values(getallgrub).sort((a, b) => b.participants.length - a.participants.length);
let nomorUrut = 0;
const listGrupString = await Promise.all(grupTerurut.map((grup) => formatGrup(++nomorUrut, grup)));

return reply(`_*Total Group : ${nomorUrut}*_ \n\n`+listGrupString.join('\n\n'));
break;


/* ________________「 TOTALGC 」________________ */
case 'totalgroup':
case 'totalgrup':
case 'totalgrub':
case 'totalgc':
if (!resbot_.isOwner) return reply(mess.owner)
    let totalGc = await dikzzydev.groupFetchAllParticipating();
    let totalGroups = Object.keys(totalGc).length;

    return reply(`_Total Group : *${totalGroups}*_`);
break;


/* ________________「 PUSHKONTAK 」________________ */
case 'pushkontak':{
if (!resbot_.isPremium) return reply(mess.premium)
if (!m.isGroup) return reply('*Grup Only* \n\nGunakan perintah *pushkontak2* untuk di chat pribadi')
if (!text) return reply(`Teks Nya Kak?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${global.smg_chat[sender].chat}`
reply(`*Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 3} detik*`)
for (let geek of mem) {

    if (botNumber != geek) {
        await sleep(3000)
        dikzzydev.sendMessage(geek, {text: `${teksnye}`}, {quoted:qdoc})
    }

}
reply(`*Sukses mengirim pesan Ke ${mem.length} orang*`)
}
break


/* ________________「 PUSHKONTAK2 」________________ */
case 'pushkontak2':{
if (!resbot_.isPremium) return reply(mess.premium)
if (!global.smg_chat[sender].chat) return reply(`Contoh:  pushkontak2 id group | teksnya \n\nUntuk melihat daftar id silakan ketik *listgc*`)
try {
    let [idgc, teksnye] = global.smg_chat[sender].chat.trim().split(`|`)
    if (!teksnye) return reply(`Format Salah ! \n\nContoh:  *pushkontak2 id | teksnya*`)
    let mem = await dikzzydev.groupMetadata(idgc.split(" ").join(""))
    let all_user = mem.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
      reply(`*Mengirim pesan ke ${all_user.length} orang, waktu selesai ${all_user.length * 4} detik*`)
    for (let geek of all_user) {
    if (botNumber != geek) {
            await sleep(4000)
            console.log('Mengirim Pesan ke : '+geek+' Success')
            await dikzzydev.sendMessage(geek, {text: `${teksnye}`})
    }
}
    reply(`*Sukses mengirim pesan Ke ${all_user.length} orang*`)
}catch {
    return reply('ID Grub tidak ditemukan, harap periksa kembali')
}


}
break

/* ________________「 PUSHKONTAK3 」________________ */
case 'pushkontak3':{

if (!resbot_.isPremium) return reply(mess.premium)
if (!global.smg_chat[sender].chat) return reply(`Contoh:  pushkontak3 id group | detik | teksnya \n\nUntuk melihat daftar id silakan ketik *listgc*`)
try {
    let [idgc,detik, teksnye] = global.smg_chat[sender].chat.trim().split(`|`)
      if (!idgc) return reply(`Format Salah1 ! \n\nContoh:  *pushkontak3 id | detik | teksnya*`)
      if (!teksnye) return reply(`Format Salah2 ! \n\nContoh:  *pushkontak3 id | detik | teksnya*`)
      if (!detik) return reply(`Format Salah3 ! \n\nContoh:  *pushkontak3 id | detik | teksnya*`)
    let mem = await dikzzydev.groupMetadata(idgc.split(" ").join(""))
    let all_user = mem.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
      const detikR = detik * 1000;
      reply(`*Mengirim pesan ke ${all_user.length} orang, waktu selesai ${all_user.length * detik} detik*`)
    for (let geek of all_user) {
    if (botNumber != geek) {
            await sleep(detikR)
            console.log('Mengirim Pesan ke : '+geek+' Success')
            await dikzzydev.sendMessage(geek, {text: `${teksnye}`})
}
    }
    reply(`*Sukses mengirim pesan Ke ${all_user.length} orang*`)
    }catch {
    return reply('ID Grub tidak ditemukan, harap periksa kembali')
}

}
break


/* ________________「 SAVEKONTAK 」________________ */
case 'savekontak':
    if (!resbot_.superOwner) return reply(mess.superOwner);

    if (!global.smg_chat[sender].chat) return reply(`_*Contoh Penggunaan*_

${prefix + command} idgrub


_*Contoh : *_
${prefix + command} 120363286776955940@g.us`)
    let textVCF = '';
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
try {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        const year = today.getFullYear();
        const formattedDate = `${day}-${month}-${year}`;
        const angkaMulaiPush = config.savekontak.mulai;
    let NameFormatCustom = config.savekontak.format
    let idgc = global.smg_chat[sender].chat.trim();
    let mem = await dikzzydev.groupMetadata(idgc.split(" ").join(""))
    let all_user = mem.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    let angka = angkaMulaiPush;
            for (let geek of all_user) {
    if (botNumber != geek) {
        NameFormatCustom = NameFormatCustom.replace('@tanggal', day)
                                        .replace('@bulan', month)
                                        .replace('@tahun', year)
                                        .trim();
        let customName = NameFormatCustom.replace('@urutan',angka)
        let timestamp = '202404241842';
        textVCF += await generateVCard(customName, timestamp, geek);
        angka++;
    }   
}   
        const fileName = `${formattedDate}-save_kontak.vcf`;
        if (!fs.existsSync('./App/save_kontak/')) {
            fs.mkdirSync('./App/save_kontak/', { recursive: true });
        }

        fs.writeFile('./App/save_kontak/' + fileName, textVCF, (err) => {
            if (err) return;
    
            dikzzydev.sendMessage(from, { 
                document: fs.readFileSync('./App/save_kontak/' + fileName),
                fileName: fileName,
                mimetype: 'text/vcard' // Atau 'text/x-vcard' jika Anda lebih suka
            }, {quoted: qdoc});
        });
    }catch(e){

            return reply(`_Gagal Saat Melakukan Save Kontak_\n\n_Silakan Coba Lagi_\n_*Apabila tetap gagal silakan kontak owner*_\nhttps://wa.me/6281277811884`)

}
break;




/* ===============| MENU RANDOM |===================*/

/* ________________「 WALLHP 」________________ */
case 'walhp':
case 'darkjoke':
case 'aesthetic':
case 'pubg':
case 'hacker':
case 'kucing':
case 'memeindo':
case 'cosplay':
case 'thailand':
case 'profil':
case 'cecan':
case 'vietnam':
case 'cogan':{
        if (resbot_.isBan) return reply(mess.ban);
        
        if (MinLimit(m.sender) === undefined) {
            return;
        }
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        dikzzydev.sendMessage(m.chat, {
            caption: mess.success,
            image: {
                url: `${global.apikey}/api/random/${command}?apikey=${apikey.acak}`
            }
        }, {
            quoted: qdoc
        }).catch((e) => {
            return dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
            console.log(`${chalk.redBright('[' + jammenit + ']')} ${chalk.redBright.bold('ERROR : ' + e )}`);
        });
}
break
    


/* ________________「 JOKES 」________________ */
case 'jokes':
case 'animequotes':
case 'bucinquote':
case 'dilanquote':
case 'jawaquote':
case 'motivasi':
case 'faktaunik':
case 'pantun':
case 'quote':
case 'quotes':
case 'randomquote':{
if (resbot_.isBan) return reply(mess.ban)
    let animequotes = command
if (command == 'quote' || command == 'quotes') {
    animequotes = 'randomquote'
}

if (command == 'motivasi') {
try {
        let getImage = await getBuffer(`${global.apikey}/api/random/${command}?apikey=${apikey.acak}`);
        await dikzzydev.sendMessage(m.chat, { image: getImage, caption: mess.success }, { quoted: qdoc });
    } catch (err) {
        console.log(err)
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
    return

}
try {
let tod = await fetchJson(`${global.apikey}/api/random/${animequotes}?apikey=${apikey.acak}`)
const dilan = tod.data
dikzzydev.sendMessage(m.chat, {text: dilan}, {quoted: qdoc})
} catch { 
return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
console.log(`${chalk.redBright('['+jammenit+']')} ${chalk.redBright.bold('ERROR (API WEB) PLEASE .REPORT TO THE OWNER SO IT CAN BE FIXED IMMEDIATELY' )}`)
}
}
break


































/* ===============| MENU TEXTPRO |===================*/

/* ________________「 BLACKPINK 」________________ */
case 'blackpink':
case 'boom':
case 'gaming':
case 'magma':
case 'matrix':
case 'metal':
case 'neon':
case 'shadow':
case 'snow':
case 'valentine':
case 'valentine2':
case 'winter':
case 'wolf':
case 'sliced':
    {

if (resbot_.isBan) return reply(mess.ban);
if (!global.smg_chat[sender].chat) return reply(`_Cara Penggunaan_\n\n _Contoh :_ *${prefix + command} Furina*`);
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

    try {

        let url_textproApi = `${global.apikey}/api/textpro/${command}?apikey=${apikey.acak}&text=${global.smg_chat[sender].chat}`

        if(command.includes("valentine")){
            if(command == 'valentine') {
                url_textproApi = `${global.apikey}/api/textpro/valentine?apikey=${apikey.acak}&text=${global.smg_chat[sender].chat}&orientasi=lanscape`
            }else {
                url_textproApi = `${global.apikey}/api/textpro/valentine?apikey=${apikey.acak}&text=${global.smg_chat[sender].chat}&orientasi=potrait`
            }
        }

        let getImage = await getBuffer(url_textproApi);
        await dikzzydev.sendMessage(m.chat, { image: getImage, caption: mess.success }, { quoted: qdoc });
    } catch (err) {
        console.log(err)
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break;


case 'marvel':
case 'pornhub':
    {

    if (resbot_.isBan) return reply(mess.ban);
    if (!global.smg_chat[sender].chat) return reply(`_Masukkan nama Contoh *${prefix + command} Furina Ai*_`)
    if (!args[0]) return reply(`_Masukkan nama Contoh *${prefix + command} Furina Ai*_`)
    if (!args[1]) return reply(`_Masukkan nama Contoh *${prefix + command} Furina Ai*_`)
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    try {
        let getImage = await getBuffer(`${global.apikey}/api/textpro/${command}?apikey=${apikey.acak}&text1=${args[0]}&text2=${args[1]}`);
        await dikzzydev.sendMessage(m.chat, { image: getImage, caption: mess.success }, { quoted: qdoc });
    } catch (err) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break









































/* ===============| MENU TOOLS |===================*/

/* ________________「 CEKUSER 」________________ */
case 'cekuser': {
    if (!global.smg_chat[sender] || !global.smg_chat[sender].chat) {
        return reply('Contoh: .cekuser 6281277811884');
    }
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

    let users = global.smg_chat[sender].chat + '@s.whatsapp.net';
    let status_fetch;
    try {
        status_fetch = await dikzzydev.fetchStatus(users);
    } catch (e) {
        status_fetch = false;
    }
    let profile;
    if (!status_fetch) {
        try {
            profile = await dikzzydev.getBusinessProfile(users);
        } catch (e) {
            profile = null;
        }
    }
    try {
        let cekuser_tools = await dikzzydev.onWhatsApp(users);
        if (cekuser_tools.length == 0) {
            return reply('Nomor Tidak Terdaftar Di WhatsApp!!!');
        }
        let pporg;
        try {
            pporg = await dikzzydev.profilePictureUrl(users, 'image');
        } catch {
            pporg = 'https://petermarshconsulting.com/wp-content/uploads/2022/07/Screenshot-2022-07-19-at-10.13.31.png';
        }
        let cekuser_detail;
        if (!status_fetch) {
            cekuser_detail = `_Number :_ ${global.smg_chat[sender].chat}
_Description :_ ${profile && profile.description ? profile.description : "-"}
_Category :_ ${profile && profile.category ? profile.category : '-'}`;
        } else {
            cekuser_detail = `_Number :_ ${global.smg_chat[sender].chat}
_Status :_ ${status_fetch.status ? status_fetch.status : "-"}
_At :_ ${status_fetch.setAt ? status_fetch.setAt : '-'}`;
        }
        return dikzzydev.sendMessage(m.chat, { image : { url : pporg }, caption: cekuser_detail }, { quoted:qdoc })
        //return reply(cekuser_detail);

    } catch (e) {
        console.log('err:', e);
        return reply('Terjadi kesalahan saat memproses permintaan Anda. Silahkan ulangi Perintah nya');
    }
}
break;

/* ________________「 UNBANNED 」________________ */
case 'unbanned':{
    if (!resbot_.isOwner) return reply(mess.owner)
    if(!global.smg_chat[sender].chat) return reply('Masukkan Nomor Target !')
    let cekvalidnumber_unbanned = await dikzzydev.onWhatsApp(global.smg_chat[sender].chat + `@s.whatsapp.net`)
    if (cekvalidnumber_unbanned.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)

        await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    try {
        const kenon = await fetchJson(`${global.apikey}/api/tools/unban?apikey=${apikey.acak}&number=${global.smg_chat[sender].chat}`);
        if(kenon.status) return reply(kenon.message)

    } catch(e){
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break

/* ________________「 KENON 」________________ */
case 'kenon': {
    if (!resbot_.isOwner) return reply(mess.owner)
    if(!global.smg_chat[sender].chat) return reply('Masukkan Nomor Target !')
    let cekvalidnumber_kenon = await dikzzydev.onWhatsApp(global.smg_chat[sender].chat + `@s.whatsapp.net`)
    if (cekvalidnumber_kenon.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

    try {
        
        const kenon = await fetchJson(`${global.apikey}/api/tools/kenon?apikey=${apikey.acak}&number=${global.smg_chat[sender].chat}`);
        if(kenon.status) return reply(kenon.message)

    } catch(e){
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break;

/* ________________「 VN 」________________ */
case 'vn': {
    if (resbot_.isBan) return reply(mess.ban);
    let textvn = global.smg_chat[sender].chat || '';
    if (!textvn) {
        return reply(`_Masukkan Teksnya !_ \n\n_Contoh:  *vn halo google*_`);
    }
    textvn = textvn.substring(0, 199);
    if (!MinLimit(m.sender)) {
        return;
    }
    try {
        vn = await getBuffer(`https://translate.google.com/translate_tts?ie=UTF-8&q=${textvn}&tl=id&total=1&idx=0&textlen=4&client=tw-ob&prev=input&ttsspeed=1`)
        repf = await dikzzydev.sendMessage(
            m.chat,
            { audio: vn, mimetype: 'audio/mp4', ptt: true },
            { quoted: qdoc }
        );

        // TAG ALL
        // dikzzydev.sendMessage(from, { text : '' , mentions: participants.map(a => a.id)}, {quoted:repf})
    } catch (error) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break;
// ___________「 VIDEO TO MP3 」________________
case 'tomp3': {
    if (resbot_.isBan) return reply(mess.ban);

    if (isVideo) {
        await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        let mediaBuffer = await quoted_.download(); // Buffer video yang diunduh
        const inputPath = path.join(__dirname, 'input.mp4');
        const outputPath = path.join(__dirname, 'output.mp3');

        try {
            // Simpan buffer ke file sementara
            await fs.writeFile(inputPath, mediaBuffer);

            // Konversi video ke MP3
            await new Promise((resolve, reject) => {
                ffmpeg(inputPath)
                    .toFormat('mp3')
                    .on('end', resolve)
                    .on('error', reject)
                    .save(outputPath);
            });

            // Baca file output menjadi buffer
            const outputBuffer = await fs.readFile(outputPath);

            // Kirim file MP3 yang sudah dikonversi
            await dikzzydev.sendMessage(
                from,
                { audio: { url: outputPath }, mimetype: 'audio/mp4' },
                { quoted: qdoc }
            );

            // Hapus file sementara
            await fs.unlink(inputPath);
            await fs.unlink(outputPath);
        } catch (err) {
            console.error('Error during conversion:', err);
            reply('Terjadi kesalahan saat mengkonversi video ke MP3.');
        }
    } else {
        reply('Kirim Video Dengan Caption .tomp3');
    }
}
break;


// ___________「 VIDEO TO VN 」________________
case 'tovn': {
    if (resbot_.isBan) return reply(mess.ban);
    if (!resbot_.isPremium) return reply(mess.premium)

    if (isVideo) {
        await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
        let mediaBuffer = await quoted_.download(); // Buffer video yang diunduh
        const inputPath = path.join(__dirname, 'input.mp4');
        const outputPath = path.join(__dirname, 'output.mp3');

        try {
            // Simpan buffer ke file sementara
            await fs.writeFile(inputPath, mediaBuffer);

            // Konversi video ke MP3
            await new Promise((resolve, reject) => {
                ffmpeg(inputPath)
                    .toFormat('mp3')
                    .on('end', resolve)
                    .on('error', reject)
                    .save(outputPath);
            });

            // Baca file output menjadi buffer
            const outputBuffer = await fs.readFile(outputPath);

            await dikzzydev.sendMessage(
                from,
                { audio: { url: outputPath }, mimetype: 'audio/mp4', ptt: true },
                { quoted: qdoc }
            );



            // Hapus file sementara
            await fs.unlink(inputPath);
            await fs.unlink(outputPath);
        } catch (err) {
            console.error('Error during conversion:', err);
            reply('Terjadi kesalahan saat mengkonversi video ke MP3.');
        }
    } else {
        reply('Kirim Video Dengan Caption .tovn');
    }
}
break;

/* ________________「 VOICECHANGER 」________________ */
case 'voicechanger':{
    if (!quoted) return reply(`_Balas Audio/Vn Dengan *${prefix + command}*_`);
    if (!global.smg_chat[sender].chat) {
        return reply(`_*Masukkan Karakter*_ 

    > tupai 
    > raksasa 
    > monster 
    > robot 
    > bayi 
    > kakek 
    > alien


    Contoh: _*${prefix + command} tupai*_


    `);
    }



        let pitct_terpilih;
        const selectedPair = karakterPitctPairs.find(pair => pair.karakter === q);
        if (selectedPair) {
            pitct_terpilih = selectedPair.pitct_terpilih;
        } else {
            return reply('Karakter yang dimasukkan tidak valid');
        }


    try {
        const mediaData = await dikzzydev.downloadAndSaveMediaMessage(quoted);
        const nameFileBufferVN = 'voice_changer_'+Date.now()+'.mp3';
        const audioBuffer = await changePitch(mediaData, nameFileBufferVN, pitct_terpilih);
            dikzzydev.sendMessage(m.chat, { audio: fs.readFileSync(nameFileBufferVN), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: qdoc })
    } catch(e){
       return reply('Gagal')
    }
}
break


/* ________________「 HD 」________________ */
case 'hd':
case 'hdr':
case 'remini':
case 'hdfree': {
if (!isImage) return reply(`Balas/Kirim Gambar Dengan *${prefix + command}*`);
if (MinLimit(m.sender) === undefined) return;
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    try {
        const file_hd1 = await dikzzydev.downloadAndSaveMediaMessage(quoted_);
        let url1;
        try {
            const response = await uploadFileToApi(file_hd1, "1hour");
            url1 =response.fileUrl;
        } catch (e) {
            console.log('Error during media upload:', e);
        }
        const result = await getBuffer(`${global.apikey}/api/tools/remini2?apikey=${apikey.acak}&url=${url1}`);
        await dikzzydev.sendMessage(from, { image: result, caption: mess.success }, { quoted: qdoc });
    } catch (error) {
        reply("_Terjadi kesalahan saat memproses gambar._\n\nSilakan Coba gunakan *.hd2*");
    }
}
break;

/* ________________「 HD 」________________ */
case 'hd2':
case 'hdr2':
case 'remini2':
case 'hdfree2': {
if (!isImage) return reply(`Balas/Kirim Gambar Dengan *${prefix + command}*`);
if (MinLimit(m.sender) === undefined) return;
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    let url2;
    if (isImage) {
        try {
            const file_hd2 = await dikzzydev.downloadAndSaveMediaMessage(quoted_);
            let url1;
            try {
                const response = await uploadFileToApi(file_hd2, "1hour");
                url1 = response.fileUrl;
            } catch (e) {
                console.log('Error during media upload:', e);
            }

            url2 = await axios.get(url1, { responseType: 'arraybuffer' });
            const datda = await remini(url2.data, 'enhance'); // recolor, dehaze, enhance
            const dataimg = Buffer.from(datda, 'binary');
            await dikzzydev.sendMessage(from, { image: dataimg, caption: mess.success }, { quoted: qdoc });
        } catch (error) {
            reply("_Terjadi kesalahan saat memproses gambar._\nBiasanya Terlalu banyak pengunaan \n\n*Silakan Coba lagi nanti*");
        }
    }
}
break;






/* ________________「 COLORIZE 」________________ */
case 'colorize': {
if (!isImage) return reply(`Balas/Kirim Gambar Dengan *${prefix + command}*`);
if (MinLimit(m.sender) === undefined) return;

await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

    try {
        const file_hd = await dikzzydev.downloadAndSaveMediaMessage(quoted_);
        const response = await uploadFileToApi(file_hd, "1hour");
        const url_teleph_hd = response.fileUrl;
        console.log(url_teleph_hd)

        const result = await getBuffer(`${global.apikey}/api/tools/colorize?apikey=${apikey.acak}&url=${url_teleph_hd}`);
        console.log(`${global.apikey}/api/tools/colorize?apikey=${apikey.acak}&url=${url_teleph_hd}`)
        
        await dikzzydev.sendMessage(from, { image: result, caption: mess.success }, { quoted: qdoc });
    } catch (error) {
        console.log(`${chalk.redBright('['+jammenit+']')} ${chalk.redBright.bold('Error : '+command )}`)
        reply("_Terjadi kesalahan saat memproses gambar._");
        console.error(error)
    }
}
break;


/* ________________「 DEHAZE 」________________ */
case 'dehaze': {
if (!isImage) return reply(`Balas/Kirim Gambar Dengan *${prefix + command}*`);
if (MinLimit(m.sender) === undefined) return;
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    try {
        const file_hd = await dikzzydev.downloadAndSaveMediaMessage(quoted_);

        const response = await uploadFileToApi(file_hd, "1hour");
        const url_teleph_hd = response.fileUrl; 


        const result = await getBuffer(`${global.apikey}/api/tools/colorize?apikey=${apikey.acak}&url=${url_teleph_hd}`);
        
        await dikzzydev.sendMessage(from, { image: result, caption: mess.success }, { quoted: qdoc });
    } catch (error) {
        console.log(`${chalk.redBright('['+jammenit+']')} ${chalk.redBright.bold('Error : '+command )}`)
        reply("_Terjadi kesalahan saat memproses gambar._");
    }
}
break;



/* ________________「 REMOVEBG 」________________ */
case 'nobg':
case 'removebg': {
if (!resbot_.isPremium) return reply(mess.premium)
if (!isImage) return reply(`Balas/Kirim Gambar Dengan *${prefix + command}*`);
if (MinLimit(m.sender) === undefined) return;
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    try {
        const file_hd = await dikzzydev.downloadAndSaveMediaMessage(quoted_);
        const response = await uploadFileToApi(file_hd, "1hour");
        const url_teleph_hd = response.fileUrl; 


        const result = await getBuffer(`${global.apikey}/api/tools/removebg?apikey=${apikey.acak}&url=${url_teleph_hd}`);
        
        await dikzzydev.sendMessage(from, { image: result, caption: mess.success }, { quoted: qdoc });
    } catch (error) {
        console.error('ERROR DISINI :',error);
        reply("_Terjadi kesalahan saat memproses gambar. Silahkan ulangi setelah beberapa detik._");
    }
}
break;

/* ________________「 TRANSLATE 」________________ */
case 'translate': {
if (resbot_.isBan) return reply(mess.ban)
    let teks_translate = ''
if (!global.smg_chat[sender].chat) {
    try {
        let cekm = m.quoted.sender
        teks_translate = quoted.text
    }catch{
        return reply('Balas Sebuah Pesanan Berupa Text')
    }

}else{
    teks_translate = q
}
   await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

    let ts_indo = await fetchJson(`${global.apikey}/api/translate/en-id?apikey=${apikey.acak}&text=${teks_translate}`)

     let ts_englis = await fetchJson(`${global.apikey}/api/translate/id-en?apikey=${apikey.acak}&text=${teks_translate}`)

     reply(`Indonesia: ${ts_indo.data} \n\nEnglish: ${ts_englis.data}`);

}
break

/* ________________「 CREATEQR 」________________ */
case 'createqr': {
if (resbot_.isBan) return reply(mess.ban)
if (!resbot_.isPremium) return reply(mess.premium)
if (MinLimit(m.sender) === undefined) return;
if (!global.smg_chat[sender].chat) return reply(`_Penggunaan Salah Harusnya *${prefix+command} Furina Ai*_`)
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
const qrcode = require('qrcode')
const qyuer = await qrcode.toDataURL(global.smg_chat[sender].chat, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
dikzzydev.sendMessage(from, { image: data, caption: mess.success }, { quoted: qdoc })
}
break

/* ________________「 DETECTQR 」________________ */
case 'detectqr': {
if (resbot_.isBan) return reply(mess.ban)
if (MinLimit(m.sender) === undefined) return;
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
try {
mee = await dikzzydev.downloadAndSaveMediaMessage(quoted)

const response = await uploadFileToApi(mee, "1hour");
mem = response.fileUrl; 



const res = await fetchJson(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
// Mengakses properti-symbol
const symbols = res[0].symbol;
const combinedString = symbols
  .map(symbol => Object.values(symbol).filter(value => value !== 0).join(' '))
  .filter(value => value.trim() !== '')  // Menghapus nilai yang hanya terdiri dari spasi
  .join(' ');

reply(combinedString)


} catch (err) {
reply(`_Reply Image Yang Ada Qr Nya_`)
}
}
break

/* ________________「 INSPECT 」________________ */
case 'inspect': {
if (resbot_.isBan) return reply(mess.ban)
if (!args[0]) return reply("_Masukkan link grub whatsapp yang mau di *inspect*_")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return reply("Link Invalid")
if (MinLimit(m.sender) === undefined) return;
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
dikzzydev.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

©By ${config.botname}`
try {
pp = await dikzzydev.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
dikzzydev.sendFile(from, pp, "", m, { caption: tekse, mentions: await dikzzydev.parseMention(tekse) })

})
}
break









































/* ===============| MENU MORE |===================*/



/* ________________「 CEKREKENING 」________________ */
case 'cekrekening':{
if (!global.smg_chat[sender].chat) return reply(`_Masukkan Nomor Rekening Yang Valid_`)
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    try {
    let cekrekening = await fetchJson(`${global.apikey}/api/database/bank?apikey=${apikey.acak}&number=${global.smg_chat[sender].chat}`);
    if (cekrekening && cekrekening.status) {
        return reply(`_Information Rekening_ \n\nBank Code : ${cekrekening.data.bankCode}\nBank Name : ${cekrekening.data.bankname}\nAccount Number : ${cekrekening.data.accountnumber}\nAccount Name : ${cekrekening.data.accountname}`)
    }else{
       return reply('_Periksa Informasi Nomor Rekening Yang Di input_')
    }
    } catch(e){
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }

}
break


/* ________________「 CEKEWALLET 」________________ */
case 'cekwallet':
case 'cekwalet':
case 'cekewallet':
case 'cekewalet':{
if (!global.smg_chat[sender].chat) return reply(`_Masukkan Nomor Hp Yang Valid_`)

await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    try {
    let cekewallet = await fetchJson(`${global.apikey}/api/database/ewallet?apikey=${apikey.acak}&number=${global.smg_chat[sender].chat}`);
    if (cekewallet) {
        const formattedData = cekewallet.data.map(entry => `BANK CODE : ${entry.bankCode} \nNUMBER : ${entry.accountnumber}\nAccount Name : ${entry.accountname}\n`);
        const formattedString = formattedData.join('\n');
        return reply(formattedString)
    }else{
        return reply('_Periksa Informasi Nomor HP yang di input_')
    }


    } catch(e){
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }

}
break

/* ________________「 NUMBER 」________________ */
case 'number':{
if (global.smg_chat[sender].chat) return
    return reply(`_NUMBER BOT :_ *${botNumber.replace('@s.whatsapp.net','')}*`)
}
break;


/* ________________「 LOREM 」________________ */
case 'lorem':
    return reply(!global.smg_chat[sender].chat ? loremIpsum(50) : loremIpsum(global.smg_chat[sender].chat));
    break;

/* ________________「 WHOIS 」________________ */
case 'whois': {
    if (!global.smg_chat[sender].chat)  return reply('Contoh: *whois google.com*')
    whois.lookup(q, function(err, data) {
    return reply(data);

})

    
}
break;

/* ________________「 GIT 」________________ */
case 'git': case 'gitclone':
    if (!args[0]) return reply(`_Contoh:_ *${prefix +command}* https://github.com/WhiskeySockets/Baileys.git`)
    if (!isURL(args[0]) && !args[0].includes('github.com')) return reply(`_*Link invalid!*_`)
    await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    dikzzydev.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: qdoc }).catch((err) => reply(mess.error))
.catch(console.error)
break

/* ________________「 SSWEB 」________________ */
case 'ssweb':{
if (resbot_.isBan) return reply(mess.ban)
if (!global.smg_chat[sender].chat) return reply(`_Contoh: ${prefix+command} google.com_`)
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
let krt = await ssweb(global.smg_chat[sender].chat)
dikzzydev.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: qdoc })
}
break



/* ________________「 GET 」________________ */
case 'get':
if (resbot_.isBan) return reply(mess.ban);
if (!global.smg_chat[sender].chat) return reply(`_Contoh: ${prefix + command} https://google.com_`);
if (!isURL(global.smg_chat[sender].chat)) return reply(mess.urlnotvalid)
try {
    const startTime = performance.now(); // Waktu mulai permintaan
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    const response = await axios.get(global.smg_chat[sender].chat);
    const endTime = performance.now(); // Waktu selesai permintaan
    const responseTime = endTime - startTime; // Waktu yang dibutuhkan untuk mendapatkan respons
    const infoGet = `status: ${response.status}
responseTime: ${responseTime.toFixed(2)}

${JSON.stringify(response.data)}`

    return reply(infoGet);

} catch (e) {
    return reply(`_URL Endpoint :_ ${global.smg_chat[sender].chat}

🚫 ${e}`);
  }

  break;

  case 'ipserver': {
    if (!resbot_.isOwner) return reply(mess.owner);
    checkIPs().then(replyMessage => {
       reply(replyMessage)

    });
}
break;



case 'country': {
    if (!resbot_.isOwner) return reply(mess.owner);
    try {
      const ipv4Response = await axios.get('https://api.ipify.org');
      const ipv4 = ipv4Response.data.trim();
      const apiKey = 'f38af62b16094a4d984cf2874c2ae0a8';
      const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ipv4}`;
      const response = await fetch(url);
      const countryData = await response.json();
      reply(`Country: ${countryData.country_name}`);
    } catch (error) {
      reply('Terjadi kesalahan saat memeriksa negara VPS, Periksa Apikey anda yang bisa di daftarkan melalui website ipgeolocation.io');
    }
  }   
  break;



/* ________________「 CEKHOST 」________________ */
case 'cekhost':
if (!resbot_.isOwner) return reply(mess.owner)
if (resbot_.isBan) return reply(mess.ban);
if (!global.smg_chat[sender].chat) return reply(`_Contoh: ${prefix + command} google.com_`);

try {
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });
    const response = await axios.get('https://check-host.net/check-http', {
    params: {
        host: q,
        max_nodes: 20
    },
    headers: {
        'Accept': 'application/json'
    }
    });
    const responseData = response.data;
    if (responseData.ok) {
        const permanent_link = responseData.permanent_link;
        try {
        let krt = await ssweb(permanent_link)
        dikzzydev.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: qdoc })

        } catch (error) {
            console.error('Error x:', error);
        }
    } else {
        return reply('gagal');
    }

    
} catch (error) {
    console.error('Error x:', error);
    return reply(`Failed to check host. Error x: ${error.message}`);
}
break;


/* ________________「 CEKDNS 」________________ */
case 'cekdns':
if (!resbot_.isOwner) return reply(mess.owner)
if (resbot_.isBan) return reply(mess.ban);
if (!global.smg_chat[sender].chat) return reply(`_Contoh: ${prefix + command} google.com_`);
try {
await dikzzydev.sendMessage(from, { react: { text: "✅", key: m.key } });

    const response = await axios.get('https://check-host.net/check-ping', {
    params: {
        host: q,
        max_nodes: 3
    },
    headers: {
        'Accept': 'application/json'
    }
    });

    const responseData = response.data;
    let krt = await ssweb(responseData.permanent_link)
    dikzzydev.sendMessage(from ,{ image: krt.result, caption: mess.success },{ quoted: qdoc })


} catch (error) {
    console.error('Error x:', error);
    return reply(`Failed to check DNS. Error x: ${error.message}`);
}
break;



/* ________________「 STYLE 」________________ */
case 'style':
return applyStyle(global.smg_chat[sender].chat, 1);
break;
 /*   
    case 'edit':
let teks = `
*HARGA BOT JAGA GRUB BY DANZ*
IDR 7.000 / 7K | SEMINGGU
IDR 15.000/15K | SEBULAN
IDR 20.000/20K | PERMANEN
`
await dikzzydev.sendMessage(m.chat, {text: teks}, {quoted: qdoc});
        break;
        
/* ________________「 REPORT 」________________ */
case 'report':
if (global.smg_chat[sender].chat.length > 50) return reply('_*Maksimal 50 Karakter*_')
if (!global.smg_chat[sender].chat) return reply(`_Ketik *${prefix + command} pesan error*_

_Contoh: report min ada error di menu .toimage_`)

let tchat = `_*REPORT ERROR*_

From : wa.me/${sender.replace('@s.whatsapp.net','')}
Message: ${global.smg_chat[sender].chat}`

/* ========================================================================*/
// Jangan di ubah ya nomor ini biar kalo ada yang report biar admin bisa fix fiturnya
await dikzzydev.sendMessage('6281277811884@s.whatsapp.net', { text: tchat })
        
return reply('_*Done, Laporan diterima*_ \n\n_Terima kasih atas laporannya admin akan segera melakukan fix terhadap fitur yang bermasalah_')
break


/* ________________「 CEKAPIKEY 」________________ */
case 'cekapikey': {
    try {
        if (!global.smg_chat[sender].chat) return reply(`_Masukkan Apikey_ \n\nContoh : _${prefix + command} YOUR_APIKEY_`);

        let apikey = await fetchJson(`${global.apikey}/check_apikey?apikey=${global.smg_chat[sender].chat}`);
        if (apikey.limit_key) {
            // Ubah timestamp menjadi objek Date
            const tanggalAktif = new Date(apikey.limit_key * 1000); // Ubah ke milidetik

            // Format data waktu tanggal sesuai kebutuhan (misalnya: "YYYY-MM-DD HH:mm:ss")
            const formattedDate = tanggalAktif.toISOString().replace(/T/, ' ').replace(/\..+/, '');

            await dikzzydev.sendMessage(m.chat, { text: `_Apikey Aktif_ \n\n_Masa Aktif Hingga :_ *${formattedDate}*` }, { quoted: qdoc });
        }else{
            await dikzzydev.sendMessage(m.chat, { text: `_Apikey Tidak Terdaftar / Expired_` }, { quoted: qdoc });
        }
    } catch (error) {
        console.error('Error while fetching API key:', error);
        // Handle the error as needed, e.g., send an error message to the user.
    }
}
break;

/* ________________「 APIKEY 」________________ */
case 'apikey': {
if (global.smg_chat[sender].chat) return
    try {
        let apikey = await fetchJson(`${global.apikey}/check_apikey?apikey=${apikey.acak}`);
        if (apikey.limit_key) {
            // Ubah timestamp menjadi objek Date
            const tanggalAktif = new Date(apikey.limit_key * 1000); // Ubah ke milidetik

            // Format data waktu tanggal sesuai kebutuhan (misalnya: "YYYY-MM-DD HH:mm:ss")
            const formattedDate = tanggalAktif.toISOString().replace(/T/, ' ').replace(/\..+/, '');
            await dikzzydev.sendMessage(m.chat, { text: `_Apikey Aktif_ \n\n_Masa Aktif Hingga :_ *${formattedDate}*` }, { quoted: qdoc });
        }else{
            await dikzzydev.sendMessage(m.chat, { text: `_Apikey Tidak Terdaftar / Expired_` }, { quoted: qdoc });
        }
    } catch (error) {
        return await dikzzydev.sendMessage(from, { react: { text: "⛔", key: m.key } });
    }
}
break;


/* ________________「 SC 」________________ */
case 'sc':
case 'script': {
let teks = `╭「 𝙎𝙘𝙧𝙞𝙥𝙩 𝙁𝙪𝙧𝙞𝙣𝙖 𝘽𝙤𝙩 𝘼𝙞 」
│
│✦ ᴠᴇʀꜱɪᴏɴ : ${config.resbot_version}
│✦ ɴᴏ ᴇɴᴄ, ɴᴏ ꜱᴄᴀɴ 
│✦ ɴᴏ ʙᴜɢ & ɴᴏ ᴇʀʀᴏʀ 
│✦ ʜᴀʀɢᴀ ? 70ᴋ 
│✦ ꜰʀᴇᴇ ᴀᴘɪᴋᴇʏ
│✦ ʙɪꜱᴀ ʀᴜɴ ᴅɪ ᴘᴀɴᴇʟ/ᴛᴇʀᴍᴜx 
│✦ ᴛᴏᴛᴀʟ ꜰɪᴛᴜʀ : ${global.totalAllfitur}
╰────────────────────────✦

╭「 𝗖𝗮𝗿𝗮 𝗢𝗿𝗱𝗲𝗿 」

✦ ꜱɪʟᴀᴋᴀɴ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴘᴇɴᴅᴀꜰᴛᴀʀᴀɴ ᴘʀᴇ ᴏʀᴅᴇʀ ᴋᴇᴘᴀᴅᴀ ᴏᴡɴᴇʀ. https://wa.me/6281277811884

✦ ᴘᴇᴍʙᴀʏᴀʀᴀɴ ʙɪꜱᴀ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴅᴀɴᴀ,ʙʀɪ ᴍᴏʙɪʟᴇ,ᴅᴀɴ ʟᴀɪɴɴʏᴀ.

✦ ꜱᴄʀɪᴘᴛ ʏᴀɴɢ ꜱᴜᴅᴀʜ ᴅɪ ʙᴇʟɪ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴅɪ ʀᴇꜰꜰᴜɴᴅ ᴋᴇᴍʙᴀʟɪ.

ᴊɪᴋᴀ ʙᴜᴛᴜʜ ʙᴀɴᴛᴜᴀɴ ʜᴜʙᴜɴɢɪ ᴋᴀᴍɪ ʟᴇᴡᴀᴛ ᴡʜᴀᴛꜱᴀᴘᴘ (ꜰᴀꜱᴛ ʀᴇꜱᴘᴏɴ)

`
// teks = '```'+teks+'```'
await dikzzydev.sendMessage(m.chat, {text: teks}, {quoted: qdoc})
}
        break


/* ________________「 UPDATEBOT 」________________ */
case 'updatebot': {
    if (!resbot_.superOwner) return reply(mess.superOwner)
    
        await dikzzydev.sendMessage(from, { react: { text: "⏳", key: m.key } });

    try {
        let response = await fetchJson(path_updatejsonApi);
        const newAPIKey = response.endpoint;
        editAPIKey(newAPIKey);
        const message = `_*Konfigurasi Bot Berhasil Diupdate*_

_Version Saat Ini:_ *${config.resbot_version}*
_Version Furina Bot Ai:_ *${response.version_script}*
_Pembaruan Terakhir:_ *Beta Version 1.0*
_Website:_ https://korosu.htm.id`;
        reply(message);
        console.log(`${chalk.greenBright.bold('['+jammenit+']')} ${chalk.greenBright.bold(`MULAI UPDATE SCRIPT FURINA BOT AI`)}`)
        await sleep(1000)
        const fileUrl = path_updatefileApi_;
        const downloadPath = path.join(__dirname, 'dikzzydev.js');
        UpdateBotFromApi(fileUrl,downloadPath)
    } catch (error) {
        console.log(error)
        const errorMessage = `_*⛔ Gagal Memperbarui Konfigurasi Bot*_

_Pastikan IP Server Anda Sudah Terdaftar Pada Website Resmi_

*Tutorial Singkat Untuk Masalah Ini:*
1. Ketik *.ipserver* pada bot ini
2. Salin alamat IP
3. Tambahkan alamat IP pada website  di menu API atau dari link yang tersedia  (pastikan anda login terlebih dahulu untuk mengakses link tersebut)
4. Kemudian Restart Bot Anda

_Apabila butuh bantuan silakan hubungi owner_
6281277811884`;
        const caption = `${errorMessage}`;
        const imageBuffer = fs.readFileSync('./App/lib/updatebot.jpg');
        return dikzzydev.sendMessage(m.chat, { image: imageBuffer, caption: caption }, { quoted: qdoc });
    }
}
break;



default:



} // penutup case switch


if (tak_dimenu) {
    if (m.isGroup) { GcSiderUpdate(m.sender,from) }
} 

} catch (err) {
    let e = String(err);
    console.log(`${chalk.redBright('[' + jammenit + ']')} ${chalk.redBright.bold('ERROR : ' + e)}`);
}




} // => MODULE UTAMA CLOSE
module.exports = dikzzydev;







let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`${chalk.greenBright.bold('['+jammenit+']')} ${chalk.greenBright.bold(`UPDATE FILE ${__filename}`)}`)
    delete require.cache[file]
    require(file)
})