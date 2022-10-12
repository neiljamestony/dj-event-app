import { Box, Typography } from '@mui/material'
import Link from 'next/link'

export default function Footer(){
    return(
        <footer>
            <Box fontFamily="Poppins" textAlign="center">
                <Typography variant="body2">Copyright &copy; DJ Events 2022</Typography>
                <Typography variant="body2">
                    <Link href="/about">
                        About this project
                    </Link>
                </Typography>
            </Box>
        </footer>
    )
}