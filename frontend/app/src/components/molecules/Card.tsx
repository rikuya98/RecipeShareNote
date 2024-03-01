import { CardHeader, CardBody, Tag, Text,Box,Flex,Divider, Heading ,
Grid, GridItem, Card}  from "@yamada-ui/react"

interface CardProps {
    recipes:
        {
            title: string;
            date: string;
            author: string;
            tags: string[];
        }[]
}

export const Cards = (props: CardProps) => {
    const { recipes } = props;
    return(
 <Grid templateColumns="repeat(3, 1fr)" gap="md">
 {recipes.map((recipe, index) => (
<GridItem>
<Card key={index}>
        <CardHeader>
<Heading size="sm" >{recipe.title}</Heading>
</CardHeader>
<CardBody>
<Flex gap="md" direction="column">
  <Text size="sm" >作成日時: {recipe.date}</Text>
  <Text size="sm" >作成者: {recipe.author}</Text>
  <Divider variant="solid" />
  <Box>
    {recipe.tags.map((tag, tagIndex) => (
      <Tag key={tagIndex} size="sm">{tag}</Tag>
    ))}
  </Box>
</Flex>
</CardBody>
</Card>
</GridItem>
  ))}
</Grid>

    )
}