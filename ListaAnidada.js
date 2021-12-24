class NodoNumero{
    constructor(numero){
        this.numero = numero
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaNumeros{
    constructor(){
        this. inicio = null;    
    }

    InsertarNumero(numero){
        let Nuevonumero = new NodoNumero(numero);

        if(this.inicio == null){
            this.inicio = Nuevonumero;
            return this.inicio;
        }else{
            let temp = this.inicio;
            while(temp.siguiente != null){
                temp = temp.siguiente;
            }
            temp.siguiente = numero;
            numero.anterior = temp;
            return numero;
        }

    }

}




class NodoNombre{
    constructor(nombre){
        this.nombre = nombre;
        this.numeros = new ListaNumeros();
        this.siguiente = null;
        this.anterior = null;
    }
}

class ListaNombres{
    constructor(){
        this.inicio;
    }
    InsertarNombre(nombre){
        let nuevoNombre = new NodoNombre(nombre);

        if(this.inicio == null){
            this.inicio = nuevoNombre;
            return this.inicio;
        }else{
            let temp = this.inicio;

            while(temp.siguiente != null){
                temp = temp.siguiente;
            }
            temp.siguiente = nuevoNombre;
            nuevoNombre.anterior = temp;
            return nuevoNombre;
        }
    }

    InsertarNumeroAnidado(nombre, numero){
        let temp = this.inicio;
        while(temp != null){
            if(temp.nombre == nombre){
                let listanumeros = temp.numeros;
                listanumeros.InsertarNumero(numero);
                return temp;
            }
            temp = temp.siguiente;
        }
        return null;

        
    }
}
