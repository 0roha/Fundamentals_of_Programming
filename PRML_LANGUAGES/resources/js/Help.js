
const faqData = 
[
    {
        question: "How do I contact customer support?",
        answer: ""
    },
    {
        question: "Do you have live chat?",
        answer: "For now, we don't have live chat support."
    },
    {
        question: "How long will it take to learn?",
        answer: "Learning programming varies from person to person, but most beginners can understand the basics in one to three months. With consistent practice, they can reach an intermediate level within six months to a year, allowing them to build real projects. Achieving advanced skills usually takes one to two years or more, especially when working on larger applications and complex concepts. Overall, progress depends on consistency, hands-on practice, and the willingness to keep learning, making steady effort more important than speed."
    },
    {
        question: "Which programming language should I learn first?",
        answer: "Choosing your first programming language depends on your goals. Python is the best overall choice for beginners because it is easy to learn and widely used in many fields. JavaScript is ideal if you want to build websites, while Java is great for students and large projects. C# is perfect for game development with Unity, and C/C++ are useful if you want to understand how computers work at a deeper level, though they are harder to start with. In the end, the best language is the one that matches what you want to create and helps you enjoy the learning process."
    },
    {
        question: "What simple projects I can build?",
        answer: "For beginners, simple projects like a to-do list app, a personal blog website, a calculator, or a basic game like Tic-Tac-Toe are great starting points. These projects help you practice coding skills and understand how to build functional applications."
    },
];


function loadFAQs() 
{
    const container = document.getElementById('faqContainer');
    container.innerHTML = '';
    
    faqData.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question" data-index="${index}">
                ${faq.question}
            </div>
            <div class="faq-answer" id="answer-${index}">
                <p>${faq.answer}</p>
            </div>
        `;
        container.appendChild(faqItem);
    });
    
    
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            toggleAnswer(index);
        });
    });
}
    
function toggleAnswer(index) 
{
    const answer = document.getElementById(`answer-${index}`);
    const question = answer.previousElementSibling;
    
    
    document.querySelectorAll('.faq-answer').forEach(ans => {
        if (ans.id !== `answer-${index}`) {
            ans.classList.remove('open');
            ans.previousElementSibling.classList.remove('active');
        }
    });
    
   
    question.classList.toggle('active');
    
   
    if (answer.classList.contains('open')) {
        answer.classList.remove('open');
    } else {
        answer.classList.add('open');
    }
}


document.getElementById('searchBox').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');
    const noResults = document.getElementById('noResults');
    let hasResults = false;
    
    faqItems.forEach((item, index) => {
        const question = faqData[index].question.toLowerCase();
        const answer = faqData[index].answer.toLowerCase();
        
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = 'block';
            hasResults = true;
            
            
            if (searchTerm.length > 0) {
                const questionElement = item.querySelector('.faq-question');
                const answerElement = item.querySelector('.faq-answer p');
                
                const highlightedQuestion = faqData[index].question.replace(
                    new RegExp(searchTerm, 'gi'),
                    match => `<span style="color: #ff3366; text-shadow: 0 0 5px #ff3366;">${match}</span>`
                );
                
                const highlightedAnswer = faqData[index].answer.replace(
                    new RegExp(searchTerm, 'gi'),
                    match => `<span style="color: #ff3366; text-shadow: 0 0 5px #ff3366;">${match}</span>`
                );
                
                questionElement.innerHTML = highlightedQuestion;
                answerElement.innerHTML = highlightedAnswer;
            }
        } else {
            item.style.display = 'none';
        }
    });
    
    
    noResults.style.display = hasResults || searchTerm.length === 0 ? 'none' : 'block';
});

        
loadFAQs();