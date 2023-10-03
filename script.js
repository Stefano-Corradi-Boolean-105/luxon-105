
// inizializzo una variabile globale di Luxon
const dt = luxon.DateTime;

import  { tasks }  from "./tasks.js";

const {createApp} = Vue;

createApp({
  data(){
    return{
      titolo:'Ciao Luxon',
      clock:'',
      second: null,
      tasks
    }
  },
  methods:{
    printClock(){
      this.clock = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS)
      this.second = dt.now().second;
    }
  },
  computed:{
    oddEvenSecond(){
      return (this.second % 2) ? 'dispari' : 'pari';
    },

    taskFatti(){
      return this.tasks.filter(task => task.done)
    },

    taskNonFatti(){
      return this.tasks.filter(task => !task.done)
    }

  },
  mounted(){
    this.printClock()
    setInterval(()=>{
      this.printClock()
    },1000)

  }
}).mount('#app');