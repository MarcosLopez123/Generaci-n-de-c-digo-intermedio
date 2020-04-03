//Función para el caso 1
function caso1(){
    var expIngresada = document.getElementById("expresion").value;              //Se obtiene la expresión ingresada y se guarda en una variable
    document.getElementById("mostrarExpI").innerHTML=expIngresada;              //Se asigna la expresión ingresada a la etiqueta que tiene el id = mostrarExpI.
    var signosP = /[a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|)( |)(\*|\/)( |)([a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|))/gm;    //La variable signosP contiene la expresión regular que ayuda a encontrar las operaciones con * o /.
    var signosS = /[a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|)( |)(\+|\-)( |)([a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|))/gm;    //La variable signosS contiene la expresión regular que ayuda a encontrar las operaciones con + o -.
    var text = ""; var sup =["ini"]; var i; var mod; let t; let t2; t = expIngresada.match(signosP);                //La variable t,contiene todos las operaciones con los signos * o /
    for (i = 0; i < t.length; i++) {                                            //Se inicia un ciclo for donde se reemplaza  por un temporal las operaciones con el signo * o /.
        text += "t[" +i + "] = "+ t[i] + "<br>";                                //La variable text, almacena el procedimiento que se sigue para simplificar la operación
        sup[i] = "t[" +i + "]";                                                 //El arreglo sup[], almacena todos los temporales que estamos utilizando.Por ejemplo: t[0], t[1]
        expIngresada = expIngresada.replace(t[i],sup[i]);                       //En la expresion se sustituye la expresión almacenada en t[i] por el temporal que tien sup[i] 
    }   //Fin de for
	t2 = expIngresada.match(signosS); i=t.length;                               //La variable i, contiene la cantidad de operaciones con los signos + o -.
    for (j=0; j< t2.length; j++) {                                              //Se inicia un ciclo for donde se reemplaza  por un temporal las operaciones con el signo * o /.
        t[i]=t2[j];                                                             //Se le asigna a t[i], lo que tiene t2 en la posición [j]
        text += "t[" +i + "] = "+ t[i] +"<br>";                                 //La variable text, almacena el procedimiento que se sigue para simplificar la operación
        sup[i] = "t[" +i + "]";                                                 //El arreglo sup[], almacena todos los temporales que estamos utilizando.Por ejemplo: t[0], t[1]
        expIngresada = expIngresada.replace(t[i],sup[i]); i++                   //En la expresion se sustituye la expresión almacenada en t[i] por el temporal que tien sup[i] 
    } //Fin for
    document.getElementById("desarro").innerHTML=text;                          //Muestra todos los pasos que se siguio para simplificar la expresión
    document.getElementById("textmod").innerHTML=expIngresada;                  //Asigna a X la última variable utilizada
}//Fin de la función caso1()






