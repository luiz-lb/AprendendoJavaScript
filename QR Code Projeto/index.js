//1. Use the inquirer npm package to get user input.*/
import  inquirer  from  'inquirer'; 
import qr from 'qr-image';
import fs from 'fs';

inquirer 
  . prompt ( [ 
        {
      message: 'Digite a URL desejada para gerar o QR Code:',
      name: 'URL',
    },
  ] ) 
  . then ( ( answers )  =>  { 
      console.log(answers.URL)
      var imgcode = qr.image(answers.URL);
      var caminhoSalvar = fs.WriteStream('./meu_qrcode.png')
      imgcode.pipe(caminhoSalvar)

  } ) 
  . catch ( ( error )  =>  { 
    if  ( error . isTtyError )  { 
      // O prompt não pôde ser renderizado no ambiente atual 
    }  else  { 
      // Algo mais deu errado 
    } 
  } ) ;
//2. Use the qr-image npm package to turn the user entered URL into a QR code image.
//3. Create a txt file to save the user input using the native fs node module.
