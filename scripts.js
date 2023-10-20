async function createPromise(url){

    return new Promise(
        //parâmetros resolve e reject -> funções que resolvem a promise com sucesso e com erro(fracasso) respectivamente. 
        //Se for resolvido
        function(resolve, reject){
                //fazendo uma requisição ajax
                var xhr = new XMLHttpRequest();
                
                xhr.open('GET', url, true);
    
                //tratamento do retorno
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4){
                        if(xhr.status == 200){
                            resolve(xhr.responseText);
                        }else{
                        reject("Erro na requisição!");
                        }
                    }
                }
            xhr.send();
        }
    );

}

const main = async() => {
    try {
        let value  = await createPromise("data.json");
        console.log(value);
    } catch (error) {
        console.log(error);    
    }
}

main();