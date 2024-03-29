import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import articles from "./article-content";
import useUser from "../hooks/useUser";
import CommentsList from "../component/CommentsList";
import NotFoundPage from "./NotFoundPage";
import AddCommentForm from "../component/AddCommentForm";
const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: [],
    canUpvote: false,
  });
  const { canUpvote } = articleInfo;
  const { articleId } = useParams();
  const navigate = useNavigate();

  const { user, isLoading } = useUser();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && (await user.getIdToken());
      const headers = token ? { authToken: token } : {};
      const response = await axios.get(`/api/articles/${articleId}`, {
        headers,
      });
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };

    if (isLoading) {
      loadArticleInfo();
    }
  }, [isLoading, user]);

  const article = articles.find((article) => article.name === articleId);

  const addUpvote = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authToken: token } : {};
    const response = await axios.put(
      `/api/articles/${articleId}/upvote`,
      null,
      {
        headers,
      }
    );
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  };

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvotes-section">
        {user ? (
          <button onClick={addUpvote}>
            {canUpvote ? "Upvote" : "Already Upvoted"}
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in to upvote
          </button>
        )}
        <p>This article has {articleInfo.upvotes} upvote(s).</p>
      </div>
      {article.content.map((paragraph, i) => (
        <div key={i}>
          <h4>{paragraph.subTitle}</h4>
          <p>{paragraph.text}</p>
        </div>
      ))}
      {user ? (
        <AddCommentForm
          articleName={articleId}
          onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}
        />
      ) : (
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Log in to add a comment
        </button>
      )}
      <CommentsList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
