let handler = async m => m.reply(`
┌─「 BELI PREMIUM 」
│ • perhari 5k
│ • perminggu 10k
│ • perbulan 30k
└────
┌─ 「 FITUR PREMIUM」
│ • Join Gc✓
│ • Bebas Edit Di Gc✓
│ • Kick Di Gc✓
│ • Jadi Bot✓
│ • DLLNya✓
└────
┌─「 *OWNER BOT* 」
│❏ 🪀 wa.me/6285240389682
└────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['beliprem']
handler.tags = ['info']
handler.command = ['beliprem']

module.exports = handler