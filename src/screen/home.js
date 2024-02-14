import React, { useState } from 'react';
import Main from '../components/Main';
import DrawerHeader from '../components/DrawerHeader';
import { Card, CardContent, Typography } from '@material-ui/core';

function Home() {
    const [open, setOpen] = useState(false); // Définir open avec useState

    return (
        <div>
            <Main open={open}>
                <DrawerHeader />
                <Card style={{ width: '80%', maxWidth: '500px', height: '200px', marginRight: 'auto' }}>
                    <CardContent>
                        {/* Contenu de votre carte */}
                    </CardContent>
                </Card>
                <Card style={{ marginTop: '16px' }}>
                    <CardContent>
                        <Typography paragraph>
                            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                            sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                            tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                            tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                            posuere sollicitudin aliquam ultrices sagittis orci a.
                        </Typography>
                    </CardContent>
                </Card>
            </Main>
        </div>
    );
}

export default Home;
