import React, { useState, useEffect, useCallback, useRef } from 'react';
import { blogData } from '../../utils/blogData.mjs';
import './Blog.css';
import { animateBlog } from '../../utils/gsapAnimations.mjs';

const Blog = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const blogRef = useRef(null);

    const handleBlogClick = (blogId) => {
        if (!isDragging) {
            window.location.href = `/blog/${blogId}`;
        }
    };
    
    const cardsToShow = isMobile ? 1 : 2;
    const gapPercentage = isMobile ? 1 : 2;
    const minSwipeDistance = 50;

    useEffect(() => {
        if (blogRef.current) {
            animateBlog(blogRef.current);
        }
    }, []);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            if (mobile !== isMobile) {
                setIsMobile(mobile);
                setCurrentIndex(0);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile]);

    const slideTimeout = useCallback(() => {
        return new Promise((resolve) => {
            setTimeout(resolve, 800); // Increased to match new transition duration
        });
    }, []);

    const nextSlide = useCallback(async () => {
        if (isAnimating) return;
        setIsAnimating(true);
        
        const nextIndex = currentIndex + cardsToShow >= blogData.length ? 0 : currentIndex + cardsToShow;
        setCurrentIndex(nextIndex);
        
        await slideTimeout();
        setIsAnimating(false);
    }, [currentIndex, isAnimating, slideTimeout, cardsToShow]);

    const prevSlide = useCallback(async () => {
        if (isAnimating) return;
        setIsAnimating(true);
        
        const prevIndex = currentIndex - cardsToShow < 0 ? 
            blogData.length - (blogData.length % cardsToShow || cardsToShow) : 
            currentIndex - cardsToShow;
        setCurrentIndex(prevIndex);
        
        await slideTimeout();
        setIsAnimating(false);
    }, [currentIndex, isAnimating, slideTimeout, cardsToShow]);

    // Touch handlers for mobile swipe
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        
        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    // Mouse drag handlers
    const onMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - e.currentTarget.offsetLeft);
        setScrollLeft(currentIndex);
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.pageX - e.currentTarget.offsetLeft;
        const distance = (x - startX) / e.currentTarget.offsetWidth;
        
        if (Math.abs(distance) > 0.15) {
            if (distance > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
            setIsDragging(false);
        }
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseLeave = () => {
        setIsDragging(false);
    };

    // Auto-slide every 5 seconds if not dragging
    useEffect(() => {
        if (isDragging) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide, isDragging]);

    const transformValue = `translateX(-${currentIndex * (100 / cardsToShow + gapPercentage)}%)`;

    // Handle mouse movement for card hover effect
    const handleMouseMove = (e, card) => {
        if (isDragging) return;
        
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
        
        const rotateX = ((y - 50) / 50) * -5;
        const rotateY = ((x - 50) / 50) * 5;
        
        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(${card.classList.contains('hover') ? '-10px' : '0'})
            scale(${card.classList.contains('hover') ? '1.02' : '1'})
        `;
    };

    const handleMouseEnter = (e) => {
        if (isDragging) return;
        const card = e.currentTarget;
        card.classList.add('hover');
        handleMouseMove(e, card);
    };

    const handleMouseLeave = (card) => {
        card.classList.remove('hover');
        card.style.transform = '';
    };

    return(
        <div className="blog container" ref={blogRef} id='blog'>
            <div className="header">
                <h2 className="bg-title">Blogs</h2>
                <p className="header-description">
                    Through our blogs, we share insights, tips, and strategies to help businesses
                    embrace innovation and succeed in the ever-evolving tech landscape.
                </p>
            </div>

            <div className="blog-container">
                <div className="slider-btn">
                    <div 
                        className="arrow-circle" 
                        onClick={!isAnimating ? prevSlide : undefined}
                        role="button" 
                        tabIndex={0}
                        aria-label="Previous slide"
                    >
                        <img src="/assets/slide-arrow.svg" alt="Previous" />
                    </div>
                    <div 
                        className="arrow-circle" 
                        onClick={!isAnimating ? nextSlide : undefined}
                        role="button" 
                        tabIndex={0}
                        aria-label="Next slide"
                    >
                        <img src="/assets/slide-arrow.svg" alt="Next" />
                    </div>
                </div>

                <div className="blog-cards-wrapper"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseLeave}
                >
                    <div className={`blog-cards ${isAnimating ? 'sliding' : ''}`} 
                         style={{ transform: transformValue }}>
                        {blogData.map((blog, index) => (
                            <div 
                                key={blog.id}
                                className={`blog-card ${index === currentIndex || index === currentIndex + 1 ? 'active' : ''}`}
                                onClick={() => handleBlogClick(blog.id)}
                                onMouseMove={(e) => !isDragging && handleMouseMove(e, e.currentTarget)}
                                onMouseEnter={(e) => !isDragging && handleMouseEnter(e)}
                                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                            >
                                <div className="blog-top">
                                    <img src={blog.image} alt={blog.title} />
                                </div>

                                <div className="blog-middle">
                                    {/* <div className="blog-time">
                                        <img src="/assets/clock.svg" alt="Read time" />
                                        <p>{blog.readTime}</p>
                                    </div> */}
                                    
                                    <button className='blog-genre'>{blog.genre}</button>
                                </div>

                                <h2 className="card-title">
                                    {blog.title}
                                </h2>

                                <button className="read-more-btn">
                                    Read More <img src="/assets/arrow.svg" alt="Read more" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;