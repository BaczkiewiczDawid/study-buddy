import React, { useState, useEffect } from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

const API_TOKEN = '94a646bf75e8e006ed0322f195cc12'

export const NewsSection = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.post('https://graphql.datocms.com/', {
            query: `
            {
                allArticles {
                    id
                    title
                    category
                    content
                    image {
                        url
                    }
                }
              }`
        }, {
            headers: {
                authorization: `Bearer ${API_TOKEN}`,
            }
        })
        .then(({ data: { data } }) => {
            setArticles(data.allArticles);
        })
        .catch((err) => {
            setError(err);
        })
    }, [])

    return (
        <Wrapper>
            <NewsSectionHeader>University feed section</NewsSectionHeader>
            {articles.length > 0 && !error ? articles.map(({ title, category, content, image = null }) => (
                <ArticleWrapper key={title}>
                    <TitleWrapper>
                        <h3>{title}</h3>
                        <p>{category}</p>
                    </TitleWrapper>
                    <ContentWrapper>
                        <p>{content}</p>
                        {image ? <img src={image.url} alt="article"></img> : null}
                    </ContentWrapper>
                <Button isBig>Read more</Button>
            </ArticleWrapper>
            )) : <NewsSectionHeader>Loading...</NewsSectionHeader>}
            {error ? <NewsSectionHeader>Sorry, we  couldn't load articles for you'</NewsSectionHeader> : null}
        </Wrapper>
    )
}