import { useEffect, useState } from 'react';
import './BlogDetails.css';

const relatedBlogs = [
    {
        id: 1,
        image: "/assets/blog-img.svg",
        title: "AI in Healthcare: Transforming Care for Patients",
        readMore: "/blog/1"
    },
    {
        id: 2,
        image: "/assets/blog-img.svg",
        title: "AI in Healthcare: Transforming Care for Patients",
        readMore: "/blog/2"
    }
];

const BlogDetails = ({ blogId }) => {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        // In a real app, this would be an API call
        // For now, we'll use mock data
        const blogData = {
            id: blogId,
            image: "/assets/blog-img.svg",
            readTime: "10 mins",
            genre: "Healthcare",
            title: "AI in Healthcare: Transforming Care for Patients",
            author: "John Doe",
            date: "March 15, 2024",
            content: `
                <p>In the present quickly progressing mechanical scene, Computerized reasoning (Artificial Intelligence Development) has arisen as an extraordinary power across different businesses. It has revolutionized traditional approaches to patient care, diagnosis, and treatment, particularly in healthcare. Healthcare providers have unprecedented opportunities to enhance efficiency, improve outcomes, and ultimately save lives by utilizing AI-powered technologies. This blog investigates the significant ramifications of artificial intelligence in medical care, from early discovery to customized therapy plans, prescient examination, smoothed out work processes, and remote checking arrangements.</p>

                <h2>Early Identification and Conclusion</h2>
                <p>Man-made intelligence has changed the course of sickness location and analysis by utilizing AI Development to break down immense measures of clinical information. These calculations can filter through persistent records, pictures, and genomic successions to recognize inconspicuous examples and irregularities that might show the presence of an illness. For example, man-made intelligence-controlled imaging procedures can recognize early indications of conditions like malignant growth, cardiovascular illness, and neurological problems with a degree of exactness and productivity that was beforehand out of reach. AI has the potential to significantly improve patient outcomes and survival rates by enabling earlier detection and diagnosis.</p>
                
                <h2>Customized Treatment Plans</h2>
                <p>One of the most encouraging utilizations of simulated intelligence in medical care is its capacity to create customized therapy plans for individual patients. By incorporating patient-explicit information, including clinical history, hereditary data, and way of life factors, simulated intelligence calculations can fit treatment regimens to address the one-of-a-kind necessities and qualities of every patient. For instance, computer-based intelligence-controlled choice emotionally supportive networks can dissect a patient's hereditary profile to decide the best medicine and measurement, limiting the gamble of unfavorable responses and treatment disappointments. Customized treatment plans work on understanding results as well as add to more productive and financially savvy medical services conveyance.</p>

                <h2>Prescient Investigation and Preventive Consideration</h2>
                <p>Simulated intelligence driven prescient examinations are reforming medical care by distinguishing people at high gamble of fostering specific circumstances or encountering unfavorable occasions. By investigating huge datasets of patient data, including socioeconomics, clinical history, and way of life factors, man-made intelligence calculations can recognize examples and patterns that might demonstrate expanded risk. Medical care suppliers can then mediate proactively by carrying out preventive measures, way of life adjustments, and designated intercessions to alleviate gambles and further develop wellbeing results. From foreseeing clinic readmissions to recognizing patients in danger of sepsis or cardiovascular breakdown, man-made intelligence controlled prescient examination are empowering medical services associations to improve asset designation, diminish medical care expenses, and upgrade patient security.</p>

                <h2>Smoothed out Work process and Choice Help</h2>
                <p>Artificial intelligence advancements are smoothing out medical services work processes and giving choice help to medical care experts, empowering them to convey more effective and proof-based care. Regular Language Handling (NLP) calculations can separate applicable data from unstructured clinical notes, research papers, and clinical writing, giving clinicians ideal admittance to the most recent proof-based rules, treatment conventions, and best practices. Moreover, artificial intelligence controlled clinical choice emotionally supportive networks can dissect patient information progressively, making suppliers aware of potential medication associations, analytic mistakes, and treatment inconsistencies, subsequently decreasing blunders and working on persistent wellbeing.</p>

                <h2>Remote Observing and Telemedicine</h2>
                <p>In the period of computerized wellbeing, simulated intelligence is assuming a critical part in empowering remote observing and telemedicine arrangements, stretching out admittance to mind past customary medical services settings. Wearable gadgets outfitted with artificial intelligence calculations can persistently screen indispensable signs, action levels, and drug adherence, permitting medical services suppliers to remotely follow patient advancement, distinguish early admonition signs, and mediate depending on the situation. Telemedicine stages controlled by computer-based intelligence driven chatbots and menial helpers are likewise working with far off counsels, emergency, and follow-up care, further developing admittance to medical services administrations, especially in underserved and distant regions.</p>

                <h2>Conclusion</h2>
                <p>All in all, the joining of Artificial intelligence advancements in medical services holds colossal commitment for changing patient consideration, driving development, and tending to the complicated difficulties confronting the medical services industry. By saddling the force of simulated intelligence for early discovery, customized treatment, prescient investigation, smoothed out work processes, and remote checking, medical services associations can work on clinical results, improve patient experience, and upgrade asset use.</p>
                
                <p>Be that as it may, understanding the maximum capacity of computer-based intelligence in medical care requires coordinated effort between medical services suppliers, innovation designers, policymakers, and patients to conquer administrative obstructions, guarantee information protection, and encourage trust in artificial intelligence fueled arrangements. As artificial intelligence proceeds to develop and develop, it can possibly alter medical services conveyance, making quality consideration more available, reasonable, and viable for patients around the world.</p>
                
                <p>With its extraordinary abilities, man-made intelligence is ready to reshape the eventual fate of medical services, enabling suppliers to convey more customized, productive, and powerful consideration to patients all over the planet. As we explore this quickly advancing scene, it's crucial for embrace development, encourage joint effort, and focus on persistent focused ways to deal with bridle the maximum capacity of artificial intelligence in medical services. By cooperating, we can use the force of Artificial intelligence to beat medical services difficulties, work on quiet results, and eventually, change the manner in which we convey and encounter medical services in the 21st hundred years.</p>
            `
        };
        setBlog(blogData);
    }, [blogId]);

    if (!blog) return <div>Loading...</div>;

    return (
        <div className="blog-details-container">
            <div className="blog-details-header">
                <div className="blog-details-meta">
                    <div className="meta-left">
                        <span className="blog-genre">{blog.genre}</span>
                        <span className="blog-date">{blog.date}</span>
                        <div className="blog-time">
                            <img src="/assets/clock.svg" alt="Read time" />
                            <span>{blog.readTime}</span>
                        </div>
                    </div>
                    <div className="meta-right">
                        <div className="share-buttons">
                            <a href="#" className="share-button">
                                <img src="/assets/linkedin.svg" alt="Share on LinkedIn" />
                            </a>
                            <a href="#" className="share-button">
                                <img src="/assets/x.svg" alt="Share on X" />
                            </a>
                            <a href="#" className="share-button">
                                <img src="/assets/insta.svg" alt="Share on Instagram" />
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <h1 className="blog-title">{blog.title}</h1>
                <div className="author-info">
                    <span>Written by</span>
                    <strong>{blog.author}</strong>
                </div>
            </div>

            <div className="blog-details-content">
                <div className="blog-hero-image">
                    <img src={blog.image} alt={blog.title} />
                </div>
                <div className="blog-text-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>

            <div className="blog-details-footer">
                <h3>Share this article</h3>
                <div className="share-buttons large">
                    <a href="#" className="share-button">
                        <img src="/assets/linkedin.svg" alt="Share on LinkedIn" />
                        <span>Share on LinkedIn</span>
                    </a>
                    <a href="#" className="share-button">
                        <img src="/assets/x.svg" alt="Share on X" />
                        <span>Share on X</span>
                    </a>
                    <a href="#" className="share-button">
                        <img src="/assets/insta.svg" alt="Share on Instagram" />
                        <span>Share on Instagram</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails; 