export const blogData = [
    {
        id: 1,
        image: "/assets/blog-img.svg",
        readTime: "10 mins",
        genre: "Healthcare",
        title: "AI in Healthcare: Transforming Care for Patients",
        author: "Hexepica",
        date: "March 15, 2024",
        content: `
            <p>In the present quickly progressing mechanical scene, Computerized reasoning (Artificial Intelligence Development) has arisen as an extraordinary power across different businesses. It has revolutionized traditional approaches to patient care, diagnosis, and treatment, particularly in healthcare. Healthcare providers have unprecedented opportunities to enhance efficiency, improve outcomes, and ultimately save lives by utilizing AI-powered technologies. This blog investigates the significant ramifications of artificial intelligence in medical care, from early discovery to customized therapy plans, prescient examination, smoothed out work processes, and remote checking arrangements.</p>

            <h2>Early Identification and Conclusion</h2>
            <p>Man-made intelligence has changed the course of sickness location and analysis by utilizing AI Development to break down immense measures of clinical information. These calculations can filter through persistent records, pictures, and genomic successions to recognize inconspicuous examples and irregularities that might show the presence of an illness. For example, man-made intelligence-controlled imaging procedures can recognize early indications of conditions like malignant growth, cardiovascular illness, and neurological problems with a degree of exactness and productivity that was beforehand out of reach. AI has the potential to significantly improve patient outcomes and survival rates by enabling earlier detection and diagnosis.</p>
            
            <h2>Customized Treatment Plans</h2>
            <p>One of the most encouraging utilizations of simulated intelligence in medical care is its capacity to create customized therapy plans for individual patients. By incorporating patient-explicit information, including clinical history, hereditary data, and way of life factors, simulated intelligence calculations can fit treatment regimens to address the one-of-a-kind necessities and qualities of every patient. For instance, computer-based intelligence-controlled choice emotionally supportive networks can dissect a patient's hereditary profile to decide the best medicine and measurement, limiting the gamble of unfavorable responses and treatment disappointments. Customized treatment plans work on understanding results as well as add to more productive and financially savvy medical services conveyance.</p>

            <h2>Conclusion</h2>
            <p>All in all, the joining of Artificial intelligence advancements in medical services holds colossal commitment for changing patient consideration, driving development, and tending to the complicated difficulties confronting the medical services industry. By saddling the force of simulated intelligence for early discovery, customized treatment, prescient investigation, smoothed out work processes, and remote checking, medical services associations can work on clinical results, improve patient experience, and upgrade asset use.</p>
        `
    },
    {
        id: 2,
        image: "/assets/blog-img.svg",
        readTime: "8 mins",
        genre: "Technology",
        title: "The Future of Web Development: Trends to Watch in 2024",
        author: "Hexepica",
        date: "March 18, 2024",
        content: `
            <p>The web development landscape is constantly evolving, bringing new technologies, frameworks, and methodologies that shape how we build and interact with digital experiences. As we progress through 2024, several emerging trends are revolutionizing the field of web development.</p>

            <h2>AI-Powered Development Tools</h2>
            <p>Artificial Intelligence is transforming how developers write and debug code. AI-powered code completion, automated testing, and intelligent debugging tools are becoming increasingly sophisticated, helping developers work more efficiently and reduce errors. These tools can suggest code improvements, identify potential bugs before they cause issues, and even generate basic code components automatically.</p>

            <h2>WebAssembly and Edge Computing</h2>
            <p>WebAssembly continues to gain traction, enabling high-performance applications to run directly in the browser. Combined with edge computing, this technology allows for faster processing and reduced latency, creating more responsive and efficient web applications. Developers are leveraging these technologies to build complex applications that previously required native implementations.</p>

            <h2>Progressive Web Apps (PWAs)</h2>
            <p>Progressive Web Apps are becoming the standard for delivering app-like experiences through the web browser. They offer offline functionality, push notifications, and device hardware access, bridging the gap between web and native applications. Companies are increasingly adopting PWAs to provide consistent experiences across all devices while reducing development and maintenance costs.</p>

            <h2>Conclusion</h2>
            <p>The web development landscape continues to evolve rapidly, driven by technological advancements and changing user expectations. Staying informed about these trends and adopting relevant technologies will be crucial for developers and businesses looking to create modern, efficient, and user-friendly web applications.</p>
        `
    },
    {
        id: 3,
        image: "/assets/blog-img.svg",
        readTime: "12 mins",
        genre: "Business",
        title: "Digital Transformation: A Guide for Modern Businesses",
        author: "Hexepica",
        date: "March 20, 2024",
        content: `
            <p>Digital transformation is no longer a luxury but a necessity for businesses looking to remain competitive in today's fast-paced market. This comprehensive guide explores the key aspects of digital transformation and how businesses can successfully navigate this journey.</p>

            <h2>Understanding Digital Transformation</h2>
            <p>Digital transformation involves integrating digital technology into all areas of business, fundamentally changing how you operate and deliver value to customers. It's also a cultural change that requires organizations to continually challenge the status quo, experiment, and get comfortable with failure.</p>

            <h2>Key Components of Digital Transformation</h2>
            <p>Successful digital transformation requires focusing on several key areas: customer experience, operational agility, culture and leadership, workforce enablement, and digital technology integration. Each component plays a crucial role in creating a comprehensive transformation strategy.</p>

            <h2>Conclusion</h2>
            <p>Digital transformation is an ongoing journey that requires commitment, vision, and the right strategy. By understanding its key components and following best practices, businesses can successfully navigate their digital transformation journey and emerge stronger in the digital age.</p>
        `
    },
    {
        id: 4,
        image: "/assets/blog-img.svg",
        readTime: "15 mins",
        genre: "AI",
        title: "Machine Learning: Revolutionizing Industries",
        author: "Hexepica",
        date: "March 22, 2024",
        content: `
            <p>Machine Learning is transforming industries across the board, from healthcare to finance, retail to manufacturing. This article explores how ML is driving innovation and creating new opportunities across different sectors.</p>

            <h2>The Impact of Machine Learning</h2>
            <p>Machine Learning algorithms are helping businesses automate processes, gain insights from data, and make better decisions. From predictive analytics to natural language processing, ML technologies are creating new possibilities for innovation and growth.</p>

            <h2>Industry Applications</h2>
            <p>In healthcare, ML is improving diagnosis accuracy and treatment planning. In finance, it's enhancing fraud detection and risk assessment. Retailers use ML for inventory management and personalized recommendations, while manufacturers leverage it for predictive maintenance and quality control.</p>

            <h2>Conclusion</h2>
            <p>As Machine Learning continues to evolve, its applications and impact will only grow. Organizations that embrace ML and develop strategies to leverage its capabilities will be better positioned to succeed in an increasingly data-driven world.</p>
        `
    }
];

export const getRelatedBlogs = (currentBlogId) => {
    return blogData
        .filter(blog => blog.id !== Number(currentBlogId))
        .map(blog => ({
            id: blog.id,
            image: blog.image,
            title: blog.title,
            readMore: `/blog/${blog.id}`
        }));
};

export const getBlogById = (id) => {
    return blogData.find(blog => blog.id === Number(id)) || null;
}; 