export default function MealDetailsPage({ params }) {
    return (
        <main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>Meal Details</h1>
            <p style={{ color: '#ddd', textAlign: 'center' }}>
                Dynamiczny segment: <b>{params.someName}</b>
            </p>
        </main>
    );
}