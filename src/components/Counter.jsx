import React from "react";
import Counters from "../store/counter";
import {observer} from "mobx-react-lite";

const Counter = observer(() => {
  return (
    <div className="counter">
      <div className="counter__total">{Counters.total}</div>
      <div className="counter__list">
        {Counters.counters.map(counter => (
          <div className="counter__item" key={counter.id}>
            <div className="title">{counter.count}</div>
            <div className="btn-box">
              <button className="btn" onClick={() => Counters.increment(counter.id)}>+</button>
              <button className="btn" onClick={() => Counters.decrement(counter.id)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})

export default Counter;