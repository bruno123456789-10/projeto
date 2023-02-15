const dados = ["nome", 0, "altura", "peso", "profissao", "salario"];
let texto = "";
let loop = 0;

function registrar() {
    loop++;
    while (loop == 1) {
        
        dados[0] = prompt("Qual o nome da pessoa que deseja registrar?");
        dados[1] = Number(prompt("Quantos anos de idade tem " + dados[0] + "?"));
        dados[2] = prompt("Qual a altura de " + dados[0] + " em cm?");
        dados[3] = prompt(dados[0] + " pesa quanto em quilos?");
        dados[4] = prompt(dados[0] + " é formado em qual area? \n 1-Faxineiro \n 2-Medico \n 3-TI \n 4-Silveiro");
        
        
        loop = prompt("Deseja registrar mais alguem?");
        
        if (loop == "sim" || loop == "Sim") {
            loop = 1;
        }else{
            loop = 0;
        }
        
        if (dados[4] == 1) {
            dados[4] = "faxineiro";
        }
        if (dados[4] == 2) {
            dados[4] = "medico";
        }
        if (dados[4] == 3) {
            dados[4] = "ti";
        }
        if (dados[4] == 4) {
            dados[4] = "silveiro";
        }
        
        
    switch (dados[4]) {
        case "faxineiro":
            dados[5] = "1.500 R$";                
            break;
                
        case "medico":
            dados[5] = "7.500 R$";                
            break;
                    
        case "ti":
            dados[5] = "10.000 R$";                
            break;
                        
        case "silveiro":
            dados[5] = "56.080 R$";                
            break;
                            
        default:
            break;
        }
    }
    texto = dados[0] + " tem " + dados[1] + " anos, " + dados[2] + "cm de altura e pesa " + dados[3] + " quilos." + "</br>" + "Formado em: " + dados[4] + "</br>" + "Salario: " + dados[5] + "</br>";

    document.getElementById("dados").innerHTML += texto;
}
                    