function caso2(){ //Función para el caso 2
    var expIngresada = document.getElementById("expresion2").value;              //Se obtiene la expresión ingresada y se guarda en una variable
    document.getElementById("mostrarExpI2").innerHTML=expIngresada;              //Se asigna la expresión ingresada a la etiqueta que tiene el id = mostrarExpI2
    var signosP = /[a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|)( |)(\*|\/)( |)([a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|))/gm;    //La variable signosP contiene la expresión regular que ayuda a encontrar las operaciones con * o /.
    var signosS = /[a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|)( |)(\+|\-)( |)([a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|))/gm;    //La variable signosS contiene la expresión regular que ayuda a encontrar las operaciones con + o -.
    var sigman=/( |)(\*|\/)( |)/gm; var sigmen=/( |)(\+|\-)( |)/gm; let t; let a; let t2; var text = ""; var x; var sup =["ini"]; var i=0; var i2=0; var j; var c=0,co=0; //Se declaran las variables
    let sigg = expIngresada.match(sigman); var cantP=sigg.length;                 //La variable cantP contiene la cantidad de signos * y /.
    let sigmenor = expIngresada.match(sigmen); var cantSignosM = sigmenor.length; //La variable cantSignosM contiene la cantidad de signos + y -.      
    t = expIngresada.match(signosP);                                              //La variable t,contiene todos las operaciones con los signos * o /
    while(i < cantP){                                                             //Si i es menor a la cantidad de signos de* y /. Se repite el ciclo.
        t2 = expIngresada.match(signosP);                                         //t2 obtiene las operaciones con los signos * y +.
        t[c]=t2[0];                                                               //Se asigna al arreglo t en la posición [c], el primer resultado que se guarda en el arreglo t2[]
        for(j=0; j<1; j++){                                                       //Se inicia un ciclo for donde se reemplaza por un temporal la expresión que está entre parentesis.
            text += "t[" +c + "] = "+ t[c] + "<br>";                              //La variable text, almacena el procedimiento que se sigue para simplificar la operación            
            sup[c] = "t[" +c + "]";                                               //El arreglo sup[], almacena todos los temporales que estamos utilizando.Por ejemplo: t[0], t[1]
            expIngresada = expIngresada.replace(t[c],sup[c]); c++                 //En la expresion se sustituye la expresión almacenada en t[c] por el temporal que tien sup[c]              
        } i++  //Incrementa i       
    } //Fin while
    while(i2 < cantSignosM){                                                        //Mientras i2 sea menor a la cantidad de signos + y -, se repite el ciclo.      
        t2 = expIngresada.match(signosS);                                           //t2 almacena las operaciones que tienen los signos + o -.
        t[c]=t2[0];                                                                 //Se asigna al arreglo t en la posición [c], el primer resultado que se guarda en el arreglo t2[]
        for(j=0; j<1; j++){                                                         //Se inicia un ciclo for donde se reemplaza por un temporal la expresión que está entre parentesis.
            text += "t[" +c + "] = "+ t[c] + "<br>";                                //La variable text, almacena el procedimiento que se sigue para simplificar la operación
            sup[c] = "t[" +c + "]";                                                 //El arreglo sup[], almacena todos los temporales que estamos utilizando.Por ejemplo: t[0], t[1]
            expIngresada = expIngresada.replace(t[c],sup[c]); c++                   //En la expresion se sustituye la expresión almacenada en t[c] por el temporal que tien sup[c]          
        } i2++  //Incrementa i2       
    } //Fin while
    document.getElementById("desarro2").innerHTML=text;                             //Se muestra dentro del html el desarrollo de generación de los temporales.
    document.getElementById("textmod2").innerHTML=expIngresada;                     //Se muestra dentro del html el resultado de X               
}     //Fin de la función caso2()







