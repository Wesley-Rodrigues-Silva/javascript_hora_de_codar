const nums = [1, 2 ,3 ,4 ,5];

nums.forEach((num) => {
    console.log(`O número ${num}`);
})

const posts = [
    { title: 'Primeiro post', category: 'PHP'},
    { title: 'Segundo post', category: 'JavaScript'},
    { title: 'Terceiro post', category: 'Python'},

];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
})