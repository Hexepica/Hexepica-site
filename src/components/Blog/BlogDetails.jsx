import { useEffect, useState } from 'react';
import { getBlogById, getRelatedBlogs } from '../../utils/blogData.mjs';
import './BlogDetails.css';

const BlogDetails = ({ blogId }) => {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

    useEffect(() => {
        const blogData = getBlogById(blogId);
        setBlog(blogData);
        setRelatedBlogs(getRelatedBlogs(blogId));
    }, [blogId]);

    const handleMouseMove = (e, card) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    };

    const handleCardClick = (blogId) => {
        window.location.href = `/blog/${blogId}`;
    };

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

            {relatedBlogs.length > 0 && (
                <div className="related-blogs">
                    <h2>Related Articles</h2>
                    <div className="related-blogs-grid">
                        {relatedBlogs.map(relatedBlog => (
                            <div 
                                key={relatedBlog.id} 
                                className="related-blog-card"
                                onClick={() => handleCardClick(relatedBlog.id)}
                                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                            >
                                <div className="related-blog-top">
                                    <img src={relatedBlog.image} alt={relatedBlog.title} />
                                </div>

                                <div className="related-blog-middle">
                                    {/* <div className="related-blog-time">
                                        <img src="/assets/clock.svg" alt="Read time" />
                                        <p>{getBlogById(relatedBlog.id).readTime}</p>
                                    </div> */}
                                    
                                    <button className='related-blog-genre'>{getBlogById(relatedBlog.id).genre}</button>
                                </div>

                                <h2 className="related-card-title">
                                    {relatedBlog.title}
                                </h2>

                                <button className="related-read-more-btn">
                                    Read More <img src="/assets/arrow.svg" alt="Read more" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogDetails; 