import React, { useContext } from 'react';
import { OwnedNFTsContext } from '../contexts/OwnedNFTsContext';
import { useWallet } from '../contexts/WalletContext';
import { Grid, Card, CardActionArea, CardMedia, CardContent, CardHeader, Typography, Button, CardActions } from '@mui/material';

function NFTCard({ nft }) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={nft.name}
                        height="140"
                        image={nft.thumbnail}
                        title={nft.name}
                    />
                    <CardContent>
                        <CardHeader title={nft.name} subheader={`Token ID: ${nft.tokenId}`} />
                        <Typography variant="body2" color="textSecondary" component="p">
                            Total Supply: {nft.totalSupply}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Token Type: {nft.tokenType}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Floor Price: {nft.floorPrice}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        More Info
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

function OwnedNFTs() {
    const { nfts, isLoading, error } = useContext(OwnedNFTsContext);
    const walletContext = useWallet();
    const walletAddress = walletContext;

    if (!walletAddress) return <div>Please connect your wallet. </div>;
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message} {walletAddress ? `Connected: ${walletAddress}` : 'Not Connected'}</div>;

    const collections = ['MVP', 'Captainz', 'Potatoz'];
    const nftsByCollection = collections.map(collection => {
        return {
            name: collection,
            items: nfts.filter(nft => nft.collectionName === collection)
        };
    });

    return (
        <div>
            <h2>Your Memeland NFTs</h2>
            {nftsByCollection.map(collection => {
                if (collection.items.length === 0) return null;  // Skip collections with no NFTs
                return (
                    <div key={collection.name}>
                        <h3>{collection.name} Collection</h3>
                        <Grid container spacing={4}>
                            {collection.items.map(nft => <NFTCard key={nft.tokenId} nft={nft} />)}
                        </Grid>
                    </div>
                );
            })}
        </div>
    );
}

export default OwnedNFTs;
