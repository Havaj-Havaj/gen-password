function generatePassword(text, num, t){
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789'
  const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~'
  let newPassword = ''
  if(text ===  'easy')  newPassword = alphabet
  if(text === 'normal')  newPassword = alphabet + digits
  if(text === 'hard')  newPassword = alphabet + digits + symbols
 
  for(let i = 0; i < t; i++) {
    console.log(newPassword.split('').sort(() => Math.random() - 0.5).join('').substring(0, num))
  } 
}   

generatePassword('hard', 5, 3)