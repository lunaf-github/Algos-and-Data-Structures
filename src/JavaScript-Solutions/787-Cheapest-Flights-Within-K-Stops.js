//weighted, directed graph
//Bellman-Ford

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
 let dist = new Array(n);
 dist.fill(Infinity);
 // our start can be any node
 dist[src] = 0;
 
 //We iterate k + 1,  
 for(let i = 0; i <= k; i++){
     let temp = [...dist];
     
     for(const flight of flights){
         const [from, to, price] = flight;
         
         if(dist[from] === Infinity) continue;
         // Always compare with the temp[to], as we iterate through flights, there might be a shorter path. 
         if(dist[from] + price < temp[to]) temp[to] = dist[from] + price;
         
     }
     
     dist = temp;
 }
 
 return (dist[dst] === Infinity)? -1: dist[dst] ;
};

// k = 1
// dist : [0, inf, inf, inf]
// temp : [0, 100, inf, inf]

// k = 2
// dist : [0, 100, inf, inf]
// temp : [0, 100, 200, 700]

