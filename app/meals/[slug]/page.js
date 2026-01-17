export default async function MealDetailsPage({ params }) {
    const { slug } = await params;
    
    return (
        <main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>Meal Details</h1>
            <p style={{ color: '#ddd', textAlign: 'center' }}>
                Dynamiczny segment URL: <b>{slug}</b>
            </p>
        </main>
    );
}