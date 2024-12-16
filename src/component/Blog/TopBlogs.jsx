import axios from "axios";
import React, { useEffect, useState } from "react";

const TopBlogs = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch top news articles
  const fetchTopNews = async () => {
    setLoading(true);
    setError(null); // Reset error before fetching
    try {
      const response = await axios.get(
        "https://9tpcwx-5000.csb.app/api/posts/top-news"
      );
      console.log(response.data.articles);

      setArticles(response.data.articles);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect to fetch top news on component mount
  useEffect(() => {
    fetchTopNews();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="container">
      <h1 className="heading">Welcome to the Top News Page</h1>
      <p className="subheading">Here you can see the top news for today!</p>
      <button className="fetch-button" onClick={fetchTopNews}>
        Watch Top News
      </button>

      {loading && <div className="loading">Loading...</div>}
      {error && (
        <div className="error">Error fetching data: {error.message}</div>
      )}

      {articles.length > 0 && (
        <ul className="news-list">
          {articles.map((article, index) => (
            <li key={index} className="news-item">
              {article.title && <h2>{article.title}</h2>}
              {article.description && <p>{article.description}</p>}
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} />
              )}
              {article.publishedAt && (
                <p>{new Date(article.publishedAt).toLocaleString()}</p>
              )}
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopBlogs;
