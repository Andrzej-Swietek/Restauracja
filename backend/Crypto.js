class Crypto {
  static salt = 'f844b09ff50c'
  static algorithm = 'aes-256-cbc';
  static hash(text) {
    return crypto.pbkdf2Sync(text.password, this.salt, 1000, 64, 'sha512').toString('hex')
  }
  static decrypt(obj) {

    // var objToDecrypt = {
    //   iv: '5ec0c6b03a4822809cf019f58d61409f',
    //   key: '302088473f86a3c6212ae60e9028cb2e1a45ad12977ee5de752d8248632cb708',
    //   encryptedText: 'fab450e53a51c0dd4dfc6b87b15fd9d56b9d0be1d6542f7af4bdf8f9462c0aad6568d3e6b4fa9910ec06e45d658afd96'
    // }

    let iv = Buffer.from(obj.iv, "hex");
    let key = Buffer.from(obj.key, "hex")
    // tekst do odszyfrowania
    let encryptedText =
      Buffer.from(obj.encryptedText, "hex");
    // deszyfrant
    let decipher = crypto.createDecipheriv(this.algorithm, key, iv);
    // aktualizacja odszyfrowanego Bufora w miarę jego budowania
    let decrypted = decipher.update(encryptedText);
    // zakończenie
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  }

}
