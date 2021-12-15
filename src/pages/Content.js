import { Typography } from "@mui/material"
import { Link } from "gatsby"
import React from "react"

const Content = () => {
  return (
    <div>
      <Typography variant="h1" color="primary">
        Let's start ordering okay?
      </Typography>
      <Link to="/">HOme</Link>
    </div>
  )
}

export default Content
