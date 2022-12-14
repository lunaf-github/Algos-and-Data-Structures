/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
 const map = new Map();
 
 tickets.forEach(ticket =>{
   if(!map.has(ticket[0])) map.set(ticket[0], []);
   map.get(ticket[0]).push(ticket[1]);
 })
 
 let res = [];
 const path = [];
 const numTickets = tickets.length;
 
 map.forEach(destinationList => destinationList.sort())
 
 const dfs = function(start){
     if(path.length === numTickets){
         res = path; 
         return;
     }
     
     if(!map.has(start)) return;
     
     for(let i = 0; i < map.get(start).length; i++){
         const nextDestination = map.get(start)[i];
         path.push(nextDestination);
         map.get(start).splice(i,1);
         
         dfs(nextDestination);
         
         if(res.length > 0) return;
         
         map.get(start).splice(i,0,nextDestination);
         path.splice(path.length - 1, 1);
     }
 }
 
 dfs('JFK');
 res.unshift('JFK');
 return res;
};