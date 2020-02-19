import { Article } from './article';
import { Content } from '@angular/compiler/src/render3/r3_ast';

export const ARTICLES: Article[] = [
{
    id: 1,
    title: 'My First Blog',
    content: "",
    description: "This is my first article. it's great Please read it! :)",
    date: new Date(),
    key: "my-first-article",
    imageUrl: "https://angular.io/assets/images/logos/angular/angular.png",
},

{
    id: 2,
    title: 'My Second Blog',
    content: "",
    description: "Also a great article",
    date: new Date(),
    key: "my-second-article",
    imageUrl: "https://angular.io/assets/images/logos/angular/angular_solidBlack.png",
}
];
