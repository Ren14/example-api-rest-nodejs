// Defino una constante con un conjunto de posts,
// Si necesito utilizar una BD
// Solo debo modificar esta capa, y el comportamiendo no afecta al resto de la aplicación
const postsArray = [
    {
        id: 1,
        title: 'React from scratch',
        content: 'In this article we will create a ToDo App in React from scratch.... etc.etc.etc.',
        author: 'Jakob Klamser'
    },
    {
        id: 2,
        title: 'Vanilla JavaScript Basics',
        content: 'Today we will discuss some basic JavaScript fundamentals like array manipulation, currying etc.',
        author: 'Jakob Klamser'
    },
    {
        id: 3,
        title: 'VS Code Extensions',
        content: 'I wanted to show you some of my favorite VS Code Extensions.... Bracket Pair Colorizer etc.etc.',
        author: 'Jakob Klamser'
    },
    {
        id: 4,
        title: 'ExpressJS REST API',
        content: 'Is this the current article?',
        author: 'Jakob Klamser'
    },
];

// Función que retorna todos los posts
exports.getAllPosts = () => {
    return postsArray;
};

// Función que retorna un post en particular
exports.getPostById = (postId) => {
    return postsArray.filter(post => post.id === Number(postId))
}

