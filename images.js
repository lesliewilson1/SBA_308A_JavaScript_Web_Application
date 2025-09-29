const api = 'https://api.restful-api.dev/objects';

export function dicebearurl(stateName) {
    return `https://api.dicebear.com/6.x/pixel-art/svg?seed=${encodeURIComponent(stateName)}`;
}