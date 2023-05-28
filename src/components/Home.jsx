import React from 'react'
import { useState, useEffect } from 'react'
const blog_data=[
    {
      key1:'value1',
      key2:[
    
        {
            id:1,
            image:"birds.png",
            
            title:"How birs fly",
            paragraph:"Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the 2.8 m (9 ft 2 in) common ostrich. ",
        },
        {
            id:2,
            image:"dhoni.png",
            
            title:"The finisher MS Dhoni ",
            paragraph:"Mahendra Singh Dhoni is a former Indian cricketer. Widely considered one of the greatest captain and Wicket-keeper-batsman in history of cricket as well as a best finisher.",
        },
        {
            id:3,
            image:"facebook.png",
            
            title:"The declining phase of facebook",
            paragraph:"The subject of numerous controversies, Facebook has often been criticized over issues such as user privacy, political manipulation and mass surveillance.",
        },
        {
            id:4,
            image:"ipl.png",
            
            title:"The winning amount of IPL",
            paragraph:"The Indian Premier League (IPL) (also known as the TATA IPL) is a men's (T20) cricket league that is annually held in India and contested by ten city-based franchise teams",
        },
        {
            id:5,
            image:"mammals.png",
            
            title:"the mammal phylosophy",
            paragraph:"A mammal is a vertebrate animal of the class Mammalia. Mammals are characterized by the presence of a neocortex region of the brain, fur or hair, and three middle ear bones. ",
        },
        {
            id:6,
            image:"virat.png",
            
            title:"the king of cricket",
            paragraph:"an Indian international cricketer and the former captain of the Indian national cricket team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL.",
        },
        {
            id:7,
            image:"mukesh.png",
            
            title:"Richest man of India",
            paragraph:"Mukesh Dhirubhai Ambani (born 19 April 1957) is an Indian billionaire industrialist who is currently the chairman and managing director of Reliance Industries.",
        },
        {
            id:8,
            image:"ratan.png",
            
            title:"the generous Indian man",
            paragraph:"Ratan Naval Tata (born 28 December 1937) is an Indian industrialist, philanthropist and former chairman of Tata Sons.",
        },
        {
            id:9,
            image:"tesla.png",
            
            title:"Rise of Tesla",
            paragraph:"Tesla is one of the world's most valuable companies and, as of 2023, is the world's most valuable automaker.",
        },
        
    ]
    },
    {
        key1:'value2',
        key2:[
            {
                id:7,
                image:"mukesh.png",
                
                title:"Richest man of India",
                paragraph:"Mukesh Dhirubhai Ambani (born 19 April 1957) is an Indian billionaire industrialist who is currently the chairman and managing director of Reliance Industries.",
            },
            {
                id:8,
                image:"ratan.png",
                
                title:"the generous Indian man",
                paragraph:"Ratan Naval Tata (born 28 December 1937) is an Indian industrialist, philanthropist and former chairman of Tata Sons.",
            },
            {
                id:9,
                image:"tesla.png",
                
                title:"Rise of Tesla",
                paragraph:"Tesla is one of the world's most valuable companies and, as of 2023, is the world's most valuable automaker.",
            },
          {
              id:1,
              image:"birds.png",
              
              title:"How birs fly",
              paragraph:"Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the 2.8 m (9 ft 2 in) common ostrich. ",
          },
          {
              id:2,
              image:"dhoni.png",
              
              title:"The finisher MS Dhoni ",
              paragraph:"Mahendra Singh Dhoni is a former Indian cricketer. Widely considered one of the greatest captain and Wicket-keeper-batsman in history of cricket as well as a best finisher.",
          },
          {
              id:3,
              image:"facebook.png",
              
              title:"The declining phase of facebook",
              paragraph:"The subject of numerous controversies, Facebook has often been criticized over issues such as user privacy, political manipulation and mass surveillance.",
          },
          {
              id:4,
              image:"ipl.png",
              
              title:"The winning amount of IPL",
              paragraph:"The Indian Premier League (IPL) (also known as the TATA IPL) is a men's (T20) cricket league that is annually held in India and contested by ten city-based franchise teams",
          },
          {
              id:5,
              image:"mammals.png",
              
              title:"the mammal phylosophy",
              paragraph:"A mammal is a vertebrate animal of the class Mammalia. Mammals are characterized by the presence of a neocortex region of the brain, fur or hair, and three middle ear bones. ",
          },
          {
              id:6,
              image:"virat.png",
              
              title:"the king of cricket",
              paragraph:"an Indian international cricketer and the former captain of the Indian national cricket team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL.",
          },
          
          
      ]
      },
      {
        key1:'value3',
        key2:[
            {
                id:3,
                image:"facebook.png",
                
                title:"The declining phase of facebook",
                paragraph:"The subject of numerous controversies, Facebook has often been criticized over issues such as user privacy, political manipulation and mass surveillance.",
            },
            {
                id:4,
                image:"ipl.png",
                
                title:"The winning amount of IPL",
                paragraph:"The Indian Premier League (IPL) (also known as the TATA IPL) is a men's (T20) cricket league that is annually held in India and contested by ten city-based franchise teams",
            },
            {
                id:7,
                image:"mukesh.png",
                
                title:"Richest man of India",
                paragraph:"Mukesh Dhirubhai Ambani (born 19 April 1957) is an Indian billionaire industrialist who is currently the chairman and managing director of Reliance Industries.",
            },
            {
                id:8,
                image:"ratan.png",
                
                title:"the generous Indian man",
                paragraph:"Ratan Naval Tata (born 28 December 1937) is an Indian industrialist, philanthropist and former chairman of Tata Sons.",
            },
            {
                id:9,
                image:"tesla.png",
                
                title:"Rise of Tesla",
                paragraph:"Tesla is one of the world's most valuable companies and, as of 2023, is the world's most valuable automaker.",
            },
          {
              id:1,
              image:"birds.png",
              
              title:"How birs fly",
              paragraph:"Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the 2.8 m (9 ft 2 in) common ostrich. ",
          },
          {
              id:2,
              image:"dhoni.png",
              
              title:"The finisher MS Dhoni ",
              paragraph:"Mahendra Singh Dhoni is a former Indian cricketer. Widely considered one of the greatest captain and Wicket-keeper-batsman in history of cricket as well as a best finisher.",
          },
          
          {
              id:5,
              image:"mammals.png",
              
              title:"the mammal phylosophy",
              paragraph:"A mammal is a vertebrate animal of the class Mammalia. Mammals are characterized by the presence of a neocortex region of the brain, fur or hair, and three middle ear bones. ",
          },
          {
              id:6,
              image:"virat.png",
              
              title:"the king of cricket",
              paragraph:"an Indian international cricketer and the former captain of the Indian national cricket team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL.",
          },
          
          
      ]
      },
      {
        key1:'value4',
        key2:[
            {
                id:9,
                image:"tesla.png",
                
                title:"Rise of Tesla",
                paragraph:"Tesla is one of the world's most valuable companies and, as of 2023, is the world's most valuable automaker.",
            },
            {
                
                id:3,
                image:"facebook.png",
                
                title:"The declining phase of facebook",
                paragraph:"The subject of numerous controversies, Facebook has often been criticized over issues such as user privacy, political manipulation and mass surveillance.",
            },
            {
                id:4,
                image:"ipl.png",
                
                title:"The winning amount of IPL",
                paragraph:"The Indian Premier League (IPL) (also known as the TATA IPL) is a men's (T20) cricket league that is annually held in India and contested by ten city-based franchise teams",
            },
            {
                id:7,
                image:"mukesh.png",
                
                title:"Richest man of India",
                paragraph:"Mukesh Dhirubhai Ambani (born 19 April 1957) is an Indian billionaire industrialist who is currently the chairman and managing director of Reliance Industries.",
            },
            {
                id:8,
                image:"ratan.png",
                
                title:"the generous Indian man",
                paragraph:"Ratan Naval Tata (born 28 December 1937) is an Indian industrialist, philanthropist and former chairman of Tata Sons.",
            },
            
          {
              id:1,
              image:"birds.png",
              
              title:"How birs fly",
              paragraph:"Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the 2.8 m (9 ft 2 in) common ostrich. ",
          },
          {
              id:2,
              image:"dhoni.png",
              
              title:"The finisher MS Dhoni ",
              paragraph:"Mahendra Singh Dhoni is a former Indian cricketer. Widely considered one of the greatest captain and Wicket-keeper-batsman in history of cricket as well as a best finisher.",
          },
          
          {
              id:5,
              image:"mammals.png",
              
              title:"the mammal phylosophy",
              paragraph:"A mammal is a vertebrate animal of the class Mammalia. Mammals are characterized by the presence of a neocortex region of the brain, fur or hair, and three middle ear bones. ",
          },
          {
              id:6,
              image:"virat.png",
              
              title:"the king of cricket",
              paragraph:"an Indian international cricketer and the former captain of the Indian national cricket team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL.",
          },
          
          
      ]
      },
      {
        key1:'value5',
        key2:[
            {
                id:8,
                image:"ratan.png",
                
                title:"the generous Indian man",
                paragraph:"Ratan Naval Tata (born 28 December 1937) is an Indian industrialist, philanthropist and former chairman of Tata Sons.",
            },
            
          {
              id:1,
              image:"birds.png",
              
              title:"How birs fly",
              paragraph:"Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the 2.8 m (9 ft 2 in) common ostrich. ",
          },
          {
              id:2,
              image:"dhoni.png",
              
              title:"The finisher MS Dhoni ",
              paragraph:"Mahendra Singh Dhoni is a former Indian cricketer. Widely considered one of the greatest captain and Wicket-keeper-batsman in history of cricket as well as a best finisher.",
          },
          
          {
              id:5,
              image:"mammals.png",
              
              title:"the mammal phylosophy",
              paragraph:"A mammal is a vertebrate animal of the class Mammalia. Mammals are characterized by the presence of a neocortex region of the brain, fur or hair, and three middle ear bones. ",
          },
            {
                id:9,
                image:"tesla.png",
                
                title:"Rise of Tesla",
                paragraph:"Tesla is one of the world's most valuable companies and, as of 2023, is the world's most valuable automaker.",
            },
            {
                
                id:3,
                image:"facebook.png",
                
                title:"The declining phase of facebook",
                paragraph:"The subject of numerous controversies, Facebook has often been criticized over issues such as user privacy, political manipulation and mass surveillance.",
            },
            {
                id:4,
                image:"ipl.png",
                
                title:"The winning amount of IPL",
                paragraph:"The Indian Premier League (IPL) (also known as the TATA IPL) is a men's (T20) cricket league that is annually held in India and contested by ten city-based franchise teams",
            },
            {
                id:7,
                image:"mukesh.png",
                
                title:"Richest man of India",
                paragraph:"Mukesh Dhirubhai Ambani (born 19 April 1957) is an Indian billionaire industrialist who is currently the chairman and managing director of Reliance Industries.",
            },
            
          {
              id:6,
              image:"virat.png",
              
              title:"the king of cricket",
              paragraph:"an Indian international cricketer and the former captain of the Indian national cricket team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL.",
          },
          
          
      ]
      },
      {
        key1:'value6',
        key2:[
            {
                
                id:3,
                image:"facebook.png",
                
                title:"The declining phase of facebook",
                paragraph:"The subject of numerous controversies, Facebook has often been criticized over issues such as user privacy, political manipulation and mass surveillance.",
            },
            {
                id:4,
                image:"ipl.png",
                
                title:"The winning amount of IPL",
                paragraph:"The Indian Premier League (IPL) (also known as the TATA IPL) is a men's (T20) cricket league that is annually held in India and contested by ten city-based franchise teams",
            },
            {
                id:8,
                image:"ratan.png",
                
                title:"the generous Indian man",
                paragraph:"Ratan Naval Tata (born 28 December 1937) is an Indian industrialist, philanthropist and former chairman of Tata Sons.",
            },
            
          {
              id:1,
              image:"birds.png",
              
              title:"How birs fly",
              paragraph:"Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the 2.8 m (9 ft 2 in) common ostrich. ",
          },
          {
              id:2,
              image:"dhoni.png",
              
              title:"The finisher MS Dhoni ",
              paragraph:"Mahendra Singh Dhoni is a former Indian cricketer. Widely considered one of the greatest captain and Wicket-keeper-batsman in history of cricket as well as a best finisher.",
          },
          
          {
              id:5,
              image:"mammals.png",
              
              title:"the mammal phylosophy",
              paragraph:"A mammal is a vertebrate animal of the class Mammalia. Mammals are characterized by the presence of a neocortex region of the brain, fur or hair, and three middle ear bones. ",
          },
            {
                id:9,
                image:"tesla.png",
                
                title:"Rise of Tesla",
                paragraph:"Tesla is one of the world's most valuable companies and, as of 2023, is the world's most valuable automaker.",
            },
            
            {
                id:7,
                image:"mukesh.png",
                
                title:"Richest man of India",
                paragraph:"Mukesh Dhirubhai Ambani (born 19 April 1957) is an Indian billionaire industrialist who is currently the chairman and managing director of Reliance Industries.",
            },
            
          {
              id:6,
              image:"virat.png",
              
              title:"the king of cricket",
              paragraph:"an Indian international cricketer and the former captain of the Indian national cricket team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL.",
          },
          
          
      ]
      },
      {
        key1:'value7',
        key2:[
            {
                
                id:3,
                image:"facebook.png",
                
                title:"The declining phase of facebook",
                paragraph:"The subject of numerous controversies, Facebook has often been criticized over issues such as user privacy, political manipulation and mass surveillance.",
            },
            {
                id:4,
                image:"ipl.png",
                
                title:"The winning amount of IPL",
                paragraph:"The Indian Premier League (IPL) (also known as the TATA IPL) is a men's (T20) cricket league that is annually held in India and contested by ten city-based franchise teams",
            },
            
            {
                id:9,
                image:"tesla.png",
                
                title:"Rise of Tesla",
                paragraph:"Tesla is one of the world's most valuable companies and, as of 2023, is the world's most valuable automaker.",
            },
            
            {
                id:7,
                image:"mukesh.png",
                
                title:"Richest man of India",
                paragraph:"Mukesh Dhirubhai Ambani (born 19 April 1957) is an Indian billionaire industrialist who is currently the chairman and managing director of Reliance Industries.",
            },
            
          {
              id:6,
              image:"virat.png",
              
              title:"the king of cricket",
              paragraph:"an Indian international cricketer and the former captain of the Indian national cricket team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL.",
          },
          {
            id:8,
            image:"ratan.png",
            
            title:"the generous Indian man",
            paragraph:"Ratan Naval Tata (born 28 December 1937) is an Indian industrialist, philanthropist and former chairman of Tata Sons.",
        },
        
      {
          id:1,
          image:"birds.png",
          
          title:"How birs fly",
          paragraph:"Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the 2.8 m (9 ft 2 in) common ostrich. ",
      },
      {
          id:2,
          image:"dhoni.png",
          
          title:"The finisher MS Dhoni ",
          paragraph:"Mahendra Singh Dhoni is a former Indian cricketer. Widely considered one of the greatest captain and Wicket-keeper-batsman in history of cricket as well as a best finisher.",
      },
      
      {
          id:5,
          image:"mammals.png",
          
          title:"the mammal phylosophy",
          paragraph:"A mammal is a vertebrate animal of the class Mammalia. Mammals are characterized by the presence of a neocortex region of the brain, fur or hair, and three middle ear bones. ",
      },
          
      ]
      },
      {
        key1:'value8',
        key2:[
            {
                id:5,
                image:"mammals.png",
                
                title:"the mammal phylosophy",
                paragraph:"A mammal is a vertebrate animal of the class Mammalia. Mammals are characterized by the presence of a neocortex region of the brain, fur or hair, and three middle ear bones. ",
            },
            {
                
                id:3,
                image:"facebook.png",
                
                title:"The declining phase of facebook",
                paragraph:"The subject of numerous controversies, Facebook has often been criticized over issues such as user privacy, political manipulation and mass surveillance.",
            },
            {
                id:4,
                image:"ipl.png",
                
                title:"The winning amount of IPL",
                paragraph:"The Indian Premier League (IPL) (also known as the TATA IPL) is a men's (T20) cricket league that is annually held in India and contested by ten city-based franchise teams",
            },
            
            {
                id:9,
                image:"tesla.png",
                
                title:"Rise of Tesla",
                paragraph:"Tesla is one of the world's most valuable companies and, as of 2023, is the world's most valuable automaker.",
            },
            
            {
                id:7,
                image:"mukesh.png",
                
                title:"Richest man of India",
                paragraph:"Mukesh Dhirubhai Ambani (born 19 April 1957) is an Indian billionaire industrialist who is currently the chairman and managing director of Reliance Industries.",
            },
            
          {
              id:6,
              image:"virat.png",
              
              title:"the king of cricket",
              paragraph:"an Indian international cricketer and the former captain of the Indian national cricket team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL.",
          },
          {
            id:8,
            image:"ratan.png",
            
            title:"the generous Indian man",
            paragraph:"Ratan Naval Tata (born 28 December 1937) is an Indian industrialist, philanthropist and former chairman of Tata Sons.",
        },
        
      {
          id:1,
          image:"birds.png",
          
          title:"How birs fly",
          paragraph:"Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the 2.8 m (9 ft 2 in) common ostrich. ",
      },
      {
          id:2,
          image:"dhoni.png",
          
          title:"The finisher MS Dhoni ",
          paragraph:"Mahendra Singh Dhoni is a former Indian cricketer. Widely considered one of the greatest captain and Wicket-keeper-batsman in history of cricket as well as a best finisher.",
      },
      
      
          
      ]
      },
      {
        key1:'value9',
        key2:[
            {
                id:9,
                image:"tesla.png",
                
                title:"Rise of Tesla",
                paragraph:"Tesla is one of the world's most valuable companies and, as of 2023, is the world's most valuable automaker.",
            },
            {
                id:5,
                image:"mammals.png",
                
                title:"the mammal phylosophy",
                paragraph:"A mammal is a vertebrate animal of the class Mammalia. Mammals are characterized by the presence of a neocortex region of the brain, fur or hair, and three middle ear bones. ",
            },
            {
                
                id:3,
                image:"facebook.png",
                
                title:"The declining phase of facebook",
                paragraph:"The subject of numerous controversies, Facebook has often been criticized over issues such as user privacy, political manipulation and mass surveillance.",
            },
            {
                id:4,
                image:"ipl.png",
                
                title:"The winning amount of IPL",
                paragraph:"The Indian Premier League (IPL) (also known as the TATA IPL) is a men's (T20) cricket league that is annually held in India and contested by ten city-based franchise teams",
            },
            
            
            
            {
                id:7,
                image:"mukesh.png",
                
                title:"Richest man of India",
                paragraph:"Mukesh Dhirubhai Ambani (born 19 April 1957) is an Indian billionaire industrialist who is currently the chairman and managing director of Reliance Industries.",
            },
            
          {
              id:6,
              image:"virat.png",
              
              title:"the king of cricket",
              paragraph:"an Indian international cricketer and the former captain of the Indian national cricket team who plays as a right-handed batsman for Royal Challengers Bangalore in the IPL.",
          },
          {
            id:8,
            image:"ratan.png",
            
            title:"the generous Indian man",
            paragraph:"Ratan Naval Tata (born 28 December 1937) is an Indian industrialist, philanthropist and former chairman of Tata Sons.",
        },
        
      {
          id:1,
          image:"birds.png",
          
          title:"How birs fly",
          paragraph:"Birds live worldwide and range in size from the 5.5 cm (2.2 in) bee hummingbird to the 2.8 m (9 ft 2 in) common ostrich. ",
      },
      {
          id:2,
          image:"dhoni.png",
          
          title:"The finisher MS Dhoni ",
          paragraph:"Mahendra Singh Dhoni is a former Indian cricketer. Widely considered one of the greatest captain and Wicket-keeper-batsman in history of cricket as well as a best finisher.",
      },
      
      
          
      ]
      },
    
      
]

const Home = () => {
   const randomData = blog_data[Math.floor(Math.random()*blog_data.length)];
  
    return (
        <>
     <div className='p-4 mt-4  grid grid-cols-3  gap-y-6 max-sm:grid max-sm:grid-cols-1 max-sm:ml-2'>
         {
            randomData.key2.map((item)=>{
                return(
                    <div className='w-[365px] h-[425px] border-2 border-black rounded-lg bg-[#F2EFEF] '>
                            <div className='p-8 '><img src={item.image} alt="" className='h-[200px] w-[300px] rounded-lg border-4 border-black' /></div>

                            <div>
                                <h1 className=' text-[22px] text-center text-blue-600 cursor-pointer'>{item.title}</h1>
                                <p className='text-center p-4'>{item.paragraph}</p>
                            </div>
                            </div>  
                )
            })
         }  
         </div>
        </>
    )
}

export default Home

                         