import news from "../assets/news.png"
import youtube from "../assets/youtube.png"
import crud from "../assets/crud.png"

const work = [{
  title : "The Observer's Insight.",
  image : news , 
  description : {
    one : 'Developed a MERN stack news app with admin panel and protected routes.',
    two : 'Implemented commenting and news categorization features for users.',
    three : 'Added a weather section for checking city-specific forecasts'
  },
  link : 'https://the-observers-insight.vercel.app/',
  github : 'https://github.com/Durgesh18-p/NewsApp'
},{
  title : "Content Hub.",
  image : youtube , 
  description : {
    one : 'Video content app using React JS, Tailwind CSS, Material UI.',
    two : 'Used YouTube API for fetching data. Implemented real time data fetching.',
    three : 'Integrated firebase for authentication.'
  },
  link : 'https://video-content-app.netlify.app/',
  github : 'https://github.com/Durgesh18-p/YouTube'
},{
  title : "CRUD App.",
  image : crud , 
  description : {
    one : 'Built UI using React JS, Bootstrap and state is managed by Redux tool-kit.',
    two : 'User authenticated before accessing the app. Authentication done using Firebase',
    three : 'CRUD (Create , Read , Update , Delete) operations can be implemented by user.'
  },
  github : 'https://github.com/Durgesh18-p/React_JS_CRUD_App'
}]

export default work