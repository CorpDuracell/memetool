import { Network, Alchemy } from "alchemy-sdk";
import { NFT_CONTRACTS } from "../config/nftContracts";

export default async (req, res) => {
    const { owner } = req.query;

    // Check if the owner parameter is provided
    if (!owner || owner.trim() === "") {
        return res.status(400).json({ error: 'Please provide a Wallet Address.' });
    }

    // Initialize the Alchemy SDK
    const alchemy = new Alchemy({
        apiKey: process.env.ALCHEMY_API_KEY,
        network: Network.ETH_MAINNET
    });

    try {
        // Get all NFTs for the specified owner and contracts
        const data = await alchemy.nft.getNftsForOwner(owner, { contractAddresses: NFT_CONTRACTS });
        
        if (data && data.ownedNfts && data.ownedNfts.length > 0) {
            const nfts = data.ownedNfts.map(nft => {
                if (!nft.tokenId || !nft.rawMetadata) {
                    console.log("Problematic NFT:", nft);
                    return null;
                }

                return {
                    tokenId: nft.tokenId,
                    name: nft.rawMetadata.name,
                    image: nft.rawMetadata.image,
                    attributes: nft.rawMetadata.attributes,
                    totalSupply: nft.contract.totalSupply,
                    tokenType: nft.tokenType,
                    floorPrice: nft.contract.openSea.floorPrice,
                };
            }).filter(Boolean);

            res.status(200).json({ nfts, totalCount: data.totalCount });
        } else {
            res.status(404).json({ error: 'No NFTs found for this owner from the desired contracts.' });
        }
    } catch (error) {
        console.error("Error fetching data from Alchemy:", error);
        return res.status(500).json({ error: 'Failed to fetch NFT data.' });
    }
};
