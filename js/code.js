//  1
document.getElementById("h2").innerHTML = "DOM method description";


//  2
let arr = document.querySelectorAll('[href^="site.ua/ua/"]');
for (let i in arr) {
    console.log (arr[i].outerHTML);
}




//  3
let list = document.querySelector('ul');

let li0 = document.createElement('li');
li0.innerHTML = 0;
li0.id = 'null';
list.prepend(li0);

let li2 = document.createElement('li');
li2.innerHTML = 2;
li2.id = 'second'
list.insertBefore(li2, list.children[2]);

let li4 = document.createElement('li');
li4.innerHTML = 4;
li4.id = 'fourth'
list.append(li4);




//  4
let aa = document.createElement('a');
aa.id = 'link';
aa.href = 'https://dom.spec.whatwg.org';
let list1 = document.querySelector('h1');
list1.before(aa);
aa.append(list1);