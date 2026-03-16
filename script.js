// Create a QAItem class
class QAItem {
    constructor(questionText, answerText) {
        // Stores question and answer text
        this.questionText = questionText;
        this.answerText = answerText;
        this.isOpen = false;
    }

    // Method to toggle visibility and update cues
    toggleVisibility(itemDiv, iconSpan) {
        this.isOpen = !this.isOpen;
        
        // Toggle the visibility of the corresponding answer (class toggling)
        itemDiv.classList.toggle('active', this.isOpen);
        
        // Update the visual cue
        iconSpan.textContent = this.isOpen ? '-' : '+';
    }

    // Method to render HTML
    render() {
        // Group each question and answer pair
        const itemDiv = document.createElement('div');
        itemDiv.className = 'qa-item';

        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        
        const questionSpan = document.createElement('span');
        questionSpan.textContent = this.questionText;

        const iconSpan = document.createElement('span');
        iconSpan.className = 'icon';
        iconSpan.textContent = '+'; // Initial state

        questionDiv.appendChild(questionSpan);
        questionDiv.appendChild(iconSpan);

        const answerWrapperDiv = document.createElement('div');
        answerWrapperDiv.className = 'answer-wrapper';

        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer';
        answerDiv.textContent = this.answerText;

        answerWrapperDiv.appendChild(answerDiv);

        itemDiv.appendChild(questionDiv);
        itemDiv.appendChild(answerWrapperDiv);

        // Add event listeners to questions
        questionDiv.addEventListener('click', () => {
            // Toggle visibility and update visual cue
            this.toggleVisibility(itemDiv, iconSpan);
        });

        return itemDiv;
    }
}

// Array to store QAItem instances
const faqData = [
    new QAItem(
        "What is SQL used for?", 
        "SQL (Structured Query Language) is used for storing, manipulating, and retrieving data in relational database management systems."
    ),
    new QAItem(
        "What are the core concepts of Java?", 
        "Java is heavily based on Object-Oriented Programming (OOP). Its core concepts include Encapsulation, Inheritance, Polymorphism, and Abstraction."
    ),
    new QAItem(
        "What does discrete mathematics involve?", 
        "It involves the study of mathematical structures that are countable and distinct, such as sets, graphs, and logical statements, which form the foundation of computer science."
    )
];

// Dynamically generate Q&A sections using this array
const container = document.getElementById('faq-container');
faqData.forEach(item => {
    container.appendChild(item.render());
});