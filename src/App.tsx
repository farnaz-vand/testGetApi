import React, { useContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostList from './components/PostList';
import './index.css';
import { ThemeProvider, useTheme } from './context/ ThemeContext';
import ThemeDropdown from './components/ThemeDropdown';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ThemeApp />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const ThemeApp = () => {
  const { theme, toggleTheme } = useTheme();
  return (
<div className={`${theme} rounded-2xl`}>
        <h1>Welcome to the App!</h1>
      <ThemeDropdown />
      <PostList />
    </div>
  );
};

export default App;
