import {makeAutoObservable} from "mobx";

class Counters {
  counters = [{id: 1, count: 0}, {id: 2, count: 0}];

  constructor() {
    makeAutoObservable(this)
  }

  increment(id) {
    this.counters = this.counters.map(counter => (counter.id === id) ? {
      ...counter,
      count: counter.count + 1
    } : counter);
  }

  decrement(id) {
    this.counters = this.counters.map(counter => (counter.id === id) ? {
      ...counter,
      count: counter.count - 1
    } : counter);
  }

  get total() {
    return this.counters.reduce((previousValue, currentValue) => {
      return previousValue.count + currentValue.count;
    })
  }
}

export default new Counters();