import axios from 'axios';

export const fetchPosts = async () => {
  try {
    console.log('Fetching posts...');
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Failed to fetch posts');
    const data = await response.json();
    console.log('Posts fetched:', data);
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

