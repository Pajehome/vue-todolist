const todolist = new Vue({
    el: '#app',
    data: {
      biscotto:[
          {
            check: false,
            nomeIngrediente:'burro', 
          },
          {
            check: false,
            nomeIngrediente:'cioccolato',  
          },
          {
            check: false,
            nomeIngrediente:'farina', 
          },
          {
            check: false,
            nomeIngrediente:'uova', 
          },
          {
            check: false,
            nomeIngrediente:'zucchero', 
          },
      ],aggiungiIngrediente:'',
    },
    methods: {
        rimuovi(i) {
            this.biscotto.splice(i, 1);
        },
        aggiungi() {
            const ingredienteNuovo = {
                check: false,
                nomeIngrediente: this.aggiungiIngrediente,
            }
            this.biscotto.push(ingredienteNuovo)
        }
    },
})

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)