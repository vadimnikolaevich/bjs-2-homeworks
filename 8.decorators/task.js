//Задача № 1

function cachingDecoratorNew(func) {
    const cache = [];
  
    return function(...args) {
      const hash = md5(JSON.stringify(args));
      const entry = cache.find(entry => entry.hash === hash);
  
      if (entry) {
          return `Из кэша: ${entry.value}`;
      } else {
          const result = func.apply(this, args);
          cache.push({hash: hash, value: result});
          console.log(cache)
  
          if (cache.length > 5) {
            cache.shift();
            console.log(cache)
          }
  
          return `Вычисляем: ${result}`;
      };
    };
  };
  
  //Задача № 2
  
  function debounceDecoratorNew(fn) {
    let count = 0;
    const statistics = { callCount: 0 };
  
    function decorated(...args) {
      const isFirstCall = count === 0;
      count++;
  
      if (isFirstCall) {
        const result = fn(...args);
        if (result instanceof Promise) {
          return result.then((val) => {
            setTimeout(() => {
              console.log("Асинхронный вызов завершен", val);
            }, 0);
            return val;
          });
        } else {
          return result;
        }
      } else {
        statistics.callCount++;
      }
    }
  
    decorated.getStatistics = () => statistics;
    decorated.resetStatistics = () => {
      count = 0;
      statistics.callCount = 0;
    };
  
    return decorated;
  }
  