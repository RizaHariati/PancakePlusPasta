const CryptoJS = require("crypto-js")
const secretItem = "forUserPassword"

const encryptItem = item => {
  const cipherText = CryptoJS.AES.encrypt(item, secretItem).toString()
  return cipherText
}

const decryptItem = item => {
  const decipherText = CryptoJS.AES.decrypt(item, secretItem)
  const originalText = decipherText.toString(CryptoJS.enc.Utf8)
  return originalText
}

export { encryptItem, decryptItem }
