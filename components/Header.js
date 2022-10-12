import {AppBar, Toolbar, Typography} from '@mui/material'
import Link from 'next/link'

export default function Header(){
    return (
        <AppBar position="static" color="inherit" sx={{ boxShadow: 1 }}>
            <Toolbar variant="dense">
                <Typography variant="body1" component="div" sx={{ flexGrow: 1, color: '#ed5247' }}>
                    <Link href="/">
                        DJ Events
                    </Link>
                </Typography>
                <Typography variant="body2" component="div">
                    <Link href="/events">
                        Events
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}