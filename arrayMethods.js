// push()    pop()   unshift()

const a = [1,2,3,5,6,]

console.log(a.pop())
console.log(a.pop())
console.log(a)

console.log(a.push(4,5,6))
console.log(a)

console.log(a.unshift(0))
console.log(a)





//    S L I C E          METHOD


const copya = a.slice()

console.log(copya)

console.log(a===copya)

const copya2 = a.slice(3)
console.log(copya2)





///   S P L I C E     method 

const arrr = [1,2,3,'kbkm',4,5,6]

console.log(arrr.splice(3,1, 3.5))
console.log(arrr)



//    index method

console.log(arrr.indexOf(3.5))  //  show the index of the value

console.log(arrr[arrr.indexOf(3.5)])  //   shows the exact value




//  find index method

const bigarr = [
    {
        fname : 'abhidev',
        lname : 'jubi'
    },
    {
        fname : 'abhijath',
        lname : 'jubi'
    },
    {
        fname : 'a',
        lanme : 'j'

    }
]

console.log(bigarr.findIndex((arrItem) => {
    return arrItem.lname !== 'jubi'
}))



//   map method


const blog = [
    { title : 'a2z', category : 'uncategorized'},
    { title : 'dkvdm' , category : 'uncategorized'},
    {title : 'kdnvknvkskk', category : 'uncategorized'}

]
console.log(blog.map(arrItem => {
    arrItem.category = 'random'
    return arrItem
}))


//       forEach                   method ....or other way to write for loop

const arrz = [1,2,3,4,5,6,7]

for(let i=0; i<arrz.length; i++){
    console.log(arrz[i])

}

 arrz.forEach(arrItem =>   {   console.log(arrItem)   })



///     I N C L U D E S    method 

const colors = ['blue', 'orange', 'green','red', 'yellow']

let orangeExists = false

colors.forEach(color => {
    if(color ='orange'){
        orangeExists = true

    }
})
console.log(orangeExists)



// colors.includes('orange');
console.log(colors.includes('orange'))



// colors.indexOf('orange') !== -1 -------------   using indexOF
console.log(colors.indexOf('orange') !== -1)


// F I L T E R     METHOD

const allOrders = [
    {
        name : 'TEA POT',
        digital : false,
        cancelled : false,
        open: false
    },
    {
        name : 'blue hoodie',
        digital : false,
        cancelled : true,
        open: false
    },
    {
        name : 'book',
        digital : true,
        cancelled : true,
        open: false
    },
    {
        name : 'pen',
        digital : true,
        cancelled : false,
        open: false
    }

]

const digitalProducts = allOrders.filter(arrItem => {
    return arrItem.digital
})

console.log(digitalProducts)

const digitalandCancelledProducts = allOrders.filter(arrItem => {
    return arrItem.digital && arrItem.cancelled
})

console.log(digitalandCancelledProducts)



//  R E D U C E     method 

const array = [10,20,30,25,14]

let sum = 0
for(let i = 0; i < array.length; i++){
    sum += array[i]
}
console.log(sum)


// reduce 
function reducerCallback(sum,arrItem){
    return sum += arrItem
}

const result = array.reduce(reducerCallback, 0)
console.log(result)


// to find avearge of array using reduce method 

console.log(array.reduce((sum,arrItem) => sum += arrItem,0) / array.length)