import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['923247653527', 'FG98', true],
  ['923466056497'], 
  ['923247653527'] 
] //Numeros de owner 

global.mods = ['923247653527'] 
global.prems = ['923466056497', '923247653527', '923154944140']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'DyLux┃ᴮᴼᵀ' 
global.author = '@fg98' 
global.fgig = '▢ Sígueme en Instagram\nhttps://chat.whatsapp.com/Ds8Zc29apIvHSFNByv8SEO\n' 
global.dygp = 'https://chat.whatsapp.com/Ds8Zc29apIvHSFNByv8SEO'
global.fgsc = 'https://chat.whatsapp.com/Ds8Zc29apIvHSFNByv8SEO' 
global.fgyt = 'https://chat.whatsapp.com/Ds8Zc29apIvHSFNByv8SEO'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
