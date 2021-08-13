import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getPosts } from 'lib/api';
import PostList from 'components/PostList/PostList';

function getTopics(list) {
  let items = [];

  for (const item of list) {
    items = [...items, ...item.topics];
  }
  return [...new Set(items)];
}

export default function SearchResult() {
  let match = useRouteMatch();
  const [posts, setPosts] = useState(null);
  const [topics, setTopics] = useState(null);

  useEffect(() => {
    const keyword = match.params.keyword;
    const topics = match?.params?.topics ? match.params.topics : '';

    (async () => {
      const results = await getPosts(keyword, topics);
      setPosts(results);
      setTopics(getTopics(results));
    })();
  }, [match.params]);

  return (
    <div>
      <div className="text-2xl border-b border-gray-300 py-3">
        {match.params.keyword}
      </div>
      <div className="py-3">
        <div>Search Results</div>
        {topics && topics?.length !== 0 && (
          <div className="flex space-x-2 justify-end">
            <div>Topics: </div>
            <div className="text-blue-700">{topics.join(', ')}</div>
          </div>
        )}
      </div>
      {posts && posts?.length !== 0 ? (
        <PostList list={posts} />
      ) : (
        <div>No Result</div>
      )}
    </div>
  );
}
