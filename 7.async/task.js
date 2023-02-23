class AlarmClock {
    constructor (){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock (time, callback) {
        if (time === null || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.find(item => item.time == time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({time, callback, canCall:true});
    }
    
    removeClock (time){
        const ind = this.alarmCollection.findIndex(element => element.time === time)
        if (ind >=0){
        this.alarmCollection.splice(ind,1);}
    }

    getCurrentFormattedTime(){
        const timeNow = new Date();
        return `${timeNow.getHours()}:${timeNow.getMinutes()}`;
    }

    start(){
        if (this.intervalId !== null) {
            return console.log("Нельзя задавать несколько интервалов")
        }
        this.intervalId = setInterval(() => {
          for (let element of this.alarmCollection) {
            if (element.time === this.getCurrentFormattedTime()){
                element.canCall = false;
                return element.callback();
            }
          }
        },1000);
    }
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        for (let element of this.alarmCollection) {element.canCall = true;}
    }
    
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}