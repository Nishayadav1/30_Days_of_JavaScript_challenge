// LeetCode Easy

// two sum

// ---------> Two number

function twosum(l,t){
    for (let i=1;i<l.length;i++){
        if (l[i-1]+l[i]==t){
            return `${(l[i-1])} + ${l[i]} = ${t}}`
        }
    }
    return "no"
}
let l=[1,2,4,1]
let t=5
console.log(twosum(l,t))
let l1=[3,2,4,8]
let t1=12
console.log(twosum(l1,t1))
let l2=[1,2,4,3]
let t2=6
console.log(twosum(l2,t2))



// 2.
// ----------> Reverse Number
function reverse(n){
    let store=n;
    let s=''
    let m=Math.abs(n)
    while(m>0){
        let a=m%10
        m=Math.floor(m/10)
        s+=String(a)
      }
    if (store>0){
        return s
    }
    else{
        let b=s
        return -b
    }
}
console.log(reverse(123))
console.log(reverse(1230))
console.log(reverse(-1430))


// 3------------->palidrom number

function palidrom(s){
    let copys= s
    let str=""
    let m=s.split('').reverse().join(" ")
    for( let i=0;i<m.length;i++){
        if (m[i]!==" "){
            str+=m[i]
        }
    }
    if (copys===str){
        console.log("YES")
    }
    else{
        console.log("NO")
    }

}
console.log(palidrom('nisha'))
console.log(palidrom('maam'))


// 4.---------> marge two sorted list
// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print a linked list
function printLinkedList(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

// Test case 1
let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);
let mergedList = mergeTwoLists(list1, list2);
printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

// Test case 2
let list3 = createLinkedList([1, 3, 5]);
let list4 = createLinkedList([2, 4, 6]);
mergedList = mergeTwoLists(list3, list4);
printLinkedList(mergedList); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6

// Test case 3
let list5 = createLinkedList([5, 10, 15]);
let list6 = createLinkedList([2, 3, 20]);
mergedList = mergeTwoLists(list5, list6);
printLinkedList(mergedList); // Output: 2 -> 3 -> 5 -> 10 -> 15 -> 20


//----------->valid Parenthese
function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true
console.log(isValid("{[()]}")); // Output: true
console.log(isValid("")); // Output: true
console.log(isValid("[")); // Output: false
console.log(isValid("]")); // Output: false
