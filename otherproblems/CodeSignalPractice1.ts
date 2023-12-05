/**
 * 
 * You've created a new programming language, and now you've decided to add hashmap support to it. Actually you are quite disappointed that in common programming languages it's impossible to add a number to all hashmap keys, or all its values. So you've decided to take matters into your own hands and implement your own hashmap in your new language that has the following operations:

insert x y - insert an object with key x and value y.
get x - return the value of an object with key x.
addToKey x - add x to all keys in map.
addToValue y - add y to all values in map.
To test out your new hashmap, you have a list of queries in the form of two arrays: queryTypes contains the names of the methods to be called (eg: insert, get, etc), and queries contains the arguments for those methods (the x and y values).

Your task is to implement this hashmap, apply the given queries, and to find the sum of all the results for get operations.
 * 
 */


class CustomMapHandler {
    
  public myMap = new Map<number, number>();
  private keys = new Set<number>();
  private cum_k = 0;
  private key_sums = new Map<number, number>();
  private cur_operation = 0;
  private operation_val_sums = new Map<number, number>();
  private operations_when_added = new Map<number, number>();
  
  public addToKey(num: number) {
      this.cum_k += num;
  }
  
  public addToValue(num: number) {
      this.cur_operation++;
      this.operation_val_sums.set(this.cur_operation, num);
  }
  
  public insert(x: number, y: number) {
      const adjustedKey = x - this.cum_k;
      this.keys.add(adjustedKey);
      this.operations_when_added.set(adjustedKey, this.cur_operation);
      return this.myMap.set(adjustedKey, y);
  }
  
  public getMapValue(key: number) {
      const adjustedKey = key - this.cum_k;
      let sum = 0;
      for (let i = this.cur_operation; i > this.operations_when_added.get(adjustedKey); i--) {
          sum += this.operation_val_sums.get(i);
      }
      return this.myMap.get(adjustedKey) + sum;
  }
  
}


function solution(queryType: string[], query: number[][]): number {
    // note to self: failed two testcases on efficiency
  const mapHandler = new CustomMapHandler();
  let sum = 0;
  let iteration = 0;
  for (const q of queryType) {
      switch (q) {
          case 'insert':
              mapHandler.insert(query[iteration][0], query[iteration][1])
              break;
          case 'get':
              const value = mapHandler.getMapValue(query[iteration][0]);
              if (value) {
                  sum += value;
              }
              break;
          case 'addToValue':
              mapHandler.addToValue(query[iteration][0])
              break;
          case 'addToKey':
              mapHandler.addToKey(query[iteration][0])
              break;
          default:
              break;
      }
      iteration++;
  }
  return sum;
}
