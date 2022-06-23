const obj = [
    {
        key: 'g',
    },
     {
        key: 'e',
     },
     {
        key: 'e',
     },
     {
        key: 'k'
     },
     {
        key: 't'
     },
]
const obj2 = [
    {...obj},
    {
        key: 'e',
    },
    {
        key: 'c',
    },
    {
        key: 'h',
    },
]

console.log(obj2);