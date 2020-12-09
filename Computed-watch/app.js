new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    //atualizar enquanto incrementamos valores
    computed: {
    	resultado() {
    		return this.valor == 37 ? 'Valor Igual' : 'Valor diferente'
    	}
    },
    // watch minotorar a mudança
    //define o valor como 0 quando se verificar a propriedade computed
    watch: {
    	resultado(){
    		setTimeout(()=> {
    			this.valor = 0
    		}, 500)
    	}
    },
//    methods: {
//    	somare10(){
//    		this.valor += 10
//    	}
//    }
});