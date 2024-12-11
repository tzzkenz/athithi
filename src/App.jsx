import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReusableCard from "./components/ReusableCard";
import ButtonComponent from "./components/Button";
import ListComponent from "./components/List";
import { Box } from "@mui/material";

export default function App() {
  const card_data = [
    {
      title: "Card 1",
      description: "Description 1",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Card 2",
      description: "Description 2",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Card 3",
      description: "Description 3",
      image: "https://placehold.co/600x400",
    },
  ];

  const list_data = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "64px",
          paddingY: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          {card_data.map((card) => (
            <Box
              key={card.title}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <ReusableCard
                title={card.title}
                description={card.description}
                image={card.image}
              />
              <ButtonComponent text="Click here" color="success" />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingY: 4,
          }}
        >
          <ListComponent items={list_data} />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
