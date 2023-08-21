import React, { useContext } from 'react';
import { OwnedNFTsContext } from '../contexts/OwnedNFTsContext';
import { useWallet } from '../contexts/WalletContext';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

function OwnedNFTs() {
    const { nfts, isLoading, error } = useContext(OwnedNFTsContext);
    const walletContext = useWallet();
    const walletAddress = walletContext;

    if (!walletAddress) return <div>Please connect your wallet. </div>;
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message} {walletAddress ? `Connected: ${walletAddress}` : 'Not Connected'}</div>;

    const groupedNFTs = nfts.reduce((acc, nft) => {
        (acc[nft.collectionName] = acc[nft.collectionName] || []).push(nft);
        return acc;
    }, {});

    const renderNFTCard = (nft) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={nft.tokenId}>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={nft.thumbnail}
                    alt={nft.name}
                />
                <CardContent>
                    <Typography variant="h5" component="div">{nft.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Token ID: {nft.tokenId}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );

    return (
        <div>
            {groupedNFTs["The MVPs"] && (
                <div>
                    <h3>The MVPs</h3>
                    <Grid container spacing={2}>
                        {groupedNFTs["The MVPs"].map(renderNFTCard)}
                    </Grid>
                </div>
            )}
            {groupedNFTs["The Captainz"] && (
                <div>
                    <h3>The Captainz</h3>
                    <Grid container spacing={2}>
                        {groupedNFTs["The Captainz"].map(renderNFTCard)}
                    </Grid>
                </div>
            )}
            {groupedNFTs["The Potatoz"] && (
                <div>
                    <h3>The Potatoz</h3>
                    <Grid container spacing={2}>
                        {groupedNFTs["The Potatoz"].map(renderNFTCard)}
                    </Grid>
                </div>
            )}
        </div>
    );
}

export default OwnedNFTs;
