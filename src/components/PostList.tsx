import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { fetchPosts } from '../api/Posts';
interface Post {
  id: number;
  title: string;
  body: string;
}
const PostList = () => {
  const { data, isLoading, error } = useQuery<Post[], Error>({
    queryKey: ['posts'], 
    queryFn: fetchPosts, 
  });

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">Error loading posts!</div>;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      <ul className="space-y-4">
        {data?.map((post: any, index: number) => (
          <motion.li
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.3,
              type: 'spring',
              stiffness: 120,
            }}
            className="p-4 bg-white shadow-md rounded-md border border-gray-200"
          >
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.body}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
