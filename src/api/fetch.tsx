export default async function fetchGoods() {
    const response = await fetch('http://localhost:3003/goods', { cache: 'no-store' });
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
}