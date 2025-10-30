// NEWSTON NEWSPAPER - JavaScript Functionality
// Article Management and Navigation System

// Set current date
document.addEventListener('DOMContentLoaded', function() {
    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        const today = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        currentDateElement.textContent = today.toLocaleDateString('en-US', options);
    }

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
});

// Article Database - Add new articles here
const articles = {
    // Golden Articles
    'article-golden-sports': {
        title: 'SPORTS ARTICLE TITLE',
        author: 'Sports Editorial Team',
        date: 'October 19, 2025',
        category: 'Sports',
        excerpt: 'Outstanding coverage of athletic achievements, team spirit, and sports culture at Newton College.',
        content: '<p>blblablablabla</p>'
    },
    
    'article-golden-event': {
        title: 'EVENT ARTICLE TITLE',
        author: 'Events Editorial Team',
        date: 'October 19, 2025',
        category: 'Events',
        excerpt: 'Exceptional reporting on campus events, celebrations, and memorable moments that unite our community.',
        content: '<p>blblablablabla</p>'
    },
    
    'article-golden-community': {
        title: 'COMMUNITY ARTICLE TITLE',
        author: 'Community Editorial Team',
        date: 'October 19, 2025',
        category: 'Community',
        excerpt: 'Inspiring stories of community engagement, student initiatives, and collective action at Newton College.',
        content: '<p>blblablablabla</p>'
    },

    'article-student-council': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Community',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },
    
    'article-science-fair': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Events',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },
    
    'article-basketball': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'News',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },
    
    'article-sustainability': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'News',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },
    
    'article-digital-learning': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'News',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },
    
    'article-cultural-festival': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'News',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    // Sports Articles
    'article-swimming-records': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'News',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-tennis-tournament': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'News',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-football-season': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'News',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-athletics-track': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'News',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-harvest-festival': {
        title: 'ARTICLE',
        author: 'Author Name',
        date: 'Date',
        category: 'Category',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-drama-production': {
        title: 'ARTICLE',
        author: 'Author Name',
        date: 'Date',
        category: 'Category',
        image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-alumni-panel': {
        title: 'ARTICLE',
        author: 'Author Name',
        date: 'Date',
        category: 'Category',
        image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-student-activism': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'News',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    // Golden Article entries for the golden.html page
    'article-golden-1': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Golden',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-golden-2': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 18, 2025',
        category: 'Golden',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-golden-3': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 17, 2025',
        category: 'Golden',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-golden-4': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 15, 2025',
        category: 'Golden',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-golden-5': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 14, 2025',
        category: 'Golden',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-golden-6': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 13, 2025',
        category: 'Golden',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-golden-7': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 12, 2025',
        category: 'Golden',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-golden-8': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 11, 2025',
        category: 'Golden',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-golden-9': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 10, 2025',
        category: 'Golden',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    // Missing Sports Articles
    'article-volleyball': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Sports',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-cross-country': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Sports',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-hockey': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Sports',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-badminton': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Sports',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    // Missing Events Articles
    'article-graduation': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Events',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },





    'article-music-concert': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Events',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-career-fair': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Events',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    // Missing Community Articles




    'article-fundraiser': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Community',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },



    // Golden Articles - Fix the naming mismatch
    'article-golden-events': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Events',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    // Additional missing articles from golden.html
    'article-archive-1': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Golden',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-archive-2': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Golden',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-archive-3': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Golden',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-archive-4': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Golden',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-archive-5': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Golden',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-archive-6': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Golden',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    // New Articles from User Input
    'article-new-chapter-classrooms': {
        title: 'A New Chapter in Our Classrooms',
        author: 'Constantino Díaz, Form IV',
        date: 'October 27, 2025',
        category: 'Community',
        excerpt: 'Teachers are much more than just educators. They are guides, motivators, and role models who help shape the future of every student they teach.',
        content: `<p>Teachers are much more than just educators. They are guides, motivators, and role models who help shape the future of every student they teach. Each new teacher who joins our school brings fresh ideas, experiences, and energy that enrich our community. Their arrival represents not only a new face in the classroom, but also a new opportunity to learn, grow, and be inspired. This Winter, we were introduced to Mr. Jody, a new INSO teacher who started his journey at Newton.</p>
        
        <h2>Getting to Know Mr. Jody</h2>
        <p>Jody Arendse, commonly known as Mr Jody, joined Newton in August. He is 31 years old and was born in Cape Town, South Africa. He is an INSO Teacher having studied to be a geography and history teacher. He graduated in 2019 and has been teaching for 6 years as of now.</p>
        
        <h2>What Made Him Come to Newton</h2>
        <p>In an interview, Mr. Jody shared that one of his main goals was to teach in the Southern Hemisphere, in a place that felt like home. When he learned about Newton, he was drawn not only by its strong reputation as one of the top 15 schools in South America, but also by the sense of community it offered. He found that Lima's atmosphere and lifestyle reminded him of Cape Town, which made the idea of moving here even more appealing.</p>
        
        <h2>His Experience at Newton So Far</h2>
        <p>When asked about his experience so far, Mr. Jody said that the best part of Newton has been the students. He described them as incredibly welcoming, friendly, and open—which helped him feel part of the school right away. He also mentioned how much he enjoys living in Lima: The city's culture, the people, and the familiar feel made his experience even more rewarding.</p>
        
        <h2>What He Hopes to Achieve</h2>
        <p>Looking ahead, Mr. Jody hopes to stay at Newton for a long time. He enjoys his work here, and wants to continue watching his students grow and succeed throughout their High School years. He also hopes to fully immerse himself in Peruvian culture and language, building meaningful connections both inside and outside the classroom.</p>
        
        <p><em> . </em></p>`
    },

    'article-no-destiny-limits-play': {
        title: 'No Destiny, No Limits: Upper School\'s 2025 Play',
        author: 'Alma Flores, Form III',
        date: 'October 26, 2025',
        category: 'Events',
        excerpt: 'Flashlights lit up the theatre. Choices shaped the ending. The Upper School stage came to life with "Más Allá del Destino", a stunning original production.',
        content: `<p>Flashlights lit up the theatre. Choices shaped the ending. The Upper School stage came to life on July 3rd, 4th, and 5th with "Más Allá del Destino", a stunning original production that mesmerized audiences and left a lasting emotional impact. Blending fantasy, futurism, and heartfelt storytelling, the play explored the deep bonds between four friends: Ciana, Vera, Atina, and Azula, living in a world where destiny is assigned to every citizen except one.</p>
        
        <p>Set in the city of Clarita, where life paths are dictated by rules, the drama heightens when Vera doesn't receive her destiny. This unexpected twist sends the characters and the audience into a journey filled with mystery, self-discovery, and defiance of society's standards. Not only was this a performance that defied destiny, but it also gave the audience a chance to interact with the actors by turning on their phone flashlights and choosing a simultaneous alternative that controlled the character's decisions</p>
        
        <p>The play was directed by Form 6 IB students, working hand-in-hand with Miss Claudia, Mr. Gonzalo, and Miss Aileen, who guided the creative process with heart and vision. The actors, students from 6th Grade to Form 5, delivered varied performances that brought the futuristic world of Clarita to life with depth. Every element, from costume and makeup to lighting and sound, was crafted with respect, showcasing the immense talent and dedication of the cast and crew.</p>
        
        <p>Inspired by both fantasy and the future, "Más Allá del Destino" is a clear example of what happens when students are given the space to lead, create, and tell stories that matter. The story is described by teachers and parents as "Amazing," "A work done with a lot of dedication and love," and carrying an "Incredible message." This clearly shows that it wasn't just a school play, it was a celebration of creativity, of collaboration, and the courage to imagine something greater than fate.</p>`
    },

    'article-567-voices-newton-patio': {
        title: '567 Voices, Connection and Motivation in Newton\'s Patio',
        author: 'Chiara Fermor, Form IV',
        date: 'October 25, 2025',
        category: 'Events',
        excerpt: 'With the student council elections rapidly approaching, new ideas are emerging, ready to shape the school\'s future. But one group stands out for their creativity and connection to the school community.',
        content: `<p>With the student council elections rapidly approaching, new ideas are emerging, ready to shape the school's future. But one group stands out for their creativity and connection to the school community. 567 Voices, led by Bianca Patroni as president, Astrid Frantzen as vice-president, Gia Heredia as treasurer, and Mariano Gonzales as Secretary. Their campaign aims to transform school life into something more meaningful: a community where students, teachers, and staff feel united by shared experiences rather than just schedules.</p>
        
        <p>The campaign members describe their goal as simple but powerful: to make school "a place where you truly want to be", according to President Bianca Patroni, whom I spoke to. Their focus is on turning everyday life into a shared experience, where staff and students can come together beyond the classroom. Their approach differs from the rest, as they aim towards building a stronger community, and the desire to make belonging and enjoyment part of the school's daily rhythm</p>
        
        <p>567 plans to establish seven proposals that balance fun, creativity and school spirit. From Non-Sport Interhouse Games like Tutti Frutti and Monopoly to a Met Gala Day that encourages self-expression, this campaign emphasises inclusion by giving every student a way to participate by catering to various interests. Their ideas showcase their understanding of the true meaning of school spirit, one that values both individuality and collaboration.</p>
        
        <p>The members of 567 Voices have also proposed a set of traditions to make the seniors' last year unforgettable, including a Goodbye Parade, Senior Sunrise and Senior Sunset, and a memory wall filled with classmates' messages. These activities will not only help the senior class bond before they leave, but also encourage the underclassmen to learn more and connect with them before they graduate.</p>
        
        <p>Other plans, such as Video Game Competitions, Recycle Day, Halloween Magical Friday for Lower School students, and fundraising activities for CAS groups, such as Slime Day and garage sales, reflect the campaign's mix of creativity and a sense of community. These events are not only to bring people together but also to encourage environmental and social awareness and kindness across grade levels.</p>
        
        <p>With their campaign centred on belonging, creativity and community, 567 Voices offers a preview of what our Student Council could look like when it listens to every corner of the school. No matter what happens in the upcoming elections, their message is clear: "One voice might not change much, but together, 567 Voices can make a difference."</p>`
    },

    'article-ai-impact-education': {
        title: 'The Impact of Artificial Intelligence on Education',
        author: 'Cayetana Mostajo Guzmán',
        date: 'October 24, 2025',
        category: 'Community',
        excerpt: 'Artificial Intelligence (AI) is transforming education by changing the way students learn, teachers teach, and institutions engage.',
        content: `<p>Artificial Intelligence (AI) is transforming education by changing the way students learn, teachers teach, and institutions engage. From personalized learning pathways to automated administrative tasks, scientifically predicted to optimize education to be more efficient, equitable, accessible, and individualized. AI can also cause us to think about equity, consideration, privacy, and the role of humanized educators. Moreover, this article examines AI's complex role in education and the opportunities and challenges it raises.</p>
        
        <p>AI supports adaptive learning platforms that personalize educational content for individual students. Specifically, It utilizes tools such as Duolingo or Khan Academy which use algorithms to analyze students' performance data to adjust difficulty and recommend resources in real-time. For example, AI-driven tutoring systems can identify gaps in knowledge and provide instructional exercises in areas needing support, which can increase retention rates by as much as 30%, according to educational researchers. This personalization inside the classroom can help keep students engaged with their learning, especially among diverse learners—including students with potential disabilities or different learning paces—which makes education possible for more students.</p>
        
        <p>Teachers use AI for grading, lesson planning, and data analytics. For instance, the website Gradescope incorporates machine learning to assess assignments in minutes, enabling teachers or professors to spend less time on grading or assessment and more time mentoring students. Additionally, in administration, AI has been shown to help faculty and staff with scheduling, enrollment, and predictive analytics to track student progress. For example, higher education institutions, and/or even K-12 schools, can employ AI to predict the likelihood of a student dropping out, effective predictive research can be used to proactively intervene and eventually increase graduation rates. Through efficient AI processes, administrative workload is reduced, and there is greater potential for scalable intervention, particularly in schools with lower levels of academic and technological resources.</p>
        
        <p>AI makes education accessible for everyone with instantaneous access to a wealth of knowledge, virtual assistants like ChatGPT help students research, write, and problem-solve, while AI-driven translation applications eliminate language barriers. Furthermore, online platforms could now offer courses from universities around the world, expanding opportunities to learn throughout life. Notably, while navigating the limitations of the COVID-19 pandemic, AI has enabled remote learning, reaching millions of learners who otherwise would not have access to a traditional in-real-life education platform. Finally, this global connectivity can help underserved communities and educators reduce educational disparity beyond frontiers.</p>
        
        <p>While AI offers advantages, risks come with its use; excessive reliance on technology can hamper students' abilities to think critically, as students may begin to rely on it for answers without true understanding. Moreover, privacy concerns arise from monitoring student behaviors, leading to possible surveillance or biases in algorithms. Additionally, equity issues persist; wealthier school districts are quicker to adopt AI tools, thus widening the gaps. The potential displacement of educators and the need for educators to be trained in digital literacy create ethical dilemmas. Experts also warn of algorithmic biasing, as AI can continue to perpetuate inequities if it is trained on skewed datasets.</p>
        
        <p>The outlook for AI in education is bright with the development of generative AI and immersive technologies, such as virtual reality. By 2030, artificial intelligence could provide individualized curricula for personalization, scale, and using neuroscience-based technologies, among other areas. Policymakers should worry about maximizing this potential by prioritizing ethical development of AI, including clear and transparent algorithms, and creating laws around data protection to protect students. Educators need to be strategic in AI use in the classroom, ensuring that the technology does not replace human interaction but instead complements it. Moreover, investing in educator and student training programs will still be important to prepare new generations of students and educators to thrive in an AI world.</p>
        
        <p>To sum up everything that has been stated so far, AI has had a profound impact on education, providing enhanced personalization, efficiency, and accessibility and posing important challenges to be managed. As AI continues to develop, the expectation of establishing equitable, innovative learning spaces is exciting, only if we can manage ethical and practical dilemmas. Lastly, being mindful that adopting AI will develop a more inclusive and adaptive educational space and critical judgments for students worldwide.</p>`
    },

    'article-london-college-music-exam': {
        title: 'Newton Students Take on the London College of Music Exam',
        author: 'Kiara Luciana Manrique Abarca, Form IV',
        date: 'October 23, 2025',
        category: 'Events',
        excerpt: 'The London College of Music Exam (LMC) is an international music examination that evaluates students\' skills in performance, technique, and musical understanding.',
        content: `<p>The London College of Music Exam (LMC) is an international music examination that evaluates students' skills in performance, technique, and musical understanding. It is organized by the University of West London and is recognized around the world. The exam allows students of all ages and instruments to demonstrate their progress through different grades, from beginner to advanced levels. More than just a test, the LMC exam helps young musicians develop discipline, confidence, and a deeper appreciation for music.</p>
        
        <p>At Newston, music plays an important role in the development of our students' creativity and discipline. Every year, several of our young musicians take part in the London College of Music (LMC) exam, one of the most respected international music assessments. This exam is taken by thousands of students around the world and allows them to demonstrate their progress, musical expression, and technical skills. The London College of Music, based in the United Kingdom, offers graded exams for different instruments and levels. Each level requires students to prepare a specific program that includes performance pieces, sight reading, scales, and sometimes theory. The goal of the exam is not only to evaluate but also to encourage students to continue improving and to appreciate the beauty of music in a deeper way.</p>
        
        <p>Although the exam can be demanding, it is a rewarding challenge. Students often mention that the most difficult parts are maintaining concentration, controlling nerves during the performance, and achieving the right expression for each style of music. However, through this process, they discover the importance of perseverance, patience, and emotional connection with the music they play.</p>
        
        <p>The experience goes far beyond technical skill. Preparing for the London College of Music exam teaches students essential life values such as commitment, discipline, self-confidence, and resilience. They learn that improvement takes time and that mistakes are part of learning. These qualities help them not only in music but also in their academic and personal growth.</p>
        
        <p>Teachers at Newston highlight that this kind of exam helps students build stronger study habits and a deeper appreciation for art. The preparation process allows them to explore classical and contemporary pieces that reflect different cultures, histories, and emotions. Many students discover new favorite composers and develop a lasting passion for music.</p>
        
        <p>When exam day arrives, it becomes a celebration of effort and dedication. Whether students pass with distinction or continue working toward their next grade, the experience itself is a valuable achievement. It shows how much they can grow when they combine talent with hard work and love for what they do.</p>
        
        <p>The London College of Music exam at Newston is more than just an evaluation — it is a journey of artistic discovery, self-discipline, and joy. Each note played is a reflection of months of practice, determination, and passion. Through this program, Newston continues to support the musical dreams of its students, helping them reach new levels of excellence and confidence as musicians and as individuals.</p>`
    },

    'article-rising-together-vision': {
        title: 'Rising Together: A Vision for Newton\'s Future',
        author: 'Almudena Proaño, Form III',
        date: 'October 22, 2025',
        category: 'Events',
        excerpt: 'As the Newton College community approaches another season of Student Council elections, the atmosphere around campus is charged with enthusiasm and anticipation.',
        content: `<p>As the Newton College community approaches another season of Student Council elections, the atmosphere around campus is charged with enthusiasm and anticipation. Among the teams stepping forward is RISE, a group whose very name reflects its core values: Respect, Integrity, Strength, and Empathy. The team, is composed of Micaela Sánchez as President, Blanca Figueroa as Vice-President, Sofia Borja as Secretary, and Constantino Diaz as Treasurer, bringing a new spark to Newton's Student Council elections.</p>
        
        <p>During an interview with RISE's presidential candidate, Micaela Sánchez, she described the team's vision as one centered on empowering students and redefining the concept of leadership at Newton College. "We want to transform students into leaders." she shared, emphasizing that RISE's mission is not simply about guiding others, but about creating an environment where everyone feels capable of taking initiative and making a difference.</p>
        
        <p>At the heart of RISE's campaign lies the belief that leadership should be inclusive and transformative. Sánchez explained the team's aim, encouraging students' own voice, recognizing everyone's strength for positive impact in our community. "We don't promise to lead people," she said. "We promise to empower people to lead too". This philosophy captures the essence of RISE, one that values collaboration, mutual respect, and growth over competition or hierarchy. RISE's stance, to transform students into leaders while balancing both academic and personal development, reflects their commitment to holistic growth for every student in every single class and grade. They view leadership as not a title the Newton community has given them, but as a continuous process of learning, self-discovery, and community involvement.</p>
        
        <p>RISE's foundation is built upon four guiding pillars: Leadership, Academic and Personal Development, Newton Spirit, and Community. Each of these pillars represents a key aspect of what the team believes to be key for a thriving student body. Through their pillar of Leadership, RISE seeks to make student voices more present in school life, ensuring that achievements, ideas, and contributions are recognized and valued. They envision a community where every student feels heard and represented accordingly. The pillar of Academic and Personal Development focuses on providing students with opportunities to grow in both intellectual and emotional dimensions. Sánchez mentioned that RISE hopes to strengthen the connection between students' goals and the resources available to help them achieve those goals, whether academic, extracurricular, or personal. Newton Spirit, another cornerstone of their vision, revolves around celebrating unity, enthusiasm, and school pride. RISE hopes to foster an environment where traditions and activities bring people together, strengthening bonds among Houses, year groups, and individuals. Finally, the Community pillar extends RISE's focus beyond students alone. Sánchez and her team highlight the importance of valuing every member of Newton, students, teachers, and staff alike, recognizing that a strong, supportive community benefits everyone. The team believes that when the people who make up Newton feel appreciated, connected, and motivated, the entire school flourishes.</p>
        
        <p>For Sánchez, the word "leadership" holds a deeper meaning. "Our mission," she said, "is to redefine what leadership means in our community and help each student to meet their own personal goals." This redefinition stems from a desire to move away from leadership as a position of power and instead toward leadership as a shared responsibility, one that involves listening, understanding, and inspiring others. RISE envisions a school culture in which leadership opportunities are open to all students, where every voice has the potential to create change, and where success is measured not only by individual accomplishments but by collective growth. While many campaigns speak about goals and projects, RISE presents itself as more than a campaign, as Sánchez described it, "a movement." Their goal is to cultivate a culture where empathy, respect, and empowerment guide every interaction. RISE hopes to bridge gaps within the school, strengthen collaboration, and build an inclusive environment where everyone feels part of something greater. By emphasizing self-awareness, connection, and collective progress, RISE envisions a Newton where students can not only excel academically but also grow personally, emotionally, and socially. Their approach reflects an understanding that leadership is not confined to titles; it is reflected in everyday actions, kindness, and the courage to stand up for what matters.</p>
        
        <p>As election day approaches, the Newton community has the opportunity to reflect on the values it wishes to see represented in its next Student Council. RISE's message of empowerment and inclusion, Sánchez and her team invite students to imagine a school where leadership is shared, voices are amplified, and the community thrives together. Their team emphasizes the importance of staying informed before casting a vote.</p>
        
        <p>Understanding what each team represents allows every student to make a conscious decision and vote wisely, one that truly aligns with the future they envision for Newton College. Regardless of the outcome, RISE's presence in this year's elections highlights an inspiring message: leadership begins with respect, grows through integrity, gains strength from collaboration, and flourishes through empathy.</p>`
    },

    'article-renew-future-change': {
        title: 'ReNew: The Future Change for Newton',
        author: 'Ariana Cordero',
        date: 'October 21, 2025',
        category: 'Events',
        excerpt: 'Election season at Newton always brings big ideas and bright posters — but this year, one campaign has managed to feel a little more real.',
        content: `<p>Election season at Newton always brings big ideas and bright posters — but this year, one campaign has managed to feel a little more real. The ReNew party isn't promising perfection or overnight transformation. Instead, they're talking about something simpler, but far more powerful: creating a school where everyone feels like they belong.</p>
        
        <p>Led by President Alessia Cordero, Vice-precident Ariana Patrón, Treasurer Adhvik Jayakumar, and Secretary Thais Cohn, ReNew has built its campaign on genuine connection. Their message focuses on the everyday things that make school life meaningful — feeling seen, being heard, and knowing that your voice matters. They're not aiming to just change Newton; they want to renew it — to make it feel alive again through collaboration, care, and action.</p>
        
        <p>At the heart of their campaign are what they call the Foundations of ReNew:</p>
        
        <p><strong>INCLUSIVITY</strong> – ReNew wants every student, no matter their grade, interest, or background, to feel part of the same community. Their focus on inclusion means that leadership isn't about being above anyone, but standing with everyone.</p>
        
        <p><strong>EMPATHY</strong> – From their speeches to their tone, this team has made it clear they're here to listen. They want to make decisions that reflect what students actually think and need, because understanding each other is where real change starts.</p>
        
        <p><strong>EXCELLENCE</strong> – For ReNew, excellence isn't about being perfect, it's about improving together. Their campaign revolves around progress: the idea that every step forward, no matter how small, makes our community stronger.</p>
        
        <p><strong>COMMUNITY</strong> – This is the heart of everything they stand for. Whether it's through shared experiences, teamwork, or simply showing up for one another, ReNew envisions a Newton that feels united — a place where spirit and friendship shape the way we learn and grow.</p>
        
        <p>Their slogan, "Think New. Vote ReNew," captures that perfectly. They aren't trying to sell a dream, they're asking everyone to take part in it. It's a reminder that renewal doesn't happen from the top down; it happens when a community works together toward something better.</p>
        
        <p>ReNew's campaign feels refreshing because it doesn't rely on flashiness. It's human, thoughtful, and focused on building a school culture where kindness, collaboration, and pride guide everything we do.</p>
        
        <p>So as election day approaches, maybe it's time to ask: what kind of Newton do we want? One that keeps things the same, or one that dares to grow together?</p>
        
        <p>This year, ReNew is inviting us all to be part of something bigger, to build a school where everyone belongs, every voice is heard, and every idea helps us move forward.</p>`
    }
};

// Function to get URL parameter
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to get article by ID
function getArticle(id) {
    return articles[id] || null;
}

// Function to open article
function openArticle(articleId) {
    console.log('Opening article:', articleId); // Debug log
    
    // Get category information from the articles database
    const article = articles[articleId];
    const category = article ? article.category.toLowerCase() : 'general';
    
    // Pass both article ID and category to the article page
    window.location.href = `article.html?id=${articleId}&category=${category}`;
}

// Debug function to test article opening
function testArticle() {
    console.log('Articles available:', Object.keys(articles));
    console.log('Testing openArticle function...');
    openArticle('article-golden-sports');
}
