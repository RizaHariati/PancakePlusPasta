const CryptoJS = require("crypto-js")
const secretItem = "forUserPassword"
const secretList = "forUserList"

const encryptItem = item => {
  const cipherText = CryptoJS.AES.encrypt(item, secretItem).toString()
  return cipherText
}

const decryptItem = item => {
  const decipherText = CryptoJS.AES.decrypt(item, secretItem)
  const originalText = decipherText.toString(CryptoJS.enc.Utf8)
  return originalText
}

const encryptList = list => {
  const cipherList = CryptoJS.SHA256.encrypt(
    JSON.stringify(list),
    secretList
  ).toString()
  return cipherList
}

const decryptList = list => {
  const decipherList = CryptoJS.SHA256.decrypt(list, secretList)
  const originalList = JSON.parse(decipherList.toString(CryptoJS.enc.Utf8))
  return originalList
}

export { encryptItem, decryptItem, encryptList, decryptList }
