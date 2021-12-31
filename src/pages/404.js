import { Container, Typography } from "@mui/material"
import * as React from "react"
import Seo from "../components/Seo"
import Layout from "../components/layout"
import { container } from "../styles/styles"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" description="404" />
    <Container maxWidth="md" sx={container}>
      <Typography
        variant="h1"
        color="primary"
        align="center"
        sx={{ fontSize: { md: "60px", sm: "50px", xs: "40px" } }}
      >
        Page Not Found{" "}
      </Typography>
    </Container>
  </Layout>
)

export default NotFoundPage
