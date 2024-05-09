import { Box, Container, Heading, List, ListItem, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const HackerNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(response => response.json())
      .then(data => {
        const topTenIds = data.slice(0, 10);
        Promise.all(topTenIds.map(id =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
            .then(response => response.json())
        )).then(articles => setArticles(articles));
      })
      .catch(error => console.error("Failed to fetch top stories from Hacker News:", error));
  }, []);

  return (
    <Container maxW="container.xl" p={5}>
      <Heading mb={4}>Top 10 Hacker News Articles</Heading>
      <List spacing={3}>
        {articles.map(article => (
          <ListItem key={article.id} borderWidth="1px" p={4} borderRadius="md">
            <Link href={article.url} isExternal color="blue.500">{article.title}</Link>
            <Text fontSize="sm">Score: {article.score} - By {article.by}</Text>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default HackerNews;