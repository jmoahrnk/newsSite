let images = 
[
'assets/images/0_2.png',
'assets/images/0_3.png',
'assets/images/0_4.png',
'assets/images/beach-picnic-2022-02-01-22-39-39-utc.jpg',
'assets/images/female-tailor-and-black-man-doing-sketch-for-cloth-2022-06-03-04-18-37-utc.jpg',
'assets/images/Image-2.png',
'assets/images/Image-5.png',
'assets/images/Image-9.png',
'assets/images/music-production-tech-abstract-background-2022-11-15-09-04-44-utc.jpg',
'assets/images/people-on-music-concert-2022-12-16-11-11-28-utc.jpg',
'assets/images/vr-dance-3d-and-senior-couple-with-games-for-crea-2022-12-14-00-33-01-utc.jpg',
'assets/images/working-in-professional-music-studio-2022-07-26-03-24-33-utc.jpg'
];

let titles =
[
'Awaited Game Release of 2023',
'New AI Trends this Year',
'Upcoming Tech for Social Media',
'Easy ways to Unwind',
'Preaparing for Online Jobs',
'Talk about Virtual',
'What is new in the Blockchain?',
'Will we make contact?',
'Current study on music trends',
'Upcoming Concerts for November',
'Great Gadgets on the Budget',
'Revived hits still on market'
];
let dates_likes = 
[
    {date: 'August 07, 2023', likes: '22.7k'}
    ,{date: 'August 12, 2023', likes: '13.7k'}
    ,{date: 'August 14, 2023', likes: '11.2k'}
    ,{date: 'August 21, 2023', likes: '12.3k'}
    ,{date: 'August 25, 2023', likes: '22.1k'}
    ,{date: 'August 28, 2023', likes: '28.4k'}
    ,{date: 'September 01, 2023', likes: '11.5k'}
    ,{date: 'September 11, 2023', likes: '16.6k'}
    ,{date: 'September 12, 2023', likes: '27.7k'}
    ,{date: 'September 13, 2023', likes: '34.4k'}
    ,{date: 'September 28, 2023', likes: '29.4k'}
    ,{date: 'September 28, 2023', likes: '23.8k'}
]

const firstArticle =document.body.querySelector('.article');
firstArticle.querySelector('.title-link').innerText = titles[0];
firstArticle.querySelector('.image-container').style.backgroundImage = `url(${images[0]})`;
firstArticle.querySelector('.date').innerText = dates_likes[0].date;
firstArticle.querySelector('.likes').innerText = dates_likes[0].likes;


const mainContent = document.body.querySelector('.articles');
for(i=1; i<=11; i++){
    const newArticle = document.body.querySelector('.article').cloneNode(true);
    newArticle.classList.add('article');
    newArticle.querySelector('.title-link').innerText = titles[i];
    newArticle.querySelector('.image-container').style.backgroundImage = `url(${images[i]})`;
    newArticle.querySelector('.date').innerText = dates_likes[i].date;
    newArticle.querySelector('.likes').innerText = dates_likes[i].likes;
    mainContent.appendChild(newArticle);
}

const favorites = document.body.querySelectorAll('.fav-icon');
const delete_btn = document.body.querySelectorAll('.del-icon');
const articles = document.body.querySelectorAll('.article');
const burger = document.body.querySelector('.dropbtn');

favorites.forEach(icon => {
    icon.addEventListener('click', function(){
        icon.classList.toggle("fav-toggle")
});
});
articles.forEach(article => {
    article.addEventListener('click', function(){
        article.querySelector('.read').classList.toggle("read-toggle", true);
    });
});
delete_btn.forEach(button => {
    button.addEventListener('click',function(){
        button.closest('.article').remove();
    })
})

burger.addEventListener('click', function(){
    document.querySelector('.hero-burger').classList.toggle("burger-toggle");
});





