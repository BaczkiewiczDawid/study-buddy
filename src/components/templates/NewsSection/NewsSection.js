import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';

export const NewsSection = () => {
    return (
        <Wrapper>
            <NewsSectionHeader>University feed section</NewsSectionHeader>
            <ArticleWrapper>
                <TitleWrapper>
                    <h3>Lorem ipsum</h3>
                    <p>TechNews</p>
                </TitleWrapper>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur at impedit assumenda perspiciatis nulla dicta illum recusandae earum. Non!</p>
                <Button isBig>Read more</Button>
            </ArticleWrapper>
            <ArticleWrapper>
                <h3>Lorem ipsum</h3>
                <p>dolor sit amet</p>
                <Button isBig>Read more</Button>
            </ArticleWrapper>
            <ArticleWrapper>
                <h3>Lorem ipsum</h3>
                <p>dolor sit amet</p>
                <Button isBig>Read more</Button>
            </ArticleWrapper>
        </Wrapper>
    )
}