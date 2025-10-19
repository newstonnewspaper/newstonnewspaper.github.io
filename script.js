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

    'article-art-exhibition': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Events',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-debate-competition': {
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
    'article-volunteer': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Community',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-clubs': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Community',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-fundraiser': {
        title: 'ARTICLE TITLE',
        author: 'Editorial Team',
        date: 'October 19, 2025',
        category: 'Community',
        excerpt: 'ARTICLE DESCRIPTION',
        content: '<p>blblablablabla</p>'
    },

    'article-mentorship': {
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