
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONACION*
puedes donar si quieres ayudar a mantener el bot activo

▢ *Easypaisa*
• *Link :* 03466056497

▢ *MUBASHIR NAWAB*
• *Author :* NAWAB
• *Whatsapp° :* 923247653527
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendButton(m.chat, don, 'Haga click en boton si quiere comprar o alquilar al bot', img, [['Buy Premium', `${usedPrefix}buyprem`]],m, rpyp)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
