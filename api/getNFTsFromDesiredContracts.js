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
        apiKey: "blQyoZI9DR9e0ksuLiTGGf3kGv19V-fV",
        network: Network.ETH_MAINNET
    });

    try {
        // Get all NFTs for the specified owner
        const data = await alchemy.nft.getNftsForOwner(owner);
        
        if (data && data.ownedNfts && data.ownedNfts.length > 0) {
            const nfts = data.ownedNfts.map(nft => {
                if (!nft.id || !nft.id.tokenId || !nft.metadata) {
                    console.log("Problematic NFT:", nft);  // Log the problematic NFT
                    return null;  // Return null for this NFT and filter it out later
                }

                return {
                    tokenId: nft.id.tokenId,
                    name: nft.metadata.name,
                    description: nft.metadata.description,
                    image: nft.metadata.image,
                    attributes: nft.metadata.attributes,
                };
            }).filter(Boolean);  // Filter out any null values

            res.status(200).json(nfts);
        } else {
            res.status(404).json({ error: 'No NFTs found for this owner from the desired contracts.' });
        }
    } catch (error) {
        console.error("Error fetching data from Alchemy:", error);
        return res.status(500).json({ error: 'Failed to fetch NFT data.' });
    }
};
