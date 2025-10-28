// =============================================
// VERSION UPDATE
// UPDATE TERAKHIR 30 September 2024 JAM 00:00 WIB
// WEBSITE : dikzzyvoltage.com
// VERSION : 3.5.3
// =============================================



const path=require("path"),fs=require("fs"),chalk=require("chalk"),moment=require("moment-timezone");

const config = {
    botDestination  : 'group', // group |  private | both
    region       	: 'Indonesia',
    resbot_version  : 'Furina Bot Ai v2.5 [New Year Version]',
    nomorsuperOwner : '6281277811884',
    grup            : 'https://whatsapp.com/channel/0029VaXzkeYLCoWzAPfDZ22C',
    email           : 'Furinabotai34@gmail.com',
    ig           	: 'www.instagram.com/Alfrnzy_',
    ownername       : 'Luis',
    botname         : 'Furina Bot Ai',
    packname        : 'Furina',
    sleep_game      : 80000, // waktu main tebak (1000 = 1 detik)
    limit_tunggu 	: 10, // ini menit = 10 menit setiap setelah claim
    MoneyMenangGame : 20,
    ratelimiter 	: 6, // detik
    prefix_custom   : ['#','','.'],
    dalamdetik		: 3, // ini adalah waktu couldown dalamdetik
    chatmasuk 		: 8, // ini adalah jumlah chat maxsimum {dalamdetik}
    prefix 			: true,
    anticall        : true, // true = aktif || false = tidak aktif
    publik 			: true,
    audio_menu      : true,
    autoread 		: true,
    antitoxic 		: true,
    savekontak		: {
    format   	: 'Buyer @urutan - @tanggal @bulan @tahun',
    mulai 		: '1',
    },
    author          : `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nFurina\nBot: 0812-7781-1884`,
    allmenu         : 'https://files.catbox.moe/xi1rge.jpg',
    typeWelcome 	: '1', // ada 3 pilihan angka 1 = image pp user  2 = image welcome custom   || 3 = teks only
    icon_on			: '🟢', 
	icon_off		: '🔴',
    game 			: {
        tebakangka   : 'https://files.catbox.moe/mli1t2.jpg',
        tebaklontong : 'https://files.catbox.moe/mli1t2.jpg',
        tebakkalimat : 'https://files.catbox.moe/mli1t2.jpg',
        tebaklirik   :  'https://files.catbox.moe/mli1t2.jpg',
        tebakkata    : 'https://files.catbox.moe/mli1t2.jpg',
        tebakbendera : 'https://files.catbox.moe/mli1t2.jpg',
        tebakgambar  : 'https://files.catbox.moe/mli1t2.jpg',
        tebaklagu    : 'https://files.catbox.moe/mli1t2.jpg'
    },
    PANEL            : {
        URL             : '', // https://panel.contoh.com
        KEY_APPLICATION : '', // ambil di panel : ptla_xxxxx
        SERVER_EGG      : '15',
        port_range      : '1900-2000',
        id_location     : '5', // id location -> ambil di panel
        cpu_default     : 90, // unlimited ganti 0
        disk_default    : 5120, // 5 gb || unlimited ganti 0
        description     : 'Jika Ada Pertanyaan Hubungi Telegram Admin : https://t.me/dikzemde',
        access          : 'owner' , // owner, premium,
    },
    BACKUP          : {
        autobackup : true, // true atau false
        autosendwa : true
    }
};



module.exports = config;

let file = path.resolve(__filename);
fs.watchFile(file,(()=>{fs.unwatchFile(file),console.log(`${chalk.greenBright.bold("UPDATE FILE "+file)} ${chalk.redBright.bold("PLEASE RESTART THIS SERVER")}`),delete require.cache[file],require(file)}));













/* 
---- PENJELASAN ------ 
 // 🟢 🔴
true : artinya aktif
false : tidak aktif

jadi kalau
anticall        : true 
// artinya bot lu gak bisa di telpon // kalo ada orang nelpon lansung di block



untuk link yang seperti https://telegra.ph/file/4cd10be17fd6c13303453.jpg
kalau mau di ganti silakan upload gambar kalian dulu ke website https://telegra.ph
lalu nanti salin url gambarnya 


KALAU MAU NANYA NANYA CHAT https://t.me/dikzzyvoltage_com admin/owner dikzzyvoltage

*/
