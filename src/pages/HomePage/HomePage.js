import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@material-ui/core"
import theme from "../../constants/theme"
import { ThemeProvider } from '@material-ui/styles';

const HomePage = () => {
    const navigate = useNavigate()
    return(
        <ThemeProvider theme={theme}>
           HomePage
           
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
    </ThemeProvider>
      
    )
}

export default HomePage