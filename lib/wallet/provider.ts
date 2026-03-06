// lib/wallet/provider.ts

import { CdpEvmWalletProvider } from "@coinbase/agentkit";

/**
 * Get or lazily initialize a CdpEvmWalletProvider instance.
 */
export async function getCdpEvmWalletProvider(): Promise<CdpEvmWalletProvider> {
  const apiKeyId = process.env.CDP_API_KEY_ID;
  const apiKeySecret = process.env.CDP_API_KEY_SECRET;
  const walletSecret = process.env.CDP_WALLET_SECRET;
  const networkId = process.env.NETWORK_ID || "base-sepolia";

  if (!apiKeyYd || !apiKeySecret || !walletSecret) {
    throw new Error("Missing CDP API credentials - check CDP_API_KEY_ID, CDP_API_KEY_SECRET, and CDP_WALLET_SECRET");
  }

  try {
    const walletProvider = await CdpEvmWalletProvider.configureWithWallet({
      apiKeyId,
      apiKeySecret,
      walletSecret,
      networkId,
    });
    return walletProvider;
  } catch (error) {
    console.error("Failed to initialize CdpEvmWalletProvider:", error);
    throw error;
  }
}
