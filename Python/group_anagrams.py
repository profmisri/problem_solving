
from collections import defaultdict

def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
    res = defaultdict(list) # mapping charCount to list of Anagrams

    for s in strs:
      count = [0] * 26 # a ... z
      
      for c in s: 
        count[ord(c)-ord("a")] += 1
        
      res[tuple(count)].append(s)
    
    return res.values()

print(groupAnagrams(['eat','ate','tea','tan','meat','nat','team']))
# time complexity is O(m.nlog(n))...

# function groupAnagrams(strs){
#   const res = {}
#   for (let s of strs){
#     const count = Array(26).fill(0)
#      for(let c of s){
#        let code = c.charCodeAt(0) - "a".charCodeAt(0)
#        count[code] += 1
#      }
#      if(res[count.join("-")] === undefined){
#       res[count.join("-")] = []
#      }
#      res[count.join("-")].push(s) 
#   }


#   return Object.values(res)
# }










# function groupAnagrams(strs){
#   const res = {}
#   for (let s of strs){
#     const count = Array(26).fill(0)
#      for(let c of s){
#        let code = c.charCodeAt(0) - "a".charCodeAt(0)
#        count[code] += 1
#      }
#      if(res[count.join("-")] === undefined){
#       res[count.join("-")] = []
#      }
#      res[count.join("-")].push(s) 
#   }


#   return Object.values(res)
# }

