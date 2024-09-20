const assets = import.meta.glob('/src/assets/**/*.{jpg,png,jpeg,gif,pdf,woff,woff2,ttf}', { eager: true });

export const getAssetSrc = (assetPath: string): string => {
  const fullPath = `/src/assets/${assetPath}`;
  const asset = assets[fullPath];

  if (asset && typeof asset === 'object' && 'default' in asset) {
    return (asset as { default: string }).default;
  }

  return '';
};