//Función para el caso 3
function caso3(){
    var expIngresada = document.getElementById("expresion3").value;                  //Se obtiene la expresión ingresada y se guarda en una variable
    document.getElementById("mostrarExpI3").innerHTML=expIngresada;                  //Se asigna la expresión ingresada a la etiqueta que tiene el id = mostrarExpI3
    let cPAbier; var parentesis = /\([a-zA-Z0-9]{1,}( |\[\d\]{1}|)(\*|\/|\+|\-)( |)[a-zA-Z0-9]{1,}( |\[\d\]{1}|)\)/gm;
    var parAbier=/\(/gm; cPAbier=expIngresada.match(parAbier); var cParenterisis=cPAbier.length; //Para saber la cantidad de parentesis que existen
    var signoP = /[a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|)( |)(\*|\/)( |)([a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|))/gm; //La variable signoP contiene la expresión regular que ayuda a encontrar las operaciones con * o /.
    var signoS = /[a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|)( |)(\+|\-)( |)([a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|))/gm; //La variable signoP contiene la expresión regular que ayuda a encontrar las operaciones con + o -.
    var sma=/( |)(\*|\/)( |)/gm; var signosmenores=/( |)(\+|\-)( |)/gm;        
    var text = ""; var x;  let t; let a; let t2; var sup =["ini"]; var i4=0; var i5=0; var i3=0; var j; var c=0;
    t = expIngresada.match(parentesis);                                             //t, contiene las operaciones entre parentesis
    while(i3 < cParenterisis){                                                      //mientras i3 sea menor a la cantidad de parentesis, el bucle se repite.
        t2 = expIngresada.match(parentesis);                                        //t2 almacena las operaciones que están entre parentesis
        t[c]=t2[0];                                                                 //Se asigna al arreglo t en la posición [c], el primer resultado que se guarda en el arreglo t2[]
        for(j=0; j<1; j++){                                                         //Se inicia un ciclo for donde se reemplaza por un temporal la expresión que está entre parentesis.
            text += "t[" +c + "] = "+ t[c] + "<br>";                                //La variable text, almacena el procedimiento que se sigue para simplificar la operación
            sup[c] = "t[" +c + "]";                                                 //El arreglo sup[], almacena todos los temporales que estamos utilizando.Por ejemplo: t[0], t[1]
            expIngresada = expIngresada.replace(t[c],sup[c]); c++                   //En la expresion se sustituye la expresión almacenada en t[c] por el temporal que tien sup[c]             
        } i3++ //Incrementa i3
    } //Fin de while                    
    let vari1=expIngresada.match(sma); var v1=vari1.length;                         // v1 contiene la cantidad de signos prioritarios como * y /, que están dentro de la expresión que resulto después de terminar el ciclo while.
    while(i4 < v1){                                                                 //Mientras i4 sea menor a la cantidad de v1, el bucle se sigue repitiendo
        t2 = expIngresada.match(signoP);                                            //t2 almacena las operaciones que tienen los signos * o /.
        t[c]=t2[0];                                                                 //Se asigna al arreglo t en la posición [c], el primer resultado que se guarda en el arreglo t2[]
        for(j=0; j<1; j++){                                                         //Se inicia un ciclo for donde se reemplaza por un temporal la expresión que está entre parentesis.
            text += "t[" +c + "] = "+ t[c] + "<br>";                                //La variable text, almacena el procedimiento que se sigue para simplificar la operación
            sup[c] = "t[" +c + "]";                                                 //El arreglo sup[], almacena todos los temporales que estamos utilizando.Por ejemplo: t[0], t[1]
            expIngresada = expIngresada.replace(t[c],sup[c]); c++                   //En la expresion se sustituye la expresión almacenada en t[c] por el temporal que tien sup[c]             
        } i4++  //Incrementa i4       
    }//Fin while
    let vsig1=expIngresada.match(signosmenores); var vs1=vsig1.length;              //vs1 contiene la cantidad de las operaciones con los signos + y -.
    while(i5 < vs1){                                                                //Si i5 es menor a vs1, se repite el bucle while.
        t2 = expIngresada.match(signoS);                                            //t2 almacena las operaciones que tienen los signos + o -
        t[c]=t2[0];                                                                 //Se asigna al arreglo t en la posición [c], el primer resultado que se guarda en el arreglo t2[]
        for(j=0; j<1; j++){                                                         //Se inicia un ciclo for donde se reemplaza por un temporal la expresión que está entre parentesis.
            text += "t[" +c + "] = "+ t[c] + "<br>";                                //La variable text, almacena el procedimiento que se sigue para simplificar la operación
            sup[c] = "t[" +c + "]";                                                 //El arreglo sup[], almacena todos los temporales que estamos utilizando.Por ejemplo: t[0], t[1]
            expIngresada = expIngresada.replace(t[c],sup[c]); c++                   //En la expresion se sustituye la expresión almacenada en t[c] por el temporal que tien sup[c]              
        } i5++  //Incrementa i5      
    } //Fin while
    document.getElementById("desarro3").innerHTML=text;                             //Se muestra dentro del html el desarrollo de generación de los temporales.
    document.getElementById("textmod3").innerHTML=expIngresada;                     //Se muestra dentro del html el resultado de X
} //Fin de la función caso3()






//Función para el caso 4 
function caso4(){
    var expIngresada = document.getElementById("expresion4").value;                     //Se obtiene la expresión ingresada y se guarda en una variable
    document.getElementById("mostrarExpI4").innerHTML=expIngresada;                     //Se asigna la expresión ingresada a la etiqueta que tiene el id =mostrarExpI4    let cPAbier;
    var parentesis = /\([a-zA-Z0-9]{1,}( |\[\d\]{1}|)(\*|\/|\+|\-)( |)[a-zA-Z0-9]{1,}( |\[\d\]{1}|)\)/gm;   //La variable parentesis contiene la expresión regular que ayuda a encontrar cualquier operación que este dentro de parentesis
    var parAbier=/\(/gm; cPAbier=expIngresada.match(parAbier); var cParenterisis=cPAbier.length;            //Para saber la cantidad de parentesis que existen
    var signoP = /[a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|)( |)(\*|\/)( |)([a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|))/gm; //La variable signoP contiene la expresión regular que ayuda a encontrar las operaciones con * o /.
    var signoS = /[a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|)( |)(\+|\-)( |)([a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|))/gm; //La variable signoS contiene la expresión regular que ayuda a encontrar las operaciones con + o -.
    var mensR =/[a-zA-Z0-9]{1,}\[\d\]{1}/gm; var sma=/( |)(\*|\/)( |)/gm; var signosmenores=/( |)(\+|\-)( |)/gm; var text = ""; var x;  let t; let a; let t2; var sup =["ini"]; var i4=0; var i5=0; var i3=0; var j; var c=0;
    t = expIngresada.match(parentesis);                                                 //La variable t, contiene la cantidad de parentesis de abiertas dentro de la expresión ingresada.
    while(i3 < cParenterisis){                                                          //Se crea un ciclo while, donde la condición es que se repita siempre que i3 sea menor a la cantidad de parentesis encontradas en la expresión
        t2 = expIngresada.match(parentesis);                                            //t2 almacena las operaciones que están entre parentesis
        t[c]=t2[0];                                                                     //Se asigna al arreglo t en la posición [c], el primer resultado que se guarda en el arreglo t2[]
        for(j=0; j<1; j++){                                                             //Se inicia un ciclo for donde se reemplaza por un temporal la expresión que está entre parentesis.
            text += "t[" +c + "] = "+ t[c] + "<br>";                                    //La variable text, almacena el procedimiento que se sigue para simplificar la operación
            sup[c] = "t[" +c + "]";                                                     //El arreglo sup[], almacena todos los temporales que estamos utilizando.Por ejemplo: t[0], t[1]
            expIngresada = expIngresada.replace(t[c],sup[c]); c++                       //En la expresion se sustituye la expresión almacenada en t[c] por el temporal que tien sup[c].            
        }    i3++ //Aumenta i3 en un valor.
    }             //Fin de while
    let vari1=expIngresada.match(sma); var v1=vari1.length;                             //Se le asigna a la variable v1, la cantidad de los signos prioritarios como * y /, que están dentro de la expresión que resulto después de terminar el ciclo while.
    while(i4 < v1){                                                                     //Mientras i4 sea menor a la cantidad de signos encontrados se repite el bucle while.
        t2 = expIngresada.match(signoP);                                                //t2 almacena las operaciones que tienen los signos * o /.
        t[c]=t2[0];                                                                     //Se asigna al arreglo t en la posición [c], el primer resultado que se guarda en el arreglo t2[]
        for(j=0; j<1; j++){                                                             //Se inicia un ciclo for donde se reemplaza  por un temporal las operaciones con el signo + o - 
            text += "t[" +c + "] = "+ t[c] + "<br>";                                    //La variable text, almacena el procedimiento que se sigue para simplificar la operación
            sup[c] = "t[" +c + "]";                                                     //El arreglo sup[], almacena todos los temporales que estamos utilizando.Por ejemplo: t[0], t[1]
            expIngresada = expIngresada.replace(t[c],sup[c]); c++                       //En la expresion se sustituye la expresión almacenada en t[c] por el temporal que tien sup[c]                   
         } i4++     //Aumenta i4 en un valor.              
    }              //Fin de while             
    let vsig1=expIngresada.match(mensR); var vs1=vsig1.length;                          //Se crea la variable vs1, que almacena la cantidad de temporales que existen hasta ahora dentro de la expresión.
    if(vs1==1){                                                                         //Si la expresion solo tiene una operación entonces muestra el resultado
        document.getElementById("desarro4").innerHTML=text;                             //Se muestra dentro del html el desarrollo de generación de los temporales.
        document.getElementById("textmod4").innerHTML=expIngresada;                     //Se muestra dentro del html el resultado de X
    } //Fin if
    let varia2=expIngresada.match(signosmenores); var v3=varia2.length;                 //La variable v3 contiene la cantidad de operaciones con signos + o - que existen en la expresión.
    if(v3>0){                                                                           //Si existe alguna operación con el signo + o - entonces sigue simplificando las operaciones. y al final imprime los resultados.   
        while(i5 < v3){                                                                 //Mientras i5 sea menor a la cantidad de signos encontrados se repite el bucle while.
            t2 = expIngresada.match(signoS);                                            //t2 almacena las operaciones que tienen los signos + o -           
            t[c]=t2[0];                                                                 //Se asigna al arreglo t en la posición [c], el primer resultado que se guarda en el arreglo t2[]           
            for(j=0; j<1; j++){                                                         //Se inicia un ciclo for donde se reemplaza  por un temporal las operaciones con el signo + o -.           
                text += "t[" +c + "] = "+ t[c] + "<br>";                                //La variable text, almacena el procedimiento que se sigue para simplificar la operación
                sup[c] = "t[" +c + "]";                                                 //El arreglo sup[], almacena todos los temporales que estamos utilizando.Por ejemplo: t[0], t[1]
                expIngresada = expIngresada.replace(t[c],sup[c]); c++                   //En la expresion se sustituye la expresión almacenada en t[c] por el temporal que tien sup[c]                    
            } i5++   //Aumenta i5 en un valor.   
         }   //Fin de while
        document.getElementById("desarro4").innerHTML=text;                             //Se muestra dentro del html el desarrollo de generación de los temporales.
        document.getElementById("textmod4").innerHTML=expIngresada;                     //Se muestra dentro del html el resultado de X  
    } //Fin de if
} //Fin de la Función caso4()






//Función para el caso 5
function caso5(){
    var expIngresada = document.getElementById("expresion5").value;                     //Se obtiene la expresión ingresada y se guarda en una variable
    document.getElementById("mostrarExpI5").innerHTML=expIngresada;                     //Se asigna la expresión ingresada a la etiqueta que tiene el id =mostrarExpI5
    let cPAbier; var text = ""; var x;  let t; let a; let t2; var sup =["ini"]; var i4=0; var i5=0; var i3=0; var j; var c=0;   //Se crean todas las variable que se van a utilizar dentro de esta funcion
    var parentesis =/\(( |)[a-zA-Z0-9]{1,}( |\[\d\]{1}|)( |)(\*|\/|\+|\-)( |)[a-zA-Z0-9]{1,}( |\[\d\]{1}|)( |)\)/gm;            //La variable parentesis contiene la expresión regular que ayuda a encontrar cualquier operación que este dentro de parentesis
    var parAbier=/\(/gm;                                                                //La variable parAbier contiene la expresión regular que ayuda a encontrar todos los parentesis abiertos "("
    cPAbier=expIngresada.match(parAbier);                                               //Esta variable cPAbier obtiene todas las los parentesis abiertos
    var cParenterisis=cPAbier.length;                                                   //cParenterisis contiene la cantidad de parentesis que existen
    var signoP = /[a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|)( |)(\*|\/)( |)([a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|))/gm;  //La variable parentesis contiene la expresión regular que ayuda a encontrar 
    var signoS = /[a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|)( |)(\+|\-)( |)([a-zA-Z0-9]{1,}(\d{1,}| |\[\d\]{1}|))/gm; //La variable parentesis contiene la expresión regular que ayuda a encontrar 
    var sma=/( |)(\*|\/)( |)/gm;                                                        //La variable sma contiene la expresión regular que ayuda a los signos prioritarios com * y / 
    var signosmenores=/( |)(\+|\-)( |)/gm;                                              //La variable signosmenores contiene la expresión regular que ayuda a encontrar los signos + y -
    var mensR =/[a-zA-Z0-9]{1,}\[\d\]{1}/gm;                                            //La variable mensR contiene la expresión regular que ayuda a encontrar un temporal, por ejemplo t[5]
    t = expIngresada.match(parentesis);                                                 //La variable t, contiene la cantidad de parentesis de abiertas dentro de la expresión ingresada.
    while(i3 < cParenterisis){                                                          //Se crea un ciclo while, donde la condición es que se repita siempre que i3 sea menor a la cantidad de parentesis encontradas en la expresión
        t2 = expIngresada.match(parentesis);                                            //t2 almacena las operaciones que están entre parentesis
        t[c]=t2[0];                                                                     //Se asigna al arreglo t en la posición [c], el primer resultado que se guarda en el arreglo t2[]
        for(j=0; j<1; j++){                                                             //Se inicia un ciclo for donde se reemplaza por un temporal la expresión que está entre parentesis.
            text += "t[" +c + "] = "+ t[c] + "<br>";                                    //La variable text, almacena el procedimiento que se sigue para simplificar la operación
            sup[c] = "t[" +c + "]";                                                     //El arreglo sup[], almacena todos los temporales que estamos utilizando.Por ejemplo: t[0], t[1]
            expIngresada = expIngresada.replace(t[c],sup[c]); c++                       //En la expresion se sustituye la expresión almacenada en t[c] por el temporal que tien sup[c]
        }   i3++ //Aumenta i3 en un valor.
    }             //Fin de while        
    let vva1; vva1 = expIngresada.match(sma);                                           //Se crea la variable vva1, y esta contiene los signos prioritarios como * y /, que están dentro de la expresión que resulto después de terminar el ciclo while.
    if(vva1==null){                                                                     //SI NO EXISTE OPERACIONES CON LOS SIGNOS * Y / ENTONCES, SE BUSCA SI EXISTE OPERACIONES CON + Y -.
        let varia2=expIngresada.match(signosmenores); var v3=varia2.length;             //La variable v3 obtiene cuántos signos conmenor prioridad com + y - están dentro de la expresión que resulto después de terminar el ciclo while.
        while(i5 < v3){                                                                 //Mientras i5 sea menor a la cantidad de signos encontrados se repite el bucle while.
            t2 = expIngresada.match(signoS);                                            //t2 almacena las operaciones que tienen los signos + o -
            t[c]=t2[0];                                                                 //Se asigna al arreglo t en la posición [c], el primer resultado que se guarda en el arreglo t2[]
            for(j=0; j<1; j++){                                                         //Se inicia un ciclo for donde se reemplaza  por un temporal las operaciones con el signo + o - 
                text += "t[" +c + "] = "+ t[c] + "<br>";                                //La variable text, almacena el procedimiento que se sigue para simplificar la operación
                sup[c] = "t[" +c + "]";                                                 //El arreglo sup[], almacena todos los temporales que estamos utilizando.Por ejemplo: t[0], t[1]
                expIngresada = expIngresada.replace(t[c],sup[c]); c++                   //En la expresion se sustituye la expresión almacenada en t[c] por el temporal que tien sup[c]      
            }   i5++   //Aumenta i5 en un valor.
        }               //Fin de while   
        document.getElementById("desarro5").innerHTML=text;                             //Se muestra dentro del html el desarrollo de generación de los temporales.
        document.getElementById("textmod5").innerHTML=expIngresada;                     //Se muestra dentro del html el resultado de X
    }
    //Si existen operaciones con los signos * y / los realiza
    let vari1=expIngresada.match(sma); var v1=vari1.length;                             //Se le asigna a la variable v1, la cantidad de los signos prioritarios como * y /, que están dentro de la expresión que resulto después de terminar el ciclo while.
    while(i4 < v1){                                                                     //Mientras i4 sea menor a la cantidad de signos encontrados se repite el bucle while.
        t2 = expIngresada.match(signoP);                                                //t2 almacena las operaciones que tienen los signos * o /.
        t[c]=t2[0];                                                                     //Se asigna al arreglo t en la posición [c], el primer resultado que se guarda en el arreglo t2[]
        for(j=0; j<1; j++){                                                             //Se inicia un ciclo for donde se reemplaza  por un temporal las operaciones con el signo + o - 
            text += "t[" +c + "] = "+ t[c] + "<br>";                                    //La variable text, almacena el procedimiento que se sigue para simplificar la operación
            sup[c] = "t[" +c + "]";                                                     //El arreglo sup[], almacena todos los temporales que estamos utilizando.Por ejemplo: t[0], t[1]
            expIngresada = expIngresada.replace(t[c],sup[c]); c++                       //En la expresion se sustituye la expresión almacenada en t[c] por el temporal que tien sup[c]                       
        }    i4++   //Aumenta i4 en un valor.            
    }               //Fin de while  
    let vsig1=expIngresada.match(mensR); var vs1=vsig1.length;                          //Se crea la variable vs1, que almacena la cantidad de temporales que existen hasta ahora dentro de la expresión.
    if(vs1==1){                                                                         //Si la expresion solo tiene una operación entonces muestra el resultado
    document.getElementById("desarro5").innerHTML=text;                                 //Se muestra dentro del html el desarrollo de generación de los temporales.
    document.getElementById("textmod5").innerHTML=expIngresada;                         //Se muestra dentro del html el resultado de X
    }                                                                                   //Fin If
    let varia2=expIngresada.match(signosmenores); var v3=varia2.length;                 //La variable v3 contiene la cantidad de operaciones con signos + o - que existen en la expresión.
    if(v3>0){                                                                           //Si existe alguna operación con el signo + o - entonces sigue simplificando las operaciones. y al final imprime los resultados.   
        while(i5 < v3){                                                                 //Mientras i5 sea menor a la cantidad de signos encontrados se repite el bucle while.           
            t2 = expIngresada.match(signoS);                                            //t2 almacena las operaciones que tienen los signos + o -           
            t[c]=t2[0];                                                                 //Se asigna al arreglo t en la posición [c], el primer resultado que se guarda en el arreglo t2[]           
            for(j=0; j<1; j++){                                                         //Se inicia un ciclo for donde se reemplaza  por un temporal las operaciones con el signo + o -.           
                text += "t[" +c + "] = "+ t[c] + "<br>";                                //La variable text, almacena el procedimiento que se sigue para simplificar la operación
                sup[c] = "t[" +c + "]";                                                 //El arreglo sup[], almacena todos los temporales que estamos utilizando.Por ejemplo: t[0], t[1]
                expIngresada = expIngresada.replace(t[c],sup[c]); c++                   //En la expresion se sustituye la expresión almacenada en t[c] por el temporal que tien sup[c]                    
            }   i5++   //Aumenta i5 en un valor.      
        }               //Fin de while  
        document.getElementById("desarro5").innerHTML=text;                             //Se muestra dentro del html el desarrollo de generación de los temporales.
        document.getElementById("textmod5").innerHTML=expIngresada;                     //Se muestra dentro del html el resultado de X    
    }    //Fin del if
}   //Fin de la función caso5()